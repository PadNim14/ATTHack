// import React from 'react'
// import { reactLocalStorage } from 'reactjs-localstorage'
// const url = "https://a1146b7b-5894-46e1-85ec-16a94453b684-bluemix.cloudantnosqldb.appdomain.cloud/"
    const url = "https://apikey-v2-2nc3i8vjl1xhbtubrbcctil58kzq2n0kit8n7isqlc2w:d1d6a20a89e36caed91d9b516213eaeb@a8a9953a-ed57-47e5-9f3e-d84a1af93d46-bluemix.cloudantnosqldb.appdomain.cloud/newdb"
    const cqs = require('cloudant-quickstart')
    const db = cqs(url)
    var test = reactLocalStorage.getItem("localName")
    db.create().then(console.log)
    var docs = [
        { "name": "Ferris Bueller", "actor": "Matthew Broderick", "dob": "1962-03-21" },
        { "name": "Sloane Peterson", "actor": "Mia Sara", "dob": "1967-06-19" },
        { "name": {test}, "actor": "Alan Ruck", "dob": "1956-07-01" }
    ]
    db.insert(docs).then(console.log)
    
    var newdoc = { name: "Ed Rooney", actor: "Jeffrey Jones", dob: "1946-09-28" }
    db.insert(newdoc).then(console.log)
    db.get('95b51f94118ae2d852393c63edacf462').then(console.log)
// export default Database

// { _id: '95b51f94118ae2d852393c63edacf462',
//  name: 'Ed Rooney',
//  actor: 'Jeffrey Jones',
//  dob: '1946-09-28' }
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBoSgCtLBdGPfD22Ohca6hUSJdoZqyD3EA",
//   authDomain: "testdatabase-bf2af.firebaseapp.com",
//   databaseURL: "https://testdatabase-bf2af-default-rtdb.firebaseio.com",
//   projectId: "testdatabase-bf2af",
//   storageBucket: "testdatabase-bf2af.appspot.com",
//   messagingSenderId: "853875504461",
//   appId: "1:853875504461:web:d68ed4197de54c67203304",
//   measurementId: "G-SS5FJ6FK4X"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);