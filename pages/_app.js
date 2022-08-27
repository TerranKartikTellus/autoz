import '../styles/globals.css'
import Nav from '../components/common/navbar'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Scale from '../components/Animate/WhenInView/Scale';
import Opacity from '../components/Animate/WhenInView/Opacity';
import X from '../components/Animate/WhenInView/Translate/x';
import Y from '../components/Animate/WhenInView/Translate/y';
import RX from '../components/Animate/WhenInView/Rotate/x';
import RY from '../components/Animate/WhenInView/Rotate/y';
import SKX from '../components/Animate/WhenInView/Skew/x';



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log(router.route);
  
  // var vid = document.getElementById("myVideo");
  // vid.playbackRate = 0.5;

  return <main className=' font-Maven bg-black relative h-full w-full'>


    <video id="myVideo" preload="auto"  className="bg-cover opacity-50 saturate-200  hidden md:block object-cover w-full h-full absolute top-0 left-0"  autoPlay loop muted >
      <source rel="preload" src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/mylivewallpapers.com-Spaceman-with-Dog.mp4?alt=media&token=6138d067-509e-4fa1-8115-f022032be9fd" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      <div rel="preload"  className='bg-backgroundLG h-full w-full bg-cover'></div>
    </video>

    <video id="myVideo" preload="auto" className="bg-cover opacity-50 saturate-200  block md:hidden object-cover w-full h-full  absolute top-0 left-0"  autoPlay loop muted >
      <source src="https://firebasestorage.googleapis.com/v0/b/autoz-8611b.appspot.com/o/MOBILE-Spaceman-with-Dog.mp4?alt=media&token=26c4e4aa-bffa-4798-83e1-66913933164d" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
      <div className='bg-backgroundSM h-full  w-full bg-cover'></div>
    </video>
    <div rel="preload" className='bg-black/40 w-full   h-full absolute top-0 left-0 animate-'>.</div>

    <div className='scale-90 rounded-full shadowd shadow-gray-400/80 drop-shadow-2xl'>
        <div className='hden'>
          
        
        <Scale initial={1} final={1} duration={1}>
          <Opacity initial={0.8} final={1} duration={1}>
            <Y initial={"100px"} final={"1px"} duration={1}>
              <RX initial={"100deg"} final={"1deg"} duration={1}>
               <SKX initial={35} final={1} duration={1}>
               <Component {...pageProps} />
               </SKX>
              </RX>
            </Y>
          </Opacity>
        </Scale>
        
          <Nav route={router.route}></Nav></div>
    </div>  
  
  </main>
}

export default MyApp
