import React from 'react';

export default function Navbar() {
    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Topics', href: '#topics' },
        { name: 'Submission', href: '#submission' },
        { name: 'Important Dates', href: '#dates' },
        { name: 'Program', href: '#program' },
        { name: 'Committees', href: '#committees' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
                <span className="text-ctu-primary font-bold text-xl font-academic">AMI 2026</span>
            </div>
            <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                    <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-ctu-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                    {link.name}
                    </a>
                ))}
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
}