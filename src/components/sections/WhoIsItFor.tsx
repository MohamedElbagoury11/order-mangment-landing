import { CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { GlassCard } from '../ui/GlassCard';

interface WhoIsItForProps {
    language: Language;
}

export function WhoIsItFor({ language }: WhoIsItForProps) {
    const t = translations;

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
                    {t.whoIsForTitle[language]}
                </h2>

                <GlassCard className="p-8 md:p-12 animate-on-scroll">
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/40 rounded-xl hover:bg-white/60 transition-colors cursor-default">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white shadow-md">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-lg md:text-xl text-slate-800 font-medium">
                                    {t[`whoIsFor${i}` as keyof typeof t][language]}
                                </p>
                            </div>
                        ))}
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
