import { ContainerInput, Label, StyledInput } from './styles'

const Input = (props) => {
  return (
    <ContainerInput {...props}>
      <Label htmlFor={props.label}>{props.labelText}</Label>
      <StyledInput type={props.type} id={props.label} />
    </ContainerInput>
  )
}

export default Input
