import React from 'react';

const Login = ({ onSubmit, logInError }) => (
    <div className='login-container'>
        <h1>Login Page</h1>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Number</label>
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">+91</div>
                </div>
                <input type="textbox" className="form-control" required id="login-input" aria-describedby="emailHelp" placeholder="Enter number" />
            </div>
        </div>
        { logInError && 
            <p className='alert alert-danger'>Invalid input</p>
        }
        <button className='btn btn-primary' onClick={() => onSubmit()}>Submit</button>
    </div>
);

export default Login;