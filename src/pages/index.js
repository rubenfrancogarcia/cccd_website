import React from "react"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"
/*  Please use className, not class  */

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className = "home-view"> 
        <div className="home-view-header">
            {/*<img alt="Coop Homecare" className="home-view-image" src="https://p1.piqsels.com/preview/912/170/539/warm-moved-the-years-cover-hand-love-life.jpg"></img>*/}
            <img alt="Coop Homecare" className="home-view-image" src="https://images.unsplash.com/photo-1559234938-b60fff04894d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"></img>
            <div className="home-view-title"> Co-op Homecare </div>
        </div>
        
        <div className="home-view-content">
            <h1>
                Co-op Homecare IS OPEN!
            </h1>

            <br/><br/>
                  
            <b>We are a local, independently owned and operated home care cooperative!</b>

            <br/><br/>
              
            <b>Co-op Home Care</b> is a worker-owned cooperative dedicated to providing quality and compassionate home care services throughout Yolo County and surrounding areas.
            Our caregivers co-own and democratically operate the business. The worker-owned model provides a compassionate 
            workplace that promotes worker dignity, job satisfaction, and a foundation to build a long lasting relationship with our clients. We incorporate these values into the work we do every day.
           
            <br/><br/>
            Co-op Home Care is fully licensed and insured. Our caregivers are fully trained, first-aid certified, and have passed a background check.
            
            <br/><br/>
            Reach out to our office in Davis, California for a free consultation and care coordinator will match you with the right caregiver for your loved one's needs.
            
            <br/><br/>
            <b>"Our business model emphasizes kindness to workers and kindness to clients."</b>
        </div>
    </div>
    
    <Sidebar />
  </Layout>
)

export default IndexPage
