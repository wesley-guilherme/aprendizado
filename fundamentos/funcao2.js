//Armazenando uma funcao em uma variavel
const imprimirDivisao = function (a,b){
    console.log(a/b)
}
imprimirDivisao(2,3)

//Armazenando uma funcao arrow em uma variavel

const divisao = (a,b = 10+10) => {
    return a/b
}
console.log(divisao(10,2))
console.log(divisao(2))

// retorno implícito
const subtracao = (a,b) => a-b
console.log(subtracao(20,100))

const imprimir2 = a => console.log(a)
imprimir2(' Eu Vou ser um DEV com FÉ em Deus ')