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
              <code>stretch</code>
            </td>
            <td>
              Рядки розтягуються, щоб заповнити вільний простір. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Рядки вирівнюються по центру гумового контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>flex-start</code>
            </td>
            <td>Рядки розташовуються на початку поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>flex-end</code>
            </td>
            <td>Рядки розташовуються з кінця поперечної осі.</td>
          </tr>
          <tr>
            <td>
              <code>space-between</code>
            </td>
            <td>
              Рядки рівномірно розподіляються в гумовому контейнері. Перший
              рядок знаходиться на початку контейнера, а останній перебуває в
              кінці.
            </td>
          </tr>
          <tr>
            <td>
              <code>space-around</code>
            </td>
            <td>
              Рядки рівномірно розподілені з рівними відстанями між ними.
              Порожній простір перед першим рядком і після останнього рядка
              дорівнює половині простору між двома сусідніми рядками.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "align-items",
    description: "Вирівнювання вмісту рядків гумового контейнера.",
    code: "align-items: stretch | center | flex-start | flex-end | baseline | initial | inherit;",
    preview: (
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
              <code>stretch</code>
            </td>
            <td>Елементи розтягуються по висоті контейнера. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Елементи вирівнюються по центру поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>flex-start</code>
            </td>
            <td>Елементи розташовуються на початку поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>flex-end</code>
            </td>
            <td>Елементи розташовуються в кінці поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>baseline</code>
            </td>
            <td>Елементи вирівнюються по базовій лінії.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "align-self",
    description:
      "Вирівнювання окремих елементів всередині гумового контейнера.",
    code: "align-self: auto | stretch | center | flex-start | flex-end | baseline | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Елемент наслідує значення властивості `align-items` батьківського
              елемента. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>stretch</code>
            </td>
            <td>Елемент розтягується по висоті контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Елемент вирівнюється по центру поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>flex-start</code>
            </td>
            <td>Елемент розташовується на початку поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>flex-end</code>
            </td>
            <td>Елемент розташовується в кінці поперечної вісі.</td>
          </tr>
          <tr>
            <td>
              <code>baseline</code>
            </td>
            <td>Елемент вирівнюється по базовій лінії.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "all",
    description: "Перевизначає значення усіх властивостей.",
    code: "all: initial | unset | inherit;",
    preview: (
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
              <code>initial</code>
            </td>
            <td>
              Встановлює всі властивості елемента в їх початкові значення.
            </td>
          </tr>
          <tr>
            <td>
              <code>unset</code>
            </td>
            <td>
              Скидає властивості до їх успадкованих значень, якщо вони
              успадковуються, або до їх початкових значень, якщо ні.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Встановлює всі властивості елемента в успадковані значення від
              батьківського елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation",
    description:
      "Універсальна властивість, яке задає відразу кілька параметрів анімації.",
    code: "animation: name duration timing-function delay iteration-count direction fill-mode play-state | initial | inherit;",
    preview: (
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
            <td>Задає ім'я `@keyframes` для анімації.</td>
          </tr>
          <tr>
            <td>
              <code>duration</code>
            </td>
            <td>
              Скільки часу потрібно анімації на один цикл (в секундах або
              мілісекундах).
            </td>
          </tr>
          <tr>
            <td>
              <code>timing-function</code>
            </td>
            <td>
              Задає криву швидкості анімації (наприклад, `ease`, `linear`,
              `ease-in`, `ease-out`, `ease-in-out`).
            </td>
          </tr>
          <tr>
            <td>
              <code>delay</code>
            </td>
            <td>
              Встановлює час очікування перед запуском циклу анімації (в
              секундах або мілісекундах).
            </td>
          </tr>
          <tr>
            <td>
              <code>iteration-count</code>
            </td>
            <td>
              Скільки разів анімація повинна повторитися (`infinite` для
              нескінченного повторення).
            </td>
          </tr>
          <tr>
            <td>
              <code>direction</code>
            </td>
            <td>
              Встановлює напрямок руху анімації (`normal`, `reverse`,
              `alternate`, `alternate-reverse`).
            </td>
          </tr>
          <tr>
            <td>
              <code>fill-mode</code>
            </td>
            <td>Задає стиль для елемента, коли анімація не відтворюється.</td>
          </tr>
          <tr>
            <td>
              <code>play-state</code>
            </td>
            <td>Зупиняє чи запускає анімацію (`running`, `paused`).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-delay",
    description: "Встановлює час очікування перед запуском циклу анімації.",
    code: "animation-delay: time | initial | inherit;",
    preview: (
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
              <code>time</code>
            </td>
            <td>
              Задає затримку в секундах (s) або мілісекундах (ms). Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0s).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-direction",
    description: "Встановлює напрямок руху анімації.",
    code: "animation-direction: normal | reverse | alternate | alternate-reverse | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>
              Анімація відтворюється в звичайному напрямку (від початкового до
              кінцевого стану). Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>reverse</code>
            </td>
            <td>
              Анімація відтворюється у зворотному напрямку (від кінцевого до
              початкового стану).
            </td>
          </tr>
          <tr>
            <td>
              <code>alternate</code>
            </td>
            <td>
              Анімація чергує напрямки в кожному циклі (спочатку вперед, потім
              назад, потім знову вперед і так далі).
            </td>
          </tr>
          <tr>
            <td>
              <code>alternate-reverse</code>
            </td>
            <td>
              Анімація чергує зворотні напрямки в кожному циклі (спочатку назад,
              потім вперед, потім знову назад і так далі).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-duration",
    description: "Скільки часу потрібно анімації на один цикл.",
    code: "animation-duration: time | initial | inherit;",
    preview: (
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
              <code>time</code>
            </td>
            <td>
              Задає тривалість в секундах (s) або мілісекундах (ms). За
              замовчуванням 0s.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0s).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-fill-mode",
    description:
      "Стиль для елемента, коли анімація не відтворюється (коли вона анімація закінчена або має затримку)",
    code: "animation-fill-mode: none | forwards | backwards | both | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>
              Елемент повертається до стилів, визначених для нього, коли
              анімація не виконується. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>forwards</code>
            </td>
            <td>
              Елемент зберігає стилі, застосовані останнім кадром анімації.
            </td>
          </tr>
          <tr>
            <td>
              <code>backwards</code>
            </td>
            <td>
              Елемент отримує стилі, визначені першим ключовим кадром анімації
              під час затримки анімації.
            </td>
          </tr>
          <tr>
            <td>
              <code>both</code>
            </td>
            <td>
              Елемент застосовує правила `forwards` і `backwards`, розширюючи
              етапи анімації в обидва боки.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-iteration-count",
    description: "Скільки разів анімація повинна повторитися.",
    code: "animation-iteration-count: infinite | number | initial | inherit;",
    preview: (
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
              <code>infinite</code>
            </td>
            <td>Анімація повторюється нескінченно.</td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>
              Задає кількість повторень анімації (ціле число). За замовчуванням
              1.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (1).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-name",
    description: "Задає ім'я `@keyframes` для анімації.",
    code: "animation-name: keyframename | none | initial | inherit;",
    preview: (
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
              <code>keyframename</code>
            </td>
            <td>
              Ім'я `@keyframes` правила, яке визначає послідовність анімації.
            </td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Анімація не застосовується. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-play-state",
    description: "Зупиняє чи запускає анімацію.",
    code: "animation-play-state: paused | running | initial | inherit;",
    preview: (
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
              <code>paused</code>
            </td>
            <td>Анімація призупинена.</td>
          </tr>
          <tr>
            <td>
              <code>running</code>
            </td>
            <td>Анімація відтворюється. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`running`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "animation-timing-function",
    description: "Тип прискорення анімації.",
    code: "animation-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(n,n,n,n) | initial | inherit;",
    preview: (
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
              <code>linear</code>
            </td>
            <td>Анімація відбувається з постійною швидкістю.</td>
          </tr>
          <tr>
            <td>
              <code>ease</code>
            </td>
            <td>
              Анімація починається повільно, потім прискорюється і закінчується
              повільно. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>ease-in</code>
            </td>
            <td>Анімація починається повільно.</td>
          </tr>
          <tr>
            <td>
              <code>ease-out</code>
            </td>
            <td>Анімація закінчується повільно.</td>
          </tr>
          <tr>
            <td>
              <code>ease-in-out</code>
            </td>
            <td>Анімація починається і закінчується повільно.</td>
          </tr>
          <tr>
            <td>
              <code>cubic-bezier(n,n,n,n)</code>
            </td>
            <td>
              Задає власну криву швидкості за допомогою кубічної кривої Безьє.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`ease`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "backface-visibility",
    description: "Приховує віддзеркалення елемента.",
    code: "backface-visibility: visible | hidden | initial | inherit;",
    preview: (
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
              <code>visible</code>
            </td>
            <td>Задня сторона елемента видима. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>hidden</code>
            </td>
            <td>Задня сторона елемента прихована.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`visible`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background",
    description: "Універсальна властивість для всіх властивостей background.",
    code: "background: background-color background-image background-repeat background-attachment background-position/background-size background-origin background-clip | initial | inherit;",
    preview: (
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
              <code>background-color</code>
            </td>
            <td>Встановлює колір тла елемента.</td>
          </tr>
          <tr>
            <td>
              <code>background-image</code>
            </td>
            <td>Вказує одне або кілька фонових зображень.</td>
          </tr>
          <tr>
            <td>
              <code>background-repeat</code>
            </td>
            <td>Визначає, чи повторювати фонове зображення і як саме.</td>
          </tr>
          <tr>
            <td>
              <code>background-attachment</code>
            </td>
            <td>
              Визначає, чи є фонове зображення фіксованим або прокручується
              разом із вмістом.
            </td>
          </tr>
          <tr>
            <td>
              <code>background-position</code>
            </td>
            <td>Встановлює початкове положення фонового зображення.</td>
          </tr>
          <tr>
            <td>
              <code>background-size</code>
            </td>
            <td>Задає розмір фонового зображення.</td>
          </tr>
          <tr>
            <td>
              <code>background-origin</code>
            </td>
            <td>
              Визначає систему координат для властивості `background-position`.
            </td>
          </tr>
          <tr>
            <td>
              <code>background-clip</code>
            </td>
            <td>Визначає область, до якої обрізається тло елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-attachment",
    description:
      "Визначає поведінку фонового зображення при прокручуванні сторінки.",
    code: "background-attachment: scroll | fixed | local | initial | inherit;",
    preview: (
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
              <code>scroll</code>
            </td>
            <td>
              Фонове зображення прокручується разом із вмістом елемента. Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>fixed</code>
            </td>
            <td>
              Фонове зображення фіксується відносно вікна браузера і не
              прокручується.
            </td>
          </tr>
          <tr>
            <td>
              <code>local</code>
            </td>
            <td>
              Фонове зображення прокручується разом із вмістом елемента, але
              також фіксується відносно вмісту елемента.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`scroll`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-blend-mode",
    description: "Задає режим накладання декількох фонів.",
    code: "background-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайне накладання. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>multiply</code>
            </td>
            <td>Кольори фонів перемножуються.</td>
          </tr>
          <tr>
            <td>
              <code>screen</code>
            </td>
            <td>
              Кольори фонів інвертуються і перемножуються, а потім знову
              інвертуються.
            </td>
          </tr>
          <tr>
            <td>
              <code>overlay</code>
            </td>
            <td>Комбінація режимів `multiply` і `screen`.</td>
          </tr>
          <tr>
            <td>
              <code>darken</code>
            </td>
            <td>Вибирає найтемніший колір з фонів.</td>
          </tr>
          <tr>
            <td>
              <code>lighten</code>
            </td>
            <td>Вибирає найсвітліший колір з фонів.</td>
          </tr>
          <tr>
            <td>
              <code>color-dodge</code>
            </td>
            <td>Освітлює нижній фон у залежності від яскравості верхнього.</td>
          </tr>
          <tr>
            <td>
              <code>color-burn</code>
            </td>
            <td>Затемнює нижній фон у залежності від яскравості верхнього.</td>
          </tr>
          <tr>
            <td>
              <code>hard-light</code>
            </td>
            <td>
              Комбінація режимів `multiply` і `screen`, залежно від яскравості
              верхнього фону.
            </td>
          </tr>
          <tr>
            <td>
              <code>soft-light</code>
            </td>
            <td>Подібний до `hard-light`, але з меншою контрастністю.</td>
          </tr>
          <tr>
            <td>
              <code>difference</code>
            </td>
            <td>Показує різницю між кольорами фонів.</td>
          </tr>
          <tr>
            <td>
              <code>exclusion</code>
            </td>
            <td>Подібний до `difference`, але з меншою контрастністю.</td>
          </tr>
          <tr>
            <td>
              <code>hue</code>
            </td>
            <td>
              Використовує відтінок верхнього фону з насиченістю і світністю
              нижнього.
            </td>
          </tr>
          <tr>
            <td>
              <code>saturation</code>
            </td>
            <td>
              Використовує насиченість верхнього фону з відтінком і світністю
              нижнього.
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>
              Використовує відтінок і насиченість верхнього фону зі світністю
              нижнього.
            </td>
          </tr>
          <tr>
            <td>
              <code>luminosity</code>
            </td>
            <td>
              Використовує світність верхнього фону з відтінком і насиченістю
              нижнього.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-clip",
    description: "Визначає як тло має виводитися під гранями.",
    code: "background-clip: border-box | padding-box | content-box | initial | inherit;",
    preview: (
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
              <code>border-box</code>
            </td>
            <td>Тло обрізається по зовнішньому краю рамки. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>padding-box</code>
            </td>
            <td>Тло обрізається по зовнішньому краю внутрішніх відступів.</td>
          </tr>
          <tr>
            <td>
              <code>content-box</code>
            </td>
            <td>Тло обрізається по краю вмісту елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`border-box`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-color",
    description: "Встановлює цілісний колір тла.",
    code: "background-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>
              Задає колір тла (наприклад, `red`, `#ff0000`, `rgb(255, 0, 0)`).
            </td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Тло є прозорим. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`transparent`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-image",
    description: "Вказує одне або кілька фонових зображень.",
    code: "background-image: none | url('uri') [, url('uri')] | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Фонове зображення не використовується. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>url('uri')</code>
            </td>
            <td>
              Шлях до файлу зображення. Можна вказати кілька зображень через
              кому.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-origin",
    description: "Визначає позицію тла.",
    code: "background-origin: padding-box | border-box | content-box | initial | inherit;",
    preview: (
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
              <code>padding-box</code>
            </td>
            <td>
              Початком координат для позиціонування тла є верхній лівий кут
              області внутрішніх відступів. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>border-box</code>
            </td>
            <td>
              Початком координат для позиціонування тла є верхній лівий кут
              області рамки.
            </td>
          </tr>
          <tr>
            <td>
              <code>content-box</code>
            </td>
            <td>
              Початком координат для позиціонування тла є верхній лівий кут
              області вмісту.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`padding-box`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-position",
    description: "Вказує початкову позицію (зміщення) фонового зображення.",
    code: "background-position: left | right | top | bottom | center | length | percentage | initial | inherit;",
    preview: (
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
              <code>left</code>
            </td>
            <td>Вирівнює фонове зображення по лівому краю.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Вирівнює фонове зображення по правому краю.</td>
          </tr>
          <tr>
            <td>
              <code>top</code>
            </td>
            <td>Вирівнює фонове зображення по верхньому краю.</td>
          </tr>
          <tr>
            <td>
              <code>bottom</code>
            </td>
            <td>Вирівнює фонове зображення по нижньому краю.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Вирівнює фонове зображення по центру.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає зміщення у пікселях (px), сантиметрах (cm) тощо. Перше
              значення - горизонтальне, друге - вертикальне.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає зміщення у відсотках. Перше значення - горизонтальне, друге
              - вертикальне.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0% 0%`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-repeat",
    description: "Спосіб повторення фонового зображення.",
    code: "background-repeat: repeat | no-repeat | repeat-x | repeat-y | space | round | initial | inherit;",
    preview: (
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
              <code>repeat</code>
            </td>
            <td>
              Фонове зображення повторюється як по горизонталі, так і по
              вертикалі. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>no-repeat</code>
            </td>
            <td>Фонове зображення не повторюється.</td>
          </tr>
          <tr>
            <td>
              <code>repeat-x</code>
            </td>
            <td>Фонове зображення повторюється тільки по горизонталі.</td>
          </tr>
          <tr>
            <td>
              <code>repeat-y</code>
            </td>
            <td>Фонове зображення повторюється тільки по вертикалі.</td>
          </tr>
          <tr>
            <td>
              <code>space</code>
            </td>
            <td>
              Фонове зображення повторюється стільки разів, щоб поміститися в
              контейнері, а простір між ними рівномірно розподіляється.
            </td>
          </tr>
          <tr>
            <td>
              <code>round</code>
            </td>
            <td>
              Фонове зображення масштабується для рівномірного повторення без
              обрізання.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`repeat`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "background-size",
    description: "Вказує розмір тла.",
    code: "background-size: auto | cover | contain | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Розмір фонового зображення визначається автоматично (зазвичай
              зберігається оригінальний розмір). Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>cover</code>
            </td>
            <td>
              Фонове зображення масштабується так, щоб повністю покрити
              контейнер, зберігаючи пропорції (може обрізатися).
            </td>
          </tr>
          <tr>
            <td>
              <code>contain</code>
            </td>
            <td>
              Фонове зображення масштабується так, щоб повністю поміститися в
              контейнері, зберігаючи пропорції (можуть залишатися порожні
              області).
            </td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає ширину та висоту фонового зображення у пікселях (px),
              сантиметрах (cm) тощо. Можна задати одне значення (для обох
              розмірів) або два (ширина, висота).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає ширину та висоту фонового зображення у відсотках від розміру
              контейнера.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border",
    description: "Універсальна властивість для всіх властивостей border.",
    code: "border: border-width border-style border-color | initial | inherit;",
    preview: (
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
              <code>border-width</code>
            </td>
            <td>
              Встановлює товщину кордону (наприклад, `thin`, `medium`, `thick`,
              `length`).
            </td>
          </tr>
          <tr>
            <td>
              <code>border-style</code>
            </td>
            <td>
              Встановлює стиль кордону (наприклад, `none`, `dotted`, `dashed`,
              `solid`, `double`, `groove`, `ridge`, `inset`, `outset`).
            </td>
          </tr>
          <tr>
            <td>
              <code>border-color</code>
            </td>
            <td>Встановлює колір кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom",
    description:
      "Універсальна властивість для всіх властивостей border-bottom.",
    code: "border-bottom: border-bottom-width border-bottom-style border-bottom-color | initial | inherit;",
    preview: (
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
              <code>border-bottom-width</code>
            </td>
            <td>Встановлює товщину нижнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-bottom-style</code>
            </td>
            <td>Встановлює стиль нижнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-bottom-color</code>
            </td>
            <td>Встановлює колір нижнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom-color",
    description: "Встановлює колір нижнього кордону.",
    code: "border-bottom-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Задає колір нижнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Робить нижній кордон прозорим.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom-left-radius",
    description: "Встановлює радіус округлення нижнього лівого кута кордону.",
    code: "border-bottom-left-radius: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає радіус у пікселях (px), сантиметрах (cm) тощо. Можна задати
              одне або два значення (горизонтальний та вертикальний радіуси).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає радіус у відсотках.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom-right-radius",
    description: "Встановлює радіус округлення нижнього правого кута кордону.",
    code: "border-bottom-right-radius: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає радіус у пікселях (px), сантиметрах (cm) тощо. Можна задати
              одне або два значення (горизонтальний та вертикальний радіуси).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає радіус у відсотках.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom-style",
    description: "Встановлює стиль нижнього кордону.",
    code: "border-bottom-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Кордон відсутній.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штриховий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-кордон з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-кордон з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-bottom-width",
    description: "Товщина нижнього кордону.",
    code: "border-bottom-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонкий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середній кордон. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товстий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає товщину в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-collapse",
    description: "Встановлює, чи повинні кордони таблиці схлопуватись.",
    code: "border-collapse: collapse | separate | initial | inherit;",
    preview: (
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
              <code>collapse</code>
            </td>
            <td>Сусідні кордони таблиці схлопуються в один. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>separate</code>
            </td>
            <td>Кордони таблиці відображаються окремо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`collapse`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-color",
    description: "Встановлює колір всіх кордонів.",
    code: "border-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>
              Задає колір кордонів. Можна вказати до чотирьох кольорів (для
              верхнього, правого, нижнього та лівого кордонів).
            </td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Робить кордони прозорими.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image",
    description:
      "Універсальна властивість для всіх інших властивостей border-image-*.",
    code: "border-image: border-image-source border-image-slice / border-image-width / border-image-outset border-image-repeat | initial | inherit;",
    preview: (
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
              <code>border-image-source</code>
            </td>
            <td>Задає зображення для кордону елемента.</td>
          </tr>
          <tr>
            <td>
              <code>border-image-slice</code>
            </td>
            <td>Поділ зображення тла на частини.</td>
          </tr>
          <tr>
            <td>
              <code>border-image-width</code>
            </td>
            <td>Задає товщину зображення для кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-image-outset</code>
            </td>
            <td>Задає відстань виходу зображення за межі кордонів.</td>
          </tr>
          <tr>
            <td>
              <code>border-image-repeat</code>
            </td>
            <td>Визначає як буде повторюватися зображення кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image-outset",
    description: "Задає відстань виходу зображення за межі кордонів.",
    code: "border-image-outset: length | number | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає відстань у пікселях (px) тощо. Можна вказати до чотирьох
              значень (для верхнього, правого, нижнього та лівого країв).
            </td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Задає відстань як множник значення `border-width`.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image-repeat",
    description: "Визначає як буде повторюватися зображення кордону.",
    code: "border-image-repeat: stretch | repeat | round | space | initial | inherit;",
    preview: (
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
              <code>stretch</code>
            </td>
            <td>
              Зображення розтягується для заповнення області кордону. Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>repeat</code>
            </td>
            <td>
              Зображення повторюється для заповнення області кордону. Може
              обрізатися.
            </td>
          </tr>
          <tr>
            <td>
              <code>round</code>
            </td>
            <td>
              Зображення повторюється стільки разів, щоб поміститися, і
              масштабується для усунення проміжків.
            </td>
          </tr>
          <tr>
            <td>
              <code>space</code>
            </td>
            <td>
              Зображення повторюється стільки разів, щоб поміститися, а простір
              між ними рівномірно розподіляється.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`stretch`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image-slice",
    description: "Поділ зображення тла на частини.",
    code: "border-image-slice: number | percentage | fill | initial | inherit;",
    preview: (
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
              <code>number</code>
            </td>
            <td>
              Задає зсув з кожного краю зображення (верхнього, правого,
              нижнього, лівого). Без одиниць виміру.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає зсув у відсотках від розміру зображення.</td>
          </tr>
          <tr>
            <td>
              <code>fill</code>
            </td>
            <td>
              Зберігає середню частину зображення (за замовчуванням виключено).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image-source",
    description: "Задає зображення для кордону елемента.",
    code: "border-image-source: none | url('uri') | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Зображення для кордону не використовується. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>url('uri')</code>
            </td>
            <td>Шлях до файлу зображення.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-image-width",
    description: "Задає товщину зображення для кордону.",
    code: "border-image-width: length | number | auto | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає товщину у пікселях (px) тощо. Можна вказати до чотирьох
              значень (для верхнього, правого, нижнього та лівого країв).
            </td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Задає товщину як множник значення `border-width`.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>
              Товщина визначається автоматично на основі `border-image-slice`.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-left",
    description: "Універсальна властивість для всіх властивостей border-left.",
    code: "border-left: border-left-width border-left-style border-left-color | initial | inherit;",
    preview: (
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
              <code>border-left-width</code>
            </td>
            <td>Встановлює товщину лівого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-left-style</code>
            </td>
            <td>Встановлює стиль лівого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-left-color</code>
            </td>
            <td>Встановлює колір лівого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-left-color",
    description: "Встановлює колір лівого кордону.",
    code: "border-left-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Задає колір лівого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Робить лівий кордон прозорим.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-left-style",
    description: "Встановлює стиль лівого кордону.",
    code: "border-left-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Кордон відсутній.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штриховий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-кордон з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-кордон з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-left-width",
    description: "Задає товщину лівої границі.",
    code: "border-left-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонкий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середній кордон. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товстий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає товщину в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-radius",
    description:
      "Універсальна властивість для всіх властивостей border-*-radius.",
    code: "border-radius: length|percentage {1,4} / length|percentage {1,4} | initial | inherit;",
    preview: (
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
              <code>length|percentage</code>
            </td>
            <td>
              Задає радіус округлення. Можна вказати до чотирьох значень (для
              верхнього лівого, верхнього правого, нижнього правого та нижнього
              лівого кутів). Якщо вказано два значення, перше застосовується до
              верхнього лівого та нижнього правого, а друге - до верхнього
              правого та нижнього лівого. Якщо вказано одне значення, воно
              застосовується до всіх чотирьох кутів. Сліш `/` використовується
              для розділення горизонтальних та вертикальних радіусів.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-right",
    description: "Універсальна властивість для всіх властивостей border-right.",
    code: "border-right: border-right-width border-right-style border-right-color | initial | inherit;",
    preview: (
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
              <code>border-right-width</code>
            </td>
            <td>Встановлює товщину правого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-right-style</code>
            </td>
            <td>Встановлює стиль правого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-right-color</code>
            </td>
            <td>Встановлює колір правого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-right-color",
    description: "Встановлює колір правого кордону.",
    code: "border-right-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Задає колір правого кордону.</td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Робить правий кордон прозорим.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-right-style",
    description: "Встановлює стиль правого кордону.",
    code: "border-right-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Кордон відсутній.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штриховий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-кордон з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-кордон з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-right-width",
    description: "Задає товщину правого кордону.",
    code: "border-right-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонкий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середній кордон. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товстий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає товщину в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-spacing",
    description: "Відстань між кордонами сусідніх комірок.",
    code: "border-spacing: length length? | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає відстань у пікселях (px), сантиметрах (cm) тощо. Можна
              вказати одне значення (для горизонтальної та вертикальної
              відстані) або два (перше - горизонтальна, друге - вертикальна).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-style",
    description: "Стиль кордонів елементу.",
    code: "border-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Кордони відсутні.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирні кордони.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штрихові кордони.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільні кордони.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійні кордони.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-кордони з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-кордони з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-кордони з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-кордони з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top",
    description:
      "Універсальна властивість для всіх інших властивостей border-top.",
    code: "border-top: border-top-width border-top-style border-top-color | initial | inherit;",
    preview: (
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
              <code>border-top-width</code>
            </td>
            <td>Встановлює товщину верхнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-top-style</code>
            </td>
            <td>Встановлює стиль верхнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>border-top-color</code>
            </td>
            <td>Встановлює колір верхнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top-color",
    description: "Встановлює колір верхньої кордону.",
    code: "border-top-color: color | transparent | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Задає колір верхнього кордону.</td>
          </tr>
          <tr>
            <td>
              <code>transparent</code>
            </td>
            <td>Робить верхній кордон прозорим.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top-left-radius",
    description: "Радіус округлення верхнього лівого кута кордону.",
    code: "border-top-left-radius: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає радіус у пікселях (px), сантиметрах (cm) тощо. Можна задати
              одне або два значення (горизонтальний та вертикальний радіуси).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає радіус у відсотках.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top-right-radius",
    description: "Радіус округлення верхнього правого кута кордону.",
    code: "border-top-right-radius: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>
              Задає радіус у пікселях (px), сантиметрах (cm) тощо. Можна задати
              одне або два значення (горизонтальний та вертикальний радіуси).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає радіус у відсотках.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top-style",
    description: "Стиль верхнього кордону.",
    code: "border-top-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Кордон відсутній.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штриховий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійний кордон.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-кордон з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-кордон з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-кордон з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-top-width",
    description: "Товщину верхнього кордону.",
    code: "border-top-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонкий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середній кордон. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товстий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає товщину в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "border-width",
    description: "Товщина кордону.",
    code: "border-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонкий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середній кордон. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товстий кордон.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає товщину в пікселях (px), сантиметрах (cm) тощо. Можна
              вказати до чотирьох значень (для верхнього, правого, нижнього та
              лівого кордонів).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "bottom",
    description: "Зміщення відносно нижнього краю.",
    code: "bottom: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює значення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відстань у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відстань у відсотках від висоти батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "box-decoration-break",
    description: "Стилізація окремих фрагментів елемента.",
    code: "box-decoration-break: slice | clone | initial | inherit;",
    preview: (
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
              <code>slice</code>
            </td>
            <td>
              Застосовує стилі (наприклад, рамку, фон, тінь) до кожного
              фрагмента елемента окремо. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>clone</code>
            </td>
            <td>Застосовує стилі так, ніби елемент є суцільним блоком.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`slice`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "box-shadow",
    description: "Додає тінь до елементу.",
    code: "box-shadow: none | h-offset v-offset blur spread color | inset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає тіні. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>h-offset</code>
            </td>
            <td>
              Горизонтальне зміщення тіні (обов'язкове). Додатне значення - тінь
              праворуч, від'ємне - ліворуч.
            </td>
          </tr>
          <tr>
            <td>
              <code>v-offset</code>
            </td>
            <td>
              Вертикальне зміщення тіні (обов'язкове). Додатне значення - тінь
              знизу, від'ємне - зверху.
            </td>
          </tr>
          <tr>
            <td>
              <code>blur</code>
            </td>
            <td>
              Радіус розмиття тіні (необов'язкове). Чим більше значення, тим
              сильніше розмиття.
            </td>
          </tr>
          <tr>
            <td>
              <code>spread</code>
            </td>
            <td>
              Радіус розширення тіні (необов'язкове). Додатне значення збільшує
              розмір тіні, від'ємне - зменшує.
            </td>
          </tr>
          <tr>
            <td>
              <code>color</code>
            </td>
            <td>Колір тіні (необов'язкове).</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>Робить тінь внутрішньою (необов'язкове).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "box-sizing",
    description: "Задає алгоритму розрахунку ширини і висоти елемента.",
    code: "box-sizing: content-box | border-box | initial | inherit;",
    preview: (
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
              <code>content-box</code>
            </td>
            <td>
              Ширина та висота включають тільки вміст елемента, відступи та
              рамки додаються зовні. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>border-box</code>
            </td>
            <td>Ширина та висота включають вміст, відступи та рамки.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`content-box`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "break-after",
    description: "Як повинні поводитися розриві після генерації контейнеру.",
    code: "break-after: auto | avoid | all | avoid-page | page | left | right | avoid-column | column | avoid-region | region | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає розрив. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникає розриву після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Завжди вставляє розрив після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-page</code>
            </td>
            <td>Уникає розриву сторінки після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>page</code>
            </td>
            <td>Завжди вставляє розрив сторінки після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>
              Вставляє розрив сторінки після елемента так, щоб наступна сторінка
              була лівою.
            </td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>
              Вставляє розрив сторінки після елемента так, щоб наступна сторінка
              була правою.
            </td>
          </tr>
          <tr>
            <td>
              <code>avoid-column</code>
            </td>
            <td>Уникає розриву стовпця після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>column</code>
            </td>
            <td>Завжди вставляє розрив стовпця після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-region</code>
            </td>
            <td>Уникає розриву регіону після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>region</code>
            </td>
            <td>Завжди вставляє розрив регіону після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "break-before",
    description: "Змушує розбивати на декілька стовпців макет.",
    code: "break-before: auto | avoid | all | avoid-page | page | left | right | avoid-column | column | avoid-region | region | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає розрив. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникає розриву перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Завжди вставляє розрив перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-page</code>
            </td>
            <td>Уникає розриву сторінки перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>page</code>
            </td>
            <td>Завжди вставляє розрив сторінки перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>
              Вставляє розрив сторінки перед елементом так, щоб поточна сторінка
              була лівою.
            </td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>
              Вставляє розрив сторінки перед елементом так, щоб поточна сторінка
              була правою.
            </td>
          </tr>
          <tr>
            <td>
              <code>avoid-column</code>
            </td>
            <td>Уникає розриву стовпця перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>column</code>
            </td>
            <td>Завжди вставляє розрив стовпця перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-region</code>
            </td>
            <td>Уникає розриву регіону перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>region</code>
            </td>
            <td>Завжди вставляє розрив регіону перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "break-inside",
    description: "Визначає стан перерв у контейнері.",
    code: "break-inside: auto | avoid | avoid-page | avoid-column | avoid-region | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає розриви всередині елемента. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникає будь-яких розривів всередині елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-page</code>
            </td>
            <td>Уникає розривів сторінок всередині елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-column</code>
            </td>
            <td>Уникає розривів стовпців всередині елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid-region</code>
            </td>
            <td>Уникає розривів регіонів всередині елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "caption-side",
    description: "Визначає розміщення заголовку таблиці.",
    code: "caption-side: top | bottom | initial | inherit;",
    preview: (
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
              <code>top</code>
            </td>
            <td>Заголовок розміщується зверху таблиці. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>bottom</code>
            </td>
            <td>Заголовок розміщується знизу таблиці.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`top`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "clear",
    description:
      "Встановлює, з якого боку елемента заборонено його обтікання іншими елементами.",
    code: "clear: none | left | right | both | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Дозволяє обтікання з обох сторін. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Забороняє обтікання з лівого боку.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Забороняє обтікання з правого боку.</td>
          </tr>
          <tr>
            <td>
              <code>both</code>
            </td>
            <td>Забороняє обтікання з обох сторін.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "clip",
    description:
      "Визначає область позиціонованого елемента, в якій буде показано його вміст.",
    code: "clip: auto | rect(top, right, bottom, left) | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Елемент не обрізається. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>rect(top, right, bottom, left)</code>
            </td>
            <td>Визначає координати прямокутної області обрізки.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "color",
    description: "Задає колір тексту та його оздоблення.",
    code: "color: color | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>
              Задає колір тексту (наприклад, `red`, `#ff0000`, `rgb(255, 0,
              0)`).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (зазвичай колір
              тексту браузера).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-count",
    description: "Кількість колонок в на які повинен бути розділений елемент.",
    code: "column-count: auto | number | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Кількість колонок визначається браузером. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Задає бажану кількість колонок (ціле число більше 0).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-fill",
    description: "Спосіб заповнення стовпчиків в багатоколонковому тексті.",
    code: "column-fill: auto | balance | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Колонки заповнюються послідовно. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>balance</code>
            </td>
            <td>
              Вміст розподіляється між колонками так, щоб вони мали приблизно
              однакову висоту.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-gap",
    description: "Проміжок між колонками.",
    code: "column-gap: normal | length | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>
              Проміжок за замовчуванням (залежить від браузера та шрифту). Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає проміжок у пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-rule",
    description: "Визначає властивості лінії між колонками.",
    code: "column-rule: column-rule-width column-rule-style column-rule-color | initial | inherit;",
    preview: (
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
              <code>column-rule-width</code>
            </td>
            <td>Товщина лінії між колонками.</td>
          </tr>
          <tr>
            <td>
              <code>column-rule-style</code>
            </td>
            <td>Вигляд лінії між колонками.</td>
          </tr>
          <tr>
            <td>
              <code>column-rule-color</code>
            </td>
            <td>Колір лінії між колонками.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-rule-color",
    description: "Вказує колір лінії.",
    code: "column-rule-color: color | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Задає колір лінії між колонками.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (зазвичай колір
              тексту).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-rule-style",
    description: "Визначає вигляд лінії.",
    code: "column-rule-style: none | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Лінія відсутня. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктирна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штрихова лінія.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>3D-лінія з ефектом вдавлювання.</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>3D-лінія з ефектом виступу.</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>3D-лінія з ефектом вдавлювання всередину.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>3D-лінія з ефектом виступу назовні.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-rule-width",
    description: "Товщина лінії між колонками.",
    code: "column-rule-width: thin | medium | thick | length | initial | inherit;",
    preview: (
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
              <code>thin</code>
            </td>
            <td>Тонка лінія.</td>
          </tr>
          <tr>
            <td>
              <code>medium</code>
            </td>
            <td>Середня лінія. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товста лінія.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає товщину в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "columns",
    description: "Ширина та кількість колонок в багатоколонковому тексті.",
    code: "columns: auto | width | count | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Ширина та кількість колонок визначаються браузером. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>
              Задає оптимальну ширину кожної колонки. Браузер розраховує
              кількість колонок.
            </td>
          </tr>
          <tr>
            <td>
              <code>count</code>
            </td>
            <td>
              Задає бажану кількість колонок. Браузер розраховує ширину кожної
              колонки.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-span",
    description: "Скільки колонок повинен займати елемент.",
    code: "column-span: 1 | all | initial | inherit;",
    preview: (
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
              <code>1</code>
            </td>
            <td>Елемент займає одну колонку. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Елемент займає всі колонки.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`1`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "column-width",
    description: "Ширина стовпчика в багатоколонковому тексті.",
    code: "column-width: auto | length | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Ширина стовпчика визначається браузером. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає оптимальну ширину стовпчика в пікселях (px), сантиметрах
              (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "content",
    description: "Змінює вміст елемента після формування сторінки.",
    code: "content: normal | none | string | url() | counter() | attr() | open-quote | close-quote | no-open-quote | no-close-quote | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Вміст елемента відображається як зазвичай. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Елемент не генерує жодного вмісту.</td>
          </tr>
          <tr>
            <td>
              <code>string</code>
            </td>
            <td>Задає текстовий вміст.</td>
          </tr>
          <tr>
            <td>
              <code>url()</code>
            </td>
            <td>Вставляє зовнішній ресурс (наприклад, зображення).</td>
          </tr>
          <tr>
            <td>
              <code>counter()</code>
            </td>
            <td>Відображає значення лічильника.</td>
          </tr>
          <tr>
            <td>
              <code>attr()</code>
            </td>
            <td>Відображає значення атрибута елемента.</td>
          </tr>
          <tr>
            <td>
              <code>open-quote</code>
            </td>
            <td>
              Вставляє відкриваючу лапку (залежить від властивості `quotes`).
            </td>
          </tr>
          <tr>
            <td>
              <code>close-quote</code>
            </td>
            <td>
              Вставляє закриваючу лапку (залежить від властивості `quotes`).
            </td>
          </tr>
          <tr>
            <td>
              <code>no-open-quote</code>
            </td>
            <td>Не вставляє відкриваючу лапку.</td>
          </tr>
          <tr>
            <td>
              <code>no-close-quote</code>
            </td>
            <td>Не вставляє закриваючу лапку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "counter-increment",
    description: "Прирощує один або кілька лічильників.",
    code: "counter-increment: identifier integer? | none | initial | inherit;",
    preview: (
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
              <code>identifier</code>
            </td>
            <td>Ім'я лічильника.</td>
          </tr>
          <tr>
            <td>
              <code>integer</code>
            </td>
            <td>
              Значення, на яке збільшується лічильник (за замовчуванням 1). Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Лічильник не збільшується. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "counter-reset",
    description: "Створює або скидає один або кілька лічильників.",
    code: "counter-reset: identifier integer? | none | initial | inherit;",
    preview: (
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
              <code>identifier</code>
            </td>
            <td>Ім'я лічильника.</td>
          </tr>
          <tr>
            <td>
              <code>integer</code>
            </td>
            <td>Значення, на яке скидається лічильник (за замовчуванням 0).</td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Лічильники не скидаються. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "cursor",
    description: "Визначає тип курсора, який буде відображатися.",
    code: "cursor: auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | grab | grabbing | zoom-in | zoom-out | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає курсор. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>default</code>
            </td>
            <td>Курсор за замовчуванням (зазвичай стрілка).</td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Курсор не відображається.</td>
          </tr>
          <tr>
            <td>
              <code>context-menu</code>
            </td>
            <td>Контекстне меню.</td>
          </tr>
          <tr>
            <td>
              <code>help</code>
            </td>
            <td>Допомога.</td>
          </tr>
          <tr>
            <td>
              <code>pointer</code>
            </td>
            <td>Вказівник (рука).</td>
          </tr>
          <tr>
            <td>
              <code>progress</code>
            </td>
            <td>Індикатор прогресу.</td>
          </tr>
          <tr>
            <td>
              <code>wait</code>
            </td>
            <td>Курсор очікування (пісочний годинник).</td>
          </tr>
          <tr>
            <td>
              <code>cell</code>
            </td>
            <td>Курсор вибору комірки.</td>
          </tr>
          <tr>
            <td>
              <code>crosshair</code>
            </td>
            <td>Курсор у вигляді перехрестя.</td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>Курсор вибору тексту.</td>
          </tr>
          <tr>
            <td>
              <code>vertical-text</code>
            </td>
            <td>Курсор вертикального тексту.</td>
          </tr>
          <tr>
            <td>
              <code>alias</code>
            </td>
            <td>Курсор для створення псевдоніма.</td>
          </tr>
          <tr>
            <td>
              <code>copy</code>
            </td>
            <td>Курсор для копіювання.</td>
          </tr>
          <tr>
            <td>
              <code>move</code>
            </td>
            <td>Курсор для переміщення.</td>
          </tr>
          <tr>
            <td>
              <code>no-drop</code>
            </td>
            <td>Курсор, що вказує на заборону перетягування.</td>
          </tr>
          <tr>
            <td>
              <code>not-allowed</code>
            </td>
            <td>Курсор, що вказує на заборонену дію.</td>
          </tr>
          <tr>
            <td>
              <code>grab</code>
            </td>
            <td>Курсор для захоплення елемента.</td>
          </tr>
          <tr>
            <td>
              <code>grabbing</code>
            </td>
            <td>Курсор, що вказує на переміщення елемента.</td>
          </tr>
          <tr>
            <td>
              <code>zoom-in</code>
            </td>
            <td>Курсор для збільшення.</td>
          </tr>
          <tr>
            <td>
              <code>zoom-out</code>
            </td>
            <td>Курсор для зменшення.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "direction",
    description: "Визначає напрямок тексту/напрямок вводу тексту.",
    code: "direction: ltr | rtl | initial | inherit;",
    preview: (
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
              <code>ltr</code>
            </td>
            <td>
              Напрямок зліва направо (за замовчуванням для більшості мов). Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>rtl</code>
            </td>
            <td>Напрямок справа наліво (наприклад, для арабської, івриту).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`ltr`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "display",
    description: "Тип блока для HTML-елемента.",
    code: "display: none | inline | block | inline-block | flex | inline-flex | grid | inline-grid | table | inline-table | table-caption | table-cell | table-column | table-colgroup | table-footer-group | table-header-group | table-row | table-row-group | flow-root | list-item | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Елемент не відображається і не займає місця.</td>
          </tr>
          <tr>
            <td>
              <code>inline</code>
            </td>
            <td>
              Елемент відображається як вбудований (займає мінімум необхідного
              місця).
            </td>
          </tr>
          <tr>
            <td>
              <code>block</code>
            </td>
            <td>
              Елемент відображається як блоковий (займає всю доступну ширину і
              створює новий рядок до та після себе).
            </td>
          </tr>
          <tr>
            <td>
              <code>inline-block</code>
            </td>
            <td>
              Елемент є вбудованим, але поводиться як блоковий (можна задавати
              ширину, висоту, відступи).
            </td>
          </tr>
          <tr>
            <td>
              <code>flex</code>
            </td>
            <td>Елемент відображається як гнучкий контейнер.</td>
          </tr>
          <tr>
            <td>
              <code>inline-flex</code>
            </td>
            <td>Елемент відображається як вбудований гнучкий контейнер.</td>
          </tr>
          <tr>
            <td>
              <code>grid</code>
            </td>
            <td>Елемент відображається як сітковий контейнер.</td>
          </tr>
          <tr>
            <td>
              <code>inline-grid</code>
            </td>
            <td>Елемент відображається як вбудований сітковий контейнер.</td>
          </tr>
          <tr>
            <td>
              <code>table</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>table</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>inline-table</code>
            </td>
            <td>
              Елемент поводиться як вбудований елемент <code>table</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-caption</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>caption</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-cell</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>td</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-column</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>col</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-colgroup</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>colgroup</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-footer-group</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>tfoot</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-header-group</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>thead</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-row</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>tr</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>table-row-group</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>tbody</code>.
            </td>
          </tr>
          <tr>
            <td>
              <code>flow-root</code>
            </td>
            <td>Створює новий контекст форматування блоку.</td>
          </tr>
          <tr>
            <td>
              <code>list-item</code>
            </td>
            <td>
              Елемент поводиться як елемент <code>li</code>
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (залежить від типу
              елемента).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "empty-cells",
    description: "Приховує в таблиці порожні комірки.",
    code: "empty-cells: show | hide | initial | inherit;",
    preview: (
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
              <code>show</code>
            </td>
            <td>Показує кордони та фон порожніх комірок. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>hide</code>
            </td>
            <td>Приховує кордони та фон порожніх комірок.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`show`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "filter",
    description: "Художні ефекти.",
    code: "filter: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url() | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає фільтрів. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>blur(radius)</code>
            </td>
            <td>Застосовує розмиття.</td>
          </tr>
          <tr>
            <td>
              <code>brightness(%)</code>
            </td>
            <td>Регулює яскравість.</td>
          </tr>
          <tr>
            <td>
              <code>contrast(%)</code>
            </td>
            <td>Регулює контрастність.</td>
          </tr>
          <tr>
            <td>
              <code>drop-shadow(h-shadow v-shadow blur spread color)</code>
            </td>
            <td>Додає тінь, що відкидається.</td>
          </tr>
          <tr>
            <td>
              <code>grayscale(%)</code>
            </td>
            <td>Перетворює зображення на відтінки сірого.</td>
          </tr>
          <tr>
            <td>
              <code>hue-rotate(deg)</code>
            </td>
            <td>Змінює відтінок кольору.</td>
          </tr>
          <tr>
            <td>
              <code>invert(%)</code>
            </td>
            <td>Інвертує кольори.</td>
          </tr>
          <tr>
            <td>
              <code>opacity(%)</code>
            </td>
            <td>Регулює прозорість.</td>
          </tr>
          <tr>
            <td>
              <code>saturate(%)</code>
            </td>
            <td>Регулює насиченість кольору.</td>
          </tr>
          <tr>
            <td>
              <code>sepia(%)</code>
            </td>
            <td>Застосовує ефект сепії.</td>
          </tr>
          <tr>
            <td>
              <code>url(SVG-filter-URL)</code>
            </td>
            <td>Посилання на SVG-фільтр.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex",
    description: "Розмір гумових елементів.",
    code: "flex: none | [ flex-grow flex-shrink? || flex-basis ] | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>
              Елемент не є гнучким і його розміри визначаються властивостями
              `width` та `height`.
            </td>
          </tr>
          <tr>
            <td>
              <code>flex-grow</code>
            </td>
            <td>Коефіцієнт збільшення гнучкого елемента.</td>
          </tr>
          <tr>
            <td>
              <code>flex-shrink</code>
            </td>
            <td>Коефіцієнт стиснення флексів в контейнері.</td>
          </tr>
          <tr>
            <td>
              <code>flex-basis</code>
            </td>
            <td>Початкова довжина флекс елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0 1 auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-basis",
    description: "Початкова довжина флекс елемента.",
    code: "flex-basis: auto | length | percentage | content | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Початкова довжина визначається вмістом елемента. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає початкову довжину в пікселях (px), сантиметрах (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає початкову довжину у відсотках від розміру гнучкого
              контейнера.
            </td>
          </tr>
          <tr>
            <td>
              <code>content</code>
            </td>
            <td>Початкова довжина базується на вмісті елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-direction",
    description: "Напрямок розрашовування гнучких елементів.",
    code: "flex-direction: row | row-reverse | column | column-reverse | initial | inherit;",
    preview: (
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
              <code>row</code>
            </td>
            <td>
              Гнучкі елементи розташовуються горизонтально в рядку. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>row-reverse</code>
            </td>
            <td>
              Гнучкі елементи розташовуються горизонтально в рядку у зворотному
              порядку.
            </td>
          </tr>
          <tr>
            <td>
              <code>column</code>
            </td>
            <td>Гнучкі елементи розташовуються вертикально у стовпці.</td>
          </tr>
          <tr>
            <td>
              <code>column-reverse</code>
            </td>
            <td>
              Гнучкі елементи розташовуються вертикально у стовпці у зворотному
              порядку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`row`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-flow",
    description:
      "Скорочена властивість для властивостей flex-direction і flex-wrap.",
    code: "flex-flow: [ flex-direction || flex-wrap ] | initial | inherit;",
    preview: (
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
              <code>flex-direction</code>
            </td>
            <td>Напрямок розрашовування гнучких елементів.</td>
          </tr>
          <tr>
            <td>
              <code>flex-wrap</code>
            </td>
            <td>Спосіб знесення гнучких елемнтів.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`row nowrap`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-grow",
    description: "Коефіціент збільшення гнучкого елемента.",
    code: "flex-grow: number | initial | inherit;",
    preview: (
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
              <code>number</code>
            </td>
            <td>
              Числове значення, що визначає, скільки вільного простору в
              гнучкому контейнері повинен зайняти елемент відносно інших гнучких
              елементів. Без задання 0.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-shrink",
    description: "Коефіцієнт стиснення флексів в контейнері.",
    code: "flex-shrink: number | initial | inherit;",
    preview: (
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
              <code>number</code>
            </td>
            <td>
              Числове значення, що визначає, наскільки елемент може стискатися
              відносно інших гнучких елементів у гнучкому контейнері при нестачі
              місця. Без задання 1.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`1`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "flex-wrap",
    description: "Спосіб знесення гнучких елемнтів.",
    code: "flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit;",
    preview: (
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
              <code>nowrap</code>
            </td>
            <td>Гнучкі елементи розташовуються в один рядок. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>wrap</code>
            </td>
            <td>
              Гнучкі елементи переносяться на новий рядок при нестачі місця.
            </td>
          </tr>
          <tr>
            <td>
              <code>wrap-reverse</code>
            </td>
            <td>
              Гнучкі елементи переносяться на новий рядок у зворотному порядку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`nowrap`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "float",
    description:
      "Визначає, по якій стороні буде вирівнюватися елемент, при цьому інші елементи будуть обтікати його з інших сторін.",
    code: "float: left | right | none | initial | inherit;",
    preview: (
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
              <code>left</code>
            </td>
            <td>
              Елемент вирівнюється по лівому краю контейнера, інші елементи
              обтікають його справа.
            </td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>
              Елемент вирівнюється по правому краю контейнера, інші елементи
              обтікають його зліва.
            </td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Елемент не є плаваючим. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font",
    description: "Універсальна властивість для всіх інших властивостей font.",
    code: "font: [ [ <'font-style'> || <'font-variant'> || <'font-weight'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar | initial | inherit;",
    preview: (
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
              <code>font-style</code>
            </td>
            <td>Стиль шрифту (наприклад, `normal`, `italic`, `oblique`).</td>
          </tr>
          <tr>
            <td>
              <code>font-variant</code>
            </td>
            <td>Варіант шрифту (наприклад, `normal`, `small-caps`).</td>
          </tr>
          <tr>
            <td>
              <code>font-weight</code>
            </td>
            <td>Товщина шрифту (наприклад, `normal`, `bold`, `100`-`900`).</td>
          </tr>
          <tr>
            <td>
              <code>font-size</code>
            </td>
            <td>Розмір тексту.</td>
          </tr>
          <tr>
            <td>
              <code>line-height</code>
            </td>
            <td>Міжрядковий інтервал.</td>
          </tr>
          <tr>
            <td>
              <code>font-family</code>
            </td>
            <td>Сімейство шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>caption</code>
            </td>
            <td>
              Шрифт, який використовується для підписів елементів керування
              (наприклад, кнопок, спадних списків).
            </td>
          </tr>
          <tr>
            <td>
              <code>icon</code>
            </td>
            <td>Шрифт, який використовується для іконок.</td>
          </tr>
          <tr>
            <td>
              <code>menu</code>
            </td>
            <td>Шрифт, який використовується в меню.</td>
          </tr>
          <tr>
            <td>
              <code>message-box</code>
            </td>
            <td>Шрифт, який використовується в діалогових вікнах.</td>
          </tr>
          <tr>
            <td>
              <code>small-caption</code>
            </td>
            <td>Шрифт, який використовується для маленьких підписів.</td>
          </tr>
          <tr>
            <td>
              <code>status-bar</code>
            </td>
            <td>Шрифт, який використовується в рядку стану.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "@font-face",
    description: "Завантаження власного шрифту.",
    code: "@font-face {\n  font-family: 'Your Custom Font';\n  src: url('path/to/your/font.woff2') format('woff2'),\n       url('path/to/your/font.woff') format('woff');\n  font-weight: normal;\n  font-style: normal;\n}",
    preview: (
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
              <code>font-family</code>
            </td>
            <td>Назва вашого власного шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>src</code>
            </td>
            <td>Шлях до файлів шрифтів. Можна вказати кілька форматів.</td>
          </tr>
          <tr>
            <td>
              <code>format()</code>
            </td>
            <td>Вказує формат файлу шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>font-weight</code>
            </td>
            <td>Товщина шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>font-style</code>
            </td>
            <td>Стиль шрифту.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-family",
    description: "Задає сімейство шрифту.",
    code: "font-family: [ <family-name> | <generic-family> ] [, <family-name> | <generic-family> ]* | initial | inherit;",
    preview: (
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
              <code>family-name</code>
            </td>
            <td>
              Назва конкретного шрифту (наприклад, 'Arial', 'Times New Roman').
            </td>
          </tr>
          <tr>
            <td>
              <code>generic-family</code>
            </td>
            <td>
              Загальна назва сімейства шрифтів (наприклад, `serif`,
              `sans-serif`, `monospace`, `cursive`, `fantasy`).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-feature-settings",
    description: "Контроль над функціями OpenType.",
    code: "font-feature-settings: normal | <feature-tag-value-list> | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Функції OpenType за замовчуванням. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>feature-tag-value-list</code>
            </td>
            <td>
              Список тегів функцій OpenType та їх значень (наприклад, `liga`,
              `dlig`, `smcp`).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-feature-values",
    description:
      "Дозволяє використовувати загальну назву в властивості font-variant-alternates​ для функцій, активізованих по-різному в OpenType.",
    code: "@font-feature-values <font-family-name> { <feature-tag>: [ <integer> | on | off ] # };",
    preview: (
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
              <code>@font-feature-values</code>
            </td>
            <td>Правило для визначення значень функцій шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>font-family-name</code>
            </td>
            <td>Назва сімейства шрифтів, до якого застосовуються значення.</td>
          </tr>
          <tr>
            <td>
              <code>feature-tag</code>
            </td>
            <td>Тег функції OpenType.</td>
          </tr>
          <tr>
            <td>
              <code>integer | on | off</code>
            </td>
            <td>Значення функції.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-kerning",
    description: "Зміни інтервалу між глифами.",
    code: "font-kerning: auto | normal | none | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Кернінг застосовується браузером на основі таблиць шрифту. Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Те саме, що й `auto`.</td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Кернінг не застосовується.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-language-override",
    description:
      "Дозволяє керувати використанням конкретних гліфів для конкретної мови.",
    code: "font-language-override: normal | <language-tag> | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>
              Використовуються гліфи за замовчуванням для мови документа. Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>language-tag</code>
            </td>
            <td>Тег мови BCP 47 (наприклад, `en`, `ar`, `zh-Hant`).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-size",
    description: "Розмір тексту.",
    code: "font-size: absolute-size | relative-size | length | percentage | initial | inherit;",
    preview: (
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
              <code>absolute-size</code>
            </td>
            <td>
              Абсолютний розмір (наприклад, `xx-small`, `x-small`, `small`,
              `medium`, `large`, `x-large`, `xx-large`). `medium` - за
              замовчуванням.
            </td>
          </tr>
          <tr>
            <td>
              <code>relative-size</code>
            </td>
            <td>
              Розмір відносно батьківського елемента (`larger`, `smaller`).
            </td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Розмір у пікселях (px), пунктах (pt), емах (em) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Розмір у відсотках від розміру шрифту батьківського елемента.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`medium`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-size-adjust",
    description:
      "Зберігає читаємість тексту при ви користуванні резервного шрифту.",
    code: "font-size-adjust: none | auto | number | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Коефіцієнт не застосовується. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Браузер використовує коефіцієнт першого доступного шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Задає коефіцієнт.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-stretch",
    description: "Встановлює вигляд шрифту.",
    code: "font-stretch: normal | wider | narrower | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний вигляд. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>wider</code>
            </td>
            <td>Ширший за звичайний.</td>
          </tr>
          <tr>
            <td>
              <code>narrower</code>
            </td>
            <td>Вужчий за звичайний.</td>
          </tr>
          <tr>
            <td>
              <code>ultra-condensed</code>
            </td>
            <td>Найсжатіший.</td>
          </tr>
          <tr>
            <td>
              <code>extra-condensed</code>
            </td>
            <td>Дуже стиснутий.</td>
          </tr>
          <tr>
            <td>
              <code>condensed</code>
            </td>
            <td>Стиснутий.</td>
          </tr>
          <tr>
            <td>
              <code>semi-condensed</code>
            </td>
            <td>Напівстиснутий.</td>
          </tr>
          <tr>
            <td>
              <code>semi-expanded</code>
            </td>
            <td>Напіврозширений.</td>
          </tr>
          <tr>
            <td>
              <code>expanded</code>
            </td>
            <td>Розширений.</td>
          </tr>
          <tr>
            <td>
              <code>extra-expanded</code>
            </td>
            <td>Дуже розширений.</td>
          </tr>
          <tr>
            <td>
              <code>ultra-expanded</code>
            </td>
            <td>Найрозширеніший.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-style",
    description: "Стиль шрифту.",
    code: "font-style: normal | italic | oblique <angle>? | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний стиль. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>italic</code>
            </td>
            <td>Курсив.</td>
          </tr>
          <tr>
            <td>
              <code>oblique</code>
            </td>
            <td>
              Похилий. Можна задати кут нахилу (наприклад, `oblique 10deg`).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-synthesis",
    description:
      "Синтез шрифту, коли для цієї мети він не має спеціального гліфа.",
    code: "font-synthesis: none | weight || style | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Забороняє синтез товщини та стилю.</td>
          </tr>
          <tr>
            <td>
              <code>weight</code>
            </td>
            <td>
              Дозволяє синтез товщини (наприклад, створення жирного шрифту). Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>style</code>
            </td>
            <td>
              Дозволяє синтез стилю (наприклад, створення курсиву). Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`weight style`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant",
    description: "Контроль стилістичних функцій шрифтів.",
    code: "font-variant: normal | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || <stylistic-alt-values> || <character-variant-values> || <swash-values> || <ornaments-values> || <annotation-values> || small-caps || all-small-caps || petite-caps || all-petite-caps || unicase || all-unicase || case-sensitive || case-insensitive || numeric-figure-values || numeric-spacing-values || numeric-fraction-values || ruby || initial || inherit ]",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний вигляд. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>small-caps</code>
            </td>
            <td>Відображає малі літери як зменшені великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-small-caps</code>
            </td>
            <td>Відображає як великі, так і малі літери як зменшені великі.</td>
          </tr>
          <tr>
            <td>
              <code>petite-caps</code>
            </td>
            <td>Відображає малі літери як менші великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-petite-caps</code>
            </td>
            <td>Відображає як великі, так і малі літери як менші великі.</td>
          </tr>
          <tr>
            <td>
              <code>unicase</code>
            </td>
            <td>Відображає всі літери як великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-unicase</code>
            </td>
            <td>Те саме, що й `unicase`.</td>
          </tr>
          <tr>
            <td>
              <code>case-sensitive</code>
            </td>
            <td>Застосовує залежні від регістру гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>case-insensitive</code>
            </td>
            <td>Застосовує незалежні від регістру гліфи.</td>
          </tr>
          {/* Додати описи для інших значень */}
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-alternates",
    description: "Дозволяє керувати вибором альтернативних гліфів.",
    code: "font-variant-alternates: normal | [ stylistic(ident) || character-variant(ident) || swash(ident) || ornaments(ident) || annotation(ident) || historical-forms ] | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Альтернативні гліфи не використовуються. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>stylistic(ident)</code>
            </td>
            <td>Використовує стилістичний набір.</td>
          </tr>
          <tr>
            <td>
              <code>character-variant(ident)</code>
            </td>
            <td>Використовує варіант символу.</td>
          </tr>
          <tr>
            <td>
              <code>swash(ident)</code>
            </td>
            <td>Використовує розчерк.</td>
          </tr>
          <tr>
            <td>
              <code>ornaments(ident)</code>
            </td>
            <td>Використовує орнаменти.</td>
          </tr>
          <tr>
            <td>
              <code>annotation(ident)</code>
            </td>
            <td>Використовує анотації.</td>
          </tr>
          <tr>
            <td>
              <code>historical-forms</code>
            </td>
            <td>Використовує історичні форми.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-caps",
    description: "Альтернативні гліфи для маленьких літер.",
    code: "font-variant-caps: normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | all-unicase | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний вигляд. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>small-caps</code>
            </td>
            <td>Відображає малі літери як зменшені великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-small-caps</code>
            </td>
            <td>Відображає як великі, так і малі літери як зменшені великі.</td>
          </tr>
          <tr>
            <td>
              <code>petite-caps</code>
            </td>
            <td>Відображає малі літери як менші великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-petite-caps</code>
            </td>
            <td>Відображає як великі, так і малі літери як менші великі.</td>
          </tr>
          <tr>
            <td>
              <code>unicase</code>
            </td>
            <td>Відображає всі літери як великі.</td>
          </tr>
          <tr>
            <td>
              <code>all-unicase</code>
            </td>
            <td>Те саме, що й `unicase`.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-east-asian",
    description: "Заміщення гліфів у східноазіатських текстах.",
    code: "font-variant-east-asian: normal | [ ruby || jis78 || jis83 || jis90 || jis04 || simplified || traditional || full-width || proportional-width || half-width ] | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний вигляд. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>ruby</code>
            </td>
            <td>Відображає символи рубі (фурігана).</td>
          </tr>
          <tr>
            <td>
              <code>jis78</code>
            </td>
            <td>Використовує гліфи стандарту JIS X 0208-1978.</td>
          </tr>
          <tr>
            <td>
              <code>jis83</code>
            </td>
            <td>Використовує гліфи стандарту JIS X 0208-1983.</td>
          </tr>
          <tr>
            <td>
              <code>jis90</code>
            </td>
            <td>Використовує гліфи стандарту JIS X 0208-1990.</td>
          </tr>
          <tr>
            <td>
              <code>jis04</code>
            </td>
            <td>Використовує гліфи стандарту JIS X 0213-2004.</td>
          </tr>
          <tr>
            <td>
              <code>simplified</code>
            </td>
            <td>Використовує спрощені китайські гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>traditional</code>
            </td>
            <td>Використовує традиційні китайські гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>full-width</code>
            </td>
            <td>Використовує повноширинні гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>proportional-width</code>
            </td>
            <td>Використовує пропорційні за шириною гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>half-width</code>
            </td>
            <td>Використовує напівширинні гліфи.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-ligatures",
    description: "Керування лігатурами у шрифті.",
    code: "font-variant-ligatures: normal | none | [ common-ligatures ]? [ discretionary-ligatures ]? [ historical-ligatures ]? [ contextual ]? | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Лігатури за замовчуванням. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Лігатури не використовуються.</td>
          </tr>
          <tr>
            <td>
              <code>common-ligatures</code>
            </td>
            <td>Використовує поширені лігатури (fi, fl тощо).</td>
          </tr>
          <tr>
            <td>
              <code>no-common-ligatures</code>
            </td>
            <td>Не використовує поширені лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>discretionary-ligatures</code>
            </td>
            <td>Використовує необов'язкові лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>no-discretionary-ligatures</code>
            </td>
            <td>Не використовує необов'язкові лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>historical-ligatures</code>
            </td>
            <td>Використовує історичні лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>no-historical-ligatures</code>
            </td>
            <td>Не використовує історичні лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>contextual</code>
            </td>
            <td>Використовує контекстні лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>no-contextual</code>
            </td>
            <td>Не використовує контекстні лігатури.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-numeric",
    description: "Стиль відображення чисел на сторінці.",
    code: "font-variant-numeric: normal | [ lining-nums ]? [ oldstyle-nums ]? [ proportional-nums ]? [ tabular-nums ]? [ diagonal-fractions ]? [ stacked-fractions ]? [ ordinal ]? [ slashed-zero ]? | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайний вигляд. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>lining-nums</code>
            </td>
            <td>Числа однакової висоти (як великі літери).</td>
          </tr>
          <tr>
            <td>
              <code>oldstyle-nums</code>
            </td>
            <td>
              Числа різної висоти (з виносними та підрядковими елементами).
            </td>
          </tr>
          <tr>
            <td>
              <code>proportional-nums</code>
            </td>
            <td>Числа різної ширини.</td>
          </tr>
          <tr>
            <td>
              <code>tabular-nums</code>
            </td>
            <td>Числа однакової ширини (для таблиць).</td>
          </tr>
          <tr>
            <td>
              <code>diagonal-fractions</code>
            </td>
            <td>Дроби з діагональною рискою.</td>
          </tr>
          <tr>
            <td>
              <code>stacked-fractions</code>
            </td>
            <td>Дроби з горизонтальною рискою.</td>
          </tr>
          <tr>
            <td>
              <code>ordinal</code>
            </td>
            <td>Порядкові числа (1st, 2nd тощо).</td>
          </tr>
          <tr>
            <td>
              <code>slashed-zero</code>
            </td>
            <td>Перекреслений нуль.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-variant-position",
    description: "Введення індексів гліфів.",
    code: "font-variant-position: normal | sub | super | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайне положення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>sub</code>
            </td>
            <td>Підрядковий індекс.</td>
          </tr>
          <tr>
            <td>
              <code>super</code>
            </td>
            <td>Надрядковий індекс.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "font-weight",
    description: "Товщину шрифту.",
    code: "font-weight: normal | bold | bolder | lighter | number | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Звичайна товщина (400). Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>bold</code>
            </td>
            <td>Жирний (700).</td>
          </tr>
          <tr>
            <td>
              <code>bolder</code>
            </td>
            <td>Товстіший за батьківський елемент.</td>
          </tr>
          <tr>
            <td>
              <code>lighter</code>
            </td>
            <td>Тонший за батьківський елемент.</td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Числове значення від 100 до 900 (крок 100).</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid",
    description: "Універсальна властивість для налаштування сітки.",
    code: "grid: none | <grid-template-rows> / <grid-template-columns> | [ <grid-auto-rows> [ / <grid-auto-columns> ]? ] [ auto-flow && dense? ]? <grid-auto-rows>? [ / <grid-auto-columns> ]? | [ auto-flow && dense? ]? <grid-template-rows> / <grid-template-columns> | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Елемент не є сітковим контейнером. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>grid-template-rows / grid-template-columns</code>
            </td>
            <td>
              Визначає рядки та стовпці сітки за допомогою `grid-template-rows`
              та `grid-template-columns`.
            </td>
          </tr>
          <tr>
            <td>
              <code>
                {" "}
                grid-auto-rows / grid-auto-columns ? auto-flow && dense?{" "}
              </code>
            </td>
            <td>
              Визначає розміри автоматично створених рядків та стовпців, а також
              алгоритм автоматичного розміщення.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-area",
    description: "Розташування, а також ім'я елементів сітки.",
    code: "grid-area: <row-start> [ / <column-start> [ / <row-end> [ / <column-end> ] ] ] | <name> | initial | inherit;",
    preview: (
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
              <code>row-start</code>
            </td>
            <td>
              Початкова лінія рядка елемента. Може бути номером лінії, ім'ям або
              `auto`.
            </td>
          </tr>
          <tr>
            <td>
              <code>column-start</code>
            </td>
            <td>
              Початкова лінія стовпця елемента. Може бути номером лінії, ім'ям
              або `auto`.
            </td>
          </tr>
          <tr>
            <td>
              <code>row-end</code>
            </td>
            <td>
              Кінцева лінія рядка елемента. Може бути номером лінії, ім'ям або
              `auto`.
            </td>
          </tr>
          <tr>
            <td>
              <code>column-end</code>
            </td>
            <td>
              Кінцева лінія стовпця елемента. Може бути номером лінії, ім'ям або
              `auto`.
            </td>
          </tr>
          <tr>
            <td>
              <code>name</code>
            </td>
            <td>Ім'я області сітки, визначене в `grid-template-areas`.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-auto-columns",
    description: "Визначає розмір неявно створених стовпчиків сітки.",
    code: "grid-auto-columns: track-size ... | minmax(min-size , max-size) ... | auto ... | initial | inherit;",
    preview: (
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
              <code>track-size</code>
            </td>
            <td>Визначає розмір стовпчика (довжина, відсоток, `fr`).</td>
          </tr>
          <tr>
            <td>
              <code>minmax(min-size, max-size)</code>
            </td>
            <td>Визначає мінімальний та максимальний розмір стовпчика.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Розмір стовпчика визначається вмістом. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-auto-flow",
    description: "Визначає, як працює алгоритм автоматичного розміщення.",
    code: "grid-auto-flow: row | column | row dense | column dense | initial | inherit;",
    preview: (
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
              <code>row</code>
            </td>
            <td>Елементи розміщуються в рядках. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>column</code>
            </td>
            <td>Елементи розміщуються в стовпцях.</td>
          </tr>
          <tr>
            <td>
              <code>dense</code>
            </td>
            <td>
              Алгоритм намагається заповнити раніше залишені порожні місця.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`row`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-auto-rows",
    description: "Визначає розмір неявно створених рядків сітки.",
    code: "grid-auto-rows: track-size ... | minmax(min-size , max-size) ... | auto ... | initial | inherit;",
    preview: (
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
              <code>track-size</code>
            </td>
            <td>Визначає розмір рядка (довжина, відсоток, `fr`).</td>
          </tr>
          <tr>
            <td>
              <code>minmax(min-size, max-size)</code>
            </td>
            <td>Визначає мінімальний та максимальний розмір рядка.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Розмір рядка визначається вмістом. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-column",
    description: "Вказує розмір і розташування елементу в рядку сітки.",
    code: "grid-column: <grid-line> [ / <grid-line> ]? | <grid-track-list> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії стовпця.</td>
          </tr>
          <tr>
            <td>
              <code>grid-track-list</code>
            </td>
            <td>Список розмірів стовпців.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-column-end",
    description: "Визначає кінцевий стовпчик розташування елементу​ у сітці.",
    code: "grid-column-end: <grid-line> | span <number> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії стовпця.</td>
          </tr>
          <tr>
            <td>
              <code>span number</code>
            </td>
            <td>Кількість стовпців, які займає елемент.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-column-gap",
    description: "Встановлює відступи між стовпчиками сітки.",
    code: "grid-column-gap: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Розмір відступу в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Розмір відступу у відсотках від ширини сіткового контейнера.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-column-start",
    description: "Визначає початковий стовпчик розташування елементу​ у сітці.",
    code: "grid-column-start: <grid-line> | span <number> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії стовпця.</td>
          </tr>
          <tr>
            <td>
              <code>span number</code>
            </td>
            <td>Кількість стовпців, які займає елемент.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-gap",
    description: "Вказує розмір жолобів між рядками та стовпцями сітки.",
    code: "grid-gap: <grid-row-gap> <grid-column-gap>? | initial | inherit;",
    preview: (
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
              <code>grid-row-gap</code>
            </td>
            <td>Розмір відступів між рядками.</td>
          </tr>
          <tr>
            <td>
              <code>grid-column-gap</code>
            </td>
            <td>
              Розмір відступів між стовпцями (якщо не вказано, використовується
              значення `grid-row-gap`).
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-row",
    description: "Вказує розмір і розташування елементу в рядку сітки.",
    code: "grid-row: <grid-line> [ / <grid-line> ]? | <grid-track-list> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії рядка.</td>
          </tr>
          <tr>
            <td>
              <code>grid-track-list</code>
            </td>
            <td>Список розмірів рядків.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-row-end",
    description: "Визначає кінцевий рядок розташування елементу​ у сітці.",
    code: "grid-row-end: <grid-line> | span <number> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії рядка.</td>
          </tr>
          <tr>
            <td>
              <code>span number</code>
            </td>
            <td>Кількість рядків, які займає елемент.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-row-gap",
    description: "Встановлює відступи між рядками сітки.",
    code: "grid-row-gap: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Розмір відступу в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Розмір відступу у відсотках від висоти сіткового контейнера.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-row-start",
    description: "Визначає початковий рядок розташування елементу​ у сітці.",
    code: "grid-row-start: <grid-line> | span <number> | auto | initial | inherit;",
    preview: (
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
              <code>grid-line</code>
            </td>
            <td>Номер або ім'я лінії рядка.</td>
          </tr>
          <tr>
            <td>
              <code>span number</code>
            </td>
            <td>Кількість рядків, які займає елемент.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне розміщення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-template",
    description:
      "Скорочений запис визначення стовпців, рядків та областей сітки.",
    code: "grid-template: none | [ <grid-template-rows> / <grid-template-columns> ] | [ auto-flow && dense? ]? <grid-template-rows>? [ / <grid-template-columns> ]? | [ auto-flow && dense? ]? <grid-track-size>+ [ / <grid-track-size>+ ]? | <grid-template-areas>",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає явно визначених рядків або стовпців.</td>
          </tr>
          <tr>
            <td>
              <code>grid-template-rows / grid-template-columns</code>
            </td>
            <td>Визначає рядки та стовпці сітки.</td>
          </tr>
          <tr>
            <td>
              <code>auto-flow</code>
            </td>
            <td>Визначає алгоритм автоматичного розміщення.</td>
          </tr>
          <tr>
            <td>
              <code>dense</code>
            </td>
            <td>
              Намагається заповнити порожні місця при автоматичному розміщенні.
            </td>
          </tr>
          <tr>
            <td>
              <code>grid-template-areas</code>
            </td>
            <td>Визначає сіткові області за допомогою іменованих областей.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-template-areas",
    description: "Визначення назв сіткових областей.",
    code: "grid-template-areas: none | <string>+ | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає визначених іменованих областей сітки. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>string+</code>
            </td>
            <td>
              Рядки, що визначають іменовані області сітки. Кожна комірка в
              рядку представляє область. Крапки (`.`) позначають порожні
              комірки.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-template-columns",
    description: "Визначає розміри стовпчиків.",
    code: "grid-template-columns: none | <track-size>+ | auto+ | fit-content(<length-percentage>) | repeat( [ <positive-integer> | auto-fill | auto-fit ] , <track-list> ) | minmax( <length-percentage> , <length-percentage> )+ | min-content | max-content | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>
              Немає явно визначених стовпців. Стовпці генеруються автоматично.
              Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>track-size+</code>
            </td>
            <td>Список розмірів стовпців (довжина, відсоток, `fr`).</td>
          </tr>
          <tr>
            <td>
              <code>auto+</code>
            </td>
            <td>Розмір стовпчика визначається вмістом.</td>
          </tr>
          <tr>
            <td>
              <code>fit-content(length-percentage)</code>
            </td>
            <td>
              Розмір стовпчика обмежується вмістом, але не перевищує задану
              довжину або відсоток.
            </td>
          </tr>
          <tr>
            <td>
              <code>repeat()</code>
            </td>
            <td>Повторює визначений шаблон стовпців.</td>
          </tr>
          <tr>
            <td>
              <code>minmax()</code>
            </td>
            <td>Визначає мінімальний та максимальний розмір стовпчика.</td>
          </tr>
          <tr>
            <td>
              <code>min-content</code>
            </td>
            <td>
              Розмір стовпчика визначається найменшим необхідним розміром
              вмісту.
            </td>
          </tr>
          <tr>
            <td>
              <code>max-content</code>
            </td>
            <td>
              Розмір стовпчика визначається найбільшим необхідним розміром
              вмісту.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "grid-template-rows",
    description: "Визначає розміри рядків.",
    code: "grid-template-rows: none | <track-size>+ | auto+ | fit-content(<length-percentage>) | repeat( [ <positive-integer> | auto-fill | auto-fit ] , <track-list> ) | minmax( <length-percentage> , <length-percentage> )+ | min-content | max-content | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>
              Немає явно визначених рядків. Рядки генеруються автоматично. Без
              задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>track-size+</code>
            </td>
            <td>Список розмірів рядків (довжина, відсоток, `fr`).</td>
          </tr>
          <tr>
            <td>
              <code>auto+</code>
            </td>
            <td>Розмір рядка визначається вмістом.</td>
          </tr>
          <tr>
            <td>
              <code>fit-content(length-percentage)</code>
            </td>
            <td>
              Розмір рядка обмежується вмістом, але не перевищує задану довжину
              або відсоток.
            </td>
          </tr>
          <tr>
            <td>
              <code>repeat()</code>
            </td>
            <td>Повторює визначений шаблон рядків.</td>
          </tr>
          <tr>
            <td>
              <code>minmax()</code>
            </td>
            <td>Визначає мінімальний та максимальний розмір рядка.</td>
          </tr>
          <tr>
            <td>
              <code>min-content</code>
            </td>
            <td>
              Розмір рядка визначається найменшим необхідним розміром вмісту.
            </td>
          </tr>
          <tr>
            <td>
              <code>max-content</code>
            </td>
            <td>
              Розмір рядка визначається найбільшим необхідним розміром вмісту.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "hanging-punctuation",
    description: "Чи можуть розділові знаки розміщуватися за межами рядки.",
    code: "hanging-punctuation: none | first | last | allow-end | force-end | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Розділові знаки не виступають за межі рядка. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>first</code>
            </td>
            <td>Висяча пунктуація для першого символу рядка.</td>
          </tr>
          <tr>
            <td>
              <code>last</code>
            </td>
            <td>Висяча пунктуація для останнього символу рядка.</td>
          </tr>
          <tr>
            <td>
              <code>allow-end</code>
            </td>
            <td>Дозволяє висячу пунктуацію наприкінці рядка.</td>
          </tr>
          <tr>
            <td>
              <code>force-end</code>
            </td>
            <td>Завжди застосовує висячу пунктуацію наприкінці рядка.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "height",
    description: "Встановлює висоту елемента.",
    code: "height: auto | length | percentage | min-content | max-content | fit-content(<length-percentage>) | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Висота визначається вмістом. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає висоту в пікселях (px), сантиметрах (cm) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає висоту у відсотках від висоти батьківського елемента.</td>
          </tr>
          <tr>
            <td>
              <code>min-content</code>
            </td>
            <td>Висота визначається мінімально необхідною висотою вмісту.</td>
          </tr>
          <tr>
            <td>
              <code>max-content</code>
            </td>
            <td>Висота визначається максимально можливою висотою вмісту.</td>
          </tr>
          <tr>
            <td>
              <code>fit-content(length-percentage)</code>
            </td>
            <td>
              Висота обмежується вмістом, але не перевищує задану довжину або
              відсоток.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "hyphens",
    description:
      "Повідомляє браузеру, як розставляти переноси слів в блоці тексту.",
    code: "hyphens: none | manual | auto | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Переноси не використовуються. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>manual</code>
            </td>
            <td>
              Переноси використовуються лише там, де в тексті є символ м'якого
              переносу (`&shy;`).
            </td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Браузер автоматично розставляє переноси, де це необхідно.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "ime-mode",
    description:
      "Контролює стан редактора методів вводу (IME) для текстових полів.",
    code: "ime-mode: auto | normal | active | inactive | disabled | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає режим IME. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Режим IME за замовчуванням.</td>
          </tr>
          <tr>
            <td>
              <code>active</code>
            </td>
            <td>Активовує IME при фокусі на елементі.</td>
          </tr>
          <tr>
            <td>
              <code>inactive</code>
            </td>
            <td>Деактивує IME при фокусі на елементі.</td>
          </tr>
          <tr>
            <td>
              <code>disabled</code>
            </td>
            <td>Забороняє використання IME.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "justify-content",
    description: "Вирівнює елементи гнучкого контейнера по горизонталі.",
    code: "justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right | initial | inherit;",
    preview: (
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
              <code>flex-start</code>
            </td>
            <td>Елементи вирівнюються по початку контейнера. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>flex-end</code>
            </td>
            <td>Елементи вирівнюються по кінцю контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Елементи вирівнюються по центру контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>space-between</code>
            </td>
            <td>
              Елементи рівномірно розподіляються по контейнеру, перший елемент
              притискається до початку, останній - до кінця.
            </td>
          </tr>
          <tr>
            <td>
              <code>space-around</code>
            </td>
            <td>
              Елементи рівномірно розподіляються по контейнеру, навколо кожного
              елемента однаковий простір.
            </td>
          </tr>
          <tr>
            <td>
              <code>space-evenly</code>
            </td>
            <td>
              Елементи рівномірно розподіляються по контейнеру, включаючи
              простір до першого та після останнього елемента.
            </td>
          </tr>
          <tr>
            <td>
              <code>start</code>
            </td>
            <td>
              Елементи вирівнюються по початку контейнера (залежить від напрямку
              письма).
            </td>
          </tr>
          <tr>
            <td>
              <code>end</code>
            </td>
            <td>
              Елементи вирівнюються по кінцю контейнера (залежить від напрямку
              письма).
            </td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Елементи вирівнюються по лівому краю контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Елементи вирівнюються по правому краю контейнера.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (`flex-start`).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "@keyframes",
    description: "Встановлює ключові кадри при анімації елемента.",
    code: "@keyframes animationname {\n  0%   { /* CSS-властивості */ }\n  25%  { /* CSS-властивості */ }\n  50%  { /* CSS-властивості */ }\n  75%  { /* CSS-властивості */ }\n  100% { /* CSS-властивості */ }\n}",
    preview: (
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
              <code>animationname</code>
            </td>
            <td>Назва анімації.</td>
          </tr>
          <tr>
            <td>
              <code>0% - 100%</code>
            </td>
            <td>
              Ключові кадри, що визначають стан елемента на різних етапах
              анімації. Можна використовувати проміжні значення у відсотках.
            </td>
          </tr>
          <tr>
            <td>
              <code>/* CSS-властивості */</code>
            </td>
            <td>CSS-властивості, які змінюються протягом анімації.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "left",
    description: "Відступ від лівого краю батьківського елемента.",
    code: "left: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює значення. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відстань у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відстань у відсотках від ширини батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "letter-spacing",
    description: "Визначає інтервал між символами в межах елемента.",
    code: "letter-spacing: normal | length | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Інтервал за замовчуванням. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає інтервал у пікселях (px), емах (em) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "line-break",
    description: "Визначення способу або можливості переривання рядків.",
    code: "line-break: auto | loose | normal | strict | anywhere | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер визначає правила розриву рядків. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>loose</code>
            </td>
            <td>Найменш строгі правила розриву рядків.</td>
          </tr>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Звичайні правила розриву рядків.</td>
          </tr>
          <tr>
            <td>
              <code>strict</code>
            </td>
            <td>Найбільш строгі правила розриву рядків.</td>
          </tr>
          <tr>
            <td>
              <code>anywhere</code>
            </td>
            <td>Рядок може бути розірваний у будь-якій точці.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "line-height",
    description: "Визначає мінімальну висоту рядка тексту.",
    code: "line-height: normal | number | length | percentage | initial | inherit;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>
              Висота рядка за замовчуванням (залежить від шрифту). Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>Множник висоти шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Задає висоту в пікселях (px), емах (em) тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Задає висоту у відсотках від розміру шрифту.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`normal`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "list-style",
    description: "Задає основні властивості списку.",
    code: "list-style: list-style-type || list-style-position || list-style-image | initial | inherit;",
    preview: (
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
              <code>list-style-type</code>
            </td>
            <td>Тип мітки списку.</td>
          </tr>
          <tr>
            <td>
              <code>list-style-position</code>
            </td>
            <td>Розміщення мітки списку відносно тексту.</td>
          </tr>
          <tr>
            <td>
              <code>list-style-image</code>
            </td>
            <td>Зображення замість мітки списку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "list-style-image",
    description: "Встановлює зображення замість мітки списку.",
    code: "list-style-image: none | url() | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>
              Немає зображення. Використовується `list-style-type`. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>url()</code>
            </td>
            <td>Шлях до зображення.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "list-style-position",
    description: "Розміщення мітки списку відносно тексту.",
    code: "list-style-position: inside | outside | initial | inherit;",
    preview: (
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
              <code>outside</code>
            </td>
            <td>
              Мітка розміщується за межами блоку вмісту елемента. Без задання.
            </td>
          </tr>
          <tr>
            <td>
              <code>inside</code>
            </td>
            <td>Мітка розміщується всередині блоку вмісту елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`outside`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "list-style-type",
    description: "Тип мітки списку.",
    code: "list-style-type: none | disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-alpha | upper-alpha | ... | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає мітки.</td>
          </tr>
          <tr>
            <td>
              <code>disc</code>
            </td>
            <td>Заповнене коло. Без задання для невпорядкованих списків.</td>
          </tr>
          <tr>
            <td>
              <code>circle</code>
            </td>
            <td>Порожнє коло.</td>
          </tr>
          <tr>
            <td>
              <code>square</code>
            </td>
            <td>Заповнений квадрат.</td>
          </tr>
          <tr>
            <td>
              <code>decimal</code>
            </td>
            <td>
              Арабські цифри (1, 2, 3...). Без задання для впорядкованих
              списків.
            </td>
          </tr>
          <tr>
            <td>
              <code>decimal-leading-zero</code>
            </td>
            <td>Арабські цифри з нулем на початку (01, 02, 03...).</td>
          </tr>
          <tr>
            <td>
              <code>lower-roman</code>
            </td>
            <td>Малі римські цифри (i, ii, iii...).</td>
          </tr>
          <tr>
            <td>
              <code>upper-roman</code>
            </td>
            <td>Великі римські цифри (I, II, III...).</td>
          </tr>
          <tr>
            <td>
              <code>lower-alpha</code>
            </td>
            <td>Малі літери (a, b, c...).</td>
          </tr>
          <tr>
            <td>
              <code>upper-alpha</code>
            </td>
            <td>Великі літери (A, B, C...).</td>
          </tr>
          {/* Додати інші можливі значення */}
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>
              Встановлює властивість у значення без задання (залежить від типу
              списку).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "margin",
    description: "Зовнішній відступ.",
    code: "margin: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Браузер обчислює відступ. Горизонтальні відступи центрують елемент
              у батьківському блоці.
            </td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відступ у пікселях (px), сантиметрах (cm) тощо. Можна
              вказати до чотирьох значень (для верхнього, правого, нижнього та
              лівого відступів).
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відступ у відсотках від ширини батьківського блоку. Можна
              вказати до чотирьох значень.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "margin-bottom",
    description: "Зовнішній відспуп знизу.",
    code: "margin-bottom: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює відступ.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відступ у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відступ у відсотках від ширини батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "margin-left",
    description: "Зовнішній відспуп ліворуч.",
    code: "margin-left: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює відступ. Може центрувати блокові елементи.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відступ у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відступ у відсотках від ширини батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "margin-right",
    description: "Зовнішній відступ праворуч.",
    code: "margin-right: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює відступ. Може центрувати блокові елементи.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відступ у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відступ у відсотках від ширини батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "margin-top",
    description: "Зовнішній відступ зверху.",
    code: "margin-top: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер обчислює відступ.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає відступ у пікселях (px), сантиметрах (cm) тощо. Може бути
              від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає відступ у відсотках від висоти батьківського блоку. Може
              бути від'ємним.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`0`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "marks",
    description: "Відображає спеціальні мітки на сторінці при друку документа.",
    code: "marks: none | crop || cross | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Мітки не відображаються. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>crop</code>
            </td>
            <td>Відображає мітки обрізання.</td>
          </tr>
          <tr>
            <td>
              <code>cross</code>
            </td>
            <td>Відображає перехресні мітки.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "max-height",
    description: "Максимально допустима висота елемента.",
    code: "max-height: none | length | percentage | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає максимальної висоти. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає максимальну висоту в пікселях (px), сантиметрах (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає максимальну висоту у відсотках від висоти батьківського
              блоку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "max-width",
    description: "Максимально допустима ширина елемента.",
    code: "max-width: none | length | percentage | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Немає максимальної ширини. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає максимальну ширину в пікселях (px), сантиметрах (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає максимальну ширину у відсотках від ширини батьківського
              блоку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`none`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "min-height",
    description: "Мінімально допустима висота елемента.",
    code: "min-height: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Мінімальна висота визначається вмістом. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає мінімальну висоту в пікселях (px), сантиметрах (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає мінімальну висоту у відсотках від висоти батьківського
              блоку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "min-width",
    description: "Встановлює мінімальну ширину елемента.",
    code: "min-width: auto | length | percentage | initial | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Мінімальна ширина визначається вмістом. Без задання.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>
              Задає мінімальну ширину в пікселях (px), сантиметрах (cm) тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>
              Задає мінімальну ширину у відсотках від ширини батьківського
              блоку.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює властивість у значення без задання (`auto`).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>
              Вказує на спадковість властивості від свого батьківського
              елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "nav-down",
    description:
      "Вказує, де для навігації використовується клавіша зі стрілкою вниз.",
    code: "nav-down: auto | <id> | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер автоматично визначає ціль навігації.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;id&gt;</code>
            </td>
            <td>
              ID елемента, на який перейде фокус при натисканні стрілки вниз.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "nav-index",
    description: "Визначає порядок табуляції для елемента.",
    code: "nav-index: auto | <number> | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>
              Стандартний порядок табуляції (залежить від розміщення в DOM).
            </td>
          </tr>
          <tr>
            <td>
              <code>&lt;number&gt;</code>
            </td>
            <td>
              Числове значення, що визначає позицію в послідовності табуляції
              (напр. <code>1</code>, <code>2</code>).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "nav-left",
    description:
      "Вказує, де для навігації використовується клавіша зі стрілкою вліво.",
    code: "nav-left: auto | <id> | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер автоматично визначає ціль навігації.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;id&gt;</code>
            </td>
            <td>
              ID елемента, на який перейде фокус при натисканні стрілки вліво.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "nav-right",
    description:
      "Вказує, де для навігації використовується клавіша зі стрілкою вправо.",
    code: "nav-right: auto | <id> | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер автоматично визначає ціль навігації.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;id&gt;</code>
            </td>
            <td>
              ID елемента, на який перейде фокус при натисканні стрілки вправо.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "nav-up",
    description:
      "Вказує, де для навігації використовується клавіша зі стрілкою вгору.",
    code: "nav-up: auto | <id> | inherit;",
    preview: (
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
              <code>auto</code>
            </td>
            <td>Браузер автоматично визначає ціль навігації.</td>
          </tr>
          <tr>
            <td>
              <code>&lt;id&gt;</code>
            </td>
            <td>
              ID елемента, на який перейде фокус при натисканні стрілки вгору.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "object-fit",
    description:
      "Визначає, як зображення <img> або відео <video> має бути вписано у контейнер.",
    code: "object-fit: fill | contain | cover | none | scale-down | inherit;",
    preview: (
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
              <code>fill</code>
            </td>
            <td>
              Розтягує контент, заповнюючи весь контейнер (можлива деформація).
            </td>
          </tr>
          <tr>
            <td>
              <code>contain</code>
            </td>
            <td>Зберігає пропорції, повністю вміщаючи контент у контейнер.</td>
          </tr>
          <tr>
            <td>
              <code>cover</code>
            </td>
            <td>
              Заповнює контейнер із збереженням пропорцій (може обрізатись).
            </td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>
              Відображає контент у оригінальному розмірі (ігнорує розміри
              контейнера).
            </td>
          </tr>
          <tr>
            <td>
              <code>scale-down</code>
            </td>
            <td>
              Вибирає між <code>none</code> і <code>contain</code> (залежно від
              розмірів).
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "object-position",
    description:
      "Визначає позицію зображення <img> або відео <video> всередині контейнера (по осях X/Y).",
    code: "object-position: <position> | inherit;",
    preview: (
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
              <code>&lt;position&gt;</code>
            </td>
            <td>
              Координати у форматі <code>50% 50%</code> (за замовчуванням),{" "}
              <code>left top</code>, <code>20px 30px</code> тощо.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "opacity",
    description: "Задає прозорість HTML-елемента (від 0 до 1).",
    code: "opacity: <number> | inherit;",
    preview: (
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
              <code>&lt;number&gt;</code>
            </td>
            <td>
              Значення від <code>0</code> (повністю прозорий) до <code>1</code>{" "}
              (непрозорий). Наприклад: <code>0.5</code> — напівпрозорий.
            </td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "order",
    description: "Сортування гнучких елементів.",
    code: "order: <integer> | initial | inherit;",
    preview: (
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
              <code>&lt;integer&gt;</code>
            </td>
            <td>Число, що визначає порядок сортування у flex-контейнері.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює початкове значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "orphans",
    description:
      "Мінімальна кількість рядків у контейнері, які потрібно залишити у фрагменті перед перервою фрагментації.",
    code: "orphans: <integer> | initial | inherit;",
    preview: (
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
              <code>&lt;integer&gt;</code>
            </td>
            <td>
              Кількість рядків, яку не можна залишати в кінці сторінки або
              колонки.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Повертає до початкового значення (2).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "outline",
    description: "Зовнішній контур навколо елементу.",
    code: "outline: outline-color || outline-style || outline-width;",
    preview: (
      <table>
        <thead>
          <tr className="bg-gray-500">
            <th>Складник</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>outline-color</code>
            </td>
            <td>Колір обводки.</td>
          </tr>
          <tr>
            <td>
              <code>outline-style</code>
            </td>
            <td>Тип обводки (solid, dotted, dashed тощо).</td>
          </tr>
          <tr>
            <td>
              <code>outline-width</code>
            </td>
            <td>Товщина обводки.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "outline-color",
    description: "Колір контуру елемента.",
    code: "outline-color: color | invert | initial | inherit;",
    preview: (
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
              <code>color</code>
            </td>
            <td>Будь-який дійсний колір.</td>
          </tr>
          <tr>
            <td>
              <code>invert</code>
            </td>
            <td>Інвертує колір для кращого контрасту.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Повертає до початкового значення.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "outline-offset",
    description: "Відстань між контуром та краєм елемента.",
    code: "outline-offset: length | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Пікселі або інші одиниці для відступу.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Повертає до значення за замовчуванням (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "outline-style",
    description: "Стиль контуру елемента.",
    code: "outline-style: none | solid | dotted | dashed | double | groove | ridge | inset | outset | initial | inherit;",
    preview: (
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
              <code>none</code>
            </td>
            <td>Без обводки.</td>
          </tr>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктир.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штрихова лінія.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>groove</code>
            </td>
            <td>Вигнута лінія (3D ефект).</td>
          </tr>
          <tr>
            <td>
              <code>ridge</code>
            </td>
            <td>Випукла лінія (3D ефект).</td>
          </tr>
          <tr>
            <td>
              <code>inset</code>
            </td>
            <td>Внутрішній рельєф.</td>
          </tr>
          <tr>
            <td>
              <code>outset</code>
            </td>
            <td>Зовнішній рельєф.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Значення за замовчуванням.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується від батька.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "outline-width",
    description: "Товщину контуру елемента.",
    code: "outline-width: medium | thin | thick | length | initial | inherit;",
    preview: (
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
              <code>medium</code>
            </td>
            <td>Середня товщина (за замовчуванням).</td>
          </tr>
          <tr>
            <td>
              <code>thin</code>
            </td>
            <td>Тонка лінія.</td>
          </tr>
          <tr>
            <td>
              <code>thick</code>
            </td>
            <td>Товста лінія.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Товщина у пікселях або інших одиницях.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Початкове значення.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковане значення.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "overflow",
    description: "Поведінка переповненого елемента.",
    code: "overflow: visible | hidden | scroll | auto | clip;",
    preview: (
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
              <code>visible</code>
            </td>
            <td>Зміст не обрізається (за замовчуванням).</td>
          </tr>
          <tr>
            <td>
              <code>hidden</code>
            </td>
            <td>Обрізає все, що виходить за межі.</td>
          </tr>
          <tr>
            <td>
              <code>scroll</code>
            </td>
            <td>Додає скрол навіть якщо не потрібно.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Скрол з’являється лише за потреби.</td>
          </tr>
          <tr>
            <td>
              <code>clip</code>
            </td>
            <td>Обрізає вміст без прокрутки.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "overflow-wrap",
    description:
      "Вказує, переносити чи ні довгі слова, які не поміщаються по ширині в задану область.",
    code: "overflow-wrap: normal | break-word | anywhere;",
    preview: (
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
              <code>normal</code>
            </td>
            <td>Слова не переносяться, навіть якщо не вміщаються.</td>
          </tr>
          <tr>
            <td>
              <code>break-word</code>
            </td>
            <td>Довгі слова можуть бути розбиті та перенесені.</td>
          </tr>
          <tr>
            <td>
              <code>anywhere</code>
            </td>
            <td>
              Може переносити слова в будь-якому місці, навіть якщо це порушує
              логіку.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "overflow-x",
    description: "Поведінка елемента, переповненого по горизонталі.",
    code: "overflow-x: visible | hidden | scroll | auto | clip;",
    preview: (
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
              <code>visible</code>
            </td>
            <td>Зміст не обрізається, виходить за межі.</td>
          </tr>
          <tr>
            <td>
              <code>hidden</code>
            </td>
            <td>Зміст обрізається, без прокрутки.</td>
          </tr>
          <tr>
            <td>
              <code>scroll</code>
            </td>
            <td>Додається горизонтальна прокрутка незалежно від потреби.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Прокрутка з’являється лише за потреби.</td>
          </tr>
          <tr>
            <td>
              <code>clip</code>
            </td>
            <td>Обрізає вміст, без прокрутки (схоже на hidden).</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "overflow-y",
    description: "Поведінка елемента, переповненого по вертикалі.",
    code: "overflow-y: visible | hidden | scroll | auto | clip;",
    preview: (
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
              <code>visible</code>
            </td>
            <td>Зміст показується без обмежень.</td>
          </tr>
          <tr>
            <td>
              <code>hidden</code>
            </td>
            <td>Вертикальний зміст обрізається.</td>
          </tr>
          <tr>
            <td>
              <code>scroll</code>
            </td>
            <td>Вертикальна прокрутка з'являється завжди.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Прокрутка з’являється лише за потреби.</td>
          </tr>
          <tr>
            <td>
              <code>clip</code>
            </td>
            <td>Обрізає зміст без прокрутки.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "padding",
    description: "Внутрішні відступи навколо вмісту елемента з усіх сторін.",
    code: "padding: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Відступ у пікселях (px), rem тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відступ у відсотках від ширини батьківського елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидає до початкового значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "padding-bottom",
    description: "Внутрішній відступ знизу елемента.",
    code: "padding-bottom: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Фіксоване значення (наприклад, 20px).</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відсоток від ширини батьківського блоку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидання до початкового значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується від батька.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "padding-left",
    description: "Внутрішній відступ знизу елемента.",
    code: "padding-bottom: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Фіксоване значення (наприклад, 20px).</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відсоток від ширини батьківського блоку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидання до початкового значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується від батька.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "padding-right",
    description: "Внутрішній відступ знизу елемента.",
    code: "padding-bottom: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Фіксоване значення (наприклад, 20px).</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відсоток від ширини батьківського блоку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидання до початкового значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується від батька.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "padding-top",
    description: "Внутрішній відступ знизу елемента.",
    code: "padding-bottom: length | percentage | initial | inherit;",
    preview: (
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
              <code>length</code>
            </td>
            <td>Фіксоване значення (наприклад, 20px).</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відсоток від ширини батьківського блоку.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидання до початкового значення (0).</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується від батька.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "page-break-after",
    description:
      "Додає розрив сторінки при друку документа після заданого елемента.",
    code: "page-break-after: auto | always | avoid | left | right | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Браузер сам вирішує, чи додавати розрив.</td>
          </tr>
          <tr>
            <td>
              <code>always</code>
            </td>
            <td>Завжди додає розрив після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникає розриву після елемента.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Розрив і друк з нової лівої сторінки.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Розрив і друк з нової правої сторінки.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "page-break-before",
    description:
      "Додає розрив сторінки при друку документа перед заданим елементом.",
    code: "page-break-before: auto | always | avoid | left | right | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне вирішення браузером.</td>
          </tr>
          <tr>
            <td>
              <code>always</code>
            </td>
            <td>Розрив перед елементом завжди.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникнення розриву перед елементом.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Розрив та нова ліва сторінка.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Розрив та нова права сторінка.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадкування значення.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "page-break-inside",
    description:
      "Додає розрив сторінки при друку документа всередині заданого елемента.",
    code: "page-break-inside: auto | avoid | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Розрив дозволено.</td>
          </tr>
          <tr>
            <td>
              <code>avoid</code>
            </td>
            <td>Уникати розриву всередині елемента.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковується з батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "perspective",
    description: "Вказує як 3D-елементи будуть виглядати у перспективі.",
    code: "perspective: none | length;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Вимикає перспективу.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Відстань між користувачем і площиною Z (наприклад, 500px).</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "perspective-origin",
    description: "Визначає нижню позицію 3D-елементів (центр перспективи).",
    code: "perspective-origin: x-axis y-axis;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>50% 50%</code>
            </td>
            <td>Центр елемента (за замовчуванням).</td>
          </tr>
          <tr>
            <td>
              <code>left top</code>
            </td>
            <td>Лівий верхній кут як точка перспективи.</td>
          </tr>
          <tr>
            <td>
              <code>100% 0</code>
            </td>
            <td>Правий верхній кут.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "position",
    description: "Тип позиціонування елемента.",
    code: "position: static | relative | absolute | fixed | sticky;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Тип</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>static</code>
            </td>
            <td>За замовчуванням. Елемент слідує потоку документа.</td>
          </tr>
          <tr>
            <td>
              <code>relative</code>
            </td>
            <td>Відносне позиціонування від нормального місця.</td>
          </tr>
          <tr>
            <td>
              <code>absolute</code>
            </td>
            <td>
              Абсолютне позиціонування в межах найближчого відносного батька.
            </td>
          </tr>
          <tr>
            <td>
              <code>fixed</code>
            </td>
            <td>Позиція фіксується відносно вікна перегляду.</td>
          </tr>
          <tr>
            <td>
              <code>sticky</code>
            </td>
            <td>Комбінує relative та fixed — залипає при прокрутці.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "quotes",
    description: "Вказує тип лапок для цитат.",
    code: 'quotes: "«" "»" "‹" "›";',
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>"«" "»"</code>
            </td>
            <td>Перший рівень лапок — французькі.</td>
          </tr>
          <tr>
            <td>
              <code>"‹" "›"</code>
            </td>
            <td>Другий рівень лапок — внутрішні.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "resize",
    description: "Дозволяє змінювати розміри елемента.",
    code: "resize: none | both | horizontal | vertical;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Забороняє змінювати розмір.</td>
          </tr>
          <tr>
            <td>
              <code>both</code>
            </td>
            <td>Дозволяє змінювати по горизонталі та вертикалі.</td>
          </tr>
          <tr>
            <td>
              <code>horizontal</code>
            </td>
            <td>Тільки по горизонталі.</td>
          </tr>
          <tr>
            <td>
              <code>vertical</code>
            </td>
            <td>Тільки по вертикалі.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "right",
    description: "Відступ від правого краю батьківського елемента.",
    code: "right: auto | length | percentage | initial | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне позиціонування.</td>
          </tr>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Фіксоване значення, наприклад, 10px.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Відсоток від ширини батьківського елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидає до початкового значення.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує значення від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "table-layout",
    description: "Задає алгоритм формування макету таблиці.",
    code: "table-layout: auto | fixed | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Ширина колонок визначається вмістом.</td>
          </tr>
          <tr>
            <td>
              <code>fixed</code>
            </td>
            <td>Ширина колонок визначається першою строкою.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "tab-size",
    description: "Визначає довжину табуляції.",
    code: "tab-size: number | length;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>4</code>
            </td>
            <td>Кожна табуляція — 4 пробіли.</td>
          </tr>
          <tr>
            <td>
              <code>2em</code>
            </td>
            <td>Кожна табуляція — 2 ширини літери “m”.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-align",
    description: "Горизонтальне вирівнювання тексту.",
    code: "text-align: left | right | center | justify | start | end;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Вирівнює текст по лівому краю.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>По правому краю.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Центрує текст.</td>
          </tr>
          <tr>
            <td>
              <code>justify</code>
            </td>
            <td>Вирівнює по ширині.</td>
          </tr>
          <tr>
            <td>
              <code>start</code>
            </td>
            <td>Вирівнює за напрямком тексту (LTR або RTL).</td>
          </tr>
          <tr>
            <td>
              <code>end</code>
            </td>
            <td>З протилежного боку до `start`.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-align-last",
    description: "Вирівнювання останнього рядка тексту.",
    code: "text-align-last: auto | left | right | center | justify | start | end;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Залежить від `text-align`.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>По лівому краю.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>По правому краю.</td>
          </tr>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Центрування.</td>
          </tr>
          <tr>
            <td>
              <code>justify</code>
            </td>
            <td>По ширині.</td>
          </tr>
          <tr>
            <td>
              <code>start</code>
            </td>
            <td>За напрямком тексту.</td>
          </tr>
          <tr>
            <td>
              <code>end</code>
            </td>
            <td>Протилежне до `start`.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-combine-upright",
    description:
      "Вказує комбінацію декількох символів на простір одного (використовується в вертикальному тексті).",
    code: "text-combine-upright: none | all | digits <integer>;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Комбінація вимкнена.</td>
          </tr>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Комбінує всі символи в один блок.</td>
          </tr>
          <tr>
            <td>
              <code>digits 2</code>
            </td>
            <td>Комбінує до 2 цифр у вертикальну форму.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-decoration",
    description: "Оздоблення тексту (підкреслення, перекреслення тощо).",
    code: "text-decoration: none | underline | overline | line-through | blink;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Тип</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Без оздоблення.</td>
          </tr>
          <tr>
            <td>
              <code>underline</code>
            </td>
            <td>Підкреслений текст.</td>
          </tr>
          <tr>
            <td>
              <code>overline</code>
            </td>
            <td>Лінія над текстом.</td>
          </tr>
          <tr>
            <td>
              <code>line-through</code>
            </td>
            <td>Перекреслений текст.</td>
          </tr>
          <tr>
            <td>
              <code>blink</code>
            </td>
            <td>Мигання тексту (не підтримується в більшості браузерів).</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-decoration-color",
    description: "Колір оздоблення тексту (лінії).",
    code: "text-decoration-color: color | initial | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>red</code>
            </td>
            <td>Лінія буде червоною.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Успадковує колір від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-decoration-line",
    description: "Позиція декоративної лінії.",
    code: "text-decoration-line: none | underline | overline | line-through | blink;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Тип</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>underline</code>
            </td>
            <td>Підкреслення тексту.</td>
          </tr>
          <tr>
            <td>
              <code>overline</code>
            </td>
            <td>Надрядкова лінія.</td>
          </tr>
          <tr>
            <td>
              <code>line-through</code>
            </td>
            <td>Перекреслювання.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-decoration-style",
    description: "Стиль декоративної лінії.",
    code: "text-decoration-style: solid | double | dotted | dashed | wavy;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Стиль</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>solid</code>
            </td>
            <td>Суцільна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>double</code>
            </td>
            <td>Подвійна лінія.</td>
          </tr>
          <tr>
            <td>
              <code>dotted</code>
            </td>
            <td>Пунктир.</td>
          </tr>
          <tr>
            <td>
              <code>dashed</code>
            </td>
            <td>Штрихова лінія.</td>
          </tr>
          <tr>
            <td>
              <code>wavy</code>
            </td>
            <td>Хвиляста лінія.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-indent",
    description: "Відступ першого рядка тексту.",
    code: "text-indent: length | percentage | initial | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>20px</code>
            </td>
            <td>Відступ першого рядка на 20 пікселів.</td>
          </tr>
          <tr>
            <td>
              <code>10%</code>
            </td>
            <td>Відступ від ширини батьківського елемента.</td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Скидає до значення за замовчуванням.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-justify",
    description: "Спосіб вирівнювання тексту, що вирівняний по ширину.",
    code: "text-justify: auto | inter-word | inter-character;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне вирівнювання тексту по ширині.</td>
          </tr>
          <tr>
            <td>
              <code>inter-word</code>
            </td>
            <td>Розподіляє проміжки між словами.</td>
          </tr>
          <tr>
            <td>
              <code>inter-character</code>
            </td>
            <td>Розподіляє проміжки між символами.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-orientation",
    description: "Орієнтацію текстових символів у рядку.",
    code: "text-orientation: mixed | upright | sideways;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>mixed</code>
            </td>
            <td>
              Комбіноване використання вертикального і горизонтального тексту.
            </td>
          </tr>
          <tr>
            <td>
              <code>upright</code>
            </td>
            <td>Текст розміщується вертикально.</td>
          </tr>
          <tr>
            <td>
              <code>sideways</code>
            </td>
            <td>Текст розміщується у горизонтальному напрямку.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-overflow",
    description: "Обрізання тексту, що виходить за межі елемента.",
    code: "text-overflow: clip | ellipsis | string;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>clip</code>
            </td>
            <td>Обрізає текст, без додаткових символів.</td>
          </tr>
          <tr>
            <td>
              <code>ellipsis</code>
            </td>
            <td>Обрізає текст і додає три крапки в кінці.</td>
          </tr>
          <tr>
            <td>
              <code>string</code>
            </td>
            <td>Додає власне визначене значення для обрізаного тексту.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-shadow",
    description: "Додає тінь до тексту.",
    code: "text-shadow: none | horizontal-offset vertical-offset blur-radius color;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>2px 2px 5px #888</code>
            </td>
            <td>
              Тінь з відступом 2px по осі X та Y, з радіусом розмиття 5px і
              кольором #888.
            </td>
          </tr>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Без тіні.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-transform",
    description: "Зміна регістру букв у тексті.",
    code: "text-transform: none | capitalize | uppercase | lowercase | full-width;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Без змін.</td>
          </tr>
          <tr>
            <td>
              <code>capitalize</code>
            </td>
            <td>Перше слово в кожному рядку буде з великої літери.</td>
          </tr>
          <tr>
            <td>
              <code>uppercase</code>
            </td>
            <td>Всі літери перетворюються в верхній регістр.</td>
          </tr>
          <tr>
            <td>
              <code>lowercase</code>
            </td>
            <td>Всі літери перетворюються в нижній регістр.</td>
          </tr>
          <tr>
            <td>
              <code>full-width</code>
            </td>
            <td>Текст стає в повну ширину символів (японська орієнтація).</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "text-underline-position",
    description: "Позиціювання підкреслення.",
    code: "text-underline-position: auto | under | left | right;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Підкреслення встановлюється за замовчуванням.</td>
          </tr>
          <tr>
            <td>
              <code>under</code>
            </td>
            <td>Підкреслення розташоване під текстом.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Підкреслення на лівій стороні тексту.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Підкреслення на правій стороні тексту.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "top",
    description: "Відступ від верхнього краю.",
    code: "top: auto | length | percentage;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>20px</code>
            </td>
            <td>Відступ від верхнього краю на 20 пікселів.</td>
          </tr>
          <tr>
            <td>
              <code>50%</code>
            </td>
            <td>Відступ на 50% від висоти батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transform",
    description: "2D чи 3D трансформація елементу.",
    code: "transform: none | matrix() | translate() | rotate() | scale() | skew();",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Тип</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>matrix()</code>
            </td>
            <td>
              Використовує матрицю для трансформацій (переміщення,
              масштабування, обертання).
            </td>
          </tr>
          <tr>
            <td>
              <code>translate()</code>
            </td>
            <td>Переміщує елемент по осі X та Y.</td>
          </tr>
          <tr>
            <td>
              <code>rotate()</code>
            </td>
            <td>Обертання елемента на заданий кут.</td>
          </tr>
          <tr>
            <td>
              <code>scale()</code>
            </td>
            <td>Масштабування елемента (розтягування або стиснення).</td>
          </tr>
          <tr>
            <td>
              <code>skew()</code>
            </td>
            <td>Перекошує елемент по заданих осях.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transform-origin",
    description:
      "Координати точки, відносно якої буде відбуватися трансформація.",
    code: "transform-origin: x-axis y-axis z-axis;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>center</code>
            </td>
            <td>Точка трансформації розташована в центрі елемента.</td>
          </tr>
          <tr>
            <td>
              <code>top</code>
            </td>
            <td>Точка трансформації знаходиться на верхньому краю елемента.</td>
          </tr>
          <tr>
            <td>
              <code>bottom</code>
            </td>
            <td>Точка трансформації знаходиться на нижньому краю елемента.</td>
          </tr>
          <tr>
            <td>
              <code>left</code>
            </td>
            <td>Точка трансформації розташована з лівого боку елемента.</td>
          </tr>
          <tr>
            <td>
              <code>right</code>
            </td>
            <td>Точка трансформації розташована з правого боку елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transform-style",
    description: "Відображення вкладених елементів в 3D-просторі.",
    code: "transform-style: flat | preserve-3d;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>flat</code>
            </td>
            <td>Елементи не мають 3D трансформацій.</td>
          </tr>
          <tr>
            <td>
              <code>preserve-3d</code>
            </td>
            <td>
              Використовує 3D-простір для елементів, зберігаючи їх позиції.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transition",
    description: "Встановлює ефект переходу між двома станами елемента.",
    code: "transition: property duration timing-function delay;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>all 0.3s ease 0s</code>
            </td>
            <td>
              Перехід для всіх властивостей, тривалістю 0.3 секунди, із
              затримкою 0 секунд.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transition-delay",
    description: "Встановлює час очікування перед запуском ефекту переходу.",
    code: "transition-delay: time;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>0.5s</code>
            </td>
            <td>Затримка в 0.5 секунди перед запуском переходу.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transition-duration",
    description: "Тривалість ефекту переходу.",
    code: "transition-duration: time;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Приклад</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>2s</code>
            </td>
            <td>Тривалість переходу складає 2 секунди.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transition-property",
    description: "Встановлює ім'я стильової властивості.",
    code: "transition-property: all | property;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Застосовує перехід для всіх властивостей елемента.</td>
          </tr>
          <tr>
            <td>
              <code>property</code>
            </td>
            <td>
              Перехід для конкретної властивості, наприклад,{" "}
              <code>opacity</code> або <code>background-color</code>.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "transition-timing-function",
    description: "Прискорення ефекту трансформації.",
    code: "transition-timing-function: ease | linear | ease-in | ease-out | cubic-bezier() | steps();",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>ease</code>
            </td>
            <td>Стандартне прискорення (повільно на початку і в кінці).</td>
          </tr>
          <tr>
            <td>
              <code>linear</code>
            </td>
            <td>Рівномірне прискорення по всьому переходу.</td>
          </tr>
          <tr>
            <td>
              <code>ease-in</code>
            </td>
            <td>Прискорення починається повільно.</td>
          </tr>
          <tr>
            <td>
              <code>ease-out</code>
            </td>
            <td>Прискорення сповільнюється в кінці переходу.</td>
          </tr>
          <tr>
            <td>
              <code>cubic-bezier()</code>
            </td>
            <td>
              Можливість налаштувати власне прискорення за допомогою кривої
              Безьє.
            </td>
          </tr>
          <tr>
            <td>
              <code>steps()</code>
            </td>
            <td>Перехід, що здійснюється у кроках.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "unicode-bidi",
    description: "Напрямок відображення слів в тексті.",
    code: "unicode-bidi: normal | embed | isolate | bidi-override;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Стандартний напрямок відображення тексту.</td>
          </tr>
          <tr>
            <td>
              <code>embed</code>
            </td>
            <td>Вставка з іншими напрямками, визначеними в тексті.</td>
          </tr>
          <tr>
            <td>
              <code>isolate</code>
            </td>
            <td>Ізоляція напряму тексту без спадковості.</td>
          </tr>
          <tr>
            <td>
              <code>bidi-override</code>
            </td>
            <td>Перевизначення напрямку тексту.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "user-select",
    description: "Чи може користувач виділяти курсором текст на сторінці.",
    code: "user-select: none | text | all | contain | auto;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>none</code>
            </td>
            <td>Не можна виділяти текст.</td>
          </tr>
          <tr>
            <td>
              <code>text</code>
            </td>
            <td>Дозволяє виділяти текст.</td>
          </tr>
          <tr>
            <td>
              <code>all</code>
            </td>
            <td>Дозволяє виділяти весь текст на сторінці.</td>
          </tr>
          <tr>
            <td>
              <code>contain</code>
            </td>
            <td>
              Дозволяє виділяти текст лише в межах батьківського елемента.
            </td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>
              Встановлює автоматичне визначення можливості виділення тексту.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "vertical-align",
    description: "Вертикальне вирівнювання елемента.",
    code: "vertical-align: baseline | sub | super | top | text-top | middle | bottom | text-bottom;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>baseline</code>
            </td>
            <td>За замовчуванням вирівнювання по базовій лінії тексту.</td>
          </tr>
          <tr>
            <td>
              <code>sub</code>
            </td>
            <td>Текст вирівнюється по нижній субскриптній лінії.</td>
          </tr>
          <tr>
            <td>
              <code>super</code>
            </td>
            <td>Текст вирівнюється по верхній супскриптній лінії.</td>
          </tr>
          <tr>
            <td>
              <code>top</code>
            </td>
            <td>Вирівнювання по верхньому краю елемента.</td>
          </tr>
          <tr>
            <td>
              <code>text-top</code>
            </td>
            <td>Вирівнювання по верхньому краю шрифта.</td>
          </tr>
          <tr>
            <td>
              <code>middle</code>
            </td>
            <td>Вирівнювання по середній лінії елемента.</td>
          </tr>
          <tr>
            <td>
              <code>bottom</code>
            </td>
            <td>Вирівнювання по нижньому краю елемента.</td>
          </tr>
          <tr>
            <td>
              <code>text-bottom</code>
            </td>
            <td>Вирівнювання по нижньому краю шрифта.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "visibility",
    description: "Робить елемент невидимим.",
    code: "visibility: visible | hidden | collapse;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>visible</code>
            </td>
            <td>Елемент видимий.</td>
          </tr>
          <tr>
            <td>
              <code>hidden</code>
            </td>
            <td>Елемент прихований, але займає місце на сторінці.</td>
          </tr>
          <tr>
            <td>
              <code>collapse</code>
            </td>
            <td>Елемент прихований і не займає місце (тільки для таблиць).</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "white-space",
    description: "Встановлює, як відображати пропуски між словами.",
    code: "white-space: normal | nowrap | pre | pre-wrap | pre-line;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Пропуски між словами і переведення рядків за замовчуванням.</td>
          </tr>
          <tr>
            <td>
              <code>nowrap</code>
            </td>
            <td>
              Пропуски і переведення рядків не будуть враховуватись (усі
              елементи в один рядок).
            </td>
          </tr>
          <tr>
            <td>
              <code>pre</code>
            </td>
            <td>
              Пропуски і переведення рядків будуть відображатись, як в коді.
            </td>
          </tr>
          <tr>
            <td>
              <code>pre-wrap</code>
            </td>
            <td>
              Пропуски і переведення рядків відображаються, але якщо потрібно,
              текст буде перенесено на новий рядок.
            </td>
          </tr>
          <tr>
            <td>
              <code>pre-line</code>
            </td>
            <td>
              Пропуски і переведення рядків відображаються, але зайві пропуски
              будуть скорочені.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "widows",
    description:
      "Мінімальна кількість рядків тексту, який розміщується на наступній сторінці під час друку документа.",
    code: "widows: number;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>2</code>
            </td>
            <td>
              Мінімум два рядки повинні бути на наступній сторінці, коли текст
              не може вміститися на попередній.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "width",
    description: "Встановлює ширину елемента.",
    code: "width: length | percentage | auto | initial | inherit;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Визначає ширину у пікселях, ем, рем тощо.</td>
          </tr>
          <tr>
            <td>
              <code>percentage</code>
            </td>
            <td>Встановлює ширину у відсотках від батьківського елемента.</td>
          </tr>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>
              Ширина елемента визначається вмістом або іншими властивостями.
            </td>
          </tr>
          <tr>
            <td>
              <code>initial</code>
            </td>
            <td>Встановлює значення за замовчуванням для ширини елемента.</td>
          </tr>
          <tr>
            <td>
              <code>inherit</code>
            </td>
            <td>Ширина буде успадкована від батьківського елемента.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "word-break",
    description: "Тип перенесення слів.",
    code: "word-break: normal | break-all | keep-all;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Перенос слів за умовами стандартних правил.</td>
          </tr>
          <tr>
            <td>
              <code>break-all</code>
            </td>
            <td>
              Слово буде перенесене в будь-якому місці, якщо воно не вміщується.
            </td>
          </tr>
          <tr>
            <td>
              <code>keep-all</code>
            </td>
            <td>
              Слова не будуть переноситись. Якщо потрібно, текст буде виведений
              за межі елемента.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "word-spacing",
    description: "Встановлює інтервал між словами.",
    code: "word-spacing: length | normal;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>length</code>
            </td>
            <td>Визначає інтервал між словами в пікселях, ем, рем тощо.</td>
          </tr>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>Встановлює стандартний інтервал між словами.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "word-wrap",
    description: "Вказує, переносити чи ні довгі слова.",
    code: "word-wrap: normal | break-word;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>normal</code>
            </td>
            <td>
              Довгі слова не будуть переноситись, а елемент буде перевищувати
              межі.
            </td>
          </tr>
          <tr>
            <td>
              <code>break-word</code>
            </td>
            <td>
              Довгі слова будуть переноситись на наступний рядок, якщо не
              вміщуються.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "writing-mode",
    description:
      "Встановлює напрямок тексту на сторінці - по горизонталі або вертикалі.",
    code: "writing-mode: horizontal-tb | vertical-rl | vertical-lr;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>horizontal-tb</code>
            </td>
            <td>
              Текст відображається по горизонталі (зліва направо, зверху вниз).
            </td>
          </tr>
          <tr>
            <td>
              <code>vertical-rl</code>
            </td>
            <td>Текст відображається вертикально, з правого на ліво.</td>
          </tr>
          <tr>
            <td>
              <code>vertical-lr</code>
            </td>
            <td>Текст відображається вертикально, зліва направо.</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "z-index",
    description: "Встановлює порядок елементів на z-вісі.",
    code: "z-index: auto | number;",
    preview: (
      <table>
        <thead className="bg-gray-500">
          <tr>
            <th>Значення</th>
            <th>Опис</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>auto</code>
            </td>
            <td>Автоматичне визначення порядку елементів.</td>
          </tr>
          <tr>
            <td>
              <code>number</code>
            </td>
            <td>
              Встановлює порядок елемента на z-вісі. Більше значення означає
              передній план.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
];
