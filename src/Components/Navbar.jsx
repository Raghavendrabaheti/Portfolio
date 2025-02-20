import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-50 backdrop-blur-lg shadow-md text-white py-4 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/Raghavendrabaheti" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github w-6 h-6" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.64 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A7.998 7.998 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/raghavendra-baheti-909109244" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin w-6 h-6" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.324 0 .72 0h14.56c.396 0 .72.513.72 1.146v13.708c0 .633-.324 1.146-.72 1.146H.72a.733.733 0 01-.72-1.146V1.146zM4.943 12.306V5.549H2.542v6.757h2.401zm-1.201-7.77c.837 0 1.356-.553 1.356-1.244-.015-.706-.519-1.244-1.342-1.244-.824 0-1.356.537-1.356 1.244 0 .691.52 1.244 1.327 1.244h.015zm4.908 7.77V8.94c0-.179.013-.357.065-.485.143-.357.472-.728 1.023-.728.723 0 1.012.548 1.012 1.352v2.228h2.4V8.829c0-2.226-1.184-3.26-2.764-3.26-1.288 0-1.85.715-2.18 1.22v.026h-.015a5.43 5.43 0 01-.065-.026V5.548H6.542c.03.538 0 6.758 0 6.758h2.401z"/>
            </svg>
          </a>
        </div>
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
          <li>
            <Link to="/project" className="cursor-pointer hover:text-blue-500 transition">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;