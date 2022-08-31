const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Olaff'
console.log(pessoa)