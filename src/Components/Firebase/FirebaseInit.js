import { initializeApp } from "firebase/app"
import firebaseConfig from "./FirebaseConfig"


const initAuthentication = () => {
    // configuration for the firebase and also initializing app
    initializeApp(firebaseConfig)
}

export default initAuthentication