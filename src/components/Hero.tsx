import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { companyData } from '../data';

export default function Hero() {
  return (
    <div className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-violet-950/20 to-zinc-950"></div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-700/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-violet-900/10 rounded-full blur-3xl mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center flex flex-col items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex flex-col items-center"
        >
          <div className="mb-8 md:mb-12 p-4 md:p-6 border border-amber-500/40 bg-zinc-900/80 backdrop-blur-md rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <div className="-rotate-45 flex items-center justify-center text-amber-500">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 6.5l1 3.5 3.5 1-3.5 1-1 3.5-1-3.5-3.5-1 3.5-1 1-3.5z" />
                <circle cx="12" cy="11" r="1" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-widest text-zinc-100 mb-6 md:mb-8">
            {companyData.name}
          </h1>
          <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-8 w-full justify-center">
            <div className="h-px w-12 md:w-32 bg-gradient-to-r from-transparent to-violet-800/80"></div>
            <span className="text-[10px] md:text-sm font-mono text-violet-400/80 tracking-[0.3em] uppercase">VIP Unit</span>
            <div className="h-px w-12 md:w-32 bg-gradient-to-l from-transparent to-violet-800/80"></div>
          </div>
          <p className="text-xs md:text-lg font-light text-zinc-500 tracking-widest uppercase">
            {companyData.tagline}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
