import { Router } from "express";
import { inicio, elements, generic, restAPI } from "../controllers/paginas.js";
const paginas = Router();

paginas.get("/", inicio );

paginas.get("/elements", elements);
paginas.get("/generic", generic);
paginas.get("/rest", restAPI);

export default paginas;
