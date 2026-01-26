import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, Mail, MessageSquare, LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Support = () => {
  const navigate = useNavigate();

  const supportOptions = [
    {
      title: 'Help Center & FAQ',
      description: 'Find answers to common questions about our tools and pricing.',
      icon: HelpCircle,
      action: () => navigate('/faq'),
      label: 'Read FAQ'
    },
    {
      title: 'Contact Support',
      description: 'Get in touch with our team for account or technical issues.',
      icon: MessageSquare,
      action: () => navigate('/contact'),
      label: 'Send Message'
    },
    {
      title: 'Email Us',
      description: 'Prefer email? Drop us a line anytime.',
      icon: Mail,
      action: () => window.location.href = 'mailto:arshverma.dev@gmail.com',
      label: 'arshverma.dev@gmail.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />
      
      <main className="container mx-auto px-6 py-12 relative z-10 max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 gap-2 hover:bg-secondary/50"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
              <LifeBuoy className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">Support Center</h1>
            <p className="text-xl text-muted-foreground">We're here to help you get the most out of RAW.AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border/50 bg-secondary/20 hover:bg-secondary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-6">{option.description}</p>
                <Button onClick={option.action} className="w-full">
                  {option.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 border-t border-border/30 text-center text-muted-foreground">
            <p>Our typical response time is under 12 hours.</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Support;
