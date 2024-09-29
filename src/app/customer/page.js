'use client'
import React, { useState } from 'react';
// import { Facebook, Mail, Linkedin } from 'lucide-react';

// const SlideSignInUpForm = () => {
//     const [isSignUp, setIsSignUp] = useState(false);

//     const toggleMode = () => {
//         setIsSignUp(!isSignUp);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-[#f6f5f7] font-[Montserrat] m-[-20px_0_50px]">
//             <div className="bg-white rounded-[10px] shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] relative overflow-hidden w-[768px] max-w-full min-h-[480px]">
//                 <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${isSignUp ? 'translate-x-[100%]' : 'translate-x-0'} left-0 w-1/2`}>
//                     <form className="bg-white flex items-center justify-center flex-col px-[50px] h-full text-center">
//                         <h1 className="font-bold m-0 mb-5">Sign In</h1>
//                         <div className="social-container my-5">
//                             <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Facebook size={16} /></a>
//                             <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Mail size={16} /></a>
//                             <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Linkedin size={16} /></a>
//                         </div>
//                         <span className="text-xs mb-5">or use your account</span>
//                         <input type="email" placeholder="Email" className="bg-[#eee] border-none p-3 my-2 w-full" />
//                         <input type="password" placeholder="Password" className="bg-[#eee] border-none p-3 my-2 w-full" />
//                         <a href="#" className="text-sm my-4">Forgot your password?</a>
//                         <button className="rounded-[20px] border border-solid border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-[45px] uppercase tracking-[1px] transition-transform duration-80 ease-in mt-4">Sign In</button>
//                     </form>
//                 </div>
//                 <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out ${isSignUp ? 'translate-x-[0%]' : 'translate-x-[100%]'} left-0 w-1/2`}>
//                     <form className="bg-white flex items-center justify-center flex-col px-[50px] h-full text-center">
//                         <h1 className="font-bold m-0 mb-5">Create Account</h1>
// <div className="social-container my-5">
//     <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Facebook size={16} /></a>
//     <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Mail size={16} /></a>
//     <a href="#" className="social border border-solid border-[#DDDDDD] rounded-full inline-flex justify-center items-center m-[0_5px] h-10 w-10"><Linkedin size={16} /></a>
// </div>
//                         <span className="text-xs mb-5">or use your email for registration</span>
//                         <input type="text" placeholder="Name" className="bg-[#eee] border-none p-3 my-2 w-full" />
//                         <input type="email" placeholder="Email" className="bg-[#eee] border-none p-3 my-2 w-full" />
//                         <input type="password" placeholder="Password" className="bg-[#eee] border-none p-3 my-2 w-full" />
//                         <button className="rounded-[20px] border border-solid border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold py-3 px-[45px] uppercase tracking-[1px] transition-transform duration-80 ease-in mt-4">Sign Up</button>
//                     </form>
//                 </div>
//                 <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100">
//                     <div className={`bg-[#FF416C] bg-[-webkit-linear-gradient(to_right,#FF4B2B,#FF416C)] bg-[linear-gradient(to_right,#FF4B2B,#FF416C)] bg-no-repeat bg-cover bg-[0_0] text-white relative left-[-100%] h-full w-[200%] transform ${isSignUp ? 'translate-x-1/2' : 'translate-x-0'} transition-transform duration-600 ease-in-out`}>
//                         <div className={`absolute flex items-center justify-center flex-col p-[0_40px] text-center top-0 h-full w-1/2 transform ${isSignUp ? 'translate-x-0' : '-translate-x-[20%]'} transition-transform duration-600 ease-in-out`}>
//                             <h1 className="font-bold m-0">Welcome Back!</h1>
//                             <p className="text-sm font-[100] leading-5 tracking-[0.5px] my-5 mx-0">To keep connected with us please login with your personal info</p>
//                             <button className="rounded-[20px] border border-solid border-white bg-transparent text-white text-xs font-bold py-3 px-[45px] uppercase tracking-[1px] transition-transform duration-80 ease-in" onClick={toggleMode}>Sign In</button>
//                         </div>
//                         <div className={`absolute flex items-center justify-center flex-col p-[0_40px] text-center top-0 h-full w-1/2 transform ${isSignUp ? 'translate-x-[20%]' : 'translate-x-0'} transition-transform duration-600 ease-in-out right-0`}>
//                             <h1 className="font-bold m-0">Hello, Friend!</h1>
//                             <p className="text-sm font-[100] leading-5 tracking-[0.5px] my-5 mx-0">Enter your personal details and start journey with us</p>
//                             <button className="rounded-[20px] border border-solid border-white bg-transparent text-white text-xs font-bold py-3 px-[45px] uppercase tracking-[1px] transition-transform duration-80 ease-in" onClick={toggleMode}>Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SlideSignInUpForm;




import './SignInUpForm.css';
const SignInUpForm = () => {
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
};

export default SignInUpForm;


// const SignInUpForm = () => {
//     const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//     const toggleRightPanel = () => {
//         setIsRightPanelActive(!isRightPanelActive);
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
//             <div className={`container bg-white rounded-lg shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[480px] ${isRightPanelActive ? 'right-panel-active' : ''}`}>
//                 <div className="form-container sign-up-container absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1 ${isRightPanelActive ? 'transform translate-x-full opacity-100 z-5' : ''}">
//                     <form className="bg-white flex items-center justify-center flex-col px-10 h-full text-center">
//                         <h1 className="text-2xl font-bold mb-4">Create Account</h1>
//                         <div className="social-container my-5">
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-facebook-f"></i></a>
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-google-plus-g"></i></a>
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-linkedin-in"></i></a>
//                         </div>
//                         <span className="text-sm mb-4">or use your email for registration</span>
//                         <input type="text" placeholder="Name" className="bg-gray-100 border-none px-4 py-2 mb-4 w-full rounded" />
//                         <input type="email" placeholder="Email" className="bg-gray-100 border-none px-4 py-2 mb-4 w-full rounded" />
//                         <input type="password" placeholder="Password" className="bg-gray-100 border-none px-4 py-2 mb-4 w-full rounded" />
//                         <button className="rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-red-600 focus:outline-none">Sign Up</button>
//                     </form>
//                 </div>
//                 <div className="form-container sign-in-container absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2">
//                     <form className="bg-white flex items-center justify-center flex-col px-10 h-full text-center">
//                         <h1 className="text-2xl font-bold mb-4">Sign in</h1>
//                         <div className="social-container my-5">
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-facebook-f"></i></a>
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-google-plus-g"></i></a>
//                             <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center mx-1.5 h-10 w-10"><i className="fab fa-linkedin-in"></i></a>
//                         </div>
//                         <span className="text-sm mb-4">or use your account</span>
//                         <input type="email" placeholder="Email" className="bg-gray-100 border-none px-4 py-2 mb-4 w-full rounded" />
//                         <input type="password" placeholder="Password" className="bg-gray-100 border-none px-4 py-2 mb-4 w-full rounded" />
//                         <a href="#" className="text-sm mb-4">Forgot your password?</a>
//                         <button className="rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-red-600 focus:outline-none">Sign In</button>
//                     </form>
//                 </div>
//                 <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transform duration-600 ease-in-out z-100">
//                     <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white relative -left-full h-full w-[200%] transform transition duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'}">
//                         <div className="overlay-panel overlay-left absolute flex items-center justify-center flex-col px-10 py-8 text-center top-0 h-full w-1/2 transform transition duration-600 ease-in-out translate-x-0 ${isRightPanelActive ? 'translate-x-0' : '-translate-x-[20%]'}">
//                             <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
//                             <p className="mb-4">To keep connected with us please login with your personal info</p>
//                             <button onClick={toggleRightPanel} className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-300 ease-in-out hover:bg-white hover:text-red-500 focus:outline-none">Sign In</button>
//                         </div>
//                         <div className="overlay-panel overlay-right absolute flex items-center justify-center flex-col px-10 py-8 text-center top-0 right-0 h-full w-1/2 transform transition duration-600 ease-in-out translate-x-0 ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'}">
//                             <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
//                             <p className="mb-4">Enter your personal details and start journey with us</p>
//                             <button onClick={toggleRightPanel} className="rounded-full border border-white bg-transparent text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-300 ease-in-out hover:bg-white hover:text-red-500 focus:outline-none">Sign Up</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignInUpForm;