import React, { useState } from 'react';
import { TermsModal, AccessibilityModal } from './LegalModals';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showAccessibility, setShowAccessibility] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="container footer-container">
          <span>&copy; {new Date().getFullYear()} Zolprint - דפוס דיגיטלי והעתקות אור</span>

          <div className="footer-links">
            <button onClick={() => setShowTerms(true)} className="footer-link">תקנון האתר</button>
            <span className="separator">|</span>
            <button onClick={() => setShowAccessibility(true)} className="footer-link">הצהרת נגישות</button>
          </div>
        </div>

        <style jsx>{`
          .footer {
            background-color: var(--color-secondary);
            color: #ccc;
            padding: 1rem 0;
            border-top: 2px solid #333;
            font-size: 0.9rem;
            margin-top: auto;
          }

          .footer-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          .footer-links {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .footer-link {
            background: none;
            border: none;
            color: #ccc;
            cursor: pointer;
            font-size: inherit;
            text-decoration: none;
            padding: 0;
            transition: color 0.3s;
          }

          .footer-link:hover {
            color: var(--color-primary);
            text-decoration: underline;
          }

          .separator {
            color: #555;
          }

          @media (max-width: 600px) {
            .footer-container {
              flex-direction: column;
              text-align: center;
            }
          }
        `}</style>
      </footer>

      <TermsModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <AccessibilityModal isOpen={showAccessibility} onClose={() => setShowAccessibility(false)} />
    </>
  );
};

export default Footer;
