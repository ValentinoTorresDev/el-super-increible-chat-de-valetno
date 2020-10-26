import { ContainerInputText } from './styles'
import { InputTextChat, ButtonSubmitChat } from '../../atoms'

const BarChat = ({ addChat, text }) => {
  const SubmitChatText = (e) => {
    e.preventDefault()
    addChat(text.value)
    text.setValue('')
  }

  return (
    <ContainerInputText onSubmit={SubmitChatText}>
      <InputTextChat text={text} />
      <ButtonSubmitChat addChat={addChat} text={text} />
    </ContainerInputText>
  )
}

export default BarChat
