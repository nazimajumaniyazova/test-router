import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    const res = await fetch('');
    if (res.ok) {
      localStorage.setItem('token1', 'been registered');
    }
    navigate('/dash');
  };
  return (
    <div>
      <p>pretend you have entered all your data</p>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  );
}

export default Login;
