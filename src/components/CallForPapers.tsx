import React from 'react';

export default function CallForPapers() {
    const topics = [
    {
        title: "World Models for Data Mining",
        items: [
        "Predictive world models for temporal and spatio-temporal data mining",
        "Configurable world models that adapt to different data mining tasks",
        "Learning environment dynamics from unstructured and heterogeneous data",
        "World model-based planning for automated data analytics pipelines"
        ]
    },
    {
        title: "Joint Embedding Predictive Architectures (JEPA)",
        items: [
        "Practical implementations of I-JEPA, V-JEPA, and H-JEPA for mining tasks",
        "Joint embedding methods for multi-modal data fusion and mining",
        "Energy-based models for structured prediction in graphs, text, and time series",
        "Self-supervised pre-training strategies inspired by JEPA for data mining"
        ]
    },
    {
        title: "Intrinsic Motivation & Autonomous Exploration",
        items: [
        "Curiosity-driven exploration for data acquisition and active learning",
        "Intrinsic reward mechanisms for reinforcement learning-based data mining",
        "Autonomous feature discovery and representation learning",
        "Self-directed learning strategies for mining in evolving environments"
        ]
    },
    {
        title: "Scalable and Deployable AMI Systems",
        items: [
        "System architectures for real-time AMI-based analytics",
        "Federated and distributed implementations of AMI components",
        "Industrial case studies: AMI in recommendation, fraud detection, healthcare, smart cities",
        "Benchmarks and evaluation frameworks for AMI-inspired data mining"
        ]
    },
    {
        title: "Safety, Interpretability, and Ethics",
        items: [
        "Interpretable world models and explainable autonomous decision-making",
        "Safety guarantees and alignment in AMI-driven systems",
        "Ethical considerations in deploying autonomous data mining agents",
        "Robustness and fairness in AMI-based predictions"
        ]
    }
    ];

    return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-academic text-ctu-primary mb-4 border-b-2 border-ctu-secondary pb-2">
          Call for Papers (Topics of Interest)
        </h2>
        <p className="text-gray-600 font-sans mb-12 text-lg">
          We solicit original research papers, position papers, and system demonstrations on the following topics (but not limited to):
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {topics.map((topic, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-ctu-primary mb-4 font-academic flex items-center gap-2">
                <span className="w-2 h-2 bg-ctu-secondary rounded-full"></span>
                {topic.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {topic.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <span className="text-ctu-secondary font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}