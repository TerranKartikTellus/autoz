import Link from "next/link";

export default function Main(){
  return(
    <div className="h-screen pt-20 px-56 flex flex-row items-center justify-center space-x-2  mx-auto">  
      <div className="flex bg-red-00 w-full flex-col items-start justify-center space-y-8 mx-auto">
      <div><Middle></Middle></div>
      <div><TagLine></TagLine></div>
      <div><GetStarted></GetStarted></div>
      </div>
      <div className="bg-red-00 w-full">
        <ImageGal></ImageGal>
      </div>
    </div>
  );
}
function ImageGal(){
  return(
    <div className="bg-red-40 pl-10">
      {/* <img src="/drone1.png" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-300"></img>  
        <img src="/rover2.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 object-cover animate-pulse delay-75"></img>  
        <img src="/rover1.jpeg" className="shadow-xl shadow-cyan-800/70 w-52 h-52 animate-pulse object-cover"></img>
    */}

        {/* <img src="/image.webp" className="shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
        {/* <img src="/circle.webp" className="scale-50 absolute  translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
        {/* <img src="/circle.webp" className=" absolute top-0 left-0 w-96 h-96 animate-spin-slow ane-pulse object-cover"></img> */}
   
        <img src="/circle.webp" className="opacity-80  w-96 h-96 animate-spin-slow ane-pulse object-cover"></img>
   
        {/* <img src="/image.webp" className="scale-50 translate-y-10 -translate-x-20 -rotate-45 shadow-yan-800/70 w-52 h-52 ane-pulse object-cover"></img> */}
   
   
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
      
        Team AutoZ is a research & development team driven by undergraduate B.Tech students of <strong className="font-bold font-sans">VIT Vellore</strong>. The primary aim of our team is to <strong className=" font-sans">design and develop autonomous ground vehicles</strong> and to use our innovation for practical applications of the bot to solve real-world issues, and work with companies that are keen on trying to bring automation into the market.
       
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
