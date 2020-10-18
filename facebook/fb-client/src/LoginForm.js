import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { LocalDiningOutlined } from '@material-ui/icons';
import './Loginsignup.css'
import AuthServise from './AuthService';


const LoginForm = () => {

    const [email , setemail ] = useState()
    const [ password , setpassword] = useState()

    const changeemail = (event) => {
        setemail(event.target.value)
    }

    const changepassword = (event) => {
        setpassword(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault();
        console.log(email,password)
          AuthServise.login(email, password)
          .then(response => {
              console.log(response)
            if(response.data.accessToken) {
                localStorage.setItem("user",JSON.stringify(response.data));
            }
        })
        .catch(err => console.log(err))
          
        
         //logout() {
         //    localstorege.removeItem("user");
         //}
    }

    return(
        <>
         <div className="login__logo">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt=""/>

            <img
            src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-4.png" />
        </div>


        <div className="auth-wrapper">
            <div className="auth-inner">

                <form>
                        <h3>Sign In</h3>

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

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit"
                        className="btn btn-primary btn-block"
                        onClick={submit}
                        >Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>

                    </form>
            </div>
        </div>
        </>
    )

}

export default LoginForm;