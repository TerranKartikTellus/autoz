import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Latest(){
  const data=[
    {
      title: "Vikram"
    }
  ]
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
         <HeadTag title="LATEST | AutoZ" cardTitle="LATEST | AutoZ" description="LATEST | AutoZ" image="" ></HeadTag>
     <Top main={"Latest"} sub="AutoZ" mini={""}></Top>
    </main>
  );
}