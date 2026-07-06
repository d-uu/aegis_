import { motion } from 'motion/react';

export default function Location() {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-64 md:h-96 w-full rounded-sm overflow-hidden border border-violet-900/30"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
          <p className="text-violet-400/80 text-[10px] md:text-xs font-mono tracking-[0.3em] mb-2 uppercase">Headquarters</p>
          <p className="text-zinc-200 font-serif text-2xl md:text-4xl tracking-widest">Century City, Los Angeles</p>
        </div>
      </motion.div>
    </div>
  );
}
