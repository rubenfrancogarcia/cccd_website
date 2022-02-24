import React from "react"
import "../styles/sidebar.css"
import segue1 from "../images/segue1.jpg"

const Sidebar = () => (
    <div className="sidebar">
        <div className="info-panel">
            <h1> Co-op Home Care </h1>
            <h2> 
                <ul>
                        <ol> Local & Compassionate Care</ol>
                        <ol> Professional Home Care Services </ol>
                        <ol> Trusted & Caregiver Owned</ol>
                </ul>  
            </h2>
        </div>
        
        <div className="segues">
        <div className="segue3">
                <img alt="Request a Caregiver" src="https://c.pxhere.com/photos/e2/32/wheelchair_disabled_pram_legs_help_crutch_gym_shoes_old-521906.jpg!d"></img>
                <a href="https://coophomecare.coop/contact/"> Request a Caregiver</a>
            </div>
            
            <div className="segue2">
                <img alt="Join the Team" src="https://i.imgur.com/lPvlzyx.jpg"></img>
                <a href="https://coophomecare.coop/careers/">  Join the Team  </a>
            </div>
            <div className="segue1">
                <img alt="Why Coops?" src={segue1}></img>
                <a href="https://coophomecare.coop/about/">  Why Coops? </a>
            </div>
            
            
        </div>
    </div>
)

export default Sidebar
