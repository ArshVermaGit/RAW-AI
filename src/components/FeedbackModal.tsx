import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Mail, Sparkles, PartyPopper, ArrowRight, X, Zap } from 'lucide-react';
import { Modal } from './Modal';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login-success' | 'login-error' | 'signup-success' | 'forgot-sent' | 'reset-success' | 'generic-success' | 'generic-error' | null;
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

const config = {
  'login-success': {
    icon: Sparkles,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'from-blue-500/20',
    defaultTitle: 'Welcome Back!',
    defaultMessage: 'You have successfully signed into your account.',
    buttonText: 'Get Started',
  },
  'login-error': {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Authentication Failed',
    defaultMessage: 'Invalid email or password. Please try again.',
    buttonText: 'Try Again',
  },
  'signup-success': {
    icon: PartyPopper,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    glowColor: 'from-purple-500/20',
    defaultTitle: 'Welcome aboard!',
    defaultMessage: 'Your account has been created successfully. Ready to humanize your content?',
    buttonText: 'Start Creating',
  },
  'forgot-sent': {
    icon: Mail,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    glowColor: 'from-orange-500/20',
    defaultTitle: 'Check your inbox',
    defaultMessage: 'We\'ve sent a password reset link to your email address.',
    buttonText: 'Back to Login',
  },
  'reset-success': {
    icon: CheckCircle2,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    glowColor: 'from-green-500/20',
    defaultTitle: 'Password Updated',
    defaultMessage: 'Your password has been reset. You can now log in with your new credentials.',
    buttonText: 'Log In Now',
  },
  'payment-success': {
    icon: PartyPopper,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    glowColor: 'from-green-500/20',
    defaultTitle: 'Payment Successful!',
    defaultMessage: 'Your account has been upgraded. You now have full access to your new features!',
    buttonText: 'Start Using Pro',
  },
  'payment-failed': {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Payment Failed',
    defaultMessage: 'We couldn\'t process your payment. Please check your card details and try again.',
    buttonText: 'Try Again',
  },
  'limit-reached': {
    icon: Zap,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    glowColor: 'from-yellow-500/20',
    defaultTitle: 'Limit Reached',
    defaultMessage: 'You\'ve hit your word limit for this month. Upgrade to Pro for unlimited humanization!',
    buttonText: 'View Pricing',
  },
  'auth-required': {
    icon: Sparkles,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'from-blue-500/20',
    defaultTitle: 'Unlock Full Power',
    defaultMessage: 'Sign up for a free account to humanize more words and save your history!',
    buttonText: 'Sign Up Free',
  },
  'generic-success': {
    icon: CheckCircle2,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    glowColor: 'from-green-500/20',
    defaultTitle: 'Success!',
    defaultMessage: 'Your action was completed successfully.',
    buttonText: 'Continue',
  },
  'generic-error': {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Something went wrong',
    defaultMessage: 'An unexpected error occurred. Please try again later.',
    buttonText: 'Dismiss',
  }
};

export const FeedbackModal = ({ isOpen, onClose, type, title, message, onConfirm }: FeedbackModalProps) => {
  if (!type || !config[type]) return null;

  const { icon: Icon, color, bgColor, glowColor, defaultTitle, defaultMessage, buttonText } = config[type];

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm overflow-hidden">
      <div className="relative p-2">
        {/* Animated Glow Background */}
        <div className={cn("absolute -top-12 -left-12 w-48 h-48 bg-gradient-radial to-transparent blur-3xl -z-10 opacity-60", glowColor)} />
        
        <div className="space-y-6 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className={cn("w-20 h-20 rounded-2xl mx-auto flex items-center justify-center relative", bgColor)}
          >
            <Icon className={cn("w-10 h-10", color)} />
            <motion.div 
              className={cn("absolute inset-0 rounded-2xl blur-lg opacity-40 -z-10", bgColor)}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              {title || defaultTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed px-4">
              {message || defaultMessage}
            </p>
          </div>

          <div className="pt-2">
            <MagneticButton
              size="lg"
              className="w-full group"
              onClick={handleConfirm}
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};
