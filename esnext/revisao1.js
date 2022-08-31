// let e const
{
    var a = 2
    let b = 3
    console.log(b) // o var não tem escopo de bloco. O let tem escopo de bloco é preciso está 
    //dentro do escopo seu console
}
console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} 
é
caro!` )

//Destruturing
const [l, e, ...tras] = "Cod3rei"
console.log(l,e, tras)

const [x,y, ] = [1,2,3]
console.log(x,y, )

const { nome : n , idade : i} = {nome:'Iza', idade: 16}
console.log(`nome:${n} idade:${i}`)
