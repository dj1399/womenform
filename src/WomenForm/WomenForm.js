import React from "react";
// import img from "../Images/Rectangle 571.svg";
import "./WomenForm.css";
import "../StudentForm/StudentForm.css";
import arrow from "../Images/arrow.svg" ;
import page1 from "../Images/page1.png";
import page2 from "../Images/page1.png";
export default class WomenForm extends React.Component
{   
    constructor (props) {
        super(props)
         this.state = {
             firstPage:true,
             secondPage:false,
         }}
         handleClickNext = (event) =>
         {
              event.preventDefault()
              this.setState({
                  firstPage:false,
                  secondPage:true
              })
            }
            handleClick = (event) =>
            {
                 event.preventDefault()
                 this.setState({
                     firstPage:true,
                     secondPage:false
                 })
               }
    render(){
        return(
            <div className="WomenForm form_main" >
                 {
                   
                   this.state.firstPage && <div className="first">
            <div className="row">
                <div className="col-md-6 col-sm-12" >
                <div className="WomenForm_heading">Come Join Us</div>
                         <div className="WomenForm_head">In Just 2 Steps</div>
                 <form>
                     <div className="row" style={{marginLeft:"5px"}}> 
                     <div className="form-row row1 ">
                                <div className="col-md-4 col-sm-12 no-gutters ">
                                <input type="text" class="form-control " id="Student_input" placeholder="First Name" />
                                </div>
                                <div className="col-md-4 col-sm-12 no-gutters">
                                <input type="text" class="form-control " id="Student_input" placeholder="Middle Name" />
                                </div>
                                <div className="col-md-4 col-sm-12 no-gutters">
                                <input type="text" class="form-control " id="Student_input" placeholder="Last Name" />
                                </div>
                                </div>
                     <div className="form-row row1">
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <input type="date" class="form-control " id="Student_input" placeholder="Date of Birth"/>
                     </div>
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <select  class="form-control " id="Student_input" placeholder="Marital Status">
                                    <option disabled selected>Marital Status</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                    </select>
                        </div>
                        <div className="col-md-4 col-sm-12 no-gutters ">           
                     <select  class="form-control " id="Student_input" placeholder="Blood Group">
                                    <option disabled selected>Blood Group</option>
                                    <option>A+</option>
                                    <option>B+</option>
                                    <option>O+</option>
                                    <option>A-</option>
                                    <option>B-</option>
                                    <option>O-</option>
                                    <option>B+</option>
                                    <option>B+</option>
                                    </select>
                                    </div>
                                   </div>
                                
                     
                    
                     
                     <div className="form-row ">
                     
                     <textarea type="text area" className="Student_add "  placeholder="Address"/>
                     </div>
                     <div className="form-row row1">
                     <div className="col-md-6 col-sm-12 no-gutters ">
                     <input type="email" className="WomenForm_em form-control" id="Student_input" placeholder="Email-id"/>
                   
                     </div>
                     <div className="col-md-6 col-sm-12 no-gutters ">
                    
                     <input type="email" className="WomenForm_em form-control" id="Student_input" placeholder="Confirm Email-id"/>
                     
                     </div>
                     </div>
                     <div className="form-row row1">
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <input type="number" class="form-control" id="Student_input" placeholder="Mobile Number"/>
                     </div>
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <input type="number" class="form-control" id="Student_input" placeholder="Mobile Number 2"/>
                     </div>
                     </div>
                     <div className="form-row row1">
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <input type="text" class="form-control" id="Student_input" placeholder="City"/>
                     </div>
                     <div className="col-md-4 col-sm-12 no-gutters ">
                     <input type="text" class="form-control" id="Student_input" placeholder="State"/>
                     </div>
                     </div>
                     <div>
                          <div className="col-md-12 align-items-center">
                                <button className="Student_next" onClick={this.handleClickNext}>
                                    NEXT
                                    </button>
                                    <img src={page1} className="Student_page1"></img>
                                    </div>
                                    </div>
                     </div>
                 </form>
                </div>
                <div className="WomenForm_img col-md-6">
                 
                </div>
            </div>
            </div>
               }
              {
                   
                   this.state.secondPage && <div className="second">
                       <div className="row">
                <div className="col-md-6 ">
                <div className="WomenForm_heading">Come Join Us</div>
                         <div className="WomenForm_head">You are so close</div>
                 <form>
                     <div className="form-row row1">
                         
                     <div className="col-md-5">
                     <select className="WomenForm_drop form-select" id="Student_input" aria-label="WomenForm_input">
                     <option selected>Registering as</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     <div className=" col-md-5">
                     <select class=" WomenForm_drop form-select" id="Student_input" aria-label="WomenForm_input">
                     <option selected>Qualification</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     </div>
                     <div className="row">
                     <div className="WomenForm_member">Expected Branch for Membership</div>
                     </div>
                     <div className="form-row row1">
                     <div className=" col-md-4 col-sm-12">
                     <select class="WomenForm_select form-select" id="Student_input" aria-label="WomenForm_input">
                     <option selected>Select District</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     <div className=" col-md-4 col-sm-12">
                     <select class="WomenForm_select form-select" id="Student_input" aria-label="WomenForm_input">
                     <option selected>Select Branch</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     </div>
                     <div className="col-md-12">
                     <div className="WomenForm_member" style={{textAlign:"left"}}>Upload Documents</div>
                     </div>
                     <div className="form-row row1">
                     <div className=" col-md-5 col-sm-12">
                     <input type="name" class="form-control" id="Student_input"id="Student_input" placeholder="Passport Photo"/>
                     </div>
                     <div className=" col-md-5 col-sm-12">
                     <input type="name" class="form-control" id="Student_input" placeholder="MCIM Registration Certificate"/>
                     </div>
                     
                     <div className="col-md-5 col-sm-12 ">
                     <input type="name" class="Student_deg form-control" id="Student_input" placeholder="Degree Certificate"/>
                     </div>
                     </div>
                     {/* <div className="WomenForm_cap">Capcha</div> */}
                     <div className="form-row row4">
                              <div className="col-md-5 col-sm-12">
                                <div className ="col Student_capcha" >RTX3090</div>
                                </div>
                                <div className="col-md-5 col-sm-12">
                                <input className ="form-control col " id="Student_input" placeholder="Enter Capcha"/>
                                </div>
                                <div className=" col"></div>

                                </div>
                                <div className="row5 row d-flex align-content-center">
                                {/* <div className="col-md-6"> */}
                                <a  onClick={this.handleClick} className="Student_back"  ><span><img src={arrow}></img> </span>Back
                                </a>
                                {/* </div>
                                <div className="col-md-6"> */}
                                <button className ="Student_submit"> Submit</button>
                                <img src={page2} className="Student_page2"></img>
                                {/* </div> */}
                                </div>
                     {/* </div> */}
                 </form>
                </div>
                <div className="WomenForm_img col-md-6">
                 
                </div>
            </div>
            </div>
                      
              }
    </div>
        )
    }
}