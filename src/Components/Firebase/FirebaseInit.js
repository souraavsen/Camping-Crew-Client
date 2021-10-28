import { initializeApp } from "firebase/app"
import firebaseConfig from "./FirebaseConfig"


const initAuthentication = () => {
    // getting configuration from the FirebaseConfig.js file and also initializing app
    initializeApp(firebaseConfig)
}

export default initAuthentication