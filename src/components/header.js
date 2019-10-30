import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

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
                    <li id = "navbar-menu-item-1">
                        <a href = "google.com">
                            ABOUT US
                        </a>
                    </li>
                    
                    <li id = "navbar-menu-item-2">
                        <a href = "google.com">
                            SERVICES
                        </a>
                    </li>
                    
                    <li id = "navbar-menu-item-2">
                        <a href = "google.com">
                            DONATE
                        </a>
                    </li>
                    <li id = "navbar-menu-item-3">
                        <a href = "google.com">
                            CONTACT US
                        </a>
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
