import Hero from './components/Hero';
import Location from './components/Location';
import TeamRoster from './components/TeamRoster';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-violet-900/50 selection:text-violet-100">
      <Hero />
      <Location />
      <TeamRoster />
      
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900/50">
        <div className="px-6 text-center">
          <p className="text-zinc-600 text-sm font-serif mb-2">AEGIS & CO.</p>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">The Pinnacle of Executive Protection</p>
        </div>
      </footer>
    </div>
  );
}
