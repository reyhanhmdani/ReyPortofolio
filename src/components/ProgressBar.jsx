import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrolled, setScrolled] = useState('0%');

    const handleScroll = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = `${(scrollPx / winHeightPx) * 100}%`;
        setScrolled(scrollPercent);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="progress-bar" style={{ width: scrolled }}></div>
    );
};

export default ProgressBar;
