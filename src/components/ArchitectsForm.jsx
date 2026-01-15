import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

const ArchitectsForm = () => {
  return (
    <section id="architects" className="section architects-section">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>מערכת הזמנות לאדריכלים (פעילה)</h2>
            <p className="description">
              העלו תוכניות ישירות למערכת, צפו בהזמנות קודמות ובצעו הזמנות חוזרות בקלות.
              המערכת זמינה 24/7 לשימושכם.
            </p>
            <ul className="features-list">
              <li><CheckCircle size={20} color="var(--color-accent)" /> העלאת קבצים מהירה</li>
              <li><CheckCircle size={20} color="var(--color-accent)" /> תמיכה בקבצי PDF ו-PLT</li>
              <li><CheckCircle size={20} color="var(--color-accent)" /> היסטוריית הזמנות מלאה</li>
            </ul>
            <a
              href="https://zolprint.copier.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary cta-button"
            >
              לכניסה למערכת
              <ExternalLink size={20} style={{ marginRight: '0.5rem' }} />
            </a>
          </div>

          <div className="preview-card">
            <a
              href="https://zolprint.copier.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="browser-mockup"
              aria-label="Launch Architects Portal"
            >
              <div className="browser-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="image-container">
                <img
                  src="/architects-preview.png"
                  alt="ממשק המערכת"
                  className="preview-image"
                />
                <div className="overlay">
                  <span>כניסה למערכת <ExternalLink size={24} /></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .architects-section {
          background-color: #111111; /* Explicit dark background for contrast */
          color: white;
          overflow: hidden;
          padding: 6rem 0;
          position: relative;
        }

        /* Subtle grid pattern to add texture but keep effective black background */
        .architects-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.1;
        }

        .content-wrapper {
          display: flex;
          align-items: center;
          gap: 5rem;
          position: relative;
          z-index: 2;
        }

        .text-content {
          flex: 1;
          background: transparent; /* Fix for unwanted white background inheritance */
          padding: 0;
          box-shadow: none;
        }

        h2 {
          font-size: 3rem;
          font-weight: 900;
          margin-bottom: 1.5rem;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .description {
          color: #ffffff;
          font-size: 1.35rem; /* Larger for readability */
          margin-bottom: 2.5rem;
          line-height: 1.7;
          opacity: 0.95; /* High contrast */
          font-weight: 300;
        }

        .features-list {
          margin-bottom: 3rem;
        }

        .features-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          font-size: 1.2rem;
          color: #ffffff;
          font-weight: 500;
        }

        .preview-card {
          flex: 1;
          display: flex;
          justify-content: center;
          perspective: 1000px;
        }

        .browser-mockup {
          width: 100%;
          max-width: 550px;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          display: block;
          text-decoration: none;
          transform: rotateY(-5deg) rotateX(5deg); /* Slight 3D effect for interest */
        }

        .browser-mockup:hover {
          transform: translateY(-5px) rotateY(0deg) rotateX(0deg);
          box-shadow: 0 40px 80px rgba(0, 174, 239, 0.2);
        }

        .browser-header {
          background: #e0e0e0;
          padding: 0.75rem;
          display: flex;
          gap: 0.5rem;
          border-bottom: 1px solid #d0d0d0;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red { background: #ff5f57; }
        .yellow { background: #ffbd2e; }
        .green { background: #28c940; }

        .image-container {
          position: relative;
          background: #f1f1f1;
          line-height: 0;
        }

        .preview-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 174, 239, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .browser-mockup:hover .overlay {
          opacity: 1;
        }

        .overlay span {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          padding: 1rem 2rem;
          border: 2px solid white;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 900px) {
          .content-wrapper { flex-direction: column; text-align: center; }
          .features-list li { justify-content: center; text-align: right; }
          .preview-card { width: 100%; margin-top: 2rem; }
          .browser-mockup { transform: none; }
          .text-content { order: 1; }
          .preview-card { order: 2; }
          h2 { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
};

export default ArchitectsForm;
