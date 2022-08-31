function carroMotor() {
    return {
        veiculo: 'Civic',
        motor: '2.0 envenenado'
    }
}
console.log (carroMotor())

function produto (nome, valor) {
    return {
        nome,
        valor,
        desconto: 0.1
    }
}
console.log(produto('Arroz', 45.00))