multiplicando:
for (let i = 1; i <= 50; i++) {
    console.log(`%cTabla del ${i}`,"color:red;");
    multiplicador:
    for (let x = 1; x <= 10; x++) {
        let resultado = i*x;
        if(resultado%2==0){
            console.log(`${i} x ${x} = Numero par`);
            continue multiplicador;
        }
        console.log(`${i} x ${x} = ${resultado}`);
    }
}


