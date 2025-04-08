import React, { useState } from "react";

export const CssCheats = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [bgColor, setBgColor] = useState("#ffcc00");
  const [animation, setAnimation] = useState(false);
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const [boxShadow, setBoxShadow] = useState("10px 10px 15px rgba(0, 0, 0, 0.5)");
  const [border, setBorder] = useState("2px solid #000000");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">CSS Стилі</h1>
        <p className="text-xl text-gray-400">Базові стилі CSS для веб-сторінок та їх пояснення</p>
      </header>
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Текст і шрифти</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Властивість FONT</h3>
          <p className="mb-2">Скорочений запис (шрифт, розмір, стиль) <code>font</code>.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`.className{ font:italic bold 16px/1.5 Arial, sans-serif; }`}
          </div>
          <div className="mt-4">
            <div className="mt-[50px] mb-[50px] mx-auto w-fit italic font-bold text-base leading-relaxed font-sans">
              Цей елемент має наступні стилі: italic bold 16px/1.5 Arial, sans-serif.
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Сімейство шрифтів font-family</h3>
          <p className="mb-2">
            Властивість font-family може містити кілька шрифтів, при цьому шрифти розділяються комою.
            Якщо браузер не може знайти перший шрифт, він перевіряє наступний шрифт і т.д. Тому, останнім шрифтом завжди вказуйте один із стандартних шрифтів.
          </p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`font-family: 'Arial', sans-serif;`}
          </div>
          <div className="mt-4">
            <p className="italic font-bold text-base leading-relaxed font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.</p>
          </div>
        </div>

        {/* Additional Properties */}
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Розмір шрифту font-size</h3>
          <p className="mb-2">Властивість font-size встановлює розмір шрифту для тексту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`font-size: 16px;`}
          </div>
          <div className="mt-4">
            <p style={{ fontSize: '16px' }}>Цей текст має розмір 16px</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Товщина шрифту font-weight</h3>
          <p className="mb-2">Властивість font-weight визначає товщину шрифту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`font-weight: bold;`}
          </div>
          <div className="mt-4">
            <p style={{ fontWeight: 'bold' }}>Цей текст жирний.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Стиль шрифту font-style</h3>
          <p className="mb-2">Властивість font-style визначає стиль шрифту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`font-style: italic;`}
          </div>
          <div className="mt-4">
            <p style={{ fontStyle: 'italic' }}>Цей текст курсивом.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Висота рядка line-height</h3>
          <p className="mb-2">Властивість line-height встановлює висоту рядка для тексту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`line-height: 1.5;`}
          </div>
          <div className="mt-4">
            <p style={{ lineHeight: 1.5 }}>Цей текст має висоту рядка 1.5.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Вирівнювання тексту text-align</h3>
          <p className="mb-2">Властивість text-align задає вирівнювання тексту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`text-align: center;`}
          </div>
          <div className="mt-4" style={{ textAlign: 'center' }}>
            <p>Цей текст вирівняний по центру.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Тінь тексту text-shadow</h3>
          <p className="mb-2">Властивість text-shadow додає тінь до тексту.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`text-shadow: 2px 2px 4px black;`}
          </div>
          <div className="mt-4" style={{ textShadow: "2px 2px 4px black" }}>
            <p>Цей текст має тінь.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Відстань між літерами letter-spacing</h3>
          <p className="mb-2">Властивість letter-spacing визначає відстань між літерами.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`letter-spacing: 1px;`}
          </div>
          <div className="mt-4" style={{ letterSpacing: '1px' }}>
            <p>Відстань між літерами: 1px.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Відступ першого рядка text-indent</h3>
          <p className="mb-2">Властивість text-indent задає відступ першого рядка.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`text-indent: 20px;`}
          </div>
          <div className="mt-4" style={{ textIndent: '20px' }}>
            <p>Цей текст має відступ першого рядка.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Переповнення text-overflow</h3>
          <p className="mb-2">Властивість text-overflow визначає, як обробляти текст, що виходить за межі блоку.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`text-overflow: ellipsis;`}
          </div>
          <div className="mt-4 overflow-hidden white-space-nowrap">
            <p style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', width: '150px' }}>
              Цей текст занадто довгий, щоб уміститися в блоці.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Фон */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Фон</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Колір фону background-color</h3>
          <p className="mb-2">Властивість background-color встановлює колір фону елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`background-color: #f0f0f0;`}
          </div>
          <div className="mt-4" style={{ backgroundColor: bgColor }}>
            <p className="font-bold" style={{ color: getContrastColor(bgColor) }}>
              Фон: {bgColor}
            </p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Зображення фону background-image</h3>
          <p className="mb-2">Властивість background-image встановлює одне або кілька фонових зображень для елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`background-image: url("image.jpg");`}
          </div>
          <div className="mt-4">
            <div style={{ backgroundImage: `url("bg.jpg")`, height: '100px', backgroundSize: 'cover' }}>
              <p className="font-bold text-white">Цей блок має фонове зображення.</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Повторення фону background-repeat</h3>
          <p className="mb-2">Властивість background-repeat контролює, як фонове зображення повторюється.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`background-repeat: no-repeat;`}
          </div>
          <div className="mt-4" style={{ backgroundRepeat: 'no-repeat', height: '100px' }}>
            <p className="font-bold">Фон не повторюється.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Позиція фону background-position</h3>
          <p className="mb-2">Властивість background-position задає початкову позицію фону.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`background-position: center;`}
          </div>
          <div className="mt-4" style={{ backgroundPosition: 'center', height: '100px' }}>
            <p className="font-bold">Фон позиціонується по центру.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Розмір фону background-size</h3>
          <p className="mb-2">Властивість background-size контролює розміри фонового зображення.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`background-size: cover;`}
          </div>
          <div className="mt-4" style={{ backgroundSize: 'cover', height: '100px' }}>
            <p className="font-bold">Фонове зображення займає весь блок.</p>
          </div>
        </div>
      </div>

      {/* 3. Блокова модель */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Блокова модель (Box Model)</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Ширина і висота (width і height)</h3>
          <p className="mb-2">Властивості width і height встановлюють ширину та висоту області вмісту елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`width: 100px;`}
          </div>
          <div className="mt-4">
            <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: 'blue' }}>
              <p className="text-white font-bold">{width}px × {height}px</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Зовнішній відступ margin</h3>
          <p className="mb-2">Властивість margin задає зовнішній відступ елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`margin: 10px;`}
          </div>
          <div className="mt-4" style={{ margin: '10px', backgroundColor: 'red' }}>
            <p className="text-white">Цей блок має зовнішній відступ.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Внутрішній відступ padding</h3>
          <p className="mb-2">Властивість padding задає внутрішній відступ елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`padding: 15px;`}
          </div>
          <div className="mt-4" style={{ padding: '15px', backgroundColor: 'green' }}>
            <p className="text-white">Цей блок має внутрішній відступ.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Рамка (border)</h3>
          <p className="mb-2">Властивість border визначає ширину, стиль і колір рамки елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`border: 1px solid #000;`}
          </div>
          <div className="mt-4" style={{ border: '1px solid black', padding: '10px' }}>
            <p className="text-black">Цей блок має рамку.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Закруглення кутів border-radius</h3>
          <p className="mb-2">Властивість border-radius визначає закруглення кутів елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`border-radius: 10px;`}
          </div>
          <div className="mt-4" style={{ borderRadius: '10px', backgroundColor: 'orange', padding: '20px' }}>
            <p className="text-black">Цей блок має закруглені кути.</p>
          </div>
        </div>
      </div>

      {/* 4. Flexbox */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Flexbox</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Вирівнювання (justify-content і align-items)</h3>
          <p className="mb-2">Властивості justify-content і align-items керують вирівнюванням елементів у flex-контейнері.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`justify-content: center;`}
          </div>
          <div className="mt-4" style={{ display: 'flex', justifyContent: justifyContent, alignItems: alignItems }}>
            <div className="h-16 w-16 bg-red-500 rounded"></div>
            <div className="h-16 w-16 bg-blue-500 rounded"></div>
            <div className="h-16 w-16 bg-green-500 rounded"></div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Перенесення (flex-wrap)</h3>
          <p className="mb-2">Властивість flex-wrap контролює перенесення елементів у flex-контейнері.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`flex-wrap: wrap;`}
          </div>
          <div className="mt-4" style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div className="h-16 w-16 bg-red-500 rounded m-1"></div>
            <div className="h-16 w-16 bg-blue-500 rounded m-1"></div>
            <div className="h-16 w-16 bg-green-500 rounded m-1"></div>
            <div className="h-16 w-16 bg-yellow-500 rounded m-1"></div>
            <div className="h-16 w-16 bg-purple-500 rounded m-1"></div>
          </div>
        </div>
      </div>

      {/* 5. CSS Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">CSS Grid</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Тип контейнера display</h3>
          <p className="mb-2">Властивість display задає тип контейнера.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`display: grid;`}
          </div>
          <div className="mt-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <div className="h-16 bg-red-500 rounded"></div>
            <div className="h-16 bg-blue-500 rounded"></div>
            <div className="h-16 bg-green-500 rounded"></div>
            <div className="h-16 bg-yellow-500 rounded"></div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Визначення стовпців grid-template-columns</h3>
          <p className="mb-2">Властивість grid-template-columns задає кількість і розмір стовпців у grid-контейнері.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`grid-template-columns: 1fr 2fr;`}
          </div>
          <div className="mt-4" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px' }}>
            <div className="h-16 bg-red-500 rounded"></div>
            <div className="h-16 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>

   {/* 6. Анімація та переходи */}
<div className="space-y-6">
  <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Анімація та переходи</h2>

  <div className="bg-gray-800 p-4 rounded-xl">
    <h3 className="text-xl font-bold mb-2">Переходи (transition)</h3>
    <p className="mb-2">Властивість transition дозволяє змінювати значення властивостей плавно.</p>
    <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
      {`transition: all 0.3s ease;`}
    </div>
    <div className="mt-4">
      <div
        className="h-20 w-20 bg-blue-500 rounded cursor-pointer"
        style={{ transition: 'all 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <p className="text-white">Наведіть на мене</p>
      </div>
    </div>
  </div>
  </div>

      {/* 7. Трансформації */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Трансформації</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Трансформація (transform)</h3>
          <p className="mb-2">Властивість transform дозволяє обертати, масштабувати, нахиляти або зсувати елемент.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`transform: rotate(45deg);`}
          </div>
          <div className="mt-4" style={{ transform: 'rotate(45deg)', width: '100px', height: '100px', backgroundColor: 'yellow' }}>
            <p className="text-black">Цей блок обернений на 45 градусів.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Перспектива (perspective)</h3>
          <p className="mb-2">Властивість perspective задає глибину для 3D-перспективи.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`perspective: 500px;`}
          </div>
          <div className="mt-4" style={{ perspective: '500px' }}>
            <div style={{ transform: 'rotateY(45deg)', backgroundColor: 'purple', height: '100px', width: '100px' }}>
              <p className="text-white">Цей блок має 3D-перспективу.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Інші важливі властивості */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2 border-gray-600">Інші важливі властивості</h2>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Вигляд курсора (cursor)</h3>
          <p className="mb-2">Властивість cursor визначає вигляд курсора при наведенні на елемент.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`cursor: pointer;`}
          </div>
          <div className="mt-4" style={{ cursor: 'pointer', backgroundColor: 'lightgray', padding: '10px' }}>
            <p>Наведіть на цей блок, щоб побачити вигляд курсора.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Прозорість (opacity)</h3>
          <p className="mb-2">Властивість opacity задає прозорість елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`opacity: 0.5;`}
          </div>
          <div className="mt-4" style={{ opacity: 0.5, backgroundColor: 'blue', height: '100px' }}>
            <p className="text-white">Цей блок напівпрозорий.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Видимість (visibility)</h3>
          <p className="mb-2">Властивість visibility контролює видимість елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`visibility: hidden;`}
          </div>
          <div className="mt-4">
            <p style={{ visibility: 'hidden' }}>Цей текст прихований.</p>
            <p>Цей текст видимий.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Порядок накладання (z-index)</h3>
          <p className="mb-2">Властивість z-index задає порядок накладання елементів.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`z-index: 10;`}
          </div>
          <div className="mt-4" style={{ position: 'relative', zIndex: 10, backgroundColor: 'orange' }}>
            <p className="text-black">Цей блок має порядок накладання 10.</p>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="text-xl font-bold mb-2">Позиціонування (position)</h3>
          <p className="mb-2">Властивість position контролює позицію елемента.</p>
          <div className="bg-gray-900 p-3 rounded text-sm font-mono whitespace-pre-wrap">
            {`position: absolute;`}
          </div>
          <div className="mt-4" style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'lightblue' }}>
            <p className="text-black">Цей блок має абсолютне позиціонування.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getContrastColor = (hexColor) => {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125 ? '#000000' : '#FFFFFF';
};