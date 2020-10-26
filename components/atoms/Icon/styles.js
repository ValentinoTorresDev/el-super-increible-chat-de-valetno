import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const StyledIcon = styled.span`
  display: flex;
  margin: ${({ m = '0px' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};
  & svg{
    width: auto;
    height: ${({ height = 'auto' }) => useMediaquery(height, 'mobile')};
  }

  @media (min-width: ${Breakpoints.tablet}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'tablet')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'tablet')};
    & svg{
      height: ${({ height = 'auto' }) => useMediaquery(height, 'tablet')};
    }
  }

  @media (min-width: ${Breakpoints.desktop}) {
    margin: ${({ m = '0px' }) => useMediaquery(m, 'desktop')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'desktop')};
    & svg{
      height: ${({ height = 'auto' }) => useMediaquery(height, 'desktop')};
    }
  } 
`
