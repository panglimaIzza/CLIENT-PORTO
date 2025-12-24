import React, { useEffect, useState } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mengambil data dari Backend Server
        fetch('http://localhost:5000/api/projects')
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
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-600">Operations</span>
                    </h3>
                </div>
                
                {/* Kondisi Loading */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-64 border border-white/5 rounded-2xl bg-[#09090b]">
                        <div className="w-12 h-12 border-4 border-[#10B981]/30 border-t-[#10B981] rounded-full animate-spin mb-4"></div>
                        <p className="text-[#10B981] font-mono animate-pulse">INITIALIZING DATA STREAM...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Jika Server Mati / Data Kosong */}
                        {projects.length === 0 && (
                            <div className="col-span-full text-center py-12 border border-dashed border-gray-700 rounded-2xl">
                                <p className="text-gray-500 font-mono">
                                    [SYSTEM NOTICE]: No project data received.<br/>
                                    Please ensure backend server (port 5000) is active.
                                </p>
                            </div>
                        )}
                        
                        {/* Mapping Data Project */}
                        {projects.map((project) => (
                            <div 
                                key={project.id} 
                                className="group relative bg-[#09090b] border border-white/10 rounded-2xl overflow-hidden hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.2)] flex flex-col"
                            >
                                {/* Header Card (Terminal Look) */}
                                <div className="h-2 bg-gradient-to-r from-[#10B981] to-emerald-900 w-full"></div>
                                <div className="p-6 flex flex-col flex-grow">
                                    
                                    {/* Top Icons */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-[#18181B] rounded-lg border border-white/5 group-hover:border-[#10B981]/30 transition-colors">
                                            {/* Folder Icon */}
                                            <svg className="w-6 h-6 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        {/* External Link Icon (Hiasan) */}
                                        <div className="text-gray-600 group-hover:text-white transition-colors">
                                             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Title & Desc */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#10B981] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="border-t border-white/5 pt-4">
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
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}