import { Award, Target, Globe, Brain, Zap, Shield, LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string;
}

export const featuresList: Feature[] = [
  {
    icon: Award,
    title: "Natural Flow",
    description: "We turn rough drafts into smooth, professional writing that everyone loves to read.",
    details: "Our tools look at how people actually write—the rhythm, the heart, and the style. We make sure your work doesn't just pass detectors, but sounds great to your readers.",
  },
  {
    icon: Target,
    title: "Your Voice, Your Way",
    description: "Keep control over how you sound while we handle the heavy lifting.",
    details: "Whether you need to sound scholarly, creative, or executive, we've got you covered. You choose the vibe, and we make it happen while keeping your original message intact.",
  },
  {
    icon: Globe,
    title: "Ready for the World",
    description: "Write in over 50 languages with a natural touch that feels local.",
    details: "We don't just translate; we understand. From Spanish to Mandarin, we help you communicate clearly across the globe with a human flair.",
  },
  {
    icon: Brain,
    title: "Smart Rewriting",
    description: "We understand the 'why' behind your words, not just the 'what'.",
    details: "Instead of just swapping words around, we look at the whole story. Our system remaps your sentences so they flow naturally, just like a human writer would.",
  },
  {
    icon: Zap,
    title: "Get Noticed",
    description: "Better writing means better SEO. We help you rank higher without trying too hard.",
    details: "We weave in your keywords naturally so search engines love you, but humans can still enjoy reading your work. It's the best of both worlds.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Write with confidence knowing your work will pass any check.",
    details: "We've tested our tools against every major AI detector out there. Our goal is simple: to make sure your work is seen as 100% human, every single time.",
  },
];
