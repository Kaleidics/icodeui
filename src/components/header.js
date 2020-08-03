import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="header">
      <div className="header__inner">
        <h1>
          <Link to="/" className="header__heading">
            <div className="header__icon"></div>Code UI
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header

