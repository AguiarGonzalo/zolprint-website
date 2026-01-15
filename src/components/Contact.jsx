import React from 'react';
import { MapPin, Phone, Mail, Facebook, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>צור קשר</h2>
            <p style={{ marginBottom: '1.5rem' }}>אנחנו כאן לכל שאלה ובקשה.</p>

            <div className="info-item">
              <MapPin className="icon" size={20} />
              <div>
                <strong>כתובת:</strong>
                <p>רחוב יהודה הנחתום 10, באר שבע</p>
              </div>
            </div>

            <div className="info-item">
              <Phone className="icon" size={20} />
              <div>
                <strong>טלפון:</strong>
                <p>1-700-728-872</p>
              </div>
            </div>

            <div className="info-item">
              <Mail className="icon" size={20} />
              <div>
                <strong>דוא"ל:</strong>
                <p>shahar@zolprint.co.il</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="icon" size={20} />
              <div>
                <strong>שעות פעילות:</strong>
                <p>א'-ה': 08:00 - 17:00<br />ו'-ש': סגור</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.facebook.com/p/Zolprint-100067775679874/?locale=he_IL" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://waze.com/ul?q=Yehuda+ha-Nakhtom+St+10+Be'er+Sheva" target="_blank" rel="noreferrer" className="social-icon" aria-label="Waze">
                {/* Waze Icon provided by user */}
                <svg width="20" height="20" viewBox="0 0 24 24" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <title>Waze icon</title>
                  <path d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586Z" /></svg>
              </a>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=Yehuda+ha-Nakhtom+St+10,+Be'er+Sheva&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Zolprint. כל הזכויות שמורות.</p>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          background: #222;
          color: white;
          padding-top: 3rem; /* Reduced from 5rem */
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem; /* Reduced from 4rem */
          padding-bottom: 3rem; /* Reduced from 4rem */
        }

        h2 {
          color: var(--color-primary);
          margin-bottom: 0.75rem; /* Reduced from 1rem */
          font-size: 1.8rem; /* Slightly smaller */
        }

        .info-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1rem; /* Reduced from 1.5rem */
          align-items: flex-start;
          font-size: 0.95rem; /* Slightly reduced text size */
        }

        .icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .map-container {
          min-height: 250px; /* Reduces height slightly */
          border-radius: 12px;
          overflow: hidden;
          background: #333;
          height: 100%;
        }

        .social-links {
          margin-top: 1.5rem; /* Reduced */
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          color: white;
          transition: background 0.3s, transform 0.2s;
        }

        .social-icon:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid #333;
          padding: 1.5rem 0;
          text-align: center;
          color: #888;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .map-container { min-height: 250px; height: 300px; }
        }
      `}</style>
    </footer>
  );
};

export default Contact;
