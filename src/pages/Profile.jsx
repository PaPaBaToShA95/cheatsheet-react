import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useAuth } from "../context/AuthContext";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile() {
  const { id } = useParams();
  const { currentUser, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isCurrentUser = useMemo(
    () => currentUser?.uid === id,
    [currentUser, id]
  );

  const programmingLanguages = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
  ];

  const specializations = [
    "Frontend",
    "Backend",
    "Fullstack",
    "Mobile",
    "DevOps",
    "Data Science",
    "AI/ML",
    "Game Dev",
    "Embedded",
  ];

  useEffect(() => {
    let isMounted = true;

    async function fetchUserData() {
      try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (!isMounted) return;

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData({
            ...data,
            languages: Array.isArray(data.languages) ? data.languages : [],
          });
        } else if (isCurrentUser) {
          const newUserData = {
            name: currentUser.displayName || "Новий користувач",
            email: currentUser.email || "",
            photoURL: currentUser.photoURL || "",
            bio: "",
            birthDate: "",
            gender: "",
            languages: [],
            specialization: "",
            experience: "",
            createdAt: new Date().toISOString(),
          };
          await setDoc(docRef, newUserData);
          setUserData(newUserData);
        } else {
          setUserData(null);
        }
      } catch (err) {
        console.error("Помилка завантаження:", err);
        setError("Не вдалося завантажити профіль");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    if (id) {
      fetchUserData();
    } else {
      setLoading(false);
      setError("ID користувача не вказано");
    }

    return () => {
      isMounted = false;
    };
  }, [id, currentUser, isCurrentUser]);

  const handleSave = async () => {
    try {
      if (!userData?.name.trim()) {
        throw new Error("Ім'я не може бути порожнім");
      }

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, {
        name: userData.name.trim(),
        bio: userData.bio?.trim() || "",
        birthDate: userData.birthDate,
        gender: userData.gender,
        languages: userData.languages || [],
        specialization: userData.specialization,
        experience: userData.experience,
        updatedAt: new Date().toISOString(),
      });

      setEditing(false);
      setSuccess("Зміни успішно збережено!");
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error("Помилка збереження:", err);
      setError(err.message);
      setTimeout(() => setError(null), 3000);
    }
  };

  const handleLanguageToggle = (language) => {
    setUserData((prev) => {
      const currentLanguages = prev.languages || [];
      const newLanguages = currentLanguages.includes(language)
        ? currentLanguages.filter((lang) => lang !== language)
        : [...currentLanguages, language];
      return { ...prev, languages: newLanguages };
    });
  };

  if (loading) return <div className="text-center py-8">Завантаження...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;
  if (!userData && !loading)
    return <div className="text-center py-8">Профіль не знайдено</div>;

  return (
    <div className="max-w-3xl mx-auto bg-gray-800 text-white p-6 rounded-2xl mt-6 shadow-lg">
      {success && (
        <div className="mb-4 p-3 bg-green-600 rounded text-center animate-fade-in">
          {success}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-600 rounded text-center animate-fade-in">
          {error}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">
        Профіль користувача:
        <span className="text-yellow-400 ml-2"> {userData.name} </span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="flex flex-col items-center mb-6">
            {userData.photoURL ? (
              <img
                src={userData.photoURL}
                alt="Аватар"
                className="w-40 h-40 rounded-full mb-4 object-cover border-4 border-yellow-400"
              />
            ) : (
              <div className="w-40 h-40 rounded-full mb-4 bg-gray-700 border-4 border-yellow-400 flex items-center justify-center">
                <span className="text-6xl">👤</span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Імʼя</label>
              {editing ? (
                <input
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none transition-colors"
                  maxLength={50}
                />
              ) : (
                <p className="p-2 font-medium">{userData.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Email</label>
              <p className="p-2 text-gray-300">{userData.email}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-sm mb-1">Про себе</label>
            {editing ? (
              <textarea
                value={userData.bio}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, bio: e.target.value }))
                }
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none transition-colors"
                rows={3}
                maxLength={500}
                placeholder="Розкажіть щось про себе..."
              />
            ) : (
              <p className="p-2 whitespace-pre-line">{userData.bio || "—"}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Дата народження</label>
              {editing ? (
                <input
                  type="date"
                  value={userData.birthDate}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      birthDate: e.target.value,
                    }))
                  }
                  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none transition-colors"
                />
              ) : (
                <p className="p-2">{userData.birthDate || "Не вказано"}</p>
              )}
            </div>

            <div>
              <label className="block text-sm mb-1">Стать</label>
              {editing ? (
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={userData.gender === "male"}
                      onChange={() =>
                        setUserData((prev) => ({ ...prev, gender: "male" }))
                      }
                      className="mr-2"
                    />
                    Чоловіча
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={userData.gender === "female"}
                      onChange={() =>
                        setUserData((prev) => ({ ...prev, gender: "female" }))
                      }
                      className="mr-2"
                    />
                    Жіноча
                  </label>
                </div>
              ) : (
                <p className="p-2">
                  {userData.gender === "male"
                    ? "Чоловіча"
                    : userData.gender === "female"
                      ? "Жіноча"
                      : "Не вказано"}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Напрямок розробки</label>
            {editing ? (
              <select
                value={userData.specialization}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    specialization: e.target.value,
                  }))
                }
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value="">Виберіть напрямок</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            ) : (
              <p className="p-2">{userData.specialization || "Не вказано"}</p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Досвід роботи</label>
            {editing ? (
              <select
                value={userData.experience}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    experience: e.target.value,
                  }))
                }
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-yellow-500 focus:outline-none transition-colors"
              >
                <option value="">Виберіть досвід</option>
                <option value="no-experience">Без досвіду</option>
                <option value="junior">Junior (до 1 року)</option>
                <option value="middle">Middle (1-3 роки)</option>
                <option value="senior">Senior (3+ роки)</option>
                <option value="lead">Lead/Architect (5+ років)</option>
              </select>
            ) : (
              <p className="p-2">
                {userData.experience === "no-experience"
                  ? "Без досвіду"
                  : userData.experience === "junior"
                    ? "Junior (до 1 року)"
                    : userData.experience === "middle"
                      ? "Middle (1-3 роки)"
                      : userData.experience === "senior"
                        ? "Senior (3+ роки)"
                        : userData.experience === "lead"
                          ? "Lead/Architect (5+ років)"
                          : "Не вказано"}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Мови програмування</label>
            {editing ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                {programmingLanguages.map((language) => (
                  <label key={language} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={userData.languages?.includes(language) || false}
                      onChange={() => handleLanguageToggle(language)}
                      className="mr-2"
                    />
                    {language}
                  </label>
                ))}
              </div>
            ) : (
              <p className="p-2">
                {userData.languages?.length > 0
                  ? userData.languages.join(", ")
                  : "Не вказано"}
              </p>
            )}
          </div>
        </div>
      </div>

      {isCurrentUser && (
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-700">
          <button
            onClick={logout}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition-colors"
          >
            Вийти
          </button>

          <div className="flex gap-2">
            {editing ? (
              <>
                <button
                  onClick={() => setEditing(false)}
                  className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-700 transition-colors"
                >
                  Скасувати
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-50"
                  disabled={!userData.name.trim()}
                >
                  Зберегти
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 transition-colors"
              >
                Редагувати профіль
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
