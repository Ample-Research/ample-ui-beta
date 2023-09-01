import firebaseApp from "../utils/firebaseconfig";// This is the Firebase object from the previous tutorial
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default auth;