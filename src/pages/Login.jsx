import '../styles/Login.css'; 
import logo from '../assets/images/codekey_unimayor.png';
import text from '../assets/images/CodekeyUnimayor.png';

const SignIn = () => {
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
          <h2>Sign In</h2>
          <div className="form">
            <div className="inputBox">
              <input type="text" required /> <i>Username</i>
            </div>
            <div className="inputBox">
              <input type="password" required /> <i>Password</i>
            </div>
            <div className="links">
              <a href="#">Forgot Password</a>
              <a href="#">Signup</a>
            </div>
            <div className="inputBox">
              <input type="submit" value="Login" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
