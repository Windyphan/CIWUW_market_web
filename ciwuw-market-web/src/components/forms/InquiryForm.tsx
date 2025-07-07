"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define form validation schema
const formSchema = z.object({
    businessName: z.string().min(2, "Business name is required"),
    contactName: z.string().min(2, "Contact name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(7, "Valid phone number is required"),
    trafficVolume: z.string().min(1, "Please select an option"),
    interests: z.array(z.string()).min(1, "Select at least one interest"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function InquiryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/submit-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Submission failed');
            }

            setSubmitSuccess(true);
            reset();
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        } catch (error) {
            setSubmitError('There was a problem submitting your inquiry. Please try again.');
            // Reset error message after 5 seconds
            setTimeout(() => setSubmitError(''), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Request CIWUW Licensing Information</h2>

            {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
                    Thank you for your interest! We'll contact you shortly to discuss how CIWUW can benefit your business.
                </div>
            )}

            {submitError && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md">
                    {submitError}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                    <input
                        id="businessName"
                        type="text"
                        {...register('businessName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    {errors.businessName && (
                        <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700">Contact Name</label>
                    <input
                        id="contactName"
                        type="text"
                        {...register('contactName')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    {errors.contactName && (
                        <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="trafficVolume" className="block text-sm font-medium text-gray-700">Monthly Customer Volume</label>
                    <select
                        id="trafficVolume"
                        {...register('trafficVolume')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    >
                        <option value="">Select an option</option>
                        <option value="Less than 50">Less than 50</option>
                        <option value="50-100">50-100</option>
                        <option value="101-200">101-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                    </select>
                    {errors.trafficVolume && (
                        <p className="mt-1 text-sm text-red-600">{errors.trafficVolume.message}</p>
                    )}
                </div>

                <div>
                    <span className="block text-sm font-medium text-gray-700">Interested In</span>
                    <div className="mt-2 space-y-2">
                        <div className="flex items-start">
                            <input
                                id="bodyMap"
                                type="checkbox"
                                value="Body Map Software"
                                {...register('interests')}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="bodyMap" className="ml-3 block text-sm text-gray-700">
                                Body Map Software
                            </label>
                        </div>
                        <div className="flex items-start">
                            <input
                                id="clientManagement"
                                type="checkbox"
                                value="Client Management"
                                {...register('interests')}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="clientManagement" className="ml-3 block text-sm text-gray-700">
                                Client Management
                            </label>
                        </div>
                        <div className="flex items-start">
                            <input
                                id="bookingSystem"
                                type="checkbox"
                                value="Booking System"
                                {...register('interests')}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="bookingSystem" className="ml-3 block text-sm text-gray-700">
                                Booking System
                            </label>
                        </div>
                        <div className="flex items-start">
                            <input
                                id="fullPlatform"
                                type="checkbox"
                                value="Full Platform"
                                {...register('interests')}
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="fullPlatform" className="ml-3 block text-sm text-gray-700">
                                Full Platform
                            </label>
                        </div>
                    </div>
                    {errors.interests && (
                        <p className="mt-1 text-sm text-red-600">{errors.interests.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                        id="message"
                        rows={4}
                        {...register('message')}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                    </button>
                </div>
            </form>
        </div>
    );
}