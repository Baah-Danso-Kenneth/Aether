"use client";
import React from 'react';
import VibeCard from '../ui/VibeCard';
import { VIBES } from '../constants/vibes';




const VibeSection = () => {
  
    const vibes = VIBES.map(v => ({
        image: v.image,
        title: v.name,
        href: `/collection?vibe=${v.id}`
    }));

    return (
        <section className="py-24 px-6">
            <div className="max-w-[1280px] mx-auto text-center mb-16">
                <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--t-secondary)] mb-4">Vibe</h2>
                <h3 className="text-4xl md:text-5xl font-light text-[var(--t-primary)]">Stays & Vibes</h3>
                <p className="mt-4 text-sm text-[var(--t-secondary)] max-w-2xl mx-auto">Discover curated stays and the atmospheres that surround them — from cozy, quiet retreats to lively urban scenes. Find the vibe that fits your next trip.</p>
            </div>

            <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                {vibes.map((vibe, index) => (
                    <VibeCard key={index} {...vibe} />
                ))}
            </div>
        </section>
    );
};

export default VibeSection;
