import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { useState } from "react";

export default function Contact(){
  return(
    <main className="bg-gra rounded-sm flcenter text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Contact | AutoZ" cardTitle="Contact | AutoZ" description="Contact | AutoZ" image="" ></HeadTag>
         <Top main={"Contact"} sub="AutoZ" mini={""}></Top>
         <div className="mx-auto md:w-2/6 md:scale-90"><Icon></Icon></div>
        
    </main>
  );
}

function Icon(){
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [msg,setMsg] = useState();
  
  return(
    <div className="flex flex-col text-center items-ceenter w-full h-[350px] md:h-[280px] space-y-4 bgred-400">
      <div className="pt-28 md:pt-20">
      <svg className="fill-gray-100/70 w-32 h-32 mx-auto hidden md:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"/></svg>
      </div>
      <div className="text-4xl hidden md:block">Get in touch with us</div>
      <div className="text-base bg-red400 px-20 hidden md:block">Always good to hear from you, We are always looking for opportunities</div>
      {/* <div className="text-sm">We are always looking for opportunities</div> */}

      <form className="w-full h- bgred-200">

    <div className="bgred-200 w-full pt- md:pt-0 scale-90 px-3 md:px-14 h flex flex-col space-y-6 items-center justify-center">
      {/* <div className="text-3xl md:hidden">Get in touch with us</div> */}
      <div className="text-base bg-red400 px- md:hidden">Always good to hear from you, We are always looking for opportunities</div>
      <div className="w-full relative">
        { name && <div className="absolute  -top-4 text-gray-50 left-0">Name:</div>}
        <input onChange={(e)=>{setName(e.target.value)}} placeholder="Name" className="text-gray-50 capitalize bg-transparent w-full border-b-2 outline-none text-base md:text-lg tracking-widest p-2 border-gr " type={"text"}></input>
      </div>
      <div className="w-full  relative">
         { email && <div className="absolute  -top-4 text-gray-50 left-0">Email:</div>}
        <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" className="bg-transparent w-full border-b-2 outline-none text-base md:text-lg tracking-widest p-2 border-gray-100/80" type={"email"}></input>
      </div>
      <div className="w-full  relative">
         { msg && <div className="absolute  -top-4 text-gray-50 left-0">Message:</div>}
        <textarea onChange={(e)=>{setMsg(e.target.value)}} placeholder="Message" className="bg-transparent h-[150px] w-full border-b-2 outline-none text-base md:text-lg tracking-widest p-2 border-gray-1000" type={"text"}></textarea>
      </div>
      <div className="flex flex-row items-end justify-end w-full">
        <button className="bg-gray-100/0 text-gray-100 hover:text-gray-100 texk hover:bg-transparent  transition-all duration-300 ease-in-out text-xl border-b-2 hover:border-gray-100/80 border-gray-100/50 font-mono font-bold tracking-widest p-3 rounded my-5 ml-12">SEND</button>
      </div>
    </div>
    
    </form>
    </div>
  );
}
