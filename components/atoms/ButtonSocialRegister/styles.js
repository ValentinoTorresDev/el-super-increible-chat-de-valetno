import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const StyledButtonRegister = styled.button`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.text};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ m = '0px' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};

  @media (${Breakpoints.tablet}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'tablet')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'tablet')};
  }
  
  @media (${Breakpoints.desktop}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'desktop')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'desktop')};
  }
`
