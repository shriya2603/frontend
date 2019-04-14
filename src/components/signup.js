import React, { Component } from 'react';
import './signup.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Main from './main';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const url = 'http://localhost:4000/users/signup';
const formValid = ({formErrors, ...rest }) => {
  let valid = true;
  // Validate form errors bring empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  // Validate the form was filled out
  Object.values(rest).forEach(val => {
    val == null && (valid=false);
  });
  
  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state= {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password:""
      }
    };
  }
handleSubmit =async  e => {
  e.preventDefault() ;

  if(formValid(this.state)){
    const {email,password} = this.state;
   //This is making a payload to hit the server
   const user = {
    //  firstname:firstName,
    //  lastname:lastName,
     email:email,
     password:password
   }
   console.log(user);
   const response = await axios.post(url,user);
   console.log(response);
  //  axios.put(url+"/id",user);
  //  axios.delete(url+"/id");
   this.props.history.push('/login'); //this is re-direction 
  } else{
    console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
  }
};

handleChange = e => {
  e.preventDefault();
  const {name, value } = e.target;
  let formErrors = this.state.formErrors;


  switch(name){
    case "firstName":
    formErrors.firstName = value.length < 3 && value.length > 0 
    ? "minimum 3 characters required": "";
    break;
    case "lastName":
    formErrors.lastName = value.length < 3 && value.length > 0 
    ? "minimum 3 characters required": "";
    break;
    case "email":
    formErrors.email = emailRegex.test(value) && value.length > 0
    ?'': 'invaid email address';
    break;
    case "password":
    formErrors.password = value.length < 6 && value.length > 0 
    ? "minimum 6 characters required": "";
    break;
    default: 
    break;
  }
    this.setState({ formErrors, [name]: value}, () => console.log(this.state));

};
  render() {
    const { formErrors} = this.state;

    return (
      <div className="wrapper" > 
        <div className="form-wrapper"> 
          <h1> Create Account </h1>
            <form onSubmit={this.handleSubmit} noValidate> 

              <div className="firstName">
                <label htmlFor="firstName" className="First Name"></label>
                <input type="text" className={ formErrors.firstName.length > 0 ? "error" : null} placeholder="First Name"  name="firstName" noValidate 
                onChange={this.handleChange} />
                {
                  formErrors.firstName.length > 0 && (
                    <span className=" errorMessage"> {formErrors.firstName}</span>
                  )
                }
              </div>
              <div className="lastName">
                <label htmlFor="lastName" className="Last Name"></label>
                <input type="text" className={ formErrors.lastName.length > 0 ? "error" : null} placeholder="Last Name"  name="lastName" noValidate 
                onChange={this.handleChange} />
                {
                  formErrors.lastName.length > 0 && (
                    <span className=" errorMessage"> {formErrors.lastName}</span>
                  )
                }
              </div>
              <div className="email">
                <label htmlFor="email" className="Email"></label>
                <input className={ formErrors.email.length > 0 ? "error" : null} placeholder="Email" type="email" name="email" noValidate 
                onChange={this.handleChange} />
                {
                  formErrors.email.length > 0 && (
                    <span className=" errorMessage"> {formErrors.email}</span>
                  )
                }
              </div>
              <div className="password">
                <label htmlFor="password" className="Password"></label>
                <input className={ formErrors.password.length > 0 ? "error" : null} placeholder="Password " type="password" name="password" noValidate 
                onChange={this.handleChange} />
                {
                  formErrors.password.length > 0 && (
                    <span className=" errorMessage"> {formErrors.password}</span>
                  )
                }
              </div>
              <div className="createAccount">
                <button type=" submit" onSubmit = {() => this.handleSubmit()} > 
                Create Account
                </button>
                <Link to={"/login"}><small> Already have an Account?</small></Link>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default Signup;
