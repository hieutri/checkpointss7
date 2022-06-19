const init = () => {
    console.log("Window loaded");
    // Import the functions you need from the SDKs you need
  
    // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyD7o6rp-wy-cj1EQSDSKJsmLcWsb7duBzs",
        authDomain: "baitap-te.firebaseapp.com",
        projectId: "baitap-te",
        storageBucket: "baitap-te.appspot.com",
        messagingSenderId: "636635944834",
        appId: "1:636635944834:web:6a1f8e55ccc1601998219b"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    // const app = initializeApp(firebaseConfig);
    console.log(firebase.app().name); //DEFAULT
    // console.log(firebase.app().name);
  
  }
  
  
  
  window.onload = init;