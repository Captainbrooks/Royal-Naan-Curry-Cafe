import {useState } from "react";
import { useSignup } from "../Hook/useSignup";
import "../styles/Signup.css";
import { FaUser, FaEnvelope,FaLock, FaPhone } from "react-icons/fa";
import { Button } from "react-bootstrap";
import logo from "../images/logo-no-background.png"
import { Link } from 'react-router-dom';



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUserName] = useState("");
  const { signup, error } = useSignup();









 



  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(username,email,phone,password,confirmPassword);
  };


  return (

    <div className="signup-page">

<img src={logo} alt="Restaurant logo" className='logo-style' />

<h1 className="text-warning">Sign up</h1>
    <div className="container-form">

      <form onSubmit={handleSignup}>
      <label>
          <h6>
            Username:  < FaUser />
          </h6>
        </label>
        <input
        className="form-control"
          type="text"
          value={username}
          required
          onChange={(e) => setUserName(e.target.value)}
        />

       <label className="signup-label">
          <h6>
            Email:  <FaEnvelope />
          </h6>
        </label>
        <input
        className="form-control"
          type="text"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

       <label className="signup-label">
          <h6>
            Phone:  <FaPhone />
          </h6>
        </label>
        <input
        className="form-control"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label className="signup-label">
          <h6>
            Password:   <FaLock />
          </h6>
        </label>
        <input
        className='form-control'
         type="password"
        value={password}
        required
        onChange={(e)=>setPassword(e.target.value)}
         />
        <label className="signup-label">
          <h6>
            Confirm Password:   <FaLock />
          </h6>
        </label>
        <input
        className='form-control'
         type="password"
        value={confirmPassword}
        required
        onChange={(e)=>setconfirmPassword(e.target.value)}
         />
        <Button type="submit" style={{margin:"20px 70px"}}>Sign up</Button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    <p className='text-secondary'  >Already have an account?</p>
      <Button className='btn btn-danger'><Link to="/login" className='text-white' style={{ textDecoration: "none" }}>Login here</Link></Button>

    </div>
  );
};


export default Signup;
