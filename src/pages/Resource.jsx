import Navbar from '../components/Navbar.jsx';
import '../styles/Resource.css';
import ResourceCard from '../components/ResourceCard.jsx';
import UnimayorLogo from '../assets/images/codekey_unimayor.png';

const HomePage = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col"> 
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center pt-10"> 
        <div className="logoUnimayor-container mb-8">
          <img 
            src={UnimayorLogo} 
            alt="UnimayorLogoHome"
            className="logoUnimayor"
          />
        </div>
        <h2 className="text-white text-4xl font-bold mb-4">RECURSOS</h2>
        <div className="flex justify-center gap-4 mb-10 mt-6"> 
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
