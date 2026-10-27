import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; sender: 'user' | 'bot' }>>([
    { text: "Hi! How can I help you today?", sender: 'bot' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "Thanks for your message! I'll get back to you soon.", sender: 'bot' }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center"
        aria-label="Open chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-surface animate-pulse-slow"></div>
      </motion.button>

      {/* Speech Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ delay: 1.5 }}
            className="fixed bottom-24 right-6 z-40 px-4 py-2 bg-surface border border-hairline rounded-2xl shadow-soft max-w-[200px] pointer-events-none"
          >
            <p className="text-sm text-ink">How can I help?</p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-surface border-r border-b border-hairline transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-24 right-6 z-40 w-[360px] max-h-[500px] bg-surface border border-hairline rounded-card-lg shadow-soft overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-hairline flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-lg">
                👋
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Eugene Pantua</div>
                <div className="text-xs text-muted flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 min-h-[200px] max-h-[300px]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white rounded-br-sm'
                        : 'bg-surface-2 text-ink rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-hairline">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-surface-2 border border-hairline rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button
                  onClick={handleSend}
                  className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center hover:shadow-lg transition-all flex-shrink-0 disabled:opacity-50"
                  disabled={!message.trim()}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-muted text-center mt-2">
                This is a demo chat widget
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
