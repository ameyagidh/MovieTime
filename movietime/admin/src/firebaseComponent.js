import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAfVJ0O5ptoSvXIv1qDZiN2d3MSibiFzWQ",
    authDomain: "movietime-4bacc.firebaseapp.com",
    projectId: "movietime-4bacc",
    storageBucket: "movietime-4bacc.appspot.com",
    messagingSenderId: "57903063009",
    appId: "1:57903063009:web:1ac7a92f61e53ae0a9fca0",
    measurementId: "G-N5JXB9W2TX"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;