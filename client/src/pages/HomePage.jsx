import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#05010d] text-white font-sans selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-fuchsia-900/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-sm font-medium text-purple-200/80">✨ Trusted by 5,000+ students worldwide</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          The smart hub for <br />
          <span className="text-purple-500">high-impact learning</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          ScholarBay helps students discover and share notes, books, and
          previous-year papers. Ask questions, track your progress, and
          climb the leaderboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <Link to="/library" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
            Explore Library
          </Link>
          <Link to="/upload" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-semibold transition-all backdrop-blur-md">
            Upload Notes
          </Link>
        </div>

        {/* Features / Why ScholarBay Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-20">
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-left backdrop-blur-xl hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">01</div>
              Centralized Resources
            </h3>
            <p className="text-gray-400">Access study materials organized by subject and semester in one unified dashboard.</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-left backdrop-blur-xl hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm">02</div>
              Gamified Learning
            </h3>
            <p className="text-gray-400">Earn points, unlock exclusive badges, and compete for the top spot on the global leaderboard.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
