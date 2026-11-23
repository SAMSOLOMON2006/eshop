
import React, { useEffect, useRef } from 'react';
import './Popular.css';

import data_product from '../assets/data';
import Item from '../Items/Item';

const Popular = () => {

    const popularRef = useRef(null);

    useEffect(() => {

        const section = popularRef.current;

        if (!section) return;

        const elements = section.querySelectorAll('[data-scroll-reveal]');

        // Fallback for browsers without IntersectionObserver
        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => {
                element.classList.add('is-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    } else {
                        // Remove animation class when leaving viewport.
                        // This allows animation to replay on re-entry.
                        entry.target.classList.remove('is-visible');
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        elements.forEach(element => observer.observe(element));

        return () => {
            observer.disconnect();
        };

    }, []);

    return (
        <section className="popular" ref={popularRef}>

            {/* SECTION HEADER */}
            <div className="popular-header">

                <span
                    className="popular-eyebrow scroll-reveal"
                    data-scroll-reveal
                >
                    CURATED FOR YOU
                </span>

                <h1
                    className="scroll-reveal"
                    data-scroll-reveal
                >
                    POPULAR IN <span>WOMEN</span>
                </h1>

                <div
                    className="popular-heading-line scroll-reveal"
                    data-scroll-reveal
                ></div>

                <p
                    className="scroll-reveal"
                    data-scroll-reveal
                >
                    Discover the pieces everyone is loving this season.
                    Timeless styles, thoughtfully selected for you.
                </p>

            </div>

            {/* PRODUCT GRID */}
            <div className="popular-item">

                {data_product.map((item, i) => (

                    <div
                        className="popular-card scroll-reveal"
                        data-scroll-reveal
                        key={item.id || i}
                        style={{
                            '--reveal-delay': `${i * 120}ms`
                        }}
                    >
                        <Item
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>

                ))}

            </div>

            {/* SECTION FOOTER */}
            <div
                className="popular-footer scroll-reveal"
                data-scroll-reveal
            >
                <span>LOUIS & SONS</span>
                <span className="popular-footer-line"></span>
                <span>THOUGHTFULLY SELECTED</span>
            </div>

        </section>
    );
};

export default Popular;
