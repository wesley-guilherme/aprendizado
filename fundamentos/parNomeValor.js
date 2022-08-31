//par nome valor

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'
    return saudacao
}

function exec2() {
    const saudacao = 'Tudo Bem'
    return saudacao
}



// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Wesley Guilherme',
    idade: '34',
    peso: '90',
    cpf: '02617690571',
    endereco: {
        logradouro: 'Rua Carlos Gomes',
        numero: '293',
    inforSaude: {
        tipo: 'AB',
        alergia: 'NAO'
    }
 }

}

const {nome} = cliente

console.log(saudacao)
console.log(exec())
console.log(exec2()); console.log('Meu Amigo' ,nome)
console.log(cliente)
