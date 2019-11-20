import React from 'react'
import {Link} from "gatsby"
import "../styles/lead.css"

const Lead = () => (
    <div class="container">
         <div class ="item-1"> 
            <p>Speak with a Care Manager Now. </p>
         </div>
         <div class="item-2">
             <Link to ="/contact">Schedule a free in-home consultation!</Link>
             </div> 

    </div>

)

export default Lead