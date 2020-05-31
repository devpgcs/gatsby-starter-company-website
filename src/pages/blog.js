import React from 'react'
import Navbar from '../containers/Home/Navbar'
import Banner from '../containers/Blog/Banner'
import Recomendations from '../containers/Blog/Recomendations'
import Recents from '../containers/Blog/Recents'
import TrialSection from '../containers/Home/TrialSection'
import Footer from '../containers/Home/FooterSection'

export default () => (
  <>
    <Navbar />
    <Banner />
    <Recomendations />
    <Recents />
    <TrialSection />
    <Footer />
  </>
)
