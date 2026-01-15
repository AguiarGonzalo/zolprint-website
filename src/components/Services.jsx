import React from 'react';
import { Printer, Layers, FileText, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Printer size={40} />,
    title: 'דפוס דיגיטלי',
    description: 'הדפסה איכותית מהיום להיום. כרטיסי ביקור, פליירים, ברושורים, ומדבקות. פתרון מושלם לכמויות קטנות ובינוניות באיכות ללא פשרות.'
  },
  {
    icon: <FileText size={40} />,
    title: 'העתקות אור (מכון העתקות)',
    description: 'שירות מקצועי לאדריכלים, מהנדסים וקבלנים. צילום, סריקה והדפסה של תוכניות בנייה (גרמושקות) בשחור-לבן ובצבע. שליחה קלה דרך האתר.'
  },
  {
    icon: <Layers size={40} />,
    title: 'דפוס אופסט',
    description: 'הפתרון המשתלם ביותר לכמויות גדולות. ניירת משרדית, ספרים, קטלוגים וחוברות. דיוק צבע מושלם ומחיר מנצח לכמויות מסחריות.'
  },
  {
    icon: <PenTool size={40} />,
    title: 'לואו-קוסט ועיצוב',
    description: 'אנחנו מציעים את מחירי הדפוס המשתלמים בארץ! בנוסף, מחלקת הגרפיקה שלנו תשמח לעצב עבורכם כל מוצר דפוס שתחלמו עליו.'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="section-title text-center">השירותים שלנו</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-wrapper">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-light { background-color: #f9f9f9; }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          position: relative;
          color: var(--color-secondary);
        }
        
        .section-title::after {
          content: '';
          display: block;
          width: 50px;
          height: 4px;
          background: var(--color-primary);
          margin: 1rem auto 0;
          border-radius: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0, 174, 239, 0.15);
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          background: rgba(0, 174, 239, 0.1);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        p {
          color: var(--color-text-light);
        }
      `}</style>
    </section>
  );
};

export default Services;
