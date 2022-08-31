const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log('Brocou ')
            break
        case 8: case 7:
            console.log('Só vem final de ano')
            break
        case 6: case 5:
            console.log('Tente de novo que agora o pivete broca')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Se fudeu, vai dormir de couro quente, PAEH')
            break
        default:
            console.log('Aí vocÊ me quebra, man')
    } 
}

imprimirResultado(10)
imprimirResultado(-11)
imprimirResultado(4)