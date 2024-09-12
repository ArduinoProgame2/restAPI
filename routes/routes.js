//Configura rutas

const express = require('express');
const router = express.Router();
const server = require('../server');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid'); 

