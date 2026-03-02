import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHidden(true);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="loader" className={hidden ? 'hidden' : ''}>
            <div className="loader-text"><span>RAIHAN HAMDANI</span></div>
        </div>
    );
};

export default Loader;
