import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'

const About = () => (
    <Layout>
        <div id = "About-Main">
            <div id = "About-Header">
                <img src="https://live.staticflickr.com/8254/29720268335_95dd33d92f_b.jpg"/>
                <div>
                    <h1> About Us </h1>
                    <p> - One line mission statement </p>
                </div>
            </div>
        
            <div id = "About-Body">
                <div id = "About-Left"> 
                    <h1> Coop Homecare </h1>
                    <p> 
                        Thank You for considering Yolo Eco-Clean Co-op as your cleaning service provider! 
                        We specialize in excellent service using environmentally responsible products and practices.
                    </p>
                    <a> Learn more about what we do > </a>
                </div>
                
                <div id = "About-Right">
                    <div>
                        <img src="https://www.coombefamilypractice.com/uploads/pages/team.jpg"/>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
        

        
    </Layout>
)

export default About
