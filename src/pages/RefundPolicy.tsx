import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const RefundPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-transparent hover:text-primary pl-0 gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Refund Policy</h1>
        <p className="text-muted-foreground mb-12">Last Updated: January 2026</p>

        <div className="prose prose-invert max-w-none space-y-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Thank you for choosing RAW.AI. We strive to provide the best AI humanization service possible. 
            However, we understand that things don't always go according to plan.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">1. Subscription Refunds</h2>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground/90">Monthly & Annual Plans</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">14-Day Money-Back Guarantee:</strong>{' '}
                  If you are not satisfied with your subscription, you may request a full refund within 14 days of your initial purchase, 
                  provided you have used less than 5% of your monthly/annual credit allocation.
                </li>
                <li>
                  <strong className="text-foreground">After 14 Days:</strong>{' '}
                  We do not offer refunds for partial months or unused time for subscriptions cancelled after the 14-day window. 
                  Your service will continue until the end of the billing period.
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">2. One-Time Credit Purchases</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Unused Credits:</strong>{' '}
                Refunds for one-time credit packs can be requested within 7 days of purchase if <strong>no credits from the pack have been used</strong>.
              </li>
              <li>
                <strong className="text-foreground">Used Credits:</strong>{' '}
                We cannot issue refunds for credit packs that have been partially used.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">3. How to Request a Refund</h2>
            <p className="text-muted-foreground">
              To request a refund, please contact our support team at{' '}
              <a href="mailto:support@rawai.com" className="text-primary hover:underline">support@rawai.com</a>{' '}
              or{' '}
              <a href="mailto:arshverma.dev@gmail.com" className="text-primary hover:underline">arshverma.dev@gmail.com</a>{' '}
              with the following details:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Your Account Email</li>
              <li>Transaction ID / Receipt Number</li>
              <li>Reason for the refund request</li>
            </ol>
            <p className="text-muted-foreground bg-secondary/30 p-4 rounded-xl border border-border/50">
              We will review your request and process approved refunds within 5-7 business days. 
              The funds will be returned to your original payment method.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">4. Exceptions</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Accounts terminated due to violation of our{' '}
                <a href="/terms" className="text-primary hover:underline">Terms of Service</a>{' '}
                are not eligible for refunds.
              </li>
              <li>
                Refunds are not granted for "accidental" usage of the tool (e.g., humanizing the wrong text).
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            RAW.AI Team <br />
            San Francisco, CA
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
