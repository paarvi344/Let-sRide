import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyC5kvPU0Q2_PRWo-H47ELb5rTQHCE3MCLI",
  authDomain: "let-sride-4ae06.firebaseapp.com",
  projectId: "let-sride-4ae06",
  storageBucket: "let-sride-4ae06.appspot.com",
  messagingSenderId: "1023775534987",
  appId: "1:1023775534987:web:3584a836a2e2e3db56498e"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

