import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/framework", label: "Framework" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/stakeholders", label: "Stakeholders" },
    { path: "/impact", label: "Impact" },
    { path: "/digital-skills", label: "Digital Skills" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logo2.png"
                alt="SCDP Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={`px-2 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isActive(link.path)
                    ? "bg-green-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600 hover:shadow-md"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-24 right-0 h-[calc(100vh-6rem)] w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 pt-4 pb-3">
          {/* Close Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-green-600 transition-all duration-300 transform hover:scale-110 hover:rotate-90 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                isActive(link.path)
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
