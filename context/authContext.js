import { useState, useEffect, createContext, useContext } from 'react'
import useRandomNum from '../hooks/useRandomNum'
import { firebase } from '../firebase/client'

const userIMages = [
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F1.png?alt=media&token=886573e1-85b1-488c-a497-e13c81249dd5',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F2.png?alt=media&token=4ca46ff8-e4a8-4e7d-97cd-e24021920913',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F3.png?alt=media&token=24142db4-68c0-4846-917e-dd340545757b',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F4.png?alt=media&token=72dbaa1d-9058-4115-a658-5e646a629f62',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F5.png?alt=media&token=389d00aa-06c4-4a73-9a90-f577f3aedc51',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F6.png?alt=media&token=416f9a0e-8d76-4937-873a-7abe413cf526',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F7.png?alt=media&token=1bb23b23-0b69-4a19-ac82-685c9c6287ea',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F8.png?alt=media&token=15401a87-2d28-4f0a-8cb3-458eb9f45919',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F9.png?alt=media&token=7a6a7aba-0f37-46d6-8a92-ecfcd7fa5cfa',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F10.png?alt=media&token=a290b9ad-d8e2-48a3-af5a-866667d22ef1',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F11.png?alt=media&token=887e3407-a452-4f79-a085-d933cd87860a',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F12.png?alt=media&token=aa571786-d918-4179-ba63-4cfb900b88a5',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F13.png?alt=media&token=e856446f-613f-42a3-8cef-5c2de4a63cc8',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F14.png?alt=media&token=ba4115f2-1d99-48e8-9d36-41542850df22',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F15.png?alt=media&token=06373341-0b22-4a5f-89e9-dd06b9471621',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F16.png?alt=media&token=fb3fb4ad-1a3c-4680-8b9e-b101009598e8',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F17.png?alt=media&token=4afeb0d5-c769-4a15-99e7-ca96a2b7c4d4',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F18.png?alt=media&token=8d0e5c95-4dd9-40cd-960c-dddf6b8885a8',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F19.png?alt=media&token=c2b3b0cd-d5a2-43e2-97e9-b6aefcbc5c26',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F20.png?alt=media&token=328aa80d-ecad-480a-b900-cc9f78cc6661',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F21.png?alt=media&token=b833e967-a92e-4253-bfe5-923400047d3f',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F22.png?alt=media&token=0b74b34f-79c6-45b7-a60e-932410f72629',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F23.png?alt=media&token=a4043d7e-2c4b-4387-a35a-fb8be839f375',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F24.png?alt=media&token=96140dc8-4722-4c91-8949-d2284997d532',
  'https://firebasestorage.googleapis.com/v0/b/el-increible-chat-de-valentino.appspot.com/o/imgUsers%2F25.png?alt=media&token=39f7d2d8-6b1e-41e8-aa01-0d7f80cd96f5'
]

const authContext = createContext()

export const AuthProvider = (props) => {
  const auth = useProviderAuth()
  return <authContext.Provider value={auth} {...props} />
}

export const useAuth = () => {
  const context = useContext(authContext)

  if (!context) {
    throw new Error('El contexto no existe')
  }

  return context
}

const useProviderAuth = () => {
  const [user, setUser] = useState(null)
  const [newUser, setNewUser] = useState(null)

  const addUserFirestore = (email, imgLink, name, uid) => {
    return firebase
      .firestore()
      .collection('users')
      .doc(uid).set({
        email,
        imgLink,
        name,
        uid,
        groups: []
      })
  }

  const signinWithEmailPassword = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        const n = useRandomNum(0, 24)
        const { user } = res
        setNewUser(res.additionalUserInfo.isNewUser)
        addUserFirestore(email, userIMages[n], `anónimo-${n + 1}`, user.uid)
      })
  }

  const loginWithEmailPassword = (email, password) => {
    return firebase
      .auth().signInWithEmailAndPassword(email, password)
  }

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        const { user } = res
        setNewUser(res.additionalUserInfo.isNewUser)
        addUserFirestore(user.email, user.photoURL, user.displayName, user.uid)
      })
  }

  const siginWithFacebook = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        const { user } = res
        setNewUser(res.additionalUserInfo.isNewUser)
        addUserFirestore(user.email, user.photoURL, user.displayName, user.uid)
      })
  }

  const singinWithGitBub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(res => {
        const { user } = res
        setNewUser(res.additionalUserInfo.isNewUser)
        addUserFirestore(user.email, user.photoURL, user.displayName, user.uid)
      })
  }

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false))
  }

  useEffect(() => {
    const unsuscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
    return () => unsuscribe()
  }, [])

  return {
    user,
    newUser,
    signinWithEmailPassword,
    loginWithEmailPassword,
    signinWithGoogle,
    siginWithFacebook,
    singinWithGitBub,
    signout
  }
}
