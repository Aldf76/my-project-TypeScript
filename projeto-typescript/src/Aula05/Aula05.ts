/*
enum AgeCategory {
    CRIANCA = "Criança",
    ADOLESCENTE = "Adolescente",
    ADULTO = "Adulto",
    IDOSO = "Idoso",
}

function categorizeAge(age: number): AgeCategory {
    if (age <= 12) {
        return AgeCategory.CRIANCA;
    } else if (age > 12 && age <= 17) {
        return AgeCategory.ADOLESCENTE;
    } else if (age > 18 && age <= 64) {
        return AgeCategory.ADULTO;
    } else {
        return AgeCategory.IDOSO;
    }
}

console.log(categorizeAge(5));
console.log(categorizeAge(15));
console.log(categorizeAge(25));
console.log(categorizeAge(65));
*/


/*
function mergeArrays<T>(...arrays: T[][]): T[] {
    
    return arrays.flat();  // concatena elementos
}

//números
const Numbers = mergeArrays<number>([1, 2, 3], [4, 5, 6]);
console.log(Numbers); // saída esperada [1, 2, 3, 4, 5, 6]

//strings
const Strings = mergeArrays<string>(["a", "b", "c"], ["d", "e", "f"]);
console.log(Strings); // saída esperada ["a", "b", "c", "d", "e", "f"]

            // recebe   //tipo parametro  //tipo retorno
// function merge<T, U>(obj1: T, obj2: U): T & U {
//   return { ...obj1, ...obj2 };
// }
 
*/

function greetUser(name: string, greeting?: string ): string {
    return `${greeting}, ${name}!`;
}

console.log(greetUser("João"));
console.log(greetUser("Maria", "Seja bem vinda"));
