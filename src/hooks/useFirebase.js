import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile  } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(true)

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     const signInUsingGoogle = () => {
          setIsLoading(true)
          return signInWithPopup(auth, googleProvider)
     }

     const logOut = () => {
          setIsLoading(true)
          signOut(auth)
               .then(() => {
               setUser({})
               })
          .finally(()=> setIsLoading(false))
     }
     useEffect(() => {
          onAuthStateChanged(auth, user => {
               if (user) {
                    setUser(user)
               }
               setIsLoading(false)
          })
     }, [])


     return {
          user,
          setUser,
          error,
          setError,
          signInUsingGoogle,
          logOut,
          auth,
          isLoading,
          setIsLoading,
          updateProfile
     }
}
export default useFirebase;