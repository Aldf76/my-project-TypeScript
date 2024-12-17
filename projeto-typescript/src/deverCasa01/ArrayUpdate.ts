//2) Crie no arquivo do index.ts 3 arrays com tipos diferentes,
//  sendo um de tipo de um objeto personalizável, exemplo: People, Animal e etc.

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let times: string[] = ["Flamengo", "Botafogo", "Palmeiras", "Santos", "Sao Paulo"];

interface Pessoa  {
    id: number,
    nome: string,
    idade: number,
    cpf: number
}

let pessoas: Pessoa[] = [
{id: 1, nome: "Jamille", idade: 24, cpf: 123456789},
{id: 2, nome: "Emerson", idade: 18, cpf: 987654321},
{id: 3, nome: "Jurandir", idade: 45, cpf: 456789123}

];

/* 
O QUE TORNA UM ARRAY PERSONALIZÁVEL E OUTRO NÃO ?

Temos dois arrays primitivos aqui: numeros e times.
Esses armazenam valores básicos e imutáveis da linguagem como números e textos. Sua 
"personalização" se resume em escolher a quantidade e valores dos elementos. Porém, sua estrutura é física.

Já o array de objetos Pessoa[] está armazenando objetos que são estruturas
mais complexas definidas por um tipo, como a interface. Essa interface funciona como um contrato no qual
especificamos os elementos que vão compor o Objeto Pessoa. A maior
personalização desse exemplo está justamente na capacidade de modificarmos esse contrato por meio da 
interface Pessoa. Posso aidicionar novos atributos, remover atributos, mudar o valor de um atributo, etc.

*/