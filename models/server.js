import express from 'express'; // const express = require('express');
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs';
import cors from 'cors'; // const cors = require('cors');
import dotenv from 'dotenv';
import residentes  from '../routes/residentes.js';
import  connectDB  from '../database/config.js';


// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {};
        //conectar a base de datos
        this.conectarDB();

       // Configuración del motor de vistas
        this.config();
    
        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();

        }
        // Conectar a base de datos
        async conectarDB(){
            await connectDB();
        };
            config() {
                // Establecer el motor de vistas como 'hbs'
                this.app.set('view engine', 'hbs');
                                
                // Establecer la carpeta de las vistas
                this.app.set('views', path.join(__dirname, '../views'));
            
                // Registrar los parciales de handlebars si usas parciales
                hbs.registerPartials(path.join(__dirname, '../views/partials'));
              }
            
    middlewares() {

        // CORS
        this.app.use(cors());   

        // Directorio publico
        this.app.use(express.static('public'));
        // Middleware para procesar datos de formularios POST (URL encoded)
        this.app.use(express.urlencoded({ extended: true }));
        // Middleware para manejar JSON en el cuerpo de las solicitudes
        this.app.use(express.json());
    }
    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use('/', residentes);
       // Ruta para AddResidente.html que renderiza desde la carpeta 'views'
        this.app.get('/addResidente', (req, res) => {
            res.render('addResidente');  // Renderiza el archivo AddResidente.html o AddResidente.ejs desde la carpeta 'views'
        });
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}   

export default Server;
