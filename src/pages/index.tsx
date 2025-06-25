

import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import TrendingTours from "./home/trending_tours";
import Contactall from "@/component/common/contactall";
import GetUpdates from "@/component/common/getupdates";
import PopularPackages from "./home/popularpackages";
import WelcomeHolidays from "@/component/common/welcome_holidays";
import HeroSection from "@/component/home/herosection";
import FeaturesSection from "./home/feacturetures";
import BlogCategoryCards from "./home/latestblog";
import AdventureSection from "./home/adventutresection";
import TravelIntro from "@/component/common/travelintro";
import Trips from "./home/trips";
import RealAdventure from "./home/real_adventure";
import GroupTours from "./home/grouptours";
import Testimonial from "./home/testimonial";
import TravelHeroSection from "./home/travelherosection";


export default function Home() {
  return (
    <div>
   <Header/>

   <HeroSection/>
   <PopularPackages/>
   <WelcomeHolidays/>

   <TravelIntro/>
   <Trips/>
   <RealAdventure/>

   <GroupTours/>
   <Testimonial/>
   <TravelHeroSection/>

<FeaturesSection/>
<BlogCategoryCards/>
<AdventureSection/>

   <TrendingTours/>
   <Contactall/>
   <GetUpdates/>

   <Footer/>
    </div>
  );
}
