import React from 'react';

const Contact = () => {
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
        <section id="contact">
            <div className="container fade-up">
                <span className="mono-tag" style={{ marginBottom: '16px' }}>03. What's Next?</span>
                <h2 className="section-title" style={{ justifyContent: 'center', marginBottom: '24px' }}>Get In Touch</h2>
                <div className="contact-content">
                    <p>Whether you have a question, a strategic proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you.</p>
                    <a href="mailto:hello@raihanhamdani.dev" className="btn btn-primary" style={{ fontSize: '1.1rem' }} data-text="Say Hello" onClick={createRipple} onMouseMove={handleBtnMouseMove} onMouseLeave={handleBtnMouseLeave} onMouseEnter={handleBtnMouseEnter}>
                        <span className="btn-text">Say Hello</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
