import { motion } from 'motion/react';

export default function Balloons() {
  const colors = ['bg-rose-300', 'bg-pink-300', 'bg-amber-200', 'bg-rose-400', 'bg-slate-300'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: '110vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 0.7, 0.7, 0],
            x: `${Math.random() * 100}vw`
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className={`absolute w-8 h-10 rounded-full ${colors[i % colors.length]} blur-sm`}
        />
      ))}
    </div>
  );
}
