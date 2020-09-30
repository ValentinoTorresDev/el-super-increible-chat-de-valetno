import { ContainerRegister, ContainerSocialRegister, Container } from './styles'
import { TitleSEO, Input, Button, Text, ButtonSocialRegister, Icon } from '../../atoms'
import { useInput } from '../../../hooks'
import { Google, Facebook, Github } from '../../../icons'

const TemplateSignUp = () => {
  const email = useInput('')
  const password = useInput('')

  return (
    <ContainerRegister>
      <TitleSEO>Ingresar</TitleSEO>

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
        <Button fullwidth>
          Iniciar Sesión
        </Button>
        <Text m='20px 0' align='center'>
          O inicia sesión con
        </Text>
        <ContainerSocialRegister>
          <ButtonSocialRegister>
            <Icon height='32px'><Google /></Icon>
          </ButtonSocialRegister>
          <ButtonSocialRegister m='0 20px'>
            <Icon height='32px'><Facebook /></Icon>
          </ButtonSocialRegister>
          <ButtonSocialRegister>
            <Icon height='32px'><Github /></Icon>
          </ButtonSocialRegister>
        </ContainerSocialRegister>
      </Container>

      <Container>
        <Text m='20px 0 0 0' align='center'>
          ¿Aún no tienes cuenta?
        </Text>
        <Button fullwidth outlined>
          Regístrate
        </Button>
      </Container>
    </ContainerRegister>
  )
}

export default TemplateSignUp
