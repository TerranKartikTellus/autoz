import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { useState } from "react";

export default function Contact(){
  return(
    <main className="bg-gra rounded-sm flcenter text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Contact | AutoZ" cardTitle="Contact | AutoZ" description="Contact | AutoZ" image="" ></HeadTag>
         <Top main={"Contact"} sub="AutoZ" mini={""}></Top>
         <div className="mx-auto md:w-2/6 md:scale-90"><Icon></Icon></div>
         <div className="mx-auto md:w-2/6 md:scale-90"><Form></Form></div>
    </main>
  );
}

function Icon(){
  return(
    <div className="flex flex-col text-center items-ceenter w-full h-[350px] md:h-[300px] space-y-4 bgred-400">
      <div className="pt-44 md:pt-20"><svg className="fill-gray-100/80 mx-auto w-32 h-32 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.622.845-2.298 2.627-2.289 4.843.027 6.902 6.711 18.013 12.212 18.117.575.011 1.137-.098 1.677-.345.121-.055 2.102-1.029 2.11-1.033zm4-5.621h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"/></svg></div>
      <div className="text-2xl">Get in touch</div>
      <div className="text-base">Always good to hear from you</div>
      <div className="text-sm">We are always looking for opportunities</div>
    </div>
  );
}
function Form(){
  const [name,setName] = useState();
  return(
    <form className="w-full h- ">

    <div className="bgred-200 w-full pt-16 md:pt-0 scale-90 px-3 h flex flex-col items-center justify-center">
      <div className="w-full">
        <input onChange={(e)=>{setName(e.target.value)}} placeholder="Name" className="capitalize bg-transparent w-full border-b-2 outline-none text-xl tracking-widest p-4 border-gray-100/70 hover:focus:border-gray-100/90" type={"text"}></input>
      </div>
      <div className="w-full">
        <input placeholder="Email" className="bg-transparent w-full border-b-2 outline-none text-xl tracking-widest p-4 border-gray-100/70 hover:focus:border-gray-100/90" type={"email"}></input>
      </div>
      <div className="w-full">
        <textarea placeholder="Message" className="bg-transparent h-[150px] w-full border-b-2 outline-none text-xl tracking-widest p-4 border-gray-100/70 hover:focus:border-gray-100/90" type={"text"}></textarea>
      </div>
      <div className="flex flex-row items-end justify-end w-full">
        <button className="bg-gray-100/0 text-gray-100 hover:text-gray-100 texk hover:bg-transparent  transition-all duration-300 ease-in-out text-xl font-mono font-bold tracking-widest p-3 rounded my-5 px-12">SEND</button>
      </div>
    </div>
    
    </form>
  );
}