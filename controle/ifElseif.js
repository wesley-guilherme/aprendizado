Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const imprimirResultado = function (nota) {
    if (nota.entre(9,10)) {
        console.log('O Pivete Brocou, EXQUEÇA!!!!')
    } else if(nota.entre(7, 8.99)) {
        console.log('Você é Barril, só vem final de ano')
    } else if (nota.entre(5, 6.99)) {
        console.log('Caramba, passou na Xêpa Hein Paeh')        
    } else if (nota.entre(3, 4.99)) {
        console.log('Que nota é essa desgraça, tô ligado que foi o curso todo indo pra reggae')
    } else if (nota.entre(0, 2.99)) {
        console.log('Você é burro pra caralho os véi vai te quebrar no pau')
    } else {
        console.log('Seu Burro, Você Num tá vendo que a nota é somente entre 0 a 10')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(1.3)
imprimirResultado(11)
