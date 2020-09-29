import { ContainerRegister } from './styles'
import { TitleSEO, Input, Button, Text } from '../../atoms'
import { useInput } from '../../../hooks'

const Register = () => {
  const email = useInput('')
  const password = useInput('')

  return (
    <ContainerRegister>
      <TitleSEO>Registro</TitleSEO>
      <Input
        fullwidth
        type='email'
        label='email'
        labelText='Correo Electrónico'
        value={email.value}
        onChange={email.onChange}
      />
      <Input
        fullwidth
        type='password'
        label='password'
        labelText='Contraseña'
        value={password.value}
        onChange={password.onChange}
      />
      <Button fullwidth>
        Crear mi cuenta
      </Button>
      <Text />
    </ContainerRegister>
  )
}

export default Register
