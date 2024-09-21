import { Schema, model } from 'mongoose';

// Definir el esquema para 'residente'
const residenteSchema = new Schema({
    id_cedula: {
        type: String,
        required: [true, 'El campo Cédula es obligatorio'],
        maxlength: 12 // Limitar a 12 caracteres
    },
    nombre: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Email debe ser único en la base de datos
        match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido'] // Validar formato de email
    },
    password: {
        type: String,
        required: true
    },
    casa: {
        type: String,
        required: true,
        maxlength: 20 // Limitar a 20 caracteres
    },
    celular: {
        type: String,
        required: true,
        maxlength: 15 // Limitar a 15 caracteres
    },
    google: {
        type: Boolean,
        default: false // Valor predeterminado false si no se especifica
    },
    categoria: {
        type: String,
        required: true,
        enum: ['Propietario', 'Inquilino'], // Limitar solo a estos dos valores
        default: 'Propietario' // Valor por defecto si no se especifica
    },
    rol: {
        type: String,
        required: true,
        enum: ['Master', 'Junior'], // Limitar solo a estos dos valores
        default: 'Master' // Valor por defecto si no se especifica
    },
    estado: {
        type: Boolean,
        default: true // Valor predeterminado true si no se especifica
    }
});

// Crear el modelo 'Residente' usando el esquema
const Residente = model('Residente', residenteSchema);

export default Residente;
