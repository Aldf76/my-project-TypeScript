class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    cumprimentar(): string {
        return `Ola, meu nome e ${this.nome} e eu tenho ${this.idade} anos`;
    }

}

//const pessoa = new Pessoa("Jasmine", 23);
//console.log(pessoa.cumprimentar());

class Funcionario extends Pessoa {

    cargo: string;

    constructor(nome: string, idade: number, cargo: string) {
        super(nome, idade); // chamando o construtor da classe base
        this.cargo = cargo;
    }

/*descreverCargo(): string {
    return `Meu nome é ${this.nome} e meu cargo é ${this.cargo}`
}

*/
Fcumprimentar(): string {
    return `Ola, meu nome e ${this.nome}, sou ${this.cargo} e eu tenho ${this.idade} anos`;
}
}

//polimorfismo ?
const humano = new Funcionario("Jasmine", 23, "Gerente");
console.log(humano.cumprimentar());
console.log(humano.Fcumprimentar());


