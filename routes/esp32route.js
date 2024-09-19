//Configura rutas
import { Router } from "express";
import   esp32metodo  from "../controllers/esp32.js"; 
const esp32 = Router();


// Ruta metodo para '/esp32'
esp32.get("/", esp32metodo);
//exportar
export default esp32;