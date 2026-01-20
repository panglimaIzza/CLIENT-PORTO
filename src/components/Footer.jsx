import React from 'react';

export default function Footer() {
  return (
    <footer id='contact' className="bg-[#09090b] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-50"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          
          {/* --- BAGIAN KIRI: Branding & Pesan --- */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              Let's <span className="text-[#10B981]">Connect.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Tertarik berdiskusi tentang keamanan siber, proyek kolaborasi, atau sekadar menyapa? Jangan ragu untuk menghubungi saya.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
               <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-500 font-mono">Open for CTF Team</span>
               <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-gray-500 font-mono">Available for Hire</span>
            </div>
          </div>

          {/* --- BAGIAN KANAN: Social Links --- */}
          <div className="flex flex-col md:items-end gap-6">
            
            {/* EMAIL BUTTON */}
            <a 
              href="mailto:panglimaizza21@gmail.com"
              className="group flex items-center gap-3 bg-[#18181B] border border-white/10 px-6 py-4 rounded-xl hover:border-[#10B981] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 w-full md:w-auto"
            >
              <div className="p-2 bg-[#10B981]/10 rounded-lg group-hover:bg-[#10B981] transition-colors">
                <svg className="w-6 h-6 text-[#10B981] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Drop me an email</p>
                <p className="text-white font-medium group-hover:text-[#10B981] transition-colors">Kirim Pesan Sekarang</p>
              </div>
            </a>

            {/* SOCIAL ICONS ROW */}
            <div className="flex gap-4">
              
              {/* 1. GitHub */}
              <a 
                href="https://github.com/panglimaizza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#18181B] border border-white/10 text-gray-400 hover:text-white hover:bg-[#10B981] hover:border-[#10B981] transition-all duration-300"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* 2. LinkedIn */}
              <a 
                href="https://linkedin.com/in/panglima-izzal-haq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#18181B] border border-white/10 text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>

              {/* 3. TryHackMe (Logo Asli) */}
              <a 
                href="https://tryhackme.com/p/sahaCing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#18181B] border border-white/10 hover:border-[#C1272D] hover:bg-[#C1272D] transition-all duration-300 group/thm"
                title="TryHackMe"
              >
                {/* Menggunakan CDN Simple Icons untuk logo presisi */}
                <img 
                  src="https://cdn.simpleicons.org/tryhackme" 
                  alt="TryHackMe" 
                  className="w-6 h-6 filter grayscale opacity-60 group-hover/thm:grayscale-0 group-hover/thm:opacity-100 transition-all duration-300"
                />
              </a>

              {/* 4. HackerOne (Logo Asli) */}
              <a 
                href="https://hackerone.com/sahaCing" // GANTI USERNAME
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#18181B] border border-white/10 hover:border-white hover:bg-white transition-all duration-300 group/h1"
                title="HackerOne"
              >
                {/* Logo H1 Putih, berubah Hitam saat di-hover (karena background jadi putih) */}
                <img 
                  src="https://cdn.simpleicons.org/hackerone/white" 
                  alt="HackerOne" 
                  className="w-6 h-6 opacity-60 group-hover/h1:opacity-100 group-hover/h1:invert transition-all duration-300"
                />
              </a>

            </div>
          </div>
        </div>

        {/* --- COPYRIGHT SECTION --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 Panglima Izzal Haq. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs">
            <span className="hover:text-[#10B981] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#10B981] cursor-pointer transition-colors">Term of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}