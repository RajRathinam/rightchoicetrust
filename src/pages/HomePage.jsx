import React from 'react';
import Slider from "../components/Slider";
import Whatwedo from "../components/Whatwedo";
import Coreservice from "../components/Coreservice";
import Degreecards from "../components/Degreecards";
import Ourjourney from "../components/Ourjourney";
import Stats from "../components/Stats";
import Founder from "../components/Founder";


const HomePage = () => {
  return (
    <main>
      <Slider/>
      <Whatwedo/>
      <Coreservice/>
      <Degreecards/>
      <Ourjourney/>
      <Stats/>
      <Founder/>
    </main>
  )
}

export default HomePage
