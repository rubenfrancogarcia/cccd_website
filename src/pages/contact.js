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
                <h1> Co-op Homecare </h1>
                <div id = "location">
                    <h2> Location: </h2>
                    <div>
                        979 F Street, Suite A-1 <br/>
                        Davis, CA 95616<br/>
                    </div>
                </div>
                    
                <div id = "direct-contact">
                    <h2> Direct Contact: </h2>
                    <div>
                        <a href="tel:530-297-1023"> Phone:  530-297-1032 </a> <br/>
                        <a href = "mailto: info@cccd.coop"> Email: info@cccd.coop</a> <br/>
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