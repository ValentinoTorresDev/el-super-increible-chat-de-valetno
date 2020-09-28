import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ fullwidth }) => fullwidth ? '100%' : 'auto'};
  margin: ${({ m = '20px 0 0 0' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};

  @media (min-width: ${Breakpoints.tablet}){
    max-width: 400px;
  }
`

export const Label = styled.label`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 600;
`

export const StyledInput = styled.input`
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin-top: 10px;
  background: ${({ theme }) => theme.backgroundSecondary};
  border: none;
  border-radius: 4px;

  @media (min-width: ${Breakpoints.desktop}){
    height: 50px;
  }
`
