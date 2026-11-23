
import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Shop', path: '/', id: 'shop' },
        { name: 'Men', path: '/mens', id: 'mens' },
        { name: 'Women', path: '/womens', id: 'womens' },
        { name: 'Kids', path: '/kids', id: 'kids' }
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">

            {/* BRAND */}
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <img src={logo} alt="Louis & Sons" />
                <span>Louis &amp; Sons</span>
            </Link>

            {/* NAVIGATION */}
            <nav className={`nav-menu ${menuOpen ? 'nav-menu-active' : ''}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.path}
                        onClick={closeMenu}
                        className={
                            location.pathname === link.path ? 'active' : ''
                        }
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* RIGHT SIDE ACTIONS */}
            <div className="nav-right">

                {/* SEARCH */}
                <form
                    className="nav-search"
                    onSubmit={(e) => e.preventDefault()}
                    role="search"
                >
                    <input
                        type="search"
                        placeholder="Search..."
                        aria-label="Search products"
                    />

                    <button type="submit" aria-label="Search">
                        <svg viewBox="0 0 24 24" fill="none">
                            <defs>
                                <linearGradient id="searchGradient">
                                    <stop offset="0%" stopColor="#292929">
                                        <animate
                                            attributeName="stop-color"
                                            values="#292929;#929B70;#C6A96B;#292929"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </stop>
                                    <stop offset="100%" stopColor="#929B70">
                                        <animate
                                            attributeName="stop-color"
                                            values="#929B70;#C6A96B;#292929;#929B70"
                                            dur="5s"
                                            repeatCount="indefinite"
                                        />
                                    </stop>
                                </linearGradient>
                            </defs>

                            <circle
                                cx="10.8"
                                cy="10.8"
                                r="6.8"
                                stroke="url(#searchGradient)"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M16 16L21 21"
                                stroke="url(#searchGradient)"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </form>

                {/* ACCOUNT */}
                <Link
                    to="/login"
                    className="nav-account"
                    aria-label="My account"
                    onClick={closeMenu}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <defs>
                            <linearGradient id="accountGradient">
                                <stop offset="0%" stopColor="#292929">
                                    <animate
                                        attributeName="stop-color"
                                        values="#292929;#929B70;#C6A96B;#292929"
                                        dur="5s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="100%" stopColor="#929B70">
                                    <animate
                                        attributeName="stop-color"
                                        values="#929B70;#C6A96B;#292929;#929B70"
                                        dur="5s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                            </linearGradient>
                        </defs>

                        <circle
                            cx="12"
                            cy="7.5"
                            r="4"
                            stroke="url(#accountGradient)"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M4.5 21V19.5C4.5 15.9 7.4 13 11 13H13C16.6 13 19.5 15.9 19.5 19.5V21"
                            stroke="url(#accountGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </Link>

                {/* CART */}
                <Link
                    to="/cart"
                    className="nav-cart"
                    aria-label={`Shopping cart with ${getTotalCartItems()} items`}
                    onClick={closeMenu}
                >
                    <svg viewBox="0 0 24 24" fill="none">
                        <defs>
                            <linearGradient id="cartGradient">
                                <stop offset="0%" stopColor="#292929">
                                    <animate
                                        attributeName="stop-color"
                                        values="#292929;#929B70;#C6A96B;#292929"
                                        dur="5s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                                <stop offset="100%" stopColor="#929B70">
                                    <animate
                                        attributeName="stop-color"
                                        values="#929B70;#C6A96B;#292929;#929B70"
                                        dur="5s"
                                        repeatCount="indefinite"
                                    />
                                </stop>
                            </linearGradient>
                        </defs>

                        <path
                            d="M2 3H4L6.5 15.5C6.7 16.4 7.5 17 8.4 17H18"
                            stroke="url(#cartGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 7H21L19 14H7"
                            stroke="url(#cartGradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle
                            cx="9"
                            cy="20"
                            r="1.3"
                            fill="url(#cartGradient)"
                        />
                        <circle
                            cx="18"
                            cy="20"
                            r="1.3"
                            fill="url(#cartGradient)"
                        />
                    </svg>

                    <span className="nav-cart-count">
                        {getTotalCartItems()}
                    </span>
                </Link>

            </div>

            {/* MOBILE MENU */}
            <button
                className={`nav-toggle ${menuOpen ? 'nav-toggle-open' : ''}`}
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </header>
    );
};

export default Navbar;
