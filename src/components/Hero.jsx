import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-brand">
          <img
            src="/hero-banner.png"
            alt="Zolprint - כל פתרונות הדפוס במקום אחד"
            className="hero-image"
          />
        </div>
        <p className="subtitle">דפוס דיגיטלי, העתקות אור, אופסט ועיצוב גרפי ברמה הגבוהה ביותר.</p>
        <div className="cta-group">
          <a href="#architects" className="btn btn-white">
            למערכת הזמנות אדריכלים
            <ArrowRight size={20} style={{ marginRight: '0.5rem' }} />
          </a>
          <a href="#services" className="btn btn-accent">השירותים שלנו</a>
        </div>
      </div>

      {/* Abstract Background Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
          overflow: hidden;
          /* Seamless Blue Background */
          background-color: #27ace4;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 850px;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-brand {
            margin-bottom: 2rem;
            animation: fadeInUp 0.8s ease-out;
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .hero-image {
            max-width: 800px;
            width: 100%;
            height: auto;
            object-fit: contain;
        }



        .subtitle {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 3rem;
          max-width: 650px;
          font-weight: 400;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .cta-group {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .btn-white {
          background: white;
          color: #27ace4;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
        .btn-white:hover {
          background: #f0f0f0;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }

        /* Abstract Floating Shapes */
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 500px;
          height: 500px;
          background: rgba(0, 174, 239, 0.08);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: rgba(196, 214, 0, 0.1);
          bottom: -50px;
          right: -50px;
          animation-delay: 2s;
        }

        .shape-3 {
           width: 300px;
           height: 300px;
           background: rgba(0, 174, 239, 0.05);
           top: 20%;
           right: 10%;
           animation-delay: 4s;
        }

        @media (max-width: 768px) {
          .hero { min-height: auto; padding: 6rem 0 4rem; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-title { font-size: 3rem; margin-bottom: 1.5rem; }
          .subtitle { font-size: 1.25rem; margin-bottom: 2rem; }
          .cta-group { flex-direction: column; width: 100%; gap: 1rem; }
          .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
