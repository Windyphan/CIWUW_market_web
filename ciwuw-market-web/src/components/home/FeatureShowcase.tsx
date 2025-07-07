"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Advanced Body Mapping",
        description: "Revolutionary technology that allows clients to visualize tattoos on their body before committing to ink, reducing revision requests by 85%.",
        icon: "bodymap-icon.svg",
        image: "/images/features/body-map-demo.jpg",
        color: "bg-indigo-100"
    },
    {
        title: "Client Management",
        description: "Comprehensive CRM system designed specifically for tattoo studios, tracking client preferences, appointment history, and aftercare instructions.",
        icon: "client-icon.svg",
        image: "/images/features/client-management.jpg",
        color: "bg-emerald-100"
    },
    {
        title: "Scheduling & Bookings",
        description: "Streamline your appointment process with our intelligent booking system that reduces no-shows by 32% and optimizes artist availability.",
        icon: "calendar-icon.svg",
        image: "/images/features/scheduling.jpg",
        color: "bg-amber-100"
    },
    {
        title: "Business Analytics",
        description: "Data-driven insights into your studio's performance, popular designs, and client demographics to make informed business decisions.",
        icon: "analytics-icon.svg",
        image: "/images/features/analytics-dashboard.jpg",
        color: "bg-rose-100"
    }
];

export default function FeatureShowcase() {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="mt-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Feature tabs */}
                <div className="lg:col-span-5">
                    <div className="px-4 sm:px-0 space-y-1">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveFeature(index)}
                                className={`relative w-full flex items-start p-4 rounded-xl transition-all duration-300 ${
                                    activeFeature === index
                                        ? 'bg-white shadow-lg'
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                <div className={`flex-shrink-0 inline-flex p-3 rounded-lg ${feature.color}`}>
                                    <Image
                                        src={`/images/icons/${feature.icon}`}
                                        alt={feature.title}
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div className="ml-4 text-left">
                                    <h3 className={`text-lg font-medium ${
                                        activeFeature === index ? 'text-gray-900' : 'text-gray-700'
                                    }`}>
                                        {feature.title}
                                    </h3>
                                    <p className={`mt-1 ${
                                        activeFeature === index ? 'text-gray-600' : 'text-gray-500'
                                    }`}>
                                        {feature.description}
                                    </p>
                                </div>
                                {activeFeature === index && (
                                    <div className="hidden lg:block absolute right-2 inset-y-0 h-full">
                                        <svg width="12" height="100%" viewBox="0 0 12 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <path d="M1 1L11 50L1 99" stroke="#9333EA" strokeWidth="2" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Feature image */}
                <div className="mt-10 lg:mt-0 lg:col-span-7">
                    <motion.div
                        key={activeFeature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-2xl overflow-hidden shadow-xl aspect-w-5 aspect-h-3"
                    >
                        <Image
                            src={features[activeFeature].image}
                            alt={features[activeFeature].title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                            <div className="p-6 w-full">
                                <h3 className="text-xl font-medium text-white">
                                    {features[activeFeature].title}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}