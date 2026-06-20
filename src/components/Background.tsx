import { motion } from 'motion/react';

export const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <motion.div 
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-quantum-blue/5 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-quantum-purple/5 rounded-full blur-[120px]"
      />
    </div>
  );
};
