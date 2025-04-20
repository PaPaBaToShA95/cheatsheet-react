
import { useNavigate, useLocation } from "react-router-dom";
import Router from "./router/routes";
import { useAuth } from "./context/AuthContext"; 
import { signOut } from "firebase/auth";
import { auth } from "./firebase"; 
import React, { useState, useRef, useEffect } from "react"; 


export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showHint, setShowHint] = useState(false);
  const { currentUser } = useAuth();

  const sections = [
    { name: "HTML", path: "/html" },
    { name: "CSS", path: "/css" },
    { name: "JS", path: "/js" },
    { name: "React", path: "/react" },
    { name: "Tailwind", path: "/tailwind" },
    { name: "VSCode", path: "/vscode" },
    { name: "Git", path: "/git" },
    { name: "Gulp", path: "/gulp" },
    { name: "Webpack", path: "/webpack" },
    { name: "Про Мене", path: "/about" },
    { name: "Контакти", path: "/contact" },
    { name: "Про проект", path: "/project" },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const navigate = useNavigate();
  const location = useLocation();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 flex flex-col justify-between">
      <div>
        <div className="text-[40px] lg:text-[100px] leading-none font-bold mb-4 text-center">
          🧠 Front-End CheatSheet
        </div>
        <div className="text-center text-lg mb-4 relative">
          <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-4 w-full px-4 py-2 pr-10 rounded-2xl bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onFocus={() => {
                setShowHint(true);
                setTimeout(() => {
                  setShowHint(false);
                }, 3000);
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 cursor-pointer transform -translate-y-1/2 text-gray-400 text-xl font-bold hover:rotate-180 hover:text-white active:scale-90 transition-all duration-500 ease-in-out active:shadow-inner"
                title="Очистити пошук"
              >
                ✕
              </button>
            )}
          </div>
          {showHint && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 border-gray-600 border-4 text-gray-300 text-sm rounded-3xl p-2 w-full max-w-md mx-auto z-10 shadow">
              Пошук здійснюється по всіх полях: назві, опису, коду, командах
              тощо (окрім попереднього перегляду).
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center items-center mb-6 bg-gray-800 p-4 rounded-2xl w-full max-w-6xl mx-auto">
          {sections.map((section) => {
            const isActive = location.pathname === section.path;
            return (
              <button
                key={section.name}
                onClick={() => navigate(section.path)}
                className={`px-4 py-2 cursor-pointer rounded-full transition-transform duration-300 ease-in-out
                    ${isActive ? "bg-yellow-500 text-black" : "bg-gray-700 text-white hover:bg-yellow-500 hover:text-black hover:-translate-y-[10px]"}`}
              >
                {section.name}
              </button>
            );
          })}

          {currentUser ? (
            <div className="relative group" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition-all flex items-center gap-2 focus:outline-none"
              >
                {currentUser?.photoURL && (
                  <img
                    src={currentUser.photoURL}
                    alt={currentUser.displayName || "Аватар користувача"}
                    className="w-8 h-8 rounded-full"
                  />
                )}

                <span>
                  {currentUser?.displayName ||
                    currentUser?.email?.split("@")[0] ||
                    "Користувач"}
                </span>
              </button>

           
              {isDropdownOpen && (
                <div className="absolute  flex-col justify-center align-center items-center bg-gray-800 text-white  mt-2 shadow-lg right-0 z-50 min-w-[180px]">
                  <button
                    onClick={() => {
                      navigate("/tests");
                      setIsDropdownOpen(false); 
                    }}
                    className="px-4 py-2 hover:bg-gray-700 text-left w-full text-nowrap"
                  >
                    Перейти до тестів(В розробці)
                  </button>
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-700 text-left w-full"
                  >
                    Профіль(В розробці)
                  </button>
                  <button
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          navigate("/login");
                          console.log("Signed out successfully");
                          setIsDropdownOpen(false);
                        })
                        .catch((error) => {
                          console.error("Sign out error:", error);
                          setIsDropdownOpen(false);
                        });
                    }}
                    className="px-4 py-2 hover:bg-red-600 text-left text-red-400 w-full"
                  >
                    Вийти
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Вхід/Реєстрація
            </button>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <Router searchTerm={searchTerm} />
        </div>
      </div>

      <footer className="text-center text-gray-500 mt-8 py-2 border-t border-gray-800">
        Powered by Oleksiy Ermantraut student of{" "}
        <a
          href="https://ithillel.ua/"
          target="_blank"
          rel="noreferrer"
          title="Hillel IT School"
          className="text-blue-400 hover:underline"
        >
          Hillel IT School
        </a>
        <button
          className="fixed bottom-5 right-5 p-2 cursor-pointer text-3xl bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-full"
          onClick={scrollToTop}
          title="Наверх"
        >
          ⥣
        </button>
      </footer>
    </div>
  );
}
