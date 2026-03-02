import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [theme, setThemeState] = useState('system');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getSystemTheme = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (mode) => {
        const actualTheme = mode === 'system' ? getSystemTheme() : mode;
        document.documentElement.setAttribute('data-theme', actualTheme);
        setThemeState(mode);
        localStorage.setItem('theme-preference', mode);
    };

    useEffect(() => {
        const saved = localStorage.getItem('theme-preference');
        setTheme(saved || 'system');

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            const current = localStorage.getItem('theme-preference');
            if (current === 'system') {
                setTheme('system');
            }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${navOpen ? 'nav-open' : ''}`}>
            <div className="container nav-inner">
                <div className="logo">Rey<span>.</span></div>
                <div className="nav-right">
                    {/* Theme Toggle */}
                    <div className="theme-toggle" id="theme-toggle" data-active={theme} aria-label="Theme Toggle">
                        <div className="theme-toggle__indicator"></div>
                        <button 
                            className={`theme-toggle__btn ${theme === 'light' ? 'active' : ''}`} 
                            onClick={() => setTheme('light')} 
                            aria-label="Light mode"
                        >
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                        </button>
                        <button 
                            className={`theme-toggle__btn ${theme === 'system' ? 'active' : ''}`} 
                            onClick={() => setTheme('system')} 
                            aria-label="System mode"
                        >
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                        </button>
                        <button 
                            className={`theme-toggle__btn ${theme === 'dark' ? 'active' : ''}`} 
                            onClick={() => setTheme('dark')} 
                            aria-label="Dark mode"
                        >
                            <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                        </button>
                    </div>
                    
                    <div className="nav-links" id="nav-links">
                        <a href="#about" onClick={() => setNavOpen(false)}>About</a>
                        <a href="#projects" onClick={() => setNavOpen(false)}>Work</a>
                        <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
                    </div>
                    
                    <button 
                        className="mobile-toggle" 
                        id="mobile-toggle" 
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label="Toggle Menu"
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
