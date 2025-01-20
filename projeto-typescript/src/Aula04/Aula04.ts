// Uso da variável genérica T

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];


console.log(getFirstElement(numbers)); // 1
console.log(getFirstElement(strings)); // 'a'


function identity<T>(value: T): T {
    return value;
}

console.log(identity<number>(42)); // 42
console.log(identity<string>("Hello")); // "Hello"

function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const result = merge({ name: "John"}, { age: 30 });
console.log(result); // { name: 'John', age: 30 }

class Box<T> {
    private content: T;

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

const stringBox = new Box<string>("A book");
const numberBox = new Box<number>(123);

console.log(stringBox.getContent()); // "A book"
console.log(numberBox.getContent()); // 123