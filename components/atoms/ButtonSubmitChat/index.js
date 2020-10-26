import Icon from '../Icon'
import { ButtonSubmit } from './styles'
import { Submit } from '../../../icons'

const ButtonSubmitChat = () => {
  return (
    <ButtonSubmit>
      <Icon height='28px' m={{ mobile: '0 0 5px 5px' }}>
        <Submit />
      </Icon>
    </ButtonSubmit>
  )
}

export default ButtonSubmitChat
