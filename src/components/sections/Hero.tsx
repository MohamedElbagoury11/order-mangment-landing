import { ArrowRight, Download } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { Button } from '../ui/Button';

interface HeroProps {
    language: Language;
}

export function Hero({ language }: HeroProps) {
    const t = translations;
    const isRTL = language === 'ar';

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-slate-900/60" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium animate-fade-in">
                    ✨ {language === 'ar' ? 'الإصدار الجديد v2.0' : 'New Version v2.0'}
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 animate-fade-in leading-tight tracking-tight">
                    {t.appName[language]}
                </h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-blue-100 mb-6 leading-relaxed max-w-3xl mx-auto animate-fade-in animation-delay-200">
                    {t.heroTitle[language]}
                </h2>

                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400">
                    {t.heroSubtitle[language]}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
                    <Button
                        href="#download"
                        size="lg"
                        className="w-full sm:w-auto group"
                    >
                        <Download className="mr-2 group-hover:animate-bounce" size={24} />
                        {t.downloadApp[language]}
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        href="#features"
                        className="w-full sm:w-auto group"
                    >
                        {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                        {isRTL ? <ArrowRight className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" /> : <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </div>
            </div>
        </section>
    );
}
