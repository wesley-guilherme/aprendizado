const carrinho = [
'{"nome": "Borracha", "preco": 3.45}',
'{"nome": "Caderno", "preco": 13.90}',
'{"nome": "Lapis", "preco": 41.22}',
'{"nome": "Caneta", "preco": 7.50}',
]

let resultado = carrinho.map(function(e){
        return e = ("preco")
})

console.log(resultado)

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)