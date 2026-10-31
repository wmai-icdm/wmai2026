import React from 'react';

type Paper = { time: string; id: string; title: string; authors: string };
type Item =
    | { kind: 'event'; time: string; event: string; detail?: string; muted?: boolean }
    | { kind: 'session'; time: string; event: string; chair: string; papers: Paper[]; discussion?: { time: string; event: string } };

export default function Program() {
    // Official slot assigned by ICDM 2026 (Workshop Day schedule): W05 | WMAI, Room London
    const venue = [
        { label: "Date", value: "Thursday, November 12, 2026" },
        { label: "Time", value: "08:30 – 12:00 (UTC+8)" },
        { label: "Room", value: "London" },
        { label: "Schedule ID", value: "W05" },
    ];

    const sessionChair = "A/Prof. Hien Dinh Nguyen";

    // Programme – version 4 (31 October 2026)
    const schedule: Item[] = [
        {
            kind: 'event', time: "08:30 - 08:40", event: "Opening and welcome",
            detail: "Prof. Fabrice Guillet (Nantes Université), online, on behalf of the Workshop Chairs",
        },
        {
            kind: 'session', time: "08:40 - 09:50", event: "Session 1 – World Models and Autonomous Workflows", chair: sessionChair,
            papers: [
                {
                    time: "08:40 - 09:00", id: "S02203",
                    title: "PRoVE: Separating Self-Motion from World Change in Video World Models via Camera-Pose Positional Embeddings",
                    authors: "Tsai Shuo Kuo, Masanori Yokota, Ryutaro Ichise",
                },
                {
                    time: "09:00 - 09:20", id: "S02206",
                    title: "Per-Step Proofs Do Not Prove a Roll-out: Temporal Integrity as a Missing Obligation for World Models",
                    authors: "Nhan Vo, Duy Ninh, Hiep Xuan Huynh",
                },
                {
                    time: "09:20 - 09:40", id: "DM1814",
                    title: "Mining AI-Assisted Course Design Workflows at Production Scale",
                    authors: "Aleksandr Volkov, Taras Pustovoy, Dmitriy Istomin",
                },
            ],
            discussion: { time: "09:40 - 09:50", event: "Discussion of Session 1" },
        },
        { kind: 'event', time: "09:50 - 10:10", event: "Coffee break", muted: true },
        {
            kind: 'session', time: "10:10 - 11:30", event: "Session 2 – Multimodal Understanding, Retrieval and Representation Mining", chair: sessionChair,
            papers: [
                {
                    time: "10:10 - 10:30", id: "S02201",
                    title: "Context-Anchored Transformer with Masked Feature Modeling for Group Emotion Recognition",
                    authors: "Nha Tran, Minh Nguyen, Vi Huynh, Dung Dang, Hung Nguyen, Tai Huynh, Hien Nguyen",
                },
                {
                    time: "10:30 - 10:50", id: "S02204",
                    title: "SentiV: A Benchmark for Low-Resource Vietnamese Speech–Text Emotion Understanding",
                    authors: "Duc Dat Pham, Ngoc Tram Huynh Thi, Minh Anh Vo Ngoc, Nhan Le Thanh Pham, Tien Le Anh, Phuoc-Hai Huynh, Tan Duy Le, Kha Tu Huynh",
                },
                {
                    time: "10:50 - 11:10", id: "S02202",
                    title: "A Comparative Study of Similarity and Distance Metrics for Re-ranking in Retrieval-Augmented Generation (RAG)",
                    authors: "H.-A.-Khoa Ngo, K.-Duy Vo, A.-Duy Nguyen, A.-Khoi Ngo-H.",
                },
                {
                    time: "11:10 - 11:30", id: "S02207",
                    title: "Energy-Distance Multi-Fidelity Pruning for Hyperparameter Optimization in Deep Representation Mining",
                    authors: "Thuy Tran, Nghia Phan, Hiep Xuan Huynh",
                },
            ],
        },
        {
            kind: 'event', time: "11:30 - 11:50", event: "Open discussion",
            detail: "Directions for world models and autonomous intelligence in data mining",
        },
        {
            kind: 'event', time: "11:50 - 12:00", event: "Closing",
            detail: "Announcement of AMI 2027 (22–24 April 2027, Vietnam)",
        },
        { kind: 'event', time: "12:00 - 13:00", event: "Lunch (Grand Ballroom 2)", muted: true },
    ];

    const timeCell = "p-4 font-bold text-ctu-primary whitespace-nowrap w-40 align-top";

    return (
        <section id="program" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-ctu-primary font-academic mb-8 border-b-2 border-ctu-secondary pb-2">
            Workshop Program
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 font-sans">
            {venue.map((v) => (
                <div key={v.label} className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">{v.label}</div>
                <div className="font-bold text-ctu-primary mt-1">{v.value}</div>
                </div>
            ))}
            </div>
            <div className="text-sm text-gray-700 font-sans space-y-1 mb-6">
            <p>
                <strong className="text-ctu-primary">Session Chair:</strong> A/Prof. Hien Dinh Nguyen, Ph.D. (University of Information Technology, VNU-HCM, Vietnam)
            </p>
            <p className="text-gray-500">
                Each paper is allotted 20 minutes: 15 minutes of presentation and 5 minutes of questions. All times are local (China Standard Time, UTC+8).
            </p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-sm overflow-x-auto font-sans border border-gray-100">
            <table className="w-full text-left border-collapse">
                {schedule.map((item, index) => item.kind === 'event' ? (
                    <tbody key={index} className="border-b border-gray-200 last:border-b-0">
                    <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className={timeCell}>{item.time}</td>
                        <td className={`p-4 ${item.muted ? 'italic text-gray-500' : 'text-gray-700'}`}>
                        <div className={item.muted ? '' : 'font-bold text-gray-900'}>{item.event}</div>
                        {item.detail && <div className="text-sm text-gray-600 mt-1">{item.detail}</div>}
                        </td>
                    </tr>
                    </tbody>
                ) : (
                    <tbody key={index} className="border-b border-gray-200">
                    <tr className="bg-blue-50">
                        <td className={timeCell}>{item.time}</td>
                        <td className="p-4">
                        <div className="font-bold text-ctu-primary font-academic">{item.event}</div>
                        <div className="text-xs text-gray-500 mt-1">Session chair: {item.chair}</div>
                        </td>
                    </tr>
                    {item.papers.map((paper) => (
                        <tr key={paper.id} className="hover:bg-blue-50/50 transition-colors">
                        <td className={`${timeCell} text-sm`}>{paper.time}</td>
                        <td className="p-4 text-sm">
                            <div>
                            <span className="font-bold text-gray-900 mr-2">{paper.id}</span>
                            <span className="italic text-gray-800">{paper.title}</span>
                            </div>
                            <div className="text-gray-500 mt-1">{paper.authors}</div>
                        </td>
                        </tr>
                    ))}
                    {item.discussion && (
                        <tr className="hover:bg-blue-50/50 transition-colors">
                        <td className={`${timeCell} text-sm`}>{item.discussion.time}</td>
                        <td className="p-4 text-sm text-gray-700">{item.discussion.event}</td>
                        </tr>
                    )}
                    </tbody>
                ))}
            </table>
            </div>
        </div>
        </section>
    );
}
