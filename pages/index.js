import { TemplateChat } from '../components/templates'
import { Button } from '../components/atoms'
import { useAuth } from '../context/authContext'

export default function Home () {
  const { signout } = useAuth()
  return (
    <TemplateChat>
      <Button onClick={signout}>Salir</Button>
    </TemplateChat>
  )
}
