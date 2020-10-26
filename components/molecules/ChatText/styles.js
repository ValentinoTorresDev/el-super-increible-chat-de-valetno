import styled, { css } from 'styled-components'

export const ContainerChatText = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
  ${props => props.myMessage && css`
    justify-content: flex-start;
    flex-direction: row-reverse;
  `}
`

export const ImageUser = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  object-position: center center;
  border-radius: 50%;
  margin: 0 10px 0 0;
  ${props => props.myMessage && css`
    margin: 0 0 0 10px;
  `}
`

export const ContainerText = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 10px;
  border-radius: 4px;
`
