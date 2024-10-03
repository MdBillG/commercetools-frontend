'use client'
import { Facebook, Mail, Linkedin } from 'lucide-react';
import './SignInUpForm.css';
import { useState } from 'react'

const SignInUp = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const toggleRightPanel = () => {
        setIsRightPanelActive(!isRightPanelActive);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-sm mb-4">or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="mt-4">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="text-sm mb-4">or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#" className="text-sm mb-4">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                            <p className="mb-4">To keep connected with us please login with your personal info</p>
                            <button className="ghost" onClick={toggleRightPanel}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                            <p className="mb-4">Enter your personal details and start journey with us</p>
                            <button className="ghost" onClick={toggleRightPanel}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInUp