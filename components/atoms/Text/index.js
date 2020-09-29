import { StyledText } from './styles'

const Text = (props) => {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  )
}

export default Text
