import React from 'react'
import Layout from '../components/layout'
import "../styles/services.css"

const Services = () => (
    <Layout>
        <div id = "services-body"> 
            <div id = "services-header">
                <img src="https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_960_720.jpg" alt="Services - Header"></img>
                <div>
                    <h1> Our Services </h1>
                    <p> We specialize in these things: </p>
                </div>
            </div>
            
            <div id = "blocks">
                {/* TODO: Eventually you would loop through a database like:
                          for{ post in blog_posts }
                  */}
                <div>
                    <h1> Dementia </h1>
                    <hr/>
                    <p> A dementia diagnosis requires a change from a person's usual mental functioning and a greater decline than one would expect due to aging. These diseases have a significant effect on caregivers </p>
                    <button> Learn more </button>
                </div>
                
                <div>
                    <h1> Disabilities </h1>
                    <hr/>
                    <p> A disability is any condition that makes it more difficult for a person to do certain activities or interact with the world around them. These conditions, or impairments, may be cognitive, developmental, intellectual, mental, physical, sensory, or a combination of multiple factors.  </p>
                    <button> Learn more </button>
                </div>
                
                <div>
                    <h1> Private Care </h1>
                    <hr/>
                    <p> A dementia diagnosis requires a change from a person's usual mental functioning and a greater decline than one would expect due to aging. These diseases have a significant effect on caregivers </p>
                    <button> Learn more </button>
                </div>
                
                <div>
                    <h1> In-home Personal Care </h1>
                    <hr/>
                    <p> A dementia diagnosis requires a change from a person's usual mental functioning and a greater decline than one would expect due to aging. These diseases have a significant effect on caregivers </p>
                    <button> Learn more </button>
                </div>
                
                <div class="spacer"> 
                </div>
                
                <div class="spacer"> 
                </div>
                
            </div>
        </div>
    
    </Layout>
)

export default Services
