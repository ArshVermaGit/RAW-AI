import { motion } from 'framer-motion';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  delay?: number;
  className?: string;
}

export const InteractiveCard = ({ 
  icon: Icon, 
  title, 
  description, 
  onClick,
  delay = 0,
  className 
}: InteractiveCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onClick={onClick}
      className={cn(
        "group relative p-8 rounded-2xl cursor-pointer overflow-hidden",
        "bg-card border border-border/40",
        "hover:border-foreground/20",
        "transition-all duration-500 ease-out-expo",
        className
      )}
    >
      {/* Spotlight gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent" />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none noise" />

      {/* Icon container */}
      <motion.div 
        className="relative w-12 h-12 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center mb-6"
        whileHover={{ scale: 1.08, rotate: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2.5 tracking-tight group-hover:text-foreground transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Arrow indicator */}
      <motion.div 
        className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
        initial={{ x: -8, y: 8 }}
        whileHover={{ x: 0, y: 0 }}
      >
        <ArrowUpRight className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
      </motion.div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};