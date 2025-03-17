import React from 'react';
import Bgposter from "../components/Bgposter";
import Ourmission from "../components/Ourmission";
import Whatweoffer from "../components/Whatweoffer";
import Ourvision from "../components/Ourvision"; 
import OurJourney from '../components/Ourjourney';
import Successstories from "../components/Successstories";
import ReachUs from "../components/ReachUs";

const AboutUsPage = () => {
  return (
    <main>
      <Bgposter/>
      <Ourmission/>
      <Whatweoffer/>
      <Ourvision/>
      <OurJourney/>
      <Successstories/>
      <ReachUs/>
    </main>
  )
}

export default AboutUsPage
