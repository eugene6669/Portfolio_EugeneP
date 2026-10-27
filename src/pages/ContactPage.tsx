import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Mail, Github, Linkedin, Facebook } from 'lucide-react';
import { siteContent } from '../data/content';

export function ContactPage() {
  const { faqs, personal, social } = siteContent;
  const [openFaq, setOpenFaq] = useState<string | null>(faqs[0].id);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Placeholder submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-12">
        <div className="eyebrow mb-3">Get in Touch</div>
        <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight mb-4">
          Let's work together{' '}
          <span className="text-muted">on your next project</span>
        </h1>
        <p className="text-lg text-muted max-w-2xl">
          Have a question or want to discuss a project? I'm here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-ink/5 dark:bg-ink/10 rounded-card-lg p-8"
        >
          <h2 className="font-heading font-bold text-2xl mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-3 mb-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="border border-hairline rounded-xl overflow-hidden bg-surface"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full flex items-start gap-3 p-4 text-left hover:bg-surface-2 transition-colors"
                >
                  <span className="font-mono text-xs text-accent mt-1">{faq.number}</span>
                  <span className="flex-1 font-medium">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 transition-transform mt-1 text-muted ${
                      openFaq === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pl-11 text-sm text-muted">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-hairline">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all mb-4"
            >
              <Mail size={16} />
              {personal.email}
            </a>

            <div className="flex items-center gap-3 mt-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-surface border border-hairline rounded-card-lg p-8"
        >
          <h2 className="font-heading font-bold text-2xl mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-surface-2 border border-hairline rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-surface-2 border border-hairline rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2.5 bg-surface-2 border border-hairline rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell me about your business
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-2.5 bg-surface-2 border border-hairline rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'success'}
              className="w-full px-6 py-3 bg-accent text-white rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {formStatus === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-green-600 dark:text-green-400 text-center"
              >
                Thanks! I'll get back to you within one business day.
              </motion.p>
            )}
            
            {formStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-red-600 dark:text-red-400 text-center"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}

            <p className="text-xs text-muted text-center">
              Response within one business day. No newsletter, no drip.
            </p>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
