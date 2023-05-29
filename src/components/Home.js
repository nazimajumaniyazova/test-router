import React from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateLogin()}>Go to Login Page</button>
    </div>
  );
}

export default Home;
