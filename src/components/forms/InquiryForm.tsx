'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LicensingFormData {
    businessName: string;
    contactName: string;
    email: string;
    phone: string;
    businessType: string;
    monthlyTraffic: string;
    currentSoftware: string;
    studioSize: string;
    timeline: string;
    features: string[];
    additionalInfo: string;
}

export default function LicensingForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors }, watch } = useForm<LicensingFormData>();

    const onSubmit = async (data: LicensingFormData) => {
        // Handle form submission - integrate with your backend
        console.log('Licensing inquiry:', data);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <section id="licensing-form" className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-green-50 rounded-lg p-8">
                        <div className="text-[#146C43] mb-4">
                            <svg className="mx-auto h-16 w-16" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Interest!</h3>
                        <p className="text-lg text-gray-600 mb-6">
                            We've received your licensing inquiry and will contact you within 24 hours to discuss
                            how CIWUW can transform your tattoo business.
                        </p>
                        <p className="text-sm text-gray-500">
                            For immediate assistance, contact us at <a href="mailto:info@callitwhatuwanna.com" className="text-[#146C43] underline">info@callitwhatuwanna.com</a>
                            or call <a href="tel:07488325112" className="text-[#146C43] underline">07488325112</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="licensing-form" className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Get Licensed Access to CIWUW
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Join leading tattoo studios already using our platform. Fill out the form below
                        to learn about licensing options tailored to your business needs.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                                Business Name *
                            </label>
                            <input
                                {...register('businessName', { required: 'Business name is required' })}
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                                placeholder="Your Tattoo Studio Name"
                            />
                            {errors.businessName && (
                                <p className="mt-2 text-sm text-red-600">{errors.businessName.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">
                                Contact Name *
                            </label>
                            <input
                                {...register('contactName', { required: 'Contact name is required' })}
                                type="text"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                                placeholder="Your Full Name"
                            />
                            {errors.contactName && (
                                <p className="mt-2 text-sm text-red-600">{errors.contactName.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Business Email *
                            </label>
                            <input
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address'
                                    }
                                })}
                                type="email"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                                placeholder="business@example.com"
                            />
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number *
                            </label>
                            <input
                                {...register('phone', { required: 'Phone number is required' })}
                                type="tel"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                                placeholder="+44 7XXX XXXXXX"
                            />
                            {errors.phone && (
                                <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700">
                                Business Type *
                            </label>
                            <select
                                {...register('businessType', { required: 'Please select business type' })}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            >
                                <option value="">Select type</option>
                                <option value="independent-studio">Independent Tattoo Studio</option>
                                <option value="chain-studio">Chain/Multi-location Studio</option>
                                <option value="artist-collective">Artist Collective</option>
                                <option value="mobile-artist">Mobile Tattoo Artist</option>
                                <option value="convention-organizer">Convention Organizer</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.businessType && (
                                <p className="mt-2 text-sm text-red-600">{errors.businessType.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="monthlyTraffic" className="block text-sm font-medium text-gray-700">
                                Average Monthly Client Volume *
                            </label>
                            <select
                                {...register('monthlyTraffic', { required: 'Please select monthly volume' })}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            >
                                <option value="">Select range</option>
                                <option value="1-50">1-50 clients</option>
                                <option value="51-100">51-100 clients</option>
                                <option value="101-200">101-200 clients</option>
                                <option value="201-500">201-500 clients</option>
                                <option value="500+">500+ clients</option>
                            </select>
                            {errors.monthlyTraffic && (
                                <p className="mt-2 text-sm text-red-600">{errors.monthlyTraffic.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="studioSize" className="block text-sm font-medium text-gray-700">
                                Number of Artists *
                            </label>
                            <select
                                {...register('studioSize', { required: 'Please select studio size' })}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            >
                                <option value="">Select range</option>
                                <option value="1">Solo Artist</option>
                                <option value="2-5">2-5 Artists</option>
                                <option value="6-10">6-10 Artists</option>
                                <option value="11-20">11-20 Artists</option>
                                <option value="20+">20+ Artists</option>
                            </select>
                            {errors.studioSize && (
                                <p className="mt-2 text-sm text-red-600">{errors.studioSize.message}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                                Implementation Timeline
                            </label>
                            <select
                                {...register('timeline')}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            >
                                <option value="">Select timeline</option>
                                <option value="immediate">Immediate (within 1 month)</option>
                                <option value="1-3-months">1-3 months</option>
                                <option value="3-6-months">3-6 months</option>
                                <option value="6-12-months">6-12 months</option>
                                <option value="exploring">Just exploring options</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="currentSoftware" className="block text-sm font-medium text-gray-700">
                            Current Software/Systems Used
                        </label>
                        <input
                            {...register('currentSoftware')}
                            type="text"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            placeholder="e.g., booking software, design tools, POS systems"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Features of Interest (select all that apply)
                        </label>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {[
                                'Body Mapping Software',
                                'Tattoo Finder Tool',
                                'Merchandise Platform',
                                'Client Management',
                                'Design Gallery',
                                'Appointment Scheduling',
                                'Analytics Dashboard',
                                'Mobile App Access'
                            ].map((feature) => (
                                <div key={feature} className="flex items-center">
                                    <input
                                        {...register('features')}
                                        type="checkbox"
                                        value={feature}
                                        className="h-4 w-4 text-[#146C43] focus:ring-[#146C43] border-gray-300 rounded"
                                    />
                                    <label className="ml-2 text-sm text-gray-700">{feature}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                            Additional Information
                        </label>
                        <textarea
                            {...register('additionalInfo')}
                            rows={4}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#146C43] focus:border-[#146C43] sm:text-sm"
                            placeholder="Tell us more about your business needs, current challenges, or specific requirements..."
                        />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="text-sm font-medium text-gray-900 mb-2">What happens next?</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• We'll review your application within 24 hours</li>
                            <li>• Schedule a personalized demo of the CIWUW platform</li>
                            <li>• Discuss licensing options and pricing tailored to your needs</li>
                            <li>• Provide implementation timeline and support details</li>
                        </ul>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#146C43] hover:bg-[#0d5233] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#146C43] transition-colors"
                        >
                            Submit Licensing Inquiry
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                        By submitting this form, you agree to be contacted by CIWUW regarding licensing opportunities.
                        We respect your privacy and will not share your information with third parties.
                    </p>
                </form>
            </div>
        </section>
    );
}