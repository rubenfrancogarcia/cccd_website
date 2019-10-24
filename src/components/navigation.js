import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./navigation.css"
import {Link} from 'gatsby'

//create a flexbox format for navigation menu

const Navigation = () => (

  <div class= "nav-container">
    <div class="link"> <Link to="/about/">About</Link></div>
    <div class="link"> <Link to="/services/">Services</Link></div>
    <div class="link"> <Link to="/donate/">Donate</Link> </div>
    <div class="link"> <Link to="/contact/">Contact</Link></div>

  </div>




)

export default Navigation
