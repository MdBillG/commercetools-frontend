'use client'

import React, { useState } from 'react'

const Dummy = () => {
    // const [isRightPanelActive, setRightPannelActive] = useState(false)

    const togglePosition = () => {
        setRightPannelActive(!isRightPanelActive);
    }

    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const toggleRightPanel = () => {
        setIsRightPanelActive(!isRightPanelActive);
    };

    return (
        <div>
            {/* <div className='flex justify-center items-center h-screen  shadow-2xl'>
                <div className={`bg-gray-950 h-1/2 text-white flex flex-col justify-evenly p-3 w-1/3 items-center transition-all duration-[2500ms] ease-in-out ${isRightPanelActive
                    ? 'translate-x-full opacity-100 z-10'
                    : 'translate-x-0 opacity-100 z-20'
                    }`}>
                    <h1 className='bg-gray-200'>
                        Hi
                    </h1>
                    <h1>
                        THis is Hello  pannel
                    </h1>
                    <button onClick={togglePosition} className='bg-white text-gray-950 px-4 py-2 rounded'>
                        Move to Hi
                    </button>
                </div>
                <div className={`bg-slate-400 h-1/2 flex flex-col justify-evenly p-3 w-1/3 items-center transition-all duration-[2500ms] ease-in-out ${isRightPanelActive
                    ? '-translate-x-full opacity-100 z-20'
                    : 'translate-x-0 opacity-100 z-10'
                    }`}>


                    <h1 className='bg-gray-200'>
                        Hi
                    </h1>
                    <h1>
                        THis is Hi  pannel
                    </h1>
                    <button onClick={togglePosition} className='bg-gray-950 text-white px-4 py-2 rounded'>
                        Move to Hello
                    </button>
                </div>
            </div> */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100 font-sans">
                <div className={`bg-white rounded-lg shadow-2xl relative overflow-hidden w-[768px] max-w-full min-h-[480px] ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                    <div className="absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 opacity-0 z-1 ${isRightPanelActive ? 'translate-x-full opacity-100 z-5 animate-show' : ''}`">
                        <form className="bg-white flex items-center justify-center flex-col px-10 h-full text-center">
                            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                            <div className="flex justify-center space-x-2 my-5">
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                            </div>
                            <span className="text-sm mb-4">or use your email for registration</span>
                            <input type="text" placeholder="Name" className="bg-gray-100 border-none p-3 my-2 w-full" />
                            <input type="email" placeholder="Email" className="bg-gray-100 border-none p-3 my-2 w-full" />
                            <input type="password" placeholder="Password" className="bg-gray-100 border-none p-3 my-2 w-full" />
                            <button className="mt-4 rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-red-600">Sign Up</button>
                        </form>
                    </div>
                    <div className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 z-2 ${isRightPanelActive ? 'translate-x-full' : ''}`}>
                        <form className="bg-white flex items-center justify-center flex-col px-10 h-full text-center">
                            <h1 className="text-2xl font-bold mb-4">Sign in</h1>
                            <div className="flex justify-center space-x-2 my-5">
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                                <a href="#" className="border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center"></a>
                            </div>
                            <span className="text-sm mb-4">or use your account</span>
                            <input type="email" placeholder="Email" className="bg-gray-100 border-none p-3 my-2 w-full" />
                            <input type="password" placeholder="Password" className="bg-gray-100 border-none p-3 my-2 w-full" />
                            <a href="#" className="text-sm mb-4">Forgot your password?</a>
                            <button className="mt-4 rounded-full border border-red-500 bg-red-500 text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-red-600">Sign In</button>
                        </form>
                    </div>
                    <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition transform duration-600 ease-in-out z-100 ${isRightPanelActive ? '-translate-x-full' : ''}`}>
                        <div className={`bg-gradient-to-r from-red-500 to-pink-500 text-white relative -left-full h-full w-[200%] transform ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'} transition duration-600 ease-in-out`}>
                            <div className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 transform transition duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-0' : '-translate-x-[20%]'}`}>
                                <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                                <p className="mb-4">To keep connected with us please login with your personal info</p>
                                <button className="bg-transparent border border-white rounded-full text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-white hover:text-pink-500" onClick={toggleRightPanel}>Sign In</button>
                            </div>
                            <div className={`absolute flex items-center justify-center flex-col px-10 text-center top-0 h-full w-1/2 right-0 transform transition duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-[20%]' : 'translate-x-0'}`}>
                                <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                                <p className="mb-4">Enter your personal details and start journey with us</p>
                                <button className="bg-transparent border border-white rounded-full text-white text-xs font-bold py-3 px-12 uppercase tracking-wide transition duration-80 ease-in hover:bg-white hover:text-pink-500" onClick={toggleRightPanel}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >

    )
}

export default Dummy
