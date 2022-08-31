const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bias'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['rAFAEL', 'aNA', 'Bia']
console.log(quaseArray.toString(), meuArray)

