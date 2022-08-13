import Link from "next/link";

export default function nav(){
  return(
    <div className="flex flex-row items-center justify-between md:justify-around fixed top-0 h-[40px] bg-red-0 text-white pt-5 w-full">

      <div className="scale-75"><Logo></Logo></div>
      <div className="hidden md:block"><Middle></Middle></div>
      <div className="hidden md:block"><Right></Right></div>
      <div className="block md:hidden"><DropDown></DropDown></div>
      
    </div>
  );
}
function DropDown(){
  return(
    <div className="w-full pr-5 group">
      <svg className="fill-[#6438ef] w-10 h-10 hover:-rotate-6 opacity-90 hover:opacity-50  translate-x-0 translate-y-0 hover:-translate-x-4  hover:translate-y-4 transition-all duration-300 ease-in-out" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z" fillRule="nonzero"/></svg>
      <div className="text-white invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-300 fixed top-14 group-hover:translate-x-0 group-hover:translate-y-0 -translate-y-2 translate-x-7 right-14"><List></List></div>
    </div>
  );
}
function List(){
  return(
    <div className="flex flex-col item-center justify-center space-y-1">
      <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Latest</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">About</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Sponsor</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Galary</a></Link>
        <Link href="/"><a className="hover:text-gray-100  transition-all duration-300 ease-in-out">Contact</a></Link>
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
    <div className="flex text-white/90 text-base flex-row items-center justify-center space-x-3">
        <Link href="/"><a className="hover:text-gray-300  transition-all duration-300 ease-in-out">Latest</a></Link>
        <Link href="/"><a className="hover:text-gray-300  transition-all duration-300 ease-in-out">About</a></Link>
        <Link href="/"><a className="hover:text-gray-300  transition-all duration-300 ease-in-out">Sponsor</a></Link>
        <Link href="/"><a className="hover:text-gray-300  transition-all duration-300 ease-in-out">Galary</a></Link>
        <Link href="/"><a className="hover:text-gray-300  transition-all duration-300 ease-in-out">Contact</a></Link>
        
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