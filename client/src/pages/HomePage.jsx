import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#02010a] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* 1. Background Glow Effects (The Purple Mist) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation Placeholder (Matches the top bar) */}
        <nav className="flex justify-between items-center px-10 py-6 max-w-7xl mx-auto">
          <div className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded-lg"></div> ScholarBay
          </div>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <Link to="/">Home</Link>
            <Link to="/library">Library</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
          <button className="bg-indigo-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-500 transition-all">
            Get Started
          </button>
        </nav>

        {/* Hero Section */}
        <header className="container mx-auto px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 mb-8">
            <span className="text-yellow-500">★</span> Trusted by students worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We design & build <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              high-impact learning
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            A smart hub for students to discover notes, books, and 
            previous-year papers. Ask questions, track progress, and 
            climb the leaderboard.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/library" className="px-8 py-3 bg-indigo-600 rounded-xl font-medium shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 transition-transform">
              Explore Library →
            </Link>
            <Link to="/upload" className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors">
              Upload Notes
            </Link>
          </div>

          {/* Feature Grid (Matches the "Strategy-led" section) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 max-w-2xl mx-auto rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-[#0b051a] p-8 text-left">
              <h4 className="font-bold mb-2">Centralized Library</h4>
              <p className="text-sm text-gray-500">Focused on subject & semester-wise organization.</p>
            </div>
            <div className="bg-[#0b051a] p-8 text-left">
              <h4 className="font-bold mb-2">Smart Tracking</h4>
              <p className="text-sm text-gray-500">Earn points, unlock badges, and top the leaderboard.</p>
            </div>
          </div>
        </header>

        {/* Ready to Grow Section (The bottom CTA box) */}
        <section className="container mx-auto px-6 pb-40">
           <div className="bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-3xl">
              <div className="bg-[#0b051a] rounded-3xl py-20 text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to grow your brand?</h2>
                <button className="bg-indigo-600 px-8 py-3 rounded-xl font-semibold">Start your project</button>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
