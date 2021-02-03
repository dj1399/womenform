import React from "react";
import img from "../Images/Rectangle 571.svg";
import "./WomenForm.css";
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
    render(){
        return(
            <div className="WomenForm form_main" >
                 {
                   
                   this.state.firstPage && <div className="first">
            <div className="row">
                <div className="col-md-6" >
                <div className="WomenForm_heading">Come Join Us</div>
                         <div className="WomenForm_head">In Just 2 Steps</div>
                 <form>
                     <div className="row" style={{marginLeft:"5px"}}> 
                         <div className="form-row row1">
                     <div className="form-group col-md-4 col-sm-12">
                     <input type="name" class="form-control " id="WomenForm_input" placeholder="First Name"/>
                     </div>
                     <div className="form-group col-md-4 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Middle Name"/>
                     </div>
                     <div className="form-group col-md-4 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Last Name"/>
                     </div>
                     <div className="form-group col-md-4 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Date of Birth"/>
                     </div>
                     </div>
                     <div className="form-group col-md-4 col-sm-12">
                     <select class="WomenForm_select form-select" aria-label="WomenForm_input">
                     <option selected>Marital Status</option>
                     <option value="1">Single</option>
                     <option value="2">Married</option>
                    </select>
                     </div>
                     <div className="form-group col-md-4 col-sm-12">
                     <select className ="WomenForm_select form-select" aria-label="WomenForm_input">
                     <option selected>Blood Group</option>
                     <option value="1">A+</option>
                     <option value="2">A-</option>
                     <option value="1">B+</option>
                     <option value="2">B-</option>
                     <option value="1">O+</option>
                     <option value="2">O-</option>
                    </select>
                     </div>
                     <div className="form-group col-md-12 col-sm-12">
                     <textarea type="text area" class="Women_form_add form-control"  placeholder="Address"/>
                     </div>
                     <div className="form-row row1">
                     <div className="form-group inline-form">
                     <input type="name" className="WomenForm_em form-control" id="WomenForm_input" placeholder="Email-id"/>
                     </div>
                     <div className="form-group inline-form">
                     <input type="name" className="WomenForm_em form-control" id="WomenForm_input" placeholder="Confirm Email-id"/>
                     </div>
                     </div>
                     <div className="form-row row1">
                     <div className="form-group ">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Mobile Number"/>
                     </div>
                     <div className="form-group col-md-6 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Mobile Number 2"/>
                     </div>
                     </div>
                     <div className="form-row row1">
                     <div className="form-group col-md-6 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="City"/>
                     </div>
                     <div className="form-group col-md-6 col-sm-12">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="State"/>
                     </div>
                     </div>
                     <button className="WomenForm_next" onClick={this.handleClickNext}> Next</button>
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
                <div className="col-md-6">
                <div className="WomenForm_heading">Come Join Us</div>
                         <div className="WomenForm_head">You are so close</div>
                 <form>
                     <div className="form-row">
                         
                     <div className="form-group col-md-4">
                     <select class="WomenForm_drop form-select" aria-label="WomenForm_input">
                     <option selected>Registering as</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     <div className="form-group col-md-4">
                     <select class="WomenForm_drop form-select" aria-label="WomenForm_input">
                     <option selected>Qualification</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     </div>
                     <div className="row">
                     <div className="WomenForm_member">Expected Branch for Membership</div>
                     </div>
                     <div className="row">
                     <div className="form-group col-md-4">
                     <select class="WomenForm_select form-select" aria-label="WomenForm_input">
                     <option selected>Select District</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     <div className="form-group col-md-4">
                     <select class="WomenForm_select form-select" aria-label="WomenForm_input">
                     <option selected>Select Branch</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                    </select>
                     </div>
                     </div>
                     <div className="col-md-12">
                     <div className="WomenForm_member" style={{textAlign:"left"}}>Upload Documents</div>
                     </div>
                     <div className="form-row">
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Passport Photo"/>
                     </div>
                     <div className="form-group col-md-4">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="MCIM Registration Certificate"/>
                     </div>
                     </div>
                     <div className="form-group ">
                     <input type="name" class="form-control" id="WomenForm_input" placeholder="Degree Certificate"/>
                     </div>
                     {/* <div className="WomenForm_cap">Capcha</div> */}
                     <div className="WomenForm_capcha">RTX3090</div>
                     <div className="form-group ">
                     <input type="text" class="form-control" id="WomenForm_input" placeholder="Enter Capcha"/>
                     </div>
                     <button className="WomenForm_reg" > REGISTER</button>
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