import { motion } from 'motion/react';
import { Sparkles, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-quantum-blue mb-6"
          >
            <Sparkles size={14} />
            <span>AI Systems Engineer | 17+ Years IT Experience</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8"
          >
            Bridging <span className="quantum-text-gradient">AI Innovation</span> and Enterprise Scale.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            Specializing in AI-powered platforms, cloud microservices, and mission-critical middleware. From building conversational agents to managing global telecom infrastructure.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#experience" className="px-8 py-4 rounded-full quantum-gradient font-bold flex items-center gap-2 group hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all">
              View Experience
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full glass font-bold hover:bg-white/10 transition-all flex items-center gap-2">
              Contact Me
            </a>
          </motion.div>
          
          <div className="mt-20 flex flex-wrap gap-8 text-gray-500">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">17+</span>
              <span className="text-xs uppercase tracking-widest">Years Exp.</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Azure AI</span>
              <span className="text-xs uppercase tracking-widest">Certified</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">Telecom</span>
              <span className="text-xs uppercase tracking-widest">Domain Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
