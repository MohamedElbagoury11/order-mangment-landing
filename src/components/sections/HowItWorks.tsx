import { Activity, FilePlus, TrendingUp } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { GlassCard } from '../ui/GlassCard';

interface HowItWorksProps {
    language: Language;
}

export function HowItWorks({ language }: HowItWorksProps) {
    const t = translations;

    const steps = [
        { id: 1, icon: FilePlus },
        { id: 2, icon: Activity },
        { id: 3, icon: TrendingUp },
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
                    {t.howItWorksTitle[language]}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop - simplified for now */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <GlassCard key={step.id} className="p-8 text-center animate-on-scroll z-10 hover:-translate-y-2">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-500/30 relative">
                                    <span className="absolute -top-2 -right-2 bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-blue-100">
                                        {index + 1}
                                    </span>
                                    <Icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {t[`step${step.id}Title` as keyof typeof t][language]}
                                </h3>
                                <p className="text-slate-600">
                                    {t[`step${step.id}Desc` as keyof typeof t][language]}
                                </p>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
