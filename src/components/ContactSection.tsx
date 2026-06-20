import { Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-blue/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8">Let's <span className="quantum-text-gradient">Connect</span>.</h2>
              <p className="text-xl text-gray-400 mb-12">
                Open to discussing AI systems engineering, cloud architecture, or middleware optimization opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-quantum-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold">william.battula.ai@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-quantum-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Phone</p>
                    <p className="text-lg font-bold">404-980-1079</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-quantum-blue">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                    <p className="text-lg font-bold">Plano, TX / Remote</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 mt-12">
                <a href="https://www.linkedin.com/in/william-battula-1678ab15/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-quantum-blue hover:text-white transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-quantum-blue hover:text-white transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-quantum-blue transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-quantum-blue transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-quantum-blue transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button className="w-full py-5 rounded-2xl quantum-gradient font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
