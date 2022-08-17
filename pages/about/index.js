import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function About(){
  return(
    <main className="bg-gra  rounded-sm text-gray-100  bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="LATEST | AutoZ" cardTitle="LATEST | AutoZ" description="LATEST | AutoZ" image="" ></HeadTag>
     <Top main={"About"} sub="AutoZ" mini={""}></Top>
     <div className="my-auto h-full ">
      <div className="w-1/2 opacity-60 flex flex-col items-center justify-center space-y-2 my-auto  h-full">

      {/* <People></People> */}
      <Roboat></Roboat>
      <div className="text-xs tracking-wider">Our Vision</div>
      <div className="text-2xl tracking-wider text-center border-b-2 border-gray-100/40 pb-2">Autonomous <p>Vehicles</p>  Autonomous Systems</div>
      <div className="text-xs">Since 2016</div>
      </div>
      <div className="w-1/2"></div>
     </div>
    </main>
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