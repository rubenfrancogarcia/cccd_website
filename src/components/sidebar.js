import React from "react"
import "../styles/sidebar.css"

const Sidebar = () => (
    <div class="sidebar">
        <div class="info-panel">
            <h1> Co-op Homecare </h1>
            <h2> 
                <ul> 
                        <ol>Cooperative Home Care </ol>
                        <ol> Local, Compassionate Care</ol> 
                        <ol> Trusted, Caregiver Owned</ol>                   
                </ul>  
            </h2>
        </div>
        
        <div class="segues">
        <div class="segue3">
                <img alt="Request a Caregiver" src="https://c.pxhere.com/photos/e2/32/wheelchair_disabled_pram_legs_help_crutch_gym_shoes_old-521906.jpg!d"></img>
                <a href="https://coophomecare.coop/contact/"> Request a Caregiver</a>
            </div>
            
            <div class="segue2">
                <img alt="Join the Team" src="https://p0.piqsels.com/preview/98/611/678/5be9549d51172-thumbnail.jpg"></img>
                <a href="https://coophomecare.coop/careers/">  Join the Team!  </a>
            </div>
            <div class="segue1">
                <img alt="Why Coops?" src="https://pixnio.com/free-images/people/crowd/african-american-female-talking-with-one-blond-young-woman-and-with-one-man-725x483.jpg"></img>
                <a href="https://coophomecare.coop/about/">  Why Coops? </a>
            </div>
            
            
        </div>
    </div>
)

export default Sidebar
