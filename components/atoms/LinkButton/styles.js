import styled, { css } from 'styled-components'
import { useMediaquery } from '../../../hooks'
import { Breakpoints } from '../../../styles'

export const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.backgroundButton};
  box-shadow: 0px 0px 20px rgba(10, 22, 74, 0.6);
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.15s linear;
  &:active{
    transform: scale(.9)
  }
  ${props => props.outlined && css`
    background: transparent;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.text};
    box-shadow: none;
  `}

  @media (min-width: ${Breakpoints.tablet}){
    max-width: 400px;
    height: 50px;
  }
`

export const ContainerLinkButton = styled.a`
  width: ${({ fullwidth }) => fullwidth ? '100%' : 'auto'};
  margin: ${({ m = '20px 0 0 0' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px 20px' }) => useMediaquery(p, 'mobile')};


  @media (min-width: ${Breakpoints.tablet}){
    max-width: 400px;
    height: 50px;
  }
`
