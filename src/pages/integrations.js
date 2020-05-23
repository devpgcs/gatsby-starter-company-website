import React from 'react'
import Navbar from '../containers/Home/Navbar'
import Banner from '../containers/Integrations/Banner'
import Partner from '../containers/Integrations/Partner'
import Aditional from '../containers/Integrations/Aditional'
import Issues from '../containers/Integrations/Issues'
import TrialSection from '../containers/Home/TrialSection'
import Footer from '../containers/Home/FooterSection'

export default () => (
  <>
    <Navbar/>
    <Banner/>
    <Partner/>
    <Aditional/>
    <Issues/>
    <TrialSection/>
    <Footer/>
  </>
);