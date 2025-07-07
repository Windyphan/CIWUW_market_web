import Hero from '@/components/home/Hero';
import FeatureShowcase from '@/components/home/FeatureShowcase';
import TestimonialSlider from '@/components/home/TestimonialSlider';

export default function Home() {
  return (
      <main>
        <Hero />

        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Transform Your Tattoo Business
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                CIWUW provides industry-leading tools for tattoo studios looking to enhance client experience and increase revenue.
              </p>
            </div>

            <FeatureShowcase />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Leading Studios
              </p>
            </div>

            <TestimonialSlider />
          </div>
        </section>
      </main>
  );
}