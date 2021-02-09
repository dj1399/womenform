import React from "react";
// import img from "../Images/Rectangle 571.svg";
import "./WomenForm.css";
import arrow from "../Images/arrow.svg";
import page1 from "../Images/page1.png";
import page2 from "../Images/page1.png";
import { sendWomenForumForm } from "../DataService/WomenForm";
export default class WomenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: true,
      secondPage: false,
    };
  }
  handleClickNext = (event) => {
    event.preventDefault();
    this.setState({
      firstPage: false,
      secondPage: true,
    });
  };
  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      firstPage: true,
      secondPage: false,
    });
  };
  render() {
    return (
      <div className="WomenForm form_main">
        {this.state.firstPage && (
          <div className="first">
            <div className="row p-0 m-0">
              <div className="col-md-6 col-12">
                <div className="WomenForm_heading">Come Join Us</div>
                <div className="WomenForm_head">In Just 2 Steps</div>
                <form>
                  <div className="row" style={{ marginLeft: "5px" }}>
                    <div className="Women_form-row row1">
                      <div className="col-md-4 col-12 no-gutters ">
                        <input
                          type="text"
                          required
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                          class="form-control "
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters">
                        <input
                          type="text"
                          class="form-control "
                          id="middleName"
                          name="middleName"
                          required
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                          placeholder="Middle Name"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters">
                        <input
                          type="text"
                          class="form-control "
                          id="lastName"
                          name="lastName"
                          required
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-row row1 mt-md-4">
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <input
                          type="date"
                          class="form-control "
                          id="DateOfBirth"
                          required
                          pattern="[A-Za-z_ ]{1,32}"
                          title="*ENTER CHARACTER VALUES ONLY"
                          placeholder="Date of Birth"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <select
                          class="form-control "
                          id="maritalStatus"
                          name="maritalStatus"
                          required
                          placeholder="Marital Status"
                        >
                          <option disabled selected>
                            Marital Status
                          </option>
                          <option>Single</option>
                          <option>Married</option>
                        </select>
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <select
                          class="form-control "
                          id="bloodGroup"
                          required
                          name="bloodGroup"
                          placeholder="Blood Group"
                        >
                          <option disabled selected>
                            Blood Group
                          </option>
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

                    <div className="form-row row mt-md-4">
                      <div className="col-12">
                        <textarea
                          type="text"
                          required
                          id="address"
                          name="address"
                          className="Student_add col-12 "
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="form-row row1 mt-md-4">
                      <div className="col-md-6 col-sm-12 no-gutters ">
                        <input
                          type="email"
                          className="WomenForm_em form-control"
                          id="email"
                          name="email"
                          required
                          placeholder="Email-id"
                        />
                      </div>
                      <div className="col-md-6 col-sm-12 no-gutters ">
                        <input
                          type="email"
                          className="WomenForm_em form-control"
                          required
                          id="confirmemail"
                          name="confirmemail"
                          placeholder="Confirm Email-id"
                        />
                      </div>
                    </div>
                    <div className="form-row row1 mt-md-4">
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <input
                          class="form-control"
                          id="contactNo"
                          pattern="[1-9]{1}[0-9]{9}"
                          title="Number should be of 10 digits only"
                          type="tel"
                          name="contactNo"
                          required
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <input
                          pattern="[1-9]{1}[0-9]{9}"
                          title="Number should be of 10 digits only"
                          type="tel"
                          class="form-control"
                          id="alternateNo"
                          required
                          name="alternateNo"
                          placeholder="Mobile Number 2"
                        />
                      </div>
                    </div>
                    <div className="form-row row1 mt-md-4">
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <input
                          type="text"
                          class="form-control"
                          id="city"
                          name="city"
                          required
                          placeholder="City"
                        />
                      </div>
                      <div className="col-md-4 col-sm-12 no-gutters ">
                        <input
                          type="text"
                          class="form-control"
                          id="state"
                          required
                          name="state"
                          placeholder="State"
                        />
                      </div>
                    </div>
                    <div className="mt-md-5 form-row d-flex justify-content-center">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className=""
                          onClick={this.handleClickNext}
                        >
                          NEXT
                        </button>
                      </div>
                    </div>
                    <div className="row mt-md-4  form-row d-flex justify-content-end ">
                      <img
                        src={page1}
                        className="Women_page1Img"
                        alt="Page 1"
                      ></img>
                    </div>
                  </div>
                </form>
              </div>
              <div className="WomenForm_img col-md-6"></div>
            </div>
          </div>
        )}
        {this.state.secondPage && (
          <div className="second">
            <div className="row">
              <div className="col-md-6 ">
                <div className="WomenForm_heading">Come Join Us</div>
                <div className="WomenForm_head">You are so close</div>
                <form>
                  <div className="form-row row1">
                    <div className="col-md-5">
                      <select
                        className="WomenForm_drop form-select"
                        id="Student_input"
                        aria-label="WomenForm_input"
                      >
                        <option selected>Registering as</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className=" col-md-5">
                      <select
                        class=" WomenForm_drop form-select"
                        id="Student_input"
                        aria-label="WomenForm_input"
                      >
                        <option selected>Qualification</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="WomenForm_member">
                      Expected Branch for Membership
                    </div>
                  </div>
                  <div className="form-row row1">
                    <div className=" col-md-4 col-sm-12">
                      <select
                        class="WomenForm_select form-select"
                        id="Student_input"
                        aria-label="WomenForm_input"
                      >
                        <option selected>Select District</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className=" col-md-4 col-sm-12">
                      <select
                        class="WomenForm_select form-select"
                        id="Student_input"
                        aria-label="WomenForm_input"
                      >
                        <option selected>Select Branch</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="WomenForm_member"
                      style={{ textAlign: "left" }}
                    >
                      Upload Documents
                    </div>
                  </div>
                  <div className="form-row row1">
                    <div className=" col-md-5 col-sm-12">
                      <input
                        type="name"
                        class="form-control"
                        id="Student_input"
                        id="Student_input"
                        placeholder="Passport Photo"
                      />
                    </div>
                    <div className=" col-md-5 col-sm-12">
                      <input
                        type="name"
                        class="form-control"
                        id="Student_input"
                        placeholder="MCIM Registration Certificate"
                      />
                    </div>

                    <div className="col-md-5 col-sm-12 ">
                      <input
                        type="name"
                        class="Student_deg form-control"
                        id="Student_input"
                        placeholder="Degree Certificate"
                      />
                    </div>
                  </div>
                  {/* <div className="WomenForm_cap">Capcha</div> */}
                  <div className="form-row row4">
                    <div className="col-md-5 col-sm-12">
                      <div className="col Student_capcha">RTX3090</div>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <input
                        className="form-control col "
                        id="Student_input"
                        placeholder="Enter Capcha"
                      />
                    </div>
                    <div className=" col"></div>
                  </div>
                  <div className="row5 row d-flex align-content-center">
                    {/* <div className="col-md-6"> */}
                    <a onClick={this.handleClick} className="Student_back">
                      <span>
                        <img src={arrow}></img>{" "}
                      </span>
                      Back
                    </a>
                    {/* </div>
                                <div className="col-md-6"> */}
                    <button className="Student_submit"> Submit</button>
                    <img src={page2} className="Student_page2"></img>
                    {/* </div> */}
                  </div>
                  {/* </div> */}
                </form>
              </div>
              <div className="WomenForm_img col-md-6"></div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
