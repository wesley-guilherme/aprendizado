const [a] = [10]
console.log(a)

const [n1, n2 , n3, , n5, n6 = 0] = [10, 7, 9,8]
console.log(n1, n2, n3, n5)

const [, [, nota1, nota2]] = [[, 8, 8], [9, 6, 8]]
console.log(nota1, nota2)