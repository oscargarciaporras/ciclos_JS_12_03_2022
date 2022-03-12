

let data = new Array(5).fill(null);
Object.preventExtensions(data);
data[4] = "Miguel";
console.log(data);

console.log("Indice");
for(let i in data){
    console.log(`${i}.`);
}
console.log("Valor");
for(let v of data){
    console.log(`${v}`);
}
console.log("Indice y Valor");
for(let [indice,valor] of Object.entries(data)){
    console.log(`${indice} = ${valor}`);
}

