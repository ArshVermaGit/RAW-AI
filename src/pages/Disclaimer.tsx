import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Info, FileWarning } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Disclaimer = () => {
  const navigate = useNavigate();

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
            <h1 className="text-4xl md:text-5xl font-display font-bold">Disclaimer</h1>
            <p className="text-xl text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <AlertTriangle className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">1. Accuracy of AI Content</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                RAW.AI provides AI-driven text humanization and detection services. While we strive for the highest possible accuracy and natural-sounding output, the nature of Large Language Models (LLMs) means that results can vary. We do not guarantee that humanized text will always bypass every AI detector or that AI detection will be 100% accurate.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">2. Not Professional Advice</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The content generated or processed by RAW.AI is for informational and creative purposes only. It does not constitute professional, legal, or academic advice. Users are responsible for verifying the factual accuracy of any content produced using our tools.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <FileWarning className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">3. Ethical and Academic Use</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                RAW.AI does not encourage or condone academic dishonesty or plagiarism. Our tools are designed to help writers improve their style and help researchers understand AI patterns. Users are solely responsible for ensuring their use of our service complies with their local laws and institutional policies (e.g., university honor codes).
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">4. External Links</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-border/30 text-center text-muted-foreground">
            <p>Questions? Contact us at arshverma.dev@gmail.com</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Disclaimer;
