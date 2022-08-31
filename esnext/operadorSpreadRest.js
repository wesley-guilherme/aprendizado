// operador ...rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com Array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'rAFA']
console.log(grupoFinal)