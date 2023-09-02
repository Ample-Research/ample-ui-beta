import { firebaseApp } from "../../utils/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebaseApp);

export default auth;