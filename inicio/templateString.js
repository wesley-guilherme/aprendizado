const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'
const template = `
     Olá
     ${nome}!`
     console.log(concatenacao)
     console.log(template)

// expressoes...

const a = 2
const b = 4
console.log(`a + b = ${a / b}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... cuidado que a letra ficará ${up('maiuscula')}!`)

const lo = texto2 => texto2.toLowerCase()
console.log(`JÁ ESSA DAQUI FICARÁ ${lo('MINUSCULA')}`)