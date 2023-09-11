import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";

  export const logout = () => {
    localStorage.removeItem('lastTask');
    signOut(auth).then(() => {
    }).catch((error) => {
        console.log(error)
    });
    }

