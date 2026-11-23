
import React, { useEffect, useRef } from 'react'
import './Footer.css'

import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {
    const footerRef = useRef(null)

    useEffect(() => {
        const footer = footerRef.current
        if (!footer) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                footer.classList.toggle('footer-visible', entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        observer.observe(footer)

        return () => observer.disconnect()
    }, [])

    return (
        <footer className="footer" ref={footerRef}>

            <div className="footer-top">

                <div className="footer-brand" data-footer-reveal>
                    <div className="footer-logo">
                        <img src={footer_logo} alt="Louis and Sons logo" />
                        <span>Louis &amp; Sons</span>
                    </div>

                    <h2 className="footer-tagline">
                        Style that speaks.
                        <br />
                        Elegance that lasts.
                    </h2>

                    <p className="footer-description">
                        Discover thoughtfully selected styles that bring
                        confidence, comfort and character to every day.
                    </p>
                </div>

                <div className="footer-navigation" data-footer-reveal>
                    <h3>EXPLORE</h3>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/mens">Men</a></li>
                        <li><a href="/womens">Women</a></li>
                        <li><a href="/kids">Kids</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-connect" data-footer-reveal>
                    <h3>LET'S CONNECT</h3>

                    <p>Follow our journey and stay inspired.</p>

                    <div className="footer-social-icon">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="footer-icons-container"
                        >
                            <img src={instagram_icon} alt="" />
                        </a>

                        <a
                            href="https://www.pinterest.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Pinterest"
                            className="footer-icons-container"
                        >
                            <img src={pintester_icon} alt="" />
                        </a>

                        <a
                            href="https://www.whatsapp.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="footer-icons-container"
                        >
                            <img src={whatsapp_icon} alt="" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-middle" data-footer-reveal>
                <span>Louis &amp; Sons</span>
                <div className="footer-middle-line"></div>
                <span>EST. WITH STYLE</span>
            </div>

            <div className="footer-bottom">
                <p>© 2026 LOUIS &amp; SONS. All rights reserved.</p>

                <div className="footer-bottom-links">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms">Terms &amp; Conditions</a>
                </div>

                <p className="footer-made">Made with care.</p>
            </div>

        </footer>
    )
}

export default Footer
