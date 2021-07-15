import firebaseApp from './firebase';

class CardRepository {
    cardSync(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        // return ref.off();
    }
    syncOff(userId) {
        const ref = firebaseApp.database().ref(`${userId}/cards`);
        ref.off();
    }
    saveCard(userId, profile) {
        firebaseApp.database().ref(`${userId}/cards/${profile.id}`).set(profile);
    }
    removeCard(userId, profile) {
        firebaseApp.database().ref(`${userId}/cards/${profile.id}`).remove();
    }
}

export default CardRepository;