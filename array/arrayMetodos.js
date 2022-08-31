const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Maassa']
pilotos.pop() // massa quebrou o carro comando que usou para tirar o último da lista
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicoinar e remover elementos

//adicionar
pilotos.splice(2,0, 'Bottas', 'Massa' )
console.log(pilotos)

//remover
pilotos.splice(3,1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(3)
console.log(algunsPilotos2)