
let papitas = 10;

console.group("Ciclo 1");
while(papitas){
    console.log(`Me comi ${papitas} papitas`);
    papitas--;
}
console.groupEnd();
console.group("Ciclo 2");
while(papitas <= 10){
    console.log(`Me comi ${papitas} papitas`);
    papitas++;
}
console.groupEnd();
