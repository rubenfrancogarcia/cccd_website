import React from 'react'
import '../styles/contactForm.css'
import MyForm from './MyForm'

export default class ContactTemplate extends React.Component {
    

    
    render() {
        return ( 
            <div class="col-view"> 
                <div class="box"> 
                    <div class> 
                        <h2>Drop us an Email!</h2>
                    </div>
                    <div class="container"> 
                        <MyForm/>
                    </div>
                </div>  
            </div>         
        )
    }
 }

/* 
FormSpring info: 
email: rubengarcia0515@gmail.com
pw: Arson793.
link: https://formspree.io/forms/moqqqygd/integration
formName: homecare_contact
*/



