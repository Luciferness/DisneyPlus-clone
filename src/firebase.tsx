import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA4sh08xycQk_FskLe7PH166HkblK6vsdI",
  authDomain: "disneyplus-clone-f8826.firebaseapp.com",
  projectId: "disneyplus-clone-f8826",
  storageBucket: "disneyplus-clone-f8826.appspot.com",
  messagingSenderId: "93799939936",
  appId: "1:93799939936:web:5dc54b23e3cd4b7a5b6805",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, query, getDocs, storage, collection };
export default db;
