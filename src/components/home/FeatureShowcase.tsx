import {
    MapIcon,
    ShoppingBagIcon,
    CursorArrowRaysIcon,
    ChartBarIcon,
    UserGroupIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Advanced Body Mapping',
        description: 'Interactive body mapping software that allows precise tattoo placement visualization and planning. Perfect for consultations and design approval.',
        icon: MapIcon,
        highlight: 'Core Technology',
    },
    {
        name: 'Tattoo Finder Tool',
        description: 'Sophisticated search and discovery system helping clients find their perfect tattoo design from extensive galleries and artist portfolios.',
        icon: CursorArrowRaysIcon,
        highlight: 'Client Experience',
    },
    {
        name: 'Premium Merchandise Platform',
        description: 'Complete e-commerce solution featuring trending tattoo-inspired apparel, accessories, and aftercare products with seamless ordering.',
        icon: ShoppingBagIcon,
        highlight: 'Revenue Stream',
    },
    {
        name: 'Studio Management Dashboard',
        description: 'Comprehensive analytics and management tools for tracking appointments, client preferences, and business performance metrics.',
        icon: ChartBarIcon,
        highlight: 'Business Intelligence',
    },
    {
        name: 'Client Portfolio System',
        description: 'Organized client management with design history, appointment tracking, and personalized recommendation engine.',
        icon: UserGroupIcon,
        highlight: 'Client Relations',
    },
    {
        name: 'Mobile-Optimized Experience',
        description: 'Fully responsive platform ensuring seamless experience across all devices for both artists and clients.',
        icon: DevicePhoneMobileIcon,
        highlight: 'Accessibility',
    },
];

export default function FeatureShowcase() {
    return (
        <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                    <div key={feature.name} className="relative group">
                        <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full border-l-4 border-[#146C43]">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <feature.icon className="h-8 w-8 text-[#146C43]" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#146C43] text-white">
                    {feature.highlight}
                  </span>
                                </div>
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.name}</h3>
                            <p className="mt-2 text-base text-gray-500 flex-grow">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}