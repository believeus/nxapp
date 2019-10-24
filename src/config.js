import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyA6LHI383KFdgHnqq2RHNZfQLE6TmDaocM',
  authDomain: 'com.hkgepitherapeutics.epiAging',
  databaseURL: 'https://reactnativedatabase-9adb8.firebaseio.com/',
  projectId: 'reactnativedatabase-9adb8',
  storageBucket: 'gs://reactnativedatabase-9adb8.appspot.com/',
  messagingSenderId: '428404975638'
};
let app = Firebase.initializeApp(config);
export const db = app.database();