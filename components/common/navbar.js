import Link from "next/link";

export default function nav({route}){
  return(
    <div className="flex  bg-red400 inve flex-row items-center justify-center fixed d bottom-0 h-[40px] bg-red-0 text-black  w-full pb-3">
        <List route={route}></List>
    </div>
  );
}
function List({route}){

  return(
    <div className="bg-green500 text-gray-300 w-3/5 flex flex-row items-center justify-evenly">
     

<Link href={"/latest"}>
        <a 
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>|

<Link href={"/about"}>
        <a 
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>|

      <Link href={"/sponsor"}>
        <a 
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>|





      <Link href={"/"}>
        <a 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">HOME</div>
        </a></Link>|

     
      <Link href={"/galary"}>
        <a 
        className={route==="/galary" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        GALARY</a></Link>|

      <Link href={"/contact"}>
        <a 
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>|

      <Link href={"/help"}>
        <a 
        className={route==="/help" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         HELP </a></Link>
    </div>
  );
}