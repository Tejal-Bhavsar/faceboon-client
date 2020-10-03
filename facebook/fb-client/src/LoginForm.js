import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const LoginForm = () => {

    const [email , setemail ] = useState()
    const [ password , setpassword] = useState()

    const changeemail = (event) => {
        setemail(event.target.input)
    }

    const changepassword = (event) => {
        setpassword(event.target.input)
    }

    const submit = (event) => {
        event.preventDefault();
         const data = {
             email: email,
             password: password
         };
        axios.post("http://localhost:3001/api/v1/users", data, {})
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
    }

    return(
        <>
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

        </>
    )

}

export default LoginForm;