import React from 'react'
import Layout from '../components/layout'
import ContactForm from "../components/contactForm"
import '../styles/contact.css'

const Contact = () => (
  <Layout>
    <div id = "contact-main">
        <ContactForm/>
        <div id = "contact-info">
            <div>
                <h1> Coop Homecare </h1>
                <div id = "location">
                    <h1> Location: </h1>
                    <div>
                        1111 Coop Drive <br/>
                        Davis, CA <br/>
                    </div>
                </div>
                    
                <div id = "direct-contact">
                    <h1> Direct Contact: </h1>
                    <div>
                        Phone: 818.111.1111 <br/>
                        Email: chc.coop.com <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default Contact