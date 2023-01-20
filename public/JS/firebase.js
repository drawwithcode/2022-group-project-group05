
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"; //inizializzo firebase


const firebaseConfig = { //configurazione di firebase
  apiKey: "AIzaSyC2E9PqGGjWmW2n-zetbOPHWjWDWVCcWFM",
  authDomain: "letteralmenten01.firebaseapp.com",
  projectId: "letteralmenten01",
  storageBucket: "letteralmenten01.appspot.com",
  messagingSenderId: "964463300527",
  appId: "1:964463300527:web:4da7b85d1ca1eab00e295a",
  measurementId: "G-BJ922KXF12",
  databaseURL: "https://letteralmenten01-default-rtdb.europe-west1.firebasedatabase.app/"
};

//importo le funzioni che mi servono
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//funzione che salva gli elementi del sul database 
export function writeUserData(userId, data) {
  set(ref(db, 'N01-gallery/'+ userId), {
    data: data
  });
}

let artwork;

//funzione che recupera gli elementi dal database
get(ref(db, `N01-gallery/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());

    artwork = snapshot.val()
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

export {artwork};