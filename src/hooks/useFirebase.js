import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Components/Firebase/Firebase.init'



initializeAuthentication()



const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)


    }

    const logOut = () => {

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])


    return {
        user, googleSignIn, logOut

    }
}


export default useFirebase;