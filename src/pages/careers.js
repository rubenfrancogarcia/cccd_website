import React from 'react'
import Layout from '../components/layout'
import "../styles/careers.css"
import ContactTemplate from '../components/contactTemplate'

const careers = () => (
    <Layout>
        <div id = "careers-main">
            <div id = "careers-left"> 
                <h1> Join Our Team! </h1>
                <p> Passionate about people? Join our Team! </p>
                <img src="https://i.imgur.com/xo0vtgG.jpg" alt="Our Team!"></img>
                <p> 
                    Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team 
                </p>
                <a href="/about"> Learn more about us > </a>
            </div>
            
            <ContactTemplate/>
        </div>
    </Layout>
)

export default careers
