
import map from "../assets/map.png";
import MyCanvas from "../components/MyCanvas";
import video from "../assets/video.mp4";

export const htmlCheatsData = [
  {
    title: "ЩО ТАКЕ HTML",
    description: "Основи HTML",
    code: "HTML (HyperText Markup Language) — мова розмітки, яка використовується для створення структури веб-сторінок. Вона визначає заголовки, параграфи, посилання, зображення та інші елементи на сторінці. HTML не є мовою програмування — це мова структурування контенту.",
    preview: <div></div>,
  },
  {
    title: "HTML СТРУКТУРА",
    description: "Основна структура HTML-документа",
    code: `<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Назва документа</title>
  </head>
  <body>
    <header>
      <h1>Заголовок</h1>
    </header>
    <main>
      <section>
        <h2>Заголовок секції</h2>
        <p>Текст секції</p>
      </section>
    </main>
    <footer>
      <p>Футер</p>
    </footer>
  </body>
</html>`,
    preview: (
      <div>
        <h1 className="text-4xl font-bold">Заголовок</h1>
        <p className="text-xl">Текст секції</p>
        <p className="text-sm">Футер</p>
      </div>
    ),
  },
  {
    title: "<!--...-->",
    description: "Коментарі в HTML",
    code: "<!-- Це коментар у HTML -->",
    preview: (
      <div>
        <p className="text-sm text-gray-500">Це коментар у HTML</p>
        <p className="text-sm text-gray-500">
          Коментарі не відображаються на веб-сторінці
        </p>
        <p className="text-sm text-gray-500">
          Вони використовуються для пояснення коду
        </p>
        <p className="text-sm text-gray-500">
          Або для тимчасового вимкнення частини коду
        </p>
      </div>
    ),
  },
  {
    title: "<a></a>",
    description:
      "Посилання. Найбільш важливим атрибутом <a> є атрибут href, який, власне, і вказує місце, куди буде посилатися створене посилання. В якості значення атрибута href використовується адреса документа (URL, Universal Resource Locator, універсальний покажчик ресурсів), на який відбудеться перехід.",
    code: `       <a href="https://example.com" target="_blank" rel="noopener noreferrer">Посилання</a>
`,
    preview: (
      <div>
        <a
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Посилання на example.com
        </a>
        <table className="w-full border-collapse">
          <thead className="text-center">
            <tr className="bg-gray-500">
              <th className="p-3 text-left border-b font-semibold">Атрибут</th>
              <th className="p-3 text-center border-b font-semibold">Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b font-mono">charset</td>
              <td className="p-3 border-b">Кодування повʼязаної сторінки.</td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">coords</td>
              <td className="p-3 border-b">
                Встановлює координати активної області.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">download</td>
              <td className="p-3 border-b">
                Пропонує завантажити вказаний за посиланням файл.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">href</td>
              <td className="p-3 border-b">
                Задає адресу документа, на який слід перейти.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">hreflang</td>
              <td className="p-3 border-b">
                Ідентифікує мову тексту за посиланням.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">media</td>
              <td className="p-3 border-b">
                Вказує, що пов'язаний документ оптимізований під деякий
                пристрій.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">name</td>
              <td className="p-3 border-b">
                Встановлює ім'я якоря всередині документа.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">rel</td>
              <td className="p-3 border-b">
                Відношення між документом за посиланням та поточним документам.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">rev</td>
              <td className="p-3 border-b">
                Відношення між поточним і документом за посиланням.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">shape</td>
              <td className="p-3 border-b">
                Задає форму активної області посилання для зображень.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">target</td>
              <td className="p-3 border-b">
                Ім'я вікна або фрейму, куди браузер буде завантажувати документ.
              </td>
            </tr>
            <tr>
              <td className="p-3 border-b font-mono">type</td>
              <td className="p-3 border-b">
                Вказує MIME-тип документа, на який веде посилання.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Події для елементів",
    description:
      "Події в HTML — це дії, які відбуваються в браузері, і на які можна реагувати за допомогою JavaScript. Наприклад, клік миші, наведеня курсора, натискання клавіші тощо. Події можуть бути прив'язані до різних HTML-елементів.",
    code: `Приклад використання події onclick:
<button onclick="alert('Кнопка натиснута!')">Натисни мене</button>
<p id="demo"></p>
<script>
  document.getElementById("demo").innerHTML = "Hello World!";
</script>
`,
    preview: (
      <div>
        <button
          onClick={() => alert("Кнопка натиснута!")}
          className="bg-blue-500 text-white mb-8 px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Натисни мене
        </button>

        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-3 border-b bg-gray-500">Подія</th>
              <th className="p-3 border-b bg-gray-500">Опис події</th>
            </tr>
          </thead>
          <tbody>
            <tr className="p-3 border-b">
              <td>onplay</td>
              <td>
                Скрипт викликається коли медіа дані готові почати відтворення.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onafterprint</td>
              <td>Скрипт виконується тільки після як документ надрукований.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onbeforeprint</td>
              <td>Скрипт виконується перед тим, як документ надрукований.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onbeforeunload</td>
              <td>
                Скрипт виконується коли документ ось-ось буде вивантажений
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onhashchange</td>
              <td>
                Скрипт виконується коли там відбулися зміни до частини якоря в
                URL
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onload</td>
              <td>
                Викликається після того як завантаження елемента завершене.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onmessage</td>
              <td>Скрипт виконується коли викликане повідомлення.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onoffline</td>
              <td>
                Спрацьовує коли браузер починає працювати в автономному режимі
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>ononline</td>
              <td>Спрацьовує коли браузер починає працювати в режимі онлай.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onpagehide</td>
              <td>
                Скрипт виконується коли користувач переходить на іншу сторінку
                сторінку.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onpageshow</td>
              <td>Скрипт виконується коли користувач заходить на сторінку.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onpopstate</td>
              <td>Скрипт виконується коли змінено історію одного вікна.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onresize</td>
              <td>
                Скрипт виконується, коли розмір вікна браузера змінюється.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onstorage</td>
              <td>Скрипт виконується, коли вміст Web Storage оновлюється.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onunload</td>
              <td>
                Викликається, коли сторінка розвантажена, або вікно браузера
                було зачинено.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onblur</td>
              <td>Скрипт виконується, коли елемент втрачає фокус.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onchange</td>
              <td>
                Викликається в той момент, коли значення елемента змінюється.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>oncontextmenu</td>
              <td>Скрипт виконується коли викликається контекстне меню.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onfocus</td>
              <td>Викликається в той момент, коли елемент отримує фокус.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>oninput</td>
              <td>Скрипт викликається коли користувач вводить дані поле.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>oninvalid</td>
              <td>Скрипт виконується, коли елемент недійсний.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onreset</td>
              <td>
                Викликається, коли натискається у формі кнопка типу Reset.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onsearch</td>
              <td>
                Викликається, коли користувач щось пише в поле пошуку (для
                &lt;input type="search"&gt;)
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onselect</td>
              <td>
                Викликаєтсья після того як будь-який текст був обраний в
                елементі.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onsubmit</td>
              <td>Викликається при відправленні форми.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onkeydown</td>
              <td>
                Подія викликається, коли користувач затис (натиснув та не
                відпускає) клавішу.
              </td>
            </tr>
            <tr className="p-3 border-b">
              <td>onkeypress</td>
              <td>Викликається коли корисрувач натиснув на клавішу.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>onkeyup</td>
              <td>Викликається коли користувач відпускає клавішу.</td>
            </tr>
            <tr className="p-3 border-b">
              <td>ondblclick</td>
              <td>Виникає при подвійному клацанні ЛКМ на елементі.</td>
            </tr>
            <tr>
              <td>ondrag</td>
              <td>Періодично викликається при операції перетягування.</td>
            </tr>
            <tr>
              <td>ondragend</td>
              <td>
                Викликається коли користувач відпускає перелягуваний елемент.
              </td>
            </tr>
            <tr>
              <td>ondragenter</td>
              <td>
                Викликається, коли перетягуваний елемент входить в цільову зону.
              </td>
            </tr>
            <tr>
              <td>ondragleave</td>
              <td>
                Викликається, коли перетягуваний елемент виходть з зони
                призначення.
              </td>
            </tr>
            <tr>
              <td>ondragover</td>
              <td>
                Викликається, коли перетягуваний елемент знаходиться в зоні
                призначення.
              </td>
            </tr>
            <tr>
              <td>ondragstart</td>
              <td>
                Викликається, коли користувач починає перетягувати елемент, або
                виділений текст.
              </td>
            </tr>
            <tr>
              <td>onmousedown</td>
              <td>Викликається, коли користувач затискає ЛКМ на елементі.</td>
            </tr>
            <tr>
              <td>onmousemove</td>
              <td>
                Викликається, коли курсор миші переміщається над елементом.
              </td>
            </tr>
            <tr>
              <td>onmouseout</td>
              <td>Викликається, коли курсор виходить за межі елемента.</td>
            </tr>
            <tr>
              <td>onmouseover</td>
              <td>Виконується, коли курсор наводиться на елемент.</td>
            </tr>
            <tr>
              <td>onmouseup</td>
              <td>Викликається, коли користувач відпускає кнопку миші.</td>
            </tr>
            <tr>
              <td>onscroll</td>
              <td>
                Викликається при прокручуванні вмісту елемента (чи
                веб-сторінки).
              </td>
            </tr>
            <tr>
              <td>onwheel</td>
              <td>Викликається, коли користувач прокручує коліщатко миші.</td>
            </tr>
            <tr>
              <td>oncopy</td>
              <td>Викликається, коли користувач копіює вміст елемента.</td>
            </tr>
            <tr>
              <td>oncut</td>
              <td>Викликається, коли користувач вирізає вміст елемента.</td>
            </tr>
            <tr>
              <td>onpaste</td>
              <td>Викликається, коли користувач вставляє вміст в елемент.</td>
            </tr>
            <tr>
              <td>onabort</td>
              <td>Виконується при перериванні якоїсь події.</td>
            </tr>
            <tr>
              <td>oncanplay</td>
              <td>
                Скрипт виконується коли файл готовий, для початку відтворення
                (коли він буферизований достатньо, щоб почати відтворення)
              </td>
            </tr>
            <tr>
              <td>oncanplaythrough</td>
              <td>
                Скрипт виконується, коли контент вже може бути відтворений без
                переривання на буферизацію.
              </td>
            </tr>
            <tr>
              <td>oncuechange</td>
              <td>
                Скрипт виконується коли змінюється кий в &lt;track&gt; елемента
              </td>
            </tr>
            <tr>
              <td>ondurationchange</td>
              <td>Викликається коли змінюється довжина медіа файлу.</td>
            </tr>
            <tr>
              <td>onemptied</td>
              <td>
                Викликається коли доступ до медіа контенту обривається (зникло
                з’єднання з мережею).
              </td>
            </tr>
            <tr>
              <td>onended</td>
              <td>
                Викликається коли медіа елемент повністю відтворив свій зміст.
              </td>
            </tr>
            <tr>
              <td>onshow</td>
              <td>
                Викликається, коли елемент &lt;menu&gt; буде відображено як
                контекстне меню.
              </td>
            </tr>
            <tr>
              <td>onloadedmetadata</td>
              <td>
                Скрипт виконується коли метадані (розміри чи тривалість)
                завантажуються.
              </td>
            </tr>
            <tr>
              <td>onloadeddata</td>
              <td>Викликається коли медіа данні завантажено.</td>
            </tr>
            <tr>
              <td>onloadstart</td>
              <td>
                Викликається коли браузер тільки починає завантажувати медіа
                дані з сервера.
              </td>
            </tr>
            <tr>
              <td>onpause</td>
              <td>Викликається коли відтворення медіа даних призупинено.</td>
            </tr>
            <tr>
              <td>onplaying</td>
              <td>Викликається коли розпочато відтворення медіа даних.</td>
            </tr>
            <tr>
              <td>onprogress</td>
              <td>
                Подія onprogress відбувається, коли браузер завантажує вказане
                аудіо / відео.
              </td>
            </tr>
            <tr>
              <td>onratechange</td>
              <td>
                Викликається коли змінюється швидкість відтворення медіа даних.
              </td>
            </tr>
            <tr>
              <td>onseeked</td>
              <td>
                Викликається коли атрибут seeked у тега audio або video змінює
                значення з true на false.
              </td>
            </tr>
            <tr>
              <td>onseeking</td>
              <td>
                Викликається коли атрибут seeking у тегів audio або video змінює
                значення з false на true
              </td>
            </tr>
            <tr>
              <td>onstalled</td>
              <td>
                Скрипт виконується коли браузер з будь-якої причини не може
                отримати медіа дані.
              </td>
            </tr>
            <tr>
              <td>onsuspend</td>
              <td>
                Скрипт виконується коли з будь-якої причини завантаження данних
                призупинено до його повного завантаження.
              </td>
            </tr>
            <tr>
              <td>ontimeupdate</td>
              <td>
                Викликається коли змінилася позиція відтворення елемента
                &lt;audio&gt; або &lt;video&gt;.
              </td>
            </tr>
            <tr>
              <td>onvolumechange</td>
              <td>Викликається коли змінюється гучність звуку.</td>
            </tr>
            <tr>
              <td>onwaiting</td>
              <td>
                Викликається коли наступний кадр при відтворенні медіа даних
                недоступний, але браузер очікує що він незабаром завантажиться.
              </td>
            </tr>
            <tr>
              <td>ontoggle</td>
              <td>
                Викликається, коли користувач відкриває або закриває елемент
                &lt;details&gt;.
              </td>
            </tr>
            <tr>
              <td>onerror</td>
              <td>
                Викликається якщо при завантаженні елемента сталася помилка.
              </td>
            </tr>
            <tr>
              <td>onclick</td>
              <td>
                Подія викликається коли користувач клацає ЛКМ по елементу.
              </td>
            </tr>
            <tr>
              <td>ondrop</td>
              <td>
                Викликається, коли перетягуваний елемент падає до зони
                призначення.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<abbr></abbr>",
    description: "Визначення абревіатури",
    code: `<abbr title="HyperText Markup Language">HTML</abbr>`,
    preview: (
      <div>
        <abbr title="HyperText Markup Language">HTML</abbr>
      </div>
    ),
  },
  {
    title: "Загальні  атрибути",
    description: "Загальні атрибути для більшості HTML-елементів",
    code: `Приклад використання загальних атрибутів:
<div id="myDiv" class="myClass" title="Це заголовок" style="color: red;">
  Це текст в div
</div>
<p translate="no" accesskey="a" draggable="true">
  Це текст в p
</p>
<p contenteditable="true" spellcheck="true">
  Це текст в p
</p>`,
    preview: (
      <div>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr>
              <th className="p-3 border-b bg-gray-500">Атрибут</th>
              <th className="p-3 border-b bg-gray-500">Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>Вказує додаткову текстову підказку</td>
            </tr>
            <tr>
              <td>translate</td>
              <td>
                Повідомляє браузеру переводити вказаний текст в елементі чи ні.
              </td>
            </tr>
            <tr>
              <td>contextmenu</td>
              <td>Контекстне меню для елемента</td>
            </tr>
            <tr>
              <td>accesskey</td>
              <td>
                Дозволяє активувати або сфокусуватись на елементі за допомогою
                заданого сполучення клавіш.
              </td>
            </tr>
            <tr>
              <td>class</td>
              <td>
                Визначає один або кілька класів, щоб зв’язати елемент з таблицею
                стилів (CSS).
              </td>
            </tr>
            <tr>
              <td>draggable</td>
              <td>Визначає чи можна перетягувати елемент.</td>
            </tr>
            <tr>
              <td>contenteditable</td>
              <td>Дозволяє редагувати текст в середні тегу.</td>
            </tr>
            <tr>
              <td>dir</td>
              <td>Вказує напрямок тексту.</td>
            </tr>
            <tr>
              <td>hidden</td>
              <td>Приховує вміст елемента від перегляду.</td>
            </tr>
            <tr>
              <td>id</td>
              <td>Задає унікальний ідентифікатор для елемента.</td>
            </tr>
            <tr>
              <td>lang</td>
              <td>Визначає основну мову вмісту елемента</td>
            </tr>
            <tr>
              <td>spellcheck</td>
              <td>
                Вказує браузеру перевіряти чи ні правопис і граматику в тексті
                елемента.
              </td>
            </tr>
            <tr>
              <td>dropzone</td>
              <td>Вказує, що робити з перетягувати елементи.</td>
            </tr>
            <tr>
              <td>style</td>
              <td>Задає вбудований (inline) CSS стиль для елемента.</td>
            </tr>
            <tr>
              <td>tabindex</td>
              <td>
                Встановлює порядок отримання фокусу при переході між елементами
                за допомогою клавіші <code>Tab</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<address></address>",
    description: "Контактна інформація про автора документа",
    code: `<address>
  <p>Контактна інформація:</p>
  <p>Ім'я: Іван</p>
  <p>Прізвище: Іваненко</p>
  <p>Телефон: +380123456789</p>
  <p>Адреса: Україна, Київ</p>
</address>`,
    preview: (
      <div>
        <address>
          <p>Контактна інформація:</p>
          <p>Ім'я: Іван</p>
          <p>Прізвище: Іваненко</p>
          <p>Телефон: +380123456789</p>
          <p>Адреса: Україна, Київ</p>
        </address>
      </div>
    ),
  },
  {
    title: "<area></area>",
    description:
      "Визначає активну область в зображенні, яке є частиною документа HTML.",
    code: `<img src="map.jpg" usemap="#image-map">
<map name="image-map">
  <area shape="rect" coords="34,44,270,350" href="https://example.com" alt="Example">
  <area shape="circle" coords="337,300,44" href="https://example.com" alt="Example">
  <area shape="poly" coords="45,67,89,123,456,789" href="https://example.com" alt="Example">
</map>`,
    preview: (
      <div contentlassName="flex flex-col items-center gap-4">
        <img className="mb-4" src={map} usemap="#image-map" />
        <map name="image-map">
          <area
            shape="rect"
            coords="34,44,270,350"
            href="https://example.com"
            alt="Example"
          />
          <area
            shape="circle"
            coords="337,300,44"
            href="https://example.com"
            alt="Example"
          />
          <area
            shape="poly"
            coords="45,67,89,123,456,789"
            href="https://example.com"
            alt="Example"
          />
        </map>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-500 ">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>alt</td>
              <td>Задає альтернативний текст для області.</td>
            </tr>
            <tr>
              <td>coords</td>
              <td>Вказує координати активної області.</td>
            </tr>
            <tr>
              <td>download</td>
              <td>
                Задає адресу документа, на який слід перейти для завантаження.
              </td>
            </tr>
            <tr>
              <td>href</td>
              <td>
                Визначає сторінку, котру буде завантажено, коли користувач
                натисне на гіперпосилання.
              </td>
            </tr>
            <tr>
              <td>hreflang</td>
              <td>Вказує мову документа, на який веде посилання.</td>
            </tr>
            <tr>
              <td>media</td>
              <td>
                Вказує, що сторінка за цільовою адресою оптимізовані під вказані
                пристрої.
              </td>
            </tr>
            <tr>
              <td>nohref</td>
              <td>Область без посилання на інший документ.</td>
            </tr>
            <tr>
              <td>rel</td>
              <td>
                Визначає, що поєднує поточний документ і цільову сторінку.
              </td>
            </tr>
            <tr>
              <td>shape</td>
              <td>Визначає форму області.</td>
            </tr>
            <tr>
              <td>target</td>
              <td>
                Ім'я вікна або фрейму, куди браузер буде завантажувати документ.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>Встановлює MIME-тип документа, на який веде посилання.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<article></article>",
    description: "Визначає незалежний самостійний вміст.",
    code: `<article>
  <h2>Заголовок статті</h2>
  <p>Це текст статті.</p>
  <p>Автор: Іван Іваненко</p>
  <p>Дата публікації: <date> {new Date().toLocaleDateString()}</date></p>
</article>`,
    preview: (
      <div>
        <article>
          <h2>Заголовок статті</h2>
          <p>Це текст статті.</p>
          <p>Автор: Іван Іваненко</p>
          <p>
            Дата публікації: <date> {new Date().toLocaleDateString()}</date>
          </p>
        </article>
      </div>
    ),
  },
  {
    title: "<aside></aside>",
    description: "Визначає вміст, що не є частиною основного потоку.",
    code: `<aside>
  <h2>Бічна панель</h2>
  <p>Це текст бічної панелі.</p>
  <p>Автор: Іван Іваненко</p>
  <p>Дата публікації: <date> {new Date().toLocaleDateString()}</date></p>
</aside>`,
    preview: (
      <div>
        <aside>
          <h2>Бічна панель</h2>
          <p>Це текст бічної панелі.</p>
          <p>Автор: Іван Іваненко</p>
          <p>
            Дата публікації: <date> {new Date().toLocaleDateString()}</date>
          </p>
        </aside>
      </div>
    ),
  },
  {
    title: "<audio></audio>",
    description: "Вставляє аудіо в документ.",
    code: `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  <source src="audio.wav" type="audio/wav">
</audio>`,
    preview: (
      <div className="flex flex-col items-center gap-4">
        <audio controls>
          <source
            src="https://www.w3schools.com/html/horse.mp3"
            type="audio/mpeg"
          />
        </audio>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>autoplay</td>
              <td>Відтворювати музику відразу після завантаження сторінки.</td>
            </tr>
            <tr>
              <td>controls</td>
              <td>Додає панель керування до аудіофайлу.</td>
            </tr>
            <tr>
              <td>loop</td>
              <td>Циклічно повторює аудіофайл.</td>
            </tr>
            <tr>
              <td>muted</td>
              <td>Вказує, що звук має бути відключений.</td>
            </tr>
            <tr>
              <td>preload</td>
              <td>
                Використовується для завантаження файлу разом із завантаженням
                веб-сторінки.
              </td>
            </tr>
            <tr>
              <td>src</td>
              <td>Вказує шлях до аудіо файлу.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<b></b>",
    description: "Виділяє текст напівжирним шрифтом.",
    code: `<b>Цей текст виділений напівжирним шрифтом</b>`,
    preview: (
      <div>
        <b>Цей текст виділений напівжирним шрифтом</b>
      </div>
    ),
  },
  {
    title: "<base></base>",
    description: "Визначає базовий URL для всіх відносних URL в документі.",
    code: `<head>
    <base href="http://css.in.ua/">
    </head>
    <a href="main.html">Головна</a>`,
    preview: (
      <table>
        <thead>
          <tr className="bg-gray-500">
            <th>Атрибут</th>
            <th>Опис атрибута</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>href</td>
            <td>
              Адреса, яка повинна використовуватися для формування повного шляху
              до файлів.
            </td>
          </tr>
          <tr>
            <td>target</td>
            <td>
              Задає де буде завантажено документ, що відкривається за
              посиланням.
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<basefont></basefont>",
    description: "Визначає шрифт для всього документа.",
    code: `<basefont face="Arial" size="4" color="red">`,
    preview: (
      <div>
        <div>
          <p className="text-red-500">
            <basefont face="Arial" size="4" color="red" />
            Цей текст буде відображатися шрифтом Arial, розміром 4 і червоним
            кольором.
          </p>
        </div>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color</td>
              <td>Встановлює колір тексту.</td>
            </tr>
            <tr>
              <td>face</td>
              <td>Визначає гарнітуру шрифту.</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Задає розмір шрифту в умовних одиницях.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<bdo></bdo>",
    description: "Визначає напрямок тексту.",
    code: `<bdo dir="rtl">Цей текст буде відображатися справа наліво</bdo>`,
    preview: (
      <div>
        <bdo dir="rtl">Цей текст буде відображатися справа наліво</bdo>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dir</td>
              <td>Вказує на напрямок тексту</td>
            </tr>
            <tr>
              <td>rtl</td>
              <td>Текст відображається справа наліво</td>
            </tr>
            <tr>
              <td>ltr</td>
              <td>Текст відображається зліва направо</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<blockquote></blockquote>",
    description: "Визначає блок цитати.",
    code: `<blockquote cite="https://example.com">
  <p>Це текст цитати.</p>
  <footer>Автор: Іван Іваненко</footer>
</blockquote>`,
    preview: (
      <div>
        <blockquote cite="https://example.com">
          <p>Це текст цитати.</p>
          <footer>Автор: Іван Іваненко</footer>
        </blockquote>
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cite</td>
              <td>Вказує URL-адресу, з якоєю пов'язана цитата.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<body></body>",
    description: "Визначає основний вміст HTML-документа.",
    code: `<body>
  <h1>Заголовок</h1>
  <p>Це текст в тілі документа.</p>
  <p>Автор: Іван Іваненко</p>
</body>`,
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>topmargin</td>
              <td>Відступ від верхнього краю вікна браузера до контенту.</td>
            </tr>
            <tr>
              <td>vlink</td>
              <td>Колір відвіданих посилань.</td>
            </tr>
            <tr>
              <td>alink</td>
              <td>Встановлює колір активного посилання.</td>
            </tr>
            <tr>
              <td>background</td>
              <td>Задає фоновий малюнок на веб-сторінці.</td>
            </tr>
            <tr>
              <td>bgcolor</td>
              <td>Колір тла веб-сторінки.</td>
            </tr>
            <tr>
              <td>bgproperties</td>
              <td>
                Визначає, чи буде прокручуватися фон спільно з текстом чи ні.
              </td>
            </tr>
            <tr>
              <td>bottommargin</td>
              <td>Відступ від нижнього краю вікна браузера до контенту.</td>
            </tr>
            <tr>
              <td>leftmargin</td>
              <td>Відступ від лівого краю вікна браузера до контенту.</td>
            </tr>
            <tr>
              <td>link</td>
              <td>Колір посилань на веб-сторінці.</td>
            </tr>
            <tr>
              <td>rightmargin</td>
              <td>Відступ від правого краю вікна браузера до контенту.</td>
            </tr>
            <tr>
              <td>scroll</td>
              <td>Встановлює, відображати смуги прокручування чи ні.</td>
            </tr>
            <tr>
              <td>text</td>
              <td>Колір тексту в документі.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<br>",
    description: "Визначає новий рядок.",
    code: `Цей текст буде відображатися на першому рядку <br />Цей текст буде відображатися на другому рядку`,
    preview: (
      <div>
        <div className=" mb-4">
          Цей текст буде відображатися на першому рядку <br />
          Цей текст буде відображатися на наступному рядку <br />
        </div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>clear</td>
              <td>
                Повідомляє браузеру, як обробляти наступний рядок, якщо текст
                обтікає плаваючий елемент.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<button></button>",
    description: "Визначає кнопку для будь якої дії.",
    code: `<button type="button" onclick="alert('Button clicked!')">
  Натисни мене!
    </button>`,
    preview: (
      <div>
        <div className="gap-2 flex flex-col mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            disabled
          >
            Заблокована кнопка
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          >
            Звичайна кнопка
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            onClick={() => alert("Кнопка натиснута!")}
          >
            Кнопка з JavaScript
          </button>
        </div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>autofocus</td>
              <td>Кнопка отримує фокус після завантаження сторінки.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Блокує кнопку.</td>
            </tr>
            <tr>
              <td>form</td>
              <td>Пов'язує кнопку з однією або декількома формами.</td>
            </tr>
            <tr>
              <td>formaction</td>
              <td>
                Задає адресу, на яку будуть відправлені дані форми при
                натисненні на кнопку. Тільки для `type="submit"`.
              </td>
            </tr>
            <tr>
              <td>formenctype</td>
              <td>
                Спосіб кодування даних форми перед відправкою форми на сервер.
              </td>
            </tr>
            <tr>
              <td>formmethod</td>
              <td>
                Метод пересилання даних форми. Тільки для `type="submit"`.
              </td>
            </tr>
            <tr>
              <td>formnovalidate</td>
              <td>
                Скасовує перевірку форми на коректність. Тільки для
                `type="submit"`.
              </td>
            </tr>
            <tr>
              <td>formtarget</td>
              <td>
                Де відкрити відповідь сервера після надсилання форми. Тільки для
                `type="submit"`.
              </td>
            </tr>
            <tr>
              <td>name</td>
              <td>Унікальне ім'я кнопки.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>
                Встановлює тип кнопки: звичайна; для відправки даних форми на
                сервер; для очищення форми.
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>
                Початкове значення кнопки. (Буде відправлено на сервер чи
                прочитано за допомогою скриптів)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<canvas></canvas>",
    description: "Визначає область малювання.",
    code: `<canvas id="myCanvas" width="400" height="200"></canvas>
    const MyCanvas = () => {
      const canvasRef = useRef(null);
    
      useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
    
    
        ctx.fillStyle = "blue";
        ctx.fillRect(20, 20, 150, 100);
    
    
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.strokeRect(20, 20, 150, 100);
    
    
        ctx.fillStyle = "green";
        ctx.font = "30px Arial";
        ctx.fillText("Hello World", 50, 50);
    
    
        ctx.beginPath();
        ctx.arc(200, 100, 40, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }, []);
    
      return (
        <div className="flex justify-center items-center my-5">
          <canvas
            ref={canvasRef}
            width={400}
            height={200}
            style={{ border: "1px solid #ccc" }}
          />
        </div>
      );
    };`,
    preview: (
      <div>
        <MyCanvas />

        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>height</td>
              <td>Висота області малювання.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина області малювання.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<caption></caption>",
    description: "Визначає заголовок таблиці.",
    code: `<table>
  <caption>Заголовок таблиці</caption>
  <tr>
    <th>Заголовок 1</th>
    <th>Заголовок 2</th>
  </tr>
  <tr>
    <td>Дані 1</td>
    <td>Дані 2</td>
  </tr>
  <tr>
    <td>Дані 3</td>
    <td>Дані 4</td>
  </tr>
</table>`,
    preview: (
      <div>
        <table className="border-collapse border border-gray-500 mb-4">
          <caption className="bg-gray-300">Заголовок таблиці</caption>
          <thead>
            <tr>
              <th className="border border-gray-400">Заголовок 1</th>
              <th className="border border-gray-400">Заголовок 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400">Дані 1</td>
              <td className="border border-gray-400">Дані 2</td>
            </tr>
            <tr>
              <td className="border border-gray-400">Дані 3</td>
              <td className="border border-gray-400">Дані 4</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>
                Визначає яким чином буде вирівнюватися та розміщуватись
                заголовок.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<center></center>",
    description: "Вирівнює текст по центру.",
    code: `<center>Цей текст буде відображатися по центру</center>`,
    preview: (
      <div>
        <center>Цей текст буде відображатися по центру</center>
      </div>
    ),
  },
  {
    title: "<cite></cite>",
    description: "Визначає заголовок для цитати.",
    code: `<cite>Це заголовок для цитати.</cite>`,
    preview: (
      <div>
        <cite>Це заголовок для цитати.</cite>
      </div>
    ),
  },
  {
    title: "<code></code>",
    description: "Визначає фрагмент коду.",
    code: `<code>Це фрагмент коду.</code>`,
    preview: (
      <div>
        <code>Це фрагмент коду. </code>
      </div>
    ),
  },
  {
    title: "<col></col>",
    description: "Визначає колонки в таблиці.",
    code: `<table>
          <colgroup>
    <col style="background-color: lightblue;">
    <col style="background-color: lightgreen;">
  </colgroup>
  <tr>
    <td>Дані 1</td>
    <td>Дані 2</td>
  </tr>
  <tr>
    <td>Дані 3</td>
    <td>Дані 4</td>
  </tr>`,
    preview: (
      <div>
        <table className="border-collapse border border-gray-500 mb-4">
          <colgroup>
            <col style={{ backgroundColor: "lightblue" }} />
            <col style={{ backgroundColor: "lightgreen" }} />
          </colgroup>
          <tr>
            <td className="border border-gray-400">Дані 1</td>
            <td className="border border-gray-400">Дані 2</td>
          </tr>
          <tr>
            <td className="border border-gray-400">Дані 3</td>
            <td className="border border-gray-400">Дані 4</td>
          </tr>
        </table>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Встановлює вирівнювання вмісту колонок по горизонталі.</td>
            </tr>
            <tr>
              <td>char</td>
              <td>Вирівнює вміст колонки по заданому символу.</td>
            </tr>
            <tr>
              <td>charoff</td>
              <td>Зміщує вміст комірки відносно заданого символу.</td>
            </tr>
            <tr>
              <td>span</td>
              <td>Кількість колонок, до яких слід застосовувати параметри.</td>
            </tr>
            <tr>
              <td>valign</td>
              <td>Задає вертикальне вирівнювання вмісту колонки.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина колонки.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<colgroup></colgroup>",
    description: "Групує колонки в таблиці.",
    code: `<table>
          <colgroup>
    <col style="background-color: lightblue;">
    <col style="background-color: lightgreen;">
  </colgroup>
  <tr>
    <td>Дані 1</td>
    <td>Дані 2</td>
  </tr>
  <tr>
    <td>Дані 3</td>
    <td>Дані 4</td>
  </tr>`,
    preview: (
      <div>
        <table className="border-collapse border border-gray-500 mb-4">
          <colgroup>
            <col style={{ backgroundColor: "lightblue" }} />
            <col style={{ backgroundColor: "lightgreen" }} />
          </colgroup>
          <tr>
            <td className="border border-gray-400">Дані 1</td>
            <td className="border border-gray-400">Дані 2</td>
          </tr>
          <tr>
            <td className="border border-gray-400">Дані 3</td>
            <td className="border border-gray-400">Дані 4</td>
          </tr>
        </table>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>
                Встановлює вирівнювання вмісту групи колонок по горизонталі.
              </td>
            </tr>
            <tr>
              <td>char</td>
              <td>Вирівнює по вміст групи колонок заданому символу.</td>
            </tr>
            <tr>
              <td>charoff</td>
              <td>Зміщує вміст групи колонок відносно заданого символу.</td>
            </tr>
            <tr>
              <td>span</td>
              <td>
                Кількість груп колонок, до яких слід застосовувати атрибути.
              </td>
            </tr>
            <tr>
              <td>valign</td>
              <td>Задає вертикальне вирівнювання вмісту колонки.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина групи колонок.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<datalist></datalist>",
    description: "Визначає список варіантів для елемента <input>.",
    code: `<input list="fruits" />
<datalist id="fruits">
  <option value="Apple" />
  <option value="Banana" />
  <option value="Cherry" />
  <option value="Date" />
  <option value="Elderberry" />
  <option value="Fig" />
  <option value="Grape" />
  <option value="Honeydew" />
  <option value="Kiwi" />
  <option value="Lemon" />
  <option value="Mango" />
  <option value="Nectarine" />
  <option value="Orange" />
  <option value="Papaya" />
  <option value="Quince" />
  <option value="Raspberry" />
  <option value="Strawberry" />
  <option value="Tangerine" />
  <option value="Ugli fruit" />
  <option value="Vanilla bean" />
  <option value="Watermelon" />
  <option value="Xigua" />
  <option value="Yellow passion fruit" />
  <option value="Zucchini" />
</datalist>`,
    preview: (
      <div>
        <input list="fruits" className="border border-gray-400 mb-4" />
        <datalist id="fruits">
          <option value="Apple" />
          <option value="Banana" />
          <option value="Cherry" />
          <option value="Date" />
          <option value="Elderberry" />
          <option value="Fig" />
          <option value="Grape" />
          <option value="Honeydew" />
          <option value="Kiwi" />
          <option value="Lemon" />
          <option value="Mango" />
          <option value="Nectarine" />
          <option value="Orange" />
          <option value="Papaya" />
          <option value="Quince" />
          <option value="Raspberry" />
          <option value="Strawberry" />
          <option value="Tangerine" />
          <option value="Ugli fruit" />
          <option value="Vanilla bean" />
          <option value="Watermelon" />
        </datalist>
      </div>
    ),
  },
  {
    title: "<dd></dd>",
    description: "Визначає опис терміна.",
    code: `<dl>
  <dt>HTML</dt>
  <dd>Мова розмітки для створення веб-сторінок.</dd>
  <dt>CSS</dt>
  <dd>Мова стилізації для веб-сторінок.</dd>
  <dt>JavaScript</dt>
  <dd>Мова програмування для веб-сторінок.</dd>
  <dt>React</dt>
  <dd>Бібліотека JavaScript для створення інтерфейсів користувача.</dd>
  <dt>Node.js</dt>
  <dd>JavaScript середовище виконання для серверного програмування.</dd>
  <dt>Express.js</dt>
  <dd>Web-фреймворк для Node.js.</dd>
  <dt>MongoDB</dt>
  <dd>Документо-орієнтована база даних.</dd>
  <dt>GraphQL</dt>
  <dd>Мова запитів для API.</dd>
  <dt>REST</dt>
  <dd>Стиль архітектури для веб-сервісів.</dd>
  <dt>Git</dt>
  <dd>Система контролю версій.</dd>
  <dt>GitHub</dt>
  <dd>Платформа для хостингу Git репозиторіїв.</dd>
  <dt>Docker</dt>
  <dd>Платформа для автоматизації розгортання програм.</dd>
  <dt>Kubernetes</dt>
  <dd>Система управління контейнерами.</dd>
  <dt>CI/CD</dt>
  <dd>Безперервна інтеграція та безперервне розгортання.</dd>
  <dt>Agile</dt>
  <dd>Методологія управління проектами.</dd>
  <dt>Scrum</dt>
  <dd>Методологія управління проектами в Agile.</dd>`,
    preview: (
      <div>
        <dl>
          <dt>HTML</dt>
          <dd>Мова розмітки для створення веб-сторінок.</dd>
          <dt>CSS</dt>
          <dd>Мова стилізації для веб-сторінок.</dd>
          <dt>JavaScript</dt>
          <dd>Мова програмування для веб-сторінок.</dd>
          <dt>React</dt>
          <dd>Бібліотека JavaScript для створення інтерфейсів користувача.</dd>
          <dt>Node.js</dt>
          <dd>JavaScript середовище виконання для серверного програмування.</dd>
          <dt>Express.js</dt>
          <dd>Web-фреймворк для Node.js.</dd>
          <dt>MongoDB</dt>
          <dd>Документо-орієнтована база даних.</dd>
          <dt>GraphQL</dt>
          <dd>Мова запитів для API.</dd>
          <dt>REST</dt>
          <dd>Стиль архітектури для веб-сервісів.</dd>
          <dt>Git</dt>
          <dd>Система контролю версій.</dd>
          <dt>GitHub</dt>
          <dd>Платформа для хостингу Git репозиторіїв.</dd>
          <dt>Docker</dt>
          <dd>Платформа для автоматизації розгортання програм.</dd>
          <dt>Kubernetes</dt>
          <dd>Система управління контейнерами.</dd>
        </dl>
      </div>
    ),
  },
  {
    title: "<del></del>",
    description: "Визначає текст, який був видалений.",
    code: `<del>Цей текст був видалений.</del>`,
    preview: (
      <div>
        <del>Цей текст був видалений.</del>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cite</td>
              <td>
                Вказує посилання на документ, де наведена причина видалення
                тексту і інші подробиці.
              </td>
            </tr>
            <tr>
              <td>datetime</td>
              <td>Дата і час редагування тексту.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<details></details>",
    description: "Визначає елемент, що містить деталі.",
    code: `<details>
  <summary>Заголовок</summary>
  <p>Це деталі, які можна розгорнути або згортати.</p>
  <p>Це ще один абзац тексту в деталях.</p>
  <p>Це третій абзац тексту в деталях.</p>`,
    preview: (
      <div>
        <details>
          <summary>Заголовок</summary>
          <p>Це деталі, які можна розгорнути або згортати.</p>
          <p>Це ще один абзац тексту в деталях.</p>
          <p>Це третій абзац тексту в деталях.</p>
        </details>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>open</td>
              <td>Визначає, чи елемент відкритий за замовчуванням.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<dfn></dfn>",
    description: "Визначає термін або фразу.",
    code: `<dfn>HTML</dfn> - це мова розмітки для створення веб-сторінок.`,
    preview: (
      <div>
        <dfn>HTML</dfn> - це мова розмітки для створення веб-сторінок.
      </div>
    ),
  },
  {
    title: "<dialog></dialog>",
    description: "Визначає діалогове вікно або модальне вікно.",
    code: `<dialog open>
  <p>Це діалогове вікно.</p>
  <button onclick="this.parentElement.close()">Закрити</button>
</dialog>`,
    preview: (
      <div>
        <dialog className="border border-gray-400 p-4 rounded-2xl gap-2">
          <p className="mb-4">Це діалогове вікно.</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
            onClick={(e) => e.target.parentElement.close()}
          >
            Закрити
          </button>
        </dialog>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mb-4 hover:bg-blue-700"
          onClick={() => document.querySelector("dialog").showModal()}
        >
          Відкрити діалогове вікно
        </button>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>open</td>
              <td>Визначає, чи діалогове вікно відкрите за замовчуванням.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<dir></dir>",
    description: "Визначає список елементів.",
    code: `<dir compact>
  <li>Елемент 1</li>
  <li>Елемент 2</li>
  <li>Елемент 3</li>
  <li>Елемент 4</li>
  <li>Елемент 5</li>
    </dir>`,
    preview: (
      <div>
        <dir compact>
          <li>Елемент 1</li>
          <li>Елемент 2</li>
          <li>Елемент 3</li>
          <li>Елемент 4</li>
          <li>Елемент 5</li>
        </dir>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>compact</td>
              <td>Вказує, що список має бути менше, ніж зазвичай.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<div></div>",
    description: "Визначає загальний контейнер для елементів.",
    code: `<div>
  <h1>Заголовок</h1>
  <p>Це текст в контейнері.</p>
  <p>Автор: Іван Іваненко</p>
</div>`,
    preview: (
      <div>
        <div className="border border-gray-400 p-4 rounded-2xl mb-4">
          <h1 className="text-xl font-bold">Заголовок</h1>
          <p>Це текст в контейнері.</p>
          <p>Автор: Іван Іваненко</p>
        </div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання вмісту контейнера.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<dl></dl>",
    description: "Визначає список термінів і їх описів.",
    code: `<dl compact>
  <dt>HTML</dt>
  <dd>Мова розмітки для створення веб-сторінок.</dd>
  <dt>CSS</dt>
  <dd>Мова стилізації для веб-сторінок.</dd>
  </dl>`,
    preview: (
      <div>
        <dl compact className="mb-4">
          <dt>HTML</dt>
          <dd>Мова розмітки для створення веб-сторінок.</dd>
          <dt>CSS</dt>
          <dd>Мова стилізації для веб-сторінок.</dd>
        </dl>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>compact</td>
              <td>Визначає, що список термінів буде компактним.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<dt></dt>",
    description: "Визначає термін у списку термінів.",
    code: `<dl>
  <dt>HTML</dt>
  <dd>Мова розмітки для створення веб-сторінок.</dd>
  <dt>CSS</dt>
  <dd>Мова стилізації для веб-сторінок.</dd>`,
    preview: (
      <div>
        <dl>
          <dt>HTML</dt>
          <dd>Мова розмітки для створення веб-сторінок.</dd>
          <dt>CSS</dt>
          <dd>Мова стилізації для веб-сторінок.</dd>
        </dl>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>compact</td>
              <td>Визначає, що термін буде компактним.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<em></em>",
    description: "Визначає текст, що підкреслює важливість.",
    code: `<em>Цей текст підкреслює важливість.</em>`,
    preview: (
      <div>
        <em>Цей текст підкреслює важливість.</em>
      </div>
    ),
  },
  {
    title: "<embed></embed>",
    description: "Вставляє в документ об'єкт або мультимедіа.",
    code: `<embed src="https://www.example.com" width="100%" height="200" allowfullscreen />`,
    preview: (
      <div>
        <embed
          src="https://www.example.com"
          width="100%"
          height="200"
          className="border border-gray-400 mb-4"
          allowfullscreen
        />
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>src</td>
              <td>URL-адреса ресурсу, який потрібно вставити.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина об'єкта.</td>
            </tr>
            <tr>
              <td>height</td>
              <td>Висота об'єкта.</td>
            </tr>
            <tr>
              <td>type</td>
              <td>Тип MIME ресурсу.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<fieldset></fieldset>",
    description: "Групує елементи форми.",
    code: `<fieldset>
  <legend>Заголовок групи</legend>
  <label for="name">Ім'я:</label>
  <input type="text" id="name" name="name" />
  <br />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <br />
  <label for="password">Пароль:</label>
  <input type="password" id="password" name="password" />
  <br />
  <input type="submit" value="Відправити" />
</fieldset>`,
    preview: (
      <div>
        <fieldset className="border border-gray-400 p-4 rounded-2xl mb-4">
          <legend className="font-bold">Заголовок групи</legend>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 mb-2"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 mb-2"
          />
          <br />
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 mb-2"
          />
          <br />
          <input
            type="submit"
            value="Відправити"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          />
        </fieldset>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>disabled</td>
              <td>Блокує групу елементів.</td>
            </tr>
            <tr>
              <td>form</td>
              <td>Пов'язує групу з формою.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Унікальне ім'я групи.</td>
            </tr>
            <tr>
              <td>title</td>
              <td>Визначає підказку для групи.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<figcaption></figcaption>",
    description: "Визначає заголовок для елемента <figure>.",
    code: `<figure>
  <img src="https://placehold.co/600x400@2x.png" alt="Placeholder Image" />
  <figcaption>Це заголовок для зображення.</figcaption>
</figure>`,
    preview: (
      <div>
        <figure className="mb-4">
          <img
            src="https://placehold.co/600x400@2x.png"
            alt="Placeholder Image"
            className="border flex items-center justify-center border-gray-400 mb-2"
          />
          <figcaption>Це заголовок для зображення.</figcaption>
        </figure>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання заголовка.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<figure></figure>",
    description: "Визначає елемент, що містить зображення або графіку.",
    code: `<figure>
  <img src="https://placehold.co/600x400@2x.png" alt="Placeholder Image" />
  <figcaption>Це заголовок для зображення.</figcaption>
</figure>`,
    preview: (
      <div>
        <figure className="mb-4">
          <img
            src="https://placehold.co/600x400@2x.png"
            alt="Placeholder Image"
            className="border flex items-center justify-center border-gray-400 mb-2"
          />
          <figcaption>Це заголовок для зображення.</figcaption>
        </figure>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання заголовка.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<font></font>",
    description: "Визначає шрифт для тексту.",
    code: `<font face="Arial" size="4" color="red">Цей текст буде червоним.</font>`,
    preview: (
      <div>
        <font face="Arial" size="4" color="red">
          Цей текст буде червоним.
        </font>
        <table>
          <thead>
            <tr>
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>color</td>
              <td>Визначає колір тексту.</td>
            </tr>
            <tr>
              <td>face</td>
              <td>Визначає шрифт тексту.</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Визначає розмір шрифту.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<footer></footer>",
    description: "Визначає нижній колонтитул документа або секції.",
    code: `<footer>
  <p>Автор: Іван Іваненко</p>
  <p>Дата: <date> {new Date().toLocaleDateString()}</date></p>
</footer>`,
    preview: (
      <div>
        <footer>
          <p>Автор: Іван Іваненко</p>
          <p>
            Дата: <date> {new Date().toLocaleDateString()}</date>
          </p>
        </footer>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання тексту.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<form></form>",
    description: "Визначає форму для введення даних.",
    code: `<form action="/submit" method="post">
  <label for="name">Ім'я:</label>
  <input type="text" id="name" name="name" />
  <br />
  <label for="email">Електронна пошта:</label>
  <input type="email" id="email" name="email" />
  <br />
  <input type="submit" value="Відправити" />
</form>`,
    preview: (
      <div>
        <form action="/submit" method="post">
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-400 mb-2"
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 mb-2"
          />
          <br />
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 mb-2"
          />
          <br />
          <input
            type="submit"
            value="Відправити"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
          />
        </form>
        <table>
          <thead>
            <tr>
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>accept</td>
              <td>
                Визначає, розділений комами, перелік типів файлів, які можуть
                бути завантажені на сервер.
              </td>
            </tr>
            <tr>
              <td>accept-charset</td>
              <td>Вказує кодування даних які відправляються на сервер.</td>
            </tr>
            <tr>
              <td>action</td>
              <td>Вказує URL адресу обробника форми.</td>
            </tr>
            <tr>
              <td>autocomplete</td>
              <td>
                Включає або відключає автозаповнення текстових полів форми.
              </td>
            </tr>
            <tr>
              <td>enctype</td>
              <td>
                Вказує кодування даних форми, що відправляються на сервер.
              </td>
            </tr>
            <tr>
              <td>method</td>
              <td>HTTP-метод відправки даних.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Вказує унікальне імʼя форми.</td>
            </tr>
            <tr>
              <td>novalidate</td>
              <td>
                Скасовує перевірку даних форми перед відправкою на сервер.
              </td>
            </tr>
            <tr>
              <td>target</td>
              <td>Фрейм або вікно в яке буде завантажена відповідь сервера.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "Загаловки",
    description: "Визначає заголовки різних рівнів.",
    code: `<h1>Заголовок 1 рівня</h1>
<h2>Заголовок 2 рівня</h2>
<h3>Заголовок 3 рівня</h3>
<h4>Заголовок 4 рівня</h4>
<h5>Заголовок 5 рівня</h5>
<h6>Заголовок 6 рівня</h6>`,
    preview: (
      <div>
        <h1 className="text-2xl font-bold">Заголовок 1 рівня</h1>
        <h2 className="text-xl font-bold">Заголовок 2 рівня</h2>
        <h3 className="text-lg font-bold">Заголовок 3 рівня</h3>
        <h4 className="text-base font-bold">Заголовок 4 рівня</h4>
        <h5 className="text-sm font-bold">Заголовок 5 рівня</h5>
        <h6 className="text-xs font-bold">Заголовок 6 рівня</h6>
      </div>
    ),
  },
  {
    title: "<head></head>",
    description: "Визначає метадані документа.",
    code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Заголовок документа</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js"></script>
  </head>`,
    preview: (
      <div>
        <p className="text-lg font-bold mb-4">Це метадані документа:</p>
        <p className="mb-2">Кодування: UTF-8</p>
        <p className="mb-2">Viewport: width=device-width, initial-scale=1.0</p>
        <p className="mb-2">Title: Заголовок документа</p>
        <p className="mb-2">Підключення CSS стилів: styles.css</p>
        <p className="mb-2">Підключення JavaScript: script.js</p>
      </div>
    ),
  },
  {
    title: "<header></header>",
    description: "Визначає верхній колонтитул документа або секції.",
    code: `<header>
  <h1>Заголовок документа</h1>
  <nav>
    <ul>
      <li><a href="#section1">Розділ 1</a></li>
      <li><a href="#section2">Розділ 2</a></li>
      <li><a href="#section3">Розділ 3</a></li>
    </ul>
  </nav>
  </header>`,
    preview: (
      <div>
        <header className="border border-gray-400 p-4 rounded-2xl mb-4">
          <h1 className="text-2xl font-bold">Заголовок документа</h1>
          <nav>
            <ul className="list-disc list-inside">
              <li>
                <a href="#section1" className="text-blue-500 hover:underline">
                  Розділ 1
                </a>
              </li>
              <li>
                <a href="#section2" className="text-blue-500 hover:underline">
                  Розділ 2
                </a>
              </li>
              <li>
                <a href="#section3" className="text-blue-500 hover:underline">
                  Розділ 3
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    ),
  },
  {
    title: "<hgroup></hgroup>",
    description: "Групує заголовки.",
    code: `<hgroup>
  <h1>Основний заголовок</h1>
  <h2>Підзаголовок</h2>
  <h3>Додатковий заголовок</h3>
</hgroup>`,
    preview: (
      <div>
        <hgroup className="mb-4">
          <h1 className="text-2xl font-bold">Основний заголовок</h1>
          <h2 className="text-xl font-bold">Підзаголовок</h2>
          <h3 className="text-lg font-bold">Додатковий заголовок</h3>
        </hgroup>
      </div>
    ),
  },
  {
    title: "<hr />",
    description: "Вставляє горизонтальну лінію.",
    code: `<hr />`,
    preview: (
      <div>
        <p>Це текст над горизонтальною лінією.</p>
        <hr className="border-t-2 border-gray-400 mb-4" />
        <p>Це текст під горизонтальною лінією.</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Встановлює горизонтальне вирівнювання лінії.</td>
            </tr>
            <tr>
              <td>color</td>
              <td>Колір лінії.</td>
            </tr>
            <tr>
              <td>noshade</td>
              <td>Малює лінію без тривимірних ефектів(без тіні).</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Задає висоту (товщину) лінії.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Задає довжину лінії.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<html></html>",
    description: "Визначає кореневий елемент документа.",
    code: `<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Заголовок документа</title>
    <link rel="stylesheet" href="styles.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Заголовок документа</h1>
    <p>Це текст в документі.</p>
    <p>Автор: Іван Іваненко</p>
    <p>Дата: <date> {new Date().toLocaleDateString()}</date></p>
    </body>
</html>`,
    preview: (
      <div>
        <p className="text-lg font-bold mb-4">
          Це кореневий елемент документа:
        </p>
        <p className="mb-2">Мова: uk</p>
        <p className="mb-2">Кодування: UTF-8</p>
        <p className="mb-2">Viewport: width=device-width, initial-scale=1.0</p>
        <p className="mb-2">Title: Заголовок документа</p>
        <p className="mb-2">Підключення CSS стилів: styles.css</p>
        <p className="mb-2">Підключення JavaScript: script.js</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>manifest</td>
              <td>
                Вказує URL-адресу текстового файла маніфесту зі списком файлів,
                які вносяться в кеш пам'ять Web-браузера.
              </td>
            </tr>
            <tr>
              <td>xmlns</td>
              <td>Вказує простір імен `xml` документа.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<i></i>",
    description: "Визначає курсивний текст.",
    code: `<i>Цей текст курсивом.</i>`,
    preview: (
      <div>
        <i>Цей текст курсивом.</i>
      </div>
    ),
  },
  {
    title: "<iframe></iframe>",
    description: "Вставляє в документ фрейм.",
    code: `<iframe src="https://www.example.com" width="600" height="400"></iframe>`,
    preview: (
      <div>
        <iframe
          src="https://www.example.com"
          width="100%"
          height="400"
          className="border border-gray-400 mb-4"
        ></iframe>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>
                Задає спосіб вирівнювання контейнера щодо інших об'єктів в
                html-документі.
              </td>
            </tr>
            <tr>
              <td>frameborder</td>
              <td>Вказує, чи відображати рамку навколо контейнера.</td>
            </tr>
            <tr>
              <td>height</td>
              <td>Задає висоту контейнера.</td>
            </tr>
            <tr>
              <td>longdesc</td>
              <td>
                Вказує сторінку, яка містить довгий опис змісту елемент
                &lt;iframe&gt;.
              </td>
            </tr>
            <tr>
              <td>marginheight</td>
              <td>Відступ зверху і знизу від змісту до кордону фрейму.</td>
            </tr>
            <tr>
              <td>marginwidth</td>
              <td>Відступ зліва і справа від змісту до кордону фрейму.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Зазначає ім'я для контейнера.</td>
            </tr>
            <tr>
              <td>sandbox</td>
              <td>
                Дозволяє задати ряд обмежень на контент, що завантажується у
                фрейм.
              </td>
            </tr>
            <tr>
              <td>scrolling</td>
              <td>
                Вказує, показувати чи ні смуги прокрутки (скролінг) в
                контейнері.
              </td>
            </tr>
            <tr>
              <td>src</td>
              <td>
                Задає шлях до html-файлу, який буде завантажений в даному
                контейнері.
              </td>
            </tr>
            <tr>
              <td>srcdoc</td>
              <td>
                Визначає зміст HTML-сторінки, щоб показати в &lt;iframe&gt;.
              </td>
            </tr>
            <tr>
              <td>width</td>
              <td>Задає ширину контейнера.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<img />",
    description: "Вставляє зображення в документ.",
    code: "<img src=www.exemple.com alt='Example Image' />",
    preview: (
      <div>
        <img
          className="mb-4"
          src="https://via.assets.so/game.png?id=13&q=95&w=400&h=200&fit=fill"
        ></img>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає як малюнок буде обтікатися текстом.</td>
            </tr>
            <tr>
              <td>alt</td>
              <td>Альтернативний текст для зображення.</td>
            </tr>
            <tr>
              <td>border</td>
              <td>Товщина рамки навколо зображення.</td>
            </tr>
            <tr>
              <td>crossorigin</td>
              <td>
                Встановлює можливість використання технології міждоменного
                доступу до ресурсів.
              </td>
            </tr>
            <tr>
              <td>height</td>
              <td>Висота зображення.</td>
            </tr>
            <tr>
              <td>hspace</td>
              <td>
                Горизонтальний відступ від зображення до навколишнього контенту.
              </td>
            </tr>
            <tr>
              <td>ismap</td>
              <td>
                Говорить браузеру, що картинка є серверної картою-зображенням.
              </td>
            </tr>
            <tr>
              <td>longdesc</td>
              <td>
                Вказує адресу документа, де міститься анотація до картинки.
              </td>
            </tr>
            <tr>
              <td>src</td>
              <td>Шлях до графічного файлу.</td>
            </tr>
            <tr>
              <td>usemap</td>
              <td>
                Посилання на теґ &lt;map&gt;, що містить координати для
                клієнтської карти-зображення.
              </td>
            </tr>
            <tr>
              <td>vspace</td>
              <td>
                Вертикальний відступ від зображення до навколишнього контенту.
              </td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина зображення.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<input />",
    description: "Визначає поле для введення даних.",
    code: `<input type="text" name="username" placeholder="Введіть ім'я" />`,
    preview: (
      <div>
        <div className="flex flex-col justify-center items-center">
          <input
            className="mb-4 w-auto border-2 rounded-2xl p-1"
            type="text"
            name="username"
            placeholder="  Введіть ім'я"
          />
          <input
            className="mb-4 w-auto border-2 rounded-2xl p-1"
            type="password"
            name="password"
            placeholder="  Введіть пароль"
          />
          <input className="mb-4 w-auto p-1" type="radio" name="radio" />
          Можна вибрати
          <input
            className="mb-4 w-auto border-2 rounded-2xl p-1"
            type="checkbox"
            name="checkbox"
          />
          Можна перемикати
          <input
            className="mb-4 w-auto border-2 rounded-2xl cursor-pointer p-1"
            type="submit"
            name="submit"
            placeholder="  Введіть ім'я"
          />
          <input
            className="mb-4 w-auto border-2 rounded-2xl cursor-pointer p-1"
            type="reset"
            name="reset"
            placeholder="  Введіть ім'я"
          />
          <input
            className="mb-4 w-auto border-2 rounded-2xl p-1"
            type="file"
            name="file"
          />
          <input
            className="mb-4 w-10 flex items-center justify-center rounded-2xl p-1"
            type="image"
            name="image"
            src="https://www.svgrepo.com/show/504058/button-electricity-charging-plug-energy-power.svg"
          />
          Кнопка у вигляді картинки
        </div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>accept</td>
              <td>
                Встановлює фільтр на типи файлів, які ви можете надіслати через
                поле завантаження файлів.
              </td>
            </tr>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання зображення (для type ="image").</td>
            </tr>
            <tr>
              <td>alt</td>
              <td>
                Задає альтернативний текст для зображення (для type ="image").
              </td>
            </tr>
            <tr>
              <td>autocomplete</td>
              <td>Вмикає чи вимикає автозаповнення.</td>
            </tr>
            <tr>
              <td>autofocus</td>
              <td>
                Автоматичне отримання фокусу елементом форми відразу після
                повного завантаження сторінки.
              </td>
            </tr>
            <tr>
              <td>checked</td>
              <td>
                Активує прапорець/перемикач (для type="checkbox" чи
                type="radio").
              </td>
            </tr>
            <tr>
              <td>dirname</td>
              <td>Передає на сервер напрямок тексту.</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Блокує доступ і зміну елемента.</td>
            </tr>
            <tr>
              <td>form</td>
              <td>Пов'язує поле з формою по її ідентифікатору.</td>
            </tr>
            <tr>
              <td>formaction</td>
              <td>
                Вказує URL-адресу обробника форми (для type ="submit" та `type
                ="image").
              </td>
            </tr>
            <tr>
              <td>formenctype</td>
              <td>
                Встановлює спосіб кодування даних, що відправляються на сервер
                (для type ="submit" та `type ="image").
              </td>
            </tr>
            <tr>
              <td>formmethod</td>
              <td>
                Визначає HTTP метод передачі даних на сервер (для `type
                ="submit"` та `type ="image"`).
              </td>
            </tr>
            <tr>
              <td>formnovalidate</td>
              <td>Скасовує вбудовану перевірку даних на коректність.</td>
            </tr>
            <tr>
              <td>formtarget</td>
              <td>
                Фрейм або вікно, в яке буде завантажено відповідь сервера (для
                `type ="submit"` та `type ="image"`).
              </td>
            </tr>
            <tr>
              <td>height</td>
              <td>Задає висоту елемента форми.</td>
            </tr>
            <tr>
              <td>list</td>
              <td>
                Встановлює список варіантів (&lt;datalist&gt;) тексту, що
                вводиться.
              </td>
            </tr>
            <tr>
              <td>max</td>
              <td>Задає максимальне значення для введеного числа/дати.</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>
                Встановлює максимальну кількість символів, що вводяться в
                текстове поле.
              </td>
            </tr>
            <tr>
              <td>min</td>
              <td>Задає мінімальне значення для введення числа/дати.</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>Дозволяє завантажити декілька файлів одночасно.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>
                Ім'я поля, призначене для того, щоб обробник форми міг його
                ідентифікувати.
              </td>
            </tr>
            <tr>
              <td>pattern</td>
              <td>
                Задає регулярний вираз, за яким проходитиме перевірка введеного
                тексту.
              </td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>Встановлює в текстовому полі текст-підказку.</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>Вказує, що поле введення доступне тільки для читання.</td>
            </tr>
            <tr>
              <td>required</td>
              <td>Вказує що поле обов'язкове для заповнення.</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Встановлює ширину текстового поля за кількістю символів.</td>
            </tr>
            <tr>
              <td>src</td>
              <td>
                Вказує URL-адресу зображення для використання її як кнопки
                надсилання (для `type ="image"`).
              </td>
            </tr>
            <tr>
              <td>step</td>
              <td>
                Встановлює інтервал збільшення значення числового поля або
                повзунка.
              </td>
            </tr>
            <tr>
              <td>type</td>
              <td>
                Повідомляє браузеру, до якого типу належить елемент форми.
              </td>
            </tr>
            <tr>
              <td>value</td>
              <td>Задає значення елемента.</td>
            </tr>
            <tr>
              <td>width</td>
              <td>
                Встановлює ширину елемента форми. Тільки для &lt;input
                type="image"&gt;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<ins>",
    description:
      "Тег <ins> (від англ. inserted - вставлений) визначає текст, котрий був доданий в нову версію документу.",
    code: `<p>Це <ins>приклад</ins> тексту.</p>`,
    preview: (
      <div>
        <p>
          Це <ins>приклад</ins> тексту.
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cite</td>
              <td>
                Вказує посилання на документ, де наведена причина редагування
                тексту і інші подробиці.
              </td>
            </tr>
            <tr>
              <td>datetime</td>
              <td>Дата і час редагування тексту.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<kbd>",
    description:
      "Тег <kbd> (від англ. keyboard key - клавіша клавіатури) визначає клавішу клавіатури.",
    code: `<p> Це <kbd>CTRL</kbd> клавіша CTRL.</p>`,
    preview: (
      <div>
        <p>
          Це <kbd>CTRL</kbd> клавіша CTRL.
        </p>
      </div>
    ),
  },
  {
    title: "<keygen>",
    description:
      "Тег <keygen> (від англ. key generator - генератор ключів) визначає поле для введення ключа.",
    code: `<form>
 <keygen>
</form>`,
    preview: (
      <div>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>autofocus</td>
              <td>
                Вказує, що елемент &lt;keygen&gt; повинен автоматично отримувати
                фокус при завантаженні сторінки.
              </td>
            </tr>
            <tr>
              <td>challenge</td>
              <td>
                Вказує, що значення елемента &lt;keygen&gt; повинно змінюватись
                при відправці форми.
              </td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Вимикає &lt;keygen&gt; елемент.</td>
            </tr>
            <tr>
              <td>form</td>
              <td>
                Ідентифікатор форми до якої застосовується шифрування. Пов'язує
                генератор з формою.
              </td>
            </tr>
            <tr>
              <td>keytype</td>
              <td>Задає алгоритм шифрування ключа.</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Ім'я &lt;keygen&gt; елемента.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<label>",
    description:
      "Тег <label> (від англ. label - мітка) визначає мітку для елемента форми.",
    code: `<label for="username">Ім'я користувача:</label>
<input type="text" id="username" name="username">`,
    preview: (
      <div className="flex flex-col items-center gap-4">
        <label for="username">Ім'я користувача:</label>
        <input
          className="border border-gray-400 mb-2 rounded-2xl p-2"
          type="text"
          id="username"
          name="username"
        />
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис атрибута</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>for</td>
              <td>Ідентифікатор елемента, з яким буде пов'язано мітку.</td>
            </tr>
            <tr>
              <td>form</td>
              <td>Задає одну або кілька форм до яких належить мітка.</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<legend></legend>",
    description:
      "Заголовок до елементів, що згруповані за допомогою тега `fieldset`.",
    code: `<fieldset>
  <legend>Форма реєстрації</legend>
  <!-- Інші елементи форми -->
</fieldset>`,
    preview: (
      <div>
        <fieldset>
          <legend>Форма реєстрації</legend>
          <p>Тут будуть елементи форми</p>
        </fieldset>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>align</td>
              <td>Визначає вирівнювання заголовка (застарілий)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<li></li>",
    description: "Визначає елемент списку.",
    code: `<ul>
  <li>Перший пункт</li>
  <li>Другий пункт</li>
</ul>`,
    preview: (
      <div>
        <ul>
          <li>Перший пункт</li>
          <li>Другий пункт</li>
        </ul>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>Встановлює номер пункта для впорядкованого списку</td>
            </tr>
            <tr>
              <td>type</td>
              <td>Визначає тип маркера (застарілий)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<link>",
    description:
      "Тег `link` служить для зв'язку html-документа із зовнішнім файлом.",
    code: `<link rel="stylesheet" href="styles.css">
<link rel="icon" href="favicon.ico">`,
    preview: (
      <div>
        <p>Цей тег не має візуального відображення на сторінці</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>href</td>
              <td>Шлях до зв'язаного ресурсу</td>
            </tr>
            <tr>
              <td>rel</td>
              <td>Визначає відношення між документами</td>
            </tr>
            <tr>
              <td>type</td>
              <td>MIME-тип зв'язаного ресурсу</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<main></main>",
    description: "Визначає основний зміст документа.",
    code: `<main>
  <h1>Головний заголовок</h1>
  <p>Основний вміст сторінки</p>
</main>`,
    preview: (
      <div>
        <main style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h1>Головний заголовок</h1>
          <p>Основний вміст сторінки</p>
        </main>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<map></map>",
    description: "Визначає карту-зображення для картинки",
    code: `<img src="map.jpg" usemap="#image-map">
<map name="image-map">
  <area shape="rect" coords="34,44,270,350" href="#">
</map>`,
    preview: (
      <div>
        <img src={map} usemap="#image-map" alt="Приклад карти" />
        <map name="image-map">
          <area
            shape="rect"
            coords="34,44,270,350"
            href="#"
            alt="Прямокутна область"
          />
        </map>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>Ім'я карти, що зв'язує її з зображенням</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<mark></mark>",
    description: "Виділяє текст жовтим",
    code: `<p>Це <mark>виділений</mark> текст</p>`,
    preview: (
      <div>
        <p>
          Це <mark>виділений</mark> текст
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<menu></menu>",
    description: "Відображає список пунктів меню.",
    code: `<menu>
  <li><button>Копіювати</button></li>
  <li><button>Вставити</button></li>
</menu>`,
    preview: (
      <div>
        <menu style={{ listStyle: "none", padding: 0 }}>
          <li>
            <button style={{ margin: "5px" }}>Копіювати</button>
          </li>
          <li>
            <button style={{ margin: "5px" }}>Вставити</button>
          </li>
        </menu>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>Визначає тип меню (context, toolbar)</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Мітка для меню</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<menuitem>",
    description:
      "Додає нові пункти в контекстне меню (застарілий, не підтримується в сучасних браузерах)",
    code: `<menu type="context" id="ctxmenu">
  <menuitem label="Зберегти" icon="save.png"></menuitem>
</menu>`,
    preview: (
      <div>
        <p>Цей тег більше не підтримується сучасними браузерами</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>label</td>
              <td>Текст пункту меню</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Шлях до іконки</td>
            </tr>
            <tr>
              <td>type</td>
              <td>Тип пункту (checkbox, command, radio)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<meta>",
    description: "Визначає метадані документа",
    code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Опис сторінки">`,
    preview: (
      <div>
        <p>
          Метатеги не відображаються на сторінці, але важливі для SEO та
          налаштувань
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>charset</td>
              <td>Кодування символів</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Ім'я метаданих (viewport, description, keywords)</td>
            </tr>
            <tr>
              <td>content</td>
              <td>Зміст метатегу</td>
            </tr>
            <tr>
              <td>http-equiv</td>
              <td>HTTP-заголовок для імітації</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<meter></meter>",
    description: "Створює візуальну шкалу",
    code: `<meter value="0.6" min="0" max="1">60%</meter>`,
    preview: (
      <div>
        <p>
          Використання дискового простору:{" "}
          <meter value="0.6" min="0" max="1">
            60%
          </meter>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>Поточне значення</td>
            </tr>
            <tr>
              <td>min</td>
              <td>Мінімальне значення</td>
            </tr>
            <tr>
              <td>max</td>
              <td>Максимальне значення</td>
            </tr>
            <tr>
              <td>low</td>
              <td>Межа низького значення</td>
            </tr>
            <tr>
              <td>high</td>
              <td>Межа високого значення</td>
            </tr>
            <tr>
              <td>optimum</td>
              <td>Оптимальне значення</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<nav></nav>",
    description: "Набір навігаційних посилань",
    code: `<nav>
  <a href="/">Головна</a>
  <a href="/about">Про нас</a>
  <a href="/contact">Контакти</a>
</nav>`,
    preview: (
      <div>
        <nav
          style={{
            display: "flex",
            gap: "15px",
            padding: "10px",
            background: "green",
          }}
        >
          <a className="cursor-pointer">Головна</a>
          <a className="cursor-pointer">Про нас</a>
          <a className="cursor-pointer">Контакти</a>
        </nav>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<noscript></noscript>",
    description:
      "Визначає альтернативний контент для користувачів у котрих не працює JavaScript",
    code: `<noscript>
  <p>Будь ласка, увімкніть JavaScript для коректної роботи сайту</p>
</noscript>`,
    preview: (
      <div>
        <noscript>
          <p style={{ color: "red" }}>
            Будь ласка, увімкніть JavaScript для коректної роботи сайту
          </p>
        </noscript>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<object></object>",
    description: "Визначає вбудований об'єкт",
    code: `<object data="movie.swf" type="application/x-shockwave-flash">
  <param name="movie" value="movie.swf">
</object>`,
    preview: (
      <div>
        <object
          data="https://example.com/flash.swf"
          type="application/x-shockwave-flash"
          style={{ width: "300px", height: "200px", background: "#eee" }}
        >
          <p>Ваш браузер не підтримує Flash</p>
        </object>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>data</td>
              <td>URL вбудованого ресурсу</td>
            </tr>
            <tr>
              <td>type</td>
              <td>MIME-тип об'єкта</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Ширина об'єкта</td>
            </tr>
            <tr>
              <td>height</td>
              <td>Висота об'єкта</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<ol></ol>",
    description: "Визначає впорядкований список.",
    code: `<ol>
  <li>Перший пункт</li>
  <li>Другий пункт</li>
</ol>`,
    preview: (
      <div>
        <ol>
          <li>Перший пункт</li>
          <li>Другий пункт</li>
        </ol>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>Тип нумерації (1, A, a, I, i)</td>
            </tr>
            <tr>
              <td>start</td>
              <td>Початкове значення нумерації</td>
            </tr>
            <tr>
              <td>reversed</td>
              <td>Зворотній порядок нумерації</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<optgroup></optgroup>",
    description: "Групує список опцій.",
    code: `<select>
  <optgroup label="Фрукти">
    <option>Яблуко</option>
    <option>Банан</option>
  </optgroup>
  <optgroup label="Овочі">
    <option>Морква</option>
    <option>Картопля</option>
  </optgroup>
</select>`,
    preview: (
      <div>
        <select>
          <optgroup label="Фрукти">
            <option>Яблуко</option>
            <option>Банан</option>
          </optgroup>
          <optgroup label="Овочі">
            <option>Морква</option>
            <option>Картопля</option>
          </optgroup>
        </select>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>label</td>
              <td>Назва групи (обов'язковий атрибут)</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Відключає групу</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<option></option>",
    description: "Створює пункт списку.",
    code: `<select>
  <option value="apple">Яблуко</option>
  <option value="banana" selected>Банан</option>
</select>`,
    preview: (
      <div>
        <select>
          <option value="apple">Яблуко</option>
          <option value="banana" selected>
            Банан
          </option>
        </select>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>Значення, яке буде відправлено на сервер</td>
            </tr>
            <tr>
              <td>selected</td>
              <td>Визначає обраний пункт за замовчуванням</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Робить пункт недоступним для вибору</td>
            </tr>
            <tr>
              <td>label</td>
              <td>Альтернативний текст для відображення</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<output></output>",
    description: "Визначає результат розрахунку.",
    code: `<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="number" id="a" value="10"> +
  <input type="number" id="b" value="20"> =
  <output name="result" for="a b">30</output>
</form>`,
    preview: (
      <div>
        <form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
          <input type="number" id="a" value="10" style={{ width: "50px" }} /> +
          <input type="number" id="b" value="20" style={{ width: "50px" }} /> =
          <output name="result" for="a b">
            30
          </output>
        </form>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>for</td>
              <td>ID елементів, від яких залежить результат</td>
            </tr>
            <tr>
              <td>name</td>
              <td>Ім'я елемента</td>
            </tr>
            <tr>
              <td>form</td>
              <td>ID пов'язаної форми</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<p></p>",
    description: "Визначає текстовий абзац.",
    code: `<p>Це звичайний абзац тексту.</p>
<p>Це інший абзац.</p>`,
    preview: (
      <div>
        <p>Це звичайний абзац тексту.</p>
        <p>Це інший абзац.</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<param>",
    description: "Задає параметри для об'єктів.",
    code: `<object data="game.swf">
  <param name="quality" value="high">
</object>`,
    preview: (
      <div>
        <p>
          Цей тег використовується всередині &lt;object&gt; та не має
          візуального відображення
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>Ім'я параметра</td>
            </tr>
            <tr>
              <td>value</td>
              <td>Значення параметра</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<picture></picture>",
    description:
      "Контейнер для кількох елементів <source>, які підтримують елемент <img>",
    code: `<picture>
  <source media="(min-width: 1200px)" srcset="large.jpg">
  <source media="(min-width: 800px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Альтернативний текст">
</picture>`,
    preview: (
      <div>
        <picture>
          <source media="(min-width: 800px)" srcSet={map} />
          <img src={map} alt="Приклад" style={{ maxWidth: "100%" }} />
        </picture>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<pre></pre>",
    description: "Виводить попередньо відформатований текст.",
    code: `<pre>
function hello() {
  console.log("Hello, world!");
}
</pre>`,
    preview: (
      <div>
        <pre
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "4px",
            fontFamily: "monospace",
            whiteSpace: "pre",
            overflowX: "auto",
          }}
        >
          {`function hello() {
  console.log("Hello, world!");
}`}
        </pre>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<progress></progress>",
    description: "Відображає хід виконання завдання.",
    code: `<progress value="70" max="100">70%</progress>`,
    preview: (
      <div>
        <p>Завантаження файлу:</p>
        <progress value="70" max="100">
          70%
        </progress>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>Поточне значення прогресу</td>
            </tr>
            <tr>
              <td>max</td>
              <td>Максимальне значення (за замовчуванням 1)</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<q></q>",
    description: "Коротка цитата.",
    code: `<p>Як сказав Ейнштейн: <q>Все має бути максимально простим, але не простіше.</q></p>`,
    preview: (
      <div>
        <p>
          Як сказав Ейнштейн:{" "}
          <q>Все має бути максимально простим, але не простіше.</q>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cite</td>
              <td>URL джерела цитати</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<rp></rp>",
    description:
      "Що показати в браузеру, котрий не має підтримки рубінових анотацій.",
    code: `<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>`,
    preview: (
      <div>
        <ruby>
          漢 <rp>(</rp>
          <rt>Kan</rt>
          <rp>)</rp>字 <rp>(</rp>
          <rt>ji</rt>
          <rp>)</rp>
        </ruby>
        <p>
          <small>У сучасних браузерах дужки не відображаються</small>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<rt></rt>",
    description:
      "Додає анотацію зверху чи знизу від тексту (для рубінових анотацій).",
    code: `<ruby>
  漢 <rt>Kan</rt>
  字 <rt>ji</rt>
</ruby>`,
    preview: (
      <div>
        <ruby style={{ fontSize: "24px" }}>
          漢 <rt style={{ fontSize: "12px" }}>Kan</rt>字{" "}
          <rt style={{ fontSize: "12px" }}>ji</rt>
        </ruby>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<ruby></ruby>",
    description:
      "Додає пояснення до тексту (використовується для східноазійських мов).",
    code: `<ruby>
  東京 <rt>Tokyo</rt>
</ruby>`,
    preview: (
      <div>
        <ruby style={{ fontSize: "24px" }}>
          東京 <rt style={{ fontSize: "12px" }}>Tokyo</rt>
        </ruby>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<s></s>",
    description: "Визначає текст застарілим та закреслює його.",
    code: `<p><s>Ціна: 1000 грн</s> Нова ціна: 800 грн</p>`,
    preview: (
      <div>
        <p>
          <s>Ціна: 1000 грн</s> Нова ціна: 800 грн
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<samp></samp>",
    description: "Визначає текст як вивід програми або скрипта.",
    code: `<p>Помилка: <samp>File not found</samp></p>`,
    preview: (
      <div>
        <p>
          Помилка:{" "}
          <samp style={{ fontFamily: "monospace" }}>File not found</samp>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<script></script>",
    description: "Додає на веб-сторінку JavaScript скрипт.",
    code: `<script>
  alert('Привіт, світе!');
</script>`,
    preview: (
      <div>
        <p>Цей тег не має візуального відображення</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>src</td>
              <td>URL зовнішнього скрипта</td>
            </tr>
            <tr>
              <td>type</td>
              <td>MIME-тип скрипта</td>
            </tr>
            <tr>
              <td>async</td>
              <td>Асинхронне виконання</td>
            </tr>
            <tr>
              <td>defer</td>
              <td>Відкладенне виконання</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<section></section>",
    description: "Задає розділ документу.",
    code: `<section>
  <h2>Заголовок розділу</h2>
  <p>Вміст розділу...</p>
</section>`,
    preview: (
      <div>
        <section
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Заголовок розділу</h2>
          <p>Вміст розділу...</p>
        </section>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<select></select>",
    description: "Створює елемент введення у вигляді списку.",
    code: `<select>
  <option value="1">Перший пункт</option>
  <option value="2">Другий пункт</option>
</select>`,
    preview: (
      <div>
        <select style={{ padding: "5px", minWidth: "150px" }}>
          <option value="1">Перший пункт</option>
          <option value="2">Другий пункт</option>
        </select>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>Ім'я елемента для форми</td>
            </tr>
            <tr>
              <td>multiple</td>
              <td>Дозволяє вибирати кілька варіантів</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Кількість видимих рядків</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Відключає елемент</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<small></small>",
    description: "Відображає текст зі зменшеним розміром шрифту.",
    code: `<p>Основний текст <small>Додатковий дрібний текст</small></p>`,
    preview: (
      <div>
        <p>
          Основний текст <small>Додатковий дрібний текст</small>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<source>",
    description: "Визначає альтернативне джерело медіа-файлу для відтворення.",
    code: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
</video>`,
    preview: (
      <div>
        <p>
          Цей тег використовується всередині &lt;audio&gt; або &lt;video&gt;
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>src</td>
              <td>Шлях до медіафайлу</td>
            </tr>
            <tr>
              <td>type</td>
              <td>MIME-тип файлу</td>
            </tr>
            <tr>
              <td>media</td>
              <td>Медіа-запит для адаптивного вибору</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<span></span>",
    description: "Визначає унікальний ідентифікатор частини тексту.",
    code: `<p>Це <span style="color: red;">червоний</span> текст</p>`,
    preview: (
      <div>
        <p>
          Це <span style={{ color: "red" }}>червоний</span> текст
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<strike></strike>",
    description: "Відображає текст закресленим (застарілий тег).",
    code: `<p><strike>Закреслений текст</strike></p>`,
    preview: (
      <div>
        <p>
          <strike>Закреслений текст</strike>
        </p>
        <p>
          <small>
            Примітка: Замість &lt;strike&gt; використовуйте &lt;s&gt; або CSS
          </small>
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<strong></strong>",
    description: "Визначає важливий текст.",
    code: `<p>Це <strong>дуже важливий</strong> текст</p>`,
    preview: (
      <div>
        <p>
          Це <strong>дуже важливий</strong> текст
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<style></style>",
    description: "Визначає стиль елементів веб-сторінки.",
    code: `<style>
  body { font-family: Arial; }
  h1 { color: blue; }
</style>`,
    preview: (
      <div>
        <p>Цей тег не має візуального відображення</p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>type</td>
              <td>MIME-тип (за замовчуванням "text/css")</td>
            </tr>
            <tr>
              <td>media</td>
              <td>Для яких медіа застосовувати стилі</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<sub></sub>",
    description: "Відображає текст у вигляді нижнього індексу.",
    code: `<p>Формула води: H<sub>2</sub>O</p>`,
    preview: (
      <div>
        <p>
          Формула води: H<sub>2</sub>O
        </p>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    title: "<summary></summary>",
    description: "Визначає заголовок для тегу &lt;details&gt;.",
    code: `<details>
  <summary>Докладніше</summary>
  <p>Прихований вміст, який можна розгорнути</p>
</details>`,
    preview: (
      <div>
        <details
          style={{
            border: "1px solid #aaa",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <summary>Докладніше</summary>
          <p style={{ marginTop: "10px" }}>
            Прихований вміст, який можна розгорнути
          </p>
        </details>
        <table>
          <thead>
            <tr className="bg-gray-500">
              <th>Атрибут</th>
              <th>Опис</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>Не має унікальних атрибутів</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },

  {
    title: "<sup></sup>",
    description: "Відображає шрифт у вигляді верхнього індексу.",
    code: `<p>E = mc<sup>2</sup></p>`,
    preview: (
      <p>
        E = mc<sup>2</sup>
      </p>
    ),
  },
  {
    title: "<table></table>",
    description: "Задає таблицю на HTML-сторінці.",
    code: `<table>
  <tr>
    <th>Ім'я</th>
    <th>Вік</th>
  </tr>
  <tr>
    <td>Іван</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Марія</td>
    <td>25</td>
  </tr>
</table>`,
    preview: (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Іван</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Марія</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<tbody></tbody>",
    description: "Визначає тіло таблиці.",
    code: `<table>
  <thead>
    <tr>
      <th>Ім'я</th>
      <th>Вік</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Іван</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Марія</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`,
    preview: (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Іван</td>
            <td>30</td>
          </tr>
          <tr>
            <td>Марія</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<td></td>",
    description: "Визначає комірку таблиці.",
    code: `<table>
  <tr>
    <td>Рядок 1, Колонка 1</td>
    <td>Рядок 1, Колонка 2</td>
  </tr>
  <tr>
    <td>Рядок 2, Колонка 1</td>
    <td>Рядок 2, Колонка 2</td>
  </tr>
</table>`,
    preview: (
      <table>
        <tbody>
          <tr>
            <td>Рядок 1, Колонка 1</td>
            <td>Рядок 1, Колонка 2</td>
          </tr>
          <tr>
            <td>Рядок 2, Колонка 1</td>
            <td>Рядок 2, Колонка 2</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<textarea></textarea>",
    description: "Область введення багаторядкового тексту.",
    code: `<textarea rows="4" cols="50">
Введіть тут текст...
</textarea>`,
    preview: (
      <textarea rows="4" cols="50">
        Введіть тут текст...
      </textarea>
    ),
  },
  {
    title: "<tfoot></tfoot>",
    description: "Задає нижній колонтитул таблиці.",
    code: `<table>
  <tr>
    <th>Сума</th>
    <td>100 грн</td>
  </tr>
  <tfoot>
    <tr>
      <th>Всього</th>
      <td>100 грн</td>
    </tr>
  </tfoot>
</table>`,
    preview: (
      <table>
        <tbody>
          <tr>
            <th>Сума</th>
            <td>100 грн</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Всього</th>
            <td>100 грн</td>
          </tr>
        </tfoot>
      </table>
    ),
  },
  {
    title: "<th></th>",
    description: "Визначає клітинку-заголовок таблиці.",
    code: `<table>
  <tr>
    <th>Ім'я</th>
    <th>Вік</th>
  </tr>
  <tr>
    <td>Іван</td>
    <td>30</td>
  </tr>
</table>`,
    preview: (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Іван</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<thead></thead>",
    description: "Визначає групу заголовків HTML-таблиці.",
    code: `<table>
  <thead>
    <tr>
      <th>Ім'я</th>
      <th>Вік</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Іван</td>
      <td>30</td>
    </tr>
  </tbody>
</table>`,
    preview: (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Іван</td>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<time></time>",
    description: "Визначає час або дату.",
    code: `<p>Опубліковано <time datetime="2023-10-27">27 жовтня 2023</time></p>`,
    preview: (
      <p>
        Опубліковано <time dateTime="2023-10-27">27 жовтня 2023</time>
      </p>
    ),
  },
  {
    title: "<title></title>",
    description: "Визначає заголовок веб-сторінки.",
    code: `<head>
  <title>Заголовок сторінки</title>
</head>`,
    preview: (
      <p className="text-sm italic text-gray-600">
        (Заголовок відображається у вкладці браузера)
      </p>
    ),
  },
  {
    title: "<tr></tr>",
    description: "Визначає рядок в таблиці.",
    code: `<table>
  <tr>
    <td>Комірка 1</td>
    <td>Комірка 2</td>
  </tr>
</table>`,
    preview: (
      <table>
        <tbody>
          <tr>
            <td>Комірка 1</td>
            <td>Комірка 2</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "<track>",
    description: "Визначає текстову доріжку до медіа-елементів.",
    code: `<video controls>
  <source src="video.mp4" type="video/mp4">
  <track kind="subtitles" src="subtitles_uk.vtt" srclang="uk" label="Українська">
</video>`,
    preview: (
      <div className="flex flex-col items-center">
      <video controls style={{ maxWidth: "300px" }}>
        <source src={video} type="video/mp4" />
        <track
          kind="subtitles"
          src="subtitles_uk.vtt"
          srclang="uk"
          label="Українська"
        />
        Ваш браузер не підтримує відтворення відео.
      </video>
      </div>
    ),
  },
  {
    title: "<tt></tt>",
    description: "Відображає текст моношининним шрифтом.",
    code: `<p>Текст <tt>моноширинним</tt> шрифтом.</p>`,
    preview: (
      <p>
        Текст <tt>моноширинним</tt> шрифтом.
      </p>
    ),
  },
  {
    title: "<u></u>",
    description: "Визначає підкреслений текст.",
    code: `<p><u>Підкреслений текст</u></p>`,
    preview: (
      <p>
        <u>Підкреслений текст</u>
      </p>
    ),
  },
  {
    title: "<ul></ul>",
    description: "Визначає позначений(ненумерований) список.",
    code: `<ul>
  <li>Пункт 1</li>
  <li>Пункт 2</li>
  <li>Пункт 3</li>
</ul>`,
    preview: (
      <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
      </ul>
    ),
  },
  {
    title: "<var></var>",
    description:
      "Використовується для виділення змінних з комп'ютерних програм.",
    code: `<p>Значення змінної <var>x</var> дорівнює 10.</p>`,
    preview: (
      <p>
        Значення змінної <var>x</var> дорівнює 10.
      </p>
    ),
  },
  {
    title: "<video></video>",
    description: "Відображає відео на сайті.",
    code: `<video controls width="300">
  <source src="video.mp4" type="video/mp4">
  Ваш браузер не підтримує відтворення відео.
</video>`,
    preview: (
      <div className="flex flex-col items-center">
      <video controls width="300">
        <source src={video} type="video/mp4" />
        Ваш браузер не підтримує відтворення відео.
      </video>
      </div>
    ),
  },
  {
    title: "<wbr>",
    description:
      "Вказує браузеру місце, де допускається робити перенос рядка в тексті.",
    code: `<p>Дужедовгесловоякеможебутиперенесено<wbr>нановийрядок.</p>`,
    preview: (
      <p>
        Дужедовгесловоякеможебутиперенесено
        <wbr />
        <br />нановийрядок.
      </p>
    ),
  }
];
