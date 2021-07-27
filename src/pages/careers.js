import React from 'react'
import Layout from '../components/layout'
import "../styles/careers.css"
import MyFormcareer from '../components/careersForm'

const careers = () => (
    <Layout>
        <div id = "careers-main">
            <div id = "careers-left"> 
                <h1> Join Our Team! </h1>
                <p> Are you passionate about caring for people? Join our Team! </p>
                <img src="https://i.imgur.com/xo0vtgG.jpg" alt="Our Team!"></img>
                <p>
                    As a worker-owned cooperative, Co-op Home Care is owned and operated by its workers. The worker-owned business model provides
                    caregivers an opportunity to have a say in the decisions that affect their daily work lives and share in the profits of the business 
                    in addition to their wages. Co-op Home Care was created to provide a more sustainable workplace for caregivers because they deserve 
                    work stability, livable wages, and positive working conditions. In turn, our business model creates the foundation for our caregivers to build compassionate, 
                    long lasting relationships with our clients who deserve quality and consistent care. 
                
                </p>
                <p>
                    Caregivers begin work with Co-op Home Care as an employee. After a six-months trial period, caregivers will
                    be invited to join the cooperative as a co-owner.
                </p>
                <a href="/about"> Learn more about us > </a>
            </div>
            {/*<div>*/}
            {/*    <h2> Ready to join? Here is a link to an application – </h2>*/}
                <MyFormcareer/>

            {/*</div>*/}

        </div>
    </Layout>
)

export default careers
