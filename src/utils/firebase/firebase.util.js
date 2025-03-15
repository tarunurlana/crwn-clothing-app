import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIO0WsmUYyZA7NbEkWU0Md-KnP8D5oVpo",
  authDomain: "crwn-clothing-55979.firebaseapp.com",
  projectId: "crwn-clothing-55979",
  storageBucket: "crwn-clothing-55979.firebasestorage.app",
  messagingSenderId: "1041374119494",
  appId: "1:1041374119494:web:cc3c5227c8db7e4037ac47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentWithAuth = async (userAuth, additonalInfo ={}) => {
    if(!userAuth)return;
  const DocRef = doc(db, "users", userAuth.uid);
  console.log(DocRef);

  const userDocSnapShot = await getDoc(DocRef);
  console.log(userDocSnapShot.exists());

  if (!userDocSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(DocRef, { displayName, email, createdAt,...additonalInfo });
    } catch (error) {
      console.log("error occured while creating the user", error.message);
    }
  }
  return DocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return userCredential; 
    } catch (error) {
      console.error("Error creating user:", error);
      throw error; 
    }
}