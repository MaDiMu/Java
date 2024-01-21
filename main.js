
const lista=[];

let nombre = prompt("ingrese su nombre");
alert("bienvenido " + nombre + " Hagamos la lista!");
let agregarmas = true;
while (agregarmas) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos a agregar"));
    for (let i = 1; i <= cantidad; i++) {
        let producto = prompt("Ingrese el producto");
        lista.push(producto);
    }
    let modificarLista = confirm(nombre + ", ¿quieres modificar la lista?");
    if (!modificarLista) {
        agregarmas = false;
    }
}

console.log("Lista de compras:");
console.log(lista);
