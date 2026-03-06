"use client";
import React from 'react';
import GlassPanel from '../ui/GlassPanel';
import Image from 'next/image';

const ValuesSection = () => {
    return (
        <section className="max-w-[1100px] mx-auto px-6 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
                <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--t-secondary)] mb-8">Values</h2>
                <ul className="space-y-12">
                    <li className="border-b border-[rgba(27,64,102,0.1)] pb-8">
                        <span className="font-sans text-xs text-[var(--t-secondary)] mb-2 block">01</span>
                        <h4 className="text-2xl font-normal mb-3 text-[var(--t-primary)] font-serif">Integrity</h4>
                        <p className="text-[var(--t-primary)] font-medium font-sans">We believe in transparency and honesty in all dealings</p>
                    </li>
                    <li className="border-b border-[rgba(27,64,102,0.1)] pb-8">
                        <span className="font-sans text-xs text-[var(--t-secondary)] mb-2 block">02</span>
                        <h4 className="text-2xl font-normal mb-3 text-[var(--t-primary)] font-serif">Community</h4>
                        <p className="text-[var(--t-primary)] font-medium font-sans">Building strong connections between people and places</p>
                    </li>
                    <li className="border-b border-[rgba(27,64,102,0.1)] pb-8">
                        <span className="font-sans text-xs text-[var(--t-secondary)] mb-2 block">03</span>
                        <h4 className="text-2xl font-normal mb-3 text-[var(--t-primary)] font-serif">Excellence</h4>
                        <p className="text-[var(--t-primary)] font-medium font-sans">Striving for the highest quality in everything we do</p>
                    </li>
                </ul>
            </div>
            <div className="relative">
                <div className="sticky top-32">
                    <GlassPanel className="p-2 transform rotate-1">
                        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl bg-gray-100">
                            <Image
                                src="/images/vibe-urban.jpg"
                                alt="Minimalist Space"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="mt-4 px-4 pb-4">
                            <p className="font-sans text-xs uppercase tracking-widest text-[var(--t-primary)] italic font-semibold">Philosophy</p>
                        </div>
                    </GlassPanel>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
