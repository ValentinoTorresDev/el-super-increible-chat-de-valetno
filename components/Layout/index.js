import Head from 'next/head'
import { ContainerApp } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        <title>El Super Increíble Chat de Valentino</title>
      </Head>
      <ContainerApp>
        {children}
      </ContainerApp>
    </>
  )
}

export default Layout
