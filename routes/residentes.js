import { Router } from "express";
 import { getResidentes, show_addResidente, datosResidente,putUsuarios, deleteUsuario } from "../controllers/residentes.js";
// Importar el objeto exportado por defecto
const usuarios = Router();


usuarios.get("/consulta", getResidentes );

// Ruta para mostrar el formulario de AddResidente
usuarios.get('/addResidente', show_addResidente);
// Ruta para procesar el formulario y redirigir a usuarios.hbs
usuarios.post('/addResidente', datosResidente);
//Ruta PUT para '/api'
usuarios.get('/put', putUsuarios);

// Ruta DELETE para '/api'
usuarios.get('/delete', deleteUsuario);

//exportar
export default usuarios;