import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-serif tracking-widest uppercase">Aura</div>
        
        <div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-[0.2em]">
          <a href="#work" className="hover:opacity-50 transition-opacity">Work</a>
          <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-paper border-b border-ink/10 p-6 flex flex-col space-y-6 text-xs uppercase tracking-widest"
        >
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-8">
            Crafting <br />
            <span className="italic">Digital</span> <br />
            Prestige
          </h1>
          <p className="max-w-md text-sm leading-relaxed opacity-70 mb-10">
            Aura is a boutique design studio dedicated to creating elevated digital experiences for luxury brands and visionary individuals.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-4 group"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium">Explore Work</span>
            <div className="w-12 h-12 rounded-full border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-all">
              <ArrowRight size={16} />
            </div>
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto w-full"
        >
          <div className="absolute inset-0 oval-mask bg-ink/5 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/minimal/800/1000" 
              alt="Hero" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text text-[10px] uppercase tracking-[0.5em] opacity-40">
            Est. MMXXIV — Portfolio
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Work = () => {
  const projects = [
    { title: "Ethereal", category: "Brand Identity", img: "https://picsum.photos/seed/luxury1/800/1000" },
    { title: "Onyx", category: "Digital Design", img: "https://picsum.photos/seed/luxury2/800/1000" },
    { title: "Lumina", category: "Art Direction", img: "https://picsum.photos/seed/luxury3/800/1000" },
  ];

  return (
    <section id="work" className="py-32 px-6 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <h2 className="text-5xl md:text-7xl font-light mb-6 md:mb-0">Selected <br /><span className="italic">Works</span></h2>
          <p className="max-w-xs text-xs uppercase tracking-widest opacity-50 leading-loose">
            A curation of projects that redefine the boundaries of digital elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-serif mb-1">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">{project.category}</p>
                </div>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1">
          <div className="aspect-[4/5] bg-ink/5 overflow-hidden">
            <img 
              src="https://picsum.photos/seed/studio/800/1000" 
              alt="Studio" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-50 mb-8 block">The Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Simplicity is the <br />
            <span className="italic">Ultimate Sophistication</span>
          </h2>
          <div className="space-y-6 text-sm leading-relaxed opacity-70">
            <p>
              We believe that true luxury lies in the details. Our approach combines classical design principles with cutting-edge technology to create digital artifacts that stand the test of time.
            </p>
            <p>
              Every pixel is intentional. Every interaction is considered. We don't just build websites; we craft digital legacies for those who appreciate the finer things in life.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-ink/10">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Strategy</h4>
              <p className="text-[11px] opacity-60">Deep research and brand positioning.</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Design</h4>
              <p className="text-[11px] opacity-60">Bespoke visual systems and UI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-paper border-t border-ink/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-light mb-12">Let's <span className="italic">Connect</span></h2>
        <p className="text-sm opacity-60 mb-16 max-w-md mx-auto">
          Available for select collaborations and bespoke digital projects. Reach out to start a conversation.
        </p>
        
        <form className="space-y-8 text-left">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-ink/20 py-4 focus:border-ink outline-none transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest opacity-50">Email</label>
              <input type="email" className="w-full bg-transparent border-b border-ink/20 py-4 focus:border-ink outline-none transition-colors" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest opacity-50">Message</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-ink/20 py-4 focus:border-ink outline-none transition-colors resize-none"></textarea>
          </div>
          <button className="w-full py-6 bg-ink text-paper text-xs uppercase tracking-[0.4em] hover:opacity-90 transition-opacity">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-xs uppercase tracking-widest opacity-40">
          © 2024 Aura Studio. All Rights Reserved.
        </div>
        <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em]">
          <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, Work, About, Contact, Footer };
