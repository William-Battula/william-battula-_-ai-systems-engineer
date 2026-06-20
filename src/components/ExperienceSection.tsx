import { motion } from 'motion/react';
import { CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/index';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Professional <span className="text-quantum-blue">Journey</span></h2>
            <p className="text-gray-400">Extensive experience in AI engineering, cloud systems, and middleware administration.</p>
            
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Award size={18} className="text-quantum-blue" />
                <span 
                  className="cursor-pointer hover:text-quantum-blue transition-colors"
                  onClick={() => window.open('https://learn.microsoft.com/en-us/users/williambattula-4859/credentials/e14e61a7eef2396b?ref=https%3A%2F%2Fwww.linkedin.com%2F', '_blank')}
                  role="button"
                  tabIndex={0}
                >
                  Azure AI Fundamentals Certified
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Award size={18} className="text-quantum-blue" />
                <span 
                  className="cursor-pointer hover:text-quantum-blue transition-colors"
                  onClick={() => window.open('https://www.coursera.org/account/accomplishments/verify/681XJN8CF52T', '_blank')}
                  role="button"
                  tabIndex={0}
                >
                  Prompt Engineering Certified
                </span>
              </div>
              <div className="ml-8 mt-2">
                <a href="https://drive.google.com/file/d/10fJWUMaZiXrAUxpmWJzmIh5OqFulYZdF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-quantum-blue transition-colors">View My Detailed Resume</a>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 border-l-2 border-white/10"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-quantum-blue shadow-[0_0_10px_rgba(0,210,255,0.8)]"></div>
                <div className="mb-2">
                  <span className="text-sm font-mono text-quantum-blue mb-1 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-lg text-gray-400">{exp.company}</p>
                </div>
                <ul className="space-y-3 mt-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                      <CheckCircle2 size={18} className="text-quantum-blue shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
