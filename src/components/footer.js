import React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer>
      <div id="footer-left">
          © {new Date().getFullYear()}, Built with
              {'  '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
      
      <div id="footer-right">
          Contact Us! <br/>
          (818) 888-8888
      </div>
    </footer>
)

export default Footer
