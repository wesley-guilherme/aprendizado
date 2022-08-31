const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const lugar = func => func.pais === 'China'
const se = sexo => sexo.genero === 'F'
const ms = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
    .filter(lugar)
    .filter(se)
    .reduce(ms)  
    
    console.log(func)

})

