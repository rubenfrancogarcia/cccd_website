import React from "react"

import Sidebar from "../components/sidebar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class = "home-view"> 
        <div class="home-view-header">
            <img alt="Coop Homecare" class="home-view-image" src="https://mccrearylawoffice.com/wp-content/uploads/2018/12/9158E9DD-ED73-4CBB-9251-462544AAAE12-e1545249856254.jpeg"></img>
            <div class="home-view-title"> Coop Homecare </div>
        </div>
        
        <div class="home-view-content">
            <h1> We're a home care cooperative in Davis! Let us know if you need help with any of the following. </h1>
            <ul>
                <li> Service 1 </li>
                <li> Service 2 </li>
                <li> Service 3 </li>
                <li> Service 4 </li>
            </ul>
        </div>
    </div>
  </Layout>
)

export default IndexPage
