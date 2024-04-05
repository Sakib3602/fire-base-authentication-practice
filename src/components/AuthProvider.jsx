import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.init";
import { onAuthStateChanged } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup, } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const Gitprovider = new GithubAuthProvider();
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [person,setPerson] = useState(null)
    

    function signUpHere(email,password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logInHere(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        setPerson("")
        signOut(auth)
      
    }



    


    useEffect(()=>{
        const DeleteIt = onAuthStateChanged(auth, (user) => {
            if (user) {
                setPerson(user)
                
            } else {
                console.log("No One Here")
             
            }
          });
          
          return ()=>{
            DeleteIt()
          }

    },[])


    function google(){
        signInWithPopup(auth, provider)
    }
    function git(){
        signInWithPopup(auth, Gitprovider)
    }




    const info = {
        signUpHere,
        logInHere,
        logout,
        person,
        google,
        git,

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;