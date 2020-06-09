import React from 'react'
import Layout from '../components/layout'
import "../styles/services.css"

const Services = () => (
    <Layout>
        <div id = "services-body"> 
            {/*<div className = "servics-intro">*/}
            {/*    <h1> Our Services</h1>*/}
            {/*    <h2>Specialization and Business Emphasis</h2>*/}
            {/*</div>*/}
            <div id = "services-header">
                <img src="https://cdn.pixabay.com/photo/2014/08/03/23/41/house-409451_960_720.jpg" alt="Services - Header"></img>
                <div>
                    <h1>Our Services</h1>
                    <div>
                        <h2>Specialization and Business Emphasis</h2>
                    </div>

                </div>
            </div>
            
            <div id = "services-blocks">
            <h3> General Services </h3>
                <div id="section1">
                
                    <div className="big-service-block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71yU2rkwTg_K3pD8MkW3UaCoBMy3LdNBEWv77pk0C2-PcRNzkBw&s" alt="Personal Care Icon"></img>
                        <div>
                            <h4> Personal Care </h4>
                            <ul>
                                <li>Mobility Assistance</li>
                                <li>Companionship</li>
                                <li>Monitoring</li>
                                <li>Bathing, Dressing & Grooming</li>
                                <li>Toileting and Incontinence Care</li>
                                <li>Medication Reminders & Care Coordination</li>
                                <li>Medical Team Liaison</li>
                                <li>Recreational and Community Activities</li>
                                <li>Planning, Preparing & Serving Nutritious</li>
                                <li> Meals</li>
                                <li>Shopping, Errands</li>
                                <li>Tell us other ways we can help!</li>
                            </ul>  
                        </div>
                    </div>
                    
                    <div className="big-service-block">
                        <img src="https://cdn.pixabay.com/photo/2014/04/03/00/41/house-309113_960_720.png" alt="Home Care Icon"></img>
                        <div>
                            <h4> Care for the Home </h4>
                            <ul>
                                <li>Laundry</li>
                                <li>Linen changing</li>
                                <li>Dishwashing</li>
                                <li>Light Housekeeping  & Home Management</li>
                                <li>Errands & shopping</li>
                                <li>Cooking</li>
                                <li>Meal planning</li>
                                <li>Shopping</li>
                                <li>Chores</li>
                                <li>Sweeping & vacuuming</li>
                                <li>Pet care</li>
                            </ul>  
                        </div>
                    </div>
                </div>
                
                
                <h3>Specialty Services</h3>
                <div id="section2">
                    
                    <div>
                        <div>
                            <h4> Specialty Care for Conditions  </h4>
                            <p> 
                                Caregivers are educated in the characteristics of specific conditions and how                                 each can be supported in a manner that promotes quality of life and dignity.
                            </p>
                            
                        </div>
                        
                        <div>
                            <h4> Rehabilitative Care Support & Disabilities </h4>
                            <p>
                                We provide personal post-hospital support and services for adults who are recovering from a serious injury or
                                illness, have chronic conditions or progressive diseases, physical limitations, or cognitive
                                disabilities.
                            </p>
                        </div>
                        
                        <div>
                            <h4> Private Care </h4>
                            <p> 
                                We accept private pay clients and cater to client needs. We will work with Long Term Care Insurance Plans 
                                for client claim reimbursement.   At this time we are unable to accept public pay clients, but hope to 
                                expand our services to include a wide range of public pay options in the future.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div id = "section4">
                    <p>
                            <b>Alzheimer’s</b> assistance supports clients and families along disease                                    progression
                            </p>
                            <p>
                            <b>Dementia</b> care is attentive and promotes communication and memory support
                            </p>
                            <p>
                            <b>Parkinson's</b> support involves clients to discern the best ways to promote                              safety and self-esteem
                            </p>
                            <p>
                            <b>Stroke</b> care incorporates the advice of the client’s medical professionals                             to empower and support the client.
                            </p>
            </div>

                  <h3>Pricing</h3>
                <div id="section3">
                    
                    <div id="pricing-panel">
                        <h4>Hourly Rates</h4>
                        <p> Charges for private-pay home care service are assessed based on the service needs of the client, the amount of time scheduled, and whether the care is provided in the evening, night, during the weekend, or on a major holiday.  The minimum time spent per visit is three hours.  </p>
                        {/*<table>*/}
                        {/*    <tbody> */}
                        {/*    <tr>*/}
                        {/*    <th className="table-category table-hours" bgcolor="#0682c4">Hours</th>*/}
                        {/*    <th className="table-category table-inner" bgcolor="#1c3a6b">Weekdays</th>*/}
                        {/*    <th className="table-category table-inner" bgcolor="#1c3a6b">Weekends</th>*/}
                        {/*  </tr>*/}
                        {/*  <tr>*/}
                        {/*    <td className="table-hours" bgcolor="white">1 Hour</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">43.00/hr</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">43.00/hr</td>*/}
                        {/*  </tr>*/}
                        {/*  <tr>*/}
                        {/*    <td className="table-hours"bgcolor="white">2 Hours</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">34.00/hr</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">34.00/hr</td>*/}
                        {/*  </tr>*/}
                        {/*  <tr>*/}
                        {/*    <td className="table-hours"bgcolor="white">3 or More Hours</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">29.50/hr</td>*/}
                        {/*    <td className="table-inner" bgcolor="#FAFAFA">34.00/hr</td>*/}
                        {/*  </tr>*/}

                        {/*    </tbody>*/}
                        {/*</table>*/}
                        
                        {/*<ul>*/}
                        {/*    <li>Weekdays: $29.50 per hour for shifts of 3 hours or more, $34 per hour for 2 hour shifts, and $43 for visits of one hour or less.</li>*/}
                        {/*    <li>Weekends: $34 per hour for shifts of 2 hours or more, $43 for visits of one hour or less</li>*/}
                        {/*    <li>After one hour has elapsed, shifts are billed in quarter-hour increments.</li>*/}
                        {/*    <li>Clients receiving round-the-clock care will be billed a discounted flat rate of $650 per 24 hours.</li>*/}
                        {/*    <li>We charge time and one half for services provided on the following holidays: New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving Day, and Christmas Day.</li>*/}
                        {/*    <li>Clients are charged for mileage when services for the client include client transportation (e.g. errands, shopping). Mileage is charged at the current IRS standard mileage rate.</li>*/}
                        {/*</ul>  */}
                    </div>
                    

                    {/*<div id="cancellation-panel">*/}
                    {/*        <h4>Cancellations and Changes</h4>*/}
                    {/*        <p> */}
                    {/*            We ask clients to kindly provide as much notice as possible when cancelling services.  */}
                    {/*            If a caregiver is en-route to, or arrives for a scheduled shift and the client declines */}
                    {/*            service, the agency will assess a late cancellation fee of $43. If untimely schedule */}
                    {/*            changes or cancellations are frequent, We may be forced to decline future services or to */}
                    {/*            impose the late cancellation fee if continued services are desired.*/}
                    {/*        </p>*/}
                    {/*</div>*/}
                    
                </div>
            </div>
        </div>
    
    </Layout>
)

export default Services
