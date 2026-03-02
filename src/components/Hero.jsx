import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const typewriterRef = useRef(null);
    const codeWindowRef = useRef(null);

    // Typewriter effect logic
    useEffect(() => {
        const words = ["Fullstack Engineer.", "AI Specialist.", "Creative Developer.", "Data Analyst."];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        const type = () => {
            if (!typewriterRef.current) return;

            const currentWord = words[wordIndex];

            if (isDeleting) {
                typewriterRef.current.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterRef.current.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            timeoutId = setTimeout(type, typeSpeed);
        };

        timeoutId = setTimeout(type, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    // 3D Tilt logic
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (window.innerWidth > 992 && codeWindowRef.current) {
                const codeWindow = codeWindowRef.current.querySelector('.code-window');
                if (!codeWindow) return;

                const rect = codeWindowRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -6;
                const rotateY = ((x - centerX) / centerX) * 6;

                codeWindow.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                codeWindow.style.transition = 'none';
            }
        };

        const handleMouseLeave = () => {
            if (codeWindowRef.current) {
                const codeWindow = codeWindowRef.current.querySelector('.code-window');
                if (codeWindow) {
                    codeWindow.style.transform = `rotateX(0deg) rotateY(0deg)`;
                    codeWindow.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                }
            }
        };

        const currentRef = codeWindowRef.current;
        if (currentRef) {
            currentRef.addEventListener('mousemove', handleMouseMove);
            currentRef.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('mousemove', handleMouseMove);
                currentRef.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, []);

    // Ripple effect logic for single buttons could be extracted to a hook or separate component later.
    const createRipple = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    const handleBtnMouseMove = (e) => {
        const btn = e.currentTarget;
        const position = btn.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.02)`;
    };

    const handleBtnMouseLeave = (e) => {
        const btn = e.currentTarget;
        btn.style.transform = 'translate(0px, 0px) scale(1)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    };
    
    const handleBtnMouseEnter = (e) => {
        e.currentTarget.style.transition = 'transform 0.1s linear';
    };

    return (
        <section id="hero">
            <div className="hero-bg parallax" data-speed="0.3"></div>
            <div className="container">
                <div className="hero-wrapper">
                    
                    {/* Left Column: Text & CTA */}
                    <div className="hero-content fade-up is-visible">
                        <div className="status-badge">
                            <div className="status-dot"></div> Available for freelance work
                        </div>
                        
                        <h1 className="hero-title">Hi, I'm <br/><span style={{ color: 'var(--gold-cta)' }}>Raihan Hamdani.</span></h1>
                        
                        <p className="hero-subtitle" style={{ fontFamily: 'var(--font-display)', color: 'var(--stone-dark)' }}>
                            I am a <span className="typewriter" ref={typewriterRef}></span>
                        </p>
                        
                        <p style={{ fontSize: '1.1rem', color: 'var(--taupe-accent)', maxWidth: '480px', marginBottom: '32px' }}>
                            I engineer sophisticated digital experiences blending robust backend architecture with flawless front-end execution.
                        </p>
                        
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn btn-primary" data-text="View My Work" onClick={createRipple} onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} onMouseEnter={handleBtnMouseEnter}>
                                <span className="btn-text">View My Work</span>
                            </a>
                            <a href="#contact" className="btn btn-outline" data-text="Contact Me" onClick={createRipple} onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} onMouseEnter={handleBtnMouseEnter}>
                                <span className="btn-text">Contact Me</span>
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="social-links">
                            <a href="#" className="social-icon" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Code Editor */}
                    <div className="hero-visual fade-up is-visible" style={{ transitionDelay: '0.2s' }}>
                        <div className="code-window-wrapper" id="code-window-tilt" ref={codeWindowRef}>
                            <div className="code-window">
                                <div className="code-header">
                                    <div className="mac-dot red"></div>
                                    <div className="mac-dot yellow"></div>
                                    <div className="mac-dot green"></div>
                                </div>
                                <div className="code-body">
<pre style={{ margin: 0 }}><code dangerouslySetInnerHTML={{ __html: `<span class="token-keyword">const</span> <span class="token-property">developer</span> = {
  <span class="token-property">name</span>: <span class="token-string">'Raihan Hamdani'</span>,
  <span class="token-property">roles</span>: [<span class="token-string">'Fullstack Programmer'</span>, <span class="token-string">'Advertiser'</span>],
  <span class="token-property">skills</span>: [
    <span class="token-string">'Laravel'</span>, <span class="token-string">'Go'</span>, 
    <span class="token-string">'React'</span>, <span class="token-string">'Data Analyst'</span>
  ],
  <span class="token-property">status</span>: <span class="token-boolean">true</span>, <span class="token-comment">// Ready to hire</span>
  <span class="token-property">hardWorker</span>: <span class="token-boolean">true</span>,
  <span class="token-property">creative</span>: <span class="token-boolean">true</span>
};

<span class="token-keyword">function</span> <span class="token-property">hireMe</span>() {
  <span class="token-keyword">return</span> <span class="token-string">"Let's build something amazing!"</span>;
}` }}></code></pre>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
