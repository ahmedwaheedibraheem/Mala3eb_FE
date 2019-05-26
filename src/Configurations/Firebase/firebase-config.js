import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBtLN2SJe2XP54Nvtmsttx7EdE12m63QCQ",
    authDomain: "react-26c41.firebaseapp.com",
    databaseURL: "https://react-26c41.firebaseio.com",
    projectId: "react-26c41",
    storageBucket: "react-26c41.appspot.com",
    messagingSenderId: "580989495117"
};

firebase.initializeApp(config);

const storage = firebase.storage();

export default storage;