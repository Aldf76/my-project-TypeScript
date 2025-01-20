"use strict";
// Uso da variável genérica T
function getFirstElement(arr) {
    return arr[0];
}
const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];
console.log(getFirstElement(numbers)); // 1
console.log(getFirstElement(strings)); // 'a'
function identity(value) {
    return value;
}
console.log(identity(42)); // 42
console.log(identity("Hello")); // "Hello"
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "John" }, { age: 30 });
console.log(result); // { name: 'John', age: 30 }
class Box {
    constructor(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}
const stringBox = new Box("A book");
const numberBox = new Box(123);
console.log(stringBox.getContent()); // "A book"
console.log(numberBox.getContent()); // 123
