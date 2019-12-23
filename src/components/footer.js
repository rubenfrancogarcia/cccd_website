import React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer>
      <div id="footer-left">
           <h1> Co-op Home Care </h1>
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
                    <a href="tel:530-297-1023"> Phone:  530-297-1032 </a> <br/>
                    <a href = "mailto: info@cccd.coop"> Email: info@cccd.coop</a>
                </p>
            </div>
      </div>
    </footer>
)

export default Footer
