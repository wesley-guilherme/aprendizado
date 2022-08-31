function soBoaNoticia(nota) {
    if(nota >=7) {
         console.log('Aprovado com ' + nota)

    } 
}

soBoaNoticia(8.1)
soBoaNoticia(6.2)



function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade ' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo('?')