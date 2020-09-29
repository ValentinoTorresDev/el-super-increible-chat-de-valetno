import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const StyledIcon = styled.span`
  display: flex;
  margin: ${({ m = '0px' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};
  & svg{
    width: auto;
    height: ${({ height = 'auto' }) => height};
  }
  @media (${Breakpoints.tablet}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'laptop')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'laptop')};
  }
  @media (${Breakpoints.desktop}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'tablet')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'tablet')};
  } 
`
