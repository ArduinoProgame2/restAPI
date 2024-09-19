

const inicio = (req, res) => {
	res.render("home", {
		nombre: "Ing.Pablo Estrella",
		titulo: "Road Trip",
	})
};

const elements = (req, res) => {
	res.render("elements", {
		nombre: "Ing.Pablo Estrella",
		titulo: "Road Trip",
	});
}
const generic = (req, res) => {
	res.render("generic", {
		nombre: "Ing.Pablo Estrella",
		titulo: "Road Trip",
	});
}
const restAPI = (req, res) => {
	res.render("rest", {
		//nombre: "Ing.Pablo Estrella",
		//titulo: "Road Trip",
	});
}
/*Nota ES6 permite solamente una funcion exportar como default al importar no usar {} 
  Si quiere exportar otras caracteristicas como constantes, variables
  o clases, es necesario exportarlas dentro de {} ejemplo :
  export { name, draw, reportArea, reportPerimeter }; 
  Consultar para mas informacion : https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules*/

  export { inicio, elements, generic, restAPI }