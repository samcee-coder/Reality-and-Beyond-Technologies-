import { useState, useEffect } from "react";
import { Navbar, Hero, ProblemSection, FeaturedSystem, OurWork, OurApproach, ResearchPreview, WorkWithUs, VisionSection, Footer } from "./components/RBTComponents";
import { AboutPage, SystemsPage, ResearchPage, PartnershipsPage, LabPage, UpdatesPage, ContactPage } from "./components/RBTPages";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activePage, setActivePage] = useState("Home");
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  // Apply theme class to html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return (
          <>
            <Hero setActivePage={setActivePage} />
            <ProblemSection />
            <FeaturedSystem setActivePage={setActivePage} />
            <OurWork />
            <OurApproach />
            <ResearchPreview setActivePage={setActivePage} />
            <WorkWithUs setActivePage={setActivePage} />
            <VisionSection />
          </>
        );
      case "About":
        return <AboutPage setActivePage={setActivePage} />;
      case "Systems":
        return <SystemsPage />;
      case "Research":
        return <ResearchPage setActivePage={setActivePage} />;
      case "Partnerships":
        return <PartnershipsPage />;
      case "Lab":
        return <LabPage />;
      case "Updates":
        return <UpdatesPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg selection:bg-accent selection:text-white transition-colors duration-300">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
