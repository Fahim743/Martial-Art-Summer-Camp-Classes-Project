import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  
} from "firebase/auth";
import app from "../FIrebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

console.log(auth, "this is auth")


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // SignUp
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // updateProfile

  const updatingUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // useEffect(() => {
  //   if (user) {
  //     // Update user's profile with display name after login
  //     const { displayName } = user;
  //     if (displayName) {
  //       updateProfile(auth.currentUser, { displayName })
  //         .then(() => console.log("User's display name updated successfully"))
  //         .catch((error) => console.log("Error updating user's display name:", error));
  //     }
  //   }
  // }, [user]);

  // LogIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Google signIn
  const googleSignIn =()=>{
    return signInWithPopup(auth, googleProvider)
  }
  // logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   checking existing user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser, "this is  current user");
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleSignIn,
    logOut,
    updatingUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
