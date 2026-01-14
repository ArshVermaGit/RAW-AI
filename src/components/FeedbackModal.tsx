import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Mail, Sparkles, PartyPopper, ArrowRight, X, Zap, LogOut, Trash2, Rocket, Heart, Shield, Loader2 } from 'lucide-react';
import { Modal } from './Modal';
import { MagneticButton } from './MagneticButton';
import { cn } from '@/lib/utils';
import { ModalType } from '@/hooks/use-modals';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: ModalType | null;
  title?: string;
  message?: string;
  onConfirm?: () => void;
}

const config = {

  'payment-success': {
    icon: PartyPopper,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    glowColor: 'from-green-500/20',
    defaultTitle: 'Elevation Successful!',
    defaultMessage: 'Transaction confirmed. Your account has been upgraded to the Pro tier. All limitations have been lifted.',
    buttonText: 'Launch Pro Tools',
  },
  'payment-failed': {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Processing Aborted',
    defaultMessage: 'The payment gateway could not clear the transaction. Please verify your payment details and retry.',
    buttonText: 'Return to Checkout',
  },
  'limit-reached': {
    icon: Zap,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    glowColor: 'from-yellow-500/20',
    defaultTitle: 'Capacity Reached',
    defaultMessage: 'Your current word allocation has been fully utilized. Elevate to a Pro tier for uncapped humanization.',
    buttonText: 'View Upgrade Tiers',
  },
  'auth-required': {
    icon: Sparkles,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'from-blue-500/20',
    defaultTitle: 'Identify Yourself',
    defaultMessage: 'Access the full industrial power of RAW.AI. Sign in to synchronize your history and unlock bypass tools.',
    buttonText: 'Connect with Google',
  },
  'logout-confirm': {
    icon: LogOut,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    glowColor: 'from-orange-500/20',
    defaultTitle: 'Seal Session?',
    defaultMessage: 'You are about to disconnect from your pro session. You will need to re-authenticate to access your tools.',
    buttonText: 'Confirm Log Out',
  },
  'subscription-updated': {
    icon: Rocket,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    glowColor: 'from-purple-500/20',
    defaultTitle: 'Account Refreshed',
    defaultMessage: 'Your subscription status has been updated successfully. New limits are now active on your profile.',
    buttonText: 'Proceed to Dashboard',
  },
  'delete-confirm': {
    icon: Trash2,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Irreversible Action',
    defaultMessage: 'You are about to permanently purge this data. This action cannot be undone or recovered.',
    buttonText: 'Permanently Purge',
  },
  'welcome-new': {
    icon: Heart,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    glowColor: 'from-pink-500/20',
    defaultTitle: 'Session Initialized',
    defaultMessage: 'Welcome to RAW.AI. We\'ve gifted you a complimentary word pack to experience our bypass algorithms.',
    buttonText: 'Begin Exploration',
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
  'payment-canceled': {
    icon: XCircle,
    color: 'text-muted-foreground',
    bgColor: 'bg-secondary/50',
    glowColor: 'from-secondary/20',
    defaultTitle: 'Transaction Aborted',
    defaultMessage: 'The secure checkout process was closed by the user. No transaction was recorded.',
    buttonText: 'Close Window',
  },
  'payment-verifying': {
    icon: Loader2,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    glowColor: 'from-blue-500/20',
    defaultTitle: 'Validating Signature',
    defaultMessage: 'We are synchronizing your transaction status with Razorpay. This will only take several seconds.',
    buttonText: 'Synchronizing...',
  },
  'payment-verification-failed': {
    icon: Shield,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    glowColor: 'from-orange-500/20',
    defaultTitle: 'Verification Pending',
    defaultMessage: 'Payment received but verification is taking longer than expected. Please contact support.',
    buttonText: 'Contact Support',
  },
  'order-failed': {
    icon: Zap,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    glowColor: 'from-red-500/20',
    defaultTitle: 'Order Creation Failed',
    defaultMessage: 'We couldn\'t start the checkout process. Please check your internet connection and try again.',
    buttonText: 'Try Again',
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
