import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/972533511199"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">דברו איתנו בוואטסאפ</span>

            <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px; /* Changed to right for RTL/User preference, or typically left? In Israel usually right or left is fine. Let's put left to not conflict with back-to-top if we put that right. */
          left: 20px;
          right: auto;
          background-color: #25D366;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 1000;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          background-color: #20BA56;
        }

        .tooltip {
          position: absolute;
          left: 70px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 0.9rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .whatsapp-float:hover .tooltip {
          opacity: 1;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
        </a>
    );
};

export default WhatsAppButton;
