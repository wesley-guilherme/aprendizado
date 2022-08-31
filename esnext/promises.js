function falarDepoisde(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        },segundos * 1000)
    })
}

falarDepoisde(3, 'Que legal')
.then(frase => frase.concat('?!?'))
.then(frase => frase.concat('Estou aprendendo a programar'))
.then(outraFrase => console.log(outraFrase))