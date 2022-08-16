import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function About(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="ABOUT | AutoZ" cardTitle="About | AutoZ" description="About | AutoZ" image="" ></HeadTag>
      <Top main={"About"} sub="AutoZ" mini={""}></Top>
    </main>
  );
}