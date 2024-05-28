import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const [error,setError]=useState("");
    const [message,setMessage]=useState("");




    

    const handleSubmit = async (e) => {

        e.preventDefault();

        const response = await fetch("http://https://royal-naan-curry-bar.onrender.com/api/v1/user/forgot-password/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        })

        const json = await response.json();

        console.log(json);

        if (response.ok) {
            setError(null);
            console.log(json);
            setMessage(json.message);
        }

        if(!response.ok){
            setError(json.error);
        }

    };

    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333333' }}>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', color: '#333333' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #cccccc' }}
                        />
                        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Send Reset Link</button>

                        {error && <p className='text-danger' style={{textAlign:"center"}}>{error}</p>}
                        {message && <p className='text-danger' style={{textAlign:"center"}}>{message}</p>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ForgotPassword;
