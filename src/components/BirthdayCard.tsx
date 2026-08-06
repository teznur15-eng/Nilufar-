import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gift, Heart, Stars, Music } from 'lucide-react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Birthday is August 7, 2026 (assuming current year is 2026 based on metadata)
    const targetDate = new Date('2026-08-07T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 w-full max-w-2xl px-6 py-12 bg-white/40 backdrop-blur-md rounded-3xl border border-white/50 shadow-2xl overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <div className="flex justify-center space-x-2 text-rose-400">
          <Stars size={24} className="animate-pulse" />
          <span className="font-sans tracking-[0.2em] uppercase text-xs font-semibold">2009.08.07 — 2026.08.07</span>
          <Stars size={24} className="animate-pulse" />
        </div>

        <h1 className="font-playfair text-5xl md:text-7xl font-bold text-slate-800 leading-tight">
          Nilufar <br /> 
          <span className="text-rose-500 italic">Rofitjonova</span>
        </h1>

        <p className="font-sans text-slate-600 max-w-md mx-auto leading-relaxed">
          Sizga dunyodagi barcha shirin orzularning ushalishini, baxt va shodlik hamisha hamrohingiz bo'lishini tilaymiz.
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 py-8 border-y border-slate-200/50">
          {[
            { label: 'Kun', value: timeLeft.days },
            { label: 'Soat', value: timeLeft.hours },
            { label: 'Daqiqa', value: timeLeft.minutes },
            { label: 'Soniya', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-playfair font-bold text-slate-800">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Gift */}
        <div className="pt-8">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-rose-400 to-rose-600 group-hover:from-rose-400 group-hover:to-rose-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-rose-200 transition-all duration-300"
          >
            <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0 flex items-center space-x-2">
              <Gift className={`transition-transform duration-500 ${isOpen ? 'rotate-12 scale-110' : ''}`} />
              <span className="font-sans font-bold uppercase tracking-wider">
                {isOpen ? "Tabrikni yopish" : "Sovg'ani oching"}
              </span>
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.9 }}
              animate={{ opacity: 1, height: 'auto', scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.9 }}
              className="mt-8 p-8 bg-rose-50/50 rounded-2xl border border-rose-100 relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-rose-100 rotate-12">
                <Heart size={120} fill="currentColor" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-rose-600">Tug'ilgan kuningiz bilan!</h3>
                <p className="font-sans text-slate-700 italic">
                  "Hayot yo'llaringiz gularga to'lsin, har bir qadamingiz omadli bo'lsin. 
                  Bugungi quvonchingiz bir umrga tatigulik, Nilufarxon, sizga faqat eng yaxshi tilaklar yor bo'lsin!"
                </p>
                <div className="flex justify-center space-x-4 pt-4 text-rose-400">
                   <Music size={20} />
                   <Heart size={20} fill="currentColor" />
                   <Stars size={20} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
