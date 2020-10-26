import { InputText } from './styles'

const InputTextChat = ({ text }) => {
  return (
    <InputText value={text.value} onChange={text.onChange} />
  )
}

export default InputTextChat
