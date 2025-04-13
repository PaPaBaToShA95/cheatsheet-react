

const alignContent = "./align-content.png";
const alignItems = "./align-items.png";
const alignSelf = "./align-self.png";

export const cssCheatsData = [
  {
    title: "ВЛАСТИВОСТІ CSS",
    description: " ",
    code: "Каскадні таблиці стилів (англ. Cascading Style Sheets) — спеціальна мова, що використовується для запису оформлення сторінок, написаних мовами розмітки даних. Концепція стилів працює так - текст спочатку виводиться, а потім форматується, за допомогою CSS стилів. Cтилі дають змогу розмежувати вміст веб сторінки від її оформлення. ",
    preview: <div></div>,
  },
  {
    title: "align-content",
    description: "Вирівнювання рядків гумового контейнера по вертикалі. ",
    code: "align-content: stretch | center | flex-start | flex-end | space-between | space-around | initial | inherit;",
    preview: (
      <figure>
        <img src={alignContent} alt="image" className=" mx-auto" />
        <figcaption className="text-center text-gray-500 mt-2">
          <p>Візуальний приклад використання</p>
        </figcaption>
      </figure>
    ),
  },
  {
    title: "align-items",
    description: "Вирівнювання елементів гумового контейнера по вертикалі.",
    code: "align-items: stretch | center | flex-start | flex-end | baseline | initial | inherit;",
    preview: (
      <div>
        <figure>
          <img src={alignItems} alt="image" className=" mx-auto" />
          <figcaption className="text-center text-gray-500 mt-2">
            <p>Візуальний приклад використання</p>
          </figcaption>
        </figure>
      </div>
    ),
  },
  {
    title: "align-self",
    description:
      "Вирівнювання окремого елемента гумового контейнера по вертикалі.",
    code: "align-self: auto | stretch | center | flex-start | flex-end | baseline | initial | inherit;",
    preview: (
      <div>
        <figure>
          <img src={alignSelf} alt="image" className=" mx-auto" />
          <figcaption className="text-center text-gray-500 mt-2">
            <p>Візуальний приклад використання</p>
          </figcaption>
        </figure>
      </div>
    ),
  },
  {
    title: "all",
    description: "Перевизначає значення усіх властивостей.",
    code: "all: initial | inherit | unset;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>all</b> може отримувати 3 значення:
        </p>
        <p>
          <b>initial</b> Встановлює цю властивість в значення без задання
        </p>
        <p>
          <b>inherit</b> Успадкує значення властивості від свого батьківського
          елемента
        </p>
        <p>
          <b>unset</b> Якщо властивість успадковується, то його значення
          приймається як inherit, в іншому випадку воно приймається як initial.
        </p>
      </div>
    ),
  },
  {
    title: "animation",
    description:
      "Універсальна властивість, яка задає відразу кілька параметрів анімації.",
    code: "animation: animation-name || animation-duration || animation-timing-function || animation-delay || animation-iteration-count || animation-direction || animation-fill-mode || animation-play-state || animation | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          <b>animation-name</b> - ім'я анімації
        </p>
        <p>
          <b>animation-duration</b> - тривалість анімації
        </p>
        <p>
          <b>animation-timing-function</b> - функція часу анімації
        </p>
        <p>
          <b>animation-delay</b> - затримка перед початком анімації
        </p>
        <p>
          <b>animation-iteration-count</b> - кількість повторів анімації
        </p>
        <p>
          <b>animation-direction</b> - напрямок анімації
        </p>
        <p>
          <b>animation-fill-mode</b> - режим заповнення анімації
        </p>
        <p>
          <b>animation-play-state</b> - стан відтворення анімації
        </p>
      </div>
    ),
  },
  {
    title: "animation-delay",
    description: "Встановлює час очікування перед запуском циклу анімації.",
    code: "animation-delay: time | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-delay</b> може отримувати 3 значення:{" "}
        </p>
        <p>
          <b>time</b> Необов`язково. Визначає кількість секунд/мілісекунд до
          початку анімації
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-direction",
    description: "Встановлює напрямок відтворення анімації.",
    code: "animation-direction: normal | reverse | alternate | alternate-reverse | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-direction</b> може отримувати 6 значень:
        </p>
        <p>
          <b>normal</b> Встановлює відтворення анімації у нормальному напрямку
        </p>
        <p>
          <b>reverse</b> Встановлює відтворення анімації у зворотному напрямку
        </p>
        <p>
          <b>alternate</b> Встановлює відтворення анімації у нормальному і
          зворотному напрямках
        </p>
        <p>
          <b>alternate-reverse</b> Встановлює відтворення анімації у зворотному
          і нормальному напрямках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-duration",
    description: "Встановлює тривалість одного циклу анімації.",
    code: "animation-duration: time | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-duration</b> може отримувати 3 значення:{" "}
        </p>
        <p>
          <b>time</b> Необов`язково. Визначає кількість секунд/мілісекунд
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-fill-mode",
    description: "Встановлює режим заповнення анімації.",
    code: "animation-fill-mode: none | forwards | backwards | both | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-fill-mode</b> може отримувати 6 значень:
        </p>
        <p>
          <b>none</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>forwards</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>backwards</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>both</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-iteration-count",
    description: "Встановлює кількість повторів анімації.",
    code: "animation-iteration-count: number | infinite | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-iteration-count</b> може отримувати 4
          значення:
        </p>
        <p>
          <b>number</b> Необов`язково. Визначає кількість повторів анімації
        </p>
        <p>
          <b>infinite</b> Необов`язково. Визначає безкінечну кількість повторів
          анімації
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-name",
    description: "Встановлює ім'я анімації.",
    code: "animation-name: keyframename | none | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-name</b> може отримувати 4 значення:
        </p>
        <p>
          <b>keyframename</b> Необов`язково. Визначає ім'я анімації
        </p>
        <p>
          <b>none</b> Необов`язково. Визначає відсутність анімації
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-play-state",
    description: "Встановлює стан відтворення анімації.",
    code: "animation-play-state: running | paused | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-play-state</b> може отримувати 4 значення:
        </p>
        <p>
          <b>running</b> Необов`язково. Визначає стан анімації як запущений
        </p>
        <p>
          <b>paused</b> Необов`язково. Визначає стан анімації як призупинений
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "animation-timing-function",
    description: "Встановлює функцію часу анімації.",
    code: "animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>animation-timing-function</b> може отримувати 8
          значень:
        </p>
        <p>
          <b>linear</b> Необов`язково. Визначає рівномірну швидкість анімації
        </p>
        <p>
          <b>ease</b> Необов`язково. Визначає повільний початок і кінець
          анімації
        </p>
        <p>
          <b>ease-in</b> Необов`язково. Визначає повільний початок анімації
        </p>
        <p>
          <b>ease-out</b> Необов`язково. Визначає повільний кінець анімації
        </p>
        <p>
          <b>ease-in-out</b> Необов`язково. Визначає повільний початок і кінець
          анімації
        </p>
        <p>
          <b>cubic-bezier(n,n,n,n)</b> Необов`язково. Визначає функцію часу
          анімації за допомогою кубічної кривої Безьє
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "backface-visibility ",
    description:
      "Визначає, чи буде видима зворотна сторона елемента при обертанні.",
    code: "backface-visibility: visible | hidden | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>backface-visibility</b> може отримувати 4 значення:
        </p>
        <p>
          <b>visible</b> Необов`язково. Визначає видимість зворотної сторони
          елемента
        </p>
        <p>
          <b>hidden</b> Необов`язково. Визначає невидимість зворотної сторони
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background",
    description: "Встановлює фон елемента.",
    code: "background: color | image | position | size | repeat | origin | clip | attachment | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background</b> може отримувати 8 значень:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір фону елемента
        </p>
        <p>
          <b>image</b> Необов`язково. Визначає зображення фону елемента
        </p>
        <p>
          <b>position</b> Необов`язково. Визначає позицію зображення фону
          елемента
        </p>
        <p>
          <b>size</b> Необов`язково. Визначає розмір зображення фону елемента
        </p>
        <p>
          <b>repeat</b> Необов`язково. Визначає повторення зображення фону
          елемента
        </p>
        <p>
          <b>origin</b> Необов`язково. Визначає початок координат для фону
          елемента
        </p>
        <p>
          <b>clip</b> Необов`язково. Визначає обрізку фону елемента
        </p>
        <p>
          <b>attachment</b> Необов`язково. Визначає прикріплення фону елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-attachment",
    description:
      "Визначає, чи буде фон прокручуватися разом з вмістом елемента.",
    code: "background-attachment: scroll | fixed | local | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-attachment</b> може отримувати 5 значень:
        </p>
        <p>
          <b>scroll</b> Необов`язково. Визначає прокручування фону разом з
          вмістом елемента
        </p>
        <p>
          <b>fixed</b> Необов`язково. Визначає фіксацію фону на екрані
        </p>
        <p>
          <b>local</b> Необов`язково. Визначає прокручування фону разом з
          вмістом елемента, але не з прокруткою самого елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-blend-mode",
    description: "Визначає режим змішування фонів.",
    code: "background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-blend-mode</b> може отримувати 18 значень:
        </p>
        <p>
          <b>normal</b> Необов`язково. Визначає нормальне змішування фонів
        </p>
        <p>
          <b>multiply</b> Необов`язково. Визначає змішування фонів з множенням
          кольорів
        </p>
        <p>
          <b>screen</b> Необов`язково. Визначає змішування фонів з екрануванням
          кольорів
        </p>
        <p>
          <b>overlay</b> Необов`язково. Визначає змішування фонів з накладенням
          кольорів
        </p>
        <p>
          <b>darken</b> Необов`язково. Визначає змішування фонів з затемненням
          кольорів
        </p>
        <p>
          <b>lighten</b> Необов`язково. Визначає змішування фонів зі освітленням
          кольорів
        </p>
      </div>
    ),
  },
  {
    title: "background-clip",
    description: "Визначає, як фон буде обрізаний.",
    code: "background-clip: border-box | padding-box | content-box | text | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-clip</b> може отримувати 5 значень:
        </p>
        <p>
          <b>border-box</b> Необов`язково. Визначає обрізку фону по межах
          елемента
        </p>
        <p>
          <b>padding-box</b> Необов`язково. Визначає обрізку фону по полям
          елемента
        </p>
        <p>
          <b>content-box</b> Необов`язково. Визначає обрізку фону по вмісту
          елемента
        </p>
        <p>
          <b>text</b> Необов`язково. Визначає обрізку фону по тексту елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-color",
    description: "Визначає колір фону елемента.",
    code: "background-color: color | transparent | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-color</b> може отримувати 4 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір фону елемента
        </p>
        <p>
          <b>transparent</b> Необов`язково. Визначає прозорий фон елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-image",
    description: "Визначає зображення фону елемента.",
    code: "background-image: url('image') | none | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-image</b> може отримувати 4 значення:
        </p>
        <p>
          <b>url('image')</b> Необов`язково. Визначає зображення фону елемента
        </p>
        <p>
          <b>none</b> Необов`язково. Визначає відсутність зображення фону
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-origin",
    description: "Визначає початок координат для фону елемента.",
    code: "background-origin: padding-box | border-box | content-box | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-origin</b> може отримувати 4 значення:
        </p>
        <p>
          <b>padding-box</b> Необов`язково. Визначає початок координат для фону
          по полям елемента
        </p>
        <p>
          <b>border-box</b> Необов`язково. Визначає початок координат для фону
          по межах елемента
        </p>
        <p>
          <b>content-box</b> Необов`язково. Визначає початок координат для фону
          по вмісту елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
      </div>
    ),
  },
  {
    title: "background-position",
    description: "Визначає позицію зображення фону елемента.",
    code: "background-position: position | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-position</b> може отримувати 3 значення:
        </p>
        <p>
          <b>position</b> Необов`язково. Визначає позицію зображення фону
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-repeat",
    description: "Визначає повторення зображення фону елемента.",
    code: "background-repeat: repeat | repeat-x | repeat-y | no-repeat | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-repeat</b> може отримувати 6 значень:
        </p>
        <p>
          <b>repeat</b> Необов`язково. Визначає повторення зображення фону
          елемента
        </p>
        <p>
          <b>repeat-x</b> Необов`язково. Визначає повторення зображення фону
          елемента по осі X
        </p>
        <p>
          <b>repeat-y</b> Необов`язково. Визначає повторення зображення фону
          елемента по осі Y
        </p>
        <p>
          <b>no-repeat</b> Необов`язково. Визначає відсутність повторення
          зображення фону елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "background-size",
    description: "Визначає розмір зображення фону елемента.",
    code: "background-size: auto | length | cover | contain | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>background-size</b> може отримувати 6 значень:
        </p>
        <p>
          <b>auto</b> Необов`язково. Визначає автоматичний розмір зображення
          фону елемента
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає розмір зображення фону елемента
          в одиницях виміру
        </p>
        <p>
          <b>cover</b> Необов`язково. Визначає, що зображення фону покриває весь
          елемент
        </p>
        <p>
          <b>contain</b> Необов`язково. Визначає, що зображення фону міститься в
          межах елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border",
    description: "Встановлює всі параметри рамки елемента.",
    code: "border: border-width border-style border-color|initial|inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border</b> може отримувати 3 значення:
        </p>
        <p>
          <b>border-width</b> Необов`язково. Визначає ширину рамки елемента
        </p>
        <p>
          <b>border-style</b> Необов`язково. Визначає стиль рамки елемента
        </p>
        <p>
          <b>border-color</b> Необов`язково. Визначає колір рамки елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom",
    description: "Встановлює параметри нижньої рамки елемента.",
    code: "border-bottom: border-width border-style border-color|initial|inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom</b> може отримувати 3 значення:
        </p>
        <p>
          <b>border-width</b> Необов`язково. Визначає ширину нижньої рамки
          елемента
        </p>
        <p>
          <b>border-style</b> Необов`язково. Визначає стиль нижньої рамки
          елемента
        </p>
        <p>
          <b>border-color</b> Необов`язково. Визначає колір нижньої рамки
          елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom-color",
    description: "Встановлює колір нижньої рамки елемента.",
    code: "border-bottom-color: color | transparent | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom-color</b> може отримувати 4 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір нижньої рамки елемента
        </p>
        <p>
          <b>transparent</b> Необов`язково. Визначає прозорий колір нижньої
          рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom-left-radius",
    description: "Встановлює радіус нижнього лівого кута рамки елемента.",
    code: "border-bottom-left-radius: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom-left-radius</b> може отримувати 4
          значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає радіус нижнього лівого кута
          рамки елемента в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає радіус нижнього лівого кута
          рамки елемента у відсотках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom-right-radius",
    description: "Встановлює радіус нижнього правого кута рамки елемента.",
    code: "border-bottom-right-radius: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom-right-radius</b> може отримувати 4
          значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає радіус нижнього правого кута
          рамки елемента в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає радіус нижнього правого кута
          рамки елемента у відсотках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom-style",
    description: "Встановлює стиль нижньої рамки елемента.",
    code: "border-bottom-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom-style</b> може отримувати 11 значень:
        </p>
        <p>
          <b>none</b> Необов`язково. Визначає відсутність нижньої рамки елемента
        </p>
        <p>
          <b>hidden</b> Необов`язково. Визначає приховану нижню рамку елемента
        </p>
        <p>
          <b>dotted</b> Необов`язково. Визначає пунктирну нижню рамку елемента
        </p>
        <p>
          <b>dashed</b> Необов`язково. Визначає штрихову нижню рамку елемента
        </p>
        <p>
          <b>solid</b> Необов`язково. Визначає суцільну нижню рамку елемента
        </p>
        <p>
          <b>double</b> Необов`язково. Визначає подвійну нижню рамку елемента
        </p>
        <p>
          <b>groove</b> Необов`язково. Визначає рифлену нижню рамку елемента
        </p>
        <p>
          <b>ridge</b> Необов`язково. Визначає рифлену нижню рамку елемента
        </p>
        <p>
          <b>inset</b> Необов`язково. Визначає увігнуту нижню рамку елемента
        </p>
        <p>
          <b>outset</b> Необов`язково. Визначає опуклу нижню рамку елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-bottom-width",
    description: "Встановлює ширину нижньої рамки елемента.",
    code: "border-bottom-width: thin | medium | thick | length | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-bottom-width</b> може отримувати 5 значень:
        </p>
        <p>
          <b>thin</b> Необов`язково. Визначає тонку нижню рамку елемента
        </p>
        <p>
          <b>medium</b> Необов`язково. Визначає середню нижню рамку елемента
        </p>
        <p>
          <b>thick</b> Необов`язково. Визначає товсту нижню рамку елемента
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає ширину нижньої рамки елемента в
          одиницях виміру
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
      </div>
    ),
  },
  {
    title: "border-collapse",
    description: "Визначає, як зливаються рамки таблиці.",
    code: "border-collapse: collapse | separate | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-collapse</b> може отримувати 4 значення:
        </p>
        <p>
          <b>collapse</b> Необов`язково. Визначає злиття рамок таблиці
        </p>
        <p>
          <b>separate</b> Необов`язково. Визначає роздільні рамки таблиці
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-color",
    description: "Встановлює колір рамки елемента.",
    code: "border-color: color | transparent | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-color</b> може отримувати 4 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір рамки елемента
        </p>
        <p>
          <b>transparent</b> Необов`язково. Визначає прозорий колір рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image",
    description: "Визначає зображення рамки елемента.",
    code: "border-image: url('image') | source | slice | width | outset | repeat | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image</b> може отримувати 7 значень:
        </p>
        <p>
          <b>url('image')</b> Необов`язково. Визначає зображення рамки елемента
        </p>
        <p>
          <b>source</b> Необов`язково. Визначає джерело зображення рамки
          елемента
        </p>
        <p>
          <b>slice</b> Необов`язково. Визначає обрізку зображення рамки елемента
        </p>
        <p>
          <b>width</b> Необов`язково. Визначає ширину зображення рамки елемента
        </p>
        <p>
          <b>outset</b> Необов`язково. Визначає виступ зображення рамки елемента
        </p>
        <p>
          <b>repeat</b> Необов`язково. Визначає повторення зображення рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image-outset",
    description: "Визначає виступ зображення рамки елемента.",
    code: "border-image-outset: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image-outset</b> може отримувати 4 значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає виступ зображення рамки елемента
          в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає виступ зображення рамки
          елемента у відсотках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image-repeat",
    description: "Визначає повторення зображення рамки елемента.",
    code: "border-image-repeat: stretch | repeat | round | space | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image-repeat</b> може отримувати 6 значень:
        </p>
        <p>
          <b>stretch</b> Необов`язково. Визначає розтягування зображення рамки
          елемента
        </p>
        <p>
          <b>repeat</b> Необов`язково. Визначає повторення зображення рамки
          елемента
        </p>
        <p>
          <b>round</b> Необов`язково. Визначає округлення зображення рамки
          елемента
        </p>
        <p>
          <b>space</b> Необов`язково. Визначає простір між зображеннями рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image-slice",
    description: "Визначає обрізку зображення рамки елемента.",
    code: "border-image-slice: number | percentage | fill | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image-slice</b> може отримувати 5 значень:
        </p>
        <p>
          <b>number</b> Необов`язково. Визначає обрізку зображення рамки
          елемента в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає обрізку зображення рамки
          елемента у відсотках
        </p>
        <p>
          <b>fill</b> Необов`язково. Визначає заповнення зображення рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image-source",
    description: "Визначає зображення рамки елемента.",
    code: "border-image-source: url('image') | none | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image-source</b> може отримувати 4 значення:
        </p>
        <p>
          <b>url('image')</b> Необов`язково. Визначає зображення рамки елемента
        </p>
        <p>
          <b>none</b> Необов`язково. Визначає відсутність зображення рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-image-width",
    description: "Визначає ширину зображення рамки елемента.",
    code: "border-image-width: length | percentage | auto | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-image-width</b> може отримувати 5 значень:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає ширину зображення рамки елемента
          в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає ширину зображення рамки
          елемента у відсотках
        </p>
        <p>
          <b>auto</b> Необов`язково. Визначає автоматичну ширину зображення
          рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-left",
    description: "Встановлює параметри лівої рамки елемента.",
    code: "border-left: border-width border-style border-color|initial|inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-left</b> може отримувати 3 значення:
        </p>
        <p>
          <b>border-width</b> Необов`язково. Визначає ширину лівої рамки
          елемента
        </p>
        <p>
          <b>border-style</b> Необов`язково. Визначає стиль лівої рамки елемента
        </p>
        <p>
          <b>border-color</b> Необов`язково. Визначає колір лівої рамки елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-left-color",
    description: "Встановлює колір лівої рамки елемента.",
    code: "border-left-color: color | transparent | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-left-color</b> може отримувати 4 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір лівої рамки елемента
        </p>
        <p>
          <b>transparent</b> Необов`язково. Визначає прозорий колір лівої рамки
          елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-left-style",
    description: "Встановлює стиль лівої рамки елемента.",
    code: "border-left-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-left-style</b> може отримувати 11 значень:
        </p>
        <p>
          <b>none</b> Необов`язково. Визначає відсутність лівої рамки елемента
        </p>
        <p>
          <b>hidden</b> Необов`язково. Визначає приховану ліву рамку елемента
        </p>
        <p>
          <b>dotted</b> Необов`язково. Визначає пунктирну ліву рамку елемента
        </p>
        <p>
          <b>dashed</b> Необов`язково. Визначає штрихову ліву рамку елемента
        </p>
        <p>
          <b>solid</b> Необов`язково. Визначає суцільну ліву рамку елемента
        </p>
        <p>
          <b>double</b> Необов`язково. Визначає подвійну ліву рамку елемента
        </p>
        <p>
          <b>groove</b> Необов`язково. Визначає рифлену ліву рамку елемента
        </p>
        <p>
          <b>ridge</b> Необов`язково. Визначає рифлену ліву рамку елемента
        </p>
        <p>
          <b>inset</b> Необов`язково. Визначає увігнуту ліву рамку елемента
        </p>
        <p>
          <b>outset</b> Необов`язково. Визначає опуклу ліву рамку елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-left-width",
    description: "Встановлює ширину лівої рамки елемента.",
    code: "border-left-width: thin | medium | thick | length | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-left-width</b> може отримувати 5 значень:
        </p>
        <p>
          <b>thin</b> Необов`язково. Визначає тонку ліву рамку елемента
        </p>
        <p>
          <b>medium</b> Необов`язково. Визначає середню ліву рамку елемента
        </p>
        <p>
          <b>thick</b> Необов`язково. Визначає товсту ліву рамку елемента
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає ширину лівої рамки елемента в
          одиницях виміру
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
      </div>
    ),
  },
  {
    title: "border-radius",
    description: "Встановлює радіус закруглення кутів елемента.",
    code: "border-radius: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-radius</b> може отримувати 4 значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає радіус закруглення кутів
          елемента в одиницях виміру
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає радіус закруглення кутів
          елемента у відсотках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-right",
    description: "Встановлює параметри правої рамки елемента.",
    code: "border-right: border-width border-style border-color | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-right</b> може отримувати 3 значення:
        </p>
        <p>
          <b>border-width</b> Необов`язково. Визначає ширину правої рамки
          елемента
        </p>
        <p>
          <b>border-style</b> Необов`язково. Визначає стиль правої рамки
          елемента
        </p>
        <p>
          <b>border-color</b> Необов`язково. Визначає колір правої рамки
          елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-right-color",
    description: "Встановлює колір правої рамки елемента.",
    code: "border-right-color: color | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-right-color</b> може отримувати 3 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір правої рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-right-style",
    description: "Встановлює стиль правої рамки елемента.",
    code: "border-right-style: style | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-right-style</b> може отримувати 3 значення:
        </p>
        <p>
          <b>style</b> Необов`язково. Визначає стиль правої рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-right-width",
    description: "Встановлює ширину правої рамки елемента.",
    code: "border-right-width: width | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-right-width</b> може отримувати 3 значення:
        </p>
        <p>
          <b>width</b> Необов`язково. Визначає ширину правої рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-spacing",
    description: "Визначає відстань між рамками таблиці.",
    code: "border-spacing: length | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-spacing</b> може отримувати 3 значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає відстань між рамками таблиці
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-style",
    description: "Встановлює стиль рамки елемента.",
    code: "border-style: style | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-style</b> може отримувати 3 значення:
        </p>
        <p>
          <b>style</b> Необов`язково. Визначає стиль рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top",
    description: "Встановлює стиль верхньої рамки елемента.",
    code: "border-top: width style color;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top</b> може отримувати 3 значення:
        </p>
        <p>
          <b>width</b> Необов`язково. Визначає ширину верхньої рамки елемента
        </p>
        <p>
          <b>style</b> Необов`язково. Визначає стиль верхньої рамки елемента
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір верхньої рамки елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top-color",
    description: "Встановлює колір верхньої рамки елемента.",
    code: "border-top-color: color | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top-color</b> може отримувати 3 значення:
        </p>
        <p>
          <b>color</b> Необов`язково. Визначає колір верхньої рамки елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top-left-radius",
    description: "Встановлює радіус закруглення верхнього лівого кута.",
    code: "border-top-left-radius: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top-left-radius</b> може отримувати 4 значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає відстань між рамками таблиці в
          пікселях
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає відстань між рамками таблиці
          від розміру елемента
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top-right-radius",
    description: "Встановлює радіус закруглення верхнього правого кута.",
    code: "border-top-right-radius: length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top-right-radius</b> може отримувати 4 значення:
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає відстань між рамками таблиці в
          пікселях
        </p>
        <p>
          <b>percentage</b> Необов`язково. Визначає відстань між рамками таблиці
          в процентах
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top-style",
    description: "Встановлює стиль верхньої рамки елемента.",
    code: "border-top-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top-style</b> може отримувати 12 значення:
        </p>
        <p>
          <b>none</b> Вимикає верхню рамку
        </p>
        <p>
          <b>hidden</b> Вимикає верхню рамку
        </p>
        <p>
          <b>dotted</b> Встановлює верхню рамку з точками
        </p>
        <p>
          <b>dashed</b> Встановлює верхню рамку з крапками
        </p>
        <p>
          <b>solid</b> Встановлює верхню рамку зі статичним коліром (за
          замовчуванням)
        </p>
        <p>
          <b>double</b> Встановлює верхню рамку з двома колірами
        </p>
        <p>
          <b>groove</b> Встановлює верхню рамку з колірами (залежить від кольору
          фону)
        </p>
        <p>
          <b>ridge</b> Встановлює верхню рамку з колірами (залежить від кольору
          фону)
        </p>
        <p>
          <b>inset</b> Встановлює верхню рамку з колірами (залежить від кольору
          фону)
        </p>
        <p>
          <b>outset</b> Встановлює верхню рамку з колірами (залежить від кольору
          фону)
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-top-width",
    description: "Встановлює ширину верхньої рамки елемента.",
    code: "border-top-width: thin | medium | thick | length | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-top-width</b> може отримувати 6 значення:
        </p>
        <p>
          <b>thin</b> Встановлює рамку з шириною 1px
        </p>
        <p>
          <b>medium</b> Встановлює рамку з шириною 3px
        </p>
        <p>
          <b>thick</b> Встановлює рамку з шириною 5px
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає відстань між рамками таблиці
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "border-width",
    description: "Встановлює ширину рамки елемента.",
    code: "border-width: thin | medium | thick | length | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>border-width</b> може отримувати 6 значення:
        </p>
        <p>
          <b>thin</b> Встановлює рамку з шириною 1px
        </p>
        <p>
          <b>medium</b> Встановлює рамку з шириною 3px
        </p>
        <p>
          <b>thick</b> Встановлює рамку з шириною 5px
        </p>
        <p>
          <b>length</b> Необов`язково. Визначає відстань між рамками таблиці
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента
        </p>
      </div>
    ),
  },
  {
    title: "bottom",
    description: "Встановлює відстань нижнього краю елемента до нижнього краю",
    code: "bottom: auto | length | percentage | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>bottom</b> може отримувати 5 значення:
        </p>
        <p>
          <b>auto</b> Встановлює відстань до нижнього краю елемента автоматично
        </p>
        <p>
          <b>length</b> Встановлює відстань до нижнього краю елемента в пікселях
        </p>
        <p>
          <b>percentage</b> Встановлює відстань до нижнього краю елемента у
          відсотках
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "box-decoration-break",
    description: "Визначає, як обробляються рамки та тіні елемента.",
    code: "box-decoration-break: slice | clone | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>box-decoration-break</b> може отримувати 4 значення:
        </p>
        <p>
          <b>slice</b> Блок буде “нарізаний” на фрагменти, які не будуть
          підтримувати поля, межі, тіні, заокруглення і фонові зображення. Також
          фонове зображення застосовується лиш один раз, а кожний із фрагментів
          показуватиме тільки частину спільного фону.
        </p>
        <p>
          <b>clone</b> Фрагменти підтримують всі вище названі властивості. Також
          фонове зображення застосовується для кожного із фрагментів окремо.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "box-shadow",
    description: "Встановлює тінь для елемента.",
    code: "box-shadow: none | h-shadow v-shadow blur spread color inset | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>box-shadow</b> може отримувати 5 значення:
        </p>
        <p>
          <b>none</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>h-shadow v-shadow blur spread color</b> Встановлює тінь на елементі{" "}
          Обов'язкове значення. Зсув тіні по горизонталі, по вертикалі,
          розмиття, розширення, колір тіні
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "box-sizing",
    description: "Визначає, як розраховуються розміри елемента.",
    code: "box-sizing: content-box | border-box | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>box-sizing</b> може отримувати 4 значення:
        </p>
        <p>
          <b>content-box</b> Грунтується на стандартах CSS, при цьому
          властивості width і height задають ширину і висоту контенту і не
          включають в себе значення відступів, полів і кордонів.
        </p>
        <p>
          <b>border-box</b> Властивості width і height включають в себе значення
          полів і кордонів, але не відступів (margin). Ця модель
          використовується браузером Internet Exporer в режимі сумісності.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "break-after",
    description: "Визначає, як обробляються переноси елемента.",
    code: "break-after: auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>break-after</b> може отримувати 12 значення:
        </p>
        <p>
          <b>auto</b> Ні вказує, ні забороняє переривання сторінки або стовпця.
        </p>
        <p>
          <b>avoid</b> Уникання переривання сторінки після основного контейнера.
        </p>
        <p>
          <b>avoid-page</b> Уникання переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>page</b> Завжди примусове переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>left</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як ліва.
        </p>
        <p>
          <b>right</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як права.
        </p>
        <p>
          <b>recto</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є другою.
        </p>
        <p>
          <b>verso</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є першою.
        </p>
        <p>
          <b>avoid-column</b>
          Уникання переривання колонки після основного контейнера.
        </p>
        <p>
          <b>column</b> Завжди примусове переривання колонки після основного
          контейнера.
        </p>
        <p>
          <b>avoid-region</b> Уникання переривання області після основного
          контейнера.
        </p>
        <p>
          <b>region</b> Завжди примусове переривання області після основного
          контейнера.
        </p>
      </div>
    ),
  },
  {
    title: "break-before",
    description: "Визначає, як обробляються переноси елемента.",
    code: "break-before: auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>break-before</b> може отримувати 12 значення:
        </p>
        <p>
          <b>auto</b> Ні вказує, ні забороняє переривання сторінки або стовпця.
        </p>
        <p>
          <b>avoid</b> Уникання переривання сторінки після основного контейнера.
        </p>
        <p>
          <b>avoid-page</b> Уникання переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>page</b> Завжди примусове переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>left</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як ліва.
        </p>
        <p>
          <b>right</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як права.
        </p>
        <p>
          <b>recto</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є другою.
        </p>
        <p>
          <b>verso</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є першою.
        </p>
        <p>
          <b>avoid-column</b>
          Уникання переривання колонки після основного контейнера.
        </p>
        <p>
          <b>column</b> Завжди примусове переривання колонки після основного
          контейнера.
        </p>
        <p>
          <b>avoid-region</b> Уникання переривання області після основного
          контейнера.
        </p>
        <p>
          <b>region</b> Завжди примусове переривання області після основного
          контейнера.
        </p>
      </div>
    ),
  },
  {
    title: "break-inside",
    description: "Визначає, як обробляються переноси елемента.",
    code: "break-inside: auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>break-inside</b> може отримувати 12 значення:
        </p>
        <p>
          <b>auto</b> Ні вказує, ні забороняє переривання сторінки або стовпця.
        </p>
        <p>
          <b>avoid</b> Уникання переривання сторінки після основного контейнера.
        </p>
        <p>
          <b>avoid-page</b> Уникання переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>page</b> Завжди примусове переривання сторінки після основного
          контейнера.
        </p>
        <p>
          <b>left</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як ліва.
        </p>
        <p>
          <b>right</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована як права.
        </p>
        <p>
          <b>recto</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є другою.
        </p>
        <p>
          <b>verso</b> Змушує одне або два розбиття сторінки після основного
          контейнера, щоб наступна сторінка була відформатована або як ліва
          сторінка, або права сторінка, залежно від того, яка сторінка є першою.
        </p>
        <p>
          <b>avoid-column</b>
          Уникання переривання колонки після основного контейнера.
        </p>
        <p>
          <b>column</b> Завжди примусове переривання колонки після основного
          контейнера.
        </p>
        <p>
          <b>avoid-region</b> Уникання переривання області після основного
          контейнера.
        </p>
        <p>
          <b>region</b> Завжди примусове переривання області після основного
          контейнера.
        </p>
      </div>
    ),
  },
  {
    title: "caption-side",
    description: "Визначає позицію заголовка таблиці.",
    code: "caption-side: top | bottom | left | right | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>caption-side</b> може отримувати 6 значення:
        </p>
        <p>
          <b>top</b> Заголовок таблиці відображається вверху таблиці.
        </p>
        <p>
          <b>bottom</b> Заголовок таблиці відображається внизу таблиці.
        </p>
        <p>
          <b>left</b> Заголовок таблиці відображається зліва таблиці.
        </p>
        <p>
          <b>right</b> Заголовок таблиці відображається справа таблиці.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "clear",
    description:
      "Визначає, з якого боку елемент не повинен мати плаваючих елементів.",
    code: "clear: none | left | right | both | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>clear</b> може отримувати 5 значення:
        </p>
        <p>
          <b>none</b> Плаваючі елементи не повинні відображатися під елементом.
        </p>
        <p>
          <b>left</b> Плаваючі елементи повинні відображатися зліва елемента.
        </p>
        <p>
          <b>right</b> Плаваючі елементи повинні відображатися справа елемента.
        </p>
        <p>
          <b>both</b> Плаваючі елементи повинні відображатися зліва і справа
          елемента.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "clip",
    description: "Визначає область видимості елемента.",
    code: "clip: auto | rect(top right bottom left) | initial | inherit;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>clip</b> може отримувати 4 значення:
        </p>
        <p>
          <b>auto</b> Встановлює значення за замовчуванням.
        </p>
        <p>
          <b>rect(top right bottom left)</b> Встановлює значення за
          замовчуванням.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
      </div>
    ),
  },
  {
    title: "color",
    description: "Встановлює колір тексту елемента.",
    code: "color: color | initial | inherit | currentColor | transparent | unset;",
    preview: (
      <div className="text-center text-gray-500 mt-2">
        <p>
          Властивість <b>color</b> може отримувати 6 значення:
        </p>
        <p>
          <b>color</b> Вказує колір тексту елемента. Може бути вказано в
          шістнадцятковому форматі, RGB, RGBA, HSL, HSLA або назвою кольору.
        </p>
        <p>
          <b>initial</b> Встановлює властивість у значення без задання{" "}
        </p>
        <p>
          <b>inherit</b> Вказує на спадковість властивості від свого
          батьківського елемента{" "}
        </p>
        <p>
          <b>currentColor</b> Вказує на поточний колір елемента.
        </p>
        <p>
          <b>transparent</b> Вказує на прозориий колір.
        </p>
        <p>
          <b>unset</b> Вказує на видалення коліру.
        </p>
      </div>

),
  },
];
