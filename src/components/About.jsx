import React from "react";
import OE from "../assets/image.png";


export const About = () => {
  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Про мене</h1>
        <br />
        <img src={OE} alt="OE" className="w-64 h-64 rounded-full mx-auto mb-4" />
        <p className="text-xl text-gray-400">
          Привіт! Мене звати Олексій Ермантраут, я FrontEnd розробник з України. <br />
          Я створив цей проєкт, щоб допомогти собі та іншим веб-розробникам
          швидше знаходити потрібну інформацію та команди. <br />
          <span className="text-3xl font-semibold">✨ Моя мета:</span>
          <br />
          Допомогти іншим розробникам а також ділитися своїм досвідом та знаннями у веб-розробці.
          Практикувти мої навички та додавати нові компоненти до проєкту.
          Головна ціль - це створити зручну та корисну шпаргалку для
          веб-розробників, яка охоплює всі основні технології та інструменти,
          які використовуються у FrontEnd розробці і не тільки.
          <br />
          <span className="text-3xl font-semibold">✨ Мої навички:</span>
          <br />
          <ul className="list-disc pl-6 space-y-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>GitHub</li>
            <li>Visual Studio Code</li>
            <li>WebPack</li>
            <li>Gulp</li>
            <li>Node.js</li>
          </ul>
          <br />
          Всі ці навички я здобув під час навчання у{" "}
          <a href="https://ithillel.ua/" className="text-blue-400">
            IT School Hillel
          </a>{" "}
          та постійно практикую у своїх проєктах. <br />
          <span className="text-3xl font-semibold">
            Хочу висловити подяку всім співробітникам школи та особливо
            викладачу{" "}
            <a
              href="https://www.linkedin.com/in/shalldon/"
              className="text-blue-400"
            >
              Павлу Дудич
            </a>{" "}
            за прекрасну подачу матеріалу та відміний підхід до роботи.{" "}
          </span>
          <br />
          <span className="text-3xl font-semibold">
            Всі бажаючі можуть перейти за моїм реферальним
            <a
              href="https://lms.ithillel.ua/r/XMeiXvkUtVW"
              className="text-blue-400"
            >
              {" "}
              посиланням
            </a> та самостійно ознайомитися з курсами, які пропонує школа.
          </span>
        </p>
      </header>
    </div>
  );};



export default About
