import { useState } from "react";
import { motion } from "motion/react";

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ChevronRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

export const FoundingStoryPage = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="mono-label mb-12 flex items-center space-x-2 hover:text-accent transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to About</span>
      </button>
      
      <div className="mono-label mb-4">The Founding Story</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-navy leading-[1.1]">
        Reality and Beyond Technologies.
      </h1>
      
      <div className="prose prose-slate lg:prose-xl max-w-none text-lg text-muted leading-relaxed space-y-12 transition-colors duration-300">
        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The Moment of Realization</h2>
          <p>
            The idea behind Reality and Beyond Technologies began with a simple observation. Across the world, people interact with institutions every day. They renew licenses, register businesses, apply for permits, pay taxes, access healthcare, and navigate legal procedures.
          </p>
          <p>
            These interactions shape lives in profound ways. Yet the systems behind them are often difficult to understand. Information is scattered across agencies. Procedures are unclear. People frequently rely on trial and error just to figure out where to begin. For many citizens, navigating public services feels less like accessing a system and more like solving a maze.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The Question</h2>
          <p>
            This raised an important question: Why, in an age where information is instantly accessible, are institutional systems still so difficult to navigate?
          </p>
          <p>
            Search engines allow people to find knowledge within seconds. Navigation apps guide people through unfamiliar cities. But when it comes to understanding public institutions, people are often left to decipher complex systems on their own. Something fundamental was missing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The Insight</h2>
          <p>
            The insight was simple but powerful. Modern societies had built powerful infrastructure for information, but not for institutional navigation. Public services existed. Information existed.
          </p>
          <p>
            What was missing was the layer that could interpret systems and guide people through them. A system that could transform fragmented institutional knowledge into something structured, understandable, and navigable.
          </p>
          <p className="font-bold text-navy italic">
            This realization led to a broader idea: The future would require civic intelligence infrastructure — systems designed to help societies navigate institutional complexity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The Beginning</h2>
          <p>
            Reality and Beyond Technologies was created to explore and build that infrastructure. Rather than focusing on isolated applications, RBT was founded as a systems engineering lab dedicated to designing technologies that help societies interact with their institutions more effectively.
          </p>
          <p>
            The goal was not simply to build tools. The goal was to design systems that could become part of the long-term infrastructure of modern societies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The First System</h2>
          <p>
            The first step toward this vision became Nusuru. Nusuru was conceived as an intelligent navigation layer for public services — a system capable of helping citizens understand what services exist, how they work, and how to access them.
          </p>
          <p>
            By structuring public information into a civic knowledge system and combining it with intelligent reasoning, Nusuru represents an early prototype of what civic intelligence infrastructure could become.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">The Journey Ahead</h2>
          <p>
            The creation of RBT marks the beginning of a longer journey. As societies grow more complex, the need for systems that help people understand and navigate institutions will only increase.
          </p>
          <p>
            The vision behind RBT is to contribute to a future where interacting with public systems becomes as intuitive as navigating the internet. A future where citizens can easily understand the institutions that shape their lives.
          </p>
        </section>
      </div>
    </div>
  </div>
);

export const DoctrinePage = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="mono-label mb-12 flex items-center space-x-2 hover:text-accent transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to About</span>
      </button>
      
      <div className="mono-label mb-4">The RBT Doctrine</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-navy">Principles for Engineering Systems for Society.</h1>
      <p className="text-xl text-muted mb-16 max-w-2xl leading-relaxed transition-colors duration-300">
        Reality and Beyond Technologies operates under a set of guiding principles that shape how we design systems, approach complex problems, and contribute to society.
      </p>
      <div className="grid md:grid-cols-2 gap-12">
        {[
          {
            num: "01",
            title: "Systems Before Tools",
            points: [
              "Complex societal problems rarely require isolated tools.",
              "They require well-designed systems."
            ],
            desc: "At RBT, we focus on understanding the full architecture of a problem before building technology to address it. Our work prioritizes systems that integrate knowledge, processes, and institutions rather than standalone applications."
          },
          {
            num: "02",
            title: "Infrastructure Over Short-Term Solutions",
            points: [
              "Some of the most important technologies are not visible.",
              "They function quietly as infrastructure that societies depend on."
            ],
            desc: "RBT focuses on building systems that can serve as long-term infrastructure, capable of evolving and supporting institutions over decades."
          },
          {
            num: "03",
            title: "Knowledge Must Be Structured",
            points: [
              "Information alone does not create understanding.",
              "For systems to be useful, knowledge must be organized in ways that reflect relationships between services, processes, and institutions."
            ],
            desc: "Structured knowledge systems enable intelligent systems to interpret complexity and provide meaningful guidance."
          },
          {
            num: "04",
            title: "Technology Should Reduce Institutional Friction",
            points: [
              "Institutions exist to serve society, yet interacting with them can often be difficult.",
              "A core goal of RBT systems is to reduce friction between citizens and institutions, making processes easier to understand and navigate."
            ],
            desc: "Technology should simplify complexity without oversimplifying reality."
          },
          {
            num: "05",
            title: "Human-Centered Systems",
            points: [
              "The success of any system depends on how well it serves the people who rely on it.",
              "RBT systems are designed with the assumption that citizens may not understand institutional structures, processes should be explainable, and guidance should be clear and trustworthy."
            ],
            desc: "Technology must adapt to people, not the other way around."
          },
          {
            num: "06",
            title: "Civic Intelligence Is a Public Good",
            points: [
              "Systems that help societies understand and navigate institutions have profound societal value.",
              "Civic intelligence infrastructure should strengthen transparency, accessibility, and institutional trust."
            ],
            desc: "RBT approaches the development of these systems with a strong commitment to responsible and ethical design."
          },
          {
            num: "07",
            title: "Collaboration Is Essential",
            points: [
              "No single organization can build civic infrastructure alone.",
              "RBT collaborates with governments, research institutions, foundations, and technologists to develop systems that integrate effectively with real-world institutions."
            ],
            desc: "Partnership is fundamental to building systems that matter."
          },
          {
            num: "08",
            title: "Think in Decades",
            points: [
              "Institutional systems evolve slowly.",
              "Technologies that support them must be designed with long time horizons in mind."
            ],
            desc: "RBT approaches system design with a focus on durability, adaptability, and long-term societal value."
          }
        ].map((item, i) => (
          <div key={i} className="space-y-6 p-8 border border-border bg-bg-secondary/50 hover:bg-bg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">{item.num}</span>
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
            <h3 className="text-2xl font-bold text-navy transition-colors duration-300">{item.title}</h3>
            <div className="space-y-4">
              {item.points.map((p, j) => (
                <p key={j} className="text-sm font-medium text-navy leading-tight transition-colors duration-300">{p}</p>
              ))}
              <p className="text-sm text-muted leading-relaxed pt-2 border-t border-border/50 transition-colors duration-300">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-navy text-bg text-center transition-colors duration-300">
        <div className="mono-label mb-6 text-slate-400">Doctrine in One Sentence</div>
        <p className="text-3xl font-bold leading-tight italic">
          "Build systems that help societies understand and navigate their own institutions."
        </p>
      </div>
    </div>
  </div>
);

export const ManifestoPage = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="mono-label mb-12 flex items-center space-x-2 hover:text-accent transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to About</span>
      </button>
      
      <div className="mono-label mb-4">The RBT Systems Manifesto</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-navy leading-tight">Engineering Systems for Society.</h1>
      
      <div className="prose prose-slate lg:prose-xl max-w-none text-lg text-muted leading-relaxed space-y-12 mt-16 transition-colors duration-300">
        <section>
          <p className="text-2xl text-navy font-medium leading-tight mb-8">
            Modern societies run on systems.
          </p>
          <p>
            Public institutions manage services that shape everyday life—healthcare, licensing, taxation, education, transportation, legal processes, and countless other functions that support the operation of society.
          </p>
          <p>
            These systems are essential. Yet for many people, interacting with them is unnecessarily difficult. Information is fragmented across agencies. Processes are unclear. Institutional structures are designed for administration rather than navigation. As a result, citizens often struggle to understand the systems that are meant to serve them.
          </p>
        </section>

        <section className="py-12 border-y border-border">
          <h2 className="text-2xl font-bold text-navy mb-6">The Missing Infrastructure</h2>
          <p>
            Over the past three decades, humanity has built powerful infrastructure for accessing information. Search engines allow people to find knowledge instantly. Digital platforms enable communication across continents. Navigation systems guide people through unfamiliar cities.
          </p>
          <p>
            But a crucial layer of infrastructure remains largely underdeveloped: the infrastructure for navigating institutions. Today, citizens must still interpret complex bureaucratic systems on their own. This gap between people and institutions creates friction, inefficiency, and inequality of access.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">Systems That Understand Systems</h2>
          <p>
            The next generation of infrastructure will not only store information. It will interpret systems. Intelligent systems can transform fragmented institutional knowledge into structured, navigable intelligence—helping citizens understand what services exist, how they work, and how to access them.
          </p>
          <p className="font-bold text-navy">
            These systems do not replace institutions. They make them legible.
          </p>
        </section>

        <section className="py-12 border-y border-border">
          <h2 className="text-2xl font-bold text-navy mb-6">Civic Intelligence Infrastructure</h2>
          <p>
            We believe societies will increasingly rely on a new category of technology: civic intelligence infrastructure. These systems organize institutional knowledge, interpret complex processes, and guide people through interactions with public systems.
          </p>
          <p>
            Just as search engines became the navigation layer for the internet, civic intelligence systems can become the navigation layer for institutions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">Engineering Systems for Society</h2>
          <p>
            Reality and Beyond Technologies exists to help design and build this new layer of infrastructure. Our focus is not simply on creating tools, but on engineering systems that help societies understand and navigate their own institutions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {["Structured civic knowledge", "Intelligent reasoning systems", "Human-centered design", "Collaboration with institutions"].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 border border-border bg-bg-secondary transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-sm font-bold text-navy transition-colors duration-300">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8">
            They must be reliable, explainable, and built with long-term societal value in mind.
          </p>
        </section>

        <section className="py-12 border-y border-border">
          <h2 className="text-2xl font-bold text-navy mb-6">The First Step</h2>
          <p>
            The first system developed within this vision is Nusuru. Nusuru is designed as an intelligent navigation layer for public services—helping citizens understand institutional processes and access the services that shape their lives. It represents an early step toward a broader civic intelligence infrastructure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-navy mb-6">Looking Forward</h2>
          <p>
            As societies grow more complex, the need for systems that help people understand and navigate institutions will only increase. The question is no longer whether such systems will exist. The question is who will build them—and how thoughtfully they will be designed.
          </p>
        </section>

        <section className="pt-12 border-t border-border">
          <h2 className="text-2xl font-bold text-navy mb-6">Our Commitment</h2>
          <p>
            Reality and Beyond Technologies is committed to building systems that strengthen the connection between people and the institutions that serve them.
          </p>
          <ul className="space-y-2 mt-4 text-navy font-medium">
            <li>• Systems that reduce friction.</li>
            <li>• Systems that improve understanding.</li>
            <li>• Systems that help societies function more effectively.</li>
          </ul>
          <p className="mt-8">
            Because when institutions are easier to navigate, societies work better for everyone.
          </p>
        </section>

        <div className="bg-navy text-bg p-12 text-center mt-20 transition-colors duration-300">
          <div className="mono-label mb-6 text-slate-400">The Core Idea</div>
          <p className="text-3xl font-bold leading-tight italic">
            "The next generation of public infrastructure will be systems that help societies understand and navigate their own institutions."
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const AboutPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [activeView, setActiveView] = useState<"Narrative" | "Story" | "Doctrine" | "Manifesto">("Narrative");

  if (activeView === "Story") {
    return <FoundingStoryPage onBack={() => setActiveView("Narrative")} />;
  }

  if (activeView === "Doctrine") {
    return <DoctrinePage onBack={() => setActiveView("Narrative")} />;
  }

  if (activeView === "Manifesto") {
    return <ManifestoPage onBack={() => setActiveView("Narrative")} />;
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="mono-label mb-8">Institutional Narrative</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-navy">The RBT Narrative.</h1>
          </div>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => setActiveView("Story")}
              className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border-b border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              <span>Founding Story</span>
              <ArrowRight size={12} />
            </button>
            <button 
              onClick={() => setActiveView("Doctrine")}
              className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border-b border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              <span>Doctrine</span>
              <ArrowRight size={12} />
            </button>
            <button 
              onClick={() => setActiveView("Manifesto")}
              className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border-b border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              <span>Manifesto</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>
        
        <div className="space-y-24 text-lg text-muted leading-relaxed transition-colors duration-300">
        {/* 1. The World Is Becoming Increasingly Complex */}
        <section>
          <div className="mono-label mb-6">01. Complexity</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The World Is Becoming Increasingly Complex</h2>
          <p className="mb-6">
            Modern societies operate through vast networks of institutions. Governments, regulatory systems, healthcare providers, financial systems, and public service agencies collectively shape how societies function.
          </p>
          <p>
            Yet for most people, interacting with these systems is difficult. Information is fragmented. Processes are often unclear. Institutional structures are not designed for intuitive navigation. Citizens are expected to navigate systems that were not built with their experience in mind.
          </p>
        </section>

        {/* 2. The Invisible Infrastructure Problem */}
        <section className="py-12 border-y border-border">
          <div className="mono-label mb-6">02. Infrastructure</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The Invisible Infrastructure Problem</h2>
          <p className="mb-6">
            Over the past decades, the world has built powerful infrastructure for information. Search engines allow people to find knowledge instantly. Communication platforms connect billions of people globally.
          </p>
          <p>
            But an equally important layer of infrastructure remains underdeveloped: the infrastructure for navigating institutions. Today, citizens must still interpret bureaucratic systems manually. The result is a persistent gap between people and the institutions that serve them.
          </p>
        </section>

        {/* 3. The Foundational Insight */}
        <section>
          <div className="mono-label mb-6">03. Insight</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The Foundational Insight</h2>
          <p className="mb-6">
            The next generation of infrastructure will not only store information. It will interpret systems. Instead of forcing people to understand institutional complexity on their own, intelligent systems will help citizens navigate these structures.
          </p>
          <p className="text-2xl text-navy font-medium leading-tight">
            These systems will transform fragmented institutional knowledge into structured, navigable intelligence. We call this Civic Intelligence Infrastructure.
          </p>
        </section>

        {/* 4. The Role of RBT */}
        <section className="py-12 border-y border-border">
          <div className="mono-label mb-6">04. Mission</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The Role of RBT</h2>
          <p className="mb-8">
            Reality and Beyond Technologies (RBT) exists to design and build this new layer of infrastructure. RBT operates as a systems engineering lab focused on civic and institutional systems.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-50 border border-border transition-colors duration-300">
              <h4 className="font-bold text-navy mb-2 transition-colors duration-300">Organize</h4>
              <p className="text-sm text-muted transition-colors duration-300">Organize institutional knowledge into machine-readable structures.</p>
            </div>
            <div className="p-6 bg-zinc-50 border border-border transition-colors duration-300">
              <h4 className="font-bold text-navy mb-2 transition-colors duration-300">Interpret</h4>
              <p className="text-sm text-muted transition-colors duration-300">Interpret complex public systems for human accessibility.</p>
            </div>
            <div className="p-6 bg-zinc-50 border border-border transition-colors duration-300">
              <h4 className="font-bold text-navy mb-2 transition-colors duration-300">Guide</h4>
              <p className="text-sm text-muted transition-colors duration-300">Guide citizens through processes that shape their lives.</p>
            </div>
          </div>
          <p className="mt-8 text-base">
            Rather than building isolated applications, RBT focuses on long-term systems that can support societies for decades.
          </p>
        </section>

        {/* 5. Nusuru — The First System */}
        <section>
          <div className="mono-label mb-6">05. Implementation</div>
          <h2 className="text-3xl font-bold text-navy mb-6">Nusuru — The First System</h2>
          <p className="mb-6">
            The first system developed within this vision is Nusuru. Nusuru is designed to become an intelligent navigation layer for public services. By structuring information about government services and institutional processes, Nusuru helps citizens understand what services exist, how they work, and what steps are required to access them.
          </p>
          <p>
            Nusuru represents the early stage of a broader idea: civic intelligence systems that help societies navigate institutional complexity.
          </p>
          <button 
            onClick={() => setActivePage("Systems")}
            className="mt-8 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 border-b border-navy pb-1 hover:text-accent hover:border-accent transition-colors"
          >
            <span>View Nusuru Documentation</span>
            <ArrowRight size={12} />
          </button>
        </section>

        {/* 6. The Long-Term Vision */}
        <section className="py-12 border-y border-border">
          <div className="mono-label mb-6">06. Vision</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The Long-Term Vision</h2>
          <p className="mb-8">
            Over time, systems like Nusuru could form part of a broader global infrastructure. A world where citizens can easily understand and navigate:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Public Services", "Healthcare Systems", "Legal Processes", "Education Pathways", "Regulatory Frameworks"].map((item, i) => (
              <div key={i} className="flex items-center space-x-2 text-sm font-medium text-navy transition-colors duration-300">
                <div className="w-1 h-1 bg-accent rounded-full" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-8">
            In this future, interacting with institutions becomes as intuitive as searching for information online.
          </p>
        </section>

        {/* 7. The Institutional Role */}
        <section>
          <div className="mono-label mb-6">07. Collaboration</div>
          <h2 className="text-3xl font-bold text-navy mb-6">The Institutional Role</h2>
          <p className="mb-8">
            RBT aims to contribute to this transformation by operating as a global systems lab. We collaborate with governments, research institutions, foundations, and technologists.
          </p>
          <p>
            Together, we design and deploy systems that strengthen the interface between societies and their institutions.
          </p>
        </section>

        {/* 8. A Quiet but Important Mission */}
        <section className="pt-12 border-t border-border">
          <div className="mono-label mb-6">08. Purpose</div>
          <h2 className="text-3xl font-bold text-navy mb-6">A Quiet but Important Mission</h2>
          <p className="mb-8">
            Many of the most important technologies are invisible. They operate quietly in the background while enabling societies to function more effectively. RBT is working to build the systems that help societies understand themselves better.
          </p>
          
          <div className="bg-bg-secondary p-12 border border-border text-center transition-colors duration-300">
            <div className="mono-label mb-6">The Narrative in One Sentence</div>
            <p className="text-3xl font-bold text-navy leading-tight italic transition-colors duration-300">
              "Reality and Beyond Technologies builds intelligent systems that help societies navigate complex institutions."
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);
};


const ArchitectureDiagram = ({ title, steps, theme = "light" }: { title: string, steps: string[], theme?: "light" | "dark" }) => (
  <div className={`${theme === "dark" ? "bg-navy text-bg" : "bg-bg-secondary text-navy"} p-12 border border-border transition-colors duration-300`}>
    <div className={`mono-label mb-12 text-center ${theme === "dark" ? "text-slate-400" : ""}`}>{title}</div>
    <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
      {steps.map((step, i, arr) => (
        <div key={i} className="w-full flex flex-col items-center">
          <div className={`w-full p-4 border ${
            theme === "dark" 
              ? (i === 0 || i === arr.length - 1 ? "bg-bg text-navy border-bg" : "bg-navy/50 border-bg/20 text-bg")
              : (i === 0 || i === arr.length - 1 ? "bg-navy text-bg border-navy" : "bg-bg border-border text-navy")
          } text-center font-bold text-sm tracking-wide transition-all duration-500`}>
            {step}
          </div>
          {i < arr.length - 1 && (
            <div className="py-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={theme === "dark" ? "text-bg/20" : "text-slate-300"}>
                <path d="M12 5v14M19 12l-7 7-7-7"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const SystemsPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mono-label mb-8">Nusuru</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight text-navy">AI Infrastructure for Navigating Public Services.</h1>

      <div className="space-y-32">
        <section id="nusuru-overview">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="mono-label mb-6 text-accent">The Problem</div>
              <h2 className="text-4xl font-bold mb-8 text-navy leading-tight">Navigating public services can feel like solving a maze.</h2>
              <p className="text-lg text-muted mb-8 transition-colors duration-300">
                Citizens often need to interact with multiple government agencies, websites, and procedures just to complete simple tasks such as:
              </p>
              <ul className="space-y-3 text-muted mb-8 list-disc list-inside transition-colors duration-300">
                <li>renewing licenses</li>
                <li>paying fines</li>
                <li>accessing permits</li>
                <li>understanding eligibility for services</li>
              </ul>
              <p className="text-base text-muted transition-colors duration-300">
                The information exists, but it is fragmented across institutions and difficult to interpret.
              </p>
            </div>
            <div className="bg-bg-secondary border border-border p-12 transition-colors duration-300">
              <div className="mono-label mb-6">The Idea Behind Nusuru</div>
              <p className="text-lg font-medium text-navy mb-6 transition-colors duration-300">
                Nusuru is designed to become an intelligent navigation layer for public services.
              </p>
              <p className="text-sm text-muted leading-relaxed transition-colors duration-300">
                Instead of forcing citizens to search through complex systems, Nusuru helps people understand what services exist, how they work, and what steps they need to take.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 border-y border-border">
          <div className="mono-label mb-12">How Nusuru Works</div>
          <p className="text-lg text-muted mb-12 transition-colors duration-300">Nusuru transforms scattered public information into a structured civic knowledge system.</p>
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { title: "Civic Knowledge Graph", desc: "A structured representation of public services, procedures, and institutional relationships." },
              { title: "AI Reasoning Engine", desc: "An intelligent system capable of interpreting citizen questions and mapping them to relevant services." },
              { title: "Citizen Guidance Interface", desc: "A conversational interface that helps users navigate processes step-by-step." }
            ].map((comp, i) => (
              <div key={i} className="space-y-4">
                <div className="w-12 h-12 bg-navy flex items-center justify-center text-bg font-mono text-xs transition-colors duration-300">0{i+1}</div>
                <h3 className="text-xl font-bold text-navy transition-colors duration-300">{comp.title}</h3>
                <p className="text-sm text-muted leading-relaxed transition-colors duration-300">{comp.desc}</p>
              </div>
            ))}
          </div>

          <ArchitectureDiagram 
            title="Nusuru System Architecture"
            steps={[
              "Citizen Question",
              "Nusuru Interface",
              "AI Understanding Layer",
              "Civic Knowledge System",
              "Reasoning Engine",
              "Guided Answer"
            ]}
          />
        </section>

        <section id="examples">
          <div className="max-w-3xl">
            <div className="mono-label mb-8">Example Questions Nusuru Can Answer</div>
            <h2 className="text-3xl font-bold text-navy mb-12">Clear guidance through a single system.</h2>
            <div className="space-y-4">
              {[
                "How do I renew my driving license?",
                "How do I pay a traffic fine?",
                "What documents are required to register a business?",
                "How do I replace a lost ID?"
              ].map((q, i) => (
                <div key={i} className="p-6 border border-border bg-bg flex items-center justify-between group hover:border-navy transition-colors duration-300">
                  <span className="text-lg font-medium text-muted group-hover:text-navy transition-colors italic">"{q}"</span>
                  <ChevronRight size={16} />
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted transition-colors duration-300">Instead of navigating multiple websites, citizens receive clear guidance through a single system.</p>
          </div>
        </section>

        <section id="differentiation" className="py-20 bg-navy text-bg px-12 transition-colors duration-300">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mono-label text-slate-400 mb-6">Why Nusuru Is Different</div>
              <h2 className="text-4xl font-bold mb-8 leading-tight text-bg transition-colors duration-300">Beyond simple chatbots.</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Most civic chatbots simply retrieve information from predefined scripts. Nusuru is designed as a civic intelligence system that understands relationships between services, requirements, and institutions.
              </p>
              <p className="text-slate-400">
                This allows Nusuru to guide users through complex processes rather than simply providing links.
              </p>
            </div>
            <div className="aspect-square border border-bg/10 flex items-center justify-center relative">
              <div className="absolute inset-0 grid-pattern opacity-10" />
              <div className="text-[10px] font-mono text-bg/30 uppercase tracking-[0.5em]">Civic_Intelligence_Engine</div>
            </div>
          </div>
        </section>

        <section id="vision" className="text-center">
          <div className="mono-label mb-8">Long-Term Vision</div>
          <h2 className="text-4xl font-bold text-navy mb-12">A broader civic intelligence infrastructure.</h2>
          <p className="text-muted mb-12 max-w-2xl mx-auto transition-colors duration-300">Nusuru represents the first step toward a broader civic intelligence infrastructure. In the future, systems like Nusuru could help citizens:</p>
          <div className="grid md:grid-cols-4 gap-8 text-left mb-20">
            {[
              "Navigate healthcare services",
              "Access education programs",
              "Understand legal procedures",
              "Interact more effectively with public institutions"
            ].map((v, i) => (
              <div key={i} className="p-8 border border-border bg-bg-secondary transition-colors duration-300">
                <div className="text-accent font-mono mb-4">0{i+1}</div>
                <p className="font-bold text-navy transition-colors duration-300">{v}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <ArchitectureDiagram 
              title="Healthcare Intelligence System"
              theme="dark"
              steps={[
                "Patient Inquiry",
                "Clinical Knowledge Graph",
                "Institutional Protocol Mapping",
                "Facility Availability Engine",
                "Guided Care Pathway"
              ]}
            />
            <ArchitectureDiagram 
              title="Legal Navigation System"
              steps={[
                "Legal Question",
                "Statutory Database",
                "Procedural Reasoning Engine",
                "Document Requirement Mapping",
                "Step-by-Step Legal Guidance"
              ]}
            />
          </div>
        </section>
      </div>
    </div>
  </div>
);


export const EssayPage = ({ onBack }: { onBack: () => void }) => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="mono-label mb-12 flex items-center space-x-2 hover:text-accent transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        <span>Back to Research</span>
      </button>
      
      <div className="mono-label mb-4">System Design Essay</div>
      <h1 className="text-4xl md:text-6xl font-bold mb-12 tracking-tight text-navy leading-[1.1]">
        Why Navigating Public Services Should Not Feel Like Solving a Maze.
      </h1>
      
      <div className="prose prose-slate lg:prose-xl max-w-none text-lg text-muted leading-relaxed space-y-8 transition-colors duration-300">
        <p className="text-2xl text-navy font-medium leading-tight">
          For many citizens, accessing public services requires navigating a maze.
        </p>
        <p>
          A simple task such as renewing a license or paying a fine may require searching across multiple websites, interpreting complex procedures, and understanding which agency is responsible. The information exists, but it is rarely organized around the needs of the people trying to use it.
        </p>
        
        <h2 className="text-2xl font-bold text-navy pt-8">The Fragmentation Problem</h2>
        <p>
          Public institutions are typically organized around agencies rather than users. Each agency maintains its own systems, processes, and information structures. From the perspective of citizens, however, these institutional boundaries create fragmentation. People are forced to navigate bureaucratic structures that were never designed for intuitive access.
        </p>
        
        <h2 className="text-2xl font-bold text-navy pt-8">The Missing Layer</h2>
        <p>
          The modern internet solved the problem of information discovery through search engines. But a similar infrastructure does not yet exist for navigating institutional systems. There is no universal layer that helps citizens understand what services exist, which institutions provide them, and what steps are required to access them.
        </p>
        
        <h2 className="text-2xl font-bold text-navy pt-8">Civic Intelligence</h2>
        <p>
          The next generation of public infrastructure will likely include systems that can interpret citizen questions and guide people through institutional processes. This is what we call civic intelligence. Rather than replacing institutions, these systems act as navigation layers that make institutions easier to understand and interact with.
        </p>
        
        <h2 className="text-2xl font-bold text-navy pt-8">Building the Infrastructure</h2>
        <p>
          Creating this infrastructure requires more than chatbots or search tools. It requires structured knowledge systems that represent the relationships between services, procedures, institutions, and requirements. Once these systems exist, intelligent interfaces can help citizens navigate them.
        </p>
        
        <h2 className="text-2xl font-bold text-navy pt-8">Looking Ahead</h2>
        <p>
          As societies become more complex, the need for systems that help people navigate institutions will only grow. The question is no longer whether such infrastructure will exist. The question is who will build it.
        </p>
        <p className="font-bold text-navy italic">
          RBT is working to help build that infrastructure.
        </p>
      </div>
    </div>
  </div>
);

export const ResearchPage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  const [isEssayOpen, setIsEssayOpen] = useState(false);

  if (isEssayOpen) {
    return <EssayPage onBack={() => setIsEssayOpen(false)} />;
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mono-label mb-8">Knowledge Base</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">Research & Insights.</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            {[
              { title: "Why navigating public services should not feel like solving a maze", excerpt: "An analysis of bureaucratic friction and the potential for AI-driven civic navigation in emerging economies...", date: "MAR 12, 2024", cat: "SYSTEM DESIGN ESSAY", slug: "maze" },
              { title: "Designing AI systems for governments: A framework for civic trust", excerpt: "Exploring the ethical and technical requirements for deploying AI in public institutions while maintaining accountability...", date: "FEB 28, 2024", cat: "CIVIC AI RESEARCH" },
              { title: "The future of civic intelligence in fragmented societies", excerpt: "How systems thinking can help bridge the gap between institutions and citizens in the digital age...", date: "JAN 15, 2024", cat: "PUBLIC INFRASTRUCTURE ANALYSIS" },
              { title: "Decentralized Identity in Civic Systems", excerpt: "A technical review of Self-Sovereign Identity (SSI) protocols for public service delivery and data ownership...", date: "DEC 10, 2023", cat: "TECHNICAL ARTICLE" },
            ].map((article, i) => (
              <article 
                key={i} 
                className="group cursor-pointer"
                onClick={() => article.slug === "maze" ? setIsEssayOpen(true) : null}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="mono-label">{article.cat}</span>
                  <span className="w-1 h-1 bg-border rounded-full" />
                  <span className="mono-label">{article.date}</span>
                </div>
                <h2 className="text-3xl font-bold group-hover:text-accent mb-4 leading-tight text-navy transition-colors">{article.title}</h2>
                <p className="text-muted mb-6 leading-relaxed transition-colors duration-300">{article.excerpt}</p>
                <button className="text-xs font-bold uppercase tracking-widest flex items-center space-x-2 text-navy hover:text-accent transition-colors">
                  <span>Read Full Analysis</span>
                  <ArrowRight size={12} />
                </button>
              </article>
            ))}
          </div>
          <aside className="space-y-12">
            <div>
              <h4 className="mono-label mb-6">Research Domains</h4>
              <ul className="space-y-4 text-sm font-medium text-muted transition-colors duration-300">
                <li className="hover:text-accent cursor-pointer transition-colors">System Design Essays</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Civic AI Research</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Public Infrastructure Analysis</li>
                <li className="hover:text-accent cursor-pointer transition-colors">Technical Articles</li>
              </ul>
            </div>
            <div className="p-8 bg-bg-secondary border border-border transition-colors duration-300">
              <h4 className="text-sm font-bold mb-4 text-navy">The RBT Lab</h4>
              <p className="text-xs text-muted mb-6 leading-relaxed transition-colors duration-300">Our research is translated into systems within the RBT Lab, a global hub for systems engineering.</p>
              <button 
                onClick={() => setActivePage("Lab")}
                className="w-full border border-navy text-navy py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-colors"
              >
                Visit the Lab
              </button>
            </div>
            <div className="p-8 bg-bg-secondary border border-border transition-colors duration-300">
              <h4 className="text-sm font-bold mb-4 text-navy">Grant & Funding Inquiries</h4>
              <p className="text-xs text-muted mb-6 leading-relaxed transition-colors duration-300">RBT collaborates with foundations and research councils to fund the development of open civic infrastructure.</p>
              <button className="w-full bg-navy text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black transition-colors">Contact Research Office</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};


export const PartnershipsPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mono-label mb-8">Collaboration</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Work with RBT.</h1>
      
      <div className="space-y-20 text-lg text-muted leading-relaxed transition-colors duration-300">
        <section>
          <div className="mono-label mb-4">Collaboration Model</div>
          <p>
            RBT operates as a systems partner for institutions. We don't just deliver products; we work with governments, NGOs, and foundations to understand their underlying logic and design sustainable, long-term civic infrastructure.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 py-12 border-y border-border">
          {[
            { 
              title: "Government Partnerships", 
              desc: "Implementing civic AI and public service infrastructure at national and regional scales. Our work includes digitizing public records, developing citizen-facing service portals, and implementing AI for administrative efficiency.",
              benefits: "Streamlined administrative workflows, reduced bureaucratic friction, and enhanced citizen satisfaction through more accessible public services.",
              outcomes: "Improved public service accessibility, enhanced governmental transparency, and the deployment of intelligent navigation layers that increase service utilization."
            },
            { 
              title: "Research Collaborations", 
              desc: "Joint research on systems thinking, institutional intelligence, and the ethics of civic AI with academic institutions.",
              benefits: "Access to cutting-edge theoretical frameworks, rigorous validation of system models, and a deeper understanding of the societal impact of civic intelligence.",
              outcomes: "Published research papers, new engineering methodologies for civic systems, and a robust ethical framework for AI in public institutions."
            },
            { 
              title: "NGO & Foundation Partners", 
              desc: "Foundations and non-profits funding the development of open-source civic systems for the public good.",
              benefits: "Alignment with social impact goals, sustainable funding for public-interest technology, and broad dissemination of civic tools to underserved communities.",
              outcomes: "Scalable, open-source infrastructure that empowers citizens and strengthens civil society organizations globally."
            },
            { 
              title: "Technology Labs", 
              desc: "Infrastructure and AI labs providing the foundational tools and compute for RBT's specialized systems.",
              benefits: "High-performance computing resources, access to advanced LLMs and reasoning models, and technical synergy in building robust system architectures.",
              outcomes: "Highly resilient and performant civic intelligence systems capable of handling large-scale institutional data and complex reasoning tasks."
            },
          ].map((p, i) => (
            <div key={i} className="p-8 border border-border bg-bg space-y-6 transition-colors duration-300">
              <div>
                <h3 className="text-navy font-bold text-xl mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed transition-colors duration-300">{p.desc}</p>
              </div>
              <div className="space-y-4 pt-4 border-t border-border/50">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Benefits</h4>
                  <p className="text-xs text-muted leading-relaxed transition-colors duration-300">{p.benefits}</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Expected Outcomes</h4>
                  <p className="text-xs text-muted leading-relaxed transition-colors duration-300">{p.outcomes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-navy font-bold mb-4">Joint System Development</h2>
          <p className="text-base">
            We offer a co-creation model where we embed our engineers and researchers within partner institutions to build systems that are perfectly aligned with their operational needs and public mandates. This ensures that the systems we build are not just technically sound, but institutionally integrated.
          </p>
        </section>
      </div>
    </div>
  </div>
);


export const LabPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mono-label mb-8">Engineering Lab</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tight">The RBT Lab.</h1>

      <div className="grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3 space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-navy">Researchers & Engineers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { role: "Senior Systems Engineer", count: 4 },
                { role: "Civic AI Researcher", count: 3 },
                { role: "Institutional Policy Analyst", count: 2 },
                { role: "Data Infrastructure Architect", count: 2 },
              ].map((team, i) => (
                <div key={i} className="p-6 border border-border flex justify-between items-center bg-bg transition-colors duration-300">
                  <span className="font-bold text-navy">{team.role}</span>
                  <span className="mono-label">[{team.count}]</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-navy">Fellows & Collaborators</h2>
            <p className="text-muted mb-8 max-w-2xl transition-colors duration-300">
              Our fellowship program brings together visionary thinkers, engineers, and policy experts from around the world to work on specific civic infrastructure challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {["2024 Fellows", "Visiting Collaborators", "Research Affiliates"].map((cat, i) => (
                <div key={i} className="p-6 bg-bg-secondary border border-border text-center transition-colors duration-300">
                  <h4 className="text-sm font-bold mb-2 text-navy">{cat}</h4>
                  <button className="text-[10px] uppercase tracking-widest font-bold text-muted hover:text-navy transition-colors duration-300">View List</button>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside>
          <div className="p-8 bg-navy text-bg transition-colors duration-300">
            <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Join the Lab</h4>
            <p className="text-xs opacity-70 mb-8 leading-relaxed">
              We are always looking for engineers and researchers who are passionate about building the systems that power society.
            </p>
            <button className="w-full border border-bg/30 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-bg hover:text-navy transition-colors duration-300">
              View Openings
            </button>
          </div>
        </aside>
      </div>
    </div>
  </div>
);


export const UpdatesPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <div className="mono-label mb-8">Institutional Activity</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">Updates.</h1>
      <p className="text-lg text-muted mb-16 max-w-2xl transition-colors duration-300">
        Tracking the progress of our systems, research breakthroughs, and institutional partnerships.
      </p>
      
      <div className="space-y-12">
        {[
          { title: "RBT announces Nusuru v1.0 architecture for public review", date: "MAR 12, 2024", cat: "ANNOUNCEMENT", desc: "The official release of the architectural framework for our flagship civic navigation system." },
          { title: "New research grant for civic AI ethics from Global Systems Foundation", date: "FEB 24, 2024", cat: "GRANTS & FUNDING", desc: "Securing funding to explore the ethical implications of AI in public service delivery." },
          { title: "RBT to present at Global Civic Systems Summit in Nairobi", date: "JAN 15, 2024", cat: "EVENTS", desc: "Our engineering team will be presenting new models for institutional intelligence." },
          { title: "Institutional vision: Feature in The Systems Journal of Engineering", date: "DEC 20, 2023", cat: "MEDIA", desc: "A deep dive into RBT's philosophy of engineering systems for society." },
        ].map((update, i) => (
          <div key={i} className="pb-12 border-b border-border group cursor-pointer">
            <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
              <div>
                <span className="mono-label block mb-2 text-slate-400 group-hover:text-accent transition-colors">{update.cat}</span>
                <h3 className="text-2xl font-bold text-navy group-hover:text-accent transition-colors">{update.title}</h3>
              </div>
              <span className="mono-label whitespace-nowrap text-slate-400">{update.date}</span>
            </div>
            <p className="text-sm text-muted max-w-3xl leading-relaxed transition-colors duration-300">{update.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-navy text-bg text-center transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-4">Institutional Registry</h3>
        <p className="text-sm opacity-70 mb-8 max-w-md mx-auto">Subscribe to receive formal updates on our research and system deployments.</p>
        <div className="flex max-w-md mx-auto">
          <input type="email" placeholder="Institutional Email" className="flex-grow bg-bg/10 border border-bg/20 px-4 py-3 text-sm outline-none focus:border-bg transition-colors duration-300" />
          <button className="bg-bg text-navy px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors duration-300">Register</button>
        </div>
      </div>
    </div>
  </div>
);

export const ContactPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <div className="mono-label mb-8">Contact</div>
      <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight text-navy">Institutional Inquiries.</h1>
      <p className="text-lg text-muted mb-16 transition-colors duration-300">
        RBT collaborates with governments, foundations, and research institutions. For formal inquiries, please use the registry below.
      </p>
      
      <form className="space-y-8 text-left bg-bg-secondary p-12 border border-border transition-colors duration-300">
        <div className="space-y-2">
          <label className="mono-label">Inquiry Type</label>
          <select className="w-full bg-bg border border-border p-4 text-sm outline-none focus:border-navy transition-colors duration-300">
            <option>Government Collaboration</option>
            <option>Research Partnership</option>
            <option>Foundation / Grant Inquiry</option>
            <option>Media & Press</option>
            <option>General Institutional Inquiry</option>
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="mono-label">Full Name</label>
            <input type="text" className="w-full bg-bg border border-border p-4 text-sm outline-none focus:border-navy transition-colors duration-300" />
          </div>
          <div className="space-y-2">
            <label className="mono-label">Institutional Email</label>
            <input type="email" className="w-full bg-bg border border-border p-4 text-sm outline-none focus:border-navy transition-colors duration-300" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="mono-label">Organization</label>
          <input type="text" className="w-full bg-bg border border-border p-4 text-sm outline-none focus:border-navy transition-colors duration-300" />
        </div>
        <div className="space-y-2">
          <label className="mono-label">Inquiry Details</label>
          <textarea rows={6} className="w-full bg-bg border border-border p-4 text-sm outline-none focus:border-navy transition-colors duration-300 resize-none"></textarea>
        </div>
        <button className="w-full bg-navy text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-black transition-colors">
          Submit Formal Inquiry
        </button>
      </form>
    </div>
  </div>
);
