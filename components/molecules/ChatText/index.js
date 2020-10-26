import { ContainerChatText, ImageUser, ContainerText } from './styles'
import { Text } from '../../atoms'

const ChatText = ({ image, text, myMessage }) => {
  return (
    <ContainerChatText myMessage={myMessage}>
      <ImageUser src={image} myMessage={myMessage} />
      <ContainerText>
        <Text weight='400' lh='1.4' size='14px'>
          {text}
        </Text>
      </ContainerText>
    </ContainerChatText>
  )
}

export default ChatText
