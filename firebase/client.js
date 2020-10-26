import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Iniciamos firebase
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCNEoYnKdq6dq56Ap9MQCxmgokFreZV_Vc',
    authDomain: 'el-increible-chat-de-valentino.firebaseapp.com',
    databaseURL: 'https://el-increible-chat-de-valentino.firebaseio.com',
    projectId: 'el-increible-chat-de-valentino',
    storageBucket: 'el-increible-chat-de-valentino.appspot.com',
    messagingSenderId: '691084480320',
    appId: '1:691084480320:web:6f106e8efa3f9901a674a5',
    measurementId: 'G-F3304RDSED'
  })

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
}

export { firebase }
