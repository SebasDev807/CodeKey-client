const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="CodeKey Logo" className="w-12 h-12" />
        <nav className="ml-8">
          <a href="/recursos" className="mr-4">Recursos</a>
          <a href="/retos" className="mr-4">Retos</a>
          <a href="/about" className="mr-4">About</a>
        </nav>
      </div>
      <div className="flex items-center">
        <span className="mr-4">你 idioma</span>
        <img src="/path/to/profile-pic.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;