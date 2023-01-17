
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyC2E9PqGGjWmW2n-zetbOPHWjWDWVCcWFM",
        authDomain: "letteralmenten01.firebaseapp.com",
        projectId: "letteralmenten01",
        storageBucket: "letteralmenten01.appspot.com",
        messagingSenderId: "964463300527",
        appId: "1:964463300527:web:4da7b85d1ca1eab00e295a",
        measurementId: "G-BJ922KXF12",
        databaseURL: "https://letteralmenten01-default-rtdb.europe-west1.firebasedatabase.app/"
      };

      import { getDatabase, ref, set, get, update, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      const db = getDatabase(app);
      const dbref = ref(db)

      export function writeUserData(userId, data) {
       // console.log(data)
        //userid sarà il nome del file
        //scrivo nella cartella graphics data che è un parametro che si definisce quando chiamo la funzione nel setup
        set(ref(db, 'gallery/'+ userId), {
          data: data
        });

      }

      let artwork;

        //ref(db, `gallery/${userId}`)
        get(ref(db, `gallery/ciaomamma`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            artwork = snapshot.val()
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });

        /*onValue(dbref, (snapshot) => {
          const data = snapshot.val();
          console.log("onValue"+ data)
        });*/

      export {artwork};

      


      /*
      let recived;
      export function readUserData(userId, data) {
        get(ref(db, `gallery/${userId}`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            data = snapshot.val()
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
      }
      console.log(recived)*/