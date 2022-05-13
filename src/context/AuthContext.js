import {createContext,useState} from "react"

import {signup,login,logOut,loginWithGoogle} from '../helpers/firebase'


export const AuthContext = createContext()



const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()







    const values = {
        currentUser,
        signup,
        login,
        logOut,
        loginWithGoogle,
    };

  return (
    <AuthContext.Provider value = {values} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider