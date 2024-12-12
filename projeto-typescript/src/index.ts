const add = (a: number, b: number): number => {
    return a + b;
}

const num1= 15;
const num2 = 10;

const result = add(num1,num2);

console.log(`A soma de ${num1} e ${num2} é: ${result}`);

interface Pessoa  {
    nome: String,
    idade: Number | null,
    peso: String,
    isStudent: boolean
}

const Felipe: Pessoa = {
    nome: 'Felipe',
    idade: 30,
    peso: '97kg',
    isStudent: false
}
const Mariana: Pessoa = {
    nome: "Mariana",
    idade: null,
    peso: "70kg",
    isStudent: true
}

console.log(Mariana);
