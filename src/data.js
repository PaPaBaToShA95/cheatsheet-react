const cheatsheetData = [
    {
        title: "If - Else",
        examples: [
            {
                description: "Базова умова",
                code: `let age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`
            },
            {
                description: "Комбінована умова",
                code: `if (age >= 14 && age <= 19) {
  console.log("Teenager");
}`
            }
        ]
    },
    {
        title: "Variables",
        examples: [
            {
                description: "Оголошення змінних",
                code: `let name = "Alex";
const age = 30;
var oldStyle = true;`
            },
            {
                description: "Перевизначення",
                code: `name = "John"; // let дозволяє змінювати значення`
            }
        ]
    },
    {
        title: "Loops",
        examples: [
            {
                description: "Цикл for",
                code: `for (let i = 0; i < 5; i++) {
  console.log(i);
}`
            },
            {
                description: "Цикл while",
                code: `let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}`
            }
        ]
    },
    {
        title: "Switch",
        examples: [
            {
                description: "Приклад з рядками",
                code: `let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("🍎");
    break;
  case "banana":
    console.log("🍌");
    break;
  default:
    console.log("Unknown fruit");
}`
            }
        ]
    }
];

export default cheatsheetData;
