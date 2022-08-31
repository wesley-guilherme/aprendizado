const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    
}))

const valorizado = produto=> produto.preco >= 2000
const fragillizado = cuidado=> cuidado.fragil

resultado3 = produtos.filter(valorizado).filter(fragillizado)
console.log(resultado3)