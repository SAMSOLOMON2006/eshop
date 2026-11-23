
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Offers.css';
import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {

    const offersRef = useRef(null);

    useEffect(() => {

        const section = offersRef.current;

        if (!section) return;

        const elements = section.querySelectorAll('[data-offer-reveal]');

        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => {
                element.classList.add('offer-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('offer-visible');
                    } else {
                        entry.target.classList.remove('offer-visible');
                    }

                });

            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();

    }, []);

    return (

        <section className="offers" ref={offersRef}>

            {/* LEFT CONTENT */}
            <div className="offers-left">

                <span
                    className="offers-eyebrow"
                    data-offer-reveal
                >
                    LIMITED TIME COLLECTION
                </span>

                <h1 data-offer-reveal>
                    Exclusive
                    <br />
                    Offers <span>for you.</span>
                </h1>

                <div
                    className="offers-line"
                    data-offer-reveal
                ></div>

                <p data-offer-reveal>
                    ONLY ON BEST SELLERS PRODUCTS
                </p>

                <Link
                    to="/mens"
                    className="offers-button"
                    data-offer-reveal
                >
                    CHECK NOW
                    <span className="offers-arrow">→</span>
                </Link>

                <span
                    className="offers-caption"
                    data-offer-reveal
                >
                    LOUIS &amp; SONS — EXCLUSIVE SELECTION
                </span>

            </div>

            {/* RIGHT IMAGE */}
            <div
                className="offers-right"
                data-offer-reveal
            >

                <div className="offers-image-container">

                    <img
                        src={exclusive_image}
                        alt="Louis and Sons exclusive fashion collection"
                        className="offers-image"
                        loading="lazy"
                    />

                </div>

                <div className="offers-image-label">
                    <span>EXCLUSIVE EDITION</span>
                    <span>2026</span>
                </div>

            </div>

        </section>

    );
};

export default Offers;
