import React from 'react'
import '../styles/contactForm.css'

export default class Contact extends React.Component {
    state = {
      firstName:"",
      lastName:'',
      emailAddress:"",
      message:"",
    }
    handleInputChange = event => {
      const target = event.target 
      const value= target.value 
      const name= target.name 
      this.setState({
        [name]: value,
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
      } 
    render() {
      return ( 
        <div class="col-view"> 
            <div class="box"> 
                <div class> 
                    <h2>Drop us an Email!</h2>
                </div>
                <div class="container"> 
                    <form id="fs-contact" 
                    method="POST" 
                    action="https://formspree.io/moqqqygd"  
                    onSubmit={this.handleSubmit} 
                    > 
                        <div class="item"> 
                            <label> First Name  
                                <input type="text" 
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                id="name"
                                /> 
                            </label>
                        </div>
                        
                        <div class="item"> 
                            <label> 
                                Last Name 
                                <input type="text"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                id="lastName"
                                />
                            </label>
                        </div>
                        
                        <div class="item"> 
                            <label> Email Address 
                                <input type="text"
                                name="emailAddress"
                                value={this.state.emailAddress}
                                onChange={this.handleInputChange}
                                id="emailAddress"
                                />
                            </label>
                        </div>
                        
                        <div class="item"> 
                            <label> Message
                                <textarea rows="5"
                                    input type="text" 
                                name="message"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                id="message"
                                required=""
                                />
                            </label>
                        </div>
                    
                        <button type="submit" value="send">Submit</button>
                        
                    </form>
                </div>
            </div>  
        </div>         
      )
    }
  }

  {/* FormSpring info: 
email: rubengarcia0515@gmail.com
pw: Arson793.
link: https://formspree.io/forms/moqqqygd/integration
formName: homecare_contact*/}