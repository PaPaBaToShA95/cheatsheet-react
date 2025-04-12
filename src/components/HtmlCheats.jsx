import React, { useState } from "react";

const Section = ({ title, children }) => (
  <section className="mb-8 border-b pb-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

const TagExample = ({
  tag,
  description,
  example,
  demo,
  attributes,
  selfClosing,
  notes,
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold">{tag}</h3>
    <p className="text-gray-400 mb-2">{description}</p>
    <div className="bg-gray-800 p-3 rounded text-sm font-mono whitespace-pre-wrap mb-2">
      {example}
    </div>
    {demo && <div className="mb-2">{demo}</div>}
    {attributes && (
      <p className="text-sm text-yellow-300">
        Атрибути: {attributes.join(", ")}
      </p>
    )}
    {selfClosing && <p className="text-sm text-green-300">Самозакривний тег</p>}
    {notes && <p className="text-sm text-blue-300">Примітка: {notes}</p>}
  </div>
);

export const HtmlCheats = () => {
  const [formData, setFormData] = useState({
    text: "",
    password: "",
    email: "",
    search: "",
    tel: "",
    url: "",
    number: "42",
    range: "50",
    date: "",
    time: "",
    datetimeLocal: "",
    month: "",
    week: "",
    color: "#ff0000",
    checkbox: false,
    radio: "option1",
    file: null,
    select: "",
    textarea: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  return (
    <div className="html-reference-container p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          📚 Повний довідник HTML тегів
        </h1>
        <p className="text-xl text-gray-400">
          Усі HTML-елементи з прикладами використання
        </p>
      </header>
      <Section title="📌 Основні теги">
        <TagExample
          tag="<!DOCTYPE>"
          description="Оголошення типу документу"
          example={`<!DOCTYPE html>`}
          notes="Має бути першим елементом у документі"
        />
        <TagExample
          tag="<html>"
          description="Кореневий елемент документу"
          example={`<html lang="uk">\n  \n</html>`}
          attributes={["lang", "manifest", "xmlns"]}
        />
        <TagExample
          tag="<head>"
          description="Метадані документу"
          example={`<head>\n  <meta charset="UTF-8">\n  <title>Моя сторінка</title>\n</head>`}
        />
        <TagExample
          tag="<title>"
          description="Заголовок сторінки (вкладки)"
          example={`<title>Мій сайт</title>`}
        />
        <TagExample
          tag="<body>"
          description="Тіло документу"
          example={`<body>\n  <h1>Привіт, світ!</h1>\n</body>`}
          attributes={[
            "onafterprint",
            "onbeforeprint",
            "onbeforeunload",
            "onblur",
            "onerror",
            "onfocus",
            "onload",
            "onmessage",
            "onoffline",
            "ononline",
            "onpopstate",
            "onresize",
            "onscroll",
            "onsearch",
            "onsubmit",
            "onunload",
          ]}
        />
        <TagExample
          tag="<meta>"
          description="Метадані"
          example={`<meta charset="UTF-8">\n<meta name="description" content="Опис сторінки">`}
          attributes={["charset", "name", "content", "http-equiv", "property"]}
        />
        <TagExample
          tag="<link>"
          description="Підключення зовнішніх ресурсів"
          example={`<link rel="stylesheet" href="styles.css">\n<link rel="icon" href="favicon.ico">`}
          attributes={[
            "rel",
            "href",
            "type",
            "sizes",
            "media",
            "hreflang",
            "crossorigin",
            "integrity",
          ]}
        />
        <TagExample
          tag="<style>"
          description="Вбудовані CSS-стилі"
          example={`<style>\n  body { color: #333; }\n</style>`}
          attributes={["type", "media", "nonce", "scoped"]}
        />
        <TagExample
          tag="<script>"
          description="Підключення JavaScript"
          example={`<script src="app.js"></script>\n<script>\n  console.log('Hello');\n</script>`}
          attributes={[
            "src",
            "async",
            "defer",
            "type",
            "charset",
            "crossorigin",
            "integrity",
            "nomodule",
            "nonce",
          ]}
        />
        <TagExample
          tag="<noscript>"
          description="Альтернативний вміст при вимкненому JS"
          example={`<noscript>\n  <p>Будь ласка, увімкніть JavaScript</p>\n</noscript>`}
        />
        <TagExample
          tag="<base>"
          description="Базовий URL для відносних посилань"
          example={`<base href="https://example.com/">`}
          attributes={["href", "target"]}
        />
      </Section>
      <Section title="🏗️ Структурні теги">
        <TagExample
          tag="<header>"
          description="Верхня частина сторінки або розділу"
          example={`<header>\n  <h1>Заголовок сайту</h1>\n  <nav>...</nav>\n</header>`}
        />
        <TagExample
          tag="<footer>"
          description="Нижній колонтитул"
          example={`<footer>\n  <p>&copy; 2023 Мій сайт</p>\n</footer>`}
        />
        <TagExample
          tag="<main>"
          description="Основний вміст сторінки"
          example={`<main>\n  <article>...</article>\n</main>`}
        />
        <TagExample
          tag="<section>"
          description="Тематичний розділ"
          example={`<section>\n  <h2>Про нас</h2>\n  <p>Текст розділу...</p>\n</section>`}
        />
        <TagExample
          tag="<article>"
          description="Незалежний блок контенту"
          example={`<article>\n  <h2>Назва статті</h2>\n  <p>Текст статті...</p>\n</article>`}
        />
        <TagExample
          tag="<aside>"
          description="Бічна панель або додатковий контент"
          example={`<aside>\n  <h3>Додаткова інформація</h3>\n  <p>...</p>\n</aside>`}
        />
        <TagExample
          tag="<nav>"
          description="Навігаційне меню"
          example={`<nav>\n  <ul>\n    <li><a href="/">Головна</a></li>\n  </ul>\n</nav>`}
        />
        <TagExample
          tag="<div>"
          description="Універсальний блоковий контейнер"
          example={`<div class="container">\n  \n</div>`}
          attributes={[
            "class",
            "id",
            "style",
            "accesskey",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "lang",
            "spellcheck",
            "tabindex",
            "title",
            "translate",
          ]}
        />
        <TagExample
          tag="<span>"
          description="Універсальний рядковий контейнер"
          example={`<p>Це <span class="highlight">важливий</span> текст</p>`}
          attributes={[
            "class",
            "id",
            "style",
            "accesskey",
            "contenteditable",
            "dir",
            "draggable",
            "hidden",
            "lang",
            "spellcheck",
            "tabindex",
            "title",
            "translate",
          ]}
        />
        <TagExample
          tag="<address>"
          description="Контактна інформація автора"
          example={`<address>\n  Автор: Іван Іванов<br>\n  E-mail: ivan@example.com\n</address>`}
        />
        <TagExample
          tag="<dialog>"
          description="Інтерактивне діалогове вікно"
          example={`<dialog open>\n  <p>Привіт!</p>\n</dialog>`}
          attributes={["open", "oncancel", "onclose"]}
        />
        <TagExample
          tag="<portal>"
          description="Вбудований незалежний документ"
          example={`<portal src="other.html"></portal>`}
          attributes={["src", "sandbox", "referrerpolicy"]}
        />
        <TagExample
          tag="<template>"
          description="Шаблон для клієнтського рендерингу"
          example={`<template>\n  <p>Прихований контент</p>\n</template>`}
        />
      </Section>
      <Section title="📜 Текст та заголовки">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((level) => (
            <TagExample
              key={level}
              tag={`<h${level}>`}
              description={`Заголовок ${level} рівня`}
              example={`<h${level}>Заголовок <span>{level}</span></h${level}>`}
              demo={
                <React.Fragment>
                  {/* Використовуємо стандартний тег h */}
                  {level === 1 && (
                    <h1 className="font-bold">Заголовок {level}</h1>
                  )}
                  {level === 2 && (
                    <h2 className="font-bold">Заголовок {level}</h2>
                  )}
                  {level === 3 && (
                    <h3 className="font-bold">Заголовок {level}</h3>
                  )}
                  {level === 4 && (
                    <h4 className="font-bold">Заголовок {level}</h4>
                  )}
                  {level === 5 && (
                    <h5 className="font-bold">Заголовок {level}</h5>
                  )}
                  {level === 6 && (
                    <h6 className="font-bold">Заголовок {level}</h6>
                  )}
                </React.Fragment>
              }
              attributes={["align", "class", "id", "style"]}
            />
          ))}
        </div>
        <TagExample
          tag="<p>"
          description="Абзац тексту"
          example={`<p>Це абзац тексту.</p>`}
          demo={
            <p>
              Це приклад абзацу тексту. Тут може бути довгий текст, який
              автоматично переноситься на нові рядки.
            </p>
          }
          attributes={["align", "class", "id", "style"]}
        />
        <TagExample
          tag="<br>"
          description="Перенос рядка"
          example={`Перший рядок<br>Другий рядок`}
          demo={
            <div>
              Перший рядок
              <br />
              Другий рядок
            </div>
          }
          selfClosing
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<hr>"
          description="Горизонтальна лінія"
          example={`<hr>`}
          demo={<hr className="my-4" />}
          selfClosing
          attributes={["align", "class", "id", "style"]}
        />
        <TagExample
          tag="<pre>"
          description="Текст зі збереженням форматування"
          example={`<pre>\n  function hello() {\n    console.log("Hello");\n  }\n</pre>`}
          demo={
            <pre className="bg-gray-800 p-3 rounded">
              {`function hello() {
  console.log("Hello");
}`}
            </pre>
          }
          attributes={["class", "id", "style", "wrap"]}
        />
        <TagExample
          tag="<blockquote>"
          description="Цитата"
          example={`<blockquote cite="https://example.com">\n  <p>Це цитата.</p>\n</blockquote>`}
          demo={
            <blockquote className="border-l-4 border-gray-500 pl-4 italic">
              <p>
                Це приклад цитати. Вона зазвичай виділяється відступами та
                курсивом.
              </p>
            </blockquote>
          }
          attributes={["cite", "class", "id", "style"]}
        />
        <TagExample
          tag="<q>"
          description="Коротка вбудована цитата"
          example={`<q>Це коротка цитата</q>`}
          demo={<q>Це коротка вбудована цитата</q>}
          attributes={["cite", "class", "id", "style"]}
        />
        <TagExample
          tag="<cite>"
          description="Цитування джерела"
          example={`<cite>Вікіпедія</cite>`}
          demo={<cite>Вікіпедія</cite>}
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<code>"
          description="Фрагмент коду"
          example={`<code>console.log()</code>`}
          demo={
            <code className="bg-gray-800 px-2 py-1 rounded">console.log()</code>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<var>"
          description="Змінна у коді"
          example={`<var>x</var> = 10`}
          demo={
            <div>
              <var>x</var> = 10
            </div>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<samp>"
          description="Вивід програми"
          example={`<samp>Hello World</samp>`}
          demo={
            <samp className="bg-gray-800 px-2 py-1 rounded font-mono">
              Hello World
            </samp>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<kbd>"
          description="Текст, який вводить користувач"
          example={`Натисніть <kbd>Enter</kbd>`}
          demo={
            <div>
              Натисніть{" "}
              <kbd className="bg-gray-700 px-2 py-1 rounded border border-gray-600">
                Enter
              </kbd>
            </div>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<sub>"
          description="Нижній індекс"
          example={`H<sub>2</sub>O`}
          demo={
            <div>
              H<sub>2</sub>O
            </div>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<sup>"
          description="Верхній індекс"
          example={`E = mc<sup>2</sup>`}
          demo={
            <div>
              E = mc<sup>2</sup>
            </div>
          }
          attributes={["class", "id", "style"]}
        />
        <TagExample
          tag="<time>"
          description="Час або дата"
          example={`<time datetime="2023-12-25">Різдво</time>`}
          demo={<time dateTime="2023-12-25">Різдво</time>}
          attributes={["datetime", "class", "id", "style"]}
        />
        <TagExample
          tag="<mark>"
          description="Виділений текст"
          example={`Це <mark>важливий</mark> текст`}
          demo={
            <div>
              Це <mark className="bg-y-200 text-yellow-900">важливий</mark>{" "}
              текст
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<small>"
          description="Дрібний текст"
          example={`<small>Додаткова інформація</small>`}
          demo={<small>Додаткова інформація</small>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<strong>"
          description="Важливий текст (семантично)"
          example={`<strong>Увага!</strong>`}
          demo={<strong>Увага!</strong>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<em>"
          description="Акцентований текст (семантично)"
          example={`Це <em>дуже</em> важливо`}
          demo={
            <div>
              Це <em>дуже</em> важливо
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<b>"
          description="Жирний текст (без семантики)"
          example={`<b>Жирний текст</b>`}
          demo={<b>Жирний текст</b>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<i>"
          description="Курсив (без семантики)"
          example={`<i>Курсивний текст</i>`}
          demo={<i>Курсивний текст</i>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<u>"
          description="Підкреслений текст"
          example={`<u>Підкреслений</u> текст`}
          demo={<u>Підкреслеений</u>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<s>"
          description="Закреслений текст"
          example={`<s>Закреслений</s> текст`}
          demo={<s>Закреслений</s>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<del>"
          description="Видалений текст"
          example={`<del>Стара ціна</del>`}
          demo={<del>Стара ціна</del>}
          attributes={["cite", "datetime", "class", "id", "style"]}
        />

        <TagExample
          tag="<ins>"
          description="Доданий текст"
          example={`<ins>Нова ціна</ins>`}
          demo={<ins>Нова ціна</ins>}
          attributes={["cite", "datetime", "class", "id", "style"]}
        />

        <TagExample
          tag="<dfn>"
          description="Визначення терміна"
          example={`<dfn>HTML</dfn> - мова розмітки`}
          demo={
            <div>
              <dfn>HTML</dfn> - мова розмітки
            </div>
          }
          attributes={["class", "id", "style", "title"]}
        />

        <TagExample
          tag="<abbr>"
          description="Абревіатура"
          example={`<abbr title="HyperText Markup Language">HTML</abbr>`}
          demo={<abbr title="HyperText Markup Language">HTML</abbr>}
          attributes={["title", "class", "id", "style"]}
        />

        <TagExample
          tag="<ruby>, <rt>, <rp>"
          description="Анотації (напр., фурігани)"
          example={`<ruby>漢<rt>かん</rt><rp>(</rp></ruby>`}
          demo={
            <ruby>
              漢 <rt>かん</rt>
              <rp>(</rp>
            </ruby>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<bdi>"
          description="Ізоляція напрямку тексту"
          example={`<bdi>текст з іншим напрямком</bdi>`}
          attributes={["dir", "class", "id", "style"]}
        />

        <TagExample
          tag="<bdo>"
          description="Перевизначення напрямку тексту"
          example={`<bdo dir="rtl">текст справа наліво</bdo>`}
          attributes={["dir", "class", "id", "style"]}
        />

        <TagExample
          tag="<wbr>"
          description="Можлива точка розриву слова"
          example={`ДужеДовгеСлово<wbr>якеМожеПереноситись`}
          demo={`ДужеДовгеСлово<wbr>якеМожеПереноситись`}
          selfClosing
          attributes={["class", "id", "style"]}
        />
      </Section>

      {/* Посилання та зображення */}
      <Section title="🔗 Посилання та зображення">
        <TagExample
          tag="<a>"
          description="Гіперпосилання"
          example={`<a href="https://example.com" target="_blank">Посилання</a>`}
          demo={
            <a href="#link" className="text-blue-400 hover:underline">
              Приклад посилання
            </a>
          }
          attributes={[
            "href",
            "target",
            "download",
            "rel",
            "hreflang",
            "type",
            "referrerpolicy",
            "ping",
          ]}
        />

        <TagExample
          tag="<img>"
          description="Зображення"
          example={`<img src="image.jpg" alt="Опис" width="200">`}
          demo={
            <img
              src="https://wallpaper.forfun.com/fetch/20/2032496c8644d978861803bee90e18c0.jpeg"
              alt="Приклад зображення"
              className="border border-gray-600"
              width="200"
            />
          }
          attributes={[
            "src",
            "alt",
            "width",
            "height",
            "loading",
            "srcset",
            "sizes",
            "crossorigin",
            "referrerpolicy",
            "ismap",
            "usemap",
          ]}
          selfClosing
        />

        <TagExample
          tag="<picture>"
          description="Адаптивне зображення"
          example={`<picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Опис">
</picture>`}
          demo={
            <picture>
              <source
                media="(min-width: 800px)"
                srcSet="https://cdn.fishki.net/upload/post/2021/02/16/3613245/tn/alberta-2297204-1280.jpg"
              />
              <source
                media="(min-width: 400px)"
                srcSet="https://cdn.fishki.net/upload/post/2021/02/16/3613245/tn/alberta-2297204-1280.jpg"
              />
              <img
                src="https://cdn.fishki.net/upload/post/2021/02/16/3613245/tn/alberta-2297204-1280.jpg"
                alt="Адаптивне зображення"
                className="border border-gray-600 w-full"
              />
            </picture>
          }
        />

        <TagExample
          tag="<figure>"
          description="Контейнер для ілюстрацій"
          example={`<figure>
  <img src="chart.png" alt="Діаграма">
  <figcaption>Рис. 1 - Діаграма</figcaption>
</figure>`}
          demo={
            <figure className="border border-gray-600 p-2 max-w-xs">
              <img
                src="https://cdn.fishki.net/upload/post/2021/02/16/3613245/tn/alberta-2297204-1280.jpg"
                alt="Приклад ілюстрації"
              />
              <figcaption className="text-center mt-2 text-sm">
                Рис. 1 - Приклад ілюстрації
              </figcaption>
            </figure>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<figcaption>"
          description="Підпис до figure"
          example={`<figcaption>Опис зображення</figcaption>`}
          demo={
            <figcaption className="text-center mt-2 text-sm">
              Приклад підпису
            </figcaption>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<map>"
          description="Клієнтська карта зображення"
          example={`<map name="workmap">
  <area shape="rect" coords="0,0,100,100" href="part1.html">
</map>
<img src="image.jpg" usemap="#workmap">`}
          attributes={["name", "class", "id", "style"]}
        />

        <TagExample
          tag="<area>"
          description="Область на map"
          example={`<area shape="circle" coords="50,50,30" href="page.html">`}
          attributes={[
            "shape",
            "coords",
            "href",
            "alt",
            "target",
            "download",
            "rel",
            "hreflang",
            "type",
            "referrerpolicy",
          ]}
          selfClosing
        />
      </Section>

      {/* Аудіо та відео */}
      <Section title="🔊 Аудіо та відео">
        <TagExample
          tag="<audio>"
          description="Аудіоконтент"
          example={`<audio controls src="audio.mp3">Ваш браузер не підтримує аудіо.</audio>`}
          demo={
            <audio
              controls
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            >
              Ваш браузер не підтримує аудіо.
            </audio>
          }
          attributes={[
            "src",
            "controls",
            "autoplay",
            "loop",
            "muted",
            "preload",
            "volume",
            "crossorigin",
          ]}
        />

        <TagExample
          tag="<video>"
          description="Відеоконтент"
          example={`<video controls width="320" height="240" src="video.mp4">Ваш браузер не підтримує відео.</video>`}
          demo={
            <video
              controls
              width="320"
              height="240"
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            >
              Ваш браузер не підтримує відео.
            </video>
          }
          attributes={[
            "src",
            "controls",
            "autoplay",
            "loop",
            "muted",
            "poster",
            "width",
            "height",
            "preload",
            "playsinline",
            "crossorigin",
          ]}
        />

        <TagExample
          tag="<source>"
          description="Декілька джерел для audio/video"
          example={`<audio controls>\n  <source src="audio.ogg" type="audio/ogg">\n  <source src="audio.mp3" type="audio/mpeg">\n</audio>`}
          attributes={["src", "type", "media", "srcset", "sizes"]}
          selfClosing
        />

        <TagExample
          tag="<track>"
          description="Текстові доріжки для audio/video (субтитри)"
          example={`<video controls src="video.mp4">\n  <track kind="subtitles" src="subtitles_uk.vtt" srclang="uk" label="Українські">\n</video>`}
          attributes={["kind", "src", "srclang", "label", "default"]}
          selfClosing
        />
      </Section>

      {/* Вбудований контент */}
      <Section title="📦 Вбудований контент">
        <TagExample
          tag="<iframe>"
          description="Вбудований фрейм"
          example={`<iframe src="https://example.com" height="200" width="300"></iframe>`}
          demo={
            <iframe
              src="https://wikipedia.org"
              height="200"
              className="w-full border"
            ></iframe>
          }
          attributes={[
            "src",
            "width",
            "height",
            "name",
            "sandbox",
            "allowfullscreen",
            "allow",
            "loading",
            "referrerpolicy",
          ]}
        />

        <TagExample
          tag="<embed>"
          description="Зовнішній додаток"
          example={`<embed type="application/pdf" src="file.pdf" width="500" height="375">`}
          attributes={["src", "type", "width", "height"]}
          selfClosing
        />

        <TagExample
          tag="<object>"
          description="Вбудований об'єкт"
          example={`<object data="file.swf" type="application/x-shockwave-flash"></object>`}
          attributes={["data", "type", "width", "height", "name", "form"]}
        />

        <TagExample
          tag="<param>"
          description="Параметр для object"
          example={`<object data="movie.swf">\n  <param name="quality" value="high">\n</object>`}
          attributes={["name", "value"]}
          selfClosing
        />
      </Section>

      {/* Списки */}
      <Section title="📋 Списки">
        <TagExample
          tag="<ul>"
          description="Маркований список"
          example={`<ul>
  <li>Пункт 1</li>
  <li>Пункт 2</li>
</ul>`}
          demo={
            <ul className="list-disc pl-5">
              <li>Пункт 1</li>
              <li>Пункт 2</li>
            </ul>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<ol>"
          description="Нумерований список"
          example={`<ol type="A" start="3">
  <li>Перший</li>
  <li>Другий</li>
</ol>`}
          demo={
            <ol className="list-decimal pl-5" type="A" start="3">
              <li>Перший</li>
              <li>Другий</li>
            </ol>
          }
          attributes={["type", "start", "reversed", "class", "id", "style"]}
        />

        <TagExample
          tag="<li>"
          description="Елемент списку"
          example={`<li>Елемент списку</li>`}
          demo={<li className="list-disc">Елемент списку</li>}
          attributes={["value", "class", "id", "style"]}
        />

        <TagExample
          tag="<dl>"
          description="Список визначень"
          example={`<dl>
  <dt>HTML</dt>
  <dd>Мова розмітки</dd>
</dl>`}
          demo={
            <dl>
              <dt className="font-bold">HTML</dt>
              <dd className="ml-4">Мова розмітки</dd>
            </dl>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<dt>"
          description="Термін у dl"
          example={`<dt>HTML</dt>`}
          demo={<dt className="font-bold">HTML</dt>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<dd>"
          description="Опис терміну у dl"
          example={`<dd>Мова розмітки</dd>`}
          demo={<dd className="ml-4">Мова розмітки</dd>}
          attributes={["class", "id", "style"]}
        />
      </Section>

      {/* Таблиці */}
      <Section title="📊 Таблиці">
        <TagExample
          tag="<table>"
          description="Таблиця"
          example={`<table>
  <caption>Заголовок таблиці</caption>
  <thead>
    <tr><th>Заголовок</th></tr>
  </thead>
  <tbody>
    <tr><td>Дані</td></tr>
  </tbody>
</table>`}
          demo={
            <table className="border border-gray-600 w-full">
              <caption className="caption-top mb-2 font-bold">
                Приклад таблиці
              </caption>
              <thead>
                <tr>
                  <th className="border border-gray-600 p-2 bg-gray-700">
                    Заголовок 1
                  </th>
                  <th className="border border-gray-600 p-2 bg-gray-700">
                    Заголовок 2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-2">Дані 1</td>
                  <td className="border border-gray-600 p-2">Дані 2</td>
                </tr>
              </tbody>
            </table>
          }
          attributes={[
            "border",
            "cellpadding",
            "cellspacing",
            "summary",
            "width",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<caption>"
          description="Заголовок таблиці"
          example={`<caption>Моя таблиця</caption>`}
          demo={
            <caption className="caption-top mb-2 font-bold">
              Приклад заголовку
            </caption>
          }
          attributes={["align", "class", "id", "style"]}
        />

        <TagExample
          tag="<thead>"
          description="Заголовок таблиці"
          example={`<thead>
  <tr><th>Заголовок</th></tr>
</thead>`}
          demo={
            <thead>
              <tr>
                <th className="border border-gray-600 p-2 bg-gray-700">
                  Приклад заголовку
                </th>
              </tr>
            </thead>
          }
          attributes={[
            "align",
            "char",
            "charoff",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<tbody>"
          description="Тіло таблиці"
          example={`<tbody>
  <tr><td>Дані</td></tr>
</tbody>`}
          demo={
            <tbody>
              <tr>
                <td className="border border-gray-600 p-2">Приклад даних</td>
              </tr>
            </tbody>
          }
          attributes={[
            "align",
            "char",
            "charoff",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<tfoot>"
          description="Підвал таблиці"
          example={`<tfoot>
  <tr><td>Підсумок</td></tr>
</tfoot>`}
          demo={
            <tfoot>
              <tr>
                <td className="border border-gray-600 p-2 bg-gray-700">
                  Приклад підвалу
                </td>
              </tr>
            </tfoot>
          }
          attributes={[
            "align",
            "char",
            "charoff",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<tr>"
          description="Рядок таблиці"
          example={`<tr><td>Дані</td></tr>`}
          demo={
            <tr>
              <td className="border border-gray-600 p-2">Приклад рядка</td>
            </tr>
          }
          attributes={[
            "align",
            "bgcolor",
            "char",
            "charoff",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<th>"
          description="Заголовок стовпця"
          example={`<th scope="col">Заголовок</th>`}
          demo={
            <th className="border border-gray-600 p-2 bg-gray-700">
              Приклад заголовку
            </th>
          }
          attributes={[
            "abbr",
            "align",
            "axis",
            "bgcolor",
            "char",
            "charoff",
            "colspan",
            "headers",
            "rowspan",
            "scope",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<td>"
          description="Комірка таблиці"
          example={`<td colspan="2">Дані</td>`}
          demo={<td className="border border-gray-600 p-2">Приклад комірки</td>}
          attributes={[
            "abbr",
            "align",
            "axis",
            "bgcolor",
            "char",
            "charoff",
            "colspan",
            "headers",
            "rowspan",
            "valign",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<col>"
          description="Стилізація стовпця"
          example={`<col span="2" style="background:yellow">`}
          attributes={[
            "span",
            "align",
            "char",
            "charoff",
            "valign",
            "width",
            "class",
            "id",
            "style",
          ]}
          selfClosing
        />

        <TagExample
          tag="<colgroup>"
          description="Група стовпців"
          example={`<colgroup>
  <col span="2" style="background:red">
</colgroup>`}
          attributes={[
            "span",
            "align",
            "char",
            "charoff",
            "valign",
            "width",
            "class",
            "id",
            "style",
          ]}
        />
      </Section>

      {/* Форми */}
      <Section title="📝 Форми">
        <TagExample
          tag="<form>"
          description="Форма"
          example={`<form action="/submit" method="post">
  
</form>`}
          demo={
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block mb-1">Приклад форми:</label>
                <input
                  type="text"
                  className="bg-gray-800 text-white p-2 rounded w-full"
                  placeholder="Введіть текст"
                />
              </div>
            </form>
          }
          attributes={[
            "accept-charset",
            "action",
            "autocomplete",
            "enctype",
            "method",
            "name",
            "novalidate",
            "target",
            "class",
            "id",
            "style",
            "onreset",
            "onsubmit",
          ]}
        />

        <TagExample
          tag="<input>"
          description="Поле введення"
          example={`<input type="text" name="username" required>`}
          demo={
            <div className="space-y-4">
              {[
                {
                  type: "text",
                  name: "text",
                  label: "Текст",
                  value: formData.text,
                },
                {
                  type: "password",
                  name: "password",
                  label: "Пароль",
                  value: formData.password,
                },
                {
                  type: "email",
                  name: "email",
                  label: "Email",
                  value: formData.email,
                },
                {
                  type: "search",
                  name: "search",
                  label: "Пошук",
                  value: formData.search,
                },
                {
                  type: "tel",
                  name: "tel",
                  label: "Телефон",
                  value: formData.tel,
                },
                { type: "url", name: "url", label: "URL", value: formData.url },
                {
                  type: "number",
                  name: "number",
                  label: "Число",
                  value: formData.number,
                },
                {
                  type: "range",
                  name: "range",
                  label: `Діапазон: ${formData.range}`,
                  value: formData.range,
                  extra: (
                    <input
                      type="range"
                      name="range"
                      value={formData.range}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="w-full"
                    />
                  ),
                },
                {
                  type: "date",
                  name: "date",
                  label: "Дата",
                  value: formData.date,
                },
                {
                  type: "time",
                  name: "time",
                  label: "Час",
                  value: formData.time,
                },
                {
                  type: "datetime-local",
                  name: "datetimeLocal",
                  label: "Дата й час",
                  value: formData.datetimeLocal,
                },
                {
                  type: "month",
                  name: "month",
                  label: "Місяць",
                  value: formData.month,
                },
                {
                  type: "week",
                  name: "week",
                  label: "Тиждень",
                  value: formData.week,
                },
                {
                  type: "color",
                  name: "color",
                  label: "Колір",
                  value: formData.color,
                },
                {
                  type: "checkbox",
                  name: "checkbox",
                  label: "Чекбокс",
                  checked: formData.checkbox,
                  extra: (
                    <input
                      type="checkbox"
                      name="checkbox"
                      checked={formData.checkbox}
                      onChange={handleInputChange}
                    />
                  ),
                },
                {
                  type: "radio",
                  name: "radio",
                  label: "Радіо (option1)",
                  extra: (
                    <input
                      type="radio"
                      name="radio"
                      value="option1"
                      checked={formData.radio === "option1"}
                      onChange={handleInputChange}
                    />
                  ),
                },
                {
                  type: "radio",
                  name: "radio",
                  label: "Радіо (option2)",
                  extra: (
                    <input
                      type="radio"
                      name="radio"
                      value="option2"
                      checked={formData.radio === "option2"}
                      onChange={handleInputChange}
                    />
                  ),
                },
                {
                  type: "file",
                  name: "file",
                  label: "Файл",
                  extra: (
                    <input
                      type="file"
                      name="file"
                      onChange={handleInputChange}
                    />
                  ),
                },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block mb-1 capitalize">{field.label}</label>
                  {field.extra || (
                    <input
                      type={field.type}
                      name={field.name}
                      value={field.value || ""}
                      checked={field.checked}
                      onChange={handleInputChange}
                      className="bg-gray-800 text-white p-2 rounded w-full"
                      list={field.list}
                    />
                  )}
                </div>
              ))}
            </div>
          }
          attributes={[
            "accept",
            "autocomplete",
            "checked",
            "dirname",
            "disabled",
            "form",
            "formaction",
            "formenctype",
            "formmethod",
            "formnovalidate",
            "formtarget",
            "height",
            "list",
            "max",
            "maxlength",
            "min",
            "multiple",
            "name",
            "pattern",
            "placeholder",
            "readonly",
            "required",
            "size",
            "src",
            "step",
            "type",
            "value",
            "width",
            "class",
            "id",
            "style",
          ]}
          selfClosing
        />

        <TagExample
          tag="<textarea>"
          description="Багаторядкове поле"
          example={`<textarea rows="4" cols="50">
Текст за замовчуванням
</textarea>`}
          demo={
            <textarea
              rows="4"
              className="bg-gray-800 text-white p-2 rounded w-full"
              value={formData.textarea}
              name="textarea"
              onChange={handleInputChange}
            />
          }
          attributes={[
            "cols",
            "dirname",
            "disabled",
            "form",
            "maxlength",
            "name",
            "placeholder",
            "readonly",
            "required",
            "rows",
            "wrap",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<button>"
          description="Кнопка"
          example={`<button type="submit">Надіслати</button>`}
          demo={
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Звичайна кнопка
              </button>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                Надіслати
              </button>
              <button
                type="reset"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
              >
                Скинути
              </button>
              <button
                disabled
                className="bg-gray-600 px-4 py-2 rounded cursor-not-allowed"
              >
                Неактивна
              </button>
            </div>
          }
          attributes={[
            "autofocus",
            "disabled",
            "form",
            "formaction",
            "formenctype",
            "formmethod",
            "formnovalidate",
            "formtarget",
            "name",
            "type",
            "value",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<select>"
          description="Випадаючий список"
          example={`<select name="country">
  <option value="ua">Україна</option>
</select>`}
          demo={
            <select
              name="select"
              value={formData.select}
              onChange={handleInputChange}
              className="bg-gray-800 text-white p-2 rounded w-full"
            >
              <option value="">Виберіть країну</option>
              <option value="ua">Україна</option>
              <option value="pl">Польща</option>
              <option value="de">Німеччина</option>
            </select>
          }
          attributes={[
            "autocomplete",
            "disabled",
            "form",
            "multiple",
            "name",
            "required",
            "size",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<option>"
          description="Пункт у select"
          example={`<option value="ua">Україна</option>`}
          demo={<option value="ua">Україна</option>}
          attributes={[
            "disabled",
            "label",
            "selected",
            "value",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<optgroup>"
          description="Група пунктів"
          example={`<optgroup label="Європа">
  <option>Україна</option>
</optgroup>`}
          demo={
            <optgroup label="Європа">
              <option>Україна</option>
              <option>Польща</option>
            </optgroup>
          }
          attributes={["disabled", "label", "class", "id", "style"]}
        />

        <TagExample
          tag="<datalist>"
          description="Список автозаповнення"
          example={`<input list="browsers">
<datalist id="browsers">
  <option value="Chrome">
</datalist>`}
          demo={
            <div>
              <input
                list="browsers"
                className="bg-gray-800 text-white p-2 rounded w-full"
                placeholder="Оберіть браузер"
              />
              <datalist id="browsers">
                <option value="Chrome" />
                <option value="Firefox" />
                <option value="Safari" />
              </datalist>
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<label>"
          description="Підпис до поля"
          example={`<label for="name">Ім'я:</label>`}
          demo={
            <label htmlFor="nameInput" className="block mb-1">
              Приклад підпису:
              <input
                id="nameInput"
                type="text"
                className="bg-gray-800 text-white p-2 rounded w-full mt-1"
              />
            </label>
          }
          attributes={["for", "form", "class", "id", "style"]}
        />

        <TagExample
          tag="<fieldset>"
          description="Група полів форми"
          example={`<fieldset>
  <legend>Персональні дані</legend>
  
</fieldset>`}
          demo={
            <fieldset className="border border-gray-600 p-4 rounded">
              <legend className="px-2 font-bold">Персональні дані</legend>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Ім'я"
                  className="bg-gray-800 text-white p-2 rounded w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 text-white p-2 rounded w-full"
                />
              </div>
            </fieldset>
          }
          attributes={["disabled", "form", "name", "class", "id", "style"]}
        />

        <TagExample
          tag="<legend>"
          description="Заголовок fieldset"
          example={`<legend>Персональні дані</legend>`}
          demo={<legend className="px-2 font-bold">Приклад заголовку</legend>}
          attributes={["align", "class", "id", "style"]}
        />

        <TagExample
          tag="<output>"
          description="Результат обчислень"
          example={`<output name="result">0</output>`}
          demo={
            <output name="result" className="bg-gray-800 p-2 rounded">
              0
            </output>
          }
          attributes={["for", "form", "name", "class", "id", "style"]}
        />

        <TagExample
          tag="<progress>"
          description="Індикатор прогресу"
          example={`<progress value="50" max="100"></progress>`}
          demo={<progress value="50" max="100" className="w-full"></progress>}
          attributes={["value", "max", "class", "id", "style"]}
        />

        <TagExample
          tag="<meter>"
          description="Вимірювач у певному діапазоні"
          example={`<meter value="3" min="0" max="10">3 out of 10</meter>`}
          demo={<meter value="3" min="0" max="10" className="w-32"></meter>}
          attributes={[
            "value",
            "min",
            "max",
            "low",
            "high",
            "optimum",
            "form",
            "class",
            "id",
            "style",
          ]}
        />
      </Section>

      {/* Інші теги */}
      <Section title="✨ Інші теги">
        <TagExample
          tag="<details>"
          description="Елемент, що розкривається"
          example={`<details>
  <summary>Деталі</summary>
  <p>Додаткова інформація.</p>
</details>`}
          demo={
            <details>
              <summary>Деталі</summary>
              <p>
                Це прихований контент, який розкривається при натисканні на
                заголовок.
              </p>
            </details>
          }
          attributes={["open", "class", "id", "style"]}
        />

        <TagExample
          tag="<summary>"
          description="Заголовок для details"
          example={`<summary>Деталі</summary>`}
          demo={<summary className="font-bold">Деталі</summary>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<data>"
          description="Зв'язує контент з машинно-зчитуваним значенням"
          example={`<data value="123">Номер</data>`}
          demo={<data value="123">Номер</data>}
          attributes={["value", "class", "id", "style"]}
        />

        <TagExample
          tag="<slot>"
          description="Заповнювач для контенту у веб-компонентах"
          example={`<slot name="header"></slot>`}
          attributes={["name", "class", "id", "style"]}
        />

        <TagExample
          tag="<canvas>"
          description="Графіка, що малюється через JavaScript"
          example={`<canvas id="myCanvas" width="200" height="100"></canvas>`}
          demo={
            <canvas
              id="myCanvas"
              width="200"
              height="100"
              className="border border-gray-600"
            ></canvas>
          }
          attributes={["width", "height", "class", "id", "style"]}
        />

        <TagExample
          tag="<noscript>"
          description="Вміст при вимкненому JavaScript"
          example={`<noscript>Ваш браузер не підтримує JavaScript!</noscript>`}
        />

        <TagExample
          tag="<template>"
          description="Шаблон HTML, що не відображається при завантаженні сторінки"
          example={`<template>\n  <h1>Привіт!</h1>\n</template>`}
        />

        <TagExample
          tag="<abbr>"
          description="Абревіатура або акронім"
          example={`<abbr title="World Wide Web">WWW</abbr>`}
          demo={<abbr title="World Wide Web">WWW</abbr>}
          attributes={["title", "class", "id", "style"]}
        />

        <TagExample
          tag="<acronym> (застарів)"
          description="Абревіатура (застарілий)"
          example={`<acronym title="HyperText Markup Language">HTML</acronym>`}
          demo={<acronym title="HyperText Markup Language">HTML</acronym>}
          attributes={["title", "class", "id", "style"]}
          notes="Використовуйте &lt;abbr&gt; замість."
        />

        <TagExample
          tag="<address>"
          description="Контактна інформація автора"
          example={`<address>Автор: Іван Іванов</address>`}
          demo={<address>Автор: Іван Іванов</address>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<article>"
          description="Самостійний контент"
          example={`<article><h2>Заголовок</h2></article>`}
          demo={
            <article className="border border-gray-600 p-4">
              <h2>Приклад статті</h2>
              <p>Це приклад самостійного контенту.</p>
            </article>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<aside>"
          description="Додатковий контент"
          example={`<aside>Бічна панель</aside>`}
          demo={
            <aside className="border border-gray-600 p-4 bg-gray-800 text-white">
              <h3>Бічна панель</h3>
              <p>Додаткова інформація.</p>
            </aside>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<bdi>"
          description="Ізоляція напрямку тексту"
          example={`<p>Користувач <bdi>اسم المستخدم</bdi> опублікував.</p>`}
          demo={
            <p>
              Користувач <bdi>اسم المستخدم</bdi> опублікував.
            </p>
          }
          attributes={["dir", "class", "id", "style"]}
        />

        <TagExample
          tag="<bdo>"
          description="Перевизначення напрямку тексту"
          example={`<bdo dir="rtl">Текст справа наліво</bdo>`}
          demo={<bdo dir="rtl">Текст справа наліво</bdo>}
          attributes={["dir", "class", "id", "style"]}
        />

        <TagExample
          tag="<cite>"
          description="Назва роботи"
          example={`<p>Як сказано в <cite>Книзі</cite>.</p>`}
          demo={
            <p>
              Як сказано в <cite>Книзі</cite>.
            </p>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<code>"
          description="Фрагмент коду"
          example={`<code>document.getElementById("demo");</code>`}
          demo={
            <code className="bg-gray-800 px-2 py-1 rounded font-mono">
              document.getElementById("demo");
            </code>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<data>"
          description="Зв'язує контент з машинно-зчитуваним значенням"
          example={`<li data-id="3">Продукт</li>`}
          demo={<li data-id="3">Продукт</li>}
          attributes={["value", "class", "id", "style"]}
        />

        <TagExample
          tag="<dfn>"
          description="Визначення терміна"
          example={`<dfn title="HyperText Markup Language">HTML</dfn>`}
          demo={<dfn title="HyperText Markup Language">HTML</dfn>}
          attributes={["title", "class", "id", "style"]}
        />

        <TagExample
          tag="<mark>"
          description="Виділений текст"
          example={`<p>Виділіть <mark>цей</mark> текст.</p>`}
          demo={
            <p>
              Виділіть{" "}
              <mark className="bg-yellow-200 text-yellow-900">цей</mark> текст.
            </p>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<meter>"
          description="Вимірювач у певному діапазоні"
          example={`<meter value="70" min="0" max="100">70%</meter>`}
          demo={<meter value="70" min="0" max="100" className="w-32"></meter>}
          attributes={[
            "value",
            "min",
            "max",
            "low",
            "high",
            "optimum",
            "form",
            "class",
            "id",
            "style",
          ]}
        />

        <TagExample
          tag="<nav>"
          description="Навігаційні посилання"
          example={`<nav><ul><li><a href="#">Головна</a></li></ul></nav>`}
          demo={
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#nav1" className="text-blue-400 hover:underline">
                    Головна
                  </a>
                </li>
                <li>
                  <a href="#nav2" className="text-blue-400 hover:underline">
                    Про нас
                  </a>
                </li>
              </ul>
            </nav>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<output>"
          description="Результат обчислень"
          example={`<output name="result">10</output>`}
          demo={
            <output name="result" className="bg-gray-800 p-2 rounded">
              10
            </output>
          }
          attributes={["for", "form", "name", "class", "id", "style"]}
        />

        <TagExample
          tag="<progress>"
          description="Індикатор прогресу"
          example={`<progress value="75" max="100"></progress>`}
          demo={<progress value="75" max="100" className="w-full"></progress>}
          attributes={["value", "max", "class", "id", "style"]}
        />

        <TagExample
          tag="<q>"
          description="Коротка вбудована цитата"
          example={`<p>Він сказав <q>Привіт!</q></p>`}
          demo={
            <p>
              Він сказав <q>Привіт!</q>
            </p>
          }
          attributes={["cite", "class", "id", "style"]}
        />

        <TagExample
          tag="<ruby>, <rt>, <rp>"
          description="Анотації (напр., фурігани)"
          example={`<ruby>東<rt>とう</rt></ruby>`}
          demo={
            <ruby>
              東 <rt>とう</rt>
            </ruby>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<s>"
          description="Закреслений текст"
          example={`<s>Стара ціна</s>`}
          demo={<s>Стара ціна</s>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<samp>"
          description="Вивід комп'ютерної програми"
          example={`<samp>Вивід програми</samp>`}
          demo={
            <samp className="bg-gray-800 px-2 py-1 rounded font-mono">
              Вивід програми
            </samp>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<small>"
          description="Дрібний текст"
          example={`<p><small>Авторські права 2023</small></p>`}
          demo={
            <p>
              <small>Авторські права 2023</small>
            </p>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<strong>"
          description="Важливий текст"
          example={`<strong>Увага!</strong>`}
          demo={<strong>Увага!</strong>}
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<sub>"
          description="Нижній індекс"
          example={`H<sub>2</sub>O`}
          demo={
            <div>
              H<sub>2</sub>O
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<sup>"
          description="Верхній індекс"
          example={`E = mc<sup>2</sup>`}
          demo={
            <div>
              E = mc<sup>2</sup>
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<time>"
          description="Дата/час"
          example={`<time datetime="2023-10-26">26 жовтня 2023</time>`}
          demo={<time datetime="2023-10-26">26 жовтня 2023</time>}
          attributes={["datetime", "pubdate", "class", "id", "style"]}
        />

        <TagExample
          tag="<var>"
          description="Змінна"
          example={`<var>x</var> = 5`}
          demo={
            <div>
              <var>x</var> = 5
            </div>
          }
          attributes={["class", "id", "style"]}
        />

        <TagExample
          tag="<wbr>"
          description="Можлива точка розриву слова"
          example={`ДужеДовге<wbr>Слово`}
          demo={`ДужеДовге<wbr>Слово`}
          selfClosing
          attributes={["class", "id", "style"]}
        />
      </Section>
    </div>
  );
};
