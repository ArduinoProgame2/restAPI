// Controlador getUsuarios
export const getUsuarios = (req, res) => {
    res.render("usuarios", {
        verbo: "get ",
        mensaje: "Controller getUsuarios",
        titulo: "Usuarios API Rest",
        nombre: "Ing. Pablo Estrella",
    });
};

export const postUsuarios = (req, res) => {
    res.render("usuarios", {
        verbo: "post ",
        mensaje: "Controller postUsuarios",
        titulo: "Usuarios API Rest",
        nombre: "Ing. Pablo Estrella",
    });
};
export const putUsuarios = (req, res) => {
    res.render("usuarios", {
        verbo: "put ",
        mensaje: "Controller putUsuarios",
        titulo: "Usuarios API Rest",
        nombre: "Ing. Pablo Estrella",
    });
};
export const deleteUsuario = (req, res) => {
    res.render("usuarios", {
        verbo: "delete ",
        mensaje: "Controller deleteUsuarios",
        titulo: "Usuarios API Rest",
        nombre: "Ing. Pablo Estrella",
    });
};
