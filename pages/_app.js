import '../styles/globals.css'
import Nav from '../components/common/navbar'




function MyApp({ Component, pageProps }) {
  return <main className='font-Maven bg-gradient-to-tr from-gray-100/90 to-gray-100/70 h-full'>
    <div className='hden'><Nav></Nav></div>
    <Component {...pageProps} />
  </main>
}

export default MyApp
