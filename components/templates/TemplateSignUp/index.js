import { useRouter } from 'next/router'
import { ContainerRegister, ContainerSocialRegister, Container } from './styles'
import { TitleSEO, Input, Button, Text, ButtonSocialRegister, Icon } from '../../atoms'
import { useInput } from '../../../hooks'
import { Google, Facebook, Github } from '../../../icons'
import { useAuth } from '../../../context/authContext'

const TemplateSignUp = () => {
  const router = useRouter()

  const email = useInput('')
  const password = useInput('')

  const { user, signinWithEmailPassword, signinWithGoogle, siginWithFacebook, singinWithGitBub } = useAuth()

  user && router.push('/')

  console.log(user)

  return (
    <ContainerRegister>
      <TitleSEO>Registro</TitleSEO>
      <Container>
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
        <Button fullwidth onClick={() => signinWithEmailPassword(email.value, password.value)}>
          Crear mi cuenta
        </Button>
        <Text m='20px 0' align='center'>
        O regístrate con
        </Text>
        <ContainerSocialRegister>
          <ButtonSocialRegister>
            <Icon height='32px' onClick={signinWithGoogle}><Google /></Icon>
          </ButtonSocialRegister>
          <ButtonSocialRegister m='0 20px' onClick={siginWithFacebook}>
            <Icon height='32px'><Facebook /></Icon>
          </ButtonSocialRegister>
          <ButtonSocialRegister onClick={singinWithGitBub}>
            <Icon height='32px'><Github /></Icon>
          </ButtonSocialRegister>
        </ContainerSocialRegister>
      </Container>

      <Container>
        <Text m='20px 0 0 0' align='center'>
          ¿Ya tienes cuenta?
        </Text>
        <Button fullwidth outlined>
          Iniciar Sesión
        </Button>
      </Container>
    </ContainerRegister>
  )
}

export default TemplateSignUp
