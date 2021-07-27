import React from 'react'
import Layout from '../components/layout'
import '../styles/about.css'
import logo from "../images/coopLogobigger.png"

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
                   <div class= "content ">
                        <div class="content-info ">
                                    <h2 class={"content-header"}> Our Mission</h2>
                                    <div class="content mission ">

                                 <p><b>Our mission is to provide compassionate, high quality in-home support services to our clients.</b></p>
                                    </div>
                                    <h2 class={"content-header"}> Our Philosophy</h2>
                                    <div class="content philosophy">
                                        <div>
                                        <p>Our worker-owned cooperative offers a win-win for clients and caregivers. Our caregivers co-own the business and we chose this work because we enjoy caregiving.  
                                        The worker-cooperative model gives us control over the decisions that affect our workplace and daily lives. This benefits our clients who gain quality services from a 
                                        committed team.</p> 
                                            </div> 
                                            <div> 
                                            <p><i>Co-op Home Care</i> was developed by a local non-profit, the California Center for Cooperative Development (CCCD).
                                        The premise of the project is that people who need home care support deserve quality services from a consistent caregiver, and 
                                        caregivers deserve work stability, livable wages, and positive working conditions. The worker cooperative model is mutually beneficial
                                        for clients and caregivers: caregivers gain workplace advantages that encourage them to stay, and clients receive quality, reliable care
                                        from a consistent caregiver.  </p>
                                            </div>

                            </div>
                            <h2 class={"content-header"} >Our Vision</h2>
                            <div class="content vision">
                              <p>
                                Co-op Home Care will be the region’s number one source of home care serves. As we grow geographically,
                                we will providing care in Yolo County and Dixon as well as regions in Sacramento. Growth will allow us to provide
                                services to more clients and to grow employment and co-ownership opportunities for more caregivers.
                              </p>
                              </div>
                              <div className="content vision">
                            <p>The CCCD will be providing assistance to the cooperative through 2021 to develop a solid foundation for
                            business success and growth. Our goal is to grow and offer more career opportunities to caregivers in the region. </p>
                            </div>
                            <div class="donation">
                            Donations to the <a href="https://cccd.coop/">CCCD</a> will support the development of this project.
                            </div>
                        </div>
                        <div class="content-image image">
                                <img src="https://i.imgur.com/pE5wX7L.jpg"  className="image" alt="Our Team!"/>
                                <div>
                                  <img className="logo" src= {logo} alt="the cooperative official logo"></img><br/>
                                </div>
                            </div>
                     {/*<div class={"contentlogo-image image"}>*/}
                     {/*  <img className="logo" src= {logo} alt="the cooperative official logo"></img><br/>*/}
                     {/*  */}
                     {/*</div>*/}
                     {/*<div className="content-image image">*/}
                     {/*  <img className="logo" src= {logo} alt="the cooperative official logo"></img><br/>*/}
                     {/*</div>*/}
                   </div>

               
                    
                    
                
            </div>
            
        </div>
        

        
    </Layout>
)

export default About
