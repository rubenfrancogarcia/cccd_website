import React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer>
      <div id="footer-left">
           <h1> Coop Homecare </h1>
           <p> California Center for Cooperative Development </p>
      </div>
      
      <div id="footer-right">
          <div>
              <h1> CONTACT INFO </h1>
          
              <p id = "Address">
              979 F Street, Suite A-1 <br/>
                  Davis, CA 95616 <br/>
              </p>
              
              <p id = "OtherContactInfo">
                  Phone:  530-297-1032 <br/>
                  <a href="tel:530-297-1023"> CLICK TO CALL NOW </a> <br/>
                  Email: coop@coop.net 
              </p>
          </div>

      </div>
    </footer>
)

export default Footer
