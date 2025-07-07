import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CIWUW B2B | Tattoo Platform Licensing',
    description: 'Transform your tattoo studio with CIWUW\'s advanced body mapping technology and business tools.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}