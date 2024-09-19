

const getUsuarios = (req, res) => {
	res.render("rest", {
		verbo: "get Usuarios",
		mensaje: "Controller users.js",
        titulo: "Road Trip",
        nombre: "Ing. Pablo Estrella",
	})
}
 const postMensaje = (req, res) => {
  const { correo, password } = req.body;
  
  // Lógica para procesar el correo y la contraseña
  // Por ejemplo, verificar credenciales

  // Responder con un objeto JSON incluyendo correo y password
  res.json({ 
    success: true,
    message: 'Datos recibidos correctamente',
    data: {
        correo: correo,
        password: password
    }
});
}
export { getUsuarios, postMensaje }; 
