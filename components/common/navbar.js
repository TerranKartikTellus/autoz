import Link from "next/link";
import Image from "next/image"
import Opacity from "../Animate/WhenInView/Opacity";
import Y from "../Animate/WhenInView/Translate/y";

export default function nav({route}){
  return(
    <div id="nav" className="flex select-none bg-red400 inve flex-row items-center justify-center fixed d md:bottom-0 bottom-7 h-[40px] bg-red-0 text-black  w-full pb-3">
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
  <div id="navv" className="">
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
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
            <Opacity initial={0} final={1} delay={2.3} duration={0.3}>
             <img src="/logo.svg" className="w-12 h-12 contrast-200"></img>
            </Opacity>
              <Opacity initial={0} final={1} delay={2.6} duration={0.5}>
             <div className="opacity-95 translate-y-1 t left-0 absolute">
                <Link href="/"><a onClick={()=>{document.getElementById("nav").focus(); }}>HOME</a></Link>
             </div>
             </Opacity>
             <div className="opacity-95 bg-gray-1  bottom-0 -translate-y-14 left-0 absolute">
              <PSMhome route={route}></PSMhome>
             </div>
              
    </div>}
    
  </div>);
}


function PSMhome({route}){

  return(
    <div className="bg-green500 text-gray-100/50 w-3/5 flex flex-col items-center justify-evenly">
     
  <Opacity initial={0} final={1} delay={4.5} duration={0.3}>
<Link href={"/latest"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>
    </Opacity>
  <Opacity initial={0} final={1} delay={4.2} duration={0.3}>
<Link href={"/about"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>
</Opacity>
  <Opacity initial={0} final={1} delay={3.9} duration={0.3}>
      <Link href={"/sponsor"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>
</Opacity>




      {/* <Link href={"/"}>
        <a 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">HOME</div>
        </a></Link> */}

       <Opacity initial={0} final={1} delay={3.6} duration={0.3}>
      <Link href={"/gallary"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/gallary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 transition-all duration-300 ease-in-out hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        Gallary</a></Link>
        </Opacity>
  <Opacity initial={0} final={1} delay={3.3} duration={0.3}>
      <Link href={"/contact"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 transition-all duration-300 ease-in-out hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>
</Opacity>
  <Opacity initial={0} final={1} delay={3} duration={0.3}>  
      <Link href={"/team"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/team" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 transition-all duration-300 ease-in-out hover:opacity-80 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         TEAM </a></Link>
  </Opacity>
    </div>
  );
}



function PSM({route}){

  return(
    <div id="nevv" className="bg-gradient-to-br via-blue-900/80 to-blue-600 from-blue-800 rounded-lg p-3 -translate-x-5  text-gray-100 w3/5 flex flex-col items-center justify-evenly">
     

<Link href={"/latest"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>

<Link href={"/about"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>

      <Link href={"/sponsor"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>





      {/* <Link href={"/"}>
        <a 
        className={route==="/" ? "group font font-sans relative tracking-wider  font-semibold scale-100  text-gray-100 font-nor " : "relative opacity-90 hover:opacity-95 group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
             <img src="/logo.svg" className="w-12 h-12"></img>
             <div className="group-hover:visible invisible opacity-0 group-hover:opacity-95  -bottom-7 group-hover:translate-y-0 translate-y-3 transition-all duration-300 ease-in-out left-0 absolute">HOME</div>
        </a></Link> */}

     
      <Link href={"/gallary"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/gallary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          
        Gallary</a></Link>

      <Link href={"/contact"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         CONTACT </a></Link>

      <Link href={"/team"}>
        <a onClick={()=>{document.getElementById("navv").blur();}}
        className={route==="/team" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         TEAM </a></Link>
    </div>
  );
}


function List({route}){

  return(
    <div className="bg-green500 text-gray-100/50 w-[700px] flex flex-row items-center justify-around ">
     
  <Opacity initial={0} final={1} delay={2.2} duration={0.5}>
<Link href={"/latest"}>
        <a 
        className={route==="/latest" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
         LATEST
          </a></Link>
          </Opacity>
          
  <Opacity initial={0} final={1} delay={2.1} duration={0.5}>
<Link href={"/about"}>
        <a 
        className={route==="/about" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          ABOUT   </a></Link>
          </Opacity>

       <Opacity initial={0} final={1} delay={2} duration={0.5}>
      <Link href={"/sponsor"}>
        <a 
        className={route==="/sponsor" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}
        >
          SPONSOR</a></Link>
        </Opacity>
        

        {/* <Y initial={"100px"} final={'10px'} delay={1} duration={0.5}> */}
        <Opacity initial={0} final={1} delay={1.5} duration={0.5}>
        <Link href="/">
          <a className="group">
           <img src="/logo.svg" className="w-12 h-12 transition-all duration-300 ease-in-out contrast-200 hover:contrast-150"></img>
            <div className="invisible group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-gray-100 font-sans tracking-widest translate-y-6">HOME</div>
          </a>
        </Link>
        </Opacity>
        {/* </Y> */}
        


       <Opacity initial={0} final={1} delay={2} duration={0.5}>
        <Link href={"/gallary"}>
         <a 
          className={route==="/gallary" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}>
           GALLARY
          </a>
        </Link>
       </Opacity>

        <Opacity initial={0} final={1} delay={2.2} duration={0.5}>
      <Link href={"/team"}>
        <a 
        className={route==="/team" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out  group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}   >
         TEAM
        </a>
      </Link>
     </Opacity>
     
     <Opacity initial={0} final={1} delay={2.1} duration={0.5}>  
      <Link href={"/contact"}>
        <a 
        className={route==="/contact" ? "group font font-sans relative tracking-wider  font-semi scale-95 opacity-80  text-gray-100 font-nor " : "relative opacity-50 hover:opacity-80 transition-all duration-300 ease-in-out group scale-95 text-blue-100 font-normal  font font-sans tracking-wide"}   >
         CONTACT 
        </a>
      </Link>
     </Opacity>

     
    </div>
  );
}