Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
     return newArray
}



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
    
    const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
    console.log(resultado2)

  //  Array.prototype.forEach2 = function(callback) {
    //    for (let i = 0; i < this.length; i++) {
      //      callback(this[i], i, this)
      //  }
    //}