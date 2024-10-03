import '../styles/Login.css'; 
import logo from '../assets/images/codekey_unimayor.png'; 
import text from '../assets/images/CodekeyUnimayor.png';
import {Link} from 'react-router-dom';

const SignUp = () => {
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
          <div className="form">
            <div className="inputBox">
              <input type="text" required /> <i>Usuario</i>
            </div>
            <div className="inputBox">
              <input type="password" required /> <i>Contraseña</i>
            </div>
            <div className="links">
              <a href="#">Olvidé la contraseña</a>

              <Link to="/Login">Iniciar sesión</Link> 
            </div>
            <div className="inputBox">
              <input type="submit" value="Iniciar Sesión" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
