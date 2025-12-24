import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#18181B] relative overflow-hidden pt-16">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#22c55e]/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <p className="text-[#22c55e] tracking-[0.2em] mb-4 text-sm font-medium uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#ECFDF5] mb-6">
          I am <span className="bg-gradient-to-r from-[#22c55e] to-[#86efac] bg-clip-text text-transparent">Panglima Izzal Haq</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600 mb-8">
          Full Stack Developer.
        </h2>
        <div className="flex justify-center gap-4 mt-8">
          <a href="#about" className="px-8 py-3 border-[#10B981] border hover:bg-[#10B981] text-[#10B981] hover:text-black rounded-full font-medium transition-all">
            View More
          </a>
        </div>
      </div>
    </section>  
  );
}