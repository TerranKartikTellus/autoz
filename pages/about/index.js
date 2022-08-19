import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function About(){
  return(
    <main className="bg-gra  rounded-sm text-gray-100  md:bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="LATEST | AutoZ" cardTitle="LATEST | AutoZ" description="LATEST | AutoZ" image="" ></HeadTag>
     <Top  main={"About"} sub="AutoZ" mini={""}></Top>
     <div className="hidden md:block my-auto h-full snap-y snap-mandatory ">
       <div className="snap-center h-full"><Part1></Part1></div>
       <div className="snap-center h-full"><Part2></Part2></div>
     </div>

     <div className="block md:hidden my-auto h-full snap-y snap-mandatory ">
       <div className="snap-center h-full"><PartSM1></PartSM1></div>
       <div className="snap-center h-full"><PartSM2></PartSM2></div>
       <div className="snap-center h-full"><PartSM3></PartSM3></div>
       <div className="snap-center h-full"><PartSM4></PartSM4></div>
     </div>
    </main>
  );
}


      

function PartSM1(){
  return(
    <div className="bg-red-0 h-full flex flex-col md:flex-row pt-28 ">
      <div className="w-full pt-10 md:w-1/2 opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <Roboat></Roboat>
        <div className="text-xs tracking-wider">Our Eye&apos;s on</div>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Autonomous <p>Vehicles</p>  Autonomous Systems</div>
        <div className="text-xs">Since 2016</div>
      </div>
    </div>
  );
}
function PartSM2(){
  return(
    <div className="bg-red-0 h-full flex flex-col md:flex-row pt- my-auto  ">
      <div className="w-full  my-auto">
          <div className="h-full w-full text-lg px-10 text-center my-auto bordel-2 text-gray-100/70 py-20 font-sans flex flex-col items-center justify-center ">
            Team AutoZ <br></br> is a research & development team driven by undergraduate students of VIT Vellore. Since our infancy we are working on developing autonomous vehicles and automated systems. Our team comprises a diverse set of people having prior experience in industrial projects. 
          </div>
      </div>
    </div>
  );
}
function PartSM3(){
  return(
    <div className="bg-red-4 h-full flex flex-row">
      <div className="w-full opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <People></People>
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        <div className="text-xs">
          29 Active Members
        </div>
      </div>
      
    </div>
  );
}

function PartSM4(){
  return(
    <div className="bg-red-4 h-full flex flex-row my-auto">
      
      <div className="w-full  flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Technical</div>
            <div className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Management</div>
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
            <div className="w-32 h-32 text-center bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Human Resourse</div>
            <div className="w-32 h-32 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">More</div>
          </div>
      </div>
    </div>
  );
}




function Part1(){
  return(
    <div className="bg-red-4 h-full flex flex-col md:flex-row pt-32 ">
      <div className="w-full pt-10 md:w-1/2 opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <Roboat></Roboat>
        <div className="text-xs tracking-wider">Our Eye&apos;s on</div>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Autonomous <p>Vehicles</p>  Autonomous Systems</div>
        <div className="text-xs">Since 2016</div>
      </div>
      <div className="w-[1px] h-[400px] bg-gray-50/50 my-auto"></div>
      <div className="w-1/2 ">
          <div className="h-full w-full text-xl px- text-center my-auto bordel-2 text-gray-100/70 py-20 font-sans flex flex-col items-center justify-center ">
            AutoZ <br></br> is a research & development team<br></br> driven by undergraduate students of VIT Vellore.<br></br> Since our infancy we are working on developing autonomous vehicles and<br></br> automated systems. Our team comprises a diverse set of people having prior experience in industrial projects. 
          </div>
      </div>
    </div>
  );
}
function Part2(){
  return(
    <div className="bg-red-4 h-full flex flex-row">
      <div className="w-1/2 opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">
        <People></People>
        <div className="text-xs tracking-wider">Whats makes us unique</div>
        <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Our enthusiastically <br></br>driven Team</div>
        <div className="text-xs">
          29 Active Members
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center space-y-2">
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Technical</div>
            <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Management</div>
          </div>

           <div className="flex flex-row items-center justify-center space-x-2">
            <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">Human Resourse</div>
            <div className="w-44 h-44 bg-gray-100/70 flex flex-row items-center justify-center text-gray-900 text-lg tracking-wider hover:opacity-20">More</div>
          </div>
      </div>
    </div>
  );
}



function People(){
  return(
    <div className="w-72 h-72 invert">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z"/></svg>
    </div>
  );
}
function Roboat(){
  return(
    <div className="w-32 h-32 invert">
       <svg className="w-full h-full"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.025 16c2.196.014 3.975 1.801 3.975 4 0 2.208-1.793 4-4 4h-16c-2.208 0-4-1.792-4-4s1.792-4 4-4h16.025zm-15.525 2.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm10 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm.5-3.5h-16v-15h6v6h4v-6h6v15zm-2-4h-3.895v2h3.895v-2z"/></svg>
    </div>
  );
}
