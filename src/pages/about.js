import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'

const About = () => (
    <Layout>
        <div id = "About-Main">
            <div id = "About-Header">
                <img src="https://live.staticflickr.com/8254/29720268335_95dd33d92f_b.jpg" alt="About Us Header" />
                <div>
                    <h1> About Us </h1>
                </div>
            </div>
        
            <div id = "About-Body">
                <div id = "About-Left"> 
                    <h1> Co-op Homecare </h1>
                    <p> 
Thank you for considering Co-op Homecare. We specialize in providing quality, compassionate caregiving services.</p>
 
<p><b>Our mission is to provide compassionate, high quality in-home support services to our clients.</b></p>
 
<p>Our worker-owned cooperative offers a win-win for clients and caregivers. Caregivers co-own this business; we chose this work because we enjoy caregiving.  The worker cooperative model provides us control over our workplace policies and better compensation.  This benefits clients who gain quality services from a committed team.</p>  
 
<p><i>Co-op Homecare</i> was initiated as a project of the local non-profit, the California Center for Cooperative Development (CCCD).
The premise of the project is that people who need home care support deserve quality services from a consistent caregiver, and 
caregivers deserve work stability, livable wages, and positive working conditions. The worker cooperative model is mutually beneficial
for clients and caregivers: caregivers gain workplace advantages that encourage them to stay, and clients receive quality, reliable care
from a consistent caregiver.  CCCD expects to be providing assistance to the cooperative through 2021 to provide a solid foundation for 
business success and growth. The goal is for the cooperative to grow and offer worker-cooperative opportunities to more caregivers within 
Yolo County and to expand to provide quality and compassionate home care in Dixon, and, eventually, areas in Sacramento. 
Donations to <a href="https://cccd.coop/">CCCD</a> support the non-profit’s support of this project.
 
                    </p>
                    <a href="/services"> Learn more about what we do > </a>
                </div>
                
                <div id = "About-Right">
                    <div>
                        <img src="https://i.imgur.com/pE5wX7L.jpg" alt="Our Team!"/>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
        

        
    </Layout>
)

export default About
