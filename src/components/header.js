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
    
            <div className = "navbar-top" id = "top-navbar">
                <p> Co-op Home Care </p>
                <div>
                    <a href="tel:(530) 746-5730"> &#9743; (530) 746-5730 </a>
                    <a href = "mailto: info@coophomecare.coop"> &#9993; info@coophomecare.coop </a>
                </div>
            </div>
            
            <div className = "navbar">
                <div className="mobile-nav">   
                <button onClick={this.Toggle}><img className="ham-image" alt="LOGO" src = {hamburger} /> </button>
                <p className="menu-text">Menu</p> 
                </div>
                <div className = "navbar-logo">
                    <a href="/">
                        <img alt="LOGO" src = {logo}></img><br/>
                    </a>
                </div>
                
                <div className = "navbar-menu">
                    <ul className = "navbar-menu-items">
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
            <div className={ this.state.toggle ? "responsive-menu" : "display"}>
                    <div className="link-box"> 
                    <Link to= "/payment/">
                                HOME 
                            </Link>
                    </div> 
                    <div className="link-box"> 
                    <Link to ="/about/">
                                ABOUT US
                            </Link>
                    </div> 
                    <div className="link-box"> 
                    <Link to ="/services/">
                                SERVICES
                            </Link>
                    </div> 
                    <div className="link-box"> 
                    <Link to= "/contact/">
                                CONTACT
                            </Link>
                    </div> 
                    <div className="link-box"> 
                    <Link to= "/payment/">
                                MAKE A PAYMENT 
                            </Link>
                    </div> 
                </div>
        </header>
        );
    }

   

}
    

    
