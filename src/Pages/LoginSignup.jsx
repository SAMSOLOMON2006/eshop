
import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication API will be connected later.
    };

    return (
        <div className="loginsignup">

            {/* Left Welcome Section */}
            <div className="auth-welcome">
                <div className="auth-brand">
                    <span className="auth-brand-icon">L&S</span>
                    <span>LOUIS & SONS</span>
                </div>

                <div className="auth-welcome-content">
                    <p className="auth-eyebrow">
                        THE ART OF EVERYDAY STYLE
                    </p>

                    <h1>
                        Style that
                        <br />
                        speaks <span>you.</span>
                    </h1>

                    <p className="auth-description">
                        Discover your style. Explore collections
                        made for every moment, every mood and
                        everyone.
                    </p>

                    <div className="auth-decoration">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <p className="auth-footer">
                    © 2026 Louis & Sons. ALL RIGHTS RESERVED.
                </p>
            </div>

            {/* Right Authentication Section */}
            <div className="auth-form-section">
                <div className="auth-card">

                    <div className="auth-card-heading">
                        <p className="auth-eyebrow">
                            {isLogin ? 'WELCOME BACK' : 'JOIN THE COMMUNITY'}
                        </p>

                        <h2>
                            {isLogin ? 'Welcome back.' : 'Create an account.'}
                        </h2>

                        <p>
                            {isLogin
                                ? 'Sign in to continue your shopping journey.'
                                : 'Your next favourite look starts here.'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        {!isLogin && (
                            <div className="auth-input-group">
                                <label htmlFor="auth-name">Full Name</label>
                                <input
                                    id="auth-name"
                                    type="text"
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    required
                                />
                            </div>
                        )}

                        <div className="auth-input-group">
                            <label htmlFor="auth-email">Email Address</label>
                            <input
                                id="auth-email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="auth-input-group">
                            <label htmlFor="auth-password">Password</label>
                            <input
                                id="auth-password"
                                type="password"
                                placeholder="Enter your password"
                                autoComplete={
                                    isLogin ? 'current-password' : 'new-password'
                                }
                                minLength={6}
                                required
                            />
                        </div>

                        {isLogin && (
                            <div className="auth-forgot">
                                <a href="#forgot-password">
                                    Forgot password?
                                </a>
                            </div>
                        )}

                        {!isLogin && (
                            <label className="auth-agree">
                                <input type="checkbox" required />
                                <span>
                                    I agree to the Terms of Service and
                                    Privacy Policy.
                                </span>
                            </label>
                        )}

                        <button type="submit" className="auth-submit">
                            {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
                            <span>→</span>
                        </button>

                    </form>

                    <div className="auth-divider">
                        <span>OR CONTINUE WITH EMAIL</span>
                    </div>

                    <div className="auth-switch">
                        <p>
                            {isLogin
                                ? "Don't have an account?"
                                : 'Already have an account?'}
                        </p>

                        <button
                            type="button"
                            onClick={() => setIsLogin(!isLogin)}
                        >
                            {isLogin ? 'Create account' : 'Login here'}
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LoginSignup;
