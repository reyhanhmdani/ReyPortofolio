import React from 'react';

const TechMarquee = () => {
    return (
        <section className="tech-marquee-section" aria-label="Technology Stack">
            <div className="marquee-track">
                {/* Group 1 */}
                <div className="marquee-group">
                    <i className="fa-brands fa-react" title="React"></i>
                    <i className="fa-brands fa-js" title="JavaScript"></i>
                    <i className="fa-brands fa-golang" title="Go"></i>
                    <i className="fa-brands fa-html5" title="HTML5"></i>
                    <i className="fa-brands fa-css3-alt" title="CSS3"></i>
                    <i className="fa-brands fa-php" title="PHP"></i>
                    <svg className="custom-svg-icon" viewBox="0 0 24 24" fill="currentColor" title="Tailwind CSS">
                        <path d="M12.001,4.8c-3.208,0-5.245,1.6-6.112,4.8c1.333-2.667,3.333-3.044,6-1.133 c1.261,0.903,2.155,1.538,3.447,1.538c3.208,0,5.245-1.6,6.112-4.8c-1.333,2.667-3.333,3.044-6,1.133 C14.187,5.435,13.292,4.8,12.001,4.8z M5.889,14.4c-3.208,0-5.245,1.6-6.112,4.8c1.333-2.667,3.333-3.044,6-1.133 c1.261,0.903,2.155,1.538,3.447,1.538c3.208,0,5.245-1.6,6.112-4.8c-1.333,2.667-3.333,3.044-6,1.133 C8.075,15.035,7.181,14.4,5.889,14.4z"/>
                    </svg>
                    <i className="fa-brands fa-laravel" title="Laravel"></i>
                </div>
                {/* Group 2 (Duplicate for infinite loop) */}
                <div className="marquee-group" aria-hidden="true">
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-golang"></i>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-php"></i>
                    <svg className="custom-svg-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.001,4.8c-3.208,0-5.245,1.6-6.112,4.8c1.333-2.667,3.333-3.044,6-1.133 c1.261,0.903,2.155,1.538,3.447,1.538c3.208,0,5.245-1.6,6.112-4.8c-1.333,2.667-3.333,3.044-6,1.133 C14.187,5.435,13.292,4.8,12.001,4.8z M5.889,14.4c-3.208,0-5.245,1.6-6.112,4.8c1.333-2.667,3.333-3.044,6-1.133 c1.261,0.903,2.155,1.538,3.447,1.538c3.208,0,5.245-1.6,6.112-4.8c-1.333,2.667-3.333,3.044-6,1.133 C8.075,15.035,7.181,14.4,5.889,14.4z"/>
                    </svg>
                    <i className="fa-brands fa-laravel"></i>
                </div>
            </div>
        </section>
    );
};

export default TechMarquee;
