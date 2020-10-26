import { useState, useEffect } from 'react'
import { ContainerChat } from './styles'
import { useRouter } from 'next/router'
import { useAuth } from '../../../context/authContext'
import { useInput } from '../../../hooks'
import { ChatText, BarChat } from '../../molecules'
import { firebase } from '../../../firebase/client'

const TemplateChat = ({ children }) => {
  const [userData, setUserData] = useState(null)
  const [conversation, setConversation] = useState(null)
  const text = useInput('')

  const { user } = useAuth()

  const router = useRouter()

  const addChat = (text) => {
    firebase.firestore()
      .collection('chats')
      .doc('0GmScDvTCfeJWyEF2Mfe')
      .collection('conversation')
      .add({
        text: text,
        idSend: user.uid,
        imgLink: userData.imgLink,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
  }

  useEffect(() => {
    if (!user) {
      router.push('/signup')
    }
    if (user) {
      firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc) => setUserData(doc.data()))

      // if (userData) {
      firebase.firestore()
        .collection('chats')
        .doc('0GmScDvTCfeJWyEF2Mfe')
        // .where('members', 'array-contains', user.uid)
        .collection('conversation')
        .orderBy('timestamp', 'asc')
        .onSnapshot(({ docs }) => {
          setConversation(docs.map(doc => ({
            id: doc.id,
            idSend: doc.data().idSend,
            text: doc.data().text,
            imgLink: doc.data().imgLink
          })))
        })
      // }
    }
  }, [user])
  if (userData) {
    console.log(userData)
  }
  if (conversation) {
    console.log(conversation)
  }

  return (
    <>
      <ContainerChat>
        {children}
        {(userData && conversation) &&
          <>
            {conversation.map(data => {
              console.log(data.idSend === user.uid)
              return (
                <ChatText image={data.imgLink} text={data.text} key={data.id} myMessage={data.idSend === user.uid} />
              )
            })}
          </>}
        <BarChat addChat={addChat} text={text} />
      </ContainerChat>
    </>
  )
}

export default TemplateChat
