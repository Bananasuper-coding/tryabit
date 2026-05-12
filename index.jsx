import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Button({ children, variant = 'primary', size = 'md', className, disabled, loading, ...props }) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    accent: 'bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200 active:scale-95',
    success: 'bg-gradient-to-r from-success to-emerald-500 hover:from-success hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-success/25 transition-all duration-200 active:scale-95',
    danger: 'bg-gradient-to-r from-error to-red-500 hover:from-error hover:to-red-600 text-white font-semibold rounded-xl shadow-lg shadow-error/25 transition-all duration-200 active:scale-95',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
    icon: 'p-3',
  };

  return (
    <motion.button
      while={{ scale: 0.98 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </motion.button>
  );
}

export function Card({ children, className, glow, hoverable, ...props }) {
  return (
    <motion.div
      while={{ y: 0 }}
      whileHover={hoverable ? { y: -4, scale: 1.01 } : {}}
      className={clsx(
        'bg-surface-800/80 backdrop-blur-xl rounded-2xl border border-surface-700/50 shadow-xl',
        glow && 'hover:shadow-glow hover:border-primary-500/50',
        hoverable && 'cursor-pointer transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ProgressBar({ value, max = 100, className, showLabel, size = 'md' }) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-surface-400">Progress</span>
          <span className="text-primary-400 font-medium">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={clsx('bg-surface-700 rounded-full overflow-hidden', sizes[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
        />
      </div>
    </div>
  );
}

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-surface-700 text-surface-300',
    primary: 'badge-primary',
    accent: 'badge-accent',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'bg-error/20 text-error border border-error/30',
    gold: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  };

  return (
    <span className={clsx('badge', variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

export function XPBar({ current, max, className }) {
  const percentage = Math.min((current / max) * 100, 100);
  
  return (
    <div className={clsx('xp-bar', className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="xp-fill"
      />
    </div>
  );
}

export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="modal-overlay"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className={clsx('modal-content p-6', sizes[size])}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-surface-800 rounded-lg transition-colors">
              ✕
            </button>
          </div>
        )}
        {children}
      </motion.div>
    </>
  );
}

export function Confetti({ show, onComplete }) {
  if (!show) return null;

  const colors = ['#6366f1', '#d946ef', '#10b981', '#f59e0b', '#ef4444'];
  const confetti = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 0.5,
    duration: 2 + Math.random(),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((c) => (
        <motion.div
          key={c.id}
          initial={{ y: -20, x: `${c.x}vw`, opacity: 1, rotate: 0 }}
          animate={{ y: '100vh', rotate: 720 }}
          transition={{ duration: c.duration, delay: c.delay, ease: 'easeIn' }}
          onAnimationComplete={c.id === 0 ? onComplete : undefined}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: c.color }}
        />
      ))}
    </div>
  );
}

export function XP_popup({ amount, show, onComplete }) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      onAnimationComplete={onComplete}
      className="xp-popup"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        +{amount} XP
      </motion.span>
    </motion.div>
  );
}

export function Skeleton({ className, ...props }) {
  return <div className={clsx('skeleton', className)} {...props} />;
}

export function Avatar({ src, alt, size = 'md', className }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={clsx('rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-0.5', sizes[size], className)}>
      {src ? (
        <img src={src} alt={alt} className={clsx('rounded-full object-cover', sizes[size])} />
      ) : (
        <div className={clsx('rounded-full bg-surface-800 flex items-center justify-center', sizes[size])}>
          <span className="text-lg font-bold">{alt?.[0] || '?'}</span>
        </div>
      )}
    </div>
  );
}

export function IconButton({ icon, onClick, variant = 'default', size = 'md', className, ...props }) {
  const variants = {
    default: 'bg-surface-800 hover:bg-surface-700 text-surface-400 hover:text-white',
    primary: 'bg-primary-500/20 hover:bg-primary-500/30 text-primary-400',
    accent: 'bg-accent-500/20 hover:bg-accent-500/30 text-accent-400',
    success: 'bg-success/20 hover:bg-success/30 text-success',
  };

  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  return (
    <motion.button
      while={{ scale: 0.95 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={clsx(
        'rounded-xl flex items-center justify-center transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon}
    </motion.button>
  );
}

export function Tabs({ tabs, activeTab, onChange, className }) {
  return (
    <div className={clsx('flex gap-1 p-1 bg-surface-800/50 rounded-xl', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={clsx(
            'flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
            activeTab === tab.id
              ? 'bg-primary-500 text-white shadow-lg'
              : 'text-surface-400 hover:text-white'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <span className="text-5xl mb-4">{icon}</span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-surface-400 mb-6 max-w-sm">{description}</p>
      {action}
    </div>
  );
}

export function LoadingSpinner({ size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <svg className={clsx('animate-spin', sizes[size])} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
