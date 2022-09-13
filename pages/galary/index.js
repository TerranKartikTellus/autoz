import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
import { galary } from "../../lib/data/galary";

export default function Galary1(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray900   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Galary | AutoZ" cardTitle="Galary | AutoZ" description="Galary | AutoZ" image="" ></HeadTag>
      <Top main="Galary" sub="AutoZ" mini={""}></Top>
      <div className="flex shrink overflow-y-auto">
{/* <Show arr={galary}></Show> */}
      {/* <Show arr={galary}></Show> */}
      
      <Show arr={galary}></Show>
      </div>
      
    </main>
  );
}
function Show({arr}){
 
  return(
    <section className="overflow-hidden text-gray-700 w-10/12  mt-32 md:mt-12 bg-green200  mx-auto">
        <section className="overflow-hidden text-gray-700 w-full">
          <div className="container px py2 mx-auto lg:pt-24 w-full lg:px-32">
            <div className="flex flex-col md:flex-row  -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" /> 
                </div>
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </section>
  );
}