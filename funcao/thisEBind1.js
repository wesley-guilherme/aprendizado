const pessoa = {
    saudacao: 'Bom Dia Senhor Wesley',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar.bind(pessoa)
falar2()