import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import logo from '../images/cooplogo150px.png';



const Header = ({ siteTitle }) => (
    <header>
        <div class= "header-container"> 
            <div class = "logo-container"> 
                <div class = "logo">
                    <a href="/">
                        <img alt="TEMPORARY LOGO" class="header-logo"src = {logo} ></img><br/>
                    </a>
                    </div>
                </div>
                <div class="contact-container">
                    <div class="contact-info">
                        <a href="tel:530-297-1023"> CLICK TO CALL NOW </a>
                        </div>

                </div>
                <div class="slogan-container">
                    <div class="slogan">
                    <ul> 
                        <ol>Cooperative Home Care </ol>
                        <ol> Local, Compassionate Care</ol> 
                        <ol> Trusted  * Caregiver Owned</ol>                   
                        </ul>
                    </div>
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
