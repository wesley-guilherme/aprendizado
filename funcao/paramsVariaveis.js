function soma() {
    let soma = 0 
    for (i in arguments) {
        soma += arguments [i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,5,6))
console.log(soma(5.5,5.8,10.8, " É o resultado"))