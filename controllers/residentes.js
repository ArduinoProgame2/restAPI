
import  Residente  from "../models/residente.js";


// Controlador getResidentes
export const getResidentes = (req, res) => {
    res.render("usuarios", {
        verbo: "get ",
        mensaje: "Controller getUsuarios",
        titulo: "Usuarios API Rest",
        nombre: "Ing. Pablo Estrella",
    });
};

export const show_addResidente= (req, res) => {
    //Esta rutina presenta en pantalla el formulario
    res.render("addResidente", {
       
    });
};
export const datosResidente = async (req, res) => {
    //Esta rutina procesa los datos del formulario
    const datosResidente = req.body; // Capturar los datos del formulario
    const residente = new Residente(datosResidente);

    // Guardar el objeto residente en la base de datos
    await residente.save();

    // Añadir propiedades adicionales al objeto
    // datosResidente.google = false; // Propiedad google: false
    // datosResidente.estado = true;  // Propiedad estado: true
    // Redirigir a la vista usuarios.hbs con los datos capturados
    res.render('newResidente', { datosResidente });
    console.log(datosResidente);
}
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
