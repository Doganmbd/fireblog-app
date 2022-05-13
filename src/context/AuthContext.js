import {createContext,useState,useContext , useEffect} from "react"

import {signup,login,logOut,loginWithGoogle,onAuthStateChanged} from '../helpers/firebase'


export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext);
  }

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false) })
    
      return unsubscribe ;
    }, [])
    

    const values = {
        currentUser,
        signup,
        login,
        logOut,
        loginWithGoogle,
    };

  return (
    <AuthContext.Provider value = {values} >
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider