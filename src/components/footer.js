import React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer>
      <div id="footer-left">
           <h1> Coop Homecare </h1>
           <p> Copyright © California Center for Cooperative Development </p>
      </div>
      
      <div id="footer-right">
          <div>
              <h1> CONTACT INFO </h1>
          
              <p id = "Address">
                  1111 Coop Drive <br/>
                  Davis, CA 91322 <br/>
              </p>
              
              <p id = "OtherContactInfo">
                  Phone: 1 (800) 800-8000 <br/>
                  Email: coop@coop.net
              </p>
          </div>

      </div>
    </footer>
)

export default Footer
