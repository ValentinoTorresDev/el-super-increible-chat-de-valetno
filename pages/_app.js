import { Layout } from '../components'
import { GlobalStyles, Theme } from '../styles'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from '../context/authContext'

export default function App ({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  )
}
