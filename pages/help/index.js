import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";
export default function Help(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Help | AutoZ" cardTitle="HELP | AutoZ" description="HELP | AutoZ" image="" ></HeadTag>
         <Top main={"Help"} sub="AutoZ" mini={""}></Top>
    </main>
  );
}