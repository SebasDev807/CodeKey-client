import { useState } from 'react';
import '../styles/ResourceCard.css';
import JavaScriptLogoWhite from '../assets/images/javascriptwhite-logo.png'; 
import JavaScriptLogoBlack from '../assets/images/javascriptblack-logo.png';

const ResourceCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="resource-card"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? JavaScriptLogoBlack : JavaScriptLogoWhite} 
        alt="JavaScript Logo" 
        className="resource-logo" 
      />
      <div className="resource-title">JavaScript</div>
      <div className="resource-description">
        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.).
      </div>
    </div>
  );
};

export default ResourceCard;
