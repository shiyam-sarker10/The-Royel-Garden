import  { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./../firebase/firebase.config";



const AuthProvider = ({children}) => {


      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth(app);

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }


    const GoogleSignIn = () => {
      return signInWithPopup(auth, googleProvider)
    }




    const GithubSignIn = () => {
      return signInWithPopup(auth, githubProvider);
    }



    const  UserUpdate= (name,photo) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
    }

useEffect(() => {
  const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  return () => {
    return unSubscribe();
  };
}, [user]);

const LogOut = () => {
  signOut(auth)
}


    

    const authInfo = {
      createUser,
      signInUser,
      GoogleSignIn,
      GithubSignIn,
      UserUpdate,
      LogOut,
      loading,
      user,
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;