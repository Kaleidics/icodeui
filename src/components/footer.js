import React from "react"
import { Link } from "gatsby"

import github from "../assets/githubmin.png"
import linkedin from "../assets/linkedinmin.png"
import mail from "../assets/mailmin.png"

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="footer__copyright" to="/">
        &copy;icodeUI 2020
      </Link>
      <nav className="footer__nav">
        <a
          className="footer__link"
          href="https://github.com/Kaleidics"
          target="_blank"
          rel="noopener noreferrer"
          title="Eddie Chu Github"
        >
          <img src={github} alt="Eddie Chu Github" />
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/eddiechu-dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Eddie Chu LinkedIn"
        >
          <img src={linkedin} alt="Eddie Chu LinkedIn" />
        </a>
        <a
          className="footer__link"
          href="mailto:contact@eddiechu.dev"
          target="_top"
          title="contact@eddiechu.dev"
        >
          <img src={mail} alt="contact@eddiechu.dev" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
