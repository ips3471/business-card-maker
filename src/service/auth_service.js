import firebaseApp from './service';
import firebase from 'firebase/app';
import 'firebase/auth';


class AuthService {
    login(provider) {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        return firebaseApp.auth()
        .signInWithPopup(authProvider)
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebase.auth().signOut();
    }
}

export default AuthService;