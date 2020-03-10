import React from 'react'
import Layout from '../components/layout'
import "../styles/careers.css"
import ContactTemplate from '../components/contactTemplate'

const careers = () => (
    <Layout>
        <div id = "careers-main">
            <div id = "careers-left"> 
                <h1> Join Our Team! </h1>
                <p> Passionate about people? Join our Team! </p>
                <img src="https://i.imgur.com/xo0vtgG.jpg" alt="Our Team!"></img>
                <p>
                    Co-op Home Care is a worker cooperative formed by a local non-profit, the California Center for Cooperative Development,
                    to empower caregivers to share a homecare business that generates better pay and working conditions for caregivers.
                    Co-op Homecare believes that people who need homecare support deserve quality services from a consistent caregiver, and
                    caregivers deserve work stability, livable wages, and positive working conditions.
                </p>
                <p>
                    Caregivers begin work with Co-op Home Care as an employee.  We hope that after six months of employment caregivers will
                    be interested in joining the cooperative as a co-owner.  While this is a goal, membership is not a requirement.
                </p>
                <a href="/about"> Learn more about us > </a>
            </div>
            
            <ContactTemplate/>
        </div>
    </Layout>
)

export default careers
