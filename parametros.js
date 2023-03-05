// parâmetros de função

               //2         //2 
function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2))
console.log(soma(235, 45))
console.log(soma(-500, 60))

// parâmetro x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                        //9             //6
//console.log(multiplica(soma(4, 5), soma (3, 3)))

                        //9
console.log(multiplica(soma(4, 5)))