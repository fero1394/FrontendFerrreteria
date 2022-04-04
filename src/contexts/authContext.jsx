import React, {createContext, useContext, useEffect, useState}from 'react'
import {Navigate} from "react-router-dom";
import firebaseApp from "../firebase/credentials";
import { getAuth ,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup,
} from 'firebase/auth'; 


export const authContext = createContext();  //me permite crear un proveedor y crear objetos

////////////////////////////////////////////
export const useAuth = () => {              //es un hook personalizado
    const context = useContext(authContext);
    
    if(!context) throw new Error('There is not auth provider');
    return context
}

///////////////////////////////////
export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const auth = getAuth(firebaseApp);
    const [loading, setloading] = useState(true);
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
/////////////////////////////////
    const login = (email,password) =>{
        signInWithEmailAndPassword(auth,email,password);
    }
///////////////////////////////////
    const registrarUsuario = (email,password) =>{       
        const  credencials = createUserWithEmailAndPassword(auth, email, password)
        if(credencials) return alert('Registro Exitoso');
}
///////////////////////////////////

const loginGoogle = () =>{
    signInWithPopup(auth,provider)
    .then(respuesta => {
      setUser(respuesta.user)
    });
  }
/////////////////////////////////
  const loginGithub = () =>{
    signInWithPopup(auth,gitProvider)
    .then(respuesta => {
      setUser(respuesta.user)
    });
  }
  
//////////////////////////////////
/////////////////////////////////////
    const logout = () => signOut(auth);
////////////////////////////////
useEffect (() =>{
const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setloading(false);

    });
    
    return () => unsubscribe();
}, []);


  return (
    <authContext.Provider value={{login, user, logout, loading,registrarUsuario, loginGoogle,loginGithub}}>
        {children}
    </authContext.Provider>
  )
}
