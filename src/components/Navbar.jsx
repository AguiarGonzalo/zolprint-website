import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import RabbitLogo from './RabbitLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src="/zolprint-logo.png" alt="Zolprint Logo" style={{ height: '60px' }} />
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          <li><a href="#services">שירותים</a></li>
          <li><a href="#architects">העתקות אור</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="#quote" className="nav-highlight">הצעת מחיר</a></li>
          <li><a href="#contact">צור קשר</a></li>
          <li className="nav-phone">
            <Phone size={16} /> 1-700-728-872
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a href="#services" onClick={() => setIsOpen(false)}>שירותים</a></li>
            <li><a href="#architects" onClick={() => setIsOpen(false)}>העתקות אור</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>אודות</a></li>
            <li><a href="#quote" onClick={() => setIsOpen(false)}>הצעת מחיר</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>צור קשר</a></li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          height: 80px;
          display: flex;
          align-items: center;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 900;
          font-size: 1.8rem;
          color: var(--color-primary); /* Brand blue for text */
          letter-spacing: -1px;
        }

        .logo-icon {
          color: var(--color-secondary); /* Black rabbit */
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--color-primary);
        }

        .nav-phone {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-light-gray);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: var(--color-primary);
          font-weight: 700;
        }

        .nav-highlight {
          color: var(--color-primary);
          font-weight: 700;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-primary);
          padding: 0;
        }

        .mobile-menu {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          background: white;
          padding: 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-top: 1px solid var(--color-light-gray);
        }

        .mobile-menu ul {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-toggle { 
            display: block;
            position: absolute; /* Force it out of flex flow */
            left: 20px; /* Pin to left edge */
            top: 50%;
            transform: translateY(-50%);
            width: auto;
            z-index: 100;
          }
          /* Ensure container centers the logo or handles the space */
          .nav-container {
            justify-content: center; /* Center the logo since button is absolute */
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
