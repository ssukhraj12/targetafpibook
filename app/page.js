import CallSection from "@/components/CallSection";
import WhoWeare from "@/components/WhoWeare";
import LearnPrepare from "@/components/LearnPrepare";
import BestCoaching from "@/components/BestCoaching";
import BlogGrid from "@/components/BlogGrid";
import HappyClients from "@/components/HappyClients";


export default async function Home() {
  return (
      <>
          <CallSection/>
          <WhoWeare/>
          <LearnPrepare/>
          <BestCoaching/>
          <HappyClients/>
          <BlogGrid/>
      </>
  );
}
