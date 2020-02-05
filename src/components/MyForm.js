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
            <label> Name
                <input type="text" 
                name="Name"
                value={this.state.fullName}
                onChange={this.handleInputChange}
                id="name"
                /> 
            </label>
        </div>

        <div class="item">
            <label>
                Phone Number
                <input type="text"
                name="Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleInputChange}
                id="phoneNumber"
                />
            </label>
        </div>

          <div className="item">
            <label>
              Zip Code
              <input type="text"
                     name="Zip Code"
                     value={this.state.zipCode}
                     onChange={this.handleInputChange}
                     id="zipCode"
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



