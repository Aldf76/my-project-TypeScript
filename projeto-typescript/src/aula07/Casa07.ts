/*
ALGORITMO DO DEVER 

1. Criar uma interface chamada Shape:
Definir um método abstrato chamado calculateArea que retorna um número (number).
===============================
2. Criar a classe Circle:
Adicionar um construtor que recebe o raio (radius) como parâmetro.
Implementar o método calculateArea:
Retornar Fórmula para a área: area = 𝜋 × (radius^2)
==============================
3. Criar a classe Rectangle:
Adicionar um construtor que recebe largura (width) e altura (height) como parâmetros.
Implementar o método calculateArea:
Retornar Fórmula para a área: area=width×height.
==============================
4. Criar a classe Triangle:
Adicionar um construtor que recebe a base (base) e a altura (height) como parâmetros.
Implementar o método calculateArea:
Fórmula para a área:  area= 0.5× base × height.
==============================
5. Criar a função printArea:
Receber um array de objetos do tipo Shape como parâmetro.
Para cada objeto no array:
Chamar o método calculateArea para calcular a área.
Imprimir a área no console.
==============================
6. Testar a função com instâncias das classes:
Criar instâncias de Circle, Rectangle e Triangle com valores específicos.
Inserir as instâncias em um array de objetos do tipo Shape.
Chamar a função printArea passando o array como argumento.

*/
interface Shape { // declaro a interface
    calculateArea(): number; // declaro o método abstrato 
}

class Circle implements Shape {
    constructor(public radius: number) { }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle implements Shape {
 constructor(public width: number, public height: number ) {}
  calculateArea(): number {
      return this.width * this.height;
  }
}

class Triangle implements Shape {
    constructor ( public base: number , public height: number ) {} // adicionar construtor com propriedades que vão ser usadas na fórmula
    calculateArea(): number { // chama o método abstrato da interface
        return 0.5 * this.base * this.height;   } // retorna a fórmula da área
}

function printArea(shapes: Shape[]): void { // estabelecemos o array ( shapes : Shape[]) void indica que a função não retorna nenhum valor 
    for (const Shape of shapes) {  // " para cada elemento( shape ) do array shapes"
        console.log(Shape.calculateArea()); // imprimir a área no console
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(3, 4),
    new Triangle(2, 6)
];

printArea(shapes);

