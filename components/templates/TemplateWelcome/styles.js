import styled from 'styled-components'
import { Breakpoints } from '../../../styles'

export const ContainerWelcome = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 40px 20px;
`

export const ContainerGroups = styled.section`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 128px);
  grid-template-rows: repeat(auto-fill, 128px);
  grid-gap: 20px;
  margin: 0 auto;
  justify-content: center;

  @media (min-width: ${Breakpoints.tablet}){
    grid-template-columns: repeat(auto-fill, 156px);
    grid-template-rows: repeat(auto-fill, 156px);
  }

  @media (min-width: ${Breakpoints.desktop}){
    grid-template-columns: repeat(auto-fill, 192px);
    grid-template-rows: repeat(auto-fill, 192px);
  }
`

export const ContainerButton = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
`
