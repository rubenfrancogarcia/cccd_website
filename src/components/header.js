import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import {Link} from "gatsby"
import logo from "../images/coopLogo150px.png"

const Header = ({ siteTitle }) => (
    <header>
    
        <div class = "navbar" id = "top-navbar">
            <p> Co-op Homecare </p>
            <div>
                <p> &#9743; 1-530-297-1032 </p>
                <p> &#9993; info@cccd.coop </p>
            </div>
        </div>
        
        <div class = "navbar">
            <div class = "navbar-logo">
                <a href="/">
                    <img alt="TEMPORARY LOGO" src = {logo}></img><br/>
                </a>
            </div>
            
            <div class = "navbar-menu">
                <ul class = "navbar-menu-items">
                    <li>
                    <Link to ="/about/">
                            ABOUT US
                        </Link>
                    </li>
                    
                    <li id >
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
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header