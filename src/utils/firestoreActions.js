
  import { doc, getDoc } from 'firebase/firestore';
  import { db } from '../firebase';

  export const getUserData = async (userId) => {
    if (!userId) return null;
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      return { id: userDocSnap.id, ...userDocSnap.data() };
    } else {
      console.warn("Дані користувача з ID", userId, "не знайдені.");
      return null;
    }
  };

export default getUserData;