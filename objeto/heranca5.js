console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola Cod3'.reverse())

Array.prototype.second = function() {
    return this[1]
}
console.log([1,2,3,4,5].second())
console.log(['a','b','c'].second())

String.prototype.toString = function () {
    return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse())