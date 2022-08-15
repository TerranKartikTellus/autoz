import Link from "next/link";

export default function nav({route}){
  return(
    <div className="flex bg-red400 flex-row items-center justify-center fixed d bottom-0 h-[40px] bg-red-0 text-black  w-full">
        <List route={route}></List>
    </div>
  );
}
function List({route}){

  return(
    <div className="bg-green500 w-3/5 flex flex-row items-center justify-evenly">
      <Link href={"/latest"}>
        <a 
        className={route=="/latest" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >Latest</a></Link>
      <Link href={"/about"}>
        <a 
        className={route=="/about" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >About</a></Link>
      <Link href={"/sponsor"}>
        <a 
        className={route=="/sponsor" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >Sponsor</a></Link>




      <Link href={"/"}>
        <a 
        className={route=="/" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >HOME</a></Link>


      <Link href={"/galary"}>
        <a 
        className={route=="/galary" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >Galary</a></Link>
      <Link href={"/contact"}>
        <a 
        className={route=="/contact" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >Contact</a></Link>
      <Link href={"/help"}>
        <a 
        className={route=="/help" ? "font font-sans tracking-wider  font-semibold text-2xl " : "text-lg font font-sans tracking-wide"}
        >Help</a></Link>
    </div>
  );
}