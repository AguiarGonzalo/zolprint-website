import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>
                <h2 className="modal-title">{title}</h2>
                <div className="modal-body">
                    {children}
                </div>
            </div>
            <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          backdrop-filter: blur(5px);
        }
        .modal-content {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 80vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          animation: slideUp 0.3s ease-out;
        }
        .modal-close {
          position: absolute;
          top: 15px;
          left: 15px; /* RTL layout */
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          transition: color 0.3s;
        }
        .modal-close:hover {
          color: #111;
        }
        .modal-title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-primary);
          border-bottom: 2px solid var(--color-light-gray);
          padding-bottom: 0.5rem;
        }
        .modal-body {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #444;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export const TermsModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} title="תקנון האתר">
        <p>ברוכים הבאים לאתר זול פרינט.</p>
        <p>השימוש באתר זה כפוף לתנאים הבאים:</p>
        <ul style={{ paddingRight: '20px', margin: '10px 0' }}>
            <li>כל התכנים באתר זה הם רכושו הבלעדי של בית העסק.</li>
            <li>אין להעתיק או להשתמש בחומרים מהאתר ללא אישור בכתב.</li>
            <li>בית העסק עושה כל מאמץ לספק מידע מדויק, אך ייתכנו טעויות בתום לב.</li>
            <li>המחירים והמבצעים באתר עשויים להשתנות מעת לעת ללא הודעה מוקדמת.</li>
        </ul>
        <p>בכל שאלה ניתן לפנות אלינו דרך עמוד צור קשר.</p>
    </Modal>
);

export const AccessibilityModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose} title="הצהרת נגישות">
        <p>אנו בזול פרינט רואים חשיבות רבה במתן שירות שוויוני לכלל הלקוחות ובשיפור הנגישות באתר האינטרנט שלנו.</p>
        <h3>התאמות שבוצעו באתר:</h3>
        <ul style={{ paddingRight: '20px', margin: '10px 0' }}>
            <li>האתר מותאם לגלישה באמצעות מקלדת.</li>
            <li>קיימת ניגודיות צבעים מתאימה לקריאה נוחה.</li>
            <li>כל התמונות כוללות טקסט חלופי (Alt Text).</li>
            <li>האתר בנוי בצורה סמנטית וברורה עבור קוראי מסך.</li>
        </ul>
        <p>אם נתקלתם בקושי כלשהו בגלישה באתר, אנו מתנצלים ונשמח לסייע. אנא פנו אלינו בטלפון 1-700-728-872 או במייל shahar@zolprint.co.il.</p>
    </Modal>
);
