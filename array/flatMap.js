const escola = [{
    nome: 'Turma M1',
    alunos: [{
        estudante: 'Gustavo',
        nota: 8.1
    },  {
        estudante: 'Ana',
        nota: 9.3
    },  {
        estudante: 'Olaff',
        nota: 5.5    
    }]
},  { 
    nome: 'Turma M2',
    alunos: [{
        estudante: 'Rebeca',
        nota: 8.9
    },  {
        estudante: 'Roberto',
        nota: 7.3 
    }]
}]

const getDados = dados => dados.estudante
const getDados2 = info => info.alunos.map(getDados)
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma =>turma.alunos.map(getNotaDoAluno)


const notas1 = escola.map(getNotasDaTurma)
const info2 = escola.map(getDados2)
console.log(notas1)
console.log(info2)

console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotasDaTurma)
const nota3 = escola.flatMap(getDados2)
console.log(nota2)
console.log(nota3)

