import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-[#18181B] relative overflow-hidden"
    >
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      {/* Green Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* GRID: kiri lebih lebar */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12 items-center">

          {/* ================= LEFT CARD ================= */}
          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981] to-emerald-800 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000"></div>

            <div className="relative bg-[#09090b] border border-[#10B981]/20 rounded-2xl p-6 shadow-2xl overflow-x-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  user_profile.json
                </span>
              </div>

              {/* Code */}
              <div className="font-mono text-sm space-y-2 min-w-[520px]">
                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">1</span>
                  <p className="whitespace-nowrap">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">target</span>{' '}
                    = <span className="text-blue-400">{'{'}</span>
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">2</span>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-sky-300">name</span>:{' '}
                    <span className="text-[#10B981]">'Panglima Izzal Haq'</span>,
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">3</span>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-sky-300">role</span>:{' '}
                    <span className="text-[#10B981]">'Cyber Security Enthusiast'</span>,
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">4</span>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-sky-300">skills</span>:{' '}
                    <span className="text-yellow-300">
                      ['CTF', 'Pentest', 'Bug Bounty', 'Backend Dev']
                    </span>,
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">5</span>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-sky-300">tools</span>:{' '}
                    <span className="text-yellow-300">
                      ['Burp Suite', 'Kali Linux']
                    </span>,
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">6</span>
                  <p className="pl-4 whitespace-nowrap">
                    <span className="text-sky-300">status</span>:{' '}
                    <span className="text-[#10B981]">'Student @ Itenas'</span>
                  </p>
                </div>

                <div className="flex">
                  <span className="text-gray-700 w-6 text-right mr-4 select-none">7</span>
                  <p className="whitespace-nowrap">
                    <span className="text-blue-400">{'}'}</span>;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#10B981] uppercase mb-2">
              Who Am I?
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Cyber Security Enthusiast <br />
              <span className="bg-gradient-to-r from-[#10B981] to-emerald-600 bg-clip-text text-transparent">
                Bug Bounty Hunter.
              </span>
            </h3>

            <div className="text-gray-400 text-lg leading-relaxed space-y-4 mb-8">
              <p>
                Saya <strong className="text-gray-200">Panglima Izzal Haq</strong>,
                seorang Cyber Security Enthusiast yang aktif belajar melalui CTF,
                penetration testing, dan eksplorasi tools seperti{' '}
                <span className="text-gray-200 font-medium">Burp Suite</span>.
              </p>
              <p>
                Saat ini mahasiswa{' '}
                <strong className="text-gray-200">
                  Institut Teknologi Nasional Bandung
                </strong>
                , fokus mengembangkan skill teknis dan mindset security.
              </p>
              <p>
                Saya menikmati proses menemukan celah, memecahkan tantangan,
                dan membangun solusi yang berdampak positif.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-2xl font-bold text-white">CTF</h4>
                <p className="text-xs text-gray-500 uppercase mt-1">Player</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Bug</h4>
                <p className="text-xs text-gray-500 uppercase mt-1">Hunter</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Itenas</h4>
                <p className="text-xs text-gray-500 uppercase mt-1">Student</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
