import React from "react";

export const JsCheats = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">JavaScript Cheatsheet</h1>

      {/* Variables Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">1. Змінні (Variables)</h3>
        <p className="mb-2">Змінні використовуються для збереження значень у пам'яті.</p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`let x = 10; // Змінна, значення якої можна змінювати
const y = 20; // Змінна, значення якої не можна змінювати
var z = 30; // Застаріле, не рекомендується використовувати`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання змінних:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let name = "Олексій";
console.log(name); // Олексій`}
          </div>
        </div>
      </div>

           {/* Operators Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">2. Оператори (Operators)</h3>
        <p className="mb-2">
          Оператори використовуються для виконання операцій над значеннями.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Арифметичні оператори
let sum = 10 + 5; // 15
let diff = 10 - 5; // 5
let prod = 10 * 5; // 50
let div = 10 / 5; // 2

// Оператори порівняння
let isEqual = 5 == 5; // true
let isNotEqual = 5 != 3; // true
let isGreaterThan = 5 > 3; // true

// Логічні оператори
let isTrue = true && false; // false
let isFalse = true || false; // true`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання операторів:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let a = 10;
let b = 5;
let result = a > b ? "A більше за B" : "B більше за A";
console.log(result); // "A більше за B"`}
          </div>
        </div>
      </div>
      {/* Functions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">3. Функції (Functions)</h3>
        <p className="mb-2">
          Функції використовуються для виконання конкретних дій або обчислень, що можуть бути повторно використані.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення функції
function greet(name) {
  return "Привіт, " + name;
}

// Стрілкова функція
const sum = (a, b) => a + b;`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання функцій:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4);
console.log(result); // 12`}
          </div>
        </div>
      </div>
      {/* Loops and Conditions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">4. Цикли та умови (Loops and Conditions)</h3>
        <p className="mb-2">
          Цикли використовуються для багаторазового виконання одного й того ж коду. Умови дозволяють приймати рішення.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Умова if
let x = 10;
if (x > 5) {
  console.log("x більше за 5");
}

// Цикл for
for (let i = 0; i < 5; i++) {
  console.log(i); // Виведе 0, 1, 2, 3, 4
}

// Цикл while
let j = 0;
while (j < 5) {
  console.log(j); // Виведе 0, 1, 2, 3, 4
  j++;
}`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання циклів і умов:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " є парним");
  } else {
    console.log(numbers[i] + " є непарним");
  }
}`}
          </div>
        </div>
      </div>
      {/* Arrays Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">5. Масиви (Arrays)</h3>
        <p className="mb-2">
          Масиви використовуються для зберігання кількох значень в одній змінній.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення масиву
let fruits = ['яблуко', 'банан', 'апельсин'];

// Доступ до елементів масиву
let firstFruit = fruits[0]; // 'яблуко'

// Додавання елемента
fruits.push('груша'); // ['яблуко', 'банан', 'апельсин', 'груша']

// Видалення елемента
fruits.pop(); // ['яблуко', 'банан', 'апельсин']`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання масивів:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num); // Виведе 1, 2, 3, 4, 5
}`}
          </div>
        </div>
      </div>
      {/* Objects Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">6. Об'єкти (Objects)</h3>
        <p className="mb-2">
          Об'єкти використовуються для зберігання колекцій різних значень у вигляді пар "ключ-значення".
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення об'єкта
let person = {
  name: 'Іван',
  age: 30,
  greet: function() {
    return 'Привіт, ' + this.name;
  }
};

// Доступ до значення через ключ
let name = person.name; // 'Іван'

// Виклик методу
let greeting = person.greet(); // 'Привіт, Іван'`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання об'єкта:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
  displayInfo: function() {
    return \`Автомобіль: \${this.make} \${this.model} \${this.year}\`;
  }
};
console.log(car.displayInfo()); // 'Автомобіль: Toyota Corolla 2020'`}
          </div>
        </div>
      </div>
      {/* Functions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">7. Функції (Functions)</h3>
        <p className="mb-2">
          Функції дозволяють виконувати набір дій, які можна викликати кілька разів. Функції можуть приймати параметри та повертати значення.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення функції
function greet(name) {
  return 'Привіт, ' + name;
}

// Виклик функції
let message = greet('Іван'); // 'Привіт, Іван'`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання функції:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Функція без параметрів
function sayHello() {
  console.log('Привіт, світ!');
}
sayHello(); // Виведе 'Привіт, світ!'

// Функція з параметрами
function add(a, b) {
  return a + b;
}
let result = add(2, 3); // 5`}
          </div>
        </div>
      </div>
      {/* Error Handling Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">8. Обробка помилок (Error Handling)</h3>
        <p className="mb-2">
          Обробка помилок в JavaScript дозволяє ефективно справлятися з помилками та запобігати їхньому впливу на виконання програми.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Використання try...catch для обробки помилок
try {
  let result = someNonExistentFunction(); // Це викличе помилку
} catch (error) {
  console.error('Щось пішло не так:', error);
}

// Використання finally (блок виконується незалежно від того, чи була помилка)
try {
  let result = 10 / 0; // Помилка не виникне
} catch (error) {
  console.error('Помилка:', error);
} finally {
  console.log('Цей блок завжди виконується');
}`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання обробки помилок:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`function divide(a, b) {
  if (b === 0) {
    throw new Error('Ділення на нуль неможливе');
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message); // 'Ділення на нуль неможливе'
}`}
          </div>
        </div>
      </div>
      {/* Arrays Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">9. Масиви (Arrays)</h3>
        <p className="mb-2">
          Масиви дозволяють зберігати кілька значень у одній змінній. Масиви можуть містити елементи будь-якого типу.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення масиву
let fruits = ['яблуко', 'банан', 'вишня'];

// Доступ до елементів масиву
let firstFruit = fruits[0]; // 'яблуко'

// Додавання елементів в масив
fruits.push('апельсин'); // ['яблуко', 'банан', 'вишня', 'апельсин']

// Видалення останнього елемента з масиву
fruits.pop(); // ['яблуко', 'банан', 'вишня']
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання масиву:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let numbers = [1, 2, 3, 4, 5];

// Перебір масиву за допомогою циклу
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Використання методу forEach для перебору
numbers.forEach((num) => {
  console.log(num);
});

// Використання методу map для створення нового масиву
let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
`}
          </div>
        </div>
      </div>
      {/* Objects Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">10. Об'єкти (Objects)</h3>
        <p className="mb-2">
          Об'єкти використовуються для зберігання пар "ключ-значення". Вони є основним способом організації даних в JavaScript.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення об'єкта
let person = {
  name: 'Олексій',
  age: 30,
  greet: function() {
    console.log('Привіт, ' + this.name);
  }
};

// Доступ до властивостей об'єкта
console.log(person.name); // 'Олексій'

// Виклик методу об'єкта
person.greet(); // 'Привіт, Олексій'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання об'єкта:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`let car = {
  make: 'Tesla',
  model: 'Model S',
  year: 2022,
  getCarInfo: function() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
};

console.log(car.getCarInfo()); // '2022 Tesla Model S'

// Додавання нової властивості в об'єкт
car.color = 'Червоний';
console.log(car.color); // 'Червоний'

// Видалення властивості з об'єкта
delete car.year;
console.log(car.year); // undefined
`}
          </div>
        </div>
      </div>
            {/* Functions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">11. Функції (Functions)</h3>
        <p className="mb-2">
          Функції дозволяють упаковувати код, щоб повторно використовувати його. Вони можуть приймати параметри і повертати значення.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення функції
function greet(name) {
  return 'Привіт, ' + name;
}

console.log(greet('Олексій')); // 'Привіт, Олексій'

// Функція з кількома параметрами
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

// Функція без повернення значення
function logMessage(message) {
  console.log(message);
}

logMessage('Це повідомлення'); // 'Це повідомлення'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання функції:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Функція, яка використовує аргументи за замовчуванням
function greetUser(name = 'Гість') {
  console.log('Привіт, ' + name);
}

greetUser(); // 'Привіт, Гість'
greetUser('Марина'); // 'Привіт, Марина'

// Стрілочні функції (arrow functions)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12`}
          </div>
        </div>
      </div>

      {/* Closures Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">12. Замикання (Closures)</h3>
        <p className="mb-2">
          Замикання — це функція, яка "запам'ятовує" і має доступ до своїх лексичних змінних навіть після того, як батьківська функція завершила виконання.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад замикання
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable); // доступ до outerVariable
    console.log(innerVariable); // доступ до innerVariable
  };
}

const closureExample = outerFunction('Зовнішня змінна');
closureExample('Внутрішня змінна');

// Виведе:
// 'Зовнішня змінна'
// 'Внутрішня змінна'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад використання замикання:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Лічильник з використанням замикання
function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1`}
          </div>
        </div>
      </div>
      {/* Objects Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">13. Об'єкти (Objects)</h3>
        <p className="mb-2">
          Об'єкти в JavaScript дозволяють зберігати колекцію значень у вигляді пар "ключ-значення". Об'єкти можуть містити різні типи даних, такі як рядки, числа, функції тощо.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення об'єкта
const person = {
  name: 'Олексій',
  age: 30,
  greet: function() {
    console.log('Привіт, мене звуть ' + this.name);
  }
};

console.log(person.name); // 'Олексій'
console.log(person.age); // 30
person.greet(); // 'Привіт, мене звуть Олексій'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад роботи з об'єктами:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Використання скороченого синтаксису
const name = 'Марина';
const age = 25;

const user = { name, age };
console.log(user); // { name: 'Марина', age: 25 }

// Додавання нових властивостей
user.country = 'Україна';
console.log(user); // { name: 'Марина', age: 25, country: 'Україна' }

// Об'єкти з методами
const car = {
  brand: 'BMW',
  model: 'X5',
  displayInfo: function() {
    console.log(\`\${this.brand} \${this.model}\`);
  }
};
car.displayInfo(); // 'BMW X5'
`}
          </div>
        </div>
      </div>
      {/* Arrays Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">14. Масиви (Arrays)</h3>
        <p className="mb-2">
          Масиви в JavaScript використовуються для зберігання колекцій даних. Масиви можуть містити елементи будь-якого типу, зокрема числа, рядки, об'єкти і навіть інші масиви.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення масиву
const fruits = ['Яблуко', 'Банан', 'Груша'];

console.log(fruits[0]); // 'Яблуко'
console.log(fruits[1]); // 'Банан'
console.log(fruits.length); // 3
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад роботи з масивами:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Додавання елементів до масиву
fruits.push('Апельсин');
console.log(fruits); // ['Яблуко', 'Банан', 'Груша', 'Апельсин']

// Видалення останнього елементу
fruits.pop();
console.log(fruits); // ['Яблуко', 'Банан', 'Груша']

// Перебір елементів масиву
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// Ітерація через for...of
for (const fruit of fruits) {
  console.log(fruit);
}

// Заміна елемента в масиві
fruits[1] = 'Мандарин';
console.log(fruits); // ['Яблуко', 'Мандарин', 'Груша']
`}
          </div>
        </div>
      </div>
      {/* Functions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">15. Функції (Functions)</h3>
        <p className="mb-2">
          Функції в JavaScript дозволяють виконувати повторювані операції. Функції можуть приймати аргументи і повертати значення.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Оголошення функції
function greet(name) {
  return 'Привіт, ' + name + '!';
}

console.log(greet('Олексій')); // 'Привіт, Олексій!'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад роботи з функціями:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Функція, яка не повертає значення
function sayHello() {
  console.log('Привіт!');
}

sayHello(); // 'Привіт!'

// Функція з кількома аргументами
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5

// Функція як вираз
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // 6

// Стрілкова функція
const subtract = (a, b) => a - b;

console.log(subtract(5, 3)); // 2

// Функція з замиканням
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
`}
          </div>
        </div>
      </div>
      {/* API Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">16. Робота з API (API Interaction)</h3>
        <p className="mb-2">
          API (Application Programming Interface) дозволяє взаємодіяти з іншими додатками або сервісами. В JavaScript для роботи з API зазвичай використовуються методи `fetch` або бібліотеки, як-от Axios.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Використання fetch для отримання даних з API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Помилка:', error);
  });
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад асинхронної функції з fetch:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Асинхронна функція з async/await
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

fetchData();
`}
          </div>
        </div>
      </div>
      {/* DOM Manipulation Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">17. Робота з DOM (DOM Manipulation)</h3>
        <p className="mb-2">
          DOM (Document Object Model) дозволяє взаємодіяти з елементами HTML-сторінки. JavaScript може використовувати DOM для зміни вмісту, стилів, атрибутів та подій елементів.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Зміна тексту елемента
const title = document.getElementById('title');
title.innerText = 'Новий заголовок';

// Зміна стилю елемента
const button = document.querySelector('.btn');
button.style.backgroundColor = 'green';

// Додавання класу до елемента
button.classList.add('active');

// Видалення елемента
const element = document.querySelector('.element');
element.remove();
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад обробки події на DOM:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Обробка події "клік"
document.getElementById('btn').addEventListener('click', function() {
  alert('Кнопка була натиснута!');
});

// Зміна атрибуту елемента
const img = document.querySelector('img');
img.setAttribute('src', 'new-image.jpg');
`}
          </div>
        </div>
      </div>
      {/* JSON Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">18. Робота з JSON (JSON Handling)</h3>
        <p className="mb-2">
          JSON (JavaScript Object Notation) — це формат для зберігання та передачі даних. У JavaScript можна використовувати методи `JSON.parse()` для перетворення JSON у об'єкт та `JSON.stringify()` для перетворення об'єкта в JSON.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад перетворення JSON у об'єкт
const jsonString = '{"name": "John", "age": 30}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name);  // 'John'

// Приклад перетворення об'єкта у JSON
const person = { name: 'Jane', age: 25 };
const jsonStringified = JSON.stringify(person);
console.log(jsonStringified);  // '{"name":"Jane","age":25}'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Як працювати з JSON у fetch API:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Отримання даних з API і перетворення їх у об'єкт
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data);  // Отриманий масив постів
  })
  .catch(error => console.error('Помилка:', error));
`}
          </div>
        </div>
      </div>
      {/* Event Handling Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">19. Обробка подій (Event Handling)</h3>
        <p className="mb-2">
          Обробка подій — це важлива частина взаємодії користувача з веб-додатками. В JavaScript можна додавати обробники подій на елементи DOM, щоб реагувати на дії користувача (клік, введення тексту, зміна елементів тощо).
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Обробка події "клік"
document.querySelector('#btn').addEventListener('click', function() {
  alert('Кнопка була натиснута!');
});

// Обробка події "submit" на формі
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();  // Запобігає відправці форми
  console.log('Форма була відправлена');
});
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Приклад з обробником події в React:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// React: Обробка події "клік"
function handleClick() {
  alert('Кнопка була натиснута!');
}

function App() {
  return (
    <button onClick={handleClick}>Натисни мене</button>
  );
}
`}
          </div>
        </div>
      </div>
      {/* Promises Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">20. Проміси (Promises)</h3>
        <p className="mb-2">
          Проміси використовуються для обробки асинхронних операцій. Вони дозволяють зручно працювати з результатами асинхронних викликів, що допомагає уникнути "callback hell".
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад створення промісу
const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve('Операція успішна!');
  } else {
    reject('Щось пішло не так!');
  }
});

promise
  .then(result => console.log(result))  // 'Операція успішна!'
  .catch(error => console.error(error)); // 'Щось пішло не так!'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Затримка з допомогою промісу:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Створення промісу з затримкою
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log('2 секунди пройшли');
});
`}
          </div>
        </div>
      </div>
      {/* Async/Await Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">21. Асинхронні функції (Async/Await)</h3>
        <p className="mb-2">
          `async` і `await` — це більш зручний спосіб роботи з асинхронними функціями, порівняно з промісами. Вони дозволяють писати асинхронний код в стилі синхронного.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад асинхронної функції
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Помилка:', error);
  }
}

fetchData();
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Асинхронна функція з затримкою:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Асинхронна функція з затримкою
async function delayedMessage() {
  console.log('Чекати...');
  await delay(2000);
  console.log('2 секунди пройшли');
}

delayedMessage();
`}
          </div>
        </div>
      </div>
      {/* Closures Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">22. Замикання (Closures)</h3>
        <p className="mb-2">
          Замикання — це механізм, коли функція зберігає доступ до змінних свого лексичного оточення, навіть після того, як зовнішня функція завершила виконання.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад замикання
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const counterFn = outer();
counterFn(); // 1
counterFn(); // 2
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Зберігання стану через замикання:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Збереження стану через замикання
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    decrement: () => count--,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
counter.decrement();
console.log(counter.getCount()); // 0
`}
          </div>
        </div>
      </div>
      {/* Modules Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">23. Модулі (Modules)</h3>
        <p className="mb-2">
          Модулі дозволяють організувати код в окремі блоки, які можна імпортувати та експортувати в інших частинах програми. Це допомагає уникнути конфліктів і спрощує підтримку коду.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад модуля (math.js)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Приклад імпорту модуля
import { add, subtract } from './math';

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Імпорт всіх функцій з модуля:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Імпортування всіх функцій
import * as math from './math';

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 2)); // 3
`}
          </div>
        </div>
      </div>
      {/* Event Handling Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">24. Обробка подій (Event Handling)</h3>
        <p className="mb-2">
          Обробка подій дозволяє взаємодіяти з користувачем, реагуючи на його дії, такі як кліки, наведенні курсора, введення тексту та інше.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад обробки кліку
<button id="myButton">Click me</button>
<script>
  document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Обробка події на React:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// React приклад обробки події
function App() {
  const handleClick = () => {
    alert('Button clicked in React!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default App;
`}
          </div>
        </div>
      </div>
      {/* Asynchronous JavaScript Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">25. Асинхронність (Asynchronous JavaScript)</h3>
        <p className="mb-2">
          Асинхронне виконання дозволяє кодові не блокувати потік програми, очікуючи на завершення певної операції (наприклад, запит до серверу).
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад асинхронної функції з setTimeout
console.log('Start');
setTimeout(() => {
  console.log('This is async!');
}, 2000);
console.log('End');
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Асинхронна функція за допомогою async/await:</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Асинхронна функція в JavaScript з async/await
async function fetchData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}

fetchData();
`}
          </div>
        </div>
      </div>
      {/* Constructors Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">26. Конструктори (Constructors)</h3>
        <p className="mb-2">
          Конструктори в JavaScript використовуються для створення об'єктів. Вони зазвичай визначаються за допомогою функцій, які ініціалізують нові екземпляри об'єктів.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад конструктора в JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function() {
    console.log('Hello, my name is ' + this.name);
  };
}

// Створення нового об'єкта за допомогою конструктора
const person1 = new Person('Alice', 30);
person1.greet(); // 'Hello, my name is Alice'
`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Використання класів (ES6)</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Приклад конструктора за допомогою класу (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Hello, my name is ' + this.name);
  }
}

// Створення нового об'єкта за допомогою класу
const person2 = new Person('Bob', 25);
person2.greet(); // 'Hello, my name is Bob'
`}
          </div>
        </div>
      </div>
      {/* Destructuring Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">27. Деструктуризація (Destructuring)</h3>
        <p className="mb-2">
          Деструктуризація дозволяє вам розпаковувати значення з масивів або властивості з об'єктів у змінні.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Деструктуризація масиву
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3

// Деструктуризація об'єкта
const person = { name: 'Alice', age: 30, job: 'Engineer' };
const { name, age } = person;
console.log(name, age); // Alice 30`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Деструктуризація з значенням за замовчуванням</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Деструктуризація з значеннями за замовчуванням
const person = { name: 'Bob' };
const { name, age = 25 } = person;
console.log(name, age); // Bob 25`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Деструктуризація в функціях</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Деструктуризація в параметрах функцій
function greet({ name, age }) {
  console.log('Hello, my name is ' + name + ' and I am ' + age + ' years old.');
}

const person = { name: 'Alice', age: 30 };
greet(person); // Hello, my name is Alice and I am 30 years old.`}
          </div>
        </div>
      </div>
      {/* Promises Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">28. Проміси (Promises)</h3>
        <p className="mb-2">
          Проміси використовуються для роботи з асинхронними операціями. Вони представляють собою об'єкти, які можуть
          знаходитися в одному з трьох станів: `pending` (очікування), `fulfilled` (виконано) і `rejected` (відхилено).
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Створення проміса
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Операція успішна');
  } else {
    reject('Щось пішло не так');
  }
});

myPromise
  .then((result) => console.log(result)) // Операція успішна
  .catch((error) => console.error(error)); // Щось пішло не так`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Асинхронні операції з промісами</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Асинхронна операція
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Дані отримано');
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log(message); // Дані отримано
  })
  .catch((error) => console.error(error));`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Метод `async/await` для роботи з промісами</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Використання async/await
async function getData() {
  const result = await fetchData();
  console.log(result); // Дані отримано
}

getData();`}
          </div>
        </div>
      </div>
      {/* Event Handling Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">29. Обробка подій</h3>
        <p className="mb-2">
          Обробка подій дозволяє додавати реакцію на різноманітні взаємодії користувача з елементами на сторінці, такі як
          натискання кнопок, введення тексту, переміщення миші тощо.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Приклад додавання обробника події на кнопку
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  alert('Кнопка натиснута!');
});`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Обробка події через React</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Обробка події на кнопці в React
import React, { useState } from 'react';

const ButtonComponent = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Кнопка натиснута!');
  };

  return (
    <div>
      <button onClick={handleClick} className="p-2 bg-blue-500 text-white rounded">
        Натисни мене
      </button>
      <p>{message}</p>
    </div>
  );
};

export default ButtonComponent;`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Типи подій</p>
          <ul className="list-disc ml-6">
            <li>click — натискання на елемент.</li>
            <li>mouseenter — курсор миші переміщується на елемент.</li>
            <li>mouseleave — курсор миші залишає елемент.</li>
            <li>keydown — натискання клавіші на клавіатурі.</li>
            <li>input — зміна значення у формі (input або textarea).</li>
          </ul>
        </div>
      </div>
      {/* Promises Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">30. Проміси та асинхронність</h3>
        <p className="mb-2">
          Проміси використовуються для роботи з асинхронними операціями. Вони дозволяють обробляти результат операції, яка може
          бути виконана пізніше (наприклад, запит до серверу або зчитування файлу).
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Створення простого промісу
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Змінна для симуляції успіху/неуспіху

  if (success) {
    resolve('Операція виконана успішно!');
  } else {
    reject('Сталася помилка!');
  }
});

myPromise
  .then(result => console.log(result)) // Обробка успіху
  .catch(error => console.log(error)); // Обробка помилки`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Асинхронні функції та ключове слово `async`</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Приклад використання асинхронної функції
const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Помилка:', error);
  }
};

fetchData();`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Асинхронні функції в React (з використанням useEffect)</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Завантаження даних асинхронно в React
import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []); // Порожній масив означає запуск тільки при монтуванні компонента

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default FetchDataComponent;`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Методи роботи з промісами</p>
          <ul className="list-disc ml-6">
            <li><strong>Promise.all()</strong> — чекає, поки всі проміси будуть виконані (успішно чи з помилкою).</li>
            <li><strong>Promise.race()</strong> — чекає, поки перший проміс з усіх буде виконаний.</li>
            <li><strong>Promise.allSettled()</strong> — чекає, поки всі проміси будуть виконані (успішно або з помилкою), повертаючи результат кожного.</li>
          </ul>
        </div>
      </div>
      {/* JavaScript Modules Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">31. Модулі в JavaScript</h3>
        <p className="mb-2">
          Модулі дозволяють розділяти код на окремі файли, що полегшує його організацію та повторне використання. У JavaScript
          модулі можна створювати за допомогою ключових слів `export` та `import`.
        </p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`// Створення модуля (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// Імпорт модуля в іншому файлі (main.js)
import { add, subtract } from './math';

console.log(add(2, 3)); // 5
console.log(subtract(5, 3)); // 2`}
        </div>
        <div className="mt-4">
          <p className="mb-2">Експорт за замовчуванням (default export)</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Експорт за замовчуванням (math.js)
const multiply = (a, b) => a * b;
export default multiply;

// Імпорт за замовчуванням в іншому файлі (main.js)
import multiply from './math';

console.log(multiply(2, 3)); // 6`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Імпорт всіх експортуваних елементів</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Імпорт всіх функцій з модуля (math.js)
import * as math from './math';

console.log(math.add(2, 3)); // 5
console.log(math.subtract(5, 3)); // 2`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Робота з модулями в браузері (наприклад, через <code>script</code>)</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// В HTML файлі
<script type="module">
  import { add } from './math.js';
  console.log(add(2, 3)); // 5
</script>`}
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-2">Модулі в Node.js</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`// Використання модуля в Node.js (math.js)
module.exports.add = (a, b) => a + b;

// Імпорт в іншому файлі (main.js)
const math = require('./math');
console.log(math.add(2, 3)); // 5`}
          </div>
        </div>
      </div>
      {/* Async JavaScript Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">32. Асинхронність у JavaScript</h3>
        <p className="mb-2">
          JavaScript є однопоточним, але завдяки асинхронному виконанню можна не блокувати потік при виконанні довготривалих операцій.
        </p>

        <h4 className="text-lg font-semibold mt-4">setTimeout і setInterval</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`console.log("Початок");

setTimeout(() => {
  console.log("Асинхронна подія через 1 секунду");
}, 1000);

console.log("Кінець");`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Проміси (Promises)</h4>
        <p className="mb-2">Проміси — це об'єкти, які представляють завершення або невдачу асинхронної операції.</p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Успішно!");
  } else {
    reject("Помилка!");
  }
});

promise
  .then(result => console.log(result))     // Успішно!
  .catch(error => console.error(error));  // Якщо помилка`}
        </div>

        <h4 className="text-lg font-semibold mt-4">async/await</h4>
        <p className="mb-2">Це синтаксичний цукор для роботи з промісами, що дозволяє писати асинхронний код як синхронний.</p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Помилка при завантаженні:", error);
  }
};

fetchData();`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Promise.all та Promise.race</h4>
        <p className="mb-2">Ці методи дозволяють працювати з кількома промісами одночасно.</p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [1, 2, 3]
});

Promise.race([p1, p2, p3]).then(value => {
  console.log(value); // 1 (найшвидший)
});`}
        </div>
      </div>
      {/* Regular Expressions Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">33. Регулярні вирази (RegExp)</h3>
        <p className="mb-2">
          Регулярні вирази дозволяють знаходити, перевіряти або замінювати шаблони в рядках.
        </p>

        <h4 className="text-lg font-semibold mt-4">Синтаксис</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const regex = /\\d+/; // Знайде одне або більше чисел
const str = "У мене 3 яблука";
const result = regex.test(str); // true`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Пошук та відповідність</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const regex = /яблуко/;
const str = "У мене є одне яблуко";
console.log(str.match(regex)); // ["яблуко"]`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Замінити</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
          {`const str = "Мій номер 123-456";
const newStr = str.replace(/\\d{3}-\\d{3}/, "XXX-XXX");
console.log(newStr); // "Мій номер XXX-XXX"`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Поширені символи</h4>
        <ul className="list-disc list-inside mb-2">
          <li><code>\\d</code> — цифра</li>
          <li><code>\\w</code> — літера або цифра або _</li>
          <li><code>\\s</code> — пробіл</li>
          <li><code>^</code> — початок рядка</li>
          <li><code>$</code> — кінець рядка</li>
          <li><code>.*</code> — будь-який символ (нуль або більше)</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Флаги</h4>
        <ul className="list-disc list-inside mb-2">
          <li><code>g</code> — глобальний пошук</li>
          <li><code>i</code> — ігнорування регістру</li>
          <li><code>m</code> — багаторядковий режим</li>
        </ul>
      </div>
      {/* Web Storage Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">34. Web Storage: localStorage і sessionStorage</h3>
        <p className="mb-2">
          Web Storage дозволяє зберігати дані прямо в браузері користувача. Є два основних типи:
        </p>

        <ul className="list-disc list-inside mb-2">
          <li><strong>localStorage</strong> — зберігає дані безстроково (до ручного очищення).</li>
          <li><strong>sessionStorage</strong> — зберігає дані до закриття вкладки або браузера.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Приклад використання localStorage</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Зберегти значення
localStorage.setItem("ім'я", "Олексій");

// Отримати значення
const name = localStorage.getItem("ім'я");
console.log(name); // "Олексій"

// Видалити ключ
localStorage.removeItem("ім'я");

// Очистити все
localStorage.clear();`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад використання sessionStorage</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`sessionStorage.setItem("сесія", "активна");
console.log(sessionStorage.getItem("сесія")); // "активна"`}
        </div>

        <p className="mt-4">
          Дані в localStorage та sessionStorage завжди зберігаються у вигляді рядків. Якщо потрібно зберегти об'єкт — використовуйте <code>JSON.stringify()</code> і <code>JSON.parse()</code>.
        </p>

        <h4 className="text-lg font-semibold mt-4">Зберігання об'єкта</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = { ім'я: "Олексій", вік: 30 };
localStorage.setItem("user", JSON.stringify(user));

const data = JSON.parse(localStorage.getItem("user"));
console.log(data.вік); // 30`}
        </div>
      </div>
      {/* JSON Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">35. JSON (JavaScript Object Notation)</h3>
        <p className="mb-2">
          JSON — це текстовий формат обміну даними, який використовується для зберігання та передачі об'єктів між сервером і клієнтом.
        </p>

        <h4 className="text-lg font-semibold mt-4">Приклад JSON-об'єкта:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`{
  "name": "Олексій",
  "age": 30,
  "skills": ["HTML", "CSS", "JavaScript"]
}`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Серіалізація (об'єкт → JSON):</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = {
  name: "Олексій",
  age: 30
};

const jsonString = JSON.stringify(user);
console.log(jsonString); 
// '{"name":"Олексій","age":30}'`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Десеріалізація (JSON → об'єкт):</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const json = '{"name":"Олексій","age":30}';
const obj = JSON.parse(json);
console.log(obj.name); // "Олексій"`}
        </div>

        <p className="mt-4">
          JSON використовується практично у всіх API, тому розуміння його структури — критично важливо для будь-якого фронтенд розробника.
        </p>
      </div>
      {/* Proxy Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">36. Proxy</h3>
        <p className="mb-2">
          <strong>Proxy</strong> дозволяє створювати обгортку навколо об'єкта і керувати доступом до його властивостей (get, set, delete тощо).
        </p>

        <h4 className="text-lg font-semibold mt-4">Базовий приклад використання:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = {
  name: "Олексій",
  age: 30
};

const proxyUser = new Proxy(user, {
  get(target, property) {
    console.log(\`Читання властивості: \${property}\`);
    return target[property];
  },
  set(target, property, value) {
    console.log(\`Зміна \${property} на \${value}\`);
    target[property] = value;
    return true;
  }
});

console.log(proxyUser.name); // Читання name → Олексій
proxyUser.age = 31; // Зміна age → 31`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Що можна перехопити:</h4>
        <ul className="list-disc list-inside ml-4">
          <li>get — доступ до властивостей</li>
          <li>set — зміна значення</li>
          <li>deleteProperty — видалення</li>
          <li>has — оператор <code>in</code></li>
          <li>ownKeys — <code>Object.keys()</code>, <code>for...in</code></li>
          <li>і ще багато іншого…</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Приклад перевірки типів через Proxy:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const validator = {
  set(obj, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new Error("Вік має бути числом");
    }
    obj[prop] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.age = 25;    // ✅
person.age = "двадцять"; // ❌ Помилка`}
        </div>

        <p className="mt-4">
          Proxy корисні для логування, валідації, створення реактивних фреймворків (як у Vue.js) або метапрограмування.
        </p>
      </div>
      {/* Reflect API Section */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">37. Reflect API</h3>
        <p className="mb-2">
          <strong>Reflect</strong> — це набір методів для роботи з об'єктами. Всі методи Reflect відповідають "пасткам" Proxy.
        </p>

        <h4 className="text-lg font-semibold mt-4">Навіщо потрібен Reflect?</h4>
        <ul className="list-disc list-inside ml-4">
          <li>Більш безпечний та передбачуваний доступ до властивостей</li>
          <li>Підвищує читабельність коду</li>
          <li>Часто використовується всередині Proxy</li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Приклад використання:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = {
  name: "Олексій",
  age: 30
};

// Замість user.name = "Інший"
Reflect.set(user, "name", "Інший");
console.log(Reflect.get(user, "name")); // "Інший"

// Перевірка властивості
console.log(Reflect.has(user, "age")); // true

// Отримання ключів
console.log(Reflect.ownKeys(user)); // ["name", "age"]`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Reflect + Proxy</h4>
        <p className="mb-2">
          Найчастіше використовується в пастках Proxy для передачі контролю далі:
        </p>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = {
  name: "Олексій",
};

const proxy = new Proxy(user, {
  get(target, prop, receiver) {
    console.log("Перехоплено:", prop);
    return Reflect.get(target, prop, receiver);
  }
});

console.log(proxy.name);`}
        </div>

        <p className="mt-4">
          Reflect — корисний інструмент для створення прозорих обгорток і глибокого контролю за поведінкою об'єктів.
        </p>
      </div>
      {/* Web Storage API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">38. Web Storage API</h3>
        <p className="mb-2">
          Web Storage API надає два способи збереження даних у браузері:
          <strong> localStorage </strong> і <strong> sessionStorage</strong>.
        </p>

        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>localStorage:</strong> зберігає дані безстроково (навіть після перезавантаження сторінки).</li>
          <li><strong>sessionStorage:</strong> зберігає дані лише на час сесії (поки вкладка відкрита).</li>
        </ul>

        <h4 className="text-lg font-semibold mt-2">Методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>setItem(key, value)</code> — зберегти значення</li>
          <li><code>getItem(key)</code> — отримати значення</li>
          <li><code>removeItem(key)</code> — видалити значення</li>
          <li><code>clear()</code> — очистити все</li>
        </ul>

        <h4 className="text-lg font-semibold mt-2">Приклад з localStorage:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Зберігаємо дані
localStorage.setItem("ім'я", "Олексій");

// Отримуємо
const name = localStorage.getItem("ім'я");
console.log(name); // "Олексій"

// Видаляємо
localStorage.removeItem("ім'я");

// Повне очищення
localStorage.clear();`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Зберігання об'єктів (через JSON):</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const user = {
  name: "Олексій",
  age: 30
};

// Зберігаємо як JSON
localStorage.setItem("user", JSON.stringify(user));

// Отримуємо та парсимо
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Олексій"`}
        </div>

        <h4 className="text-lg font-semibold mt-4">sessionStorage працює так само:</h4>
        <p className="mb-2">Тільки дані зникають при закритті вкладки.</p>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`sessionStorage.setItem("temp", "Тимчасове значення");`}
        </div>
      </div>
      {/* Event Loop */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">39. Event Loop, Call Stack, Macrotasks, Microtasks</h3>
        <p className="mb-2">
          JavaScript — однопотокова мова. Це означає, що виконується один рядок коду за раз. Але завдяки Event Loop, JS справляється з асинхронністю.
        </p>

        <h4 className="text-lg font-semibold mt-2">Call Stack (Стек викликів):</h4>
        <p className="mb-2">
          Це структура даних, яка тримає функції, які зараз виконуються. Нова функція додається у верхню частину стека, і після завершення — видаляється.
        </p>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`function greet() {
  console.log("Привіт!");
}

function start() {
  greet(); // додається в стек
}

start(); // виконується першим`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Event Loop:</h4>
        <p className="mb-2">
          Перевіряє, чи стек викликів порожній, і якщо так — бере події з черги і запускає відповідні колбеки.
        </p>

        <h4 className="text-lg font-semibold mt-4">Macrotasks та Microtasks:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>Macrotasks:</strong> setTimeout, setInterval, I/O, UI rendering</li>
          <li><strong>Microtasks:</strong> Promises, process.nextTick</li>
        </ul>

        <h4 className="text-lg font-semibold mt-2">Приклад:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");`}
        </div>
        <p className="mt-2">
          Вивід у консоль буде: <code>1, 4, 3, 2</code>. Спочатку виконуються синхронні дії, потім microtask (promise), і лише потім macrotask (setTimeout).
        </p>
      </div>
      {/* History API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">40. History API</h3>
        <p className="mb-2">
          History API дозволяє працювати з історією перегляду в браузері без перезавантаження сторінки.
          Це особливо корисно в SPA (React, Vue, тощо).
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>history.pushState(state, title, url)</code> — додає запис в історію</li>
          <li><code>history.replaceState(state, title, url)</code> — замінює поточний запис</li>
          <li><code>history.back()</code> — повертає назад</li>
          <li><code>history.forward()</code> — переходить вперед</li>
          <li><code>history.go(n)</code> — переходить на n записів вперед/назад</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Додати запис в історію
history.pushState({ page: 1 }, "title 1", "?page=1");

// Замінити поточний запис
history.replaceState({ page: 2 }, "title 2", "?page=2");

// Повернутися назад
history.back();

// Перейти на один запис вперед
history.forward();`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Обробка події зміни історії:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`window.addEventListener("popstate", (event) => {
  console.log("Сторінка змінилась", event.state);
});`}
        </div>
        <p className="mt-2">
          Подія <code>popstate</code> викликається, коли користувач переходить вперед або назад у браузері.
        </p>
      </div>
      {/* Navigator API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">41. Navigator API</h3>
        <p className="mb-2">
          <code>navigator</code> — це об'єкт, який надає інформацію про браузер та пристрій користувача.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні властивості:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>navigator.userAgent</code> — рядок з інформацією про браузер</li>
          <li><code>navigator.language</code> — мова браузера</li>
          <li><code>navigator.onLine</code> — статус з'єднання з інтернетом (true/false)</li>
          <li><code>navigator.platform</code> — платформа користувача</li>
          <li><code>navigator.geolocation</code> — доступ до геолокації</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`console.log(navigator.userAgent);  // Інформація про браузер
console.log(navigator.language);    // Наприклад, "uk-UA"
console.log(navigator.onLine);      // true або false
console.log(navigator.platform);    // Наприклад, "MacIntel"`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Геолокація</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Широта:", position.coords.latitude);
      console.log("Довгота:", position.coords.longitude);
    },
    (error) => {
      console.error("Помилка при отриманні геолокації", error);
    }
  );
}`}
        </div>

        <p className="mt-2">
          Геолокація вимагає HTTPS з'єднання та дозвіл користувача.
        </p>
      </div>
      {/* Web Storage API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">42. Web Storage API</h3>
        <p className="mb-2">
          <code>localStorage</code> та <code>sessionStorage</code> дозволяють зберігати дані на стороні клієнта.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні властивості та методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>localStorage</code> — зберігає дані без терміну придатності (залишаються навіть після закриття браузера).</li>
          <li><code>sessionStorage</code> — зберігає дані тільки в межах поточної сесії (дані зникають після закриття браузера).</li>
          <li><code>setItem(key, value)</code> — зберігає дані у сховищі.</li>
          <li><code>getItem(key)</code> — отримує дані за ключем.</li>
          <li><code>removeItem(key)</code> — видаляє елемент за ключем.</li>
          <li><code>clear()</code> — очищує всі дані з сховища.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад використання localStorage
localStorage.setItem("username", "Oleksiy");
console.log(localStorage.getItem("username"));  // "Oleksiy"

sessionStorage.setItem("sessionId", "abc123");
console.log(sessionStorage.getItem("sessionId"));  // "abc123"`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Збереження даних у localStorage</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Збереження даних у localStorage
const saveUserData = (name) => {
  localStorage.setItem("user", name);
};

const loadUserData = () => {
  const user = localStorage.getItem("user");
  if (user) {
    console.log("Завантажено користувача:", user);
  } else {
    console.log("Користувач не знайдений");
  }
};`}
        </div>

        <p className="mt-2">
          Збереження у localStorage та sessionStorage працює в межах одного домену, тому дані доступні тільки в межах поточного сайту.
        </p>
      </div>
      {/* Web Workers */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">43. Web Workers</h3>
        <p className="mb-2">
          Web Workers дозволяють виконувати JavaScript код у фонових потоках, не блокуючи головний потік браузера.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>new Worker(url)</code> — створює новий воркер для виконання коду в окремому потоці.</li>
          <li><code>worker.postMessage(message)</code> — надсилає повідомлення воркеру.</li>
          <li><code>worker.onmessage = (event)</code> — обробник повідомлень, що отримуються від воркера.</li>
          <li><code>worker.terminate()</code> — зупиняє воркера.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Створення воркера
const worker = new Worker("worker.js");

worker.postMessage("Hello, Worker!");  // Надсилаємо повідомлення воркеру

worker.onmessage = function(event) {
  console.log("Отримано від воркера:", event.data);
};

worker.terminate();  // Зупинка воркера`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Використання Web Worker</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// worker.js (файл, який виконується у воркері)
onmessage = function(event) {
  console.log("Отримано від основного потоку:", event.data);
  postMessage("Привіт, основний потік!");
};
`}
        </div>

        <p className="mt-2">
          Використання Web Workers корисно для виконання важких обчислень або обробки великих обсягів даних, щоб не блокувати основний потік браузера та не перешкоджати взаємодії з інтерфейсом.
        </p>
      </div>
      {/* Geolocation API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">44. Geolocation API</h3>
        <p className="mb-2">
          Geolocation API дозволяє визначати місцезнаходження користувача за допомогою GPS або інших датчиків.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>navigator.geolocation.getCurrentPosition(success, error, options)</code> — отримує поточне місцезнаходження користувача.</li>
          <li><code>navigator.geolocation.watchPosition(success, error, options)</code> — слідкує за змінами місцезнаходження.</li>
          <li><code>navigator.geolocation.clearWatch(watchId)</code> — зупиняє спостереження за змінами місцезнаходження.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад отримання поточного місцезнаходження
navigator.geolocation.getCurrentPosition(
  function(position) {
    console.log("Широта:", position.coords.latitude);
    console.log("Довгота:", position.coords.longitude);
  },
  function(error) {
    console.log("Помилка при отриманні місцезнаходження:", error);
  }
);`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Спостереження за змінами місцезнаходження</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад спостереження за змінами місцезнаходження
const watchId = navigator.geolocation.watchPosition(
  function(position) {
    console.log("Широта:", position.coords.latitude);
    console.log("Довгота:", position.coords.longitude);
  },
  function(error) {
    console.log("Помилка при спостереженні:", error);
  }
);

// Зупинка спостереження
navigator.geolocation.clearWatch(watchId);`}
        </div>

        <p className="mt-2">
          Geolocation API корисний для створення додатків, які потребують інформації про місцезнаходження користувача, таких як картографічні сервіси, додатки для пошуку місць поблизу тощо.
        </p>
      </div>
      {/* Fetch API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">45. Fetch API</h3>
        <p className="mb-2">
          Fetch API дозволяє здійснювати асинхронні HTTP запити до серверів для отримання або відправки даних. Це зручний і потужний інтерфейс для роботи з API.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>fetch(url, options)</code> — виконує запит до вказаної URL-адреси.</li>
          <li><code>response.json()</code> — перетворює відповідь на формат JSON.</li>
          <li><code>response.text()</code> — перетворює відповідь на текстовий формат.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад використання Fetch API для отримання даних
fetch('https://api.example.com/data')
  .then(response => response.json()) // Перетворюємо відповідь в JSON
  .then(data => {
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    console.log('Помилка при отриманні даних:', error);
  });`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Відправка даних через Fetch</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад відправки POST-запиту через Fetch
const data = {
  name: 'John Doe',
  age: 30
};

fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log('Результат відправки:', result);
  })
  .catch(error => {
    console.log('Помилка при відправці даних:', error);
  });`}
        </div>

        <p className="mt-2">
          Fetch API є основним способом роботи з віддаленими ресурсами в сучасних веб-додатках. Завдяки своїй асинхронності та зручному синтаксису, він став популярним у світі JavaScript.
        </p>
      </div>
      {/* Web Storage API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">46. Web Storage API</h3>
        <p className="mb-2">
          Web Storage API дозволяє зберігати дані на стороні клієнта в браузері за допомогою двох основних механізмів:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>localStorage</strong> — зберігає дані без обмежень по часу, навіть після закриття браузера.</li>
          <li><strong>sessionStorage</strong> — зберігає дані тільки до закриття вкладки або браузера.</li>
        </ul>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>localStorage.setItem(key, value)</code> — записує дані в localStorage.</li>
          <li><code>localStorage.getItem(key)</code> — отримує дані з localStorage.</li>
          <li><code>localStorage.removeItem(key)</code> — видаляє дані з localStorage.</li>
          <li><code>localStorage.clear()</code> — очищає всі дані в localStorage.</li>
          <li><code>sessionStorage.setItem(key, value)</code> — записує дані в sessionStorage.</li>
          <li><code>sessionStorage.getItem(key)</code> — отримує дані з sessionStorage.</li>
          <li><code>sessionStorage.removeItem(key)</code> — видаляє дані з sessionStorage.</li>
          <li><code>sessionStorage.clear()</code> — очищає всі дані в sessionStorage.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад використання localStorage
localStorage.setItem('username', 'JohnDoe'); // Зберігаємо ім'я користувача
const username = localStorage.getItem('username'); // Отримуємо ім'я користувача
console.log(username); // 'JohnDoe'

// Видаляємо дані
localStorage.removeItem('username');

// Очищаємо всі дані
localStorage.clear();`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад: Використання sessionStorage</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад використання sessionStorage
sessionStorage.setItem('sessionID', '12345'); // Зберігаємо ID сесії
const sessionID = sessionStorage.getItem('sessionID'); // Отримуємо ID сесії
console.log(sessionID); // '12345'

// Видаляємо дані
sessionStorage.removeItem('sessionID');

// Очищаємо всі дані
sessionStorage.clear();`}
        </div>

        <p className="mt-2">
          Web Storage API є корисним для зберігання локальних даних, таких як налаштування користувача, кошик покупок, теми оформлення та інші дані, які не потребують серверної обробки.
        </p>
      </div>
      {/* Cookies API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">47. Cookies API</h3>
        <p className="mb-2">
          Cookies API дозволяє зберігати дані у вигляді cookies, які автоматично передаються з кожним запитом на сервер.
          Cookies зазвичай використовуються для збереження стану сесії, налаштувань користувача або зберігання авторизаційних даних.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основні методи:</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><code>document.cookie</code> — для читання та запису cookies.</li>
          <li><code>document.cookie = "key=value; expires=date; path=path; domain=domain; secure"</code> — записує cookie з відповідними атрибутами.</li>
        </ul>

        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Приклад створення cookie
document.cookie = "username=JohnDoe; expires=Thu, 1 Jan 2026 12:00:00 UTC; path=/";

// Отримання всіх cookies
console.log(document.cookie); // 'username=JohnDoe'`}

        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад використання cookies</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Функція для отримання cookie за ім'ям
function getCookie(name) {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
}

// Приклад: отримаємо значення cookie 'username'
const username = getCookie('username');
console.log(username); // 'JohnDoe'`}

        </div>

        <h4 className="text-lg font-semibold mt-4">Атрибути cookie</h4>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li><strong>expires</strong> — вказує, коли cookie повинна закінчити термін дії.</li>
          <li><strong>path</strong> — вказує, на якій частині сайту cookie буде доступна.</li>
          <li><strong>domain</strong> — вказує домен, з яким cookie буде доступна.</li>
          <li><strong>secure</strong> — cookie передаються тільки через HTTPS.</li>
          <li><strong>SameSite</strong> — визначає, чи може cookie бути надіслана в іншому контексті (для захисту від CSRF атак).</li>
        </ul>

        <p className="mt-2">
          Cookies використовуються для збереження сеансів, даних автентифікації, а також для аналізу поведінки користувачів (наприклад, Google Analytics).
        </p>
      </div>
      {/* Fetch API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">48. Fetch API</h3>
        <p className="mb-2">
          Fetch API дозволяє здійснювати асинхронні HTTP запити з JavaScript. Це простий і потужний спосіб взаємодії з сервером для отримання даних.
        </p>

        <h4 className="text-lg font-semibold mt-2">Основний синтаксис:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Простий запит GET
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
        </div>

        <h4 className="text-lg font-semibold mt-4">POST запит:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// POST запит з даними
fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John',
    age: 30,
  }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Обробка помилок:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Перевірка на успішність запиту
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Асинхронний синтаксис з async/await:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Використання async/await
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchData();`}
        </div>

        <p className="mt-2">
          `Fetch` підтримує всі сучасні методи HTTP запитів (GET, POST, PUT, DELETE). Зазвичай для обробки даних використовують `response.json()` або `response.text()`, залежно від формату відповіді сервера.
        </p>
      </div>
      {/* Web Workers */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">49. Web Workers</h3>
        <p className="mb-2">
          Web Workers дозволяють виконувати JavaScript код у фоновому потоці, відокремленому від головного потоку, що не блокує інтерфейс користувача.
        </p>

        <h4 className="text-lg font-semibold mt-2">Створення простого Web Worker:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// main.js
const worker = new Worker('./worker.js');

worker.postMessage('Hello, Worker!'); // Надсилання повідомлення в worker

worker.onmessage = (e) => {
  console.log('Message from worker:', e.data);
};

worker.onerror = (error) => {
  console.error('Worker error:', error);
};
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">worker.js:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// worker.js
onmessage = (e) => {
  console.log('Message received from main thread:', e.data);
  postMessage('Hello, Main Thread!'); // Надсилання відповіді назад в main thread
};
`}
        </div>

        <p className="mt-2">
          Веб-воркери дозволяють виконувати довготривалі обчислення поза основним потоком JavaScript, що дає змогу не заморожувати інтерфейс.
        </p>

        <h4 className="text-lg font-semibold mt-4">Завершення роботи Web Worker:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Завершення роботи воркера
worker.terminate();`}
        </div>

        <p className="mt-2">
          Важливо пам'ятати, що Web Workers не мають доступу до DOM. Вони можуть лише виконувати обчислення і передавати результати назад в основний потік за допомогою повідомлень.
        </p>
      </div>
      {/* WebSockets */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">50. WebSockets</h3>
        <p className="mb-2">
          WebSockets надають можливість двостороннього зв'язку між клієнтом і сервером через відкритий канал. Це з'єднання, яке залишається активним, і клієнт і сервер можуть передавати повідомлення в будь-який момент.
        </p>

        <h4 className="text-lg font-semibold mt-2">Підключення до WebSocket сервера:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Створення з'єднання з сервером WebSocket
const socket = new WebSocket('ws://example.com/socketserver');

socket.onopen = () => {
  console.log('Connected to WebSocket server');
  socket.send('Hello, Server!'); // Відправка повідомлення на сервер
};

socket.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('Disconnected from WebSocket server');
};
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Закриття WebSocket з'єднання:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Закриття з'єднання WebSocket
socket.close();`}
        </div>

        <p className="mt-2">
          Після встановлення з'єднання через WebSocket клієнт може відправляти та отримувати повідомлення в реальному часі. Після завершення з'єднання його можна закрити через метод `socket.close()`.
        </p>

        <h4 className="text-lg font-semibold mt-4">Переваги WebSockets:</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Двосторонній зв'язок між клієнтом і сервером.</li>
          <li>Зменшення затримок, оскільки не потрібно встановлювати нові з'єднання для кожного запиту.</li>
          <li>Ідеально підходить для додатків у реальному часі (чати, онлайн-ігри, борси тощо).</li>
        </ul>

        <p className="mt-2">
          WebSockets є дуже ефективним способом створення інтерактивних і масштабованих додатків, де важлива швидкість обміну даними.
        </p>
      </div>
      {/* LocalStorage */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">51. LocalStorage</h3>
        <p className="mb-2">
          LocalStorage — це механізм для зберігання даних в браузері, який не має терміну дії. Дані зберігаються навіть після закриття браузера.
        </p>

        <h4 className="text-lg font-semibold mt-2">Запис і читання даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Запис у LocalStorage
localStorage.setItem('username', 'Olexiy');

// Читання з LocalStorage
const username = localStorage.getItem('username');
console.log(username); // Olexiy`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Видалення даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Видалення окремого елемента
localStorage.removeItem('username');

// Очистка всіх даних LocalStorage
localStorage.clear();`}
        </div>

        <p className="mt-2">
          LocalStorage дозволяє зберігати дані у вигляді ключ-значення, де ключ — це рядок, а значення може бути будь-яким типом даних, але для зберігання об'єктів або масивів потрібно використовувати JSON.
        </p>

        <h4 className="text-lg font-semibold mt-4">Переваги LocalStorage:</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Зберігає дані навіть після закриття браузера.</li>
          <li>Ідеально підходить для зберігання невеликих обсягів даних, таких як налаштування користувача чи сесії.</li>
          <li>Має великий обсяг пам'яті (близько 5-10 MB на домен).</li>
        </ul>
      </div>
      {/* SessionStorage */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">52. SessionStorage</h3>
        <p className="mb-2">
          SessionStorage схоже на LocalStorage, але його дані зберігаються тільки до закриття вкладки або браузера.
        </p>

        <h4 className="text-lg font-semibold mt-2">Запис і читання даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Запис у SessionStorage
sessionStorage.setItem('sessionID', '12345');

// Читання з SessionStorage
const sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID); // 12345`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Видалення даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Видалення окремого елемента
sessionStorage.removeItem('sessionID');

// Очистка всіх даних SessionStorage
sessionStorage.clear();`}
        </div>

        <p className="mt-2">
          SessionStorage використовується для зберігання даних, що важливі тільки під час однієї сесії. Це ідеальний варіант для тимчасового зберігання даних, які повинні бути доступні тільки під час активної сесії.
        </p>

        <h4 className="text-lg font-semibold mt-4">Переваги SessionStorage:</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Зберігає дані тільки під час поточної сесії браузера.</li>
          <li>Дані автоматично очищаються після закриття вкладки або браузера.</li>
          <li>Чудово підходить для тимчасових даних, таких як проміжні кроки в процесі покупки чи фільтрація результатів на сторінці.</li>
        </ul>
      </div>
      {/* Web Worker */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">53. Web Workers</h3>
        <p className="mb-2">
          Web Workers дозволяють виконувати JavaScript код у фонових потоках, щоб не блокувати основний потік.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад використання Web Worker:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`// Створення нового Web Worker
const worker = new Worker('worker.js');

// Надсилання даних в Worker
worker.postMessage(10);

// Отримання результату від Worker
worker.onmessage = function (e) {
  console.log('Результат з Web Worker:', e.data); // 20
};
`}
        </div>

        <p className="mt-2">
          Важливо пам'ятати, що **Web Workers** працюють у окремому потоці і мають обмежений доступ до DOM, тому вони можуть лише обробляти дані і передавати їх назад головному потоку через повідомлення.
        </p>

        <h4 className="text-lg font-semibold mt-4">Обмеження Web Workers:</h4>
        <ul className="list-disc pl-6 mt-2">
          <li>Не мають прямого доступу до DOM.</li>
          <li>Не можуть використовувати глобальні змінні основного потоку.</li>
          <li>Не підтримують бібліотеки типу jQuery, оскільки вони потребують доступу до DOM.</li>
        </ul>
      </div>
      {/* IndexedDB */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">55. IndexedDB</h3>
        <p className="mb-2">
          IndexedDB — це API для зберігання великих обсягів структурованих даних в браузері. Це дозволяє створювати локальні бази даних, що зберігаються на стороні клієнта, і доступні для оффлайн-режиму.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад створення та відкриття бази даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const request = indexedDB.open('myDatabase', 1);

request.onsuccess = function(event) {
  const db = event.target.result;
  console.log('База даних відкрита', db);
};

request.onerror = function(event) {
  console.error('Помилка відкриття бази даних', event.target.error);
};

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  if (!db.objectStoreNames.contains('users')) {
    const store = db.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('name', 'name', { unique: false });
  }
};
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад додавання даних:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const dbRequest = indexedDB.open('myDatabase', 1);
dbRequest.onsuccess = function(event) {
  const db = event.target.result;
  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');
  
  const user = { id: 1, name: 'Олексій' };
  store.add(user);
  
  transaction.oncomplete = function() {
    console.log('Дані додано');
  };
  
  transaction.onerror = function() {
    console.error('Помилка додавання даних');
  };
};
`}
        </div>
      </div>
      {/* File API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">56. File API</h3>
        <p className="mb-2">
          File API дозволяє зчитувати вміст файлів, які були завантажені користувачем, а також завантажувати файли на сервер.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад зчитування файлу:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    console.log('Вміст файлу:', e.target.result);
  };
  
  reader.onerror = function() {
    console.error('Помилка зчитування файлу');
  };
  
  reader.readAsText(file); // Зчитування файлу як текст
});
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад завантаження файлу на сервер:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const formData = new FormData();
formData.append('file', fileInput.files[0]);

fetch('/upload', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => console.log('Файл успішно завантажено:', data))
.catch(error => console.error('Помилка завантаження файлу:', error));
`}
        </div>
      </div>
      {/* WebSockets */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">57. WebSockets</h3>
        <p className="mb-2">
          WebSockets дозволяють створювати постійне з'єднання між клієнтом і сервером для обміну даними в реальному часі.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад створення з'єднання через WebSocket:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`const socket = new WebSocket('wss://example.com/socket');

// Відкриття з'єднання
socket.onopen = function(event) {
  console.log('З\'єднання відкрите:', event);
  socket.send('Привіт, сервер!');
};

// Отримання повідомлень від сервера
socket.onmessage = function(event) {
  console.log('Отримано повідомлення:', event.data);
};

// Обробка помилок
socket.onerror = function(event) {
  console.error('Помилка WebSocket:', event);
};

// Закриття з'єднання
socket.onclose = function(event) {
  console.log('З\'єднання закрите:', event);
};
`}
        </div>
        
        <h4 className="text-lg font-semibold mt-4">Приклад відправлення повідомлення:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`socket.send(JSON.stringify({ type: 'chat', message: 'Привіт, як справи?' }));
`}
        </div>
      </div>
      {/* Geolocation API */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">58. Geolocation API</h3>
        <p className="mb-2">
          Geolocation API дозволяє отримати фізичне місцезнаходження користувача для різних цілей, таких як карти або локалізовані сервіси.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад отримання поточного місцезнаходження:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(\`Ваше місцезнаходження: \${lat}, \${lon}\`);
  }, function(error) {
    console.error('Помилка отримання місцезнаходження:', error);
  });
} else {
  console.log('Geolocation не підтримується вашим браузером');
}
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад відстеження змін місцезнаходження:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`if (navigator.geolocation) {
  const watchId = navigator.geolocation.watchPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(\`Місцезнаходження оновлено: \${lat}, \${lon}\`);
  }, function(error) {
    console.error('Помилка отримання місцезнаходження:', error);
  });
} else {
  console.log('Geolocation не підтримується вашим браузером');
}
`}
        </div>
      </div>
      {/* Push Notifications */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">59. Push Notifications</h3>
        <p className="mb-2">
          Push Notifications дозволяють надсилати повідомлення користувачам навіть після того, як вони покинули сайт або закрили браузер.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад реєстрації сервісу Push:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`if ('Notification' in window && 'serviceWorker' in navigator) {
  Notification.requestPermission().then(function(permission) {
    if (permission === 'granted') {
      console.log('Дозвіл на сповіщення надано');
    }
  });
}`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад реєстрації Service Worker:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
  console.log('Service Worker зареєстровано:', registration);
}).catch(function(error) {
  console.error('Помилка реєстрації Service Worker:', error);
});
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад надсилання Push-повідомлення:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`self.registration.showNotification('Привіт, це Push-повідомлення!', {
  body: 'Текст повідомлення',
  icon: '/path/to/icon.png',
});
`}
        </div>
      </div>
      {/* Service Workers */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        <h3 className="text-xl font-bold mb-2">60. Service Workers</h3>
        <p className="mb-2">
          Service Workers дозволяють створювати офлайн-можливості та обробляти фонові задачі, такі як кешування ресурсів і сповіщення.
        </p>

        <h4 className="text-lg font-semibold mt-2">Приклад реєстрації Service Worker:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('Service Worker зареєстровано:', registration);
  }).catch(function(error) {
    console.error('Помилка реєстрації Service Worker:', error);
  });
}`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад кешування ресурсів:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
      ]);
    })
  );
});
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад обробки запитів та кешування:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
`}
        </div>

        <h4 className="text-lg font-semibold mt-4">Приклад обробки Push-повідомлень:</h4>
        <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
{`self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: '/icon.png',
    badge: '/badge.png',
  };

  event.waitUntil(
    self.registration.showNotification('Новий меседж!', options)
  );
});
`}
        </div>
      </div>

    </div>
  );
};


