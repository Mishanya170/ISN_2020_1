/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDgmZ_znuTH7pKKObOx8LrQ_zmMh90F8Yk",
  authDomain: "friendlychat-2db7c.firebaseapp.com",
  projectId: "friendlychat-2db7c",
  storageBucket: "friendlychat-2db7c.appspot.com",
  messagingSenderId: "837934128908",
  appId: "1:837934128908:web:51faf84d68fe960d637329",
  measurementId: "G-EYPN9NK579"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}