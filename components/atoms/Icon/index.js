import { StyledIcon } from './styles'

const Icon = (props) => {
  return (
    <StyledIcon {...props}>
      {props.children}
    </StyledIcon>
  )
}

export default Icon
