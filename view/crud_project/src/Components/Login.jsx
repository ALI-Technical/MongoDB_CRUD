import bcryptjs from 'bcryptjs';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import LoginAction from '../Store/actions/LoginAction';

const Login = () => {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = async (e) => {

    e.preventDefault();

    if (!loginEmail || !loginPassword) {

      return { message: "Required Fields are Missing" }

    } else {

      const loginObj = {
        email: loginEmail,
        password: loginPassword,
      }

      dispatch(LoginAction(loginObj))
    }
  }

  return (
    <>
      <form className='container mt-5' onSubmit={loginHandler}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            className="form-control" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            className="form-control" />
        </div>
        <button
          type="submit"
          className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Login
