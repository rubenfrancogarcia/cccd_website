import React from "react"
import {Link} from "gatsby"
import "../styles/navbar.css"


const Navigation = () => {
    

    return (
        <div class = "navbar-menu">
        <ul class = "navbar-menu-items">
            <li>
            <Link to ="/about/" activeClassName="active">
                    ABOUT US
                </Link>
            </li>
            
            <li id >
            <Link to ="/services/" activeClassName="active">
                    SERVICES
                </Link>
            </li>

            <li>
            <Link to= "/contact/" activeClassName="active">
                    CONTACT
                </Link>
            </li>
            <li> 
                <Link to="/payment/" activeClassName="active">
                    ONLINE PAYMENT
                </Link>
            </li>
                    
            <li>
                <div> 
                    MORE <p class= "caret-symbol" >&#9660;</p>
                </div>
                <ul class = "hidden">
                    <li> 
                        <Link to= "/careers/" activeClassName="active">
                            JOIN THE TEAM 
                        </Link>
                    </li>
                    <li> 
                        <Link to= "/resources/" activeClassName="active"> 
                            RESOURCES
                        </Link> 
                    </li>
                </ul>
            </li>
            
        </ul>
    </div>
    

    )
}

export default Navigation