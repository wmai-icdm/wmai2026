import React from 'react';

export default function ImportantDates() {
    const dates = [
        { label: 'Workshop paper submission', date: 'Aug 20, 2026' },
        { label: 'Acceptance notification', date: 'Sep 18, 2026' },
        { label: 'Camera-ready due', date: 'Oct 2, 2026' },
        { label: 'Workshop date', date: 'Nov 12, 2026' },
    ];

    return (
        <section id="dates" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-ctu-primary font-academic mb-8 border-b-2 border-ctu-secondary pb-2">
            Important Dates
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden font-sans">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-ctu-primary text-white">
                    <th className="p-4 font-academic text-lg">Milestone</th>
                    <th className="p-4 font-academic text-lg">Date</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {dates.map((d, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-medium text-gray-800">{d.label}</td>
                    <td className="p-4 font-bold text-ctu-primary">{d.date}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
        </section>
    );
}