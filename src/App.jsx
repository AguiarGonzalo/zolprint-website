import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ArchitectsForm from './components/ArchitectsForm';
import QuoteForm from './components/QuoteForm';
import FacebookFeed from './components/FacebookFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import ScrollReveal from './components/ScrollReveal';

function App() {
  return (
    <div className="App">
      <Navbar />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <ScrollReveal>
        <About />
      </ScrollReveal>

      <ScrollReveal>
        <Services />
      </ScrollReveal>

      <ScrollReveal>
        <ArchitectsForm />
      </ScrollReveal>

      {/* Quote & Social Section */}
      <ScrollReveal>
        <section className="section bg-light-gray" id="quote">
          <div className="container">
            <h2 className="section-title text-center">צור קשר וקבל הצעת מחיר</h2>
            <div className="grid-2">
              <QuoteForm />
              <FacebookFeed />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />

      <WhatsAppButton />
      <BackToTop />

      <style jsx>{`
        .bg-light-gray { background: var(--color-light-gray); }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 500px));
          justify-content: center;
          gap: 3rem;
          align-items: start;
        }
        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

export default App;
