export const jsCheatsData = [
  {
    title: "ЩО ТАКЕ JS",
    description: "Основи HTML",
    code: "HTML (HyperText Markup Language) — мова розмітки, яка використовується для створення структури веб-сторінок. Вона визначає заголовки, параграфи, посилання, зображення та інші елементи на сторінці. HTML не є мовою програмування — це мова структурування контенту.",
    preview: <div></div>,
  },
  {
    title: "Animation",
    description:
      "Анімаційні події дозволяють відстежувати початок, завершення та перебіг CSS-анімацій у DOM.",
    code: `element.addEventListener('animationstart', function(event) 
    { /* Код для початку анімації */ });
element.addEventListener('animationiteration', function(event) 
{ /* Код для повторення анімації */ });
element.addEventListener('animationend', function(event)
 { /* Код для завершення анімації */ });`,
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Властивість</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>animationName</code>
              </td>
              <td>
                Властивість об'єкта події анімації, що повертає назву
                CSS-анімації, яка викликала подію. Це корисно для відстеження
                конкретних анімацій, коли до елемента застосовано декілька
                анімацій.
              </td>
            </tr>
            <tr>
              <td>
                <code>elapsedTime</code>
              </td>
              <td>
                Властивість, що показує час (у секундах), який минув з початку
                виконання анімації до моменту виникнення події. Допомагає
                контролювати тривалість та етапи анімації в реальному часі.
              </td>
            </tr>
            <tr>
              <td>
                <code>pseudoElement</code>
              </td>
              <td>
                Властивість, яка вказує на псевдоелемент, що викликав анімаційну
                подію (наприклад, <code>::before</code> чи <code>::after</code>
                ). Якщо подія стосується самого елемента, повертає порожній
                рядок.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Array",
    description:
      "Масиви використовуються для зберігання кількох значень в одній змінній.",
    code: "const array = [1, 2, 3, 4, 5];",
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Метод</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>at()</code>
              </td>
              <td>Повертає елемент масиву за вказаним індексом.</td>
            </tr>
            <tr>
              <td>
                <code>concat()</code>
              </td>
              <td>
                Долучає до масиву ряд масивів або значень. Об'єднує два чи
                більше масивів у один.
              </td>
            </tr>
            <tr>
              <td>
                <code>copyWithin()</code>
              </td>
              <td>
                Копіює елементи масиву всередині масиву згідно з заданими
                позиціями.
              </td>
            </tr>
            <tr>
              <td>
                <code>entries()</code>
              </td>
              <td>
                Повертає Array Iteration Object поточного масиву у вигляді пари
                ключ/значення.
              </td>
            </tr>
            <tr>
              <td>
                <code>every()</code>
              </td>
              <td>
                Перевіряє, чи кожен елемент масиву задовільняє заданим вимогам.
              </td>
            </tr>
            <tr>
              <td>
                <code>fill()</code>
              </td>
              <td>Заповнює елементи в масиві певним статичним значенням.</td>
            </tr>
            <tr>
              <td>
                <code>filter()</code>
              </td>
              <td>
                Створює новий масив, але тільки з тих елементів, котрі пройшли
                перевірку.
              </td>
            </tr>
            <tr>
              <td>
                <code>find()</code>
              </td>
              <td>
                Повертає значення першого знайденого елемента масиву, котрий
                пройшов перевірку.
              </td>
            </tr>
            <tr>
              <td>
                <code>findIndex()</code>
              </td>
              <td>
                Повертає індекс першого знайденого елемента масиву, котрий
                пройшов перевірку.
              </td>
            </tr>
            <tr>
              <td>
                <code>flat()</code>
              </td>
              <td>
                Формує з багатовимірного масиву, масив з меншою кількістю
                вимірів.
              </td>
            </tr>
            <tr>
              <td>
                <code>flatMap()</code>
              </td>
              <td>
                Виконує вказану функцію над кожним елементом масиву який
                вилазить за дозволену кількість вимірів.
              </td>
            </tr>
            <tr>
              <td>
                <code>forEach()</code>
              </td>
              <td>Виконує функцію для кожного елемента масиву.</td>
            </tr>
            <tr>
              <td>
                <code>from()</code>
              </td>
              <td>Створює масив з масивоподібного об’єкта.</td>
            </tr>
            <tr>
              <td>
                <code>includes()</code>
              </td>
              <td>Перевірте, чи містить масив вказаний елемент.</td>
            </tr>
            <tr>
              <td>
                <code>indexOf()</code>
              </td>
              <td>
                Шукає, починаючи з початку масиву, вказане значення в масиві та
                повертає його позицію.
              </td>
            </tr>
            <tr>
              <td>
                <code>lastIndexOf()</code>
              </td>
              <td>
                Шукає, починаючи з кінця масиву, вказане значення в масиві та
                повертає його позицію.
              </td>
            </tr>
            <tr>
              <td>
                <code>isArray()</code>
              </td>
              <td>Перевіряє, чи є вказаний об’єкт масивом.</td>
            </tr>
            <tr>
              <td>
                <code>join()</code>
              </td>
              <td>Об’єднує всі елементи масиву в рядок.</td>
            </tr>
            <tr>
              <td>
                <code>keys()</code>
              </td>
              <td>
                Повертає Array Iteration Object, що містить ключі вихідного
                масиву.
              </td>
            </tr>
            <tr>
              <td>
                <code>map()</code>
              </td>
              <td>
                Створює новий масив із результатом виклику функції для кожного
                елемента масиву.
              </td>
            </tr>
            <tr>
              <td>
                <code>pop()</code>
              </td>
              <td>
                Вилучає останній елемент з масиву та повертає його значення.
              </td>
            </tr>
            <tr>
              <td>
                <code>push()</code>
              </td>
              <td>
                Додає нові елементи в кінець масиву і повертає довжину
                утвореного масиву.
              </td>
            </tr>
            <tr>
              <td>
                <code>reduce()</code>
              </td>
              <td>
                Зменшує значення масиву до одного значення (зліва направо).
              </td>
            </tr>
            <tr>
              <td>
                <code>reduceRight()</code>
              </td>
              <td>
                Зменшує значення масиву до одного значення (справо наліво).
              </td>
            </tr>
            <tr>
              <td>
                <code>reverse()</code>
              </td>
              <td>Змінює порядок елементів у масиві на протилежний.</td>
            </tr>
            <tr>
              <td>
                <code>shift()</code>
              </td>
              <td>
                Видаляє нові елементи з початку масиву і повертає довжину
                утвореного масиву.
              </td>
            </tr>
            <tr>
              <td>
                <code>slice()</code>
              </td>
              <td>
                Повертає нову копію частини масиву, обрану між початковим та
                кінцевим індексами (кінець не включено).
              </td>
            </tr>
            <tr>
              <td>
                <code>some()</code>
              </td>
              <td>
                Перевіряє, чи пройшов перевірку хоча б один елемент у масиві.
              </td>
            </tr>
            <tr>
              <td>
                <code>sort()</code>
              </td>
              <td>
                Сортує елементи масиву на місці та повертає відсортований масив.
              </td>
            </tr>
            <tr>
              <td>
                <code>splice()</code>
              </td>
              <td>
                Видаляє елементи з масиву і при необхідності вставляє на їх
                місце нові елементи, повертаючи вилучені елементи.
              </td>
            </tr>
            <tr>
              <td>
                <code>toString()</code>
              </td>
              <td>Перетворює масив на рядок.</td>
            </tr>
            <tr>
              <td>
                <code>unshift()</code>
              </td>
              <td>
                Додає нові елементи на початок масиву і повертає довжину
                утвореного масиву.
              </td>
            </tr>
            <tr>
              <td>
                <code>valueOf()</code>
              </td>
              <td>Просто повертає масив.</td>
            </tr>
            <tr>
              <td>
                <code>createAttribute()</code>
              </td>
              <td>Створює новий атрибут для елемента DOM.</td>
            </tr>
          </tbody>
        </table>

        <table className="mt-10">
          <thead>
            <tr className="bg-gray-500">
              <th>Властивість</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>constructor</code>
              </td>
              <td>Повертає функцію, яка створила прототип об’єкта Array.</td>
            </tr>
            <tr>
              <td>
                <code>length</code>
              </td>
              <td>Встановлює або повертає кількість елементів у масиві.</td>
            </tr>
            <tr>
              <td>
                <code>prototype</code>
              </td>
              <td>Прототип конструктора поточного об'єкту.</td>
            </tr>
            <tr>
              <td>
                <code>embeds</code>
              </td>
              <td>
                Повертає колекцію всіх елементів <code>&lt;embed&gt;</code> у
                документі.
              </td>
            </tr>
            <tr>
              <td>
                <code>loadedmetadata</code>
              </td>
              <td>
                Викликається, коли метадані медіафайлу (тривалість, розміри,
                тощо) завантажені.
              </td>
            </tr>
            <tr>
              <td>
                <code>submit</code>
              </td>
              <td>Спрацьовує, коли користувач надсилає форму на сервер.</td>
            </tr>
            <tr>
              <td>
                <code>deltaY</code>
              </td>
              <td>
                Визначає величину вертикального прокручування, здійсненого
                колесом миші.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Attr",
    description:
      "Представляє атрибут елемента DOM та дозволяє отримувати та модифікувати його значення.",
    code: `const element = document.getElementById('myElement');
const attribute = element.getAttributeNode('class');
console.log(attribute.value); // Отримання значення атрибута`,
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Властивість</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>Повертає ім'я атрибута.</td>
            </tr>
            <tr>
              <td>
                <code>ownerElement</code>
              </td>
              <td>Повертає елемент, якому належить атрибут.</td>
            </tr>
            <tr>
              <td>
                <code>specified</code>
              </td>
              <td>
                Повертає булеве значення, що вказує, чи був атрибут явно заданий
                в HTML, чи має значення за замовчуванням.
              </td>
            </tr>
            <tr>
              <td>
                <code>value</code>
              </td>
              <td>Повертає або встановлює значення атрибута.</td>
            </tr>
          </tbody>
        </table>
        <table className="mt-10">
          <thead>
            <tr className="bg-gray-500">
              <th>Метод</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>getValue()</code>
              </td>
              <td>
                Повертає значення атрибута. (Зазвичай використовується через
                властивість <code>value</code>)
              </td>
            </tr>
            <tr>
              <td>
                <code>setValue(newVal)</code>
              </td>
              <td>
                Встановлює значення атрибута. (Зазвичай використовується через
                властивість <code>value</code>)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Boolean",
    description: "Представляє значення істини: true або false.",
    code: `const isTrue = true;
const isFalse = false;

if (isTrue) {
  console.log("Це правда!");
}`,
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Значення</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>true</code>
              </td>
              <td>Представляє істинне значення.</td>
            </tr>
            <tr>
              <td>
                <code>false</code>
              </td>
              <td>Представляє хибне значення.</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">
          Булеві значення є результатом логічних операцій (<code>==</code>,{" "}
          <code>!=</code>, <code>&lt;</code>, <code>&gt;</code> тощо) та
          використовуються в умовних операторах (<code>if</code>,{" "}
          <code>else</code>) і циклах.
        </p>
      </div>
    ),
  },
  {
    title: "break",
    description:
      "Дозволяє завершити виконання циклу або блоку коду достроково.",
    code: `for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Вихід з циклу, коли i дорівнює 5
  }
  console.log(i);
}`,
    preview: (
      <div>
        <p>
          Оператор <code>break</code> використовується всередині циклів (
          <code>for</code>, <code>while</code>, <code>do...while</code>) та
          оператора <code>switch</code> для негайного виходу з них.
        </p>
        <p className="mt-4">
          Коли <code>break</code> зустрічається всередині циклу, виконання циклу
          негайно припиняється, і керування передається до оператора, що йде
          після циклу.
        </p>
        <p className="mt-4">
          У випадку з оператором <code>switch</code>, <code>break</code>{" "}
          використовується для виходу з блоку <code>switch</code> після
          виконання відповідного <code>case</code>. Якщо <code>break</code>{" "}
          відсутній, виконання "провалюється" до наступного <code>case</code>.
        </p>
      </div>
    ),
  },
  {
    title: "class (ключове слово)",
    description:
      "Дозволяє створювати об'єкти з визначеними властивостями та методами, використовуючи шаблон.",
    code: `class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

const myRectangle = new Rectangle(10, 20);
console.log(myRectangle.area()); // Виведе 200`,
    preview: (
      <div>
        <p>
          Ключове слово <code>class</code> в JavaScript використовується для
          визначення шаблону для створення об'єктів. Класи інкапсулюють дані
          (властивості) та поведінку (методи) в одному блоці.
        </p>
        <p className="mt-4">
          Конструктор (<code>constructor</code>) є спеціальним методом всередині
          класу, який викликається при створенні нового об'єкта класу. Він
          використовується для ініціалізації властивостей об'єкта.
        </p>
        <p className="mt-4">
          Методи класу визначають дії, які можуть виконувати об'єкти цього
          класу.
        </p>
        <p className="mt-4">
          Для створення нового об'єкта класу використовується ключове слово{" "}
          <code>new</code>.
        </p>
      </div>
    ),
  },
  {
    title: "Class (концепція)",
    description: "Шаблон для створення об'єктів.",
    code: `// Приклад оголошення класу (див. попередній приклад)`,
    preview: (
      <div>
        <p>
          У програмуванні, концепція <b>класу</b> є основою
          об'єктно-орієнтованого програмування (ООП). Клас є абстрактним описом
          набору об'єктів з подібними характеристиками (властивостями) та
          поведінкою (методами).
        </p>
        <p className="mt-4">
          <b>Основні характеристики класів:</b>
          <ul>
            <li>
              <b>Інкапсуляція:</b> Об'єднання даних та методів, що працюють з
              цими даними, в одному блоці.
            </li>
            <li>
              <b>Абстракція:</b> Приховування складної реалізації та надання
              користувачеві лише необхідного інтерфейсу.
            </li>
            <li>
              <b>Успадкування:</b> Можливість створення нових класів на основі
              існуючих, що дозволяє повторно використовувати код.
            </li>
            <li>
              <b>Поліморфізм:</b> Можливість об'єктів різних класів реагувати на
              один і той самий метод по-різному.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          У JavaScript, класи були введені в ECMAScript 2015 (ES6) і надають
          більш зрозумілий синтаксис для роботи з прототипно-орієнтованою
          моделлю.
        </p>
      </div>
    ),
  },
  {
    title: "Clipboard",
    description:
      "Дозволяє перехоплювати і обробляти операції копіювання, вирізання і вставки в елементах.",
    code: `navigator.clipboard.writeText('Текст для копіювання')
  .then(() => {
    console.log('Текст скопійовано в буфер обміну');
  })
  .catch(err => {
    console.error('Не вдалося скопіювати текст: ', err);
  });

navigator.clipboard.readText()
  .then(text => {
    console.log('Вміст буфера обміну: ', text);
  })
  .catch(err => {
    console.error('Не вдалося прочитати буфер обміну: ', err);
  });`,
    preview: (
      <div>
        <p>
          Інтерфейс <code>Clipboard</code> надає засоби для взаємодії з
          системним буфером обміну для виконання операцій копіювання та вставки.
        </p>
        <p className="mt-4">
          <b>Основні методи:</b>
          <ul>
            <li>
              <code>navigator.clipboard.writeText(text)</code>: Записує вказаний
              текст у буфер обміну. Повертає Promise, який успішно завершується
              після копіювання.
            </li>
            <li>
              <code>navigator.clipboard.readText()</code>: Зчитує текст з буфера
              обміну. Повертає Promise, який успішно завершується з прочитаним
              текстом.
            </li>
            <li>
              <code>navigator.clipboard.write(items)</code>: Записує довільні
              дані (наприклад, зображення) у буфер обміну. Приймає масив
              об'єктів <code>ClipboardItem</code>.
            </li>
            <li>
              <code>navigator.clipboard.read()</code>: Зчитує довільні дані з
              буфера обміну. Повертає Promise, який успішно завершується з
              масивом об'єктів <code>ClipboardItem</code>.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Доступ до <code>navigator.clipboard</code> може бути обмежений з
          міркувань безпеки (наприклад, може вимагати взаємодії з користувачем).
        </p>
      </div>
    ),
  },
  {
    title: "Collection",
    description: "Набір об'єктів (елементів) у DOM.",
    code: `const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length); // Кількість знайдених параграфів
console.log(paragraphs[0].textContent); // Вміст першого параграфа`,
    preview: (
      <div>
        <p>
          У контексті DOM, <b>колекція</b> являє собою групу HTML-елементів.
          Колекції є об'єктами, схожими на масиви (мають властивість{" "}
          <code>length</code> та доступ до елементів за індексом), але можуть не
          мати всіх методів масиву.
        </p>
        <p className="mt-4">
          <b>Приклади колекцій:</b>
          <ul>
            <li>
              <code>document.getElementsByTagName(tagName)</code>: Повертає{" "}
              <code>HTMLCollection</code> всіх елементів із заданим тегом.
            </li>
            <li>
              <code>document.getElementsByClassName(className)</code>: Повертає{" "}
              <code>HTMLCollection</code> всіх елементів із заданим класом.
            </li>
            <li>
              <code>document.forms</code>: Повертає <code>HTMLCollection</code>{" "}
              всіх елементів <code>&lt;form&gt;</code> у документі.
            </li>
            <li>
              <code>document.images</code>: Повертає <code>HTMLCollection</code>{" "}
              всіх елементів <code>&lt;img&gt;</code> у документі.
            </li>
            <li>
              <code>document.links</code>: Повертає <code>HTMLCollection</code>{" "}
              всіх елементів <code>&lt;a&gt;</code> з атрибутом{" "}
              <code>href</code>.
            </li>
            <li>
              <code>element.children</code>: Повертає{" "}
              <code>HTMLCollection</code> всіх дочірніх елементів даного
              елемента.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Важливо відзначити, що деякі колекції (наприклад, отримані через{" "}
          <code>getElementsByTagName</code> та{" "}
          <code>getElementsByClassName</code>) є <b>живими</b>. Це означає, що
          якщо DOM змінюється, колекція автоматично оновлюється. Колекції,
          отримані через властивості (наприклад, <code>element.children</code>),
          також зазвичай є живими.
        </p>
      </div>
    ),
  },
  {
    title: "Console",
    description:
      "Надає методи для виводу інформації в консоль веб-браузера та взаємодії з нею.",
    code: `console.log('Інформаційне повідомлення');
console.warn('Попередження!');
console.error('Помилка!');
console.table({ name: 'John', age: 30 }, ['name', 'age']);
console.time('Мій код');
// ... код для вимірювання часу виконання ...
console.timeEnd('Мій код');`,
    preview: (
      <div>
        <p>
          Об'єкт <code>console</code> надає доступ до консолі налагодження
          браузера. Він містить різні методи для виведення інформації, що
          корисно для відстеження виконання коду, виявлення помилок та
          інспектування значень змінних.
        </p>
        <p className="mt-4">
          <b>Основні методи:</b>
          <ul>
            <li>
              <code>console.log(message, ...)</code>: Виводить загальне
              інформаційне повідомлення в консоль.
            </li>
            <li>
              <code>console.warn(message, ...)</code>: Виводить попередження в
              консоль.
            </li>
            <li>
              <code>console.error(message, ...)</code>: Виводить повідомлення
              про помилку в консоль.
            </li>
            <li>
              <code>console.info(message, ...)</code>: Виводить інформаційне
              повідомлення (часто відображається так само, як <code>log</code>).
            </li>
            <li>
              <code>console.debug(message, ...)</code>: Виводить повідомлення
              налагодження (може фільтруватися в налаштуваннях консолі).
            </li>
            <li>
              <code>console.table(data, columns?)</code>: Виводить дані у
              вигляді таблиці. <code>data</code> може бути масивом об'єктів або
              об'єктом. <code>columns</code> (необов'язково) - масив імен
              властивостей для відображення.
            </li>
            <li>
              <code>console.time(label)</code>: Запускає таймер із заданою
              міткою.
            </li>
            <li>
              <code>console.timeEnd(label)</code>: Зупиняє таймер із заданою
              міткою та виводить час, що минув.
            </li>
            <li>
              <code>console.count(label?)</code>: Виводить кількість викликів із
              заданою міткою.
            </li>
            <li>
              <code>console.group(label)</code>: Починає новий вкладений блок
              повідомлень у консолі.
            </li>
            <li>
              <code>console.groupEnd()</code>: Завершує поточний вкладений блок
              повідомлень у консолі.
            </li>
            <li>
              <code>console.clear()</code>: Очищує консоль.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "const",
    description: "Декларує змінну, значення якої не можна перепризначити.",
    code: `const PI = 3.14159;
// PI = 3.14; // Це призведе до помилки, оскільки PI є константою

const user = {
  name: 'Alice',
  age: 30
};
user.age = 31; // Це дозволено, оскільки змінюється властивість об'єкта, а не сама змінна 'user'
// user = { name: 'Bob', age: 25 }; // Це призведе до помилки`,
    preview: (
      <div>
        <p>
          Ключове слово <code>const</code> використовується для оголошення
          констант - змінних, яким присвоюється значення лише один раз під час
          оголошення. Після цього перепризначення значення константі є
          забороненим і призведе до помилки.
        </p>
        <p className="mt-4">
          Важливо розуміти, що <code>const</code> застосовується до самого
          зв'язування змінної та значення. Якщо змінна оголошена як{" "}
          <code>const</code> і їй присвоєно об'єкт або масив, то властивості
          цього об'єкта або елементи масиву можуть бути змінені. Однак, спроба
          перепризначити саму змінну іншим об'єктом або масивом призведе до
          помилки.
        </p>
      </div>
    ),
  },
  {
    title: "continue",
    description:
      "Пропускає виконання поточної ітерації циклу та переходить до наступної.",
    code: `for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Пропустити ітерацію, коли i дорівнює 5
  }
  console.log(i); // Це не буде виконано, коли i дорівнює 5
}`,
    preview: (
      <div>
        <p>
          Оператор <code>continue</code> використовується всередині циклів (
          <code>for</code>, <code>while</code>, <code>do...while</code>) для
          пропуску поточної ітерації. Коли оператор <code>continue</code>{" "}
          зустрічається в циклі, виконання поточного блоку коду в циклі
          припиняється, і керування передається на початок наступної ітерації
          циклу.
        </p>
        <p className="mt-4">
          Для циклів <code>for</code>, це означає, що виконується вираз
          оновлення (третій вираз у заголовку циклу), а потім перевіряється
          умова. Для циклів <code>while</code> та <code>do...while</code>,
          керування передається безпосередньо до перевірки умови.
        </p>
      </div>
    ),
  },
  {
    title: "CSSStyleDeclaration",
    description:
      "Представляє колекцію CSS-властивостей для конкретного DOM-елемента та дозволяє зчитувати або модифікувати їх значення.",
    code: `const element = document.getElementById('myElement');
const style = element.style; // Отримання об'єкта CSSStyleDeclaration

console.log(style.backgroundColor); // Зчитування значення властивості
style.color = 'white'; // Встановлення значення властивості
style.fontSize = '16px';`,
    preview: (
      <div>
        <p>
          Інтерфейс <code>CSSStyleDeclaration</code> представляє об'єкт, що
          містить CSS-властивості елемента, як inline-стилі (в атрибуті{" "}
          <code>style</code>), так і обчислені стилі (результат застосування
          всіх CSS-правил).
        </p>
        <p className="mt-4">
          Об'єкт <code>CSSStyleDeclaration</code> є псевдомасивом і надає доступ
          до CSS-властивостей за їхніми JavaScript-іменами (в camelCase).
        </p>
        <p className="mt-4">
          <b>Основні способи взаємодії:</b>
          <ul>
            <li>
              <b>Зчитування властивостей:</b> Доступ до властивостей
              здійснюється через їхні camelCase-імена (наприклад,{" "}
              <code>style.backgroundColor</code>, <code>style.fontSize</code>).
            </li>
            <li>
              <b>Встановлення властивостей:</b> Значення властивостей
              присвоюються так само, як і звичайним властивостям об'єкта
              (наприклад, <code>style.color = 'red'</code>).
            </li>
            <li>
              <b>
                <code>getPropertyValue(propertyName)</code>:
              </b>{" "}
              Повертає рядкове значення CSS-властивості за її CSS-іменем
              (наприклад,{" "}
              <code>style.getPropertyValue('background-color')</code>).
            </li>
            <li>
              <b>
                <code>setProperty(propertyName, value, priority?)</code>:
              </b>{" "}
              Встановлює значення CSS-властивості. <code>priority</code> є
              необов'язковим рядком ('important').
            </li>
            <li>
              <b>
                <code>removeProperty(propertyName)</code>:
              </b>{" "}
              Видаляє CSS-властивість.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Date",
    description:
      "Представляє єдиний момент часу в незалежному від платформи форматі.",
    code: `const now = new Date();
console.log(now);

const specificDate = new Date('2023-12-25T10:30:00');
console.log(specificDate);

const year = now.getFullYear();
const month = now.getMonth(); // 0-індексований (0 - січень, 11 - грудень)
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();`,
    preview: (
      <div>
        <p>
          Об'єкт <code>Date</code> в JavaScript використовується для роботи з
          датами та часом. Він надає ряд методів для створення, отримання та
          маніпулювання датами та часом.
        </p>
        <p className="mt-4">
          <b>
            Основні способи створення об'єктів <code>Date</code>:
          </b>
          <ul>
            <li>
              <code>new Date()</code>: Створює об'єкт з поточною датою та часом.
            </li>
            <li>
              <code>new Date(value)</code>: Створює об'єкт з вказаним числом
              мілісекунд, що минули з 1 січня 1970 року UTC.
            </li>
            <li>
              <code>new Date(dateString)</code>: Створює об'єкт з рядкового
              представлення дати та часу. Формат рядка може варіюватися, але ISO
              8601 є рекомендованим.
            </li>
            <li>
              <code>
                new Date(year, monthIndex, day?, hours?, minutes?, seconds?,
                milliseconds?)
              </code>
              : Створює об'єкт з вказаними компонентами дати та часу.{" "}
              <code>monthIndex</code> є 0-індексованим.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Об'єкт <code>Date</code> надає безліч методів для отримання (
          <code>getFullYear</code>, <code>getMonth</code>, <code>getDate</code>,{" "}
          <code>getHours</code>, <code>getMinutes</code>,{" "}
          <code>getSeconds</code>, <code>getMilliseconds</code>,{" "}
          <code>getDay</code> (день тижня), <code>getTime</code> (мілісекунди з
          епохи)) та встановлення (<code>setFullYear</code>,{" "}
          <code>setMonth</code>, <code>setDate</code>, тощо) компонентів дати та
          часу.
        </p>
      </div>
    ),
  },
  {
    title: "debugger",
    description:
      "Зупиняє виконання коду на вказаній точці для налагодження в інструментах розробника.",
    code: `function myFunction(x) {
  let y = x * 2;
  debugger; // Виконання коду зупиниться тут при відкритих інструментах розробника
  let z = y + 5;
  return z;
}

console.log(myFunction(10));`,
    preview: (
      <div>
        <p>
          Оператор <code>debugger</code> використовується для навмисної зупинки
          виконання JavaScript-коду в точці, де він розміщений. Це корисно під
          час розробки та налагодження для інспектування стану програми
          (значення змінних, стек викликів тощо) за допомогою інструментів
          розробника браузера (Developer Tools).
        </p>
        <p className="mt-4">
          Коли браузер зустрічає оператор <code>debugger</code>, і якщо
          інструменти розробника відкриті, виконання JavaScript-коду буде
          призупинено. Розробник зможе крок за кроком виконувати код,
          переглядати значення змінних та аналізувати потік виконання програми.
        </p>
        <p className="mt-4">
          Якщо інструменти розробника не відкриті, оператор{" "}
          <code>debugger</code> зазвичай не має жодного ефекту, і виконання коду
          продовжується без зупинки.
        </p>
      </div>
    ),
  },
  {
    title: "Document",
    description:
      "Представляє веб-документ та надає функціональність для доступу та маніпулювання його структурою, змістом та стилем.",
    code: `console.log(document.title); // Отримання заголовка документа
const body = document.body; // Отримання елемента <body>
const element = document.getElementById('myElement'); // Отримання елемента за ID
const newParagraph = document.createElement('p'); // Створення нового елемента <p>
newParagraph.textContent = 'Новий параграф!';
document.body.appendChild(newParagraph); // Додавання елемента до <body>`,
    preview: (
      <div>
        <p>
          Об'єкт <code>document</code> є кореневим об'єктом у DOM (Document
          Object Model) і представляє всю HTML-сторінку. Він надає безліч
          властивостей та методів для взаємодії з HTML-документом.
        </p>
        <p className="mt-4">
          <b>Основні категорії функціональності:</b>
          <ul>
            <li>
              <b>Доступ до елементів:</b> Методи для вибору елементів за ID (
              <code>getElementById</code>), класом (
              <code>getElementsByClassName</code>), тегом (
              <code>getElementsByTagName</code>), CSS-селекторами (
              <code>querySelector</code>, <code>querySelectorAll</code>).
            </li>
            <li>
              <b>Маніпулювання DOM:</b> Методи для створення нових елементів (
              <code>createElement</code>), текстових вузлів (
              <code>createTextNode</code>), додавання (<code>appendChild</code>,{" "}
              <code>insertBefore</code>), видалення (<code>removeChild</code>),
              заміни (<code>replaceChild</code>) елементів.
            </li>
            <li>
              <b>Атрибути:</b> Методи для отримання (<code>getAttribute</code>),
              встановлення (<code>setAttribute</code>), видалення (
              <code>removeAttribute</code>) атрибутів елементів.
            </li>
            <li>
              <b>CSS-стилі:</b> Доступ до inline-стилів (властивість{" "}
              <code>style</code>) та обчислених стилів (метод{" "}
              <code>getComputedStyle</code>).
            </li>
            <li>
              <b>Інформація про документ:</b> Властивості для отримання
              інформації про документ (<code>title</code>, <code>body</code>,{" "}
              <code>head</code>, <code>URL</code>, <code>readyState</code>{" "}
              тощо).
            </li>
            <li>
              <b>Події:</b> Методи для додавання (<code>addEventListener</code>)
              та видалення (<code>removeEventListener</code>) обробників подій.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "DOMTokenList",
    description:
      "Представляє список рядкових токенів, що зазвичай використовуються для управління класами елементів.",
    code: `const element = document.getElementById('myElement');
const classList = element.classList; // Отримання DOMTokenList класів елемента

console.log(classList.length); // Кількість класів
console.log(classList.contains('active')); // Перевірка наявності класу 'active'
classList.add('new-class'); // Додавання класу 'new-class'
classList.remove('old-class'); // Видалення класу 'old-class'
classList.toggle('hidden'); // Додавання класу 'hidden', якщо його немає, або видалення, якщо є`,
    preview: (
      <div>
        <p>
          Інтерфейс <code>DOMTokenList</code> представляє набір унікальних
          рядкових токенів (наприклад, класи CSS, значення атрибута{" "}
          <code>rel</code> для посилань). Він надає зручні методи для
          маніпулювання цим набором.
        </p>
        <p className="mt-4">
          Найчастіше <code>DOMTokenList</code> використовується для управління
          класами CSS елемента через властивість <code>Element.classList</code>.
        </p>
        <p className="mt-4">
          <b>Основні методи та властивості:</b>
          <ul>
            <li>
              <b>
                <code>length</code>:
              </b>{" "}
              Повертає кількість токенів у списку.
            </li>
            <li>
              <b>
                <code>value</code>:
              </b>{" "}
              Повертає рядок, що містить усі токени, розділені пробілами.
            </li>
            <li>
              <b>
                <code>item(index)</code>:
              </b>{" "}
              Повертає токен за вказаним індексом (або <code>null</code>, якщо
              індекс виходить за межі).
            </li>
            <li>
              <b>
                <code>contains(token)</code>:
              </b>{" "}
              Повертає <code>true</code>, якщо список містить вказаний токен,
              інакше <code>false</code>.
            </li>
            <li>
              <b>
                <code>add(token1, token2, ...)</code>:
              </b>{" "}
              Додає вказані токени до списку. Дублікати ігноруються.
            </li>
            <li>
              <b>
                <code>remove(token1, token2, ...)</code>:
              </b>{" "}
              Видаляє вказані токени зі списку. Неіснуючі токени ігноруються.
            </li>
            <li>
              <b>
                <code>toggle(token, force?)</code>:
              </b>{" "}
              Додає токен до списку, якщо його немає, і видаляє, якщо є. Якщо
              передано необов'язковий булевий аргумент <code>force</code>, токен
              буде додано, якщо <code>force</code> є <code>true</code>, і
              видалено, якщо <code>false</code>.
            </li>
            <li>
              <b>
                <code>replace(oldToken, newToken)</code>:
              </b>{" "}
              Замінює <code>oldToken</code> на <code>newToken</code>. Повертає{" "}
              <code>true</code>, якщо заміна відбулася, і <code>false</code>,
              якщо <code>oldToken</code> не був знайдений.
            </li>
            <li>
              <b>
                <code>supports(token)</code>:
              </b>{" "}
              Повертає <code>true</code>, якщо браузер підтримує вказаний токен
              у контексті списку (наприклад, для атрибута <code>rel</code>).
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "do...while",
    description:
      "Виконує блок коду хоча б один раз і перевіряє умову повторення після виконання.",
    code: `let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);`,
    preview: (
      <div>
        <p>
          Цикл <code>do...while</code> схожий на цикл <code>while</code>, але
          відрізняється тим, що умова перевіряється *після* виконання блоку
          коду. Це гарантує, що блок коду буде виконано хоча б один раз, навіть
          якщо умова від самого початку є хибною.
        </p>
        <p className="mt-4">
          <b>Синтаксис:</b>
          <pre>
            <code>
              do{" "}
              {
                // Блок коду для виконання
              }{" "}
              while (умова);
            </code>
          </pre>
          Блок коду всередині <code>do</code> виконується один раз, після чого
          обчислюється <code>умова</code>. Якщо <code>умова</code> є істинною,
          блок коду виконується знову. Цей процес повторюється до тих пір, поки{" "}
          <code>умова</code> не стане хибною.
        </p>
      </div>
    ),
  },
  {
    title: "Drag",
    description:
      "Забезпечує інтерфейс для відстеження і керування діями перетягування елементів на сторінці.",
    code: `const draggableElement = document.getElementById('draggable');

draggableElement.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.id);
});

const dropzone = document.getElementById('dropzone');

dropzone.addEventListener('dragover', (event) => {
  event.preventDefault(); // Дозволити скидання елементів
});

dropzone.addEventListener('drop', (event) => {
  event.preventDefault();
  const draggedElementId = event.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(draggedElementId);
  event.target.appendChild(draggedElement);
});`,
    preview: (
      <div>
        <p>
          API Drag and Drop (перетягування) дозволяє користувачам перетягувати
          елементи на веб-сторінці за допомогою миші (або інших пристроїв
          введення). Цей API включає в себе ряд подій та інтерфейсів для
          контролю процесу перетягування.
        </p>
        <p className="mt-4">
          <b>Основні події перетягування:</b>
          <ul>
            <li>
              <code>dragstart</code>: Відбувається, коли користувач починає
              перетягувати елемент.
            </li>
            <li>
              <code>drag</code>: Відбувається під час перетягування елемента.
            </li>
            <li>
              <code>dragenter</code>: Відбувається, коли перетягнутий елемент
              потрапляє в область скидання.
            </li>
            <li>
              <code>dragover</code>: Відбувається, коли перетягнутий елемент
              знаходиться над областю скидання. Подія повинна бути скасована (
              <code>preventDefault()</code>), щоб дозволити скидання.
            </li>
            <li>
              <code>dragleave</code>: Відбувається, коли перетягнутий елемент
              покидає область скидання.
            </li>
            <li>
              <code>drop</code>: Відбувається, коли користувач відпускає
              перетягнутий елемент над областю скидання.
            </li>
            <li>
              <code>dragend</code>: Відбувається після завершення операції
              перетягування (незалежно від того, чи було скидання успішним).
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Інтерфейс <code>DataTransfer</code> використовується для зберігання та
          передачі даних під час операції перетягування.
        </p>
      </div>
    ),
  },
  {
    title: "Element",
    description:
      "Представляє один елемент в DOM та надає методи та властивості для маніпуляції з цим елементом.",
    code: `const element = document.getElementById('myElement');
console.log(element.tagName); // Отримання назви тега елемента
element.textContent = 'Новий текст'; // Зміна текстового вмісту
element.setAttribute('class', 'active'); // Додавання або зміна атрибута 'class'
element.addEventListener('click', () => {
  console.log('Елемент був натиснутий!');
});`,
    preview: (
      <div>
        <p>
          Інтерфейс <code>Element</code> є базовим інтерфейсом для всіх об'єктів
          елементів у DOM (наприклад, <code>HTMLElement</code>,{" "}
          <code>SVGElement</code>). Він надає загальні властивості та методи,
          які доступні для всіх типів елементів.
        </p>
        <p className="mt-4">
          <b>Основні властивості:</b>
          <ul>
            <li>
              <code>tagName</code>: Повертає назву тега елемента у верхньому
              регістрі.
            </li>
            <li>
              <code>id</code>: Повертає або встановлює значення атрибута{" "}
              <code>id</code> елемента.
            </li>
            <li>
              <code>className</code>: Повертає або встановлює значення атрибута{" "}
              <code>class</code> елемента (як рядок).
            </li>
            <li>
              <code>classList</code>: Повертає об'єкт <code>DOMTokenList</code>,
              що представляє класи елемента.
            </li>
            <li>
              <code>textContent</code>: Повертає або встановлює текстовий вміст
              елемента та його нащадків.
            </li>
            <li>
              <code>innerHTML</code>: Повертає або встановлює HTML-вміст
              елемента.
            </li>
            <li>
              <code>style</code>: Повертає об'єкт{" "}
              <code>CSSStyleDeclaration</code>, що представляє inline-стилі
              елемента.
            </li>
            <li>
              <code>attributes</code>: Повертає об'єкт <code>NamedNodeMap</code>
              , що містить усі атрибути елемента.
            </li>
            <li>
              <code>parentNode</code>: Повертає батьківський вузол елемента.
            </li>
            <li>
              <code>childNodes</code>: Повертає живу колекцію{" "}
              <code>NodeList</code> дочірніх вузлів елемента.
            </li>
            <li>
              <code>children</code>: Повертає живу колекцію{" "}
              <code>HTMLCollection</code> дочірніх елементів елемента.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          <b>Основні методи:</b>
          <ul>
            <li>
              <code>getAttribute(name)</code>: Повертає значення атрибута з
              вказаним ім'ям.
            </li>
            <li>
              <code>setAttribute(name, value)</code>: Встановлює значення
              атрибута з вказаним ім'ям.
            </li>
            <li>
              <code>removeAttribute(name)</code>: Видаляє атрибут з вказаним
              ім'ям.
            </li>
            <li>
              <code>addEventListener(type, listener, options?)</code>: Додає
              обробник події до елемента.
            </li>
            <li>
              <code>removeEventListener(type, listener, options?)</code>:
              Видаляє обробник події з елемента.
            </li>
            <li>
              <code>appendChild(node)</code>: Додає вузол в кінець списку
              дочірніх вузлів елемента.
            </li>
            <li>
              <code>insertBefore(newNode, referenceNode)</code>: Вставляє новий
              вузол перед вказаним дочірнім вузлом.
            </li>
            <li>
              <code>removeChild(node)</code>: Видаляє дочірній вузол з елемента.
            </li>
            <li>
              <code>replaceChild(newChild, oldChild)</code>: Замінює один
              дочірній вузол іншим.
            </li>
            <li>
              <code>getBoundingClientRect()</code>: Повертає об'єкт, що містить
              розміри та позицію елемента відносно вікна перегляду.
            </li>
            <li>
              <code>querySelector(selector)</code>: Повертає перший
              елемент-нащадок, який відповідає вказаному CSS-селектору.
            </li>
            <li>
              <code>querySelectorAll(selector)</code>: Повертає статичну
              колекцію <code>NodeList</code> усіх елементів-нащадків, які
              відповідають вказаному CSS-селектору.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Error",
    description: "Викидається, коли виникають помилки під час виконання коду.",
    code: `try {
  throw new Error('Сталася якась помилка!');
} catch (error) {
  console.error(error.message); // Виведе 'Сталася якась помилка!'
}`,
    preview: (
      <div>
        <p>
          Об'єкт <code>Error</code> є базовим об'єктом для всіх типів помилок у
          JavaScript. Коли під час виконання коду виникає виняткова ситуація
          (помилка), викидається об'єкт <code>Error</code> або один з його
          похідних об'єктів.
        </p>
        <p className="mt-4">
          <b>
            Основні властивості об'єкта <code>Error</code>:
          </b>
          <ul>
            <li>
              <code>name</code>: Містить ім'я типу помилки (наприклад, "Error",
              "TypeError", "ReferenceError").
            </li>
            <li>
              <code>message</code>: Містить повідомлення про помилку, що надає
              більш детальну інформацію про те, що сталося.
            </li>
            <li>
              <code>stack</code>: Містить інформацію про стек викликів на момент
              виникнення помилки, що допомагає відстежити шлях виконання коду,
              який призвів до помилки.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Для обробки помилок використовуються блоки <code>try...catch</code>.
          Код, який може призвести до помилки, розміщується в блоці{" "}
          <code>try</code>. Якщо помилка виникає, виконання блоку{" "}
          <code>try</code> негайно припиняється, і керування передається до
          блоку <code>catch</code>, де можна обробити помилку (наприклад,
          вивести повідомлення, виконати резервні дії).
        </p>
        <p className="mt-4">
          Існують різні вбудовані типи помилок в JavaScript, похідні від{" "}
          <code>Error</code>, такі як <code>TypeError</code> (помилка типу),{" "}
          <code>ReferenceError</code> (помилка посилання на неоголошену змінну),{" "}
          <code>SyntaxError</code> (синтаксична помилка) тощо.
        </p>
      </div>
    ),
  },
  {
    title: "Event",
    description:
      "Представляє інформацію про подію, яка відбулася в системі або на веб-сторінці.",
    code: `document.addEventListener('click', (event) => {
  console.log('Тип події:', event.type); // Виведе 'click'
  console.log('Цільовий елемент:', event.target); // Виведе елемент, на якому сталася подія
  console.log('Координати миші (X, Y):', event.clientX, event.clientY);
});`,
    preview: (
      <div>
        <p>
          Об'єкт <code>Event</code> передається як аргумент до обробників подій
          і містить детальну інформацію про подію, яка сталася. Різні типи подій
          (наприклад, <code>click</code>, <code>mouseover</code>,{" "}
          <code>keydown</code>) можуть мати додаткові властивості, специфічні
          для цього типу події.
        </p>
        <p className="mt-4">
          <b>
            Основні властивості об'єкта <code>Event</code>:
          </b>
          <ul>
            <li>
              <code>type</code>: Рядок, що представляє тип події (наприклад,
              'click', 'mouseover', 'keydown').
            </li>
            <li>
              <code>target</code>: Елемент, на якому сталася подія (або який
              ініціював подію).
            </li>
            <li>
              <code>currentTarget</code>: Елемент, до якого був прикріплений
              обробник події.
            </li>
            <li>
              <code>eventPhase</code>: Числова константа, що вказує на фазу
              поточного потоку подій (CAPTURING_PHASE, AT_TARGET,
              BUBBLING_PHASE).
            </li>
            <li>
              <code>timeStamp</code>: Час (у мілісекундах) з моменту
              завантаження документа, коли сталася подія.
            </li>
            <li>
              <code>preventDefault()</code>: Метод, який скасовує дію браузера
              за замовчуванням для події (якщо її можна скасувати).
            </li>
            <li>
              <code>stopPropagation()</code>: Метод, який запобігає подальшому
              поширенню події по DOM-дереву (фази спливання та захоплення).
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Існують різні підтипи об'єкта <code>Event</code>, такі як{" "}
          <code>MouseEvent</code> (для подій миші), <code>KeyboardEvent</code>{" "}
          (для подій клавіатури), <code>TouchEvent</code> (для сенсорних подій)
          тощо, які мають додаткові властивості, специфічні для цих типів подій
          (наприклад, <code>clientX</code>, <code>clientY</code> для{" "}
          <code>MouseEvent</code>; <code>key</code>, <code>keyCode</code> для{" "}
          <code>KeyboardEvent</code>).
        </p>
      </div>
    ),
  },
  {
    title: "Event (Node.js)",
    description:
      "Дозволяє створювати, налаштовувати та управляти подіями в Node.js додатках.",
    code: `const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', (arg) => {
  console.log('Подія сталася!', arg);
});

myEmitter.emit('myEvent', 'деякі дані'); // Виведе 'Подія сталася! деякі дані'`,
    preview: (
      <div>
        <p>
          У Node.js модуль <code>events</code> надає клас{" "}
          <code>EventEmitter</code>, який є основою для роботи з подіями.
          Об'єкти, які є екземплярами <code>EventEmitter</code>, можуть
          випромінювати (emit) і обробляти (on, once) іменовані події.
        </p>
        <p className="mt-4">
          Ця система подій широко використовується в Node.js для асинхронної
          комунікації між різними частинами програми або між різними модулями.
          Багато вбудованих об'єктів Node.js (наприклад, потоки, сокети) є
          екземплярами <code>EventEmitter</code> або успадковують від нього.
        </p>
        <p className="mt-4">
          <b>
            Основні методи <code>EventEmitter</code>:
          </b>
          <ul>
            <li>
              <code>on(eventName, listener)</code>: Додає функцію-слухача (
              <code>listener</code>) до події з вказаною назвою (
              <code>eventName</code>). Слухач викликається кожен раз, коли ця
              подія випромінюється.
            </li>
            <li>
              <code>once(eventName, listener)</code>: Додає одноразового слухача
              для події. Слухач викликається лише один раз при першому
              випромінюванні події.
            </li>
            <li>
              <code>emit(eventName, ...args)</code>: Випромінює подію з вказаною
              назвою. Усі слухачі, зареєстровані для цієї події, викликаються
              синхронно з переданими аргументами.
            </li>
            <li>
              <code>removeListener(eventName, listener)</code>: Видаляє
              вказаного слухача з події.
            </li>
            <li>
              <code>removeAllListeners(eventName?)</code>: Видаляє всіх слухачів
              з події (або з усіх подій, якщо <code>eventName</code> не
              вказано).
            </li>
            <li>
              <code>listeners(eventName)</code>: Повертає масив усіх слухачів,
              зареєстрованих для вказаної події.
            </li>
            <li>
              <code>listenerCount(eventName)</code>: Повертає кількість
              слухачів, зареєстрованих для вказаної події.
            </li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Fetch",
    description:
      "Надає інтерфейс для здійснення мережевих запитів та завантаження ресурсів з Інтернету.",
    code: `fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    console.error('Помилка запиту:', error);
  });`,
    preview: (
      <div>
        <p>
          API <code>Fetch</code> надає сучасний та гнучкий спосіб здійснення асинхронних HTTP-запитів у JavaScript (як у браузері, так і в Node.js). Він базується на Promise, що полегшує обробку асинхронних операцій.
        </p>
        <p className="mt-4">
          Функція <code>fetch()</code> приймає URL ресурсу, який потрібно завантажити, та необов'язковий об'єкт параметрів (для налаштування методу запиту, заголовків, тіла тощо). Вона повертає Promise, який розв'язується з об'єктом <code>Response</code>, що представляє відповідь на запит (не обов'язково вказуючи на успішний HTTP-статус).
        </p>
        <p className="mt-4">
          Для отримання фактичних даних з відповіді необхідно використовувати методи об'єкта <code>Response</code>, такі як:
          <ul>
            <li><code>response.json()</code>: Розбирає тіло відповіді як JSON. Повертає Promise, який розв'язується з отриманим JSON-об'єктом.</li>
            <li><code>response.text()</code>: Розбирає тіло відповіді як текст. Повертає Promise, який розв'язується з отриманим текстом.</li>
            <li><code>response.blob()</code>: Розбирає тіло відповіді як об'єкт <code>Blob</code> (двійкові дані).</li>
            <li><code>response.arrayBuffer()</code>: Розбирає тіло відповіді як об'єкт <code>ArrayBuffer</code> (сирі двійкові дані).</li>
            <li><code>response.formData()</code>: Розбирає тіло відповіді як об'єкт <code>FormData</code> (для роботи з даними форми).</li>
          </ul>
        </p>
        <p className="mt-4">
          Об'єкт параметрів функції <code>fetch()</code> може включати такі опції, як:
          <ul>
            <li><code>method</code>: HTTP-метод запиту ('GET', 'POST', 'PUT', 'DELETE' тощо). За замовчуванням - 'GET'.</li>
            <li><code>headers</code>: Об'єкт з HTTP-заголовками запиту.</li>
            <li><code>body</code>: Тіло запиту (для методів, що підтримують його, наприклад, 'POST', 'PUT'). Може бути рядком, об'єктом <code>FormData</code>, <code>Blob</code> тощо.</li>
            <li><code>mode</code>: Режим запиту ('cors', 'no-cors', 'same-origin').</li>
            <li><code>credentials</code>: Вказує, чи потрібно надсилати cookies та HTTP-аутентифікацію ('omit', 'same-origin', 'include').</li>
            <li><code>cache</code>: Вказує політику кешування ('default', 'no-cache', 'reload', 'force-cache', 'only-if-cached').</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Focus",
    description: "Відстежує момент, коли елемент отримує або втрачає фокус.",
    code: `const inputElement = document.getElementById('myInput');

inputElement.addEventListener('focus', () => {
  console.log('Інпут отримав фокус.');
});

inputElement.addEventListener('blur', () => {
  console.log('Інпут втратив фокус.');
});`,
    preview: (
      <div>
        <p>
          Події <code>focus</code> та <code>blur</code> використовуються для відстеження стану фокусу елементів на веб-сторінці. Фокус вказує на те, який елемент наразі активний та готовий до отримання введення від користувача (наприклад, з клавіатури).
        </p>
        <p className="mt-4">
          <ul>
            <li>
              <code>focus</code>: Ця подія відбувається, коли елемент отримує фокус. Це може статися, коли користувач клацає на елементі, переходить до нього за допомогою клавіші Tab або коли фокус встановлюється програмно за допомогою методу <code>focus()</code>.
            </li>
            <li>
              <code>blur</code>: Ця подія відбувається, коли елемент втрачає фокус. Це може статися, коли користувач клацає на іншому елементі, переходить з елемента за допомогою клавіші Tab або коли фокус забирається програмно за допомогою методу <code>blur()</code>.
            </li>
          </ul>
        </p>
        <p className="mt-4">
          Ці події часто використовуються для:
          <ul>
            <li>Візуального виділення елемента, який знаходиться у фокусі.</li>
            <li>Валідації даних при втраті фокусу з поля введення.</li>
            <li>Виконання певних дій при отриманні або втраті фокусу елементом.</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "for",
    description: "Виконує повторення блоку коду за заданих умов.",
    code: `for (let i = 0; i < 5; i++) {
  console.log(i); // Виведе 0, 1, 2, 3, 4
}`,
    preview: (
      <div>
        <p>
          Цикл <code>for</code> є одним з основних керуючих структур у програмуванні, що дозволяє багаторазово виконувати блок коду. Він складається з трьох необов'язкових виразів, укладених у круглі дужки та розділених крапкою з комою:
        </p>
        <pre><code>for ([ініціалізація]; [умова]; [інкремент/декремент]) {
  // Блок коду для виконання
}</code></pre>
        <ul>
          <li>
            <b>Ініціалізація:</b> Виконується один раз перед початком циклу. Зазвичай використовується для оголошення та ініціалізації змінної-лічильника.
          </li>
          <li>
            <b>Умова:</b> Перевіряється перед кожною ітерацією циклу. Якщо умова є істинною, виконується блок коду. Якщо умова є хибною, цикл завершується.
          </li>
          <li>
            <b>Інкремент/декремент:</b> Виконується після кожної ітерації циклу. Зазвичай використовується для оновлення змінної-лічильника.
          </li>
        </ul>
        <p className="mt-4">
          Будь-який з цих виразів може бути опущений. Якщо умова опущена, вона вважається завжди істинною (створюючи нескінченний цикл, якщо його не перервати оператором <code>break</code>).
        </p>
      </div>
    ),
  },
  {
    title: "for...in",
    description: "Перебирає всі перелічувані властивості об'єкта.",
    code: `const myObject = { a: 1, b: 2, c: 3 };

for (const key in myObject) {
  console.log(\`Ключ: \${key}, Значення: \${myObject[key]}\`);
}`,
    preview: (
      <div>
        <p>
          Цикл <code>for...in</code> використовується для перебору всіх перелічуваних властивостей об'єкта (включаючи успадковані властивості з його прототипного ланцюжка). Для кожного ключа (імені властивості) в об'єкті виконується вказаний блок коду.
        </p>
        <p className="mt-4">
          <b>Важливо:</b> Цикл <code>for...in</code> не гарантує перебір властивостей у якомусь конкретному порядку. Порядок може залежати від реалізації JavaScript-рушія.
        </p>
        <p className="mt-4">
          Зазвичай рекомендується використовувати <code>for...in</code> для перебору звичайних об'єктів, а не масивів, оскільки порядок індексів у масивах може бути непередбачуваним, а також будуть перебиратися додаткові перелічувані властивості, якщо вони є. Для перебору елементів масиву краще використовувати цикли <code>for</code>, <code>for...of</code> або методи масивів (наприклад, <code>forEach</code>).
        </p>
        <p className="mt-4">
          Для фільтрації лише власних властивостей об'єкта (не успадкованих) можна використовувати метод <code>hasOwnProperty()</code>.
        </p>
      </div>
    ),
  },
  {
    title: "for...of",
    description: "Перебирає ітеративні об'єкти, повертаючи значення кожного елемента.",
    code: `const myArray = [10, 20, 30];

for (const value of myArray) {
  console.log(value); // Виведе 10, 20, 30
}

const myString = 'Привіт';

for (const char of myString) {
  console.log(char); // Виведе 'П', 'р', 'и', 'в', 'і', 'т'
}`,
    preview: (
      <div>
        <p>
          Цикл <code>for...of</code> використовується для перебору значень ітеративних об'єктів, таких як масиви, рядки, Map, Set, об'єкти <code>NodeList</code> та інші об'єкти, що реалізують протокол ітератора.
        </p>
        <p className="mt-4">
          На відміну від <code>for...in</code>, <code>for...of</code> перебирає саме значення елементів ітеративного об'єкта, а не їхні ключі або індекси (хоча для деяких об'єктів, таких як Map, він повертає пари [ключ, значення]).
        </p>
        <p className="mt-4">
          <code>for...of</code> є більш зручним та менш схильним до помилок способом перебору масивів та інших колекцій порівняно зі стандартним циклом <code>for</code> з індексами.
        </p>
      </div>
    ),
  },
  {
    title: "Fullscreen",
    description: "Дозволяє взаємодіяти з режимом повноекранного відображення.",
    code: `const element = document.getElementById('fullscreenElement');
const fullscreenButton = document.getElementById('fullscreenButton');

fullscreenButton.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    element.requestFullscreen().catch(err => {
      console.error(\`Помилка при переході в повноекранний режим: \${err}\`);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener('fullscreenchange', () => {
  console.log('Стан повноекранного режиму змінився:', document.fullscreenElement ? 'увімкнено' : 'вимкнено');
});`,
    preview: (
      <div>
        <p>
          Fullscreen API надає інтерфейс для відображення веб-контенту в повноекранному режимі, займаючи весь екран користувача.
        </p>
        <p className="mt-4">
          <b>Основні методи та властивості:</b>
          <ul>
            <li><code>element.requestFullscreen()</code>: Запитує перехід елемента в повноекранний режим. Повертає Promise.</li>
            <li><code>document.exitFullscreen()</code>: Запитує вихід з повноекранного режиму.</li>
            <li><code>document.fullscreenElement</code>: Повертає елемент, який зараз відображається в повноекранному режимі, або <code>null</code>, якщо повноекранний режим неактивний.</li>
            <li><code>document.fullscreenEnabled</code>: Повертає булеве значення, що вказує, чи дозволено використання повноекранного режиму.</li>
            <li><code>document.onfullscreenchange</code>: Обробник події, що викликається при зміні стану повноекранного режиму.</li>
            <li><code>document.onfullscreenerror</code>: Обробник події, що викликається при виникненні помилки під час спроби переходу в повноекранний режим.</li>
          </ul>
        </p>
        <p className="mt-4">
          З міркувань безпеки, зазвичай перехід у повноекранний режим може бути ініційовано лише у відповідь на безпосередню дію користувача (наприклад, клік миші або натискання клавіші).
        </p>
      </div>
    ),
  },
 
  
];
