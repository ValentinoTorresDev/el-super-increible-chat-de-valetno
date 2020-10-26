import styled from 'styled-components'

export const ContainerChat = styled.section`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  width: 100%;
  /* height: calc(100vh - 60px); */
  /* overflow-y: scroll;   */
  padding: 16px 16px 60px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
`
