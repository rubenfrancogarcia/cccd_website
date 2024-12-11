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

                                    <p> 
                                    Thank you for considering Co-op Home Care. We specialize in providing quality, compassionate caregiving services.</p>

                                        <p><b>Our mission is to provide compassionate, high quality in-home support services to our clients.</b></p>
                                    </div>
                                    <h2 class={"content-header"}> Our Philosophy</h2>
                                    <div class="content philosophy">
                                        <div>
                                        <p>Our worker-owned cooperative offers a win-win for clients and caregivers. Caregivers co-own this business; we chose this work because we enjoy caregiving.  The worker cooperative model provides us control over our workplace policies and better compensation.  This benefits clients who gain quality services from a committed team.</p> 
                                            </div> 
                                            <div> 
                                            <p><i>Co-op Home Care</i> was initiated as a project of the local non-profit, the California Center for Cooperative Development (CCCD).
                                        The premise of the project is that people who need home care support deserve quality services from a consistent caregiver, and 
                                        caregivers deserve work stability, livable wages, and positive working conditions. The worker cooperative model is mutually beneficial
                                        for clients and caregivers: caregivers gain workplace advantages that encourage them to stay, and clients receive quality, reliable care
                                        from a consistent caregiver.  </p>
                                            </div>

                            </div>
                            <h2 class={"content-header"} >Our Vision</h2>
                            <div class="content vision">
                              <p>
                                Co-op Home Care will be the region’s number one source of In-home support serves. We intend to grow geographically,
                                from providing care in Yolo County and Dixon to encompass regions in Sacramento. Growth will allow us to provide
                                services to more clients and to grow employment and co-ownership opportunities for more caregivers.
                              </p>
                              </div>
                              <div className="content vision">
                            <p>CCCD will be providing assistance to the cooperative through 2021 to provide a solid foundation for
                            business success and growth. The goal is for the cooperative to grow and offer worker-cooperative opportunities to more caregivers within the regions of care. </p>
                            </div>
                            <div class="donation">
                            Donations to <a href="https://cccd.coop/">CCCD</a> support the non-profit’s support of this project.
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
