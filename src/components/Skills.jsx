import React from 'react';

export default function Skills() {
  const skills = [
    {
      title: "Backend Development",
      level: "Node.js & Express",
      description: "Membangun REST API yang aman, scalable, dan efisien menggunakan Node.js, serta mengelola logika server dan integrasi database."
    },
    {
      title: "Capture The Flag (CTF)",
      level: "Beginner",
      description: "Mengikuti dan menyelesaikan challenge CTF untuk melatih kemampuan analisis, eksploitasi dasar, dan pemahaman keamanan web."
    },
    {
      title: "Basic Penetration Testing",
      level: "Foundation",
      description: "Memahami langkah-langkah dasar pentest seperti reconnaissance, scanning, exploitation sederhana, dan reporting."
    },
    {
      title: "Burp Suite",
      level: "Basic Usage for Bug Bounty",
      description: "Menggunakan Burp Suite untuk intercept request, melakukan testing dasar, menemukan celah sederhana, serta memahami alur traffic web."
    },
    {
      title: "OWASP Top 10",
      level: "Basic Understanding",
      description: "Memahami konsep dasar dari sepuluh risiko keamanan web paling umum, seperti XSS, SQLi, IDOR, dan lainnya."
    },
    {
      title: "Linux Command Line",
      level: "Basic",
      description: "Menggunakan perintah dasar Linux untuk navigasi, pengelolaan file, permission, dan kebutuhan sederhana dalam proses pentest."
    },
    {
      title: "Networking Basics",
      level: "TCP/IP, HTTP, DNS",
      description: "Memahami konsep dasar jaringan dan protokol umum yang penting dalam analisis trafik dan pemahaman alur komunikasi sistem."
    },
    {
      title: "IDOR",
      level: "Insecure Direct Object Reference",
      description: "Mengidentifikasi dan mengeksploitasi celah IDOR sederhana untuk memahami access control dan otorisasi yang tidak aman."
    },
    {
      title: "Privilege Escalation",
      level: "Basic",
      description: "Mempelajari teknik dasar eskalasi hak akses pada sistem atau lab untuk meningkatkan pemahaman struktur keamanan."
    },
    {
      title: "Basic Brute Force",
      level: "Authentication Testing",
      description: "Melakukan brute force terhadap endpoint atau login form dengan tools dasar untuk mengenali kelemahan autentikasi sederhana."
    },
    {
      title: "Ethical Hacking",
      level: "Mindset & Approach",
      description: "Menerapkan pendekatan dan mindset keamanan secara etis, berfokus pada pembelajaran, analisis kerentanan, dan peningkatan keamanan sistem."
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#18181B] relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl"></div>
       <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-widest text-[#10B981] uppercase mb-3">
            My Skills
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
            Dev & Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-600">Skills</span>
            </h3>
        </div>

        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative bg-[#09090b] border border-white/10 rounded-xl p-6 hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-[#18181B] rounded-lg border border-white/5 flex items-center justify-center group-hover:border-[#10B981] transition-colors flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-[#10B981] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                </div>
                <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-[#10B981] group-hover:animate-ping mt-2"></span>
              </div>

              <div className="text-left flex-grow">
                <h4 className="text-white font-bold text-lg group-hover:text-[#10B981] transition-colors uppercase leading-snug">
                  {skill.title}
                </h4>
                <p className="text-xs text-[#10B981] mt-2 font-mono mb-4 font-bold border-b border-white/5 pb-2 inline-block">
                  [{skill.level}]
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}