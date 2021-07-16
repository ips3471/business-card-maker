import { firebaseDatabase } from './firebase';

class CardRepository {
    cardSync(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
    }
    syncOff(userId) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.off();
    }
    saveCard(userId, profile) {
        firebaseDatabase.ref(`${userId}/cards/${profile.id}`).set(profile);
    }
    removeCard(userId, profile) {
        firebaseDatabase.ref(`${userId}/cards/${profile.id}`).remove();
    }
}

export default CardRepository;