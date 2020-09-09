import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/database'

// firebase init
const config = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
// export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase