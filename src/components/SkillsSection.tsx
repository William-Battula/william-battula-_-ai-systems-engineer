import React from 'react';
import { motion } from 'framer-motion';

const ROWS = [
  {
    label: 'AI & Cloud',
    direction: 1,
    skills: ['Azure AI (AI-900)', 'GCP', 'AWS', 'Anthropic API', 'Hugging Face', 'Agentic RAG', 'FastAPI', 'Docker', 'OpenLens', 'Prompt Engineering'],
  },
  {
    label: 'Middleware & Servers',
    direction: 1,
    skills: ['Oracle WebLogic 12c/11g/10.x/8.x', 'WebSphere', 'Apache Tomcat', 'IIS Web Server', 'NetScaler Load Balancer', 'CA SiteMinder', 'WLST Scripting', 'SSL Certificates', 'JVM Tuning', 'Application Firewall'],
  },
  {
    label: 'DevOps & Tools',
    direction: 1,
    skills: ['Jenkins', 'GitHub', 'GitHub Copilot MCP', 'CI/CD Pipelines', 'Kubernetes', 'Selenium', 'Jira', 'BMC Remedy', 'Wily Introscope', 'VS Code'],
  },
  {
    label: 'Programming & Data',
    direction: 1,
    skills: ['Python', 'Java', 'JavaScript', 'HTML & CSS', 'Shell Script', 'MySQL Workbench', 'Toad for Oracle', 'Snowflake', 'Fuse.js', 'Firestore'],
  },
  {
    label: 'Management',
    direction: 1,
    skills: ['Change Management', 'Release Management', 'Incident Management', 'Team Management', 'NOC Management', 'SLA Ownership', 'Production Support', 'Root Cause Analysis', 'Stakeholder Communication', 'Offshore/Onshore Coordination'],
  },
];

const flowTransition = {
  duration: 60,
  repeat: Infinity,
  ease: 'linear',
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold tracking-tighter mb-4">Technical <span className="text-quantum-blue">Expertise</span></h2>
          <p className="text-gray-400">A diverse toolkit built over 17 years of engineering excellence.</p>
        </div>

        <div className="space-y-6">
          {ROWS.map((row) => {
            const directionFactor = row.direction === 1 ? -80 : 80;
            return (
              <div
                key={row.label}
                className="overflow-hidden rounded-3xl border border-white/10 p-4 bg-slate-900/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-6">
                  <div className="w-56 flex-shrink-0 text-slate-300 text-sm font-semibold tracking-wider">
                    {row.label}
                  </div>

                  <div className="relative flex-1 h-12 overflow-hidden">
                    <motion.div
                      className="flex items-center gap-6 absolute top-0 left-0"
                      initial={{ x: '0%' }}
                      animate={{ x: `${directionFactor}%` }}
                      transition={flowTransition}
                    >
                      {[...row.skills, ...row.skills].map((skill, idx) => (
                        <motion.span
                          key={`${skill}-${idx}`}
                          className="min-w-max px-4 py-2 bg-white/10 border border-white/20 rounded-2xl text-sm text-gray-100 tracking-wide drop-shadow-sm"
                          style={{ boxShadow: '0 8px 20px rgba(255,255,255,0.08)' }}
                          whileHover={{ y: -4, scale: 1.03 }}
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            type: 'spring',
                            stiffness: 160,
                            damping: 18,
                            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop', delay: idx * 0.12 },
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
