import { Layout } from '../components'
import { GlobalStyles, Theme } from '../styles'
import { ThemeProvider } from 'styled-components'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
