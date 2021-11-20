import React from 'react'
import Layout from '../components/layout'
import '../styles/contact.css'
import ContactTemplate from '../components/contactTemplate'
import logo from "../images/coopLogobigger.jpg"

const Contact = () => (
  <Layout>
    <div id = "contact-main">
        <ContactTemplate/>
        <div id = "contact-info">
            <div>
                <h1> Co-op Home Care </h1>
                <div id = "location">
                    <h2> Location: </h2>
                    <div>
                        979 F Street, Suite A-1 <br/>
                        Davis, CA 95616<br/>
                    </div>
                </div>
                    
                <div id = "direct-contact">
                    <h2> Contact: </h2>
                    <div>
                        <a href="tel:(530) 746-5730"> Phone: (530) 746-5730 </a> <br/>
                        <a href = "mailto: info@coophomecare.coop"> Email: info@coophomecare.coop</a> <br/>
                        Hours: 9am - 5pm <br/>
                    </div>
                    <div>
                        <img className="logo" src= {logo} alt="the cooperative official logo"></img><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default Contact
