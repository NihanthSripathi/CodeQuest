const firebaseConfig = {
    apiKey: "AIzaSyB6KW3MjtaFNT4PJ3HesCgxnqjcQg4QKiA",
    authDomain: "codequest-59044.firebaseapp.com",
    projectId: "codequest-59044",
    storageBucket: "codequest-59044.appspot.com",
    messagingSenderId: "460144033814",
    appId: "1:460144033814:web:6c71d836e8bee820d5f537",
    measurementId: "G-PNKSMK391Y"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });