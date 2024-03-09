import React from 'react';
import { Link } from 'react-router-dom';

function NotAuthorized() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
        <h1 style={{ fontSize: '3rem', color: '#dc3545' }}>Error 403</h1>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Not Authorized</h2>
        <p style={{ fontSize: '1.2rem' }}>Sorry, you are not authorized to access this page. Please check your permissions or contact support for assistance.</p>
        <p style={{ fontSize: '1.2rem' }}>Return to <Link to="/"><button className='btn btn-primary'>Home</button></Link></p>
      </div>
    </div>
  );
}

export default NotAuthorized;
