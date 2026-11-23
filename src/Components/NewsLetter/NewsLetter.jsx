
import React, { useEffect, useRef, useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {

    const newsletterRef = useRef(null);
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    // SCROLL REVEAL ANIMATION
    useEffect(() => {

        const section = newsletterRef.current;

        if (!section) return;

        const elements = section.querySelectorAll('[data-newsletter-reveal]');

        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => {
                element.classList.add('newsletter-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('newsletter-visible');
                    } else {
                        entry.target.classList.remove('newsletter-visible');
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();

    }, []);

    // EMAIL SUBMISSION
    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email.trim()) return;

        setSubscribed(true);
    };

    return (

        <section className="newsletter" ref={newsletterRef}>

            {/* DECORATIVE BACKGROUND */}
            <div className="newsletter-decoration newsletter-decoration-one"></div>
            <div className="newsletter-decoration newsletter-decoration-two"></div>

            {/* CONTENT */}
            <div className="newsletter-content">

                <span
                    className="newsletter-eyebrow"
                    data-newsletter-reveal
                >
                    THE LOUIS & SONS JOURNAL
                </span>

                <h1 data-newsletter-reveal>
                    A little more <span>style.</span>
                    <br />
                    A lot more inspiration.
                </h1>

                <p data-newsletter-reveal>
                    Subscribe to our newsletter for exclusive offers,
                    new arrivals and a little inspiration delivered
                    straight to your inbox.
                </p>

                {/* SUBSCRIPTION FORM */}
                <form
                    className="newsletter-form"
                    onSubmit={handleSubscribe}
                    data-newsletter-reveal
                >

                    <div className="newsletter-input-wrapper">

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            aria-label="Your email address"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setSubscribed(false);
                            }}
                            required
                        />

                        <button
                            type="submit"
                            className="newsletter-button"
                        >
                            {subscribed ? 'THANK YOU!' : 'SUBSCRIBE'}
                            <span>→</span>
                        </button>

                    </div>

                </form>

                <span
                    className="newsletter-note"
                    data-newsletter-reveal
                >
                    NO SPAM. JUST GOOD STYLE. UNSUBSCRIBE ANYTIME.
                </span>

            </div>

            {/* BOTTOM LABEL */}
            <div
                className="newsletter-footer"
                data-newsletter-reveal
            >
                <span>LOUIS &amp; SONS</span>
                <span className="newsletter-footer-line"></span>
                <span>STAY INSPIRED</span>
            </div>

        </section>

    );
};

export default NewsLetter;
