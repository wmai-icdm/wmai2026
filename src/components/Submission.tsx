import React from 'react';

export default function Submission() {
    return (
    <section id="submission" className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold font-academic text-ctu-primary mb-8 border-b-2 border-ctu-secondary pb-2">
          Submission Guidelines
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-sm font-sans space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-bold text-ctu-primary mb-2 font-academic">Paper Format</h3>
            <p className="text-sm leading-relaxed">
              All submissions must be written in English and formatted according to the 
              <strong className="text-gray-900"> IEEE ICDM workshop paper template (IEEE 2-column format)</strong>.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-4">
            <h3 className="text-lg font-bold text-ctu-primary mb-3 font-academic">Submission Types</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="font-bold text-ctu-primary text-sm">Full Research Papers</div>
                <div className="text-xs text-gray-500 mt-1">Up to 8 + 2 pages</div>
                <p className="text-xs mt-2 text-gray-600">Original research with experimental validation.</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="font-bold text-ctu-primary text-sm">Short / Position Papers</div>
                <div className="text-xs text-gray-500 mt-1">Up to 4 + 1 pages</div>
                <p className="text-xs mt-2 text-gray-600">Visionary ideas, preliminary results, or work-in-progress.</p>
              </div>
              <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                <div className="font-bold text-ctu-primary text-sm">System Demos</div>
                <div className="text-xs text-gray-500 mt-1">Up to 4 pages</div>
                <p className="text-xs mt-2 text-gray-600">Demonstrations of practical AMI implementations.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-4 text-sm space-y-2">
            <p>
              <strong className="text-ctu-primary">Review Process:</strong> Each submission will be reviewed by at least 3 program committee members in a <strong className="text-gray-900">single-blind review process</strong>.
            </p>
            <p>
              <strong className="text-ctu-primary">Publication:</strong> Accepted papers will be published in the <strong className="text-gray-900">IEEE ICDM Workshop Proceedings</strong> by the IEEE Computer Society Press and indexed in <strong className="text-gray-900">IEEE Xplore Digital Library</strong>.
            </p>
          </div>

          <div className="pt-6 text-center">
            {/* Thay thế bằng Link thực tế khi có */}
            <a 
              href="#submission-link-pending" 
              className="inline-block bg-ctu-primary hover:bg-ctu-secondary text-white font-bold px-8 py-3 rounded-full transition-colors shadow"
            >
              Submit Paper via CMT (Pending)
            </a>
            <div className="text-xs text-gray-400 mt-2">Link will be announced upon acceptance</div>
          </div>
        </div>
      </div>
    </section>
  );
}