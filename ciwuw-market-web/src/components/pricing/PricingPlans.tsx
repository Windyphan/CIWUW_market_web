"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type BillingFrequency = 'monthly' | 'annually';

export default function PricingPlans() {
    const [billingFrequency, setBillingFrequency] = useState<BillingFrequency>('monthly');

    const plans = [
        {
            name: "Essentials",
            description: "Core body mapping technology for small studios",
            monthlyPrice: 149,
            annualPrice: 129,
            features: [
                "Body map visualization technology",
                "Up to 3 staff accounts",
                "500 client profiles",
                "Design library (up to 1,000 designs)",
                "Basic support (email only)",
                "Regular software updates"
            ],
            mostPopular: false,
            cta: "Start with Essentials",
            ctaLink: "/contact"
        },
        {
            name: "Professional",
            description: "Complete business solution for growing studios",
            monthlyPrice: 249,
            annualPrice: 199,
            features: [
                "Everything in Essentials, plus:",
                "Up to 10 staff accounts",
                "Unlimited client profiles",
                "Advanced booking system",
                "Client management tools",
                "Analytics dashboard",
                "Premium support (email + phone)"
            ],
            mostPopular: true,
            cta: "Choose Professional",
            ctaLink: "/contact"
        },
        {
            name: "Enterprise",
            description: "Custom solutions for multi-location businesses",
            monthlyPrice: 499,
            annualPrice: 399,
            features: [
                "Everything in Professional, plus:",
                "Unlimited staff accounts",
                "Multi-location management",
                "Custom integrations",
                "White-label options",
                "Dedicated account manager",
                "24/7 priority support"
            ],
            mostPopular: false,
            cta: "Contact Sales",
            ctaLink: "/contact"
        }
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-purple-600 uppercase tracking-wider">Licensing Options</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                        Choose the Right Plan for Your Studio
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Flexible licensing options designed to scale with your business
                    </p>
                </div>

                {/* Billing toggle */}
                <div className="mt-12 sm:mt-16 sm:flex sm:justify-center">
                    <div className="relative bg-white rounded-lg p-0.5 shadow-sm flex">
                        <button
                            type="button"
                            onClick={() => setBillingFrequency('monthly')}
                            className={`${
                                billingFrequency === 'monthly'
                                    ? 'relative w-1/2 bg-purple-600 text-white border-purple-600 shadow-sm'
                                    : 'ml-0.5 relative w-1/2 border border-transparent text-gray-700'
                            } rounded-md py-2 px-6 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 whitespace-nowrap`}
                        >
                            Monthly billing
                        </button>
                        <button
                            type="button"
                            onClick={() => setBillingFrequency('annually')}
                            className={`${
                                billingFrequency === 'annually'
                                    ? 'relative w-1/2 bg-purple-600 text-white border-purple-600 shadow-sm'
                                    : 'ml-0.5 relative w-1/2 border border-transparent text-gray-700'
                            } rounded-md py-2 px-6 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:z-10 whitespace-nowrap`}
                        >
                            Annual billing
                            <span className="absolute -top-2 -right-12 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
                        </button>
                    </div>
                </div>

                {/* Pricing plans */}
                <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col rounded-2xl ${
                                plan.mostPopular
                                    ? 'bg-white shadow-xl border border-purple-100 scale-105 z-10'
                                    : 'bg-white shadow-md border border-gray-100'
                            }`}
                        >
                            {plan.mostPopular && (
                                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                                    <div className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase bg-purple-100 text-purple-600">
                                        Most Popular
                                    </div>
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                                <p className="mt-2 text-gray-500">{plan.description}</p>
                                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${billingFrequency === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                                    <span className="text-base font-medium text-gray-500">/month</span>
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    {billingFrequency === 'annually' && 'Billed annually'}
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col justify-between p-8 bg-gray-50 rounded-b-2xl">
                                <div className="space-y-4">
                                    <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wide">What's included</h4>
                                    <ul className="space-y-4">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="ml-3 text-base text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <Link
                                        href={plan.ctaLink}
                                        className={`w-full inline-flex justify-center py-3 px-5 rounded-lg shadow-sm text-base font-medium ${
                                            plan.mostPopular
                                                ? 'text-white bg-purple-600 hover:bg-purple-700'
                                                : 'text-purple-700 bg-purple-50 hover:bg-purple-100'
                                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                                    >
                                        {plan.cta}
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <div className="mt-10 text-center">
                    <p className="text-base text-gray-500">
                        All plans include a 14-day free trial. No credit card required.
                        <br />
                        Need a custom solution? <Link href="/contact" className="font-medium text-purple-600 hover:text-purple-500">Contact our sales team</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}