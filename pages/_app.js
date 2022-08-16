import '../styles/globals.css'
import Nav from '../components/common/navbar'
import { useRouter } from 'next/router'




function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.route);
  
  // var vid = document.getElementById("myVideo");
  // vid.playbackRate = 0.5;

  return <main className=' font-Maven bg-black relative '>



    <video id="myVideo" preload="auto"  className="bg-cover opacity-50 saturate-200  hidden md:block object-cover w-full h-full absolute top-0 left-0"  autoPlay loop muted >
      <source  src="/live/mylivewallpapers.com-Spaceman-with-Dog.mp4" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </video>

    <video id="myVideo" preload="auto" className="bg-cover opacity-50 saturate-200  block md:hidden object-cover w-full h-full absolute top-0 left-0"  autoPlay loop muted >
      <source src="/live/MOBILE-Spaceman-with-Dog.mp4" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      Your browser does not support the video tag.
    </video>
    
    <div className='scale-90 rounded-full shadowd shadow-gray-400/80 drop-shadow-2xl'>
        <div className='hden'>
          <div></div>
          <Nav route={router.route}></Nav></div>
        <Component {...pageProps} />
    </div>  
  
  </main>
}

export default MyApp
