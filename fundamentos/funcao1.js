// Funcao sem retorno
function imprimirSoma(a,b,c){
    console.log(a*b-c)
}

imprimirSoma(15,15,50)

//Funcao com retorno

function soma(a= 10/2, b= 4-2) {
    return a*b
}

console.log(soma(5,5))
console.log(soma(4))
console.log(soma())