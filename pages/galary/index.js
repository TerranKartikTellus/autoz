import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Galary(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5   snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Galary | AutoZ" cardTitle="Galary | AutoZ" description="Galary | AutoZ" image="" ></HeadTag>
      <Top main="Galary" sub="AutoZ" mini={""}></Top>
    </main>
  );
}