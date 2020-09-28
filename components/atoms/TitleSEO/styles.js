import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const StyledTitleSeo = styled.h1`
  font-size: ${({ size = '28px' }) => useMediaquery(size, 'mobile')};
  color: ${({ theme, color = 'text' }) => color ? theme[color] : theme.text};
  font-weight: ${({ weight = '600' }) => weight};
  line-height: ${({ lh = '1' }) => lh};
  margin: ${({ m = '0px' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};
  
  @media (min-width: ${Breakpoints.tablet}) {
    font-size: ${({ size = '32px' }) => useMediaquery(size, 'tablet')};
    margin: ${({ m = '0px' }) => useMediaquery(m, 'tablet')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'tablet')};
  }
  @media (min-width: ${Breakpoints.desktop}) {
    font-size: ${({ size = '48px' }) => useMediaquery(size, 'desktop')};
    margin: ${({ m = '0px' }) => useMediaquery(m, 'desktop')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'desktop')};
  } 
`
