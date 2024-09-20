import { Router } from "express";
 import { getUsuarios, postUsuarios, putUsuarios, deleteUsuario } from "../controllers/usuarios.js";
// Importar el objeto exportado por defecto
const usuarios = Router();


usuarios.get("/", getUsuarios );

// Ruta POST para '/api'
usuarios.get('/post', postUsuarios);

//Ruta PUT para '/api'
usuarios.get('/put', putUsuarios);

//Ruta PUT para '/api'
usuarios.get('/put', putUsuarios);

// Ruta DELETE para '/api'
usuarios.get('/delete', deleteUsuario);

//exportar
export default usuarios;