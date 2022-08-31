const moduloA = require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

 http.createServer((res) => {
     const http = require('http')
     res.write('Bom dia')
     res.end()
 }).listen(1080)
 