"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import GlassPanel from '../ui/GlassPanel';
import NavLink from '../ui/NavLink';



const Navbar = () => {


    const profileRef = React.useRef<HTMLDivElement>(null);
    const langRef = React.useRef<HTMLDivElement>(null);


    return (
        <nav className="fixed top-0 w-full z-50 px-8 py-6 transition-all duration-300">
            <GlassPanel className="max-w-[1440px] mx-auto flex justify-between items-center px-8 py-4">
                <Link href="/" className="flex items-center gap-3 font-semibold text-2xl tracking-tight text-[var(--t-primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="font-serif tracking-widest text-xl opacity-90">AETHER</span>
                </Link>

                <div className="hidden md:flex items-center gap-10 font-sans text-[11px] tracking-[0.2em] text-[var(--t-primary)] uppercase font-bold">
                    <NavLink href="/collection">collection</NavLink>
                    <NavLink href="/about">about</NavLink>
                </div>

                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div
                        className="relative"
              
                    >
                        <div className="flex items-center gap-2.5 cursor-pointer py-2 px-1 hover:opacity-70 transition-opacity">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-[var(--t-primary)] opacity-50">
                                <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
                            </svg>
                            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-[var(--t-primary)] font-bold">
                                Language
                            </span>
                        </div>

                    </div>

        
                
                        <Button  className="px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg shadow-[var(--c-blue-deep)]/10">
                            connect wallet
                        </Button>
                    
                </div>
            </GlassPanel>
        </nav>
    );
};

export default Navbar;