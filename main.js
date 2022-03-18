
// let data = new Array(5).fill(null);
// Object.preventExtensions(data);
// data.fill("Miguel", 4);
function saldar() {
    return "Hola Como estas";
}
let data = {
    nombre: "Miguel",
    apellido : "Castro",
    edad: 23,
    saldar
}

let datos = Object.entries(data).map(function(elemt){
    let obj = {};
    if(typeof(elemt[1]) == "function"){
        obj.saludar = data.saldar();
    }else{
        if(elemt[0] == "nombre"){
            obj[elemt[0]] = `${elemt[1].toUpperCase()} Angel`;
        }else{
            obj[elemt[0]] = elemt[1];
        }
    }
    return obj;
})

console.log(data);
console.log(Object.assign({}, ...datos) );



