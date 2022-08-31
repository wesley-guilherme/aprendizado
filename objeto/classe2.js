class Avo {
    constructor(sobrenome = 'Guilherme', profissao = 'Marceneiro') {
        this.sobrenome = sobrenome
        this.profissao = profissao
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Avo {
    constructor () {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)
