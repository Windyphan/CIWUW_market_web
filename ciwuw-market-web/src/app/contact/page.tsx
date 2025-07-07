import InquiryForm from '@/components/forms/InquiryForm';
import Image from 'next/image';

export const metadata = {
    title: 'Contact Us | CIWUW B2B',
    description: 'Get in touch with our team to learn more about CIWUW licensing for your tattoo business.'
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            <div className="relative bg-purple-700">
                <div className="absolute inset-0">
                    <Image
                        src="/images/contact-header.jpg"
                        alt="Contact us"
                        fill
                        className="w-full h-full object-cover mix-blend-multiply opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-purple-700 mix-blend-multiply" aria-hidden="true"></div>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Let's Talk</h1>
                    <p className="mt-6 text-xl text-purple-100 max-w-3xl">
                        Ready to transform your tattoo business? Our team is here to help you discover the perfect CIWUW licensing solution.
                    </p>
                </div>
            </div>

            <section className="relative bg-white">
                <div className="absolute left-0 right-0 h-1/2 bg-gray-50" aria-hidden="true"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <dt className="order-2 mt-2 text-lg font-medium text-gray-500">Business Support</dt>
                                <dd className="order-1 text-3xl font-extrabold text-purple-600">24/7</dd>
                            </div>
                            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <dt className="order-2 mt-2 text-lg font-medium text-gray-500">Implementation</dt>
                                <dd className="order-1 text-3xl font-extrabold text-purple-600">&lt; 48h</dd>
                            </div>
                            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <dt className="order-2 mt-2 text-lg font-medium text-gray-500">Client Satisfaction</dt>
                                <dd className="order-1 text-3xl font-extrabold text-purple-600">98%</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <section className="py-16 overflow-hidden bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Request Licensing Information</h2>
                            <p className="mt-4 text-lg text-gray-500">
                                Fill out the form to receive detailed information about our licensing options, pricing, and implementation process. Our team will contact you within 24 hours.
                            </p>

                            <div className="mt-12 space-y-8">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-7 w-7 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Sales</h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            <a href="tel:+18005551234" className="hover:text-purple-600">+1 (800) 555-1234</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-7 w-7 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                        <p className="mt-1 text-base text-gray-500">
                                            <a href="mailto:b2b@ciwuw.com" className="hover:text-purple-600">b2b@ciwuw.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-7">
                            <InquiryForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}