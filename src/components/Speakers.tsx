import React from 'react';

export default function Speakers() {
    const preliminarySpeakers = [
    {
        name: "Keynote Speaker 1 (TBA)",
        affiliation: "Leading AI Research Lab / University",
        expertise: "Self-supervised learning, JEPA implementations",
    },
    {
        name: "Keynote Speaker 2 (TBA)",
        affiliation: "Meta FAIR / DeepMind / Academia",
        expertise: "World models, model-based RL, planning",
    },
    {
        name: "Keynote Speaker 3 (TBA)",
        affiliation: "Leading AI Research Lab / University",
        expertise: "Energy-based models, structured prediction",
    }
    ];

    return (
    <section id="speakers" className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-academic text-ctu-primary inline-block border-b-2 border-ctu-secondary pb-2">
            Preliminary Invited Speakers
          </h2>
          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Three invited speakers will be confirmed upon acceptance, covering leading research from institutions like Meta FAIR, DeepMind, and top universities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preliminarySpeakers.map((spk, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-center flex flex-col items-center">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 font-bold text-xl border-2 border-ctu-secondary/50">
                ?
              </div>
              <h3 className="font-bold text-lg text-gray-900 font-academic">{spk.name}</h3>
              <div className="text-xs text-ctu-primary font-medium mt-1 mb-3">{spk.affiliation}</div>
              <p className="text-xs text-gray-600 mt-auto bg-white p-3 rounded border border-gray-100 w-full">
                <strong className="block text-gray-500 mb-1">Focus Area:</strong>
                {spk.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}