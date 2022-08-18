export default function Top({main,sub,mini}){
  return(
    <main className="fixed md:top-14 md:left-14 top-5 left-auto right-auto w-full scale-75 md:scale-100 ">
      <div className="text-3xl tracking-widest text-blue-100 w-[200px] text-center mx-auto md:mx-0 md:text-left  bg-red300 font-medium border-b-2 border-gray-100/30 pb-3 mb-3">{main}</div>
      <div className="text-lg tracking-widest text-blue-100/80 text-center md:text-left w-full bg-red300 font-normal">{sub} | {mini}</div>
      {/* <div className="text-lg tracking-widest text-blue-100/50  text-left w-full bg-red-300font-normal"></div> */}
    </main>
  );
}