import React from "react"
import Header from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'

const Layout = (props) => {
  return(
    <div className="layout">
      <Header />
      <Hero />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
