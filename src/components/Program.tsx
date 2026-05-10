import React from 'react';

export default function Program() {
    const schedule = [
    { time: "08:30 - 08:45", session: "Opening Remarks", details: "Welcome & workshop overview" },
    { time: "08:45 - 09:30", session: "Keynote 1", details: "World Models & Predictive Architectures in Practice" },
    { time: "09:30 - 10:30", session: "Paper Session 1", details: "JEPA & SSL for Data Mining (3-4 papers, 15 min each)" },
    { time: "10:30 - 11:00", session: "Coffee Break", details: "Networking & poster viewing" },
    { time: "11:00 - 11:45", session: "Keynote 2", details: "Intrinsic Motivation & Autonomous Learning Systems" },
    { time: "11:45 - 12:15", session: "Paper Session 2", details: "Scalable AMI Systems & Applications (2-3 papers)" },
    { time: "12:15 - 12:30", session: "Panel Discussion & Close", details: "\"From AMI Theory to Data Mining Practice\" + closing remarks" }
    ];

    return (
    <section id="program" className="py-20 bg-gray-50 border-t border-gray-200 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-academic text-ctu-primary mb-8 border-b-2 border-ctu-secondary pb-2">
          Tentative Workshop Program
        </h2>
        <p className="text-sm text-gray-500 mb-6 font-sans italic">Duration: Half-day (approximately 3 hours)</p>

        <div className="relative border-l-2 border-ctu-secondary/30 ml-4 pl-6 space-y-8">
          {schedule.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-white border-2 border-ctu-primary rounded-full group-hover:bg-ctu-secondary transition-colors" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-sm font-bold text-ctu-primary shrink-0 w-32 font-mono">
                  {item.time}
                </span>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-academic">{item.session}</h4>
                  <p className="text-sm text-gray-600 mt-0.5">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}