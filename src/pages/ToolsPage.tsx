import { motion } from 'framer-motion';
import { siteContent } from '../data/content';

export function ToolsPage() {
  const { aiBuilds } = siteContent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">Tools & Products</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          AI-powered tools{' '}
          <span className="text-muted">I've built</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          Experimental products and internal tools leveraging AI to solve real problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiBuilds.map((build, index) => (
          <motion.div
            key={build.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface border border-hairline rounded-card-lg p-6 card-hover relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-2 rounded-full text-xs">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    build.status === 'live' ? 'bg-green-500 animate-pulse-slow' :
                    build.status === 'beta' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}></div>
                  <span className="text-muted capitalize">{build.status}</span>
                </div>
              </div>

              <h3 className="font-heading font-bold text-xl mb-2">{build.name}</h3>
              <p className="text-muted text-sm">{build.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-surface border border-hairline rounded-card-lg p-8 text-center"
      >
        <div className="text-4xl mb-4">🚀</div>
        <h3 className="font-heading font-bold text-2xl mb-2">More Coming Soon</h3>
        <p className="text-muted">
          Currently building tools for design automation, code generation, and workflow optimization.
        </p>
      </motion.div>
    </motion.div>
  );
}
