import React from 'react'
import Layout from '../components/layout'
import '../styles/payment.css' 
import PaypalButtons from '../components/paypal'




const Payment = () => (
   
    <Layout>
        <div id = "payment-wide-view">
            <div id = "payment-header">
                <img src="https://p2.piqsels.com/preview/271/703/795/copy-space-notebook-wooden-journal.jpg" alt=""></img>
                <div>
                    <h1> Online Payments </h1>
                </div>
            </div>
        
            <div id = "payment-body">
                <div id = "paypal-container">
                    <div>
                        <h2> Make a Payment </h2>
                        <p> If you've used our services in the past, you can make a payment here! A 2% fee will be charged for all online/credit card payments<br/> </p><br/>
                        <PaypalButtons />
                    </div>
                </div>
                
                <div id = "donate-container">
                    <div>
                        <h2> Make a Donation </h2>
                        <p> A tax-deductible donation to the non-profit, the <i> California Center for Cooperative Development </i> helps them support the sustainability 
                            and growth of Co-op Homecare!</p>
                            <div className ="link-container"><a href="https://cccd.coop/membership/donate-cccd"> Click to donate to CCCD  </a> </div>
                    </div>
                    
                </div>

                <div id = "check-container">
                    <div>
                        <h2> Pay by Check  </h2>
                        <p> Payments via checks will not be charged a fee. Please send all checks  
                            addressed to <strong> Co-op Home Care </strong>to the following address 
                            <strong> 979 F street, Suite A-2, Davis, California 95616.</strong>.  
                        </p>
                        <div className ="link-container">
                            <a href="https://goo.gl/maps/ogjx6M2Ku7BCKEUA7"> Click for Instructions  </a> 
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div id = "payment-mobile-view">

            <div id = "payment-header">
                <img src="https://p2.piqsels.com/preview/271/703/795/copy-space-notebook-wooden-journal.jpg" alt=""></img>
                <div>
                    <h1> Online Payments </h1>
                </div>
            </div>
        
            <div id = "payment-body">
                <div id = "paypal-container">
                    <div>
                        <h2> Make a Payment </h2>
                        <p> If you've used our services in the past, you can make a payment here! A 2% fee will be charged for all online/credit card payments </p>
                        <PaypalButtons />
                    </div>
                </div>
                
                <div id = "donate-container">
                    <div>
                        <h2> Make a Donation </h2>
                        <p> A tax-deductible donation to the non-profit, the <i> California Center for Cooperative Development </i> helps them support the sustainability 
                            and growth of Co-op Homecare!</p>
                            <div className ="link-container"><a href="https://cccd.coop/membership/donate-cccd"> Click to donate to CCCD  </a> </div>
                    </div>
                    
                </div>

                <div id = "check-container">
                    <div>
                        <h2> Pay by Check  </h2>
                        <p> Payments via checks will not be charged a fee. Please send all checks  
                            addressed to <strong> Co-op Home Care </strong>to the following address 
                            <strong> 979 F street, Suite A-2, Davis, California 95616.</strong>.  
                        </p>
                        <div className ="link-container">
                            <a href="https://goo.gl/maps/ogjx6M2Ku7BCKEUA7"> Click for Instructions  </a> 
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    </Layout>
)

export default Payment
