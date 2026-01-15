import React, { useState } from 'react';
import { Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'digital',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `בקשת הצעת מחיר חדשה מאת ${formData.name}`;
    const body = `
שם: ${formData.name}
טלפון: ${formData.phone}
אימייל: ${formData.email}
סוג שירות: ${formData.service}

פרטים נוספים:
${formData.details}
    `.trim();

    const mailtoLink = `mailto:shahar@zolprint.co.il?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Optional: Show feedback or clear form depending on preference. 
    // Usually with mailto we keep the data so they can see what they are sending, 
    // but here we might want to just alert them.
    // alert('העברנו אותך לתוכנת האימייל שלך לשליחת הבקשה.');
  };

  return (
    <div className="quote-form-wrapper">
      <h3>בקש הצעת מחיר</h3>
      <p>מלא את הפרטים ונחזור אליך מהר!</p>

      <form onSubmit={handleSubmit} className="quote-form">
        <input
          type="text"
          name="name"
          placeholder="שם מלא"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="טלפון"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="אימייל (אופציונלי)"
          value={formData.email}
          onChange={handleChange}
        />
        <select name="service" value={formData.service} onChange={handleChange}>
          <option value="digital">דפוס דיגיטלי</option>
          <option value="offset">דפוס אופסט</option>
          <option value="plans">העתקות אור / תוכניות</option>
          <option value="graphic">עיצוב גרפי</option>
          <option value="other">אחר</option>
        </select>
        <textarea
          name="details"
          placeholder="פרטים נוספים על ההזמנה..."
          value={formData.details}
          onChange={handleChange}
          rows="4"
        ></textarea>

        <button type="submit" className="btn btn-primary">
          שלח בקשה
          <Send size={18} style={{ marginRight: '0.5rem' }} />
        </button>
      </form>

      <style jsx>{`
        .quote-form-wrapper {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-top: 5px solid var(--color-accent);
          height: 100%;
        }

        h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--color-secondary);
        }

        p {
          margin-bottom: 2rem;
          color: var(--color-text-light);
        }

        .quote-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        input, select, textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f9f9f9;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          background: white;
        }

        button {
          margin-top: 1rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default QuoteForm;
