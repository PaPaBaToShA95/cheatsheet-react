import React from "react";

export const TailwindCheats = () => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">📚 Tailwind CSS CheatSheet</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="text-xl px-6 py-2 border-b">CSS</th>
            <th className="text-xl px-6 py-2 border-b">Tailwind</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900">
          <tr>
            <td className="text-xl px-6 py-2 border-b">border-radius: 16px;</td>
            <td className="text-xl px-6 py-2 border-b">rounded-s-2xl</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">color: #ff0000;</td>
            <td className="text-xl px-6 py-2 border-b">text-red-500</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">background-color: #0000ff;</td>
            <td className="text-xl px-6 py-2 border-b">bg-blue-500</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">font-size: 18px;</td>
            <td className="text-xl px-6 py-2 border-b">text-xl</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">font-weight: bold;</td>
            <td className="text-xl px-6 py-2 border-b">font-bold</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">padding: 10px 20px;</td>
            <td className="text-xl px-6 py-2 border-b">px-5 py-2.5</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">margin: 0 auto;</td>
            <td className="text-xl px-6 py-2 border-b">mx-auto</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">display: flex;</td>
            <td className="text-xl px-6 py-2 border-b">flex</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">justify-content: center;</td>
            <td className="text-xl px-6 py-2 border-b">justify-center</td>
          </tr>
          <tr>
            <td className="text-xl px-6 py-2 border-b">align-items: center;</td>
            <td className="text-xl px-6 py-2 border-b">items-center</td>
          </tr>
          <tr>
      <td className="text-xl px-6 py-2 border-b">background-color: #f0f0f0;</td>
      <td className="text-xl px-6 py-2 border-b">bg-gray-100</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">background-color: red;</td>
      <td className="text-xl px-6 py-2 border-b">bg-red-500</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">background-color: #fff;</td>
      <td className="text-xl px-6 py-2 border-b">bg-white</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">color: #000;</td>
      <td className="text-xl px-6 py-2 border-b">text-black</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">color: #fff;</td>
      <td className="text-xl px-6 py-2 border-b">text-white</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">font-family: Arial, sans-serif;</td>
      <td className="text-xl px-6 py-2 border-b">font-sans</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">font-weight: bold;</td>
      <td className="text-xl px-6 py-2 border-b">font-bold</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">font-size: 16px;</td>
      <td className="text-xl px-6 py-2 border-b">text-base</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">font-size: 20px;</td>
      <td className="text-xl px-6 py-2 border-b">text-xl</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">line-height: 1.5;</td>
      <td className="text-xl px-6 py-2 border-b">leading-6</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">line-height: 2;</td>
      <td className="text-xl px-6 py-2 border-b">leading-8</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">border: 1px solid #ccc;</td>
      <td className="text-xl px-6 py-2 border-b">border border-gray-300</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">border-radius: 8px;</td>
      <td className="text-xl px-6 py-2 border-b">rounded-lg</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">border-radius: 16px;</td>
      <td className="text-xl px-6 py-2 border-b">rounded-xl</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);</td>
      <td className="text-xl px-6 py-2 border-b">shadow-md</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);</td>
      <td className="text-xl px-6 py-2 border-b">shadow-lg</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">box-shadow: none;</td>
      <td className="text-xl px-6 py-2 border-b">shadow-none</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">width: 100%;</td>
      <td className="text-xl px-6 py-2 border-b">w-full</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">width: 50px;</td>
      <td className="text-xl px-6 py-2 border-b">w-12</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">width: 25%;</td>
      <td className="text-xl px-6 py-2 border-b">w-1/4</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">height: 100px;</td>
      <td className="text-xl px-6 py-2 border-b">h-24</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">height: 50%;</td>
      <td className="text-xl px-6 py-2 border-b">h-1/2</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">height: 100vh;</td>
      <td className="text-xl px-6 py-2 border-b">h-screen</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: flex; justify-content: center; align-items: center;</td>
      <td className="text-xl px-6 py-2 border-b">flex justify-center items-center</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: grid; grid-template-columns: repeat(3, 1fr);</td>
      <td className="text-xl px-6 py-2 border-b">grid grid-cols-3</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-template-rows: 100px auto;</td>
      <td className="text-xl px-6 py-2 border-b">grid grid-rows-[100px_auto]</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">position: absolute;</td>
      <td className="text-xl px-6 py-2 border-b">absolute</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">position: fixed;</td>
      <td className="text-xl px-6 py-2 border-b">fixed</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">position: relative;</td>
      <td className="text-xl px-6 py-2 border-b">relative</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">margin-top: 10px;</td>
      <td className="text-xl px-6 py-2 border-b">mt-2.5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">margin-bottom: 20px;</td>
      <td className="text-xl px-6 py-2 border-b">mb-5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">margin: 10px 20px 30px 40px;</td>
      <td className="text-xl px-6 py-2 border-b">m-10 mt-5 mb-7 ml-10 mr-10</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">padding: 20px;</td>
      <td className="text-xl px-6 py-2 border-b">p-5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">padding-top: 10px;</td>
      <td className="text-xl px-6 py-2 border-b">pt-2.5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">padding: 10px 20px;</td>
      <td className="text-xl px-6 py-2 border-b">px-5 py-2.5</td>
    </tr>
     <tr>
      <td className="text-xl px-6 py-2 border-b">text-align: center;</td>
      <td className="text-xl px-6 py-2 border-b">text-center</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-align: left;</td>
      <td className="text-xl px-6 py-2 border-b">text-left</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-align: right;</td>
      <td className="text-xl px-6 py-2 border-b">text-right</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-transform: uppercase;</td>
      <td className="text-xl px-6 py-2 border-b">uppercase</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-transform: lowercase;</td>
      <td className="text-xl px-6 py-2 border-b">lowercase</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-transform: capitalize;</td>
      <td className="text-xl px-6 py-2 border-b">capitalize</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">letter-spacing: 1px;</td>
      <td className="text-xl px-6 py-2 border-b">tracking-wide</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">letter-spacing: 2px;</td>
      <td className="text-xl px-6 py-2 border-b">tracking-wider</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">word-spacing: 2px;</td>
      <td className="text-xl px-6 py-2 border-b">tracking-wider</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);</td>
      <td className="text-xl px-6 py-2 border-b">text-shadow-[1px_1px_2px_rgba(0,_0,_0,_0.3)]</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: inline-block;</td>
      <td className="text-xl px-6 py-2 border-b">inline-block</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: block;</td>
      <td className="text-xl px-6 py-2 border-b">block</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: inline;</td>
      <td className="text-xl px-6 py-2 border-b">inline</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">overflow: hidden;</td>
      <td className="text-xl px-6 py-2 border-b">overflow-hidden</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">overflow: scroll;</td>
      <td className="text-xl px-6 py-2 border-b">overflow-scroll</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">visibility: hidden;</td>
      <td className="text-xl px-6 py-2 border-b">invisible</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">visibility: visible;</td>
      <td className="text-xl px-6 py-2 border-b">visible</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">position: sticky;</td>
      <td className="text-xl px-6 py-2 border-b">sticky</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">top: 0;</td>
      <td className="text-xl px-6 py-2 border-b">top-0</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">z-index: 10;</td>
      <td className="text-xl px-6 py-2 border-b">z-10</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">opacity: 0.5;</td>
      <td className="text-xl px-6 py-2 border-b">opacity-50</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">opacity: 1;</td>
      <td className="text-xl px-6 py-2 border-b">opacity-100</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transition: all 0.3s ease;</td>
      <td className="text-xl px-6 py-2 border-b">transition-all duration-300 ease-in-out</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transition: opacity 0.5s;</td>
      <td className="text-xl px-6 py-2 border-b">transition-opacity duration-500</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transform: rotate(45deg);</td>
      <td className="text-xl px-6 py-2 border-b">rotate-45</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transform: scale(1.5);</td>
      <td className="text-xl px-6 py-2 border-b">scale-150</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transform: translateX(100px);</td>
      <td className="text-xl px-6 py-2 border-b">translate-x-24</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">transform: translateY(-50px);</td>
      <td className="text-xl px-6 py-2 border-b">translate-y-[-50px]</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: flex;</td>
      <td className="text-xl px-6 py-2 border-b">flex</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">flex-direction: row;</td>
      <td className="text-xl px-6 py-2 border-b">flex-row</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">flex-direction: column;</td>
      <td className="text-xl px-6 py-2 border-b">flex-col</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">justify-content: flex-start;</td>
      <td className="text-xl px-6 py-2 border-b">justify-start</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">justify-content: center;</td>
      <td className="text-xl px-6 py-2 border-b">justify-center</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">justify-content: flex-end;</td>
      <td className="text-xl px-6 py-2 border-b">justify-end</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-items: center;</td>
      <td className="text-xl px-6 py-2 border-b">items-center</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-items: flex-start;</td>
      <td className="text-xl px-6 py-2 border-b">items-start</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-items: flex-end;</td>
      <td className="text-xl px-6 py-2 border-b">items-end</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-items: stretch;</td>
      <td className="text-xl px-6 py-2 border-b">items-stretch</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-self: auto;</td>
      <td className="text-xl px-6 py-2 border-b">self-auto</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-self: center;</td>
      <td className="text-xl px-6 py-2 border-b">self-center</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-self: flex-start;</td>
      <td className="text-xl px-6 py-2 border-b">self-start</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">align-self: flex-end;</td>
      <td className="text-xl px-6 py-2 border-b">self-end</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">flex-wrap: wrap;</td>
      <td className="text-xl px-6 py-2 border-b">flex-wrap</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">flex-wrap: nowrap;</td>
      <td className="text-xl px-6 py-2 border-b">flex-nowrap</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">flex-wrap: wrap-reverse;</td>
      <td className="text-xl px-6 py-2 border-b">flex-wrap-reverse</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">display: grid;</td>
      <td className="text-xl px-6 py-2 border-b">grid</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-template-columns: 1fr 1fr;</td>
      <td className="text-xl px-6 py-2 border-b">grid-cols-2</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-template-columns: 1fr 2fr 1fr;</td>
      <td className="text-xl px-6 py-2 border-b">grid-cols-[1fr,_2fr,_1fr]</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-template-rows: 1fr 2fr;</td>
      <td className="text-xl px-6 py-2 border-b">grid-rows-2</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-template-areas: "header header" "main sidebar";</td>
      <td className="text-xl px-6 py-2 border-b">grid-areas-[header,_header,_main,_sidebar]</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-column-gap: 20px;</td>
      <td className="text-xl px-6 py-2 border-b">gap-x-5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-row-gap: 20px;</td>
      <td className="text-xl px-6 py-2 border-b">gap-y-5</td>
    </tr>
    <tr>
      <td className="text-xl px-6 py-2 border-b">grid-gap: 20px 30px;</td>
      <td className="text-xl px-6 py-2 border-b">gap-5</td>
    </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};
