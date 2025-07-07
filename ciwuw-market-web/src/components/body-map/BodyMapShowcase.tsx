'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BodyMapShowcase() {
    const [activeDemo, setActiveDemo] = useState('placement');

    const demoModes = [
        {
            id: 'placement',
            title: 'Tattoo Placement',
            description: 'Visualize exact tattoo positioning on detailed body maps'
        },
        {
            id: 'sizing',
            title: 'Size Planning',
            description: 'Accurate sizing tools for perfect tattoo proportions'
        },
        {
            id: 'consultation',
            title: 'Client Consultation',
            description: 'Interactive sessions for design collaboration'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Revolutionary Body Mapping Technology
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Experience the future of tattoo consultation and design with our advanced body mapping software -
                        the same technology powering the main CIWUW platform.
                    </p>
                </div>

                <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                            Precision Meets Innovation
                        </h3>
                        <p className="mt-3 text-lg text-gray-500">
                            Our body mapping software integrates seamlessly with your studio workflow,
                            providing clients with unprecedented visualization capabilities while streamlining your design process.
                        </p>

                        <dl className="mt-10 space-y-6">
                            {demoModes.map((mode) => (
                                <div
                                    key={mode.id}
                                    className={`cursor-pointer p-4 rounded-lg transition-all duration-200 ${
                                        activeDemo === mode.id
                                            ? 'bg-[#146C43] text-white shadow-lg'
                                            : 'bg-white hover:bg-gray-100'
                                    }`}
                                    onClick={() => setActiveDemo(mode.id)}
                                >
                                    <dt className={`text-lg leading-6 font-medium ${
                                        activeDemo === mode.id ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {mode.title}
                                    </dt>
                                    <dd className={`mt-2 text-base ${
                                        activeDemo === mode.id ? 'text-gray-100' : 'text-gray-500'
                                    }`}>
                                        {mode.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className="mt-10 lg:mt-0">
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                                {/* Placeholder for body map demo - replace with actual screenshots */}
                                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-[#146C43] to-green-600">
                                    <div className="text-center text-white">
                                        <MapIcon className="mx-auto h-16 w-16 mb-4" />
                                        <h4 className="text-xl font-semibold">Interactive Body Map</h4>
                                        <p className="mt-2">Click modes on the left to see different features</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h4 className="text-lg font-medium text-gray-900">How to Use Body Mapping:</h4>
                                <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-600">
                                    <li>Select the body area for tattoo placement</li>
                                    <li>Upload or choose from design gallery</li>
                                    <li>Adjust size, position, and orientation</li>
                                    <li>Generate preview for client approval</li>
                                    <li>Save design specifications for artist reference</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { MapIcon } from '@heroicons/react/24/outline';