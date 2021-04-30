import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDm_JxZMhuMb_DRHfMw_fwJPqAvqJp9UC4',
  authDomain: 'react-journal-app-35555.firebaseapp.com',
  projectId: 'react-journal-app-35555',
  storageBucket: 'react-journal-app-35555.appspot.com',
  messagingSenderId: '1054449930791',
  appId: '1:1054449930791:web:7806bc2639749cc28fb402'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
