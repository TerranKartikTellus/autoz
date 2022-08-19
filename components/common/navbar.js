import Link from "next/link";
import Image from "next/image"
export default function nav({route}){
  return(
    <div id="nav" className="flex select-none bg-red400 inve flex-row items-center justify-center fixed d bottom-0 h-[40px] bg-red-0 text-black  w-full pb-3">
        <div className="hidden md:block ">
        <List route={route}></List>
        </div>
        <div className="block md:hidden  ">

        <ListSM  route={route}></ListSM>
        </div>
    </div>
  );
}
function ListSM({route}){
  return(
  <div id="navv">
     {route!='/' && <div 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">
                <Link href="/"><a onClick={()=>{document.getElementById("nav").focus(); }}>HOME</a></Link>
             </div>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95 bg-gray-1  -bottom-7 group-hover:-translate-y-20 -translate-y-44 transition-all duration-300 ease-in-out left-0 absolute">
              <PSM route={route}></PSM>
             </div>
              
    </div>}

    {route=='/' && <div 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="opacity-95 translate-y-1 t left-0 absolute">
                <Link href="/"><a onClick={()=>{document.getElementById("nav").focus(); }}>HOME</a></Link>
             </div>
             <div className="opacity-95 bg-gray-1  bottom-0 -translate-y-14 left-0 absolute">
              <PSMhome route={route}></PSMhome>
             </div>
              
    </div>}
    
  </div>);
}


function PSMhome({route}){

  return(
    <div className="bg-green500 text-gray-100/50 w-3/5 flex flex-col items-center justify-evenly">
     

<Link href={"/latest"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>

<Link href={"/about"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>

      <Link href={"/sponsor"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>





      {/* <Link href={"/"}>
        <a 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">HOME</div>
        </a></Link> */}

     
      <Link href={"/galary"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/galary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        GALARY</a></Link>

      <Link href={"/contact"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>

      <Link href={"/help"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/help" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         HELP </a></Link>
    </div>
  );
}



function PSM({route}){

  return(
    <div id="nevv" className="bg-green500 text-gray-100/50 w-3/5 flex flex-col items-center justify-evenly">
     

<Link href={"/latest"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>

<Link href={"/about"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>

      <Link href={"/sponsor"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>





      {/* <Link href={"/"}>
        <a 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">HOME</div>
        </a></Link> */}

     
      <Link href={"/galary"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/galary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        GALARY</a></Link>

      <Link href={"/contact"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>

      <Link href={"/help"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/help" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         HELP </a></Link>
    </div>
  );
}


function List({route}){

  return(
    <div className="bg-green500 text-gray-100/50 w-[700px] flex flex-row items-center justify-around ">
     

<Link href={"/latest"}>
        <a 
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>|

<Link href={"/about"}>
        <a 
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>|

      <Link href={"/sponsor"}>
        <a 
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>|



        <Link href="/">
          <a className="group">
           <img src="/logo.svg" className="w-12 h-12"></img>
            <div className="invisible group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-gray-100 font-sans tracking-widest translate-y-6">HOME</div>
          </a>
        </Link>|


     
      <Link href={"/galary"}>
        <a 
        className={route==="/galary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        GALARY</a></Link>|

      <Link href={"/contact"}>
        <a 
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>|

      <Link href={"/help"}>
        <a 
        className={route==="/help" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         HELP </a></Link>
    </div>
  );
}