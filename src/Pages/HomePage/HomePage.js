import React from "react";
import Banner from "../../components/Banner/Banner";
import FirstSection from "../../components/FirstSection/FirstSection";
import FourthSection from "../../components/FourthSection/FourthSection";
import SecondSection from "../../components/SecondSection/SecondSection";
import ThirdSection from "../../components/ThirdSection/ThirdSection";

const HomePage = () => {
   return (
      <>
         <Banner />
         <FirstSection />
         <SecondSection />
         <ThirdSection />
         <FourthSection />
      </>
   );
};

export default HomePage;
