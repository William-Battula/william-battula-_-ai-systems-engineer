import { Terminal } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 quantum-gradient rounded flex items-center justify-center">
            <Terminal size={12} className="text-white" />
          </div>
          <span className="font-bold tracking-tighter">William<span className="text-quantum-blue"> Battula</span></span>
        </div>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} William Battula. Built with React & Motion.
        </p>
        
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/william-battula-1678ab15/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://drive.google.com/file/d/10fJWUMaZiXrAUxpmWJzmIh5OqFulYZdF/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-gray-500 hover:text-white transition-colors">Resume</a>
        </div>
      </div>
    </footer>
  );
};
