import { useState, useEffect, createContext, useContext } from 'react'
import { firebase } from '../firebase/client'

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

  const signinWithEmailPassword = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
  }

  const loginWithEmailPassword = (email, password) => {
    return firebase
      .auth().signInWithEmailAndPassword(email, password)
  }

  const signinWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  const siginWithFacebook = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }

  const singinWithGitBub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
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
    signinWithEmailPassword,
    loginWithEmailPassword,
    signinWithGoogle,
    siginWithFacebook,
    singinWithGitBub,
    signout
  }
}
