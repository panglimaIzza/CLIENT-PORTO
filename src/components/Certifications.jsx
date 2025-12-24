import React from 'react';

// --- IMPORT GAMBAR DARI ASSETS ---
import cert1 from '../assets/Pentest.webp';
import cert2 from '../assets/IT_support.webp';
import cert3 from '../assets/Cyber.webp';

export default function Certifications() {
  
  const certifications = [
    {
      title: "Penetration Testing (BootCamp Practical)",
      issuer: "Red Limit",
      date: "2025",
      credentialId: "RL.01.29092025.0433",
      image: cert1, 
      link: cert1
    },
    {
      title: "Google Technical Support Fundamentals",
      issuer: "Coursera / Google",
      date: "2023",
      credentialId: "DG2HXWW57PQ2",
      image: cert2,
      link: "https://coursera.org/verify/DG2HXWW57PQ2"
    },
    {
      title: "Cyber Security",
      issuer: "ID-Networkers",
      date: "2023",
      credentialId: "ID-Networkers",
      image: cert3,
      link: cert3
    },
  ];

  return (
    <section id="certifications" className="py-32 bg-[#18181B] relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-[#10B981] uppercase mb-3">
              Validation
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-600">Certifications</span>
            </h3>
        </div>

        {/* Grid Layout Gallery Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)] flex flex-col h-full"
            >
              
              {/* --- IMAGE CONTAINER (PREVIEW SERTIFIKAT) --- */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-800 border-b border-white/5">
                {/* Gambar Sertifikat */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  // --- PERBAIKAN DI SINI ---
                  // Menambahkan 'object-top' agar gambar fokus ke bagian atas
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay saat Hover (Tombol View) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#10B981] text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-emerald-400"
                  >
                    Lihat Asli
                  </a>
                </div>
              </div>

              {/* --- INFO TEXT --- */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                  <span className="text-gray-500 text-xs font-mono">{cert.date}</span>
                </div>
                
                <h4 className="text-white font-bold text-lg mb-4 leading-snug group-hover:text-[#10B981] transition-colors">
                  {cert.title}
                </h4>

                <div className="mt-auto border-t border-white/5 pt-4">
                   <p className="text-xs text-gray-500 font-mono flex gap-1">
                     ID: <span className="text-gray-300 truncate block max-w-[150px]" title={cert.credentialId}>{cert.credentialId}</span>
                   </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}