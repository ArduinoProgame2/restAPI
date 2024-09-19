
const showFormularioConsulta = (req, res) => {
	res.render("consulta", {
		
	})
}

const procesaDatosFormulario = (req, res) => {
    const { nombre, correo, password, apikey } = req.body;

    // Puedes procesar los datos aquí según tu lógica de negocio
    const message = `Datos recibidos correctamente. Nombre: ${nombre}, Correo: ${correo}, Password: ${password}, API Key: ${apikey}`;
    
    // Si se recibieron correctamente, los pasamos a la vista
    res.render('consulta', {
        message: {
            name: nombre,
            email: correo,
            password: password,
            apikey: apikey
        }
    });
}

export { showFormularioConsulta, procesaDatosFormulario }
