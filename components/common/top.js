export default function Top({main,sub,mini}){
  return(
    <main className="fixed top-0 left-0 ">
      <div className="text-3xl tracking-widest text-blue-100 w-[200px] text-left  bg-red300 font-medium border-b-2 border-gray-100/30 pb-3 mb-3">{main}</div>
      <div className="text-lg tracking-widest text-blue-100/80  text-left w-full bg-red300 font-normal">{sub} | {mini}</div>
      {/* <div className="text-lg tracking-widest text-blue-100/50  text-left w-full bg-red-300font-normal"></div> */}
    </main>
  );
}