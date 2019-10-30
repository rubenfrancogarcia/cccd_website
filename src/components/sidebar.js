import React from "react"

import "../styles/sidebar.css"

const Sidebar = () => (
    <div class="sidebar">
        <div class="info-panel">
            <h1> Cooperative Homecare </h1>
            <h2> 
                Short pitch. This is what we do. This is also what we do. 
                This is what we do here. Click below to know more!  
            </h2>
            <button> > Our Services </button>
            <input type="text" placeholder="&#x1F50D; Search . . . "></input>
        </div>
        
        <div class="segues">
            <div class="segue1">
                <img alt="Why Coops" src="https://media3.s-nbcnews.com/j/streams/2014/November/141126/1D274907309169-today-how-to-talk-alzheimers-141126-tease.fit-2000w.jpg"></img>
                <p>Why Coops?</p>
            </div>
            
            <div class="segue2">
                <img alt="Contact Us" src="https://www.wikihow.com/images/thumb/8/84/Be-a-Countertenor-Step-1.jpg/aid1916382-v4-728px-Be-a-Countertenor-Step-1.jpg.webp"></img>
                <p>Contact Us</p>
            </div>
            
            <div class="segue3">
                <img alt="Request a Caregiver" src="https://www.abilities.com/images/caregiver-day.jpg"></img>
                <p>Request a Caregiver</p>
            </div>
        </div>
    </div>
)

export default Sidebar
