Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total - valor
const nums = [10,15,23,35,45,89]
console.log(nums.reduce2(soma))