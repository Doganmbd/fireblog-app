// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, GoogleAuthProvider,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,signOut,signInWithPopup} from 'firebase/auth';

// Your web app's Firebase configuration
const app =initializeApp ({
  apiKey:process.env.REACT_APP_FİREBASE_apiKey,
  authDomain:process.env.REACT_APP_FİREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId:process.env.REACT_APP_FİREBASE_projectId,
  storageBucket: process.env.REACT_APP_FİREBASE_storageBucket,
  messagingSenderId:process.env.REACT_APP_FİREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FİREBASE_appId
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = async (email, password,navigate,displayName)=> {
  try{
      let userCredential= await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser, {
          displayName: displayName , })
      console.log(userCredential);

     
  } catch (error) {
     alert(error.message) 
     
  }

}

export const login =async (email, password,navigate)=> {
    
  try{
      let userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential);

     
  } catch (error) {
       alert(error.message) 
 
      
  }

}

export const logOut = () => {
  signOut(auth);
 
  
};


export const loginWithGoogle = (navigate) => {
  //? Google ile giriş yapılması için kullanılan firebase metodu
  const provider = new GoogleAuthProvider();
  //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};