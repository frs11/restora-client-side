import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase Config/firebase,config,js";
import useAxios from "../Hooks/useAxios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userFoods, setuserFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecureJwt = useAxios();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  useEffect(() => {
    if (user) {
      axiosSecureJwt
        .get(`/userAddedFoods?user=${user?.email}`)
        .then((res) => {
          // console.log(res?.data);
          setuserFoods(res?.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, axiosSecureJwt]);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const UserLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const contextData = {
    user,
    userFoods,
    loading,
    createNewUser,
    UserLogin,
    userSignOut,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
