import React from 'react'

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <form
         id="fs-contact"
          onSubmit={this.submitForm}
          action="https://formspree.io/moqqqygd"
          method="POST"
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
          


          {status === "SUCCESS" && <p>Thanks!</p>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }

/* 
FormSpring info: 
email: rubengarcia0515@gmail.com
pw: Arson793.
link: https://formspree.io/forms/moqqqygd/integration
formName: homecare_contact
*/



