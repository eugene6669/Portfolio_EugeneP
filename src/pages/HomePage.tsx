import { motion } from 'framer-motion';
import { FolderOpen, User, GraduationCap, Briefcase, Award, ArrowRight, Code2 } from 'lucide-react';
import { siteContent } from '../data/content';
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMysql, 
  SiGit, 
  SiFigma, 
  SiTypescript, 
  SiHtml5 
} from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { VscAzure, VscCode } from 'react-icons/vsc';

const iconMap: Record<string, JSX.Element> = {
  javascript: <SiJavascript style={{ color: '#F7DF1E' }} />,
  react: <SiReact style={{ color: '#61DAFB' }} />,
  nodejs: <SiNodedotjs style={{ color: '#339933' }} />,
  express: <SiExpress style={{ color: '#000000' }} />,
  mssql: <DiMsqlServer style={{ color: '#CC2927' }} />,
  mysql: <SiMysql style={{ color: '#4479A1' }} />,
  azure: <VscAzure style={{ color: '#0078D4' }} />,
  git: <SiGit style={{ color: '#F05032' }} />,
  vscode: <VscCode style={{ color: '#007ACC' }} />,
  figma: <SiFigma style={{ color: '#F24E1E' }} />,
  typescript: <SiTypescript style={{ color: '#3178C6' }} />,
  html: <SiHtml5 style={{ color: '#E34F26' }} />,
};

export function HomePage() {
  const { personal, tools, services, aiBuilds, certifications, projects } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      {/* Header */}
      <div className="mb-12">
        <div className="eyebrow mb-3">Welcome</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-4">
          {personal.tagline}
          <span className="text-muted">{personal.taglineContinuation}</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">{personal.subtitle}</p>
      </div>

      {/* Daily Drivers - Marquee Animation */}
      <div className="mb-12 overflow-hidden">
        <div className="text-sm text-muted mb-4 font-medium">Daily drivers: Tools I work with</div>
        <div className="relative">
          <div className="flex animate-marquee gap-4">
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="flex items-center gap-3 px-5 py-3 bg-surface-2 rounded-full whitespace-nowrap border border-hairline flex-shrink-0"
              >
                <div className="w-6 h-6">
                  {iconMap[tool.icon as keyof typeof iconMap]}
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Projects - Wide Card */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">01</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <FolderOpen size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Projects</h3>
            <p className="text-muted mb-6">Featured work and case studies</p>
            
            {/* Projects Image Marquee */}
            <div className="overflow-hidden -mx-8">
              <div className="flex animate-marquee gap-4">
                {[...projects, ...projects].map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden border border-hairline bg-surface-2 relative"
                  >
                    {project.images && project.images.length > 0 ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/5 to-accent/20 flex items-center justify-center text-3xl opacity-30">
                        🖼️
                      </div>
                    )}
                    {/* Project title overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                      <span className="text-white text-sm font-medium">{project.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.a>

        {/* About */}
        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">02</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <User size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">About</h3>
            <p className="text-muted mb-4">Background and experience</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted">
                <span className="font-mono text-xs">01</span>
                <span>System Analyst</span>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <span className="font-mono text-xs">02</span>
                <span>MIS Admin / Tech Support</span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* AI Builds */}
        <motion.a
          href="#tools"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">03</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <Code2 size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Projects</h3>
            <p className="text-muted mb-4">Development work</p>
            <div className="flex flex-wrap gap-2">
              {aiBuilds.slice(0, 3).map((build) => (
                <div key={build.id} className="flex items-center gap-1.5 text-xs bg-surface-2 px-2 py-1 rounded-full">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    build.status === 'live' ? 'bg-green-500' :
                    build.status === 'beta' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}></div>
                  {build.name}
                </div>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">04</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <GraduationCap size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Education</h3>
            <p className="text-muted mb-4">Academic background</p>
            <div className="flex items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <Award size={32} className="text-accent" />
              </div>
              <div className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-mono">
                BSIT
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services */}
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">05</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <Briefcase size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Services</h3>
            <p className="text-muted mb-4">What I can do for you</p>
            <div className="space-y-2 text-sm">
              {services.slice(0, 3).map((service, idx) => (
                <div key={service.id} className="flex items-center gap-2 text-muted">
                  <span className="font-mono text-xs">{`0${idx + 1}`}</span>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.a>

        {/* Certifications */}
        <motion.a
          href="#certifications"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-surface border border-hairline rounded-card-lg p-8 card-hover group relative overflow-hidden"
        >
          <div className="ghost-number right-4 top-4">06</div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
              <Award size={28} />
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Certifications</h3>
            <p className="text-muted mb-4">Professional credentials</p>
            <div className="space-y-2">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award size={12} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-medium truncate">{cert.title}</div>
                    <div className="text-xs text-muted">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.a>
      </div>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-8 right-8 px-6 py-3 bg-accent text-white rounded-full font-medium flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all z-50 max-lg:hidden"
      >
        Get in touch
        <ArrowRight size={16} />
      </motion.a>
    </motion.div>
  );
}
