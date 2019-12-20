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
                        <p> If you've used our services in the past, you can make a payment here! A 2% fee will be charged for all online/credit card payments </p><br/> 
                        <PaypalButtons />
                    </div>
                </div>
                
                <div id = "donate-container">
                    <div>
                        <h1> Make a Donation </h1>
                        <p> A tax-deductible donation to the non-profit, the California Center 
                            for Cooperative Development helps them support the sustainability 
                            and growth of Co-op Homecare!</p>
                            <div class ="link-container"><a href="https://cccd.coop/membership/donate-cccd"> Click to support the CCCD  </a> </div>
                    </div>
                    
                </div>

                <div id = "check-container">
                    <div>
                        <h1> Pay by Check  </h1>
                        <p> Payments via checks will not be charged a fee. Please send all checks  
                            addressed to <strong> Co-op Home Care </strong>to the following address 
                            <strong> 979 F street, Suite A-2, Davis, California 95616.</strong>.  
                        </p>
                        <div class ="link-container"><a href="https://goo.gl/maps/ogjx6M2Ku7BCKEUA7"> Click for Directions  </a> </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </Layout>
)

export default Payment
