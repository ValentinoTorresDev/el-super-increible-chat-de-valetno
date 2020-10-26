import styled from 'styled-components'
import { Breakpoints } from '../../../styles'
import { useMediaquery } from '../../../hooks'

export const StyledText = styled.p`
  color: ${({ theme, color = 'text' }) => theme[color]};
  font-size: ${({ size = '16px' }) => useMediaquery(size, 'mobile')};
  font-weight: ${({ weight = '500' }) => weight};
  line-height: ${({ lh = '1' }) => useMediaquery(lh, 'mobile')};
  margin: ${({ m = '0px' }) => useMediaquery(m, 'mobile')};
  padding: ${({ p = '0px' }) => useMediaquery(p, 'mobile')};
  text-align: ${({ align = 'left' }) => align};

  @media (min-width: ${Breakpoints.tablet}) {
    font-size: ${({ size = '16px' }) => useMediaquery(size, 'tablet')};
    line-height: ${({ lh = '1' }) => useMediaquery(lh, 'tablet')};
    margin: ${({ m = '0px' }) => useMediaquery(m, 'tablet')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'tablet')};
  }
  @media (min-width: ${Breakpoints.desktop}) {
    font-size: ${({ size = '18px' }) => useMediaquery(size, 'desktop')};
    line-height: ${({ lh = '1' }) => useMediaquery(lh, 'desktop')};
    margin: ${({ m = '0px' }) => useMediaquery(m, 'desktop')};
    padding: ${({ p = '0px' }) => useMediaquery(p, 'desktop')};
  }
`
