
const useMediaquery = (property, mediaquery) => {
  let propertyCSS

  switch (mediaquery) {
    case 'mobile':
      propertyCSS = property.mobile ? property.mobile : property
      return propertyCSS
    case 'tablet':
      propertyCSS = property.tablet ? property.tablet : property.mobile ? property.mobile : property
      return propertyCSS
    case 'desktop':
      propertyCSS = property.desktop ? property.desktop : property.tablet ? property.tablet : property.mobile ? property.mobile : property
      return propertyCSS
  }
}

export default useMediaquery
