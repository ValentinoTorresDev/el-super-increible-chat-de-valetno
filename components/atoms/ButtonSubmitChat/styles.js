import styled from 'styled-components'

export const ButtonSubmit = styled.button`
  width: 40px;
  height: 40px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundButton};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.15s linear;
  &:active{
    transform: scale(.9)
  }
`
