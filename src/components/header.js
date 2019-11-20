import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import {Link} from "gatsby"

const Header = ({ siteTitle }) => (
    <header>
        <div class = "navbar">
            <div class = "navbar-logo">
                <a href="/">
                    <img alt="TEMPORARY LOGO" src = "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png"></img><br/>
                </a>
            </div>
            
            <div class = "navbar-menu">
                <ul class = "navbar-menu-items">
                    
                    <li id >
                    <Link to ="/services/">
                            Services
                        </Link>
                    </li>
                    <li >
                    <Link to ="/payment/">
                            Payment
                        </Link>
                    </li>
                    <li>
                    <Link to ="/about/">
                            About Us
                        </Link>
                    </li>
                    <li>
                    <Link  to= "/contact/">
                            Contact
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
