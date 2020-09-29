import { StyledButtonRegister } from './styles'

const ButtonSocialRegister = (props) => {
  return (
    <StyledButtonRegister {...props}>
      {props.children}
    </StyledButtonRegister>
  )
}

export default ButtonSocialRegister
