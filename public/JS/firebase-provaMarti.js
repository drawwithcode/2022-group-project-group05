let allArtworks; // contains all artworks

// load and initialize Firebase
async function firebaseSetup() {

// load firebase modules using import("url")
const fbApp = "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
const fbDatabase = "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

// load functions
const { initializeApp } = await import(fbApp);
const { getDatabase, ref, push, set, onValue } = await import(fbDatabase);

  // firebase configuration
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

  // initialize Firebase
  const app = initializeApp(firebaseConfig);

  // initialize Database
  const database = getDatabase(app);

  // database reference
  const artworksRef = ref(database, "artworks");

  // retrieve the stored artworks and put them inside the grid randomly
  onValue(artworksRef, (snapshot) => {
    allArtworks = snapshot.val();
    allArtworksArray = Object.values(allArtworks);

    const imageWrapper = document.getElementById("image-wrapper");

    if (!imageWrapper) {
      console.log("the image-wrapper element was not found");
      return;
    }

    while (imageWrapper.childElementCount) {
      imageWrapper.innerHTML = "";
    }

    let i = 0;
    for (const artwork of allArtworksArray) {
      // add noise, like noise(i) * 5
      // generate a number
      let span = Math.floor(Math.random() * 3);

      // add a random number of empty elements before another image
      for (let x = 0; x < span; x++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("image-container");
        imageWrapper.appendChild(emptyDiv);
      }

      // add an artwork
      const el = document.createElement("div");
      el.classList.add("image-container");
      const img = document.createElement("img");
      img.src = artwork;
      img.classList.add("artwork-snapshot");
      el.appendChild(img);
      imageWrapper.appendChild(el);

      i++;
    }
  });

  // add an artwork
  addArtwork = (data) => {
    // create a reference
    const newArtworkRef = push(artworksRef);
    // add data to the database
    set(newArtworkRef, data);
  };
}

firebaseSetup();
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
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

      import { getDatabase, ref, set, get, update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      const db = getDatabase();

      export function writeUserData(userId, data) {
       // console.log(data)
        //userid sarà il nome del file
        //scrivo nella cartella graphics data che è un parametro che si definisce quando chiamo la funzione nel setup
        set(ref(db, 'gallery/' + userId), {
          data: data
        });
      }

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
      console.log(recived)