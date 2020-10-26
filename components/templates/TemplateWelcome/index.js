import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ContainerWelcome, ContainerGroups, ContainerButton } from './styles'
import { TitleSEO, Text, Button } from '../../atoms'
import { GroupCategory } from '../../molecules'
import { firebase } from '../../../firebase/client'
import { useAuth } from '../../../context/authContext'
import { useRemoveItemArray } from '../../../hooks'

const TemplateWelcome = () => {
  const { newUser, user } = useAuth()
  const [data, setData] = useState(null)
  const router = useRouter()
  const groups = []

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.firestore()
      .collection('users')
      .doc(user.uid)
      .set({
        groups: groups
      }, { merge: true })
      .then(() => router.push('/'))
  }

  const handleCheck = (e, id) => {
    if (e.target.checked) {
      groups.push(id)
    } else {
      useRemoveItemArray(groups, id)
    }
  }

  useEffect(() => {
    if (!newUser) {
      router.push('/')
    } else if (newUser) {
      firebase.firestore()
        .collection('groups')
        .orderBy('title', 'asc')
        .get()
        .then(({ docs }) => {
          setData(docs.map(doc => ({
            id: doc.id,
            title: doc.data().title,
            imgLink: doc.data().imgLink
          })))
        })
    }
  }, [user])

  return (
    <ContainerWelcome>
      <TitleSEO align='center'>Bienvenido</TitleSEO>
      <Text align='center' m='20px 0 40px 0' weight='400'>Cuéntanos cuales de estos temas te interesan</Text>
      <form onSubmit={handleSubmit}>
        <ContainerGroups>
          {
            data && data.map(doc => {
              return (
                <GroupCategory title={doc.title} img={doc.imgLink} key={doc.id} onChange={handleCheck} id={doc.id} />
              )
            })
          }
        </ContainerGroups>
        <ContainerButton>
          <Button m={0} width='400px'>
            Continuar
          </Button>
        </ContainerButton>
      </form>
    </ContainerWelcome>
  )
}

export default TemplateWelcome
