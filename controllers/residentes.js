import { body, validationResult } from "express-validator";
import Residente from "../models/residente.js";
import bcrypt from "bcryptjs";

// Controlador getResidentes
export const getResidentes = (req, res) => {
	res.render("usuarios", {
		verbo: "get ",
		mensaje: "Controller getResidentes",
		titulo: "Usuarios API Rest",
		nombre: "Ing. Pablo Estrella",
	});
};

export const show_addResidente = (req, res) => {
	//Esta rutina presenta en pantalla el formulario
	res.render("addResidente", {});
};

// Controlador datosResidente
export const datosResidente = async (req, res) => {
    try {
        // Validar errores del formulario
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render('addResidente', {
                errors: errors.array(),
                //datos: req.body, // Mantener los datos ingresados en caso de error de validación
            });
        }

        // Verificar si el email ya existe en la base de datos
        const existeEmail = await Residente.findOne({ email: req.body.email });
        if (existeEmail) {
            return res.status(400).render("addResidente", {
                errorMessage: `El correo ${req.body.email} ya existe en la base de datos.`,
                datos: {
                    ...req.body,
                    password: "" // Asegúrate de que el campo de contraseña no se reenvíe
                }
            });
        }

        // Crear el objeto residente con los datos del formulario
        const datosResidente = req.body;
        const residente = new Residente(datosResidente);

        // Encriptar la contraseña antes de guardar en la base de datos
        const salt = await bcrypt.genSalt(10);
        residente.password = await bcrypt.hash(residente.password, salt);

        // Guardar el nuevo residente en la base de datos
        await residente.save();

        // Si el residente se guarda correctamente, redirigir a newResidente.hbs
        res.render("newResidente", { datosResidente });

    } catch (error) {
        // Manejar otros errores de manera general
        console.error("Error inesperado:", error);
        return res.status(500).render("addResidente", {
            errorMessage: "Ocurrió un error inesperado. Por favor, intenta nuevamente.",
            datos: req.body // Mantener los datos del formulario en caso de error
        });
    }
};

export const putUsuarios = (req, res) => {
	res.render("usuarios", {
		verbo: "put ",
		mensaje: "Controller putUsuarios",
		titulo: "Usuarios API Rest",
		nombre: "Ing. Pablo Estrella",
	});
};
export const deleteUsuario = (req, res) => {
	res.render("usuarios", {
		verbo: "delete ",
		mensaje: "Controller deleteUsuarios",
		titulo: "Usuarios API Rest",
		nombre: "Ing. Pablo Estrella",
	});
};
