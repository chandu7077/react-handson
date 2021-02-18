import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from 'react-dom';
import API from "../api";
import App from "../App";
import auth from "../components/auth";
import {BrowserRouter, Redirect} from "react-router-dom";
export default class LoginComponent extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(props.location)
        try {
        if(props.location.pathname==="/logout") {
            auth.logout()
            }
         }
        catch(error) {
            
        }
        this.setLoginState=props.setLoginState;
        this.state = {
          loginStatus:auth.isLoggedin(),
          showValidMessage:false,
          showPwdError:false,
          showEmailError:false,
          email:"",
          password:"",
          errors: {
            email: 'Email is Required/ not valid',
            password: 'Password is Required and must be 8 characters long!',
          }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }

    async loginUser(user,callback) {
        const config = {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          };
        console.log(user);
        try {
          
            
        }
        catch(error) {
            return false;
        }
        
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const rootElement = document.getElementById("err");

        if(validateForm(this.state.errors)) {
            console.log(this.state.email);
            var isValid=false;
            const  user = { email: this.state.email ,password: this.state.password,}
            
            API.post("users", user)
            .then(data => {
                isValid=true;
                
                auth.login(()=>{
                    this.setState({loginStatus:true});
                    this.setLoginState();
                });
                console.log(auth.isLoggedin());
                
            })
            .catch(error => {
             console.log(error)
             isValid=false;
             this.state.showValidMessage=true;
            })

        }
        else {
           this.state.showEmailError = this.state.errors.email.length>0 ? true : false;
           this.state.showPwdError = this.state.errors.password.length>0 ? true : false;
           console.log(this.state);
           ReactDOM.render( 
            <Error showValidMessage={this.state.showValidMessage} errors={this.state.errors} showEmailError={this.state.showEmailError} showPwdError={this.state.showPwdError}/>
             , rootElement);
        }
        
        
    }
    handleChange = event => {
        event.preventDefault();
        const {name,value} = event.target;
        const errors=this.state.errors;
        switch(name) {
            case "email":
                console.log(value)
                this.setState({email:value});
                event.target.visibility="visible";
                const validEmailRegex =   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                errors.email = 
                    validEmailRegex.test(value)
                    ? ''
                    : 'Email is Required/ not valid';
                break;
            case "pwd":
                this.setState({password:value});
                //user.password=value;
                errors.password = 
                value.length < 8
                    ? 'Password is Required and must be 8 characters long!'
                    : '';
                break;
            default:
                break;
            
        }
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        });
    }

    render() {
    return (
        this.state.loginStatus
        ?
        <Redirect to="/companies"/>
        :
        <div class="row container form">
            <form class="col col-sm-8" onSubmit={this.handleSubmit}>
                <h2 class="label">Let's Get Started By Login</h2>
                <h5 class="red">Fields marked with "*" are mandatory</h5>
                <div id="err">
            <Error showValidMessage={this.state.showValidMessage} errors={this.state.errors} 
                showEmailError={this.state.showEmailError} showPwdError={this.state.showPwdError}/>
                </div>
                <div class="form-group">
                <label class="login-label" for="email">Email address<span class="red">*</span></label>
                <input type="email" class="form-control" onChange={this.handleChange} name="email" id="email" placeholder="Enter email"></input>
                </div>
                <div class="form-group">
                <label class="login-label" for="pwd">Password<span class="red">*</span></label>
                <input type="password" name="pwd" onChange={this.handleChange} class="form-control" placeholder="Enter password" id="pwd"></input>
                </div>
                <button class="btn btn-primary lgn-btn" type="submit">Submit</button>
            </form>
        </div>
        )
    }
}
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    console.log(valid)
    return valid;
  }

export function Error(props) {
    return (
        <ul>
            <li name="error" class="label text-danger email-danger" style={{"visibility": props.showValidMessage ? 'visible' : 'collapse' }} >Invalid email/password</li>
            <li name="error" class="label text-danger email-danger" style={{"visibility": props.showEmailError ? 'visible' : 'collapse' }} >{props.errors.email}</li>
            <li name="error" class="label text-danger pwd-danger" style={{"visibility": props.showPwdError ? 'visible' : 'collapse' }} >{props.errors.password}</li>
        </ul>
    )
}