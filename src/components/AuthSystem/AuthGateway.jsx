import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthGateway.css';

const AuthGateway = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  // Login handler
  const handleLogin = async (credentials) => {
    try {
      // Replace with actual authentication logic
      if (credentials.email === 'vishwadinujaya60@gmail.com' && credentials.password === 'vishwa@1998') {
        setIsAuthenticated(true);
        //navigate('/system'); // Redirect to system after login
        window.open('dist/pages/dashboard.html', '_blank'); // Path to your AdminLTE HTML file
        return true;
      }
      else if (credentials.email === 'suraj@example.com' && credentials.password === 'suraj1234') {
        setIsAuthenticated(true);
        //navigate('/system'); // Redirect to system after login
        window.open('dist/pages/dashboard.html', '_blank'); // Path to your AdminLTE HTML file
        return true;
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      throw error;n
    }
  };

  // Signup handler
  const handleSignup = async (userData) => {
    try {
      // Replace with actual registration logic
      console.log('Registering user:', userData);
      setIsAuthenticated(true);
      navigate('/system'); // Redirect to system after signup
      return true;
    } catch (error) {
      throw error;
    }
  };

  // Auth button in hero section
  const HeroAuthButton = () => (
    <button 
      onClick={() => navigate('/auth')}
      className="hero-auth-btn"
    >
      Sign In / Sign Up
    </button>
  );

  // Auth form component
  const AuthForm = () => (
    <div className="auth-form">
      <div className="auth-prompt">
        <h2>Welcome Back!</h2>
        <p>Sign in to access your account or create a new one</p>
      </div>
      <div className="tabs">
        <button 
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          Login
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          Sign Up
        </button>
      </div>
      
      {activeTab === 'login' ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignupForm onSignup={handleSignup} />
      )}
    </div>
  );

  return (
    <div className="auth-gateway">
      <AuthForm />
    </div>
  );
};

// Login form component
const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onLogin({ email, password });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

// Signup form component
const SignupForm = ({ onSignup }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      await onSignup(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userData.username}
        onChange={(e) => setUserData({...userData, username: e.target.value})}
        placeholder="Username"
        required
      />
      <input
        type="email"
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={userData.password}
        onChange={(e) => setUserData({...userData, password: e.target.value})}
        placeholder="Password"
        required
      />
      <input
        type="password"
        value={userData.confirmPassword}
        onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
        placeholder="Confirm Password"
        required
      />
      {error && <div className="error">{error}</div>}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default AuthGateway;
