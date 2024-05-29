import {useState } from "react";
import { useSignup } from "../Hook/useSignup";
import "../styles/Signup.css";
import { FaUser, FaEnvelope,FaLock, FaPhone } from "react-icons/fa";
import { Button } from "react-bootstrap";
import logo from "../images/logo-no-background.png"
import { Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';



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

   <>


<Navbar/>
<div className="container-fluid  d-flex flex-column justify-content-center align-items-center">

    <h3 className='text-warning text-center my-3 fw-bold' >Sign Up</h3>

    <div className="row m-2 custom-login">

      <div className="col">

      <form className="d-flex flex-column p-2 " onSubmit={handleSignup}>
        <div className="form-group">
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
        </div>

<div className="form-group">
       <label>
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
        </div>

        <div className="form-group">

       <label>
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
        </div>

        <div className="form-group">

        <label>
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
</div>

<div className="form-group">
        <label>
          <h6>
            Confirm Password: <FaLock />
          </h6>
        </label>
        <input
        className='form-control'
         type="password"
        value={confirmPassword}
        required
        onChange={(e)=>setconfirmPassword(e.target.value)}
         />
         </div>

        <Button type="submit" className="btn btn-success my-3 mx-5 fw-bold">Sign up</Button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    <small className='text-secondary text-center fw-bold fs-8'  >Already have an account?</small>

    <Link to="/login" className='text-white text-decoration-none d-flex justify-content-center'><Button className='btn btn-danger fw-bold w-75'>Login</Button></Link> 
</div>
    </div>
    <Footer />



    
    </>
  );
};


export default Signup;
