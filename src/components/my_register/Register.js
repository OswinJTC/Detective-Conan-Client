import React, { useState , useEffect} from 'react';
import api from '../../api/axiosConfig';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  

  
  const navigate = useNavigate();  

  const handleRegister = async () => {
    let hasError = false;

    if (!username) {
      setUsernameError('請輸入用戶名稱!!');
      hasError = true;
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('請輸入電子郵件!!');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('請輸入密碼!!');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) {
      return;
    }

    try {
      const response = await api.post("/api/v1/registration", {
        username: username,
        email: email,
        password: password,
      });

      if (response.status === 201) {
        console.log('Registration successful!');
        navigate(`/`);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred during registration.');
    }
  };

  useEffect(() => {//讓背景圖片只出現在login page
    document.body.classList.add('register-background'); // Add the class to the body when the component mounts
    return () => {
      document.body.classList.remove('register-background'); // Remove the class from the body when the component unmounts
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="title"><span>名偵探柯南非官方網站</span></div>
      <form>

      <div className="signInText">Sign Up</div>
        <div className="row">
          <i className="fas fa-user"></i>
          
          
          <input
            type="text"
            placeholder="請輸入用戶名稱"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && <div className="error">{usernameError}</div>}
          
        </div>
        

        <div className="row">
          <i className="fas fa-envelope"></i>
          
          <input
            type="text"
            placeholder="請輸入電子郵件"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <div className="error">{emailError}</div>}
          
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
          {passwordError && <div className="error">{passwordError}</div>}
          
        </div>


      
        <div className="row button">
          <button type="button" onClick={handleRegister}>立即註冊</button>
        </div>
        <div className="signin-link">已經有帳號? <Link to="/">點我登入</Link></div>
        
      </form>
    </div>
  );
};

export default Register;
