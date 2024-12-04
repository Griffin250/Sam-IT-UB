import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0hXz6T-YWHnoBJLEEvCmtjuQhF9dX2GE",
  authDomain: "griffintechs.firebaseapp.com",
  databaseURL: "https://griffintechs-default-rtdb.firebaseio.com",
  projectId: "griffintechs",
  storageBucket: "griffintechs.firebasestorage.app",
  messagingSenderId: "69127463813",
  appId: "1:69127463813:web:48cd99dc7b41e061f09aec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error("Signup error: ", error);
    toast.error(error.message);
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login error: ", error);
    toast.error(error.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, db, login, signup, logout };
