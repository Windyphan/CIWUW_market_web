"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BodyMapShowcase() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { name: 'Visualization', id: 0 },
        { name: 'Placement', id: 1 },
        { name: 'Customization', id: 2 },
    ];

    const tabContent = [
        {
            title: "Realistic Design Visualization",
            description: "Our advanced visualization technology allows clients to see their designs on their actual body. This technology uses precise measurements and sophisticated rendering to show realistic results, accounting for body contours and skin tone.",
            image: "/images/body-map/visualization.jpg",
            features: [
                "Real-time rendering of designs",
                "Accurate representation of tattoo opacity and detail",
                "Visualization on client photos or templates",
                "Multiple design comparisons side by side"
            ]
        },
        {
            title: "Perfect Placement Every Time",
            description: "Eliminate placement errors and client dissatisfaction with CIWUW's precision placement tools. Artists can adjust position, scale, and rotation with exact measurements, ensuring the final tattoo matches the visualization exactly.",
            image: "/images/body-map/placement.jpg",
            features: [
                "Inch-precise positioning",
                "Anatomically-correct mapping",
                "Contour adaptation technology",
                "Measurement guides for perfect symmetry"
            ]
        },
        {
            title: "Unlimited Design Customization",
            description: "Give clients the confidence to customize their tattoos before committing to ink. Our software allows for real-time color adjustments, size modifications, and style variations, all visualized instantly on the body map.",
            image: "/images/body-map/customization.jpg",
            features: [
                "Color palette adjustments",
                "Design fusion capabilities",
                "Style filter applications",
                "Shadow and highlight simulations"
            ]
        }
    ];

    return (
        <div className="py-16 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wider text-purple-600 uppercase">Revolutionary Technology</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Body Map Experience</p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Transform how clients visualize their tattoos with our advanced body mapping technology
                    </p>
                </div>

                {/* Tabs */}
                <div className="mt-12">
                    <div className="border-b border-gray-200">
                        <nav className="flex justify-center -mb-px space-x-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                                        ? 'border-purple-500 text-purple-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                  `}
                                >
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab content */}
                    <div className="mt-12">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="relative">
                                    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src={tabContent[activeTab].image}
                                            alt={tabContent[activeTab].title}
                                            width={600}
                                            height={400}
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-purple-200 opacity-50 blur-xl"></div>
                                    <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-indigo-200 opacity-50 blur-lg"></div>
                                </div>

                                <div className="mt-10 lg:mt-0">
                                    <h3 className="text-2xl font-bold text-gray-900">{tabContent[activeTab].title}</h3>
                                    <p className="mt-4 text-lg text-gray-600">{tabContent[activeTab].description}</p>

                                    <ul className="mt-8 space-y-3">
                                        {tabContent[activeTab].features.map((feature, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="ml-3 text-base text-gray-700">{feature}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}