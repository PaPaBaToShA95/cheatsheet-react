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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

 const sections = [
   { name: "📄 HTML", path: "/html" },
   { name: "🎨 CSS", path: "/css" },
   { name: "🧠 JS", path: "/js" },
   { name: "⚛️ React", path: "/react" },
   { name: "🌬️ Tailwind", path: "/tailwind" },
   { name: "🖥️ VSCode", path: "/vscode" },
   { name: "🔧 Git", path: "/git" },
   { name: "🥤 Gulp", path: "/gulp" },
   { name: "📦 Webpack", path: "/webpack" },
   { name: "🙋‍♂️ Про Мене", path: "/about" },
   { name: "📬 Контакти", path: "/contact" },
   { name: "🧩 Про проект", path: "/project" },
 ];

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);


  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  const avatarUrl = currentUser?.userData?.photoURL || currentUser?.photoURL;

  const userName =
    currentUser?.userData?.displayName ||
    currentUser?.displayName ||
    currentUser?.email?.split("@")[0] ||
    "Користувач";

  const mobileMenuClasses = `sm:hidden fixed top-0 left-0 w-4/5 max-w-sm h-full bg-gray-900 bg-opacity-95 z-40 p-4 overflow-y-auto transition-transform duration-500 ease-in-out transform ${
    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-3 flex flex-col justify-between">
      <header className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300"
            aria-label="Меню"
          >
            <div
              className={`w-6 h-6 flex flex-col justify-between transition-all duration-300 ${isMobileMenuOpen ? "transform rotate-180" : ""}`}
            >
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "transform rotate-45 translate-y-2.5" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${isMobileMenuOpen ? "transform -rotate-45 -translate-y-2.5" : ""}`}
              ></span>
            </div>
          </button>

          <div
            onClick={() => navigate("/")}
            className="text-[40px] lg:text-[100px] font-playfair leading-none font-bold text-center flex-1 cursor-pointer" 
          >
            Front-End 🧠 CheatSheet
          </div>

          <div className="hidden sm:block">
            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 p-2 rounded-full bg-yellow-500 text-black hover:bg-yellow-600 transition-colors"
                >
                  {currentUser.photoURL && (
                    <img
                      src={currentUser.photoURL}
                      className="w-8 h-8 rounded-full"
                    />
                  )}

                  <span className="hidden md:inline">{userName}</span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50 border border-gray-700">
                    <button
                      onClick={() => {
                        navigate(`/profile/${currentUser.uid}`);
                        setIsDropdownOpen(false);
                      }}
                      className="block px-4 py-2 text-left w-full hover:bg-gray-700 transition-colors"
                    >
                      Профіль
                    </button>
                    <button
                      onClick={() =>
                        signOut(auth).then(() => navigate("/login"))
                      }
                      className="block px-4 py-2 text-left w-full hover:bg-red-600 text-red-400 transition-colors"
                    >
                      Вийти
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
              >
                Увійти
              </button>
            )}
          </div>
        </div>

        <div className="text-center text-lg mb-4 relative">
          <div className="relative w-full max-w-md mx-auto flex items-center justify-center">
            <input
              type="text"
              placeholder="Пошук..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-4 w-full px-4 py-2 pr-10 rounded-2xl bg-gray-800 text-white placeholder-gray-400 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none transition-colors"
              onFocus={() => {
                setShowHint(true);
                setTimeout(() => setShowHint(false), 3000);
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                title="Очистити пошук"
              >
                ✕
              </button>
            )}
          </div>
          {showHint && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-lg p-2 w-full max-w-md mx-auto z-10 shadow-lg transition-opacity duration-300">
              Пошук здійснюється по всіх полях: назві, опису, коду, командах
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">
        <div className="flex flex-col sm:flex-row gap-4">
          <aside className="hidden sm:block w-56 flex-shrink-0">
            <nav className="sticky top-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.path}
                  onClick={() => navigate(section.path)}
                  className={`w-4/5  flex flex-row ce px-6 py-3 rounded-lg cursor-pointer transition-all duration-400 ${
                    location.pathname === section.path
                      ? "bg-yellow-500 text-black font-bold shadow-md"
                      : "bg-gray-800 hover:bg-gray-700 hover:translate-x-5"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          <div ref={mobileMenuRef} className={mobileMenuClasses}>
            <div className="flex justify-end mb-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-2xl hover:text-yellow-500 transition-colors "
              >
                ×
              </button>
            </div>

            <nav className="space-y-3">
              {sections.map((section) => (
                <button
                  key={section.path}
                  onClick={() => {
                    navigate(section.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-lg transition-all duration-200 ${
                    location.pathname === section.path
                      ? "bg-yellow-500 text-black font-bold shadow-md"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  {section.name}
                </button>
              ))}

              {currentUser ? (
                <>
                  <button
                    onClick={() => {
                      navigate(`/profile/${currentUser.uid}`);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-lg bg-gray-800 hover:bg-gray-700 flex items-center gap-2 transition-colors"
                  >
                    {avatarUrl && (
                      <img
                        src={avatarUrl}
                        alt={userName}
                        className="w-6 h-6 rounded-full"
                      />
                    )}
                    <span>{userName}</span>
                  </button>
                  <button
                    onClick={() => {
                      signOut(auth).then(() => {
                        navigate("/login");
                        setIsMobileMenuOpen(false);
                      });
                    }}
                    className="block w-full text-left px-4 py-3 rounded-lg text-lg text-white bg-red-400 hover:bg-red-900 transition-colors"
                  >
                    Вийти з аккаунту
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                >
                  Увійти
                </button>
              )}
            </nav>
          </div>

          <div className="flex-1 w-full">
            <Router searchTerm={searchTerm} />
          </div>
        </div>
      </main>

      <footer className="text-center text-gray-500 mt-8 py-4 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>
            Powered by Oleksiy Ermantraut student of{" "}
            <a
              href="https://ithillel.ua/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline transition-colors"
            >
              Hillel IT School
            </a>
          </p>
        </div>
      </footer>

      <button
        className="fixed bottom-5 right-5 p-2 cursor-pointer text-3xl bg-amber-300 hover:bg-amber-400 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        onClick={scrollToTop}
        title="Наверх"
        aria-label="Наверх"
      >
        ⥣
      </button>
    </div>
  );
}
