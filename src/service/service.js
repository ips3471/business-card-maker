import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6vZZQW7cPXX4PP9xJJbJ8Jz4ob907Rmo",
    authDomain: "business-card-maker-32eb0.firebaseapp.com",
    databaseURL: "https://business-card-maker-32eb0-default-rtdb.firebaseio.com",
    projectId: "business-card-maker-32eb0",
};
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
