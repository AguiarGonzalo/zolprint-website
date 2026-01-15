import React from 'react';

const FacebookFeed = () => {
  return (
    <div className="facebook-feed-wrapper">
      <div className="text-content">
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>עקבו אחרינו בפייסבוק</h3>
        <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>עדכונים שוטפים, מבצעים ועבודות נבחרות.</p>
      </div>

      <div className="iframe-container">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FZolprint-100067775679874&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="100%"
          height="500"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Zolprint Facebook"
        ></iframe>
      </div>

      <style jsx>{`
        .facebook-feed-wrapper {
          background: white;
          /* Padding moved to .text-content */
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-top: 5px solid var(--color-primary);
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .text-content {
          padding: 2rem 2rem 1rem 2rem;
        }

        .iframe-container {
          flex: 1;
          display: flex;
          justify-content: center;
          width: 100%;
          background: #f0f2f5;
        }
      `}</style>
    </div>
  );
};

export default FacebookFeed;
