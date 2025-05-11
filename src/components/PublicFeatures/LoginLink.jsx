import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = () => {
  return (
    <section id="login-link" style={{ padding: '2rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
      <h2>Admin Access</h2>
      <p>
        <Link to="/auth" style={{ fontSize: '1.2rem', color: '#007bff', textDecoration: 'underline' }}>
          Login to the Load Balancer Dashboard
        </Link>
      </p>
    </section>
  );
};

export default LoginLink;
