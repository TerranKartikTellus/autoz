import HeadTag from "../../components/common/head";
import Top from "../../components/common/top";

export default function Contact(){
  return(
    <main className="bg-gra rounded-sm text-gray-100  bg-gray-900/5  snap-y snap-mandatory h-screen overflow-x-hidden  select-none">
      <HeadTag title="Contact | AutoZ" cardTitle="Contact | AutoZ" description="Contact | AutoZ" image="" ></HeadTag>
         <Top main={"Contact"} sub="AutoZ" mini={""}></Top>
    </main>
  );
}