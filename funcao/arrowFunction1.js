let dobro = function (a) {
    return 2 * a
}

dobro2 = (a) => {
    return 2 * a 
}
console.log(dobro2(25))


dobro3 = a => 2 * a // return implícito
console.log(dobro3(Math.PI))

ola = () => 'Olá, FDP'
console.log(ola())
ola = _ => 'Olá'
console.log(ola())