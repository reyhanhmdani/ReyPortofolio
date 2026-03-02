import React from 'react';

const About = () => {
    // Ripple effect logic
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
        <section id="about">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="mono-tag">01. Background</span>
                    <h2 className="section-title">About Me</h2>
                </div>
                
                <div style={{ maxWidth: '800px' }} className="fade-up">
                    <p style={{ fontSize: '1.125rem', color: 'var(--taupe-accent)', marginBottom: '24px', lineHeight: '1.8' }}>
                        I am a Software Developer specializing in the <strong style={{ color: 'var(--gold-cta)', fontWeight: '600' }}>Laravel</strong> and <strong style={{ color: 'var(--gold-cta)', fontWeight: '600' }}>Go</strong> ecosystems, bridging fundamental engineering principles with <strong style={{ color: 'var(--gold-cta)', fontWeight: '600' }}>AI-driven development</strong>.
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--taupe-accent)', marginBottom: '24px', lineHeight: '1.8' }}>
                        With 3 years of experience architecting scalable backends and crafting modern interfaces using <strong style={{ color: 'var(--gold-cta)', fontWeight: '600' }}>Tailwind CSS</strong>, I actively leverage Artificial Intelligence to accelerate code delivery, solve complex problems, and optimize workflows.
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--taupe-accent)', marginBottom: '32px', lineHeight: '1.8' }}>
                        As an enthusiastic lifelong learner, I am constantly exploring emerging technologies and remain highly committed to delivering digital products that are stable, maintainable, and market-fit.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                        <a href="https://github.com/reyhanhmdani" target="_blank" rel="noreferrer" className="btn btn-primary" data-text="View My Work" onClick={createRipple} onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} onMouseEnter={handleBtnMouseEnter}>
                            <span className="btn-text">View My Work</span>
                        </a>
                        <a href="#contact" className="btn btn-outline" data-text="Get In Touch" onClick={createRipple} onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} onMouseEnter={handleBtnMouseEnter}>
                            <span className="btn-text">Get In Touch</span>
                        </a>
                    </div>
                </div>

                <div className="skills-grid fade-up" style={{ transitionDelay: '0.2s' }}>
                    <div className="skill-card">PHP / Laravel</div>
                    <div className="skill-card">JavaScript / ES6+</div>
                    <div className="skill-card">React.js</div>
                    <div className="skill-card">MySQL / Postgre</div>
                    <div className="skill-card">Docker</div>
                    <div className="skill-card">AI Engineering</div>
                    <div className="skill-card">Go</div>
                    <div className="skill-card">Performance Ads</div>
                </div>

                <div className="experience-list fade-up" style={{ marginTop: '60px', transitionDelay: '0.3s' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--stone-dark)', marginBottom: '24px' }}>Experience Highlights</h3>
                    
                    <div className="experience-item">
                        <div className="exp-meta">Digital Marketing & Ads</div>
                        <div>
                            <div className="exp-role">Performance Ads Strategist</div>
                            <div className="exp-desc">Managed performance marketing campaigns and product growth for <strong>Detcha</strong> and <strong>Arinna</strong>. Leveraged analytical thinking to optimize ad spend, track conversions, and drive market penetration.</div>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="exp-meta">Engineering & Data</div>
                        <div>
                            <div className="exp-role">Software Engineer & Data Analyst</div>
                            <div className="exp-desc">Engineered robust software solutions and leveraged data analytics for <strong>Ayobuatbaik</strong> and <strong>DKM Masjid Salam Selfa</strong>. Focused on optimizing community platforms, automating workflows, and processing operational data.</div>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="exp-meta">Internship</div>
                        <div>
                            <div className="exp-role">B_erl Cosmetics</div>
                            <div className="exp-desc">Gained foundational industry experience in a fast-paced cosmetic brand environment. Developed an understanding of product lifecycles, branding, and consumer engagement strategies.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
