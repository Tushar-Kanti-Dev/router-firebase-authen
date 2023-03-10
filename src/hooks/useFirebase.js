import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

import app from "../firebase.init";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
    }
    const handelSignOut=()=>{
        signOut(auth)
        .then(()=>{})
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user)
        })
    }, [])
    return {user, signInWithGoogle, handelSignOut};
}

export default useFirebase;