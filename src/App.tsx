/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Balloons from './components/Balloons';
import BirthdayCard from './components/BirthdayCard';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-[#faf9f6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-50 rounded-full blur-[100px] opacity-60" />
      
      {/* Dynamic Background Elements */}
      <Balloons />
      
      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <BirthdayCard />
        
        <footer className="mt-12 text-slate-400 font-sans text-xs tracking-widest uppercase flex items-center space-x-2">
          <span>Created with</span>
          <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
          <span>for a special celebration</span>
        </footer>
      </div>

      {/* Decorative Ornaments */}
      <div className="hidden lg:block absolute top-12 right-12 w-32 h-32 border border-slate-200 rounded-full opacity-20 rotate-45" />
      <div className="hidden lg:block absolute bottom-12 left-12 w-48 h-48 border border-slate-200 rounded-full opacity-20 -rotate-12" />
    </main>
  );
}
