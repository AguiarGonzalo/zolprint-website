import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <h1>
                    כל פתרונות הדפוס<br />
                    <span className="highlight">במקום אחד</span>
                </h1>
                <p className="subtitle">דפוס דיגיטלי, העתקות אור, אופסט ועיצוב גרפי ברמה הגבוהה ביותר.</p>
                <div className="cta-group">
                    <a href="#architects" className="btn btn-primary">
                        למערכת הזמנות אדריכלים
                        <ArrowRight size={20} style={{ marginRight: '0.5rem' }} />
                    </a>
                    <a href="#services" className="btn btn-accent">השירותים שלנו</a>
                </div>
            </div>

            <div className="hero-shape"></div>

            <style jsx>{`
        .hero {
          position: relative;
          height: 600px; /* Reduced height, was 800px or 90vh */
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e6f7fc 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: right;
          max-width: 800px;
        }

        h1 {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--color-secondary);
        }

        .highlight {
          color: var(--color-primary);
          position: relative;
          display: inline-block;
        }
        
        /* Underline effect */
        .highlight::after {
          content: '';
          position: absolute;
          bottom: 10px;
          right: 0;
          width: 100%;
          height: 20px;
          background-color: rgba(196, 214, 0, 0.4); /* Lime accent transparent */
          z-index: -1;
          transform: skewX(-20deg);
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          max-width: 600px;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .hero-shape {
          position: absolute;
          top: 0;
          left: 0;
          width: 50%;
          height: 100%;
          background-color: var(--color-primary);
          clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          opacity: 0.1;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .hero { height: auto; padding: 4rem 0; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          h1 { font-size: 2.5rem; }
          .subtitle { font-size: 1.2rem; }
          .cta-group { flex-direction: column; width: 100%; }
          .btn { width: 100%; text-align: center; justify-content: center; display: flex; align-items: center; }
          .hero-shape { width: 100%; height: 300px; top: -100px; opacity: 0.05; transform: rotate(10deg); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
