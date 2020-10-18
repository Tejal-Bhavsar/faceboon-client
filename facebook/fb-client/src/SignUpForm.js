import React, { useState } from 'react';
import axios from 'axios';
import AuthService from './AuthService';
 import './Loginsignup.css'

const SignUpForm = () => {
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [username , setfullname] = useState()

    const changeUsername = (event) => {
        setfullname(event.target.value)
        console.log(setfullname)
    }

    const changeemail = (event) => { 
        setemail(event.target.value)
        console.log(setemail)
    }
    
    function changepassword(event) {
        setpassword(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault()
        console.log(username,email,password)
        AuthService.resgister(username,email,password)
        .then(response => console.log("success"))
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className="auth-wrapper">
            <div className="auth-inner"> 
       
                <form>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" 
                            onChange={changeUsername}
                            placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control"
                            onChange={changeemail}
                            placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" 
                            onChange={changepassword}
                            placeholder="Enter password" />
                        </div>

                        <button type="submit"
                        className="btn btn-primary btn-block"
                        onClick={submit}
                        >Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">sign in?</a>
                        </p>
                    </form>
            </div>
        </div>
        </>
    )

}


export default SignUpForm;