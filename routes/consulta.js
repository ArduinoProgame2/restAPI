
import { Router } from "express";
import { showFormularioConsulta , procesaDatosFormulario } from "../controllers/consulta.js";
const consulta = Router();

// Ruta para mostrar el formulario
consulta.get('/consulta', showFormularioConsulta);

// Ruta para procesar el formulario cuando se envía
consulta.post('/submit', procesaDatosFormulario);

export default consulta;


