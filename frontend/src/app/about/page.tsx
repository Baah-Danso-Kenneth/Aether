import React from 'react';

import HeroSection from '../../components/about/HeroSection';
import MissionSection from '../../components/about/MissionSection';
import ArchitectureSection from '../../components/about/ArchitectureSection';
import ValuesSection from '../../components/about/ValuesSection';
import InquireSection from '../../components/about/InquireSection';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-[var(--c-cream)] via-[var(--c-fog)] to-[var(--c-blue-haze)] relative overflow-x-hidden">
            <Navbar />
            <div className="pt-24">
                <HeroSection />
                <MissionSection />
                <ArchitectureSection />
                <ValuesSection />
                <InquireSection />
            </div>
            <Footer />
        </main>
    );
};
