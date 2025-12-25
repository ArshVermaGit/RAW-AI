import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScoreDisplayProps {
  score: number;
  label: string;
  variant?: 'danger' | 'success' | 'warning';
  className?: string;
}

export const ScoreDisplay = ({ score, label, variant = 'success', className }: ScoreDisplayProps) => {
  const colors = {
    danger: {
      bg: 'bg-destructive/10',
      text: 'text-destructive',
      bar: 'bg-destructive',
    },
    warning: {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-500',
      bar: 'bg-yellow-500',
    },
    success: {
      bg: 'bg-success/10',
      text: 'text-success',
      bar: 'bg-success',
    },
  };

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          colors[variant].bg,
          colors[variant].text
        )}>
          {label}
        </span>
        <motion.span 
          className={cn("text-2xl font-bold", colors[variant].text)}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {score}%
        </motion.span>
      </div>
      <div className="score-bar">
        <motion.div 
          className={cn("score-bar-fill", colors[variant].bar)}
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};
