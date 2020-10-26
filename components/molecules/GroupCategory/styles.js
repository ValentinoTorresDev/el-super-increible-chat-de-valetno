import styled from 'styled-components'
import { Breakpoints } from '../../../styles'

export const ConatinerGroupCategory = styled.label`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 5px;
  background-image: ${({ img = '/audio.png' }) => `url(${img})`} ;
  background-position: center center;
  background-size: cover;
  transition: all 0.15s linear;
  cursor: pointer;
  position: relative;

  &:active{
    transform: scale(.9);
  }

  & input{
    display: none;
  }

  & input:checked ~ div{    
    opacity: 1;
  }

  & > div{
    z-index: 1;
    opacity: 0;
  }

  @media (min-width: ${Breakpoints.tablet}){
    width: 156px;
    height: 156px;
  }

  @media (min-width: ${Breakpoints.desktop}){
    width: 192px;
    height: 192px;
  }
`

export const ContainerChecked = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgba(19,25,25,.8);
  border-radius: 4px;
  transition: all 0.15s linear;
`

export const BackgroundIconCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.backgroundButton};
  border-radius: 50%;
  z-index: 1;

  @media (min-width: ${Breakpoints.tablet}){
    width: 48px;
    height: 48px;
  }

  @media (min-width: ${Breakpoints.desktop}){
    width: 64px;
    height: 64px;
  }
`
