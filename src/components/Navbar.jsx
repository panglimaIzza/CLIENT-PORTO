import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Deteksi scroll untuk mengubah style border/shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    // CONTAINER UTAMA: Fixed di tengah atas (Floating)
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      
      <nav 
        className={`
          transition-all duration-500 ease-in-out
          ${isMobileOpen ? 'rounded-3xl' : 'rounded-full'} // Berubah bentuk saat mobile menu buka
          ${isScrolled 
            ? 'bg-[#18181B]/80 backdrop-blur-xl border border-[#10B981]/30 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]' 
            : 'bg-[#18181B]/60 backdrop-blur-md border border-white/5'
          }
          w-full max-w-5xl px-6 py-3
        `}
      >
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold tracking-wider flex items-center gap-2 group">
              <span className="w-3 h-3 rounded-full bg-emerald-500 group-hover:animate-ping"></span>
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:text-emerald-400 transition-colors">
                PORTO
              </span>
            </a>
          </div>

          {/* --- DESKTOP MENU (Hidden on Mobile) --- */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 rounded-full hover:text-white group overflow-hidden"
              >
                {/* Efek Spotlight saat Hover */}
                <span className="absolute inset-0 w-full h-full bg-[#10B981]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
                <span className="relative z-10">{item}</span>
              </a>
            ))}
            
            {/* Tombol Call to Action Kecil */}
            <a href="#contact" className="ml-4 px-5 py-2 text-xs font-bold text-[#18181B] bg-[#10B981] rounded-full hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5">
              Hire Me
            </a>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-gray-300 hover:text-[#10B981] focus:outline-none transition-transform active:scale-90"
            >
              {isMobileOpen ? (
                // Icon X (Close)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icon Menu (Hamburger)
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* --- MOBILE DROPDOWN MENU --- */}
        <div 
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
          `}
        >
          <div className="flex flex-col space-y-2 pb-2 border-t border-white/10 pt-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileOpen(false)}
                className="px-4 py-3 text-center text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {item}
              </a>
            ))}
             <a href="#contact" onClick={() => setIsMobileOpen(false)} className="mt-2 px-4 py-3 text-center font-bold text-[#18181B] bg-[#10B981] rounded-xl">
              Hire Me
            </a>
          </div>
        </div>

      </nav>
    </div>
  );
}