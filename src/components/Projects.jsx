import React, { useEffect, useState } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ambil URL Backend dari .env (opsional, jika hardcode localhost juga tidak apa-apa)
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    useEffect(() => {
        fetch(`${API_URL}/api/projects`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Gagal koneksi server:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section id="projects" className="py-32 bg-[#18181B] relative overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-[#10B981] uppercase mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
                        Portfolio
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-600">Project</span>
                    </h3>
                </div>
                
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 border border-white/5 rounded-2xl bg-[#09090b]">
                        <div className="w-12 h-12 border-4 border-[#10B981]/30 border-t-[#10B981] rounded-full animate-spin mb-4"></div>
                        <p className="text-[#10B981] font-mono animate-pulse">INITIALIZING DATA STREAM...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {projects.length === 0 && (
                            <div className="col-span-full text-center py-12 border border-dashed border-gray-700 rounded-2xl">
                                <p className="text-gray-500 font-mono">
                                    [SYSTEM NOTICE]: No project data received.<br/>
                                    Please ensure backend server is active.
                                </p>
                            </div>
                        )}
                        
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="group relative bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-500 flex flex-col h-[350px]"
                            >
                                {/* ==========================
                                    LAYER 1: KONTEN UTAMA (Visible Default)
                                   ========================== */}
                                <div className="p-6 flex flex-col h-full relative z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    {/* Header Icon */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-[#18181B] rounded-lg border border-white/5">
                                            <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="text-gray-600">
                                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t, i) => (
                                                <span 
                                                    key={i} 
                                                    className="text-[10px] uppercase tracking-wider font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded border border-[#10B981]/20 font-mono"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* ==========================
                                    LAYER 2: HOVER OVERLAY (Hidden Default)
                                   ========================== */}
                                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-[#09090b]">
                                    
                                    {/* Gambar Project Background */}
                                    <img 
                                        src={project.image || "https://placehold.co/600x400/18181b/10B981?text=No+Image"} 
                                        alt={project.title} 
                                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    
                                    {/* Gradient Overlay biar teks terbaca */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent"></div>

                                    {/* Content Hover */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                        
                                        <div className="flex gap-3 mt-4">
                                            {/* Tombol Detail */}
                                            <a 
                                                href={project.link || "#"} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-[#10B981] text-black font-bold py-2 px-4 rounded-lg text-sm text-center hover:bg-emerald-400 transition-colors"
                                            >
                                                View Details
                                            </a>
                                            
                                            {/* Tombol LinkedIn */}
                                            <a 
                                                href={project.linkedin || "#"} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center bg-white text-black w-10 h-10 rounded-lg hover:bg-gray-200 transition-colors"
                                                title="View on LinkedIn"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}