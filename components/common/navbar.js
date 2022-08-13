import Link from "next/link";

export default function nav(){
  return(
    <div className="flex flex-row items-center justify-around fixed top-0 h-[40px] bg-red-0 text-white pt-5 w-full">

      <div className="scale-75"><Logo></Logo></div>
      <div><Middle></Middle></div>
      <div><Right></Right></div>
    </div>
  );
}
function Logo(){
  return(
    <Link href={"/"}>
    <a className="bg-green-00 w-[184px] flex flex-row items-start space-x-2 justify-between">
      <img src="/logo.svg" className="scale-95 w-14 bg-red-4 h-14" ></img>
      <div className="font-sans font-medium text-4xl my-auto w-full tcking-wider text-white center">AutoZephyrus</div>
    </a>
    </Link>
  );
}
function Middle(){
  return(
    <div className="flex text-white/80  flex-row items-center justify-center space-x-3">
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Latest</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">About</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Sponsor</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Galary</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Contact</a></Link>
        
    </div>
  );
}
function Right(){
  return(
    <div>
      <Link href="/about"><a className="bg-[#6438cf] hover:bg-opacity-80 bg-opacity-60 transition-all duration-300 ease-in-out rounded p-2 font-sans">Know more</a></Link>
    </div>
  );
}