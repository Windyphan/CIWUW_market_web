"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "Implementing CIWUW's body mapping technology transformed our consultation process. Our clients now have complete confidence in their design choices before ink touches skin.",
        author: "Emily Rodriguez",
        position: "Owner, Inkwell Studios",
        avatar: "/images/testimonials/emily.jpg",
        logo: "/images/testimonials/inkwell-logo.png"
    },
    {
        quote: "Since partnering with CIWUW, our bookings have increased by 42%. The platform streamlines everything from client onboarding to aftercare instructions, saving us countless hours.",
        author: "Marcus Chen",
        position: "Founder, Black Lotus Tattoo",
        avatar: "/images/testimonials/marcus.jpg",
        logo: "/images/testimonials/blacklotus-logo.png"
    },
    {
        quote: "The analytics tools alone are worth the investment. We've completely transformed our business strategy based on the insights from CIWUW's platform.",
        author: "Samantha Wright",
        position: "Director, Prism Ink Gallery",
        avatar: "/images/testimonials/samantha.jpg",
        logo: "/images/testimonials/prism-logo.png"
    }
];

export default function TestimonialSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 text-purple-100">
                    <svg width="404" height="404" fill="currentColor" viewBox="0 0 404 404" aria-hidden="true">
                        <defs>
                            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                </div>

                <div className="relative z-10">
                    {/* Quote icon */}
                    <div className="text-purple-600 mb-6">
                        <svg className="h-12 w-12 opacity-25" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                    </div>

                    {/* Testimonial slider */}
                    <div className="relative h-72">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <blockquote>
                                    <p className="text-xl font-medium text-gray-900 leading-relaxed">
                                        "{testimonials[current].quote}"
                                    </p>
                                    <div className="mt-8 flex items-center">
                                        <div className="flex-shrink-0 rounded-full overflow-hidden h-12 w-12 border-2 border-white shadow">
                                            <Image
                                                src={testimonials[current].avatar}
                                                alt={testimonials[current].author}
                                                width={48}
                                                height={48}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <div className="font-medium text-gray-900">{testimonials[current].author}</div>
                                            <div className="text-sm text-gray-500">{testimonials[current].position}</div>
                                        </div>
                                        <div className="ml-auto h-8 w-auto">
                                            <Image
                                                src={testimonials[current].logo}
                                                alt="Company logo"
                                                width={100}
                                                height={32}
                                                className="h-full w-auto object-contain"
                                            />
                                        </div>
                                    </div>
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation dots */}
                    <div className="mt-6 flex justify-center space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                    current === index ? 'bg-purple-600' : 'bg-gray-300 hover:bg-purple-300'
                                }`}
                                aria-current={current === index}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}