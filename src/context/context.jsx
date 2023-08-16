import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithPopup,
    onAuthStateChanged,
    signOut } from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXOfmvWXSlJBr67qG6uTT-XX1czH10oYQ",
    authDomain: "survey-form-ef540.firebaseapp.com",
    projectId: "survey-form-ef540",
    storageBucket: "survey-form-ef540.appspot.com",
    messagingSenderId: "269269369683",
    appId: "1:269269369683:web:fda9934eba4a6dadac57a6"
  };

  const FirebaseContext = createContext(null);
  export const useFirebase = () => useContext(FirebaseContext);

  const firebaseApp = initializeApp(firebaseConfig);

  const firebaseAuth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

  const googleProvider = new GoogleAuthProvider();


  export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user)=> {
            if(user) setUser(user);
            else setUser(null);
        })
    }, []);

    const SignupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password).then((value) => alert(value)).catch((err) => console.log(err));
    }

    const loginWithEmailAndPassword = async (email, password) => {
        await signInWithEmailAndPassword(firebaseAuth, email, password).then((value) => alert("Sign up success")).catch((err) => console.log(err));
    }

    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider);
    }

    const isLoggedIn = user ? true : false;

    // console.log(user);

    const userSignout = () => {
        if(user) signOut(firebaseAuth).then((value) => alert("Sign out success")).catch((err) => console.log(err));
    }

    const handleCreateNewListing = async (firstName, lastName, city, state, zip, address, comment, isMale) => {
        return await addDoc(collection(firestore, 'survey'), {
            firstName,
            lastName,
            city,
            state,
            zip,
            address,
            comment,
            isMale,
            userId: user.uid
        })
    };

    const getMySurvey = async () => {
        const collectionRef = collection(firestore, "survey");
        return await getDocs(collectionRef);
        // console.log(result);
    }

    return (
        <FirebaseContext.Provider value={{
        SignupUserWithEmailAndPassword, 
        loginWithEmailAndPassword, 
        signinWithGoogle,
        isLoggedIn,
        handleCreateNewListing,
        getMySurvey,
        userSignout }}>

        {props.children}
    </FirebaseContext.Provider>
    );
  };