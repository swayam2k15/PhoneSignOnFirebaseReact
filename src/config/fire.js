import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyARA8hD9ky28xtB-wg_tuIkWypCirjcd2I",
    authDomain: "emp-project-d9a74.firebaseapp.com",
    databaseURL: "https://emp-project-d9a74.firebaseio.com",
    projectId: "emp-project-d9a74",
    storageBucket: "emp-project-d9a74.appspot.com",
    messagingSenderId: "59498148381"
  };

  firebase.initializeApp(config);


  export default firebase;