import React, { Component } from "react"
import "../styles/header.css"
import {Link} from "gatsby"
import logo from "../images/coopLogo150px.png"
import hamburger from "../images/menu.png"



export default class Header extends Component  {
    state= {
        toggle: false
    }

    Toggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        return(
            <header>
    
            <div class = "navbar-top" id = "top-navbar">
                <p> Co-op Homecare </p>
                <div>
                    <a href="tel:530-297-1023"> &#9743; 1-530-297-1032 </a>
                    <a href = "mailto: info@cccd.coop"> &#9993; info@cccd.coop </a>
                </div>
            </div>
            
            <div class = "navbar">
                <div class="mobile-nav">   
                <button onClick={this.Toggle}><img class="ham-image" alt="LOGO" src = {hamburger} /> </button>
                <p class="menu-text">Menu</p> 
                </div>
                <div class = "navbar-logo">
                    <a href="/">
                        <img alt="LOGO" src = {logo}></img><br/>
                    </a>
                </div>
                
                <div class = "navbar-menu">
                    <ul class = "navbar-menu-items">
                        <li>
                        <Link to ="/about/">
                                ABOUT US
                            </Link>
                        </li>
                        
                        <li >
                        <Link to ="/services/">
                                SERVICES
                            </Link>
                        </li>
        
                        <li>
                        <Link to= "/contact/">
                                CONTACT
                            </Link>
                        </li>
                                
                        <li> 
                            <Link to= "/careers/">
                                JOIN THE TEAM 
                            </Link>
                        </li>
                         <li> 
                            <Link to= "/payment/">
                                MAKE A PAYMENT 
                            </Link>
                        </li>
                                     
                        
                    </ul>
                </div>
                
            </div>
            <div class={ this.state.toggle ? "responsive-menu" : "display"}>
                    <div class="link-box"> 
                    <Link to= "/payment/">
                                HOME 
                            </Link>
                    </div> 
                    <div class="link-box"> 
                    <Link to ="/about/">
                                ABOUT US
                            </Link>
                    </div> 
                    <div class="link-box"> 
                    <Link to ="/services/">
                                SERVICES
                            </Link>
                    </div> 
                    <div class="link-box"> 
                    <Link to= "/contact/">
                                CONTACT
                            </Link>
                    </div> 
                    <div class="link-box"> 
                    <Link to= "/payment/">
                                MAKE A PAYMENT 
                            </Link>
                    </div> 
                </div>
        </header>
        );
    }

   

}
    

    
