import { motion } from 'framer-motion';
import { Sun, Moon, Home, FolderOpen, Briefcase, Wrench, Award, User, HelpCircle } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaDiscord } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';
import { useVisitCounter } from '../hooks/useVisitCounter';
import { siteContent } from '../data/content';
import profileImage from '../assets/profile.png';
import { Logo } from '../components/Icons';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'tools', label: 'Tools', icon: Wrench },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'FAQs / Contact', icon: HelpCircle },
];

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const { theme, toggleTheme } = useTheme();
  const visitCount = useVisitCounter();
  const { personal, social } = siteContent;

  return (
    <aside className="fixed left-0 top-0 h-screen w-[310px] bg-surface border-r border-hairline flex flex-col z-40 max-lg:hidden">
      {/* Profile Section */}
      <div className="p-8 border-b border-hairline">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative w-20 h-20 mb-4 rounded-full overflow-hidden bg-surface-2 ring-2 ring-accent/20">
            <img 
              src={profileImage} 
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-heading font-bold text-lg">{personal.name}</h2>
            <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center text-[8px]">
              ✓
            </div>
          </div>
          
          <div className="text-sm text-muted flex items-center gap-2">
            <span>{personal.handle}</span>
            <span>·</span>
            <span className="tabular-nums">
              {visitCount.toLocaleString()} visits
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-4">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center hover:bg-[#2DD4BF] transition-colors group"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4 text-ink group-hover:text-white transition-colors" />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center hover:bg-[#2DD4BF] transition-colors group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4 text-ink group-hover:text-white transition-colors" />
            </a>
            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center hover:bg-[#2DD4BF] transition-colors group"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4 text-ink group-hover:text-white transition-colors" />
            </a>
            <a
              href={social.discord}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center hover:bg-[#2DD4BF] transition-colors group"
              aria-label="Discord"
            >
              <FaDiscord className="w-4 h-4 text-ink group-hover:text-white transition-colors" />
            </a>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-surface-2 flex items-center justify-center hover:bg-accent hover:text-white transition-colors ml-auto"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full transition-all text-left ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-ink hover:bg-surface-2'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              </motion.li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-hairline">
        <div className="flex items-center gap-3 mb-3">
          <Logo className="w-8 h-8" />
          <span className="text-xs font-medium text-ink">Eugene Pantua</span>
        </div>
        <div className="text-xs text-muted">
          © {new Date().getFullYear()} {personal.name}
        </div>
      </div>
    </aside>
  );
}
