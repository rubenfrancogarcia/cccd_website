import React from 'react'
import Layout from '../components/layout'
import ContactForm from "../components/contactForm"
import "../styles/careers.css"

const careers = () => (
    <Layout>
        <div id = "careers-main">
            <div id = "careers-left"> 
                <h1> Join Our Team! </h1>
                <p> Passionate about people? Join our Team! </p>
                <img src="https://www.coombefamilypractice.com/uploads/pages/team.jpg"/>
                <p> 
                    Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team Description about the team 
                </p>
                <a href="/about"> Learn more about us > </a>
            </div>
            
            <ContactForm/>
        </div>
    </Layout>
)

export default careers
