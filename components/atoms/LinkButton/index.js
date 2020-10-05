import Link from 'next/link'
import { StyledButton, ContainerLinkButton } from './styles'

const LinkButton = (props) => {
  return (
    <Link href={props.to}>
      <ContainerLinkButton {...props}>
        <StyledButton {...props}>
          {props.children}
        </StyledButton>
      </ContainerLinkButton>
    </Link>
  )
}

export default LinkButton
