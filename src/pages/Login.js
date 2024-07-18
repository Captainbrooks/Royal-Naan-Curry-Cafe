import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/Login.css";
import { Button } from "react-bootstrap";
import logo from "../images/logo-no-background.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import { selectIsAdmin, selectUser, verifyAdmin } from "../store/features/userSlice"
import { useDispatch, useSelector } from "react-redux";
import { useLogin } from '../Hook/useLogin';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import useVerifyAdmin from '../Hook/useVerifyAdmin';


const Login = () => {

  const isAdmin = useSelector(selectIsAdmin);

  const { verify, invalidMessage } = useVerifyAdmin();






  const handleVerify = async () => {
    console.log("handle verify reached");
    await verify(isverifiedAdmin, email, verificationCode)
  }


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resendmessage, setResendMessage] = useState("");

  const [verificationCode, setVerificationCode] = useState("");
  const { login, error, isLoading, isverifiedAdmin } = useLogin();




  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);

  }


  const handleResendCode = async (email) => {
    setResendMessage("");

    console.log("handle resend code is clicked");
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/user/resend-code`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })

    });

    const json = await response.json();

    if (response.ok) {
      setResendMessage(json.resendMessage);

      const timeout = setTimeout(function () {
        setResendMessage("");
      }, 3000);

      console.log(json.resendMessage);
      console.log(json.code);

    }
    if (!response.ok) {


      console.log(json.error.message);
    }
  }

  return (

    <>
      <Navbar />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h3 className='text-warning text-center my-3  fw-bold' >Login to Complete Your Order</h3>



        <div className="row m-1 custom-login ">
          <div className="col">

            <form className='d-flex flex-column p-2' onSubmit={handleLogin}>
              <label>
                <h6>
                  Email:  <FaEnvelope />
                </h6>
              </label>
              <input
                className='form-control'
                type="text"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label style={{ marginBlock: "10px" }}>
                <h6>
                  Password:   <FaLock />
                </h6>
              </label>
              <input
                className='form-control'
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />



              {isverifiedAdmin && (
                <>
                  <label style={{ marginBlock: "20px" }}>
                    <p className='text-danger'>Please check your email  <strong>{email}</strong> for the 6-digit verification code to complete the login process.</p>
                  </label>
                  <input
                    className='form-control'
                    type="text"
                    value={verificationCode}
                    placeholder='Enter the verification code here'
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </>
              )}

              {!isverifiedAdmin && <Button
                type="submit"
                className='btn btn-success my-3 mx-5 fw-bold'
              >
                Login
              </Button>
              }

              {error && <div className="error">{error}</div>}
              {
                isverifiedAdmin && <Button
                  className='btn btn-danger'

                  onClick={() => handleVerify()}
                >
                  Verify
                </Button>

              }
              {

                isverifiedAdmin && <p className='text-muted text-center'>Didn't get the code ?  <button className='btn btn-primary' onClick={() => handleResendCode(email)}>Resend Code</button></p>

              }
              {resendmessage && <p>{resendmessage}</p>}
              {!resendmessage && invalidMessage && <p className='text-danger text-center'>{invalidMessage}</p>}

              <Link to="/forgot-passowrd" className='m-2 text-center'>
                <label>
                  <h6 className='fw-bold'>
                    Forgot Password <FontAwesomeIcon icon={faQuestionCircle} />
                  </h6>
                </label>
              </Link>
            </form>

            {/* 
{verified ? (<p>Is admin is verified</p>):(<p>admin not verified</p>)} */}

          </div>
          <small className='text-secondary text-center fw-bold fs-8'  >New to Royal Naan Curry & Cafe?</small>
          <Link to="/signup" className='text-white text-decoration-none d-flex justify-content-center'><Button className='btn btn-danger fw-bold w-75'>Sign up</Button></Link>
        </div>
      </div>
      <Footer />

    </>



  )
}

export default Login
