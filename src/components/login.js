
import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const url = 'http://localhost:4000/users/signin';
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
  
class Login extends Component {
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
   const user = {
    //  firstname:firstName,
    //  lastname:lastName,
     email:email,
     password:password
   }
   //console.log(user);
   //const response = await axios.post(url,user);
   axios.post(url,{user})
    .then(response =>{
      console.log('abc');

   } )
  //  axios.put(url+"/id",user);
  //  axios.delete(url+"/id");
   this.props.history.push('/');
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
    ? "": "";
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
    ? "": "";
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
          <h1> LOGIN</h1>
            <form onSubmit={this.handleSubmit} noValidate> 

            <div className="firstName">
                <label htmlFor="firstName" className="First Name"></label>
                <input type="text" className={ formErrors.firstName.length > 0 ? "error" : null} placeholder="Email"  name="firstName" noValidate 
                onChange={this.handleChange} />
                {
                  formErrors.firstName.length > 0 && (
                    <span className=" errorMessage"> {formErrors.firstName}</span>
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
                <Link to="/demo">
                <button type=" submit"> 
                Login
                </button></Link>
              </div>
            </form>
        </div>
      </div>
    );
  }
}


export default Login;
