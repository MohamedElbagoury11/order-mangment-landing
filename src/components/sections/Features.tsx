import { Activity, MessageCircle, ShoppingCart, Truck, Users } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { GlassCard } from '../ui/GlassCard';

interface FeaturesProps {
    language: Language;
}

export function Features({ language }: FeaturesProps) {
    const t = translations;

    const features = [
        { id: 1, icon: ShoppingCart, color: 'text-blue-500' },
        { id: 2, icon: Users, color: 'text-purple-500' },
        { id: 3, icon: Truck, color: 'text-orange-500' },
        { id: 4, icon: Activity, color: 'text-green-500' },
        { id: 5, icon: MessageCircle, color: 'text-green-600' },
    ];

    return (
        <section id="features" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
                    {t.featuresTitle[language]}
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <GlassCard key={feature.id} className="p-6 animate-on-scroll group">
                                <div className={`w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {t[`feature${feature.id}Title` as keyof typeof t][language]}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {t[`feature${feature.id}Desc` as keyof typeof t][language]}
                                </p>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
