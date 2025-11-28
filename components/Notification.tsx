import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Sparkles, XCircle, Lightbulb, Megaphone } from 'lucide-react';
import { NotificationState } from '../types';

interface NotificationProps {
  notification: NotificationState | null;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  if (!notification) return null;

  const icons = {
    success: CheckCircle2,
    info: Sparkles,
    warning: AlertCircle,
    error: XCircle,
    discovery: Lightbulb,
    shout: Megaphone,
  };

  const Icon = icons[notification.type];

  const colors = {
    success: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-200',
    info: 'bg-blue-500/20 border-blue-500/30 text-blue-200',
    warning: 'bg-amber-500/20 border-amber-500/30 text-amber-200',
    error: 'bg-rose-500/20 border-rose-500/30 text-rose-200',
    discovery: 'bg-violet-500/20 border-violet-500/30 text-violet-200',
    shout: 'bg-orange-500/20 border-orange-500/30 text-orange-200',
  };

  const glowColors = {
    success: 'shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]',
    info: 'shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]',
    warning: 'shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)]',
    error: 'shadow-[0_0_50px_-10px_rgba(244,63,94,0.3)]',
    discovery: 'shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]',
    shout: 'shadow-[0_0_50px_-10px_rgba(249,115,22,0.3)]',
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-50 p-4">
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`pointer-events-auto relative max-w-md w-full overflow-hidden rounded-3xl border backdrop-blur-2xl p-6 ${colors[notification.type]} ${glowColors[notification.type]}`}
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          
          <div className="relative flex items-start gap-4">
            <div className={`p-2 rounded-full bg-white/10 ring-1 ring-white/20 shrink-0`}>
                <Icon size={24} strokeWidth={2} />
            </div>
            <div className="flex-1 pt-0.5">
              <h3 className="text-lg font-bold text-white mb-1 tracking-tight">
                {notification.message}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {notification.subMessage}
              </p>
            </div>
            <button 
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors p-1"
            >
                <XCircle size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Notification;