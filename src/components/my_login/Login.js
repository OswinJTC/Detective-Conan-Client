import React, { useState,useEffect } from 'react';
import api from '../../api/axiosConfig';
import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = ({ setIsLoggedIn, setLoggedUserName}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/v1/users/login", {
        username: username,
        password: password,
        
      });

      
      if (response.status === 200) {
        setIsLoggedIn(true);
        const response = await api.get(`/api/v1/users/${username}`);
        setLoggedUserName(response.data.username);
        navigate('/');

      } else {
        console.error('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  useEffect(() => {//讓背景圖片只出現在login
    document.body.classList.add('login-background'); // Add the class to the body when the component mounts
    return () => {
      document.body.classList.remove('login-background'); // Remove the class from the body when the component unmounts
    };
  }, []);

  return (

    <div className="wrapper">
      <div className="title"><span>名偵探柯南非官方網站</span></div>
      <form>

      <div className="signInText">Sign In</div>
        <div className="row">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="請輸入用戶名稱"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="row">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="請輸入密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="pass"><Link to="#">忘記密碼？</Link></div>
        <div className="row button">
          <button type="button" onClick={handleLogin}>馬上登入</button>
        </div>
        <div className="signup-link">還沒有帳號? <Link to="/Register">點我註冊</Link></div>
      </form>
    </div>
    
  );
};

export default Login;
