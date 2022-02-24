import React from "react"

import "../styles/footer.css"

const Footer = () => (
    <footer>
      <div id="footer-left">
           <h1> Co-op Home Care </h1>
        <p> A project by the California Center for Cooperative Development:  <a href="https://cccd.coop/">cccd.coop </a> </p>
      </div>
      
      <div id="footer-right">
            <div>
                <h1> CONTACT INFO </h1>
          
                <p id = "Address">
                    979 F Street, Suite A-1 <br/>
                    Davis, CA 95616 <br/>
                </p>
              
                <p id = "OtherContactInfo">
                    <a href="tel:530.746.5730"> Phone:  530.746.5730 </a> <br/>
                    <a href = "mailto: info@coophomecare.coop"> Email: info@coophomecare.coop</a>
                </p>
            </div>
      </div>
    </footer>
)

export default Footer
