import { firebaseAuth, googleProvider, githubProvider } from './firebase';

class AuthService {
    login(provider) {
        const authProvider = this.getProvider(provider);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    logout() {
        firebaseAuth.signOut();
    }

    getProvider(provider) {
        switch(provider) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`undefined provider: ${provider}`);
        }
    }
}

export default AuthService;