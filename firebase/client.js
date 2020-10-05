import * as firebase from 'firebase/app'
import 'firebase/auth'

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

// Mapeamos el usuario

// const mapUserFromFirebaseAuth = (user) => {
//   if (user) {
//     const { displayName, email, photoURL } = user
//     return {
//       // avatar: photoURL,
//       // username: displayName,
//       email
//     }
//   }
// }

// Validar si el usuario se encuentra logueado

// export const onAuthStateChange = (onChange) => {
//   return firebase
//     .auth()
//     .onAuthStateChanged(user => {
//       const normalizedUser = mapUserFromFirebaseAuth(user)
//       onChange(normalizedUser)
//     })
// }

// Autenticación con GitHub

// export const loginWithGitHub = () => {
//   const gitHubProvider = new firebase.auth.GithubAuthProvider()
//   return firebase
//     .auth()
//     .signInWithPopup(gitHubProvider)
// }

// Autenticación con Email y password

// export const singUpWithEmailPassword = (email, password) => {
//   return firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
// }
