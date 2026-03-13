import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Globe, Shield, Database, Users, Network, Sun, Moon } from "lucide-react";

export const Navbar = ({ 
  activePage, 
  setActivePage, 
  theme, 
  toggleTheme 
}: { 
  activePage: string, 
  setActivePage: (page: string) => void,
  theme: string,
  toggleTheme: () => void
}) => {
  const navItems = ["Home", "About", "Systems", "Research", "Partnerships", "Updates", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={() => setActivePage("Home")}
        >
          <div className="w-8 h-8 bg-navy flex items-center justify-center text-bg font-bold text-[10px] transition-colors duration-300">RBT</div>
          <span className="font-bold tracking-tighter text-xs hidden sm:block text-navy uppercase transition-colors duration-300">Reality and Beyond.</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                activePage === item ? "text-navy font-bold" : "text-muted hover:text-navy"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 text-navy hover:bg-bg-secondary rounded-full transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <button 
            onClick={() => setActivePage("Contact")}
            className="bg-navy text-bg px-4 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-black transition-colors duration-300"
          >
            Inquire
          </button>
        </div>
      </div>
    </nav>
  );
};


const SystemMap = () => (
  <div className="relative w-full h-full min-h-[500px] flex items-center justify-center">
    <div className="absolute inset-0 grid-pattern opacity-10" />
    
    {/* Central Hub */}
    <div className="relative w-80 h-80 border border-navy/10 rounded-full flex items-center justify-center">
      <div className="absolute inset-0 border border-navy/5 rounded-full scale-125 animate-pulse" />
    <div className="w-40 h-40 border border-navy/20 rounded-full flex items-center justify-center bg-bg shadow-2xl transition-colors duration-300">
        <div className="text-center">
          <div className="text-[10px] font-mono text-muted mb-1 transition-colors duration-300">SYSTEM_CORE</div>
          <div className="w-16 h-16 bg-navy rounded-full mx-auto flex items-center justify-center text-bg font-bold text-xs transition-colors duration-300">RBT</div>
        </div>
      </div>

      {/* Nodes and Connections */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <div 
          key={i}
          className="absolute group"
          style={{
            transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`
          }}
        >
          <div className="w-3 h-3 bg-bg border-2 border-navy rounded-full group-hover:bg-accent transition-colors duration-300" />
          <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="text-[7px] font-mono uppercase tracking-tighter text-muted bg-bg/80 px-1 transition-colors duration-300">
              {["CIVIC_DATA", "INSTITUTION_API", "POLICY_LOGIC", "CITIZEN_UI", "KNOWLEDGE_GRAPH", "SECURE_AUTH", "SYSTEM_BRIDGE", "NETWORK_HUB"][i]}
            </div>
          </div>
          {/* Connecting Line to Center */}
          <div 
            className="absolute top-1/2 left-1/2 h-px bg-navy/10 origin-left"
            style={{
              width: "100px",
              transform: `rotate(${angle + 180}deg) translate(12px)`
            }}
          />
        </div>
      ))}
    </div>
    
    {/* Technical Overlay */}
    <div className="absolute bottom-4 right-4 text-right">
      <div className="text-[8px] font-mono text-muted uppercase tracking-[0.3em] transition-colors duration-300">Institutional Infrastructure v2.4.0</div>
      <div className="text-[8px] font-mono text-muted uppercase tracking-[0.3em] transition-colors duration-300">Reality and Beyond Technologies Lab</div>
    </div>
  </div>
);

export const Hero = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <section className="pt-40 pb-20 px-6 relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mono-label mb-6 flex items-center space-x-3">
          <span className="w-8 h-px bg-navy/20" />
          <span>Reality and Beyond Technologies</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95] text-navy">
          Engineering <br />Systems for <br />Society.
        </h1>
        <p className="max-w-xl text-xl text-muted leading-relaxed mb-12 transition-colors duration-300">
          Reality and Beyond Technologies (RBT) builds intelligent systems that help societies navigate complex institutions and public services.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={() => setActivePage("Systems")}
            className="btn-primary group"
          >
            <span>Explore Systems</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => setActivePage("About")}
            className="btn-secondary"
          >
            Institutional Vision
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hidden lg:block relative"
      >
        <SystemMap />
      </motion.div>
    </div>
  </section>
);


export const ProblemSection = () => (
  <section className="py-32 px-6 border-t border-border bg-bg-secondary transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24">
        <div>
          <div className="mono-label mb-6">The Challenge</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-navy">The Complexity Gap</h2>
          <p className="text-lg text-muted leading-relaxed transition-colors duration-300">
            Modern institutions have become increasingly complex. RBT designs <strong>Civic Intelligence Infrastructure</strong> to bridge the gap between citizens and the fragmented systems they must navigate.
          </p>
        </div>
        <div className="space-y-12">
          <div className="flex items-start space-x-6">
            <div className="text-2xl font-bold text-navy font-mono">01</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Institutional Friction</h3>
              <p className="text-sm text-muted transition-colors duration-300">Bureaucratic processes that are difficult for citizens to understand and navigate.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="text-2xl font-bold text-navy font-mono">02</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Information Asymmetry</h3>
              <p className="text-sm text-muted transition-colors duration-300">Critical public knowledge is often inaccessible or poorly structured for human use.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="text-2xl font-bold text-navy font-mono">03</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Infrastructure Deficit</h3>
              <p className="text-sm text-muted transition-colors duration-300">A lack of intelligent systems designed specifically for civic navigation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const FeaturedSystem = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-bg border border-border p-12 aspect-square flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-navy" />
            <div className="mono-label mb-12">Nusuru Architecture v1.0</div>
            <div className="space-y-8 relative">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-navy" />
                <div className="h-px flex-grow bg-border" />
                <div className="w-4 h-4 border border-navy" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 border border-border flex items-center justify-center font-mono text-[10px] text-muted transition-colors duration-300">DATA_LAKE</div>
                <div className="h-24 border border-border flex items-center justify-center font-mono text-[10px] text-muted transition-colors duration-300">LLM_CORE</div>
                <div className="h-24 border border-border flex items-center justify-center font-mono text-[10px] text-muted transition-colors duration-300">CIVIC_API</div>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="flex justify-between">
                <div className="mono-label">CITIZEN_UI</div>
                <div className="mono-label">INSTITUTION_HUB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="mono-label mb-6">First Major Implementation</div>
          <h2 className="text-5xl font-bold mb-4 tracking-tight text-navy">Nusuru.</h2>
          <div className="text-xs uppercase tracking-widest font-bold text-accent mb-8">Bridging the Complexity Gap</div>
          <p className="text-lg text-muted mb-8 leading-relaxed transition-colors duration-300">
            Nusuru is RBT's flagship system—an AI-powered civic infrastructure designed to help citizens understand and access public services with ease.
          </p>
          <p className="text-sm text-muted mb-8 transition-colors duration-300">
            By transforming fragmented public information into an intelligent guidance system, Nusuru demonstrates how RBT's infrastructure can bridge the complexity gap between institutions and society.
          </p>
          <button 
            onClick={() => setActivePage("Systems")}
            className="btn-primary"
          >
            Explore Nusuru Architecture
          </button>
        </div>
      </div>
    </div>
  </section>
);


export const OurWork = () => {
  const areas = [
    { title: "Civic Intelligence Systems", icon: <Shield size={20} />, desc: "AI systems that help citizens understand institutions." },
    { title: "Public Knowledge Infrastructure", icon: <Database size={20} />, desc: "Structured knowledge systems for public services." },
    { title: "Institutional Navigation Platforms", icon: <Globe size={20} />, desc: "Tools that guide people through complex government processes." },
    { title: "Systems Research", icon: <Network size={20} />, desc: "Designing new models for AI-powered civic infrastructure." },
  ];

  return (
    <section className="py-32 px-6 border-t border-border bg-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mono-label mb-12">Our Work</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {areas.map((area, i) => (
            <div key={i} className="bg-bg p-10 hover:bg-bg-secondary transition-colors group duration-300">
              <div className="mb-8 text-navy group-hover:text-accent transition-colors duration-300">{area.icon}</div>
              <h3 className="text-xl font-bold mb-4 leading-tight text-navy transition-colors duration-300">{area.title}</h3>
              <p className="text-sm text-muted leading-relaxed transition-colors duration-300">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurApproach = () => {
  const values = [
    { title: "Systems Thinking", desc: "We design entire systems, not isolated tools." },
    { title: "Long-Term Infrastructure", desc: "Our work focuses on durable civic technology." },
    { title: "Institutional Collaboration", desc: "We partner with governments, foundations, and researchers." },
  ];

  return (
    <section className="py-32 px-6 bg-navy text-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mono-label text-bg/50 mb-12 transition-colors duration-300">Our Approach</div>
        <div className="grid md:grid-cols-3 gap-16">
          {values.map((val, i) => (
            <div key={i}>
              <div className="text-accent font-mono mb-6">0{i+1}</div>
              <h3 className="text-2xl font-bold mb-6 text-bg transition-colors duration-300">{val.title}</h3>
              <p className="text-bg/60 leading-relaxed transition-colors duration-300">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ResearchPreview = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <div className="mono-label mb-4">Research & Insights</div>
          <h2 className="text-4xl font-bold tracking-tight text-navy">Thinking Institution</h2>
        </div>
        <button 
          onClick={() => setActivePage("Research")}
          className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border-b border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
        >
          <span>Read our research</span>
          <ArrowRight size={12} />
        </button>
      </div>
      <div className="space-y-12">
        {[
          "Why navigating public services should not feel like solving a maze.",
          "Designing AI systems for governments.",
          "The future of civic intelligence infrastructure.",
        ].map((title, i) => (
          <div key={i} className="group cursor-pointer flex justify-between items-center py-8 border-b border-border">
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors max-w-3xl leading-tight">
              {title}
            </h3>
            <ArrowRight size={24} className="text-border group-hover:text-accent transition-colors" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const WorkWithUs = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <section className="py-32 px-6 bg-bg-secondary border-y border-border transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="mono-label mb-6">Partnerships</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-navy">Work With Us</h2>
          <p className="text-lg text-muted mb-12 leading-relaxed transition-colors duration-300">
            RBT collaborates with institutions to design and deploy intelligent systems for public infrastructure.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-12">
            {["Governments", "Foundations", "Research Institutions", "Technology Partners"].map((p, i) => (
              <div key={i} className="flex items-center space-x-3 text-sm font-bold text-navy">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span>{p}</span>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setActivePage("Partnerships")}
            className="btn-primary"
          >
            Explore partnerships
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-bg border border-border p-8 flex items-center justify-center transition-colors duration-300">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest transition-colors duration-300">GOV_COLLAB</div>
          </div>
          <div className="aspect-square bg-bg border border-border p-8 flex items-center justify-center transition-colors duration-300">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest transition-colors duration-300">RESEARCH_LAB</div>
          </div>
          <div className="aspect-square bg-bg border border-border p-8 flex items-center justify-center transition-colors duration-300">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest transition-colors duration-300">FOUNDATION_HUB</div>
          </div>
          <div className="aspect-square bg-bg border border-border p-8 flex items-center justify-center transition-colors duration-300">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest transition-colors duration-300">TECH_STACK</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const VisionSection = () => (
  <section className="py-40 px-6 text-center">
    <div className="max-w-4xl mx-auto">
      <div className="mono-label mb-12">Our Vision</div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-navy leading-tight">
        A world where every citizen can easily understand and access the institutions that shape their lives.
      </h2>
    </div>
  </section>
);

export const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => (
  <footer className="py-20 px-6 border-t border-border bg-bg transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-navy flex items-center justify-center text-bg font-bold text-[10px] transition-colors duration-300">RBT</div>
            <span className="font-bold tracking-tighter text-xs text-navy uppercase transition-colors duration-300">Reality and Beyond.</span>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed transition-colors duration-300">
            Engineering the systems that power society. RBT is a long-term institution dedicated to public infrastructure and civic intelligence.
          </p>
        </div>
        <div>
          <div className="mono-label mb-6">Institutional</div>
          <ul className="space-y-3 text-sm font-medium text-navy transition-colors duration-300">
            <li><button onClick={() => setActivePage("About")} className="hover:text-accent transition-colors">About RBT</button></li>
            <li><button onClick={() => setActivePage("Systems")} className="hover:text-accent transition-colors">Our Systems</button></li>
            <li><button onClick={() => setActivePage("Research")} className="hover:text-accent transition-colors">Research & Insights</button></li>
            <li><button onClick={() => setActivePage("Partnerships")} className="hover:text-accent transition-colors">Partnerships</button></li>
            <li><button onClick={() => setActivePage("Lab")} className="hover:text-accent transition-colors">The RBT Lab</button></li>
          </ul>
        </div>
        <div>
          <div className="mono-label mb-6">Registry</div>
          <ul className="space-y-3 text-sm font-medium text-navy transition-colors duration-300">
            <li><button onClick={() => setActivePage("Updates")} className="hover:text-accent transition-colors">Activity Updates</button></li>
            <li><button onClick={() => setActivePage("Contact")} className="hover:text-accent transition-colors">Institutional Inquiries</button></li>
            <li className="pt-4 text-muted text-[10px] font-mono uppercase tracking-widest transition-colors duration-300">Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-[10px] mono-label">© 2024 REALITY AND BEYOND TECHNOLOGIES LIMITED</div>
        <div className="text-[10px] mono-label">ENGINEERING SYSTEMS FOR SOCIETY</div>
      </div>
    </div>
  </footer>
);

