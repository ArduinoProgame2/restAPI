//Configura rutas
import { Router } from "express";
import  { postMensaje, getUsuarios } from "../controllers/users.js"; //getUsuarios  from "../controllers/users.js";

const usuarios = Router();


usuarios.get("/", getUsuarios );

// Ruta POST para '/api'
usuarios.post('/', postMensaje);
//exportar
export default usuarios;