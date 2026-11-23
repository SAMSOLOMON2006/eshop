
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import hero_image from '../assets/hero_image.png';
import arrow_icon from '../assets/arrow.png';

import './Hero.css';

const phrases = [
    'redefined.',
    'effortless.',
    'timeless.',
    'unique.'
];

const Hero = () => {

    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // CONTINUOUS TYPEWRITER ANIMATION
    useEffect(() => {

        const currentPhrase = phrases[phraseIndex];

        let delay = deleting ? 55 : 105;

        if (!deleting && text === currentPhrase) {
            delay = 1600;
        }

        if (deleting && text === '') {
            delay = 350;
        }

        const timer = setTimeout(() => {

            if (!deleting && text !== currentPhrase) {

                setText(currentPhrase.substring(0, text.length + 1));

            } else if (!deleting && text === currentPhrase) {

                setDeleting(true);

            } else if (deleting && text !== '') {

                setText(currentPhrase.substring(0, text.length - 1));

            } else {

                setDeleting(false);

                setPhraseIndex(
                    (prev) => (prev + 1) % phrases.length
                );

            }

        }, delay);

        return () => clearTimeout(timer);

    }, [text, deleting, phraseIndex]);


    return (
        <section className="hero">

            {/* LEFT CONTENT */}
            <div className="hero-left">

                <span className="hero-eyebrow">
                    THE NEW SEASON COLLECTION — 2026
                </span>

                <h1 className="hero-title">

                    Everyday

                    <br />

                    style, <span className="hero-typing">
                        {text}
                    </span>

                </h1>

                <p className="hero-description">
                    Discover timeless essentials and contemporary
                    fashion designed to make every moment yours.
                </p>

                {/* BUTTONS */}
                <div className="hero-actions">

                    <Link to="/mens" className="hero-latest-btn">

                        EXPLORE COLLECTION

                        <img src={arrow_icon} alt="" />

                    </Link>

                    <span className="hero-caption">
                        NEW ARRIVALS / 01
                    </span>

                </div>

                {/* BOTTOM DETAILS */}
                <div className="hero-bottom">

                    <span>01 — 03</span>

                    <span className="hero-bottom-line"></span>

                    <span>CURATED FOR EVERYONE</span>

                </div>

            </div>


            {/* RIGHT IMAGE */}
            <div className="hero-right">

                <div className="hero-image-container">

                    <img
                        src={hero_image}
                        alt="Louis and Sons latest fashion collection"
                        className="hero-main-image"
                    />

                </div>

                <div className="hero-image-label">

                    <span>Louis &amp; Sons</span>

                    <span>EST. 2026</span>

                </div>

            </div>

        </section>
    );
};

export default Hero;
