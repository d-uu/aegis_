import React from 'react';
import { motion } from 'motion/react';
import { teamData } from '../data';

export default function TeamRoster() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed opacity-5 mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="w-12 h-1 bg-zinc-800 mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-zinc-100 tracking-[0.2em] mb-4 uppercase">Roster</h2>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest max-w-md mx-auto">
            Classified Personnel Dossiers<br/>Aegis & Co. Executive Protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group h-full"
              style={{ 
                '--theme-main': member.color.main, 
                '--theme-dark': member.color.dark,
                '--theme-bg': member.color.bg 
              } as React.CSSProperties}
            >
              <div className="flex flex-col bg-zinc-950 border border-zinc-900 hover:border-[var(--theme-dark)] transition-all duration-700 group h-full relative overflow-hidden">
                
                {/* Hover glow effect behind the card content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--theme-bg)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

                {/* Image Section - Takes top half */}
                <div className="relative w-full aspect-square overflow-hidden bg-zinc-950 border-b border-zinc-900 group-hover:border-[var(--theme-dark)] transition-colors duration-700">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-60 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" 
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-700">No Image</span>
                    </div>
                  )}
                  
                  {/* Inner shadow / vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 from-15% via-zinc-950/40 to-transparent pointer-events-none"></div>

                  {/* Top Bar inside Image */}
                  <div className="absolute top-0 inset-x-0 p-5 flex justify-between items-center z-10">
                    <div className="flex items-center gap-3 bg-zinc-950/50 backdrop-blur-md px-3 py-1.5 border border-zinc-800/50 group-hover:border-[var(--theme-dark)] transition-colors">
                      <span className="text-[var(--theme-main)] w-3 h-3 flex items-center justify-center">{member.icon}</span>
                      <span className="text-[9px] font-mono text-zinc-300 tracking-[0.2em] uppercase">{member.callsign}</span>
                    </div>
                    <div className="text-[10px] font-mono text-[var(--theme-main)] tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                      OP-{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Name overlaid on image bottom */}
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10">
                    <h3 className="text-3xl font-serif text-zinc-300 tracking-wider mb-1 group-hover:text-white transition-colors">{member.name}</h3>
                    <p className="text-[9px] text-[var(--theme-main)] font-mono tracking-[0.3em] uppercase opacity-80">{member.engName}</p>
                  </div>
                </div>

                {/* Body Section */}
                <div className="flex flex-col p-6 flex-grow relative z-10">
                  {/* Role */}
                  <div className="mb-6 flex justify-between items-end border-b border-zinc-900 pb-4 group-hover:border-[var(--theme-dark)] transition-colors">
                    <div>
                      <div className="text-[9px] text-zinc-600 uppercase tracking-widest mb-1.5 font-sans">Assignment</div>
                      <div className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">{member.role}</div>
                    </div>
                    {/* Decorative element */}
                    <div className="w-4 h-4 border-r border-b border-[var(--theme-main)] opacity-30 group-hover:opacity-80 transition-opacity"></div>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8">
                    <div>
                      <div className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1 font-sans">Profile Type</div>
                      <div className="text-[11px] font-mono text-zinc-300">{member.mbti} · {member.enneagram}</div>
                    </div>
                    <div>
                      <div className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1 font-sans">Age</div>
                      <div className="text-[11px] font-mono text-zinc-300">{member.age}</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-[8px] text-zinc-600 uppercase tracking-widest mb-1 font-sans">Physical Vitals</div>
                      <div className="text-[11px] font-mono text-zinc-300">{member.bloodType} / {member.height}</div>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {member.keywords.map((kw, i) => (
                        <span 
                          key={i} 
                          className="text-[10px] font-sans text-zinc-500 group-hover:text-[var(--theme-main)] px-2 py-1 bg-zinc-900/30 border border-zinc-800/50 group-hover:border-[var(--theme-dark)] transition-all duration-300"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
