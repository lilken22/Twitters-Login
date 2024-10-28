import React, { useState } from 'react';
import googleLogo from '../Images/google-g-2015.svg';
import appleLogo from '../Images/apple-14.svg';
import xLogo from '../Images/x-2.svg';
import xLogoSmall from '../Images/x-3.svg';
import { Link } from 'react-router-dom';

function Twitter() {
    const [showSignInModal, setShowSignInModal] = useState(false);

    const toggleSignInModal = () => {
        setShowSignInModal(!showSignInModal);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="container flex flex-col md:flex-row justify-center items-center my-10">
                <div className="left md:mr-10">
                    <img src={xLogo} alt="x-logo" className="hidden md:block" />
                </div>
                <div className="right md:transform md:translate-x-24 ">
                    <img src={xLogoSmall} alt="x-logo-small" className="block md:hidden" />
                    <h1 className="text-4xl md:text-7xl font-bold mt-10 md:mt-20">Happening Now</h1>
                    <h2 className="text-2xl md:text-3xl font-bold mt-6 text-left">Join Today</h2>
                    <div className="button-group mt-6 space-y-4">
                        <button className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full py-2 px-8 md:px-24 hover:bg-gray-100">
                            <span>Sign up with Google</span>
                            <img src={googleLogo} alt="Google logo" className="ml-2" />
                        </button>
                        <button className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full py-2 px-8 md:px-24 hover:bg-gray-100">
                            <img src={appleLogo} alt="Apple logo" className="mr-2" />
                            <span>Sign up with Apple</span>
                        </button>

                        <div className="flex w-full ">
                            <span className="spanner block font-semibold  md:px-44  md:ml-0 sm:ml-8">or</span> 
                        </div>

                        <button className="bg-blue-800 text-white font-extrabold rounded-full py-2 px-12 md:px-32 hover:bg-blue-600">
                           <Link
                             to="https://twitter.com/i/flow/signup"
                             target="_blank" // Optional: Open in a new tab
                             className="block w-full text-white"
                            >
                             Create account
                            </Link>
                         </button>


                    </div>
                    <p className="text-gray-500 text-sm mt-4 max-w-xs text-center md:text-left">
                        By signing up, you agree to the <Link to="#" className="text-blue-500">Terms of Service</Link> and <Link to="#" className="text-blue-500">Privacy Policy</Link>, including <Link to="#" className="text-blue-500">Cookie Use</Link>.
                    </p>
                    <h2 className="text-2xl md:text-5xl mt-5 font-black text-center md:text-left">Already have an account?</h2>
                    <button onClick={toggleSignInModal} className="mt-4 bg-transparent text-blue-700 border border-blue-500 rounded-full py-2 px-8 md:px-4 hover:bg-blue-100 font-bold">Sign in</button>
                </div>
            </div>
            {showSignInModal && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-container bg-gray-100 rounded-lg w-11/12 max-w-md p-6 relative">
                        <button onClick={toggleSignInModal} className="button-close-modal absolute top-3 right-3 text-xl">&times;</button>
                        <span className="logo-twitter-modal flex justify-center mb-4 text-3xl">
                            <i className="fa-brands fa-x-twitter"></i>
                        </span>
                        <div className="modal-content text-center">
                            <h2 className="mt-4 text-2xl font-bold">Sign in to X</h2>
                            <div className="button-group mt-6 space-y-4 mx-auto">
                                <button className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full py-2 px-20 hover:bg-gray-100 mx-auto">
                                    <span>Sign in with Google</span>
                                    <img src={googleLogo} alt="google logo" className="ml-2" />
                                </button>
                                <button className="flex items-center justify-center bg-white text-black border border-gray-300 rounded-full py-2 px-20 hover:bg-gray-100 mx-auto">
                                    <img src={appleLogo} alt="apple logo" className="mr-2" />
                                    <span>Sign in with Apple</span>
                                </button>
                                <span className="block mt-4 text-sm">or</span>
                                <input className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs mx-auto" type="text" placeholder="Phone, email, or username" />
                                <button className="bg-blue-800 text-white py-2 rounded-full hover:bg-blue-600 w-full max-w-xs mx-auto mt-4">Next</button>
                                <button className="bg-transparent text-blue-700 py-2 rounded-full border border-blue-700 hover:bg-blue-100 w-full max-w-xs mx-auto mt-4">Forgot Password</button>
                            </div>
                            <p className="mt-6 text-gray-500 text-sm">
                                Don't have an account? <button className="text-blue-500 font-bold hover:underline">Sign Up</button>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Twitter;


