import axios from "axios";
//https://nimaaaa-project.herokuapp.com/contactUs/602126a5db562c001541a9a6
export const sendWomenForumForm = async (data) => {
  console.log(data);
  return await axios
    .post("https://nimaaaa-project.herokuapp.com/womenForum", data)
    .then((response) => {
      console.log(response);

      return response;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

/*
firstName : {
        type : String
    },
    middleName : {
        type : String
    },
    lastName : {
        type :String
    },
    DateOfBirth: {
        type: String
    },
    maritalStatus : {
        type : String
    },
    bloodGroup : {
        type : String
    },
    address : {
        type : String
    },
    email : {
        type : String,
        unique : true,
        validate : [validator.isEmail, 'Please provide valid email']
    },
    contactNo : {
        type : Number,
        unique : true
    },
    alternateNo : {
        type : Number,
        unique : true
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    registratingAs : {
        type : String
    },
    qualification : {
        type : String
    },
    membershipDistrict : {
        type : String
    },
    membershipBranch : {
        type : String
    },
    passportPhoto : {
        type : String
    },
    MCIMRegistration : {
        type : String
    },
    degreeCertificate : {
        type : String
    }
*/
