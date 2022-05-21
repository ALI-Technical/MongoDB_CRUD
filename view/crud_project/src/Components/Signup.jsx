import bcryptjs from 'bcryptjs'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignUpAction from '../Store/actions/SignupAction'

const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  const states = useSelector((signUpreducer) => signUpreducer)

  const signupHandler = async (e) => {

    e.preventDefault();

    if (!username || !email || !password || !contact) {

      return { message: "Required Fields are Missing" }
    } else {

      // Hash Password
      const hashPass = await bcryptjs.hash(password, 10);
      // console.log(hashPass);

      const userObj = {
        username,
        email,
        password: hashPass,
        contact,
      }
      dispatch(SignUpAction(userObj))
    }
  }
  return (
    <>
      <form className='container mt-5' onSubmit={signupHandler}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            value={contact} type="number"
            onChange={(e) => setContact(e.target.value)}
            maxLength={11}
            className="form-control" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Signup
