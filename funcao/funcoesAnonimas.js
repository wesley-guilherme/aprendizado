const soma = function (x,y) {
    return x+y
}

//console.log(soma(9,9))

const imprimirResultado = function (a,b, operacao = soma) {
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function(x,y) {
    return x-y
})
imprimirResultado(3,4,(x,y) => 'O valor é ' + x*y)

const pessoa = { 
    falar: function () {
        console.log('o PAÍ Ó')
    
  
    }  
}   
    

pessoa.falar()