import '../styles/globals.css'
import Nav from '../components/common/navbar'




function MyApp({ Component, pageProps }) {
  return <main className='font-Maven  bg-'>
    <Nav></Nav>
    <Component {...pageProps} />
  </main>
}

export default MyApp
