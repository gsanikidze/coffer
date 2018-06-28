import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArTL9J_RCZ9KV9VOcbiCrZPfa2ROEzRKo",
    authDomain: "coffer-dev.firebaseapp.com",
    databaseURL: "https://coffer-dev.firebaseio.com",
    projectId: "coffer-dev",
    storageBucket: "coffer-dev.appspot.com",
    messagingSenderId: "946373627054"
  };

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();



export { firebaseDB, firebase };