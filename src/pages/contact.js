import React from 'react'
import Navbar from '../containers/Home/Navbar'
import Header from '../containers/Contact/Header'
import FormSection from '../containers/Contact/FormSection'
import Footer from '../containers/Home/FooterSection'

export default () => {
  return (
    <>
      <Navbar />
      <Header />
      <FormSection />
      <Footer />
    </>
  )
}