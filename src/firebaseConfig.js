import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDuWn7DLUWa-79Wl8UOycoLPjuI8KaAxjs",
  authDomain: "jonaswebb19-realtime.firebaseapp.com",
  databaseURL: "https://jonaswebb19-realtime.firebaseio.com",
  projectId: "jonaswebb19-realtime",
  storageBucket: "jonaswebb19-realtime.appspot.com",
  messagingSenderId: "165625169672",
  appId: "1:165625169672:web:854147baed0e650d64cebd"
};

firebase.initializeApp(firebaseConfig);

export default firebase;