import React from 'react'
import Navbar from '../containers/Home/Navbar'
import Header from '../containers/About/Header'
import ModernTask from '../containers/About/ModernTask'
import Issues from '../containers/About/Issues'
import Mobile from '../containers/About/Mobile'
import Rules from '../containers/About/Rules'
import TrialSection from '../containers/Home/TrialSection'
import Footer from '../containers/Home/FooterSection'

export default () => (
  <>
    <Navbar />
    <Header />
    <ModernTask />
    <Issues />
    <Mobile />
    <Rules />
    <TrialSection />
    <Footer />
  </>
)
