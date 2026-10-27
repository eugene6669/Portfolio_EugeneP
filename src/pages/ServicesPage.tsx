import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { siteContent } from '../data/content';

export function ServicesPage() {
  const { services, method } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">Services</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          What I can do{' '}
          <span className="text-muted">for you</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          End-to-end product design and development services tailored to your needs.
        </p>
      </div>

      {/* Method Section */}
      <div className="mb-16">
        <h2 className="font-heading font-bold text-2xl mb-8">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-[2px] border-t-2 border-dashed border-hairline z-0" 
               style={{ left: '16.666%', right: '16.666%' }}
          ></div>
          
          {method.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-hairline rounded-card-lg p-6 relative z-10"
            >
              <div className="ghost-number right-4 -top-2">{step.step}</div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono text-sm font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted text-sm mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface-2 text-xs rounded-full text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-surface border border-hairline rounded-card-lg p-6 card-hover relative overflow-hidden"
          >
            <div className="ghost-number right-4 top-4">{service.number}</div>
            
            <div className="relative z-10">
              {/* Tool Icons */}
              <div className="flex items-center gap-1 mb-4 flex-wrap">
                {service.tools.slice(0, 4).map((tool, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-lg bg-surface-2 flex items-center justify-center text-xs"
                    title={tool}
                  >
                    {tool[0]}
                  </div>
                ))}
              </div>

              {/* Counter */}
              <div className="font-mono text-xs text-accent mb-2">
                {service.number} / 05
              </div>

              <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-sm text-muted mb-3">{service.tagline}</p>

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent text-xs rounded-full mb-4 font-medium">
                <span>✦</span>
                {service.badge}
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Live Automation Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-surface border border-hairline rounded-card-lg p-8"
      >
        <h2 className="font-heading font-bold text-2xl mb-4">Live Workflow Automation</h2>
        <p className="text-muted mb-8">
          Example: Automated lead nurturing flow with intelligent routing
        </p>

        {/* Mac-style Window */}
        <div className="bg-surface-2 rounded-xl border border-hairline overflow-hidden">
          <div className="bg-surface px-4 py-3 border-b border-hairline flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <span className="text-xs text-muted ml-2">workflow-automation.flow</span>
          </div>

          {/* SVG Workflow */}
          <div className="p-12 min-h-[300px] relative">
            <svg className="w-full h-full" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
              {/* Paths */}
              <defs>
                <path id="path1" d="M 100 150 L 250 150" />
                <path id="path2" d="M 350 150 L 500 150" />
                <path id="path3" d="M 600 150 L 700 150" />
                <path id="branch1" d="M 500 150 Q 550 100 600 80" />
                <path id="branch2" d="M 500 150 Q 550 200 600 220" />
              </defs>

              {/* Main path */}
              <line x1="100" y1="150" x2="250" y2="150" stroke="rgb(var(--hairline))" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="350" y1="150" x2="500" y2="150" stroke="rgb(var(--hairline))" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="600" y1="150" x2="700" y2="150" stroke="rgb(var(--hairline))" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Branches */}
              <path d="M 500 150 Q 550 100 600 80" stroke="rgb(var(--hairline))" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <path d="M 500 150 Q 550 200 600 220" stroke="rgb(var(--hairline))" strokeWidth="2" strokeDasharray="4 4" fill="none" />

              {/* Nodes */}
              <g>
                <circle cx="100" cy="150" r="30" fill="rgb(var(--accent))" opacity="0.2" />
                <text x="100" y="155" textAnchor="middle" fontSize="24" fill="rgb(var(--ink))">📧</text>
              </g>
              <g>
                <circle cx="300" cy="150" r="30" fill="rgb(var(--accent))" opacity="0.2" />
                <text x="300" y="155" textAnchor="middle" fontSize="24" fill="rgb(var(--ink))">🔍</text>
              </g>
              <g>
                <circle cx="500" cy="150" r="30" fill="rgb(var(--accent))" opacity="0.2" />
                <text x="500" y="155" textAnchor="middle" fontSize="24" fill="rgb(var(--ink))">⚡</text>
              </g>
              <g>
                <circle cx="650" cy="150" r="30" fill="rgb(var(--accent))" opacity="0.2" />
                <text x="650" y="155" textAnchor="middle" fontSize="24" fill="rgb(var(--ink))">✓</text>
              </g>
              
              {/* Branch nodes */}
              <g>
                <circle cx="600" cy="80" r="24" fill="rgb(var(--muted))" opacity="0.2" />
                <text x="600" y="85" textAnchor="middle" fontSize="20" fill="rgb(var(--muted))">📅</text>
              </g>
              <g>
                <circle cx="600" cy="220" r="24" fill="rgb(var(--muted))" opacity="0.2" />
                <text x="600" y="225" textAnchor="middle" fontSize="20" fill="rgb(var(--muted))">📬</text>
              </g>

              {/* Animated dots */}
              <circle r="4" fill="rgb(var(--accent))">
                <animateMotion dur="3s" repeatCount="indefinite">
                  <mpath href="#path1" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle r="4" fill="rgb(var(--accent))">
                <animateMotion dur="3s" repeatCount="indefinite" begin="1s">
                  <mpath href="#path2" />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Labels */}
              <text x="100" y="200" textAnchor="middle" fontSize="12" fill="rgb(var(--muted))">Receive</text>
              <text x="300" y="200" textAnchor="middle" fontSize="12" fill="rgb(var(--muted))">Qualify</text>
              <text x="500" y="200" textAnchor="middle" fontSize="12" fill="rgb(var(--muted))">Route</text>
              <text x="650" y="200" textAnchor="middle" fontSize="12" fill="rgb(var(--muted))">Convert</text>
              <text x="600" y="55" textAnchor="middle" fontSize="10" fill="rgb(var(--muted))">Reschedule</text>
              <text x="600" y="245" textAnchor="middle" fontSize="10" fill="rgb(var(--muted))">Nurture</text>
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
