class Pessoas {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e nasci em ${this.anoNascimento}`)
    }
}

function idadePessoas (p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que ${p2.nome}`)
    }
    else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha que ${p1.nome}`)
    }
    else {
        console.log('Ambos são da mesma idade')
    }
}
const mariza = new Pessoas('Mariza', 20)
const alexandre = new Pessoas('Alexandre', 15)
idadePessoas(mariza, alexandre)

