import styled from 'styled-components'
import { useMediaquery } from '../../../hooks'
import { Breakpoints } from '../../../styles'

export const StyledButton = styled.button`
  width: ${({ fullwidth }) => fullwidth ? '100%' : 'auto'};
  height: 40px;
  margin: ${({ m = '20px 0 0 0' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px 20px' }) => useMediaquery(p, 'mobile')};
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

  @media (min-width: ${Breakpoints.tablet}){
    max-width: 400px;
    height: 50px;
  }
`
