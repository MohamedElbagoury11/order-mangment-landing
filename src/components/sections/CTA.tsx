import { Download } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

interface CTAProps {
    language: Language;
}

export function CTA({ language }: CTAProps) {
    const t = translations;

    return (
        <section id="download" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <GlassCard className="p-12 text-center animate-on-scroll bg-gradient-to-br from-white/40 to-blue-100/40">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        {t.finalCtaTitle[language]}
                    </h2>
                    <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                        {t.finalCtaSubtitle[language]}
                        
                    </p>
                    <Button
                        href={t.downloadLink[language]}
                        size="lg"
                        target="_blank"
                        className="animate-pulse shadow-xl shadow-blue-500/20"
                    >
                        <Download className="mr-2" size={24} />
                        {t.downloadApp[language]}
                    </Button>
                    <br />
                    
                    <br />
                    <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
                        {t.secureAndSafe[language]} <br />
                        {t.installFromUnknownSources[language]}  
                        
                                          </p>
                </GlassCard>
            </div>
        </section>
    );
}
