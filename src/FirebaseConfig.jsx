import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCU7sd-cRyHejtaK59RhHmJzskb5ziz_So",
    authDomain: "tutorial-b604d.firebaseapp.com",
    databaseURL: "https://tutorial-b604d.firebaseio.com",
    projectId: "tutorial-b604d",
    storageBucket: "tutorial-b604d.appspot.com",
    messagingSenderId: "218045343144",
    appId: "1:218045343144:web:2dd36f12447c98913d299d"

})
//db contiene toda la base de datos
let db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db;