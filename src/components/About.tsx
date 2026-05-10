import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-ctu-primary font-academic mb-8 border-b-2 border-ctu-secondary pb-2">
            About the Workshop
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-4 font-sans text-justify">
            <p>
                The concept of Autonomous Machine Intelligence (AMI), as articulated by Yann LeCun in his influential 2022 position paper, 
                proposes a comprehensive architectural blueprint for building intelligent agents capable of learning, reasoning, 
                and planning in ways that resemble human and animal cognition.
            </p>
            <p>
                The AMI architecture integrates several key components: a configurable predictive world model, behavior driven 
                through intrinsic motivation, and hierarchical Joint Embedding Predictive Architectures (H-JEPA) trained via 
                self-supervised learning.
            </p>
            <p>
                However, a significant gap remains between the theoretical vision of AMI and its practical realization in real-world 
                data mining and AI systems. This workshop aims to bridge that gap by focusing specifically on practical implementations, 
                empirical validations, and scalable deployments of AMI-inspired techniques in data mining.
            </p>
            </div>
        </div>
        </section>
    );
}