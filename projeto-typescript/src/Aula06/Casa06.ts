class Personagem {
    nome: string;
    nivel: number;
    vida: number;
    constructor(nome: string, nivel: number, vida: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
    }
}

interface HeavyAttack {
    ataquePesado(): void
}

interface Escape {
    evasao(): void
}

interface SummonDead {
    invocarMortoVivo(): void
}

interface Heal {
    curar(): void
}


function HeavyAttack<TBase extends new (...args: any[]) => any>(Base: TBase) {
    return class extends Base implements HeavyAttack {
        ataquePesado(): void {
            console.log(` O ${this.nome} pode usar ataque pesado`);
        }
    }
}

function Heal<TBase extends new (...args: any[]) => any>(Base: TBase) {
    return class extends Base implements Heal {
        curar(): void {
            console.log(`O ${this.nome} pode curar si mesmo e outros do grupo`);
        }
    }
}

function Escape<TBase extends new (...args: any[]) => any>(Base: TBase) {
    return class extends Base implements Escape {
        evasao(): void {
            console.log(` O ${this.nome} pode usar evasão`);
        }
    }
}

function SummonDead<TBase extends new (...args: any[]) => any>(Base: TBase) {
    return class extends Base implements SummonDead {
        invocarMortoVivo(): void {
            console.log(` O ${this.nome} pode invocar morto vivo`);
        }
    }
}


class Guerreiro extends HeavyAttack(Personagem){}
class Ladino extends Escape(Personagem){}
class Bruxo extends SummonDead(Personagem){}
class Cavaleiro extends HeavyAttack(Heal(Personagem)){}
class Bardo extends Heal(Escape(Personagem)){}
class CavaleiroNegro extends HeavyAttack(Heal(SummonDead(Personagem))){}

const cavaleiro = new Cavaleiro("Timothy", 1, 100);
cavaleiro.ataquePesado();
cavaleiro.curar();

const cavaleiroNegro = new CavaleiroNegro("Edward", 27, 8000);
cavaleiroNegro.ataquePesado();
cavaleiroNegro.invocarMortoVivo();
cavaleiroNegro.curar();


const ladino = new Ladino("Bruce, a Lâmina", 1, 100);
ladino.evasao();

const bruxo = new Bruxo("Cage, o Nicolas", 1, 100);
bruxo.invocarMortoVivo();

const guerreiro = new Guerreiro("Draugr", 1, 100);
guerreiro.ataquePesado();

const bardo = new Bardo("Leonard", 1, 100);
bardo.curar();
bardo.evasao();

































/*
Algoritmo para realizar esse dever

1) Criar um apply mixin
2) Criar a classe Personagem com atributos básicos como:
nome,nível,vida.
3) Criar interfaces com os poderes que poderão ser implementados nos personagens como:
Ataque pesado, Evasão, Invocar morto-vivo.





function applyMixin(derivedCtor: any, baseCtors: any[]): void {
    baseCtors.forEach(baseCtor => {
        // Verificar métodos e propriedades no prototype
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            // Evitar conflitos de nomes
            if (derivedCtor.prototype[name]) {
                console.warn(`Conflito detectado: '${name}' já existe em '${derivedCtor.name}'. Será sobrescrito.`);
            }
            // Copiar método ou propriedade
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });

        // Inicializar propriedades diretamente no construtor do derivado
        Object.getOwnPropertyNames(baseCtor).forEach(staticName => {
            if (!derivedCtor.hasOwnProperty(staticName)) {
                derivedCtor[staticName] = baseCtor[staticName];
            }
        });
    });
}

class Personagem {
    nome: string;
    nivel: number;
    vida: number;
    constructor(nome: string, nivel: number, vida: number) {
        this.nome = nome;
        this.nivel = nivel;
        this.vida = vida;
    }
}

class Cavaleiro extends Personagem {

    ataquePesado(): void {
        console.log(` O personagem ${this.nome} é um cavaleiro e pode usar ataque pesado`);
    }
}

class Ladino extends Personagem {    
    evasao(): void {
        console.log(` O personagem ${this.nome} é um ladino e pode usar evasão`);
    }
}

class Bruxo extends Personagem {
    invocarMortoVivo(): void {
        console.log(` O personagem ${this.nome} é um bruxo e pode invocar morto vivo`);
    }
}
/*
const cavaleiro = new Cavaleiro("Thorin, escudo de Aço", 1, 100);
cavaleiro.ataquePesado();
const ladino = new Ladino("Bruce, a Lâmina", 1, 100);
ladino.evasao();
const bruxo = new Bruxo("Cage, o Nicolas", 1, 100);
bruxo.invocarMortoVivo();




applyMixin(Cavaleiro, [Personagem]);
const person = new Cavaleiro("Thorin, escudo de Aço", 1, 100);
person.ataquePesado();
applyMixin(Ladino, [Personagem]);
const felipe =new Ladino("Bruce, a Lâmina", 1, 100);
felipe.evasao();
applyMixin(Bruxo, [Personagem]);
const Elenna = new Bruxo("Cage, o Nicolas", 1, 100);    
Elenna.invocarMortoVivo();
*/