import '../styles/Login.css';
import Modal from '../components/Modal.jsx'
import logo from '../assets/images/codekey_unimayor.png';
import text from '../assets/images/CodekeyUnimayor.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@unimayor\.edu\.co$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('El correo debe ser del dominio @unimayor.edu.co');
      setShowModal(true);
      return;
    }

    if (password === '') {
      setError('Por favor ingresa tu contraseña');
      setShowModal(true);
      return;
    }

    setError('');
    navigate('/Resource');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
  };
  

  return (
    <section>
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span> 
      <span></span> <span></span> <span></span> <span></span>
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 
       <span></span> <span></span> <span></span> <span></span> 

      <div className="logo-container">
        <img src={logo} alt="Codekey Logo" className="logo" />
        <img src={text} alt="Text CodeKey" className="additional-image" />
      </div>

      <div className="signin">
        <div className="content">
          <h2>Iniciar Sesión</h2>
          <form className="form" onSubmit={handleLogin}> 
            <div className="inputBox">
              <input 
                type="text" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              /> 
              <i>Usuario</i>
            </div>
            <div className="inputBox">
              <input 
                type="password" 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              /> 
              <i>Contraseña</i>
            </div>
            <div className="links">
              <a href="#">Olvidé la contraseña</a>
              <Link to="/signup">Registrate</Link> 
            </div>
            <div className="inputBox">
              <input type="submit" value="Iniciar Sesión" />
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <Modal 
          message={error} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default Login;