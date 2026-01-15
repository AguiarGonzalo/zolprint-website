import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'digital',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote-form", ...formData })
    })
      .then(() => setSubmitted(true))
      .catch(error => alert(error));
  };

  if (submitted) {
    return (
      <div className="quote-form-wrapper success-state">
        <CheckCircle size={64} color="var(--color-primary)" />
        <h3>תודה רבה!</h3>
        <p>קיבלנו את הפנייה שלך. נחזור אליך בהקדם עם הצעת מחיר.</p>
        <button className="btn btn-outline" onClick={() => setSubmitted(false)}>שלח פנייה נוספת</button>
        <style jsx>{`
          .quote-form-wrapper {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-top: 5px solid var(--color-accent);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
          }
          h3 { margin: 1rem 0; font-size: 2rem; color: var(--color-secondary); }
          p { color: #666; margin-bottom: 2rem; }
          .btn-outline {
            background: transparent;
            border: 2px solid var(--color-primary);
            color: var(--color-primary);
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
          }
          .btn-outline:hover {
            background: var(--color-primary);
            color: white;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="quote-form-wrapper">
      <h3>בקש הצעת מחיר</h3>
      <p>מלא את הפרטים ונחזור אליך מהר!</p>

      <form
        onSubmit={handleSubmit}
        className="quote-form"
        name="quote-form"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="quote-form" />
        <div hidden><input name="bot-field" /></div>

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
