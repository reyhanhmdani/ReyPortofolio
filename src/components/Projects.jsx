import React from 'react';

/**
 * Optimized project image with AVIF → WebP → PNG progressive fallback.
 * Browser automatically picks the best supported format (smallest file).
 */
const ProjectImage = ({ baseName, alt, className, dataSpeed }) => (
    <picture>
        <source srcSet={`image/${baseName}.avif`} type="image/avif" />
        <source srcSet={`image/${baseName}.webp`} type="image/webp" />
        <img
            src={`image/${baseName}.png`}
            alt={alt}
            className={className}
            data-speed={dataSpeed}
            loading="lazy"
            decoding="async"
        />
    </picture>
);

const projects = [
    {
        num: '01',
        title: 'Ayobuatbaik.com',
        tech: 'Laravel — Tailwind',
        desc: 'A trusted online donation platform supporting various social and humanitarian programs.',
        url: 'https://ayobuatbaik.com',
        image: 'Porto1',
    },
    {
        num: '02',
        title: 'Andreraditya.guru',
        tech: 'Laravel — Tailwind',
        desc: 'An Islamic educational portal and advice platform featuring articles and interactive Q&A sessions.',
        url: 'https://andreraditya.guru',
        image: 'andreradityaguru',
    },
    {
        num: '03',
        title: 'Selfa.sch.id',
        tech: 'Laravel — Tailwind',
        desc: 'A modern and interactive website engineered for the Selfa Islamic School in Klaten, Indonesia.',
        url: 'https://selfa.sch.id',
        image: 'porto-selfa',
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <div className="container">
                <div className="section-header fade-up" style={{ marginBottom: '80px' }}>
                    <span className="mono-tag" style={{ marginBottom: '24px' }}>02. Selected Works</span>
                    <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', letterSpacing: '-0.04em' }}>Featured<br/><span style={{ color: 'var(--taupe-accent)' }}>Projects.</span></h2>
                </div>

                <div className="editorial-list">
                    {projects.map((project) => (
                        <article key={project.num} className="editorial-project fade-up">
                            <div className="editorial-info">
                                <span className="editorial-num">{project.num}</span>
                                <h3 className="editorial-title">{project.title}</h3>
                                <div className="editorial-tech">{project.tech}</div>
                                <p className="editorial-desc">{project.desc}</p>
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="editorial-link">
                                    Visit Website 
                                    <svg viewBox="0 0 24 24" fill="none" className="icon" stroke="currentColor" strokeWidth="1.5"><path d="M7 17l9.2-9.2M17 16.5V7H7.5"/></svg>
                                </a>
                            </div>
                            <div className="editorial-visual" onClick={() => window.open(project.url, '_blank')}>
                                <ProjectImage
                                    baseName={project.image}
                                    alt={project.title}
                                    className="parallax"
                                    dataSpeed="0.05"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

