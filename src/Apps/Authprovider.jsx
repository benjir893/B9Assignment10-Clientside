import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Components/firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleauthprovider = new GoogleAuthProvider();
const githubauthprovider = new GithubAuthProvider();

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginwithGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleauthprovider);
    }
    const loginwithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubauthprovider);
    }
    const logout=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log('user is in auth state: ', currentUser);
            setUser(currentUser);
            setLoading(false)
       })
       return ()=>{
            unSubscribe();
       }
    },[])

    const authinfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginwithGoogle,
        loginwithGithub,
        logout,
    }

    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

Authprovider.propTypes ={
    children: PropTypes.object
}
export default Authprovider;