import Link from "next/link";

export default function nav(){
  return(
    <div className="flex bg-red400 flex-row items-center justify-center fixed d bottom-0 h-[40px] bg-red-0 text-black  w-full">
        <List></List>
    </div>
  );
}
function List(){
  
  return(
    <div className="bg-green500 w-3/5 flex flex-row items-center justify-evenly">
      <Link href={"/"}><a className="  font-sans tracking-wider  ">Latest</a></Link>
      <Link href={"/"}><a className="  font-sans tracking-wider  ">About</a></Link>
      <Link href={"/"}><a className="  font-sans tracking-wider  ">Sponsor</a></Link>


      <Link href={"/"}><a className="  font-sans tracking-wider  ">HOME</a></Link>

      <Link href={"/"}><a className="  font-sans tracking-wider  ">Galary</a></Link>
      <Link href={"/"}><a className="  font-sans tracking-wider  ">Galary</a></Link>
      <Link href={"/"}><a className="  font-sans tracking-wider  ">Contact</a></Link>
    </div>
  );
}