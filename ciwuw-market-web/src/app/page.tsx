import Hero from '@/components/home/Hero';
import FeatureShowcase from '@/components/home/FeatureShowcase';
import BodyMapShowcase from '@/components/body-map/BodyMapShowcase';
import LicensingForm from '@/components/forms/InquiryForm';
import TestimonialSlider from '@/components/home/TestimonialSlider';

export default function Home() {
    return (
        <main>
            <Hero />

            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Why Leading Studios Choose CIWUW
                        </h2>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            From individual artists to multi-location studios, CIWUW provides the complete
                            technology stack to modernize your tattoo business and enhance client experience.
                        </p>
                    </div>

                    <FeatureShowcase />
                </div>
            </section>

            <BodyMapShowcase />

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-[#146C43] font-semibold tracking-wide uppercase">Success Stories</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Trusted by Industry Leaders
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            See how CIWUW has transformed businesses just like yours with increased efficiency,
                            better client satisfaction, and enhanced revenue streams.
                        </p>
                    </div>

                    <TestimonialSlider />
                </div>
            </section>

            <LicensingForm />
        </main>
    );
}