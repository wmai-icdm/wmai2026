import React from 'react';

export default function Committees() {
    const organizers = [
    {
        name: "Prof. Hiep Xuan Huynh, Ph.D. (HDR)",
        role: "Lead Contact",
        affiliation: "CTU-AIMED, Can Tho University, Vietnam",
        email: "hxhiep@ctu.edu.vn",
        bio: "Full Professor of Computer Science, leading the CTU Leading Research Team on Automation, AI, IT and Digital Transformation (CTU-AIMED). Research spans KDD, AI, IoT, and energy-based models. Published 227+ papers.",
        links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=IGFdnzQAAAAJ" }
        ]
    },
    {
        name: "Prof. Fabrice Guillet, Ph.D. (HDR)",
        role: "Co-organizer",
        affiliation: "LS2N (CNRS UMR 6004), Polytech Nantes, Nantes Université, France",
        email: "fabrice.guillet@univ-nantes.fr",
        bio: "Full Professor of Computer Science, member of the DUKe research team. Focuses on KDD, interestingness measures, and knowledge visualization. Founding member & past president of the EGC Association.",
        links: [
        { label: "Homepage", url: "https://sites.google.com/site/fabriceeguillet/" }
        ]
    },
    {
        name: "Prof. Ryutaro Ichise, D.Eng.",
        role: "Co-organizer",
        affiliation: "Institute of Science Tokyo (formerly Tokyo Inst. of Technology), Japan",
        email: "ichise@iee.e.titech.ac.jp",
        bio: "Professor at Institute of Science Tokyo. Research includes machine learning, knowledge graphs, semantic web, data mining, and reinforcement learning. Former Associate Professor at NII, Japan.",
        links: [
        { label: "Homepage", url: "https://www.ai.iee.e.titech.ac.jp/ichise/index.html" }
        ]
    }
    ];

    const pcMembers = [
    { name: "Einoshin Suzuki", org: "Kyushu University, Japan" },
    { name: "Anh Hoang Pham", org: "HCMUT, Vietnam" },
    { name: "Ngan Thi Tran", org: "VNUIS, Hanoi, Vietnam" },
    { name: "Congduc Pham", org: "UPPA, France" },
    { name: "Fabien Ferrero", org: "Université de Côte d'Azur, France" },
    { name: "Julien Blanchard", org: "Université de Nantes / LS2N, France" },
    { name: "Vincent Rodin", org: "Université de Bretagne Occidentale, France" },
    { name: "Nghia Duong-Trung", org: "DFKI, Germany" },
    { name: "Nguyen Ngoc Tu", org: "Kennesaw State University, USA" },
    { name: "Van Dinh Tran", org: "KFUPM, Saudi Arabia" },
    { name: "Kim Dinh Thai", org: "VNUIS, Vietnam" },
    { name: "Nguyen Thi My Binh", org: "Hanoi University of Industry, Vietnam" },
    { name: "Van Thanh Le", org: "HCMUT, Vietnam" },
    { name: "Dung Duc Nguyen", org: "HCMUT, Vietnam" },
    { name: "Hieu Trung Huynh", org: "IUH, Vietnam" },
    { name: "Nguyen Tuong Huynh", org: "IUH, Vietnam" },
    { name: "Hanh My Thi Le", org: "Danang University of Technology, Vietnam" },
    { name: "Nhat Minh Viet Vo", org: "Hue University, Vietnam" },
    { name: "Hanh Huu Hoang", org: "MOST, Vietnam" },
    { name: "Quang-Cherng Hsu", org: "NKUST, Taiwan" },
    { name: "Tuyen Ngoc Le", org: "Ming Chi University of Technology, Taiwan" },
    { name: "Tsimitomby Briand", org: "IST-Antsiranana, Madagascar" },
    { name: "Mahamadou Traore", org: "Université Gaston Berger, Senegal" }
    ];

    return (
    <section id="committees" className="py-20 bg-white font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Organizers Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-academic text-ctu-primary mb-8 border-b-2 border-ctu-secondary pb-2">
            Workshop Organizers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizers.map((org, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-white bg-ctu-secondary inline-block px-2 py-0.5 rounded mb-3">
                    {org.role}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 font-academic">{org.name}</h3>
                  <div className="text-xs text-ctu-primary font-medium mt-1 mb-3">{org.affiliation}</div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">{org.bio}</p>
                </div>
                
                <div className="border-t border-gray-200/60 pt-3 text-xs space-y-1 mt-auto">
                  <div>
                    <span className="text-gray-400">Email: </span> 
                    <a href={`mailto:${org.email}`} className="text-ctu-primary hover:underline font-medium">{org.email}</a>
                  </div>
                  {org.links.map((link, lIdx) => (
                    <div key={lIdx}>
                      <span className="text-gray-400">Web: </span>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-ctu-secondary hover:underline font-medium">
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Committee Section */}
        <div>
          <h3 className="text-2xl font-bold font-academic text-ctu-primary mb-6 border-b border-gray-100 pb-2">
            Tentative Program Committee
          </h3>
          <p className="text-xs text-gray-500 mb-6 italic">
            PC composition ensures broad geographic diversity (Europe, Asia, Africa, Americas) and expertise across applied intelligence systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
            {pcMembers.map((member, idx) => (
              <div key={idx} className="text-sm py-1.5 border-b border-gray-50 flex flex-col justify-center">
                <span className="font-bold text-gray-800 font-academic">{member.name}</span>
                <span className="text-xs text-gray-500">{member.org}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}