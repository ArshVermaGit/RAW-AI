import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, ShieldCheck, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CookiePolicy = () => {
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
            <h1 className="text-4xl md:text-5xl font-display font-bold">Cookie Policy</h1>
            <p className="text-xl text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Cookie className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">1. What Are Cookies?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
              </p>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <ShieldCheck className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">2. How We Use Cookies</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                RAW.AI uses cookies for several purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function (e.g., authentication, security).</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our site by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These allow the website to remember choices you make (such as your theme preference).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Settings className="w-6 h-6" />
                <h2 className="text-2xl font-bold m-0">3. Managing Your Preferences</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" className="text-primary hover:underline">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">allaboutcookies.org</a>.
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

export default CookiePolicy;
