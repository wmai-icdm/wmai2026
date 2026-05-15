import React from 'react';

export default function Program() {
    const schedule = [
        { time: "08:30 - 08:45", event: "Opening Remarks", type: "other" },
        { time: "08:45 - 09:30", event: "Keynote 1: World Models & Predictive Architectures", type: "keynote" },
        { time: "09:30 - 10:30", event: "Paper Session 1: JEPA & Self-Supervised Learning for Data Mining (3-4 papers, 15 min each)", type: "session" },
        { time: "10:30 - 11:00", event: "Coffee Break & Networking", type: "break" },
        { time: "11:00 - 11:45", event: "Keynote 2: Intrinsic Motivation & Autonomous Learning", type: "keynote" },
        { time: "11:45 - 12:15", event: "Paper Session 2: Scalable AMI Systems & Applications (2-3 papers)", type: "session" },
        { time: "12:15 - 12:30", event: 'Panel Discussion: "World Models and Autonomous Intelligence: From Theory to Data Mining Practice" & Closing Remarks', type: "other" }
    ];

    return (
        <section id="program" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-ctu-primary font-academic mb-8 border-b-2 border-ctu-secondary pb-2">
            Tentative Workshop Program (Half-day)
            </h2>
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden font-sans border border-gray-100">
            <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-gray-200">
                {schedule.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-ctu-primary whitespace-nowrap w-48">{item.time}</td>
                    <td className={`p-4 ${item.type === 'keynote' ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                        {item.event}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Note: Three invited speakers will be confirmed upon acceptance.
            </p>
        </div>
        </section>
    );
}