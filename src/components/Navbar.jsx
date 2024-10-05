import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Navbar.css';
import Logo from '../assets/images/codekey_unimayor.png';
import ProfilePicture from '../assets/images/ProfilePicture.jpg';
import ProfileMenu from './ProfileMenu';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full bg-[rgba(82,82,82,0.05)] p-4 flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="flex items-center space-x-4"> 
        <h1 className="text-white text-3xl font-bold">CODEKEY</h1>
        <img src={Logo} alt="Logo" className="w-12 h-auto" />
      </div>
      
      <div className="flex space-x-8"> 
        <Link to="/recursos" className="nav-link">
          Recursos
        </Link>
        <Link to="/retos" className="nav-link">
          Retos
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
      
      <div className="flex items-center space-x-4 relative">
        <button className="text-white">你 idioma</button>
        <img 
          src={ProfilePicture} 
          alt="Profile" 
          className="w-10 h-10 rounded-full cursor-pointer" 
          onClick={toggleMenu}
        />
        <ProfileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default NavBar;
