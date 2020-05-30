import React from 'react'
import Navbar from '../containers/Home/Navbar'
import Main from '../containers/Terms/Main'
import TrialSection from '../containers/Home/TrialSection'
import Footer from '../containers/Home/FooterSection'

export default () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <TrialSection/>
      <Footer/>
    </>
  )
}