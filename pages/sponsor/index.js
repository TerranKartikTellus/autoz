import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Sponsor(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="Sponsor | AutoZ" cardTitle="Sponsor | AutoZ" description="Sponsor | AutoZ" image="" ></HeadTag>
         <Top main={"Sponsor"} sub="AutoZ" mini={""}></Top>
    </main>
  );
}