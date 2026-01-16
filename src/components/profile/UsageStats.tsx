import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Loader2, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';

export const UsageStats = () => {
  const { user, profile } = useAuth();
  const [monthlyUsage, setMonthlyUsage] = useState<number>(0);
  const [loadingUsage, setLoadingUsage] = useState(true);

  useEffect(() => {
    const fetchUsage = async () => {
      if (!user) return;

      setLoadingUsage(true);
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      startOfMonth.setHours(0, 0, 0, 0);

      const { data: usageData } = await supabase
        .from('usage_logs')
        .select('words_count')
        .eq('user_id', user.id)
        .gte('created_at', startOfMonth.toISOString());

      if (usageData) {
        const total = usageData.reduce((sum, log) => sum + (log.words_count || 0), 0);
        setMonthlyUsage(total);
      }
      setLoadingUsage(false);
    };

    fetchUsage();
  }, [user]);

  const getPlanLimit = () => {
    switch (profile?.subscribed_plan) {
      case 'ultra': return Infinity;
      case 'pro': return 50000;
      default: return 5000;
    }
  };

  const planLimit = getPlanLimit();
  const usagePercentage = planLimit === Infinity ? 0 : Math.min((monthlyUsage / planLimit) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className="relative rounded-2xl overflow-hidden mb-8"
    >
      <motion.div
        className="absolute -inset-px rounded-2xl bg-gradient-to-b from-foreground/20 via-foreground/5 to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      />

      <div className="relative bg-card/80 backdrop-blur-xl border border-border/30 rounded-2xl p-6 md:p-8">
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BarChart3 className="w-5 h-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">How much I've written</h3>
        </motion.div>

        {loadingUsage ? (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold">
                  {monthlyUsage.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  words written this month
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="font-medium capitalize">
                    {profile?.subscribed_plan || 'free'} Plan
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {planLimit === Infinity ? 'Unlimited' : `${planLimit.toLocaleString()} words/month`}
                </div>
              </div>
            </div>

            {planLimit !== Infinity && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Usage</span>
                  <span className="font-medium">{usagePercentage.toFixed(1)}%</span>
                </div>
                <Progress value={usagePercentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{monthlyUsage.toLocaleString()} used</span>
                  <span>{(planLimit - monthlyUsage).toLocaleString()} left to go</span>
                </div>
              </div>
            )}

            {profile?.subscribed_plan === 'free' && usagePercentage > 80 && (
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-primary font-medium">
                  You're running a bit low on words! Upgrade to Pro for more writing power.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
