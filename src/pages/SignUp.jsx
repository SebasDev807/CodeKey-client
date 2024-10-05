import { useState } from 'react';
import '../styles/Login.css'; 
import logo from '../assets/images/codekey_unimayor.png'; 
import text from '../assets/images/CodekeyUnimayor.png';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal.jsx'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    if (!email.endsWith('@unimayor.edu.co')) {
      setModalMessage('El correo debe ser @unimayor.edu.co');
      setShowModal(true);
      return;
    }

    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Correo:', email);
  
    setUsername('');
    setPassword('');
    setEmail('');
    
    setModalMessage(`Registro exitoso. ¡Bienvenido, ${username}!`);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
          <h2>Registrate</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input 
                type="text" 
                required 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
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
            <div className="inputBox">
              <input 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <i>Correo (@unimayor.edu.co)</i>
            </div>
            <div className="links">
              <a href="#">Olvidé la contraseña</a>
              <Link to="/Login">Iniciar sesión</Link> 
            </div>
            <div className="inputBox">
              <input type="submit" value="Registrarse" />
            </div>
          </form>
        </div>
      </div>
      {showModal && (
        <Modal 
          message={modalMessage} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
};

export default SignUp;