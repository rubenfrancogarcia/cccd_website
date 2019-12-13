import React from 'react';
import PaypalExpressBtn from 'gatsby-paypal-button';
import '../styles/PaypalButtons.css';
 
/* ---- Paypal Button Parameters: ---- */
    const style = { label: 'paypal' }
    const onSuccess = (payment) => { console.log("The payment succeeded!", payment); }
    const onError = (err) => { console.log("Error!", err); }

    // User pressed "cancel" or closed Paypal's popup
    const onCancel = (data) => { console.log('The payment was cancelled!', data); }

    // 'production' or 'sandbox'
    let env = 'production'; 

    let currency = 'USD'; 
    let total = 20.00; 

    // 0 or 2 for shipping address required. 1 for not
    let shipping = 1;  

    const client = {
        sandbox:    'AbnGdEfoCaqsH_NIzbWE63r6rLYB5q6GWeyJ1Ky6r8_j9anyY7EFS4q-k_5CKxzUFyuU5FjIDSx8T35I',
        production: 'Af7ECsrU_q-qJ3v5c4QXAijy_gDrAsLhFescLMTup22_HECQYu7RGeHs1BQhRA_2iZulHmrcsjt_-BSW',
    }

    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
    
 
export default class PaypalButtons extends React.Component {
    render() {
        return (
            <div class="PaypalButtonContainer">
                <div id="InputContainer">
                    <p> Amount: </p>
                    <input type="number" defaultValue={total} onChange={(e)=>{total = e.target.value;}} />
                    <p id="dollar-sign">$</p>
                </div>
                
                <PaypalExpressBtn env={env} client={client} currency={currency} total={total} shipping={shipping} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style} />
            </div>
        );
    }
}