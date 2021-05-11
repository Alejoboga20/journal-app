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

const firebaseConfigTesting = {
  apiKey: 'AIzaSyAltB-4FbCkOirnhy2bOE50blvAMgwLtjg',
  authDomain: 'expensify-3aaf9.firebaseapp.com',
  databaseURL: 'https://expensify-3aaf9.firebaseio.com',
  projectId: 'expensify-3aaf9',
  storageBucket: 'expensify-3aaf9.appspot.com',
  messagingSenderId: '173409672265',
  appId: '1:173409672265:web:1941a13e23d0d6ce6a7398'
};

if (process.env.NODE_ENV === 'test') {
  //testing
  firebase.initializeApp(firebaseConfigTesting);
} else {
  //dev prod
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
