import BodyMapShowcase from '@/components/body-map/BodyMapShowcase';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Body Map Technology | CIWUW B2B',
    description: 'Learn about our revolutionary body mapping technology for tattoo visualization and design placement.'
};

export default function BodyMapPage() {
    return (
        <div className="bg-white">
            {/* Hero section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/body-map-hero.jpg"
                        alt="Body mapping visualization"
                        fill
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-purple-900/50 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-32 sm:px-6 sm:py-40 lg:py-48 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">Revolutionary</span>
                        <span className="block text-purple-200">Body Mapping Technology</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-purple-100 sm:max-w-3xl">
                        Transform how clients visualize their tattoos with precision placement and realistic previews on actual body photos.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                            <Link
                                href="/contact"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 sm:px-8"
                            >
                                Request Demo
                            </Link>
                            <a
                                href="#how-it-works"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-gray-50 sm:px-8"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <BodyMapShowcase />

            {/* How it works section */}
            <div id="how-it-works" className="py-16 bg-white overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Process</h2>
                        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                            How Body Mapping Works
                        </p>
                        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                            Our intuitive 4-step process makes visualization simple for artists and clients
                        </p>
                    </div>

                    <div className="mt-16">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                            <div className="relative">
                                <div className="relative h-80 aspect-w-3 aspect-h-2 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/body-map/scan-process.jpg"
                                        alt="Body scanning process"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-10 lg:mt-0">
                                <ol className="space-y-10">
                                    <li className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                                <span className="text-lg font-bold">1</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Photo Capture or Template Selection</h3>
                                            <p className="mt-2 text-base text-gray-600">
                                                Take a photo of the client's body area or select from our library of body templates for quick visualization.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                                <span className="text-lg font-bold">2</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Design Import or Creation</h3>
                                            <p className="mt-2 text-base text-gray-600">
                                                Upload existing designs or create new ones directly in the software with our advanced drawing tools.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                                <span className="text-lg font-bold">3</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Precise Placement & Customization</h3>
                                            <p className="mt-2 text-base text-gray-600">
                                                Position, scale, and rotate the design on the body map with millimeter precision. Adjust opacity, color, and shading.
                                            </p>
                                        </div>
                                    </li>

                                    <li className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                                                <span className="text-lg font-bold">4</span>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium text-gray-900">Save & Share Results</h3>
                                            <p className="mt-2 text-base text-gray-600">
                                                Save the visualizations to the client's profile and share via email or social media. Export stencils for immediate use.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats section */}
            <div className="bg-purple-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Trusted by tattoo professionals worldwide
                        </h2>
                        <p className="mt-3 text-xl text-purple-200 sm:mt-4">
                            Our body mapping technology delivers measurable business results
                        </p>
                    </div>
                    <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="flex flex-col">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
                                Client satisfaction
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">98%</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
                                Reduction in design revisions
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">85%</dd>
                        </div>
                        <div className="flex flex-col mt-10 sm:mt-0">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-purple-200">
                                Average revenue increase
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-white">32%</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* CTA section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block">Ready to elevate your tattoo studio?</span>
                        <span className="block text-purple-600">Get started with CIWUW today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                href="/pricing"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                            >
                                View Pricing
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}