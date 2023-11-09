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
import axios from 'axios';



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
    const userEmail = currentUser?.email || user?.email;
    const loggedInUser = { email: userEmail };

    if (currentUser) {
      axios.post("https://ass-11-server-eight.vercel.app/jwt", loggedInUser, {
        withCredentials: true,
      });
    } else {
      axios
        .post("https://ass-11-server-eight.vercel.app/logout", loggedInUser, {
          withCredentials: true,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }
    setLoading(false);
    setUser(currentUser);
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