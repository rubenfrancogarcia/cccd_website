import React from 'react'
import Layout from '../components/layout'
import '../styles/payment.css' 
import PaypalButtons from '../components/paypal'
        
const Payment = () => (
    <Layout>
        <div id = "payment-main">
            <div id = "payment-header">
                <img src="https://p2.piqsels.com/preview/271/703/795/copy-space-notebook-wooden-journal.jpg" alt="Make a Payment - Header"></img>
                <div>
                    <h1> Online Payments </h1>
                </div>
            </div>
        
            <div id = "payment-body">
                <div id = "paypal-container">
                    <div>
                        <h1> Make a Payment </h1>
                        <p> If you've used our services in the past, you can make a payment here! </p>
                        <PaypalButtons />
                    </div>
                </div>
                
                <div id = "donate-container">
                    <div>
                        <h1> Make a Donation </h1>
                        <p> A tax-deductible donation to the non-profit, the California Center 
                            for Cooperative Development helps them support the sustainability and growth of Co-op Homecare!</p>
                        <a href="https://www.cccd.coop/"> here </a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </Layout>
)

export default Payment
