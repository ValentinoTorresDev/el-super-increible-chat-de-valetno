import { Button } from '../components/atoms'
import { useAuth } from '../context/authContext'

export default function Home () {
  const { signout } = useAuth()
  return (
    <>
      <h1>El super increíble chat de Valentino</h1>
      <Button onClick={signout}>Salir</Button>
    </>
  )
}
