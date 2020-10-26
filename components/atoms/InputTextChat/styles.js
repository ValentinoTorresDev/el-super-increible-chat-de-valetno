import styled from 'styled-components'

export const InputText = styled.input`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  width: calc(100% - 50px);
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
`
