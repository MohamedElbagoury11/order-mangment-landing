import { Check, Download } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

interface PricingProps {
    language: Language;
}

export function Pricing({ language }: PricingProps) {
    const t = translations;

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
                    {t.pricingTitle[language]}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Free Plan */}
                    <GlassCard className="p-8 text-center animate-on-scroll hover:border-slate-300">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.freePlan[language]}</h3>
                        <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
                        <p className="text-slate-600 mb-6 font-medium">{t.freePlanDesc[language]}</p>
                        <ul className="mb-8 space-y-2 text-left text-slate-600 text-sm">
                            <li className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>5 Orders Limit</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check size={16} className="text-green-500" />
                                <span>Basic Reports</span>
                            </li>
                        </ul>
                       <Button
                        href="#download"
                        size="lg"
                        className="w-full sm:w-auto group"
                    >
                        <Download className="mr-2 group-hover:animate-bounce" size={24} />
                        {t.downloadApp[language]}
                    </Button>
                    </GlassCard>

                    {/* Monthly Plan - Popular */}
                    <GlassCard className="p-8 text-center animate-on-scroll border-2 border-blue-500 relative transform md:-translate-y-4 z-10">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            {t.mostPopular[language]}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.monthly[language]}</h3>

                        <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-5xl font-bold text-blue-600">100</span>
                            <span className="text-2xl line-through text-slate-400">200</span>
                        </div>

                        <p className="text-slate-700 font-medium mb-8 bg-blue-50 py-2 rounded-lg">
                            {t.monthlyPlanDesc[language]}
                        </p>

                        <Button
                        href="#download"
                        size="lg"
                        className="w-full sm:w-auto group"
                    >
                        <Download className="mr-2 group-hover:animate-bounce" size={24} />
                        {t.downloadApp[language]}
                    </Button>
                    </GlassCard>

                    {/* Lifetime Plan */}
                    <GlassCard className="p-8 text-center animate-on-scroll">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.yearly[language]}</h3>

                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
                            {t['save 200 EGP'][language]}
                        </div>

                        <div className="flex items-center justify-center gap-3 mb-2">
                            <span className="text-4xl font-bold text-blue-600">1000</span>
                            <span className="text-2xl line-through text-slate-400">2000</span>
                        </div>

                        <p className="text-slate-700 font-medium mb-8">
                            {t.yearlyPlanDesk[language]}
                        </p>

                        <Button
                        href="#download"
                        size="lg"
                        className="w-full sm:w-auto group"
                    >
                        <Download className="mr-2 group-hover:animate-bounce" size={24} />
                        {t.downloadApp[language]}
                        </Button>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
