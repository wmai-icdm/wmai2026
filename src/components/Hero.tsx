import React from 'react';

export default function Hero() {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-ctu-primary to-blue-900 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold font-academic mb-4">
            AMI 2026: The 1st Workshop on Autonomous Machine Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90">
            In conjunction with IEEE ICDM 2026
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 text-lg font-medium">
            <div className="flex items-center justify-center gap-2">
                <span>📅 November 12, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <span>📍 Shenyang, China</span>
            </div>
            </div>
            <div className="mt-10">
            <a href="#submission" className="bg-ctu-secondary hover:bg-blue-400 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg">
                Submit Paper Now
            </a>
            </div>
        </div>
        </section>
    );
}