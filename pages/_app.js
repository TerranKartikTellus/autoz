import '../styles/globals.css'
import Nav from '../components/common/navbar'
import { useRouter } from 'next/router'




function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.route);
  return <main className=' font-Maven bg-gradient-to-b from-black to-black '>
    
    <div className='scale-90 rounded-full shadow-md shadow-gray-400/80 drop-shadow-2xl'>
        <div className='hden'>
          <div></div>
          <Nav route={router.route}></Nav></div>
        <Component {...pageProps} />
    </div>  
  
  </main>
}

export default MyApp
