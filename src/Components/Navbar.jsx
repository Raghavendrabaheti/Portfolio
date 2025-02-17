import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#131019] shadow-md text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
    
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="cursor-pointer hover:text-blue-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-blue-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="cursor-pointer hover:text-blue-500 transition">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/work" className="cursor-pointer hover:text-blue-500 transition">
              Work
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;