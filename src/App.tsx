import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { PremiumAI } from './components/PremiumAI';
import { UseCases } from './components/UseCases';
import { Pricing } from './components/Pricing';
import { EmailCapture } from './components/EmailCapture';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1F] text-white">
      <Navigation />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <Features />
      <PremiumAI />
      <UseCases />
      <Pricing />
      <EmailCapture />
      <Footer />
      <Toaster />
    </div>
  );
}