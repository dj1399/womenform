import React, { Component, Fragment } from "react";
import "./WomenForumForm.css";
import arrow from "../Images/arrow.svg";
import Recaptcha from "react-google-invisible-recaptcha";
import page1 from "../Images/page1.png";
import page2 from "../Images/page2.png";
import { MdFileUpload } from "react-icons/md";
import { sendWomenForumForm } from "../DataService/WomenForm";
export default class WomenForumForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: true,
      secondPage: false,
      firstName: "",
      middleName: "",
      lastName: "",
      DateOfBirth: "",
      maritalStatus: "",
      bloodGroup: "",
      address: "",
      email: "",
      contactNo: "",
      alternateNo: "",
      city: "",
      state: "",
      registratingAs: "",
      qualification: "",
      membershipDistrict: "",
      membershipBranch: "",
      passportPhoto: null,
      MCIMRegistration: null,
      degreeCertificate: null,
      degreeCertificateName: "",
      MCIMRegistrationName: "",
      passportPhotoName: "",
    };
  }
  fileUploadDegreeCertificate = () => {
    document.getElementById("degreeCertificate").click();
    document.getElementById("degreeCertificate").onchange = () => {
      this.setState({
        degreeCertificate: document.getElementById("degreeCertificate")
          .files[0],
        degreeCertificateName: document.getElementById("degreeCertificate")
          .files[0].name,
      });
    };
  };
  fileUploadMCIMRegCertificate = () => {
    document.getElementById("MCIMRegCertificate").click();
    document.getElementById("MCIMRegCertificate").onchange = () => {
      this.setState({
        MCIMRegistration: document.getElementById("MCIMRegCertificate")
          .files[0],
        MCIMRegistrationName: document.getElementById("MCIMRegCertificate")
          .files[0].name,
      });
    };
  };
  fileUploadpassportPhoto = () => {
    document.getElementById("passportPhoto").click();
    document.getElementById("passportPhoto").onchange = () => {
      this.setState({
        passportPhoto: document.getElementById("passportPhoto").files[0],
        passportPhotoName: document.getElementById("passportPhoto").files[0]
          .name,
      });
    };
  };
  handleClickNext = (event) => {
    event.preventDefault();
    this.setState({
      firstPage: false,
      secondPage: true,
    });
  };
  handleClickBack = (event) => {
    event.preventDefault();
    this.setState({
      firstPage: true,
      secondPage: false,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // this.recaptcha.execute();
    console.log(this.state);
    const data = new FormData();
    data.append("firstName", this.state.firstName);
    data.append("middleName", this.state.middleName);
    data.append("lastName", this.state.lastName);
    data.append("DateOfBirth", this.state.DateOfBirth);
    data.append("maritalStatus", this.state.maritalStatus);
    data.append("bloodGroup", this.state.bloodGroup);
    data.append("address", this.state.address);
    data.append("email", this.state.email);
    data.append("contactNo", this.state.contactNo);
    data.append("alternateNo", this.state.alternateNo);
    data.append("city", this.state.city);
    data.append("state", this.state.state);
    data.append("registratingAs", this.state.registratingAs);
    data.append("qualification", this.state.qualification);
    data.append("membershipDistrict", this.state.membershipDistrict);
    data.append("membershipBranch", this.state.membershipBranch);
    data.append("passportPhoto", this.state.passportPhoto);
    data.append("MCIMRegistration", this.state.MCIMRegistration);
    data.append("degreeCertificate", this.state.degreeCertificate);

    sendWomenForumForm(data)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("Success " + response.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Error : " + err);
        console.log(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onResolved = () => {
    this.setState({ messageSent: true });
    // console.log(this.state);
  };
  render() {
    return (
      <div className="Women_mainDiv ">
        <div className="row p-0 m-0">
          {this.state.firstPage && (
            <Fragment>
              <div className="col-md-6 col-12 p-0">
                <div className="Women_Col2Image WomenForm_MobileView"></div>
                <div className="left WomenForm_headCol1">
                  <p className="WomenForm_headingCol1">Come Join Us</p>
                  <p className="WomenForm_headSubCol1">In Just 2 Steps</p>
                </div>
                <form className=" WomenForm_Form">
                  <div className="row">
                    <div className="form-group  col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control ContactForm_input "
                        // id="Form_input1"
                        placeholder="First Name"
                        required
                        pattern="[A-Za-z_ ]{1,32}"
                        title="*ENTER CHARACTER VALUES ONLY"
                        name="firstName"
                        onChange={this.handleChange}
                        id="firstName"
                        style={{ color: "#390969" }}
                      />
                    </div>
                    <div className="form-group  col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control ContactForm_input "
                        // id="Form_input1"
                        placeholder="Middle Name"
                        required
                        pattern="[A-Za-z_ ]{1,32}"
                        title="*ENTER CHARACTER VALUES ONLY"
                        name="middleName"
                        onChange={this.handleChange}
                        id="middleName"
                        style={{ color: "#390969" }}
                      />
                    </div>
                    <div className="form-group  col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control ContactForm_input"
                        // id="Form_input2"
                        required
                        onChange={this.handleChange}
                        name="lastName"
                        id="lastName"
                        title="*ENTER CHARACTER VALUES ONLY"
                        pattern="[A-Za-z_ ]{1,32}"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="form-group Women_form_row2  col-md-4 col-12">
                      <input
                        type="date"
                        className="form-control "
                        id="DateOfBirth"
                        name="DateOfBirth"
                        onChange={this.handleChange}
                        required
                        placeholder="Date of Birth"
                      />
                    </div>
                    <div className="form-group Women_form_row2 col-md-4 col-12">
                      <select
                        className="form-control "
                        id="maritalStatus"
                        name="maritalStatus"
                        onChange={this.handleChange}
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
                    <div className="form-group Women_form_row2  col-md-4 col-12">
                      <select
                        className="form-control "
                        id="bloodGroup"
                        onChange={this.handleChange}
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
                  <div className="col-12 p-0">
                    <div className="form-group ">
                      <textarea
                        className="form-control ContactForm_input col-12"
                        id="address"
                        onChange={this.handleChange}
                        name="address"
                        placeholder="Address"
                        rows="2"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group  col-md-6 col-12">
                      <input
                        type="email"
                        className="form-control ContactForm_input"
                        // id="Form_input2"
                        required
                        onChange={this.handleChange}
                        name="email"
                        id="email"
                        title="*ENTER CHARACTER VALUES ONLY"
                        pattern="[A-Za-z_ ]{1,32}"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group  col-md-6 col-12">
                      <input
                        type="email"
                        className="form-control ContactForm_input"
                        // id="Form_input2"
                        required
                        onChange={this.handleChange}
                        name="ConfirmEmail"
                        id="ConfirmEmail"
                        title="*ENTER CHARACTER VALUES ONLY"
                        pattern="[A-Za-z_ ]{1,32}"
                        placeholder="Confirm Email"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group  col-md-4 col-12">
                      <input
                        id="contactNo"
                        pattern="[1-9]{1}[0-9]{9}"
                        title="Number should be of 10 digits only"
                        type="tel"
                        name="contactNo"
                        className="form-control ContactForm_input"
                        // id="Form_input2"
                        required
                        onChange={this.handleChange}
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group  col-md-4 col-12">
                      <input
                        id="alternateNo"
                        pattern="[1-9]{1}[0-9]{9}"
                        title="Number should be of 10 digits only"
                        type="tel"
                        name="alternateNo"
                        className="form-control ContactForm_input"
                        // id="Form_input2"
                        required
                        onChange={this.handleChange}
                        placeholder="Alternate Mobile Number"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group  col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        onChange={this.handleChange}
                        required
                        placeholder="City"
                      />
                    </div>
                    <div className="form-group  col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        onChange={this.handleChange}
                        required
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <button
                      type="button"
                      className="Women_button_nextbtn"
                      onClick={this.handleClickNext}
                    >
                      NEXT
                    </button>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <img
                      src={page1}
                      className="Women_Page1Image"
                      alt="Page 1"
                    ></img>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-12 Women_Col2Image WomenForm_DesktopView"></div>
            </Fragment>
          )}
          {this.state.secondPage && (
            <Fragment>
              <div className="col-md-6 col-12 p-0">
                <div className="Women_Col2Image WomenForm_MobileView"></div>

                <div className="left WomenForm_headCol1">
                  <p className="WomenForm_headingCol1">Come Join Us</p>
                  <p className="WomenForm_headSubCol1">Your are so close</p>
                </div>
                <form className=" WomenForm_Form">
                  <div className="row">
                    <div className="form-group col-md-4 col-12">
                      <select
                        required
                        className="form-control"
                        id="registratingAs"
                        name="registratingAs"
                        onChange={this.handleChange}
                        aria-label="WomenForm_input"
                      >
                        <option selected disabled value="">
                          Registering as
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className="form-group  col-md-4 col-12">
                      <select
                        className="form-control"
                        id="qualification"
                        required
                        onChange={this.handleChange}
                        name="qualification"
                        aria-label="WomenForm_input"
                      >
                        <option selected disabled value="">
                          Qualification
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>
                  <p className="Women_Page2_heading1">
                    Expected Branch for Membership
                  </p>
                  <div className="row w-100 ">
                    <div className="form-group Women_form_row2  col-md-4 col-12">
                      <select
                        className="form-control"
                        id="membershipDistrict"
                        onChange={this.handleChange}
                        required
                        name="membershipDistrict"
                        aria-label="WomenForm_input"
                      >
                        <option selected disabled value="">
                          Select District
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div className="form-group Women_form_row2 col-md-4 col-12">
                      <select
                        className="form-control "
                        id="membershipBranch"
                        onChange={this.handleChange}
                        name="membershipBranch"
                        required
                        placeholder="Marital Status"
                      >
                        <option disabled value="" selected>
                          Select Branch
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                  </div>

                  <p className="Women_Page2_heading2">Upload Documents</p>
                  <div className="row">
                    <div className="form-group col-md-5 col-12">
                      <input id="passportPhoto" type="file" hidden />
                      <button
                        onClick={this.fileUploadpassportPhoto}
                        className="btn WomenForm_uploadform_btno Women_MCIM_btn"
                        type="button"
                        // onClick={this.fileUploadmarriageCertificate}
                      >
                        {" "}
                        Passport Photo
                        {/*  <i className="fa fa-upload ml-md-2 ml-lg-5 ml-5"></i> */}
                        <MdFileUpload
                          className="ml-md-2 ml-lg-5 ml-5"
                          size={20}
                        />
                      </button>
                      {/* {this.state.marriageCertificate != null &&
                            this.state.marriageCertificateName
                        } */}
                      <small>{this.state.passportPhotoName}</small>
                    </div>
                    <div className="form-group  col-md-7 col-12">
                      <input id="MCIMRegCertificate" type="file" hidden />
                      <button
                        className="btn WomenForm_uploadform_btno Women_MCIM_btn"
                        onClick={this.fileUploadMCIMRegCertificate}
                        type="button"
                        // onClick={this.fileUploadmarriageCertificate}
                      >
                        {" "}
                        MCIM Registration Certificate
                        {/*  <i className="fa fa-upload ml-md-2 ml-lg-2 ml-5"></i> */}
                        <MdFileUpload
                          className="ml-md-2 ml-lg-5 ml-5"
                          size={20}
                        />
                      </button>
                      <small>{this.state.MCIMRegistrationName}</small>

                      {/* {this.state.marriageCertificate != null &&
                          this.state.marriageCertificateName
                      } */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group  col-md-5 col-12">
                      <input id="degreeCertificate" type="file" hidden />
                      <button
                        onClick={this.fileUploadDegreeCertificate}
                        className="btn WomenForm_uploadform_btno Women_MCIM_btn"
                        type="button"
                        // onClick={this.fileUploadmarriageCertificate}
                      >
                        {" "}
                        Degree Certificate
                        {/*  <i className="fa fa-upload ml-md-2 ml-lg-3 ml-5"></i> */}
                        <MdFileUpload
                          className="ml-md-2 ml-lg-5 ml-5"
                          size={20}
                        />
                      </button>
                      <small>{this.state.degreeCertificateName}</small>

                      {/* {this.state.marriageCertificate != null &&
                      this.state.marriageCertificateName
                  } */}
                    </div>
                  </div>
                  <div className="row align-items-center mt-md-5">
                    <div className="col-md-3 col-12 WomenForum_BackBtn">
                      <p
                        onClick={this.handleClickBack}
                        className="WomenForum_BackBtn"
                      >
                        <span>
                          <img src={arrow} alt="back arrow"></img>{" "}
                        </span>
                        Back
                      </p>
                    </div>
                    <div className="col-md-5 col-12 d-flex justify-content-center">
                      <button
                        type="button"
                        className="Women_button_Submitbtn"
                        onClick={this.handleSubmit}
                      >
                        REGISTER
                      </button>
                      {/*  <Recaptcha
                        ref={(ref) => (this.recaptcha = ref)}
                        sitekey="6Lfj_U0aAAAAAKu_W5IjQrRS2BHjRypOQCUT74qU"
                        onResolved={this.onResolved}
                      /> */}
                    </div>
                  </div>
                  <div className="row d-flex justify-content-end">
                    <img
                      src={page2}
                      className="Women_Page1Image"
                      alt="Page 2"
                    ></img>
                  </div>
                </form>
              </div>
              <div className="col-md-6 col-12 Women_Col2Image WomenForm_DesktopView"></div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
