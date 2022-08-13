import Link from "next/link";

export default function Main(){
  return(
    <div className="h-screen pt-20 flex flex-row items-center justify-center space-x-8">  
      <div className="flex flex-col items-start justify-center space-y-8">
      <div><Middle></Middle></div>
      <div><TagLine></TagLine></div>
      <div><GetStarted></GetStarted></div>
      </div>
      <div className="">
        <ImageGal></ImageGal>
      </div>
    </div>
  );
}
function ImageGal(){
  return(
    <div className="grid grid-cols-2 gap-4 relative">
      {/* <img src="/drone1.png" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-300"></img>  
        <img src="/rover2.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-75"></img>  
        <img src="/rover1.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 animate-pulse object-cover"></img>
    */}

        <img src="/image.webp" className="shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img>
   
   
        {/* <img src="/circle.webp" className="scale-50 absolute  translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
        <img src="/circle.webp" className="scale-50  absolute -translate-y-20 translate-x-32 -rotate-45 shadow-yan-800/70 w-64 h-64 ane-pulse object-cover"></img>
   
        <img src="/image.webp" className="scale-50 translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img>
   
   
    </div>
  );
}
function News(){
  return(
    <div>
      <Link href="/">
        <a className="bg-gray-100 shadow drop-shadow-lg shadow-gray-200/50 text-gray-900/70 text-base py-1 px-3 rounded font-thin font-sans">
          NEWS  Announcing Vikram
        </a>
      </Link>
    </div>
  );
}
function Middle(){
  return(
    <div className="text-5xl font-medium text-left w-[650px] tracking-wider ">
      Developing autonomous vehicles and automated systems
            {/* Transcribe and understand audio with a single AI-powered API */}
    </div>
  );
}
function TagLine(){
  return(
    <div className="w-[650px] text-left opacity-90 ">
      
        Team AutoZ is a research & development team driven by undergraduate B.Tech students of VIT Vellore. The primary aim of our team is to design and develop autonomous ground vehicles and to use our innovation for practical applications of the bot to solve real-world issues, and work with companies that are keen on trying to bring automation into the market.
       
    </div>
  );
}
function GetStarted(){
  return(
    <div className="">
      <Link href="/">
        <a className="bg-[#6438cf] hover:bg-opacity-90 text-gray-100 py-1 px-2 ">
          Get In Touch
        </a>
      </Link>
    </div>
  );
}
