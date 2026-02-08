import { useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { CTA } from './components/sections/CTA';
import { DashboardPreview } from './components/sections/DashboardPreview';
import { Features } from './components/sections/Features';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { Pricing } from './components/sections/Pricing';
import { WhoIsItFor } from './components/sections/WhoIsItFor';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { Language } from './i18n/translations';

export function App() {
  const [language, setLanguage] = useState<Language>('ar');
  useScrollAnimation();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const isRTL = language === 'ar';

  return (
    <div
      className="min-h-screen bg-[#0f172a] font-cairo"
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
      style={{ fontFamily: isRTL ? '"Cairo", sans-serif' : '"Inter", sans-serif' }}
    >
      <Navbar language={language} toggleLanguage={toggleLanguage} />

      <main>
        <Hero language={language} />
        <Features language={language} />
        <HowItWorks language={language} />
        <DashboardPreview language={language} />
        <WhoIsItFor language={language} />
        <Pricing language={language} />
        <CTA language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
