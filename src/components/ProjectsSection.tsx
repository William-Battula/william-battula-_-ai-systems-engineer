import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/index';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Featured <span className="text-quantum-blue">Projects</span></h2>
          <p className="text-gray-400 max-w-xl">Recent work focusing on AI integration and scalable cloud systems.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[2rem] overflow-hidden hover:border-quantum-blue/50 transition-all flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-quantum-dark to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-mono uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 
                  className="text-2xl font-bold mb-4 group-hover:text-quantum-blue transition-colors cursor-pointer"
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  role="button"
                  tabIndex={0}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-8 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Case Study</span>
                  <div className="flex gap-4">
                    <Github size={20} className="text-gray-500 hover:text-white cursor-pointer transition-colors" />
                    <ExternalLink 
                      size={20} 
                      className="text-gray-500 hover:text-white cursor-pointer transition-colors" 
                      onClick={() => project.link && window.open(project.link, '_blank')}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
