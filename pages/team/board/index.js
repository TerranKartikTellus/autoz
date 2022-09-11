import HeadTag from "/components/common/head";
import Top from "/components/common/top";
import Opacity from "/components/Animate/WhenInView/Opacity"
import Scale from "/components/Animate/WhenInView/Scale"
import  Y from "/components/Animate/WhenInView/Translate/y"
import { board } from "../../../lib/data/team";
import Image from "next/image";
import Link from "next/link";
export default function Team(){
  

  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Board Members | AutoZ" cardTitle="Board Members | AutoZ" description="US | AutoZ" image="" ></HeadTag>
         <Top main={"Board Members"} sub="AutoZ" mini={""}></Top>

      {board &&
        <div className="pt-44 md:pt-46 px-5 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {board.map(i=>(
            <div key={i.id} className="p-4 space-y-1 bg-cyan rounded-md flex flex-col items-center justify-center">
              <div><Image  alt={i.name} width={200} height={200} src={i.img} className="rounded-full  object-cover w-32 h-32"></Image></div>
              <div className="text-xl tracking-wider text-center font-semibold text-blue-100/80">{i.name}</div>
              <div className="text-base tracking-wider text-blue-100/60 text-center">{i.position}</div>
             
              <div  className="space-x-2 flex flex-row items-center justify-center">


                  {i.insta && <Link href={i.insta}>
                    <a>
                    <svg className="w-6 fill-blue-100/90  ease-in-out duration-300 transition-all h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </Link>}
                  {i.linkdin && <Link href={i.linkdin}>
                    <a>
                   <svg className=" w-6 fill-blue-100/90 ease-in-out duration-300 transition-all h-6"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
                    </a>
                    </Link>}
                   

                    {i.feature && <Link href={i.feature}>
                      <a>
                      <svg className=" w-6 fill-blue-100/90 ease-in-out duration-300 transition-all h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                      </a></Link>}

                    {!i.feature && i.email &&
                    <Link href={i.email}>
                    <a>
                      <svg className=" w-6 fill-blue-100/90 ease-in-out duration-300 transition-all h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                    </a>
                    </Link>
                    }
                
              </div>
              
              
            </div>
          ))}
        </div>
      }
    </main>);
}