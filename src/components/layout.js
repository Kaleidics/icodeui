import React from "react"
import { Helmet } from "react-helmet"

import Header from "../components/header"
import Hero from "../components/hero"
import Footer from "../components/footer"

const Layout = props => {
  return (
    <div className="layout">
      <Helmet
        title="iCodeUI"
        meta={[
          {
            name: "description",
            content:
              "A semi-daily practice in the art of coding random pieces of UI.",
          },
          {
            name: "keywords",
            content:
              "HTML, CSS, UI, Coding, Eddie Chu, Eddie, Chu, Web Development, Design",
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Header />
      <Hero />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
