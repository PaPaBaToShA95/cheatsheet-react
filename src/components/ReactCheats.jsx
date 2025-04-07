import React from "react";

// Компонент для відображення секцій
const Section = ({ title, children }) => (
  <section className="mb-8 border-b pb-4">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    {children}
  </section>
);

// Компонент для прикладів використання тегів або кодів
const TagExample = ({ tag, description, example, demo, notes }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold">{tag}</h3>
    <p className="text-gray-400 mb-2">{description}</p>
    <div className="bg-gray-800 p-3 rounded text-sm font-mono whitespace-pre-wrap mb-2">
      {example}
    </div>
    {demo && <div className="mb-2">{demo}</div>}
    {notes && <p className="text-sm text-blue-300">Примітка: {notes}</p>}
  </div>
);

export const ReactCheats = () => {
  return (
    <div className="react-reference-container p-6 max-w-7xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">📚 Повний довідник React</h1>
        <p className="text-xl text-gray-400">Усі аспекти роботи з React, включаючи хуки, контекст, маршрутизацію і багато іншого.</p>
      </header>

      {/* Секція: Основи React */}
      <Section title="📌 Основи React">
        <TagExample
          tag="useState"
          description="Хук для керування станом у функціональних компонентах."
          example={`const [state, setState] = useState(initialValue);\nsetState(newState);`}
          notes="Цей хук дозволяє створювати локальний стан у функціональних компонентах."
        />
        <TagExample
          tag="useEffect"
          description="Хук для виконання побічних ефектів у функціональних компонентах."
          example={`useEffect(() => {\n  // побічний ефект\n}, [dependencies]);`}
          notes="Застосовується для обробки асинхронних операцій, наприклад, завантаження даних."
        />
      </Section>

      {/* Секція: JSX */}
      <Section title="📌 JSX - Синтаксис у React">
        <TagExample
          tag="JSX"
          description="JSX дозволяє писати HTML-подібний код у JavaScript."
          example={`const element = <h1>Hello, world!</h1>;`}
          demo={<h1>Hello, world!</h1>}
          notes="JSX не є окремою мовою, це просто синтаксичний цукор для виклику `React.createElement`."
        />
        <TagExample
          tag="JSX Інтерполяція"
          description="Вставка значень у JSX за допомогою фігурних дужок."
          example={`const name = "Олексій";\nconst element = <h1>Привіт, {name}!</h1>;`}
          demo={<h1>Привіт, Олексій!</h1>}
          notes="Можна вставляти будь-які вирази в середину JSX за допомогою фігурних дужок."
        />
      </Section>

      {/* Секція: Компоненти */}
      <Section title="📌 Компоненти React">
        <TagExample
          tag="Компонент класу"
          description="Компоненти класу використовуються для створення компонентів з методами життєвого циклу."
          example={`class MyComponent extends React.Component {\n  render() {\n    return <div>My Component</div>;\n  }\n}`}
          demo={<div>My Component</div>}
          notes="Компоненти класів використовуються до введення хуків."
        />
        <TagExample
          tag="Компонент функціональний"
          description="Створення компонента за допомогою функцій."
          example={`const MyComponent = () => <div>My Component</div>;`}
          demo={<div>My Component</div>}
          notes="Функціональні компоненти є більш сучасним способом створення компонентів."
        />
      </Section>

      {/* Секція: Пропси (Props) */}
      <Section title="📌 Пропси (Props)">
        <TagExample
          tag="Передача пропсів"
          description="Передача даних від батьківського компонента до дочірнього через пропси."
          example={`const Parent = () => <Child message="Hello!" />;\nconst Child = ({ message }) => <h1>{message}</h1>;`}
          demo={<h1>Hello!</h1>}
          notes="Пропси дозволяють передавати дані від батьківського компонента до дочірнього."
        />
      </Section>

      {/* Секція: Стан (State) */}
      <Section title="📌 Стан (State)">
        <TagExample
          tag="useState"
          description="Хук для створення локального стану в функціональних компонентах."
          example={`const [count, setCount] = useState(0);\nsetCount(count + 1);`}
          notes="Стан компонентів зберігає і оновлює дані протягом життєвого циклу компонента."
        />
      </Section>

      {/* Секція: Події */}
      <Section title="📌 Обробка подій">
        <TagExample
          tag="Обробка події"
          description="Обробка подій за допомогою JSX."
          example={`const handleClick = () => alert('Clicked!');\n<button onClick={handleClick}>Click me</button>;`}
          demo={<button onClick={() => alert('Clicked!')}>Click me</button>}
          notes="Події у React обробляються як звичайні функції."
        />
      </Section>

      {/* Секція: Контекст */}
      <Section title="📌 Контекст (Context)">
        <TagExample
          tag="React Context"
          description="Context API дозволяє передавати дані через дерево компонентів без необхідності передавати їх через пропси."
          example={`const MyContext = React.createContext();\n\nconst MyComponent = () => {\n  const value = useContext(MyContext);\n  return <div>{value}</div>;\n};`}
          notes="Context використовує два основні елементи: `Provider` і `Consumer` або хук `useContext`."
        />
      </Section>

      {/* Секція: Ліфти */}
      <Section title="📌 Ліфти стану (State Lifting)">
        <TagExample
          tag="Ліфт стану"
          description="Ліфтинг стану дозволяє передавати стан з одного компонента до іншого."
          example={`const Parent = () => {\n  const [value, setValue] = useState(0);\n  return <Child value={value} setValue={setValue} />;\n};`}
          notes="Це дозволяє дітям компонувати та оновлювати стан батьківського компонента."
        />
      </Section>

      {/* Секція: Роутінг */}
      <Section title="📌 Маршрутизація в React">
        <TagExample
          tag="React Router"
          description="React Router дозволяє створювати багатосторінкові застосунки."
          example={`<BrowserRouter>\n  <Route path="/" component={Home} />\n  <Route path="/about" component={About} />\n</BrowserRouter>`}
          notes="React Router дозволяє налаштувати маршрути для різних шляхів і компонентів."
        />
      </Section>

      {/* Секція: Хуки */}
      <Section title="📌 Хуки (Custom Hooks)">
        <TagExample
          tag="Custom Hook"
          description="Створення власних хуків для повторного використання логіки."
          example={`function useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(initialValue);\n\n  const setValue = (value) => {\n    localStorage.setItem(key, value);\n    setStoredValue(value);\n  };\n\n  return [storedValue, setValue];\n}`}
          notes="Власні хуки допомагають організовувати та повторно використовувати логіку між компонентами."
        />
      </Section>

      {/* Секція: Висновки */}
      <Section title="📌 Поради та висновки">
        <TagExample
          tag="Нормалізація стану"
          description="Рекомендується нормалізувати стан, щоб зробити його більш передбачуваним і менш схильним до помилок."
          example={`const normalizedData = data.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});`}
          notes="Це зменшує складність взаємодії з великими обсягами даних."
        />
      </Section>
      <Section title="📌 Життєвий цикл компонентів">
  <TagExample
    tag="componentDidMount"
    description="Цей метод викликається після того, як компонент монтується (додається до DOM)."
    example={`componentDidMount() {\n  console.log("Компонент монтується");\n}`}
    notes="Зазвичай використовується для асинхронних операцій або підключення до API."
  />
  <TagExample
    tag="componentDidUpdate"
    description="Цей метод викликається після того, як компонент оновлюється, тобто після рендеру."
    example={`componentDidUpdate(prevProps, prevState) {\n  if (this.state.count !== prevState.count) {\n    console.log("Стан змінився!");\n  }\n}`}
    notes="Зазвичай використовується для порівняння старого та нового стану або пропсів."
  />
  <TagExample
    tag="componentWillUnmount"
    description="Цей метод викликається перед тим, як компонент буде видалений з DOM."
    example={`componentWillUnmount() {\n  console.log("Компонент буде видалений");\n}`}
    notes="Зазвичай використовується для очищення ресурсів, таких як таймери або підписки."
  />
</Section>
<Section title="📌 Error Boundaries">
  <TagExample
    tag="Error Boundary"
    description="Error Boundaries дозволяють ловити помилки у дочірніх компонентах."
    example={`class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Щось пішло не так.</h1>;\n    }\n    return this.props.children;\n  }\n}`}
    demo={<h1>Щось пішло не так.</h1>}
    notes="Error Boundaries не ловлять помилки в асинхронних функціях, використання хуків або події."
  />
</Section>
<Section title="📌 Формуляр у React">
  <TagExample
    tag="Controlled Components"
    description="Компоненти з повним контролем над значенням. Значення елементів форми зберігаються в стані."
    example={`const [inputValue, setInputValue] = useState("");\nconst handleChange = (e) => setInputValue(e.target.value);\n\nreturn <input value={inputValue} onChange={handleChange} />;`}
    demo={<input />}
    notes="Controlled компоненти дозволяють чітко керувати даними введення."
  />
  <TagExample
    tag="Uncontrolled Components"
    description="Компоненти з мінімальним контролем, значення зберігаються в DOM без участі стану."
    example={`const inputRef = useRef();\n\nconst handleSubmit = () => {\n  alert(inputRef.current.value);\n};\n\nreturn <input ref={inputRef} />;`}
    notes="Uncontrolled компоненти корисні, коли потрібно лише отримати значення вводу, не керуючи кожною зміною."
  />
</Section>
<Section title="📌 Мемоізація в React">
  <TagExample
    tag="React.memo"
    description="React.memo використовується для оптимізації компонентів, щоб вони не рендерилися знову, якщо їх пропси не змінилися."
    example={`const MyComponent = React.memo((props) => {\n  return <div>{props.value}</div>;\n});`}
    notes="Це допомагає уникнути непотрібного рендеру функціональних компонентів."
  />
  <TagExample
    tag="useMemo"
    description="useMemo використовується для мемоізації обчислень, щоб уникнути їх повторного виконання при кожному рендері."
    example={`const result = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}
    notes="Корисно для дорогих операцій, які не змінюються при кожному рендері."
  />
  <TagExample
    tag="useCallback"
    description="useCallback використовується для мемоізації функцій, щоб вони не перевизначалися на кожному рендері."
    example={`const handleClick = useCallback(() => {\n  console.log('Click!');\n}, []);`}
    notes="Корисно для обробників подій, які не повинні змінюватися при кожному рендері."
  />
</Section>
<Section title="📌 Фрагменти (Fragments)">
  <TagExample
    tag="Fragment"
    description="Фрагменти дозволяють обертати групу елементів без додавання зайвих елементів у DOM."
    example={`return (\n  <React.Fragment>\n    <h1>Титул</h1>\n    <p>Текст</p>\n  </React.Fragment>\n);`}
    demo={<><h1>Титул</h1><p>Текст</p></>}
    notes="Фрагменти не додають додатковий вузол до DOM."
  />
</Section>
<Section title="📌 Динамічні імпорти">
  <TagExample
    tag="React.lazy"
    description="React.lazy дозволяє завантажувати компоненти лише за потреби (lazy loading)."
    example={`const LazyComponent = React.lazy(() => import('./LazyComponent'));\n\nreturn (\n  <Suspense fallback={<div>Завантаження...</div>}>\n    <LazyComponent />\n  </Suspense>\n);`}
    notes="Це допомагає зменшити початковий час завантаження застосунку, завантажуючи компоненти тільки тоді, коли вони будуть використані."
  />
</Section>
<Section title="📌 Контекст (Context)">
  <TagExample
    tag="React.createContext"
    description="React.createContext створює новий контекст. Контекст використовується для передачі даних через дерево компонентів без використання пропсів."
    example={`const MyContext = React.createContext();\n\n<MyContext.Provider value={/* some value */}>\n  <Component />\n</MyContext.Provider>`}
    notes="Контекст є потужним інструментом для глобальних станів, таких як тема або мова."
  />
  <TagExample
    tag="useContext"
    description="useContext дозволяє компонентам доступати значення з контексту."
    example={`const value = useContext(MyContext);`}
    notes="useContext полегшує доступ до значення контексту, замість використання Consumer компонентів."
  />
</Section>
<Section title="📌 Портали (Portals)">
  <TagExample
    tag="ReactDOM.createPortal"
    description="createPortal дозволяє рендерити дочірні компоненти в інше місце DOM дерева."
    example={`const modalRoot = document.getElementById('modal-root');\n\nreturn ReactDOM.createPortal(\n  <div>Це модальне вікно</div>,\n  modalRoot\n);`}
    notes="Портали корисні для створення модальних вікон або повідомлень, що з'являються поверх основного інтерфейсу."
  />
</Section>
<Section title="📌 Користувацькі хуки (Custom Hooks)">
  <TagExample
    tag="useLocalStorage"
    description="Користувацький хук для збереження значень у localStorage."
    example={`function useLocalStorage(key, initialValue) {\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      const item = window.localStorage.getItem(key);\n      return item ? JSON.parse(item) : initialValue;\n    } catch (error) {\n      return initialValue;\n    }\n  });\n\n  const setValue = (value) => {\n    try {\n      const valueToStore = value instanceof Function ? value(storedValue) : value;\n      setStoredValue(valueToStore);\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n    } catch (error) {\n      console.error(error);\n    }\n  };\n\n  return [storedValue, setValue];\n}`}
    notes="Користувацькі хуки можна використовувати для роботи з даними, які повинні зберігатися між рендерами."
  />
</Section>
<Section title="📌 Хуки стану (State Hooks)">
  <TagExample
    tag="useState"
    description="useState — це хук для додавання стану в функціональних компонентах."
    example={`const [count, setCount] = useState(0);\n\nconst increment = () => setCount(count + 1);`}
    notes="Хук useState повертає пару: поточне значення стану і функцію для його оновлення."
  />
  <TagExample
    tag="useState з об'єктами"
    description="useState можна використовувати для зберігання складних об'єктів або масивів."
    example={`const [state, setState] = useState({ count: 0, name: 'John' });\n\nconst updateCount = () => setState({ ...state, count: state.count + 1 });`}
    notes="Обновлюючи стан з об'єктом чи масивом, важливо використовувати оператор spread для збереження незмінного стану."
  />
</Section>
<Section title="📌 useEffect — Побічні ефекти">
  <TagExample
    tag="useEffect"
    description="useEffect виконується після рендеру компонента і використовується для побічних ефектів."
    example={`useEffect(() => {\n  console.log('Компонент рендериться');\n}, []);`}
    notes="Перший аргумент — це функція, яка виконується після кожного рендеру. Другий аргумент — масив залежностей."
  />
  <TagExample
    tag="useEffect з залежностями"
    description="useEffect з масивом залежностей дозволяє виконувати ефекти лише при зміні зазначених значень."
    example={`useEffect(() => {\n  console.log('count змінився:', count);\n}, [count]);`}
    notes="Це дозволяє уникнути виконання ефекту при кожному рендері і знижує навантаження на додаток."
  />
  <TagExample
    tag="useEffect з очищенням"
    description="useEffect може повертати функцію очищення для очищення ресурсів."
    example={`useEffect(() => {\n  const timer = setInterval(() => console.log('Таймер працює'), 1000);\n  return () => clearInterval(timer);\n}, []);`}
    notes="Очищення ефектів, таких як таймери або підписки, є важливим для уникнення витоків пам'яті."
  />
</Section>
<Section title="📌 Переваги та недоліки React">
  <TagExample
    tag="Переваги"
    description="React надає безліч переваг для створення складних додатків."
    example={`- Декларативний підхід\n- Компонентний підхід\n- Велика екосистема\n- Продуктивність через Virtual DOM`}
    notes="React має велику спільноту, що надає велику кількість готових рішень і бібліотек."
  />
  <TagExample
    tag="Недоліки"
    description="Як і у будь-якої технології, у React є свої обмеження."
    example={`- Високий поріг входу для новачків\n- Важливість підтримки стану та синхронізації\n- Велика кількість обов'язкових залежностей`}
    notes="React може бути складним для новачків через велику кількість концепцій і змінних."
  />
</Section>
<Section title="📌 Фрагменти (Fragments)">
  <TagExample
    tag="React.Fragment"
    description="Фрагменти дозволяють групувати елементи без додавання зайвих вузлів до DOM."
    example={`return (\n  <React.Fragment>\n    <h1>Заголовок</h1>\n    <p>Опис</p>\n  </React.Fragment>\n);`}
    notes="Також можна використовувати коротку форму <></> замість <React.Fragment></React.Fragment>."
  />
</Section>
<Section title="📌 Error Boundaries">
  <TagExample
    tag="Error Boundaries"
    description="Error Boundaries дозволяють ловити помилки в дочірніх компонентах та рендерити запасний UI."
    example={`class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true }; \n  }\n\n  componentDidCatch(error, info) {\n    console.log(error, info);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Щось пішло не так.</h1>;\n    }\n    return this.props.children; \n  }\n}`} 
    notes="Error Boundaries можуть використовуватися для захисту від помилок, що виникають під час рендерингу або у методах життєвого циклу."
  />
</Section>
<Section title="📌 Рефи (Refs)">
  <TagExample
    tag="useRef"
    description="useRef дозволяє зберігати мутабельні значення, які не спричиняють повторний рендер компонента."
    example={`const inputRef = useRef(null);\n\n<input ref={inputRef} />\n\nuseEffect(() => {\n  inputRef.current.focus();\n}, []);`}
    notes="useRef використовується для доступу до DOM-елементів і зберігання значень, які не повинні спричиняти перерендер."
  />
  <TagExample
    tag="forwardRef"
    description="forwardRef дозволяє передавати реф у дочірні компоненти."
    example={`const Button = forwardRef((props, ref) => {\n  return <button ref={ref} {...props}>Натисни</button>;\n});`}
    notes="Це корисно для створення компонентів вищого порядку, які можуть отримувати реф від батьківського компонента."
  />
</Section>
<Section title="📌 Ключі (Keys)">
  <TagExample
    tag="Keys"
    description="Ключі допомагають React ідентифікувати елементи в масивах та ефективно оновлювати їх."
    example={`const items = ['Яблуко', 'Груша', 'Банан'];\n\nreturn items.map((item, index) => (\n  <li key={index}>{item}</li>\n));`}
    notes="Ключі повинні бути унікальними серед елементів, щоб React міг ефективно оновлювати DOM."
  />
</Section>
<Section title="📌 Вищі Компоненти Порядку (HOC)">
  <TagExample
    tag="Higher-Order Component (HOC)"
    description="HOC — це функція, яка приймає компонент і повертає новий компонент, який має додаткову функціональність."
    example={`const withLoading = (Component) => {\n  return function LoadingHOC(props) {\n    if (props.isLoading) {\n      return <div>Завантаження...</div>;\n    }\n    return <Component {...props} />;\n  };\n};`}
    notes="HOC корисні для додавання спільної логіки до кількох компонентів без дублювання коду."
  />
</Section>
<Section title="📌 Server-Side Rendering (SSR)">
  <TagExample
    tag="Server-Side Rendering (SSR)"
    description="SSR дозволяє рендерити React-додаток на сервері та відправляти готовий HTML-код клієнту."
    example={`import ReactDOMServer from 'react-dom/server';\n\nconst html = ReactDOMServer.renderToString(<App />);`}
    notes="SSR корисний для SEO та забезпечує кращу продуктивність на перший рендер."
  />
</Section>
<Section title="📌 Static Site Generation (SSG)">
  <TagExample
    tag="Static Site Generation (SSG)"
    description="SSG генерує статичні HTML-сторінки під час збірки додатка, що робить їх дуже швидкими."
    example={`const getStaticProps = async () => {\n  const data = await fetchData();\n  return { props: { data } }; \n};`}
    notes="SSG підходить для контенту, який не змінюється дуже часто, наприклад, блоги або документація."
  />
</Section>
<Section title="📌 Підключення до API">
  <TagExample
    tag="fetch API"
    description="fetch API використовується для виконання асинхронних HTTP-запитів."
    example={`useEffect(() => {\n  fetch('/api/data')\n    .then(response => response.json())\n    .then(data => setData(data));\n}, []);`}
    notes="Використовувати fetch можна для отримання даних або відправки їх на сервер."
  />
</Section>
<Section title="📌 Контекст (Context API)">
  <TagExample
    tag="Context"
    description="Context дозволяє передавати значення без необхідності передавати їх через пропси на кожному рівні дерева компонентів."
    example={`const MyContext = createContext();\n\n<MyContext.Provider value={value}>\n  <Child />\n</MyContext.Provider>\n\nconst Child = () => {\n  const value = useContext(MyContext);\n  return <div>{value}</div>;\n};`}
    notes="Context API корисний для глобальних даних, таких як теми, авторизація та мови."
  />
</Section>
<Section title="📌 Лінійне завантаження (Lazy loading)">
  <TagExample
    tag="React.lazy"
    description="React.lazy дозволяє завантажувати компоненти лише тоді, коли вони необхідні, що покращує швидкість завантаження."
    example={`const LazyComponent = React.lazy(() => import('./Component'));\n\n<Suspense fallback={<div>Завантаження...</div>}>\n  <LazyComponent />\n</Suspense>`}
    notes="Для використання React.lazy необхідно також використовувати компонент Suspense для відображення інтерфейсу під час завантаження."
  />
</Section>
<Section title="📌 Custom Hooks">
  <TagExample
    tag="Custom Hook"
    description="Custom hook — це JavaScript функція, яка може використовуватися для спільної логіки в компонентах."
    example={`function useCounter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(count + 1);\n  return { count, increment }; \n}\n\nconst Counter = () => {\n  const { count, increment } = useCounter();\n  return <button onClick={increment}>{count}</button>;\n};`}
    notes="Custom hooks допомагають організувати повторно використовувану логіку та тримати компоненти чистими."
  />
</Section>
<Section title="📌 Глобальний стан (State management)">
  <TagExample
    tag="Redux"
    description="Redux дозволяє управляти глобальним станом додатка та робить його доступним для всіх компонентів."
    example={`const initialState = { count: 0 };\n\nfunction reducer(state = initialState, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}\n\nconst store = createStore(reducer);`}
    notes="Redux — це одна з популярних бібліотек для управління глобальним станом. Але для простіших випадків можна використовувати контекст або інші бібліотеки."
  />
</Section>
<Section title="📌 Styled-components">
  <TagExample
    tag="Styled-components"
    description="Styled-components дозволяє писати стилі в JavaScript файлах і використовувати їх як компоненти."
    example={`import styled from 'styled-components';\n\nconst Button = styled.button\n  background-color: blue;\n  color: white;\n  padding: 10px;\n;`}
    notes="Styled-components є популярним підходом для стилізації компонентів у React."
  />
</Section>

    </div>
  );
};
