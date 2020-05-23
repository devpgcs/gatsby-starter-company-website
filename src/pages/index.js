import React from "react"
import Navbar from "../containers/Home/Navbar"
import Banner from "../containers/Home/Banner"
import Integrations from "../containers/Home/Integrations"
import Features from "../containers/Home/Features"
import Industries from "../containers/Home/Industries"
import Opinions from "../containers/Home/Opinions"
import TrialSection from "../containers/Home/TrialSection"
import FooterSection from "../containers/Home/FooterSection"

export default () => (
    <>
      <Navbar />
      <Banner />
      <Integrations/>
      <Features/>
      <Industries/>
      <Opinions/>
      <TrialSection />
      <FooterSection />
    </>
  );
