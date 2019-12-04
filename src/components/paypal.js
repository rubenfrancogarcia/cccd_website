import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class PaypalButtons extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or closed Paypal's popup
            console.log('The payment was cancelled!', data);
        }
 
        const onError = (err) => {
            console.log("Error!", err);
        }
 
        let env = 'production'; // 'production' or 'sandbox'
        let currency = 'USD'; 
        let total = 0.01; // CHANGE
        let shipping = 1; // 0 or 2 for shipping address required. 1 for not 
        const client = {
            sandbox:    'AbnGdEfoCaqsH_NIzbWE63r6rLYB5q6GWeyJ1Ky6r8_j9anyY7EFS4q-k_5CKxzUFyuU5FjIDSx8T35I',
            production: 'Af7ECsrU_q-qJ3v5c4QXAijy_gDrAsLhFescLMTup22_HECQYu7RGeHs1BQhRA_2iZulHmrcsjt_-BSW',
        }
        const style = {
            label: 'paypal'
        }
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} shipping={shipping} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style} />
        );
    }
}