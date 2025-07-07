'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    return (
        <div className="relative bg-gray-900 overflow-hidden">
            {/* Background with CIWUW styling */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dz00iux5j/image/private/s--5QXOzcEq--/v1727115364/bg-gif_1_kuglie.gif')"
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        {/* CIWUW Logo */}
                        <div className="mb-8">
                            <img
                                src="/ciwuw-logo.png"
                                alt="CIWUW - Call It What U Wanna"
                                className="h-16 w-auto"
                            />
                        </div>

                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Revolutionize Your</span>
                            <span className="block text-[#146C43]">Tattoo Business</span>
                        </h1>

                        <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                            CIWUW (Call It What U Wanna) is the premier tattoo platform offering
                            advanced body mapping technology, premium tattoo merchandise, and comprehensive
                            studio management tools. Transform how you design, visualize, and deliver tattoos.
                        </p>

                        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#licensing-form"
                                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#146C43] hover:bg-[#0d5233] md:py-4 md:text-lg md:px-10 transition-colors"
                                >
                                    Get Licensed Access
                                </Link>
                                <Link
                                    href="#platform-demo"
                                    className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors"
                                >
                                    View Platform Demo
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                                <img
                                    className="w-full h-64 object-cover"
                                    src="https://res.cloudinary.com/dz00iux5j/image/private/s--4ZCve0ex--/v1727379924/mens-col-image2_h1mrny.png"
                                    alt="CIWUW Tattoo Platform Preview"
                                />
                                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                                    <div className="bg-[#146C43] bg-opacity-80 rounded-full p-4">
                                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 84 84">
                                            <circle opacity="0.9" cx="42" cy="42" r="42" fill="white"/>
                                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}