import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Home, FolderOpen, Briefcase, User, Mail } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { ChatWidget } from './components/ChatWidget';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ToolsPage } from './pages/ToolsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import './styles/globals.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActiveSection(hash);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (section: string) => {
    window.location.hash = section;
  };

  const renderPage = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'services':
        return <ServicesPage />;
      case 'tools':
        return <ToolsPage />;
      case 'certifications':
        return <CertificationsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-bg grain relative">
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-accent text-white rounded-lg"
      >
        Skip to content
      </a>

      <BackgroundDecoration />
      
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main 
        id="main-content"
        className="ml-[310px] p-8 max-lg:ml-0 max-lg:p-6 relative z-10"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Main Content Panel */}
          <div className="bg-surface/80 backdrop-blur-sm border border-hairline rounded-panel p-12 max-lg:p-8 max-md:p-6 shadow-soft panel-glow min-h-[calc(100vh-4rem)]">
            <AnimatePresence mode="wait">
              {renderPage()}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <ChatWidget />

      {/* Mobile Navigation - Bottom Tab Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-hairline z-40 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'projects', icon: FolderOpen, label: 'Projects' },
            { id: 'services', icon: Briefcase, label: 'Services' },
            { id: 'about', icon: User, label: 'About' },
            { id: 'contact', icon: Mail, label: 'Contact' },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                <Icon size={18} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;
