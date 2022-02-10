import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import VideoSection from "./VideoSection";
import PricingSection from "./PricingSection";
import AboutSection from "./AboutSection";
import AboutMission from "./AboutMission";
import data from '../../../language/zawiyah_landing.json';

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  
  return (
    <Fragment>
      <HeadSection headerText = {data.head}/>
      <AboutSection aboutText = {data.about}/>
      <AboutMission aboutMission = {data.aboutMission}/>
      <VideoSection />
      {/* <FeatureSection /> */}
      {/* <PricingSection /> */}
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
