import React from 'react';
import { Award, Users, Heart, Printer } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gradient">
      <div className="container">
        <div className="about-content">
          <div className="icon-header">
            <Printer size={48} color="white" />
          </div>
          <h2 className="section-title">מי אנחנו?</h2>
          <div className="text-content">
            <p className="lead">
              זול פרינט הוא בית דפוס מוביל בבאר שבע, המספק פתרונות דפוס מתקדמים לעסקים ופרטיים כבר למעלה מ-20 שנה.
            </p>
            <p>
              אנו מתמחים בכל סוגי הדפוס, החל מכרטיסי ביקור ופליירים ועד לתוכניות בנייה (גרמושקות) לאדריכלים ומהנדסים.
              המטרה שלנו היא לספק ללקוחותינו את האיכות הגבוהה ביותר, במחירים המשתלמים ביותר ובמהירות שיא.
            </p>
            <p>
              אצלנו תמצאו צוות מקצועי ומיומן, ציוד דפוס חדיש ומתקדם, ושירות אישי וחם לכל לקוח.
              אנו מאמינים כי הדפוס הוא הפנים של העסק שלכם, ולכן אנו משקיעים את מירב המאמצים כדי שהתוצאה תהיה מושלמת.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Users size={32} color="white" />
              </div>
              <span className="stat-number">20+</span>
              <span className="stat-label">שנות ניסיון</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Heart size={32} color="white" />
              </div>
              <span className="stat-number">1000+</span>
              <span className="stat-label">לקוחות מרוצים</span>
            </div>
            <div className="stat-item">
              <div className="stat-icon-bg">
                <Award size={32} color="white" />
              </div>
              <span className="stat-number">100%</span>
              <span className="stat-label">אחריות לאיכות</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          position: relative;
          overflow: hidden;
        }

        /* Decorative background element */
        .bg-gradient::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          z-index: 0;
        }

        .about-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .icon-header {
          width: 80px;
          height: 80px;
          background: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 10px 20px rgba(0, 174, 239, 0.3);
        }

        .section-title {
          font-size: 2.8rem;
          margin-bottom: 2rem;
          color: var(--color-secondary);
        }

        .text-content {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          margin-bottom: 3rem;
        }

        .lead {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        p {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #555;
          font-size: 1.1rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-icon-bg {
          width: 60px;
          height: 60px;
          background: var(--color-secondary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 600;
          color: #777;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
