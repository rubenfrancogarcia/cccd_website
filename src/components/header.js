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
                    <Link to= "/donate/">
                            DONATE
                        </Link>
                    </li>
                    <li>
                    <Link  to= "/contact/">
                            CONTACT
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
