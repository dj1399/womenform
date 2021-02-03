import React from "react";
import "./StudentForm.css";
import student from "../Images/Ellipse 213.svg";
export default class StudentForm extends React.Component
{
    constructor (props) {
        super(props)
         this.state = {
             firstDiv:true,
             secondDiv:false,
         }}
         handleClickNext = (event) =>
         {
              event.preventDefault()
              this.setState({
                  firstDiv:false,
                  secondDiv:true
              })
            }
            
    render(){
        return(
            <div className="Student form_main" >
                 {
                   
                   this.state.firstDiv && <div className="Student_first">
                       <div className="row">
                           <div className="mobile">
                               <img src={student} className="Student_img"></img>
                               <div className="Student_head_mob">
                                Come Join Us
                                </div>
                            <div className="Student_head2_mob">
                                In Just 2 easy steps
                                </div>
                           </div>
                           
                           <div className="Student_pic col-md-6 align-middle" style={{padding:"0px"}}>
                            <img src={student} className="Student_img"></img>
                           </div>
                           <div className="col-md-6 no-gutters" style={{padding:"0px"}}>
                            <div className="Student_head1" id="desktop">
                                Come Join Us
                                </div>
                            <div className="Student_head2" id="desktop">
                                In Just 2 easy steps
                                </div>
                                
                                
                                <div className="form-row row1">
                                <input type="name" class="form-control col-md-4 col-sm-12 " id="Student_input" placeholder="First Name"/>
                                <input type="name" class="form-control col-md-4 col-sm-12" id="Student_input" placeholder="Middle Name"/>
                                <input type="name" class="form-control col-md-4 col-sm-12" id="Student_input" placeholder="Last Name"/>
                                </div>
                                <div className="form-row row2">
                                <textarea className="Student_add">Address</textarea>
                                </div>
                                <div className="form-row row1">
                                <input type="name" class="form-control col " id="Student_input" placeholder="Date of Birth"/>
                                <input type="name" class="form-control col" id="Student_input" placeholder="Blood Group"/>
                                <input type="name" class="form-control col" id="Student_input" placeholder="Gender"/>
                                </div>
                                <div className="form-row row1">
                                <input type="name" class="form-control col-md-4 col-sm-12 " id="Student_input" placeholder="Mobile Number 1"/>
                                <input type="name" class="form-control col-md-4 col-sm-12" id="Student_input" placeholder="Mobile Number 2"/>
                                <div  class="col" ></div>
                                </div>
                                <div className="form-row row3">
                                <input type="name" class="form-control col-md-8 " id="Student_input" placeholder="Email-id"/>
                                {/* <input type="name" class="form-control col" id="Student_input" placeholder="Mobile Number 2"/>
                                <div  class="col" ></div> */}
                                </div>
                                <button className="Student_next" onClick={this.handleClickNext}>
                                    NEXT
                                    </button>
                                    {/* <div className="page">
                                    <Pagination count={2} color="primary" onClick={this.changePage} />
                                    </div> */}
                           </div>
                           </div>
                   </div>
                //    </div>
                 }
                {
                          this.state.secondDiv && <div className="Student_first">
                               
                                <div className="row">
                                <div className="mobile">
                               <img src={student} className="Student_img"></img>
                               <div className="Student_head_mob">
                                Come Join Us
                                </div>
                            <div className="Student_head2_mob">
                                You are so Close
                                </div>
                           </div>
                           <div className="Student_pic col-md-6 align-middle" style={{padding:"0px"}}>
                            <img src={student} className="Student_img"></img>
                           </div>
                           <div className="col-md-6 no-gutters" style={{padding:"0px"}}>
                            <div className="Student_head1">
                                Come Join Us
                                </div>
                            <div className="Student_head2">
                                You are so close
                                </div>
                                <div className="form-row row1">
                                <input class="form-control col " id="Student_input" placeholder="College Name"/>
                                </div>
                                <div className="form-row row1">
                                <input type="name" class="form-control col " id="Student_input" placeholder="Year of Passing"/>
                                <input type="name" class="form-control col" id="Student_input" placeholder="Member Type"/>
                                <div  class="col" ></div>
                                </div>
                                <div className="form-row row4">
                                <div className="Student_cap" >Capcha</div>
                                </div>
                                <div className="form-row row4">
                                <div className ="Student_capcha" >RTX3090</div>
                                <input className ="Student_entercap" placeholder="Enter Capcha"/>

                                </div>
                                <button className ="Student_submit"> Submit</button>
                                    </div>
                                    </div>
                                    </div>
                                   
                                    
                 }
                 </div>
        )
                }
            }