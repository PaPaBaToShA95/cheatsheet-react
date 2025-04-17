import React from "react";


export const Contact = () => {
  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">📖 Контакти</h1>
        <p className="text-xl text-gray-400">
          Робоча пошта:{" "}
          <a href="mailto:mawabel43@gmail.com" className="text-blue-400">
            mawabel43@gmail.com
          </a>
          <br />
          Telegram:{" "}
          <a href="http://t.me/papabatosha" className="text-blue-400">
            Натиснути щоб написати в Telegram
          </a>
          <br />
          GitHub:{" "}
          <a href="https://github.com/papabatosha95" className="text-blue-400">
            сторінка PaPaBaToShA95 на GitHub
          </a>
          <br />
          LinkedIn:{" "}
          <a
            href="www.linkedin.com/in/oleksiyermantraut"
            className="text-blue-400"
          >
            Олексій Ермантраут на LinkedIn
          </a>
          <br />
          Facebook:{" "}
          <a
            href="https://www.facebook.com/batosha.batosha"
            className="text-blue-400"
          >
            Олексій Ермантраут на Facebook
          </a>
          <br />
          Instagram:{" "}
          <a
            href="https://www.instagram.com/alekseiermantraut/"
            className="text-blue-400"
          >
            Олексій Ермантраут на Instagram
          </a>
        </p>
      </header>
    </div>
  );};



export default Contact;
