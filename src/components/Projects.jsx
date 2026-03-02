import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-header fade-up" style={{ marginBottom: '80px' }}>
                    <span className="mono-tag" style={{ marginBottom: '24px' }}>02. Selected Works</span>
                    <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>Featured<br/><span style={{ color: 'var(--taupe-accent)' }}>Projects.</span></h2>
                </div>

                <div className="editorial-list">
                    {/* Project 1 */}
                    <article className="editorial-project fade-up">
                        <div className="editorial-info">
                            <span className="editorial-num">01</span>
                            <h3 className="editorial-title">Ayobuatbaik.com</h3>
                            <div className="editorial-tech">Laravel <span>&mdash;</span> Tailwind</div>
                            <p className="editorial-desc">A trusted online donation platform supporting various social and humanitarian programs.</p>
                            <a href="https://ayobuatbaik.com" target="_blank" rel="noopener noreferrer" className="editorial-link">
                                Visit Website 
                                <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth="1.5"><path d="M7 17l9.2-9.2M17 16.5V7H7.5"/></svg>
                            </a>
                        </div>
                        <div className="editorial-visual" onClick={() => window.open('https://ayobuatbaik.com', '_blank')}>
                            <img src="image/Porto1.png" alt="Ayobuatbaik.com" className="parallax" data-speed="0.05" />
                        </div>
                    </article>

                    {/* Project 2 */}
                    <article className="editorial-project fade-up">
                        <div className="editorial-info">
                            <span className="editorial-num">02</span>
                            <h3 className="editorial-title">Andreraditya.guru</h3>
                            <div className="editorial-tech">Laravel <span>&mdash;</span> Tailwind</div>
                            <p className="editorial-desc">An Islamic educational portal and advice platform featuring articles and interactive Q&A sessions.</p>
                            <a href="https://andreraditya.guru" target="_blank" rel="noopener noreferrer" className="editorial-link">
                                Visit Website 
                                <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth="1.5"><path d="M7 17l9.2-9.2M17 16.5V7H7.5"/></svg>
                            </a>
                        </div>
                        <div className="editorial-visual" onClick={() => window.open('https://andreraditya.guru', '_blank')}>
                            <img src="image/andreradityaguru.png" alt="Andreraditya.guru" className="parallax" data-speed="0.05" />
                        </div>
                    </article>

                    {/* Project 3 */}
                    <article className="editorial-project fade-up">
                        <div className="editorial-info">
                            <span className="editorial-num">03</span>
                            <h3 className="editorial-title">Selfa.sch.id</h3>
                            <div className="editorial-tech">Laravel <span>&mdash;</span> Tailwind</div>
                            <p className="editorial-desc">A modern and interactive website engineered for the Selfa Islamic School in Klaten, Indonesia.</p>
                            <a href="https://selfa.sch.id" target="_blank" rel="noopener noreferrer" className="editorial-link">
                                Visit Website 
                                <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth="1.5"><path d="M7 17l9.2-9.2M17 16.5V7H7.5"/></svg>
                            </a>
                        </div>
                        <div className="editorial-visual" onClick={() => window.open('https://selfa.sch.id', '_blank')}>
                            <img src="image/porto-selfa.png" alt="Selfa.sch.id" className="parallax" data-speed="0.05" />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
