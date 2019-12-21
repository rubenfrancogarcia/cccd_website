import React from 'react'
import Layout from '../components/layout'
import '../styles/contact.css'
import ContactTemplate from '../components/contactTemplate'

const Contact = () => (
  <Layout>
    <div id = "contact-main">
        <ContactTemplate/>
        <div id = "contact-info">
            <div>
                <h1> Co-op Homecare </h1>
                <div id = "location">
                    <h1> Location: </h1>
                    <div>
                    979 F Street, Suite A-1 <br/>
                        Davis, CA 95616<br/>
                    </div>
                </div>
                    
                <div id = "direct-contact">
                    <h1> Direct Contact: </h1>
                    <div>
                        Phone: 530-297-1032<br/>
                        Email: info@cccd.coop <br/>
                        Hours: 9am - 5pm <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default Contact