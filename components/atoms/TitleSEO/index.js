import React from 'react'
import { StyledTitleSeo } from './styles'

const TitleSeo = (props) => {
  return (
    <StyledTitleSeo {...props}>
      {props.children}
    </StyledTitleSeo>
  )
}

export default TitleSeo
