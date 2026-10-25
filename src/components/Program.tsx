import React from 'react';

export default function Program() {
    // Official slot assigned by ICDM 2026 (Workshop Day schedule): W05 | WMAI, Room London
    const venue = [
        { label: "Date", value: "Thursday, November 12, 2026" },
        { label: "Time", value: "08:30 – 12:00" },
        { label: "Room", value: "London" },
        { label: "Schedule ID", value: "W05" },
    ];

    const schedule = [
        { time: "08:00 - 08:30", event: "Conference Registration (1F)", type: "break" },
        { time: "08:30 - 08:40", event: "Opening Remarks", type: "other" },
        { time: "08:40 - 09:20", event: "Keynote 1: World Models & Predictive Architectures", type: "keynote" },
        { time: "09:20 - 09:50", event: "Paper Session 1: JEPA & Self-Supervised Learning for Data Mining", type: "session" },
        { time: "09:50 - 10:10", event: "Coffee Break", type: "break" },
        { time: "10:10 - 10:50", event: "Keynote 2: Intrinsic Motivation & Autonomous Learning", type: "keynote" },
        { time: "10:50 - 11:35", event: "Paper Session 2: Scalable AMI Systems & Applications", type: "session" },
        { time: "11:35 - 12:00", event: 'Panel Discussion: "World Models and Autonomous Intelligence: From Theory to Data Mining Practice" & Closing Remarks', type: "other" },
        { time: "12:00 - 13:00", event: "Lunch (Grand Ballroom 2)", type: "break" }
    ];

    return (
        <section id="program" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-ctu-primary font-academic mb-8 border-b-2 border-ctu-secondary pb-2">
            Workshop Program
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 font-sans">
            {venue.map((v) => (
                <div key={v.label} className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{v.label}</div>
                <div className="font-bold text-ctu-primary mt-1">{v.value}</div>
                </div>
            ))}
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-hidden font-sans border border-gray-100">
            <table className="w-full text-left border-collapse">
                <tbody className="divide-y divide-gray-200">
                {schedule.map((item, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                    <td className="p-4 font-bold text-ctu-primary whitespace-nowrap w-48">{item.time}</td>
                    <td className={`p-4 ${item.type === 'keynote' ? 'font-bold text-gray-900' : item.type === 'break' ? 'italic text-gray-500' : 'text-gray-700'}`}>
                        {item.event}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              WMAI is held on the ICDM 2026 Workshop Day in Shenyang, China. Keynote speakers and the paper assignment for each session will be announced soon.
            </p>
        </div>
        </section>
    );
}
