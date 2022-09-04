/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
    apiKey: "AIzaSyCsLrBhQ_av_rext-ob38nZQhEhZASE6fE",
    authDomain: "planning-6317a.firebaseapp.com",
    projectId: "planning-6317a",
    storageBucket: "planning-6317a.appspot.com",
    messagingSenderId: "883064645820",
    appId: "1:883064645820:web:5bf2507629120159a548b9",
    measurementId: "G-6YDFBF3WXE"
};
  
export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}