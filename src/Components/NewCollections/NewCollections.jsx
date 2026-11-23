
import React, { useEffect, useRef } from 'react';

import './NewCollections.css';

import Item from '../Items/Item';
import new_collection from '../assets/new_collections';

const NewCollections = () => {

    const collectionsRef = useRef(null);

    useEffect(() => {

        const section = collectionsRef.current;

        if (!section) return;

        const elements = section.querySelectorAll(
            '[data-collection-reveal]'
        );

        if (!('IntersectionObserver' in window)) {
            elements.forEach(element => {
                element.classList.add('collection-visible');
            });
            return;
        }

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'collection-visible'
                        );

                    } else {

                        entry.target.classList.remove(
                            'collection-visible'
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }

        );

        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();

    }, []);

    return (

        <section className="new-collections" ref={collectionsRef}>

            {/* SECTION HEADER */}

            <div className="collections-header">

                <span
                    className="collections-eyebrow"
                    data-collection-reveal
                >
                    THE LATEST EDITION
                </span>

                <h1 data-collection-reveal>
                    NEW <span>COLLECTIONS</span>
                </h1>

                <div
                    className="collections-heading-line"
                    data-collection-reveal
                ></div>

                <p data-collection-reveal>
                    Explore our latest arrivals, curated to bring
                    effortless style into your everyday wardrobe.
                </p>

            </div>

            {/* PRODUCT GRID */}

            <div className="collections">

                {new_collection.map((item, i) => (

                    <div
                        className="collection-card"
                        data-collection-reveal
                        key={item.id || i}
                        style={{
                            '--collection-delay': `${i * 100}ms`
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
                className="collections-footer"
                data-collection-reveal
            >

                <span>LOUIS &amp; SONS</span>

                <span className="collections-footer-line"></span>

                <span>THE NEW SEASON EDIT</span>

            </div>

        </section>

    );
};

export default NewCollections;
