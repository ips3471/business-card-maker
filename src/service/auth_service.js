import firebase from 'firebase';
import firebaseApp from './service';

class AuthService {
    login(provider) {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        return firebaseApp.auth()
        .signInWithPopup(authProvider)
        .then(console.log)
    }
    
}

export default AuthService;