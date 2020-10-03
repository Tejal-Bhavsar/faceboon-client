import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
    const [email , setemail] = useState()
    const [password , setpassword] = useState()
    const [fullname , setfullname] = useState()

    const changeUsername = (event) => {
        setfullname(event.target.input)
    }

    const changeemail = (event) => { 
        setemail(event.target.input)
    }
    
    const changepassword = (event) => {
        setpassword(event.target.input)
    }

    const submit = (event) => {
        event.preventDefault()
        const data = {
            fullname: fullname,
            email: email,
            password: password
        };
       axios.post("http://localhost:3001/api/v1/users", data, {})
       .then(res => console.log(res))
       .catch(err => console.log(err));
    }

    return (
        <>
         <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full name</label>
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
        </>
    )

}


export default SignUpForm;