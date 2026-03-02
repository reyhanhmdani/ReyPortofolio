import React, { useEffect } from 'react';
import Loader from './components/Loader';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for fade-up animations
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100); 
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    }
  }, []);

  // Parallax Effect
  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');
    let ticking = false;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;

        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            
            if (el.classList.contains('hero-bg')) {
                const yPos = -(scrolled * speed); 
                el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            } else {
                const rect = el.parentElement.getBoundingClientRect();
                const elementCenter = rect.top + (rect.height / 2);
                const distanceToCenter = elementCenter - (windowHeight / 2);
                
                const maxMove = rect.height * 0.035; 
                let yPos = distanceToCenter * speed;
                
                if (yPos > maxMove) yPos = maxMove;
                if (yPos < -maxMove) yPos = -maxMove;
                
                el.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
        ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Loader />
      <ProgressBar />
      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Contact />
      </main>

      <ChatWidget />
      <Footer />
    </>
  );
}

export default App;
