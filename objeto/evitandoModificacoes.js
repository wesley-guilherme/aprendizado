//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'Promoção', marca: 'Toro'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
console.log(pessoa)


pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
pessoa.nome = 'Juca'
console.log(pessoa)

