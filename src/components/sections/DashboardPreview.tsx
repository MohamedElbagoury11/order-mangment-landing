import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';
import { Language, translations } from '../../i18n/translations';
import { GlassCard } from '../ui/GlassCard';

interface DashboardPreviewProps {
    language: Language;
}

export function DashboardPreview({ language }: DashboardPreviewProps) {
    const t = translations;

    const stats = [
        { id: 1, value: '24', icon: TrendingUp, color: 'text-blue-600' },
        { id: 2, value: '156', icon: Users, color: 'text-purple-600' },
        { id: 3, value: '12,450', icon: BarChart3, color: 'text-green-600' },
        { id: 4, value: '99%', icon: PieChart, color: 'text-orange-600' },
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
                    {t.dashboardTitle[language]}
                </h2>

                <GlassCard className="p-8 animate-on-scroll bg-white/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.id} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                                    <div className={`flex justify-center mb-3 ${stat.color}`}>
                                        <Icon size={28} />
                                    </div>
                                    <div className="text-3xl font-bold text-slate-800 mb-2 font-mono">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-600 font-medium text-sm">
                                        {t[`dashboardStat${stat.id}` as keyof typeof t][language]}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Placeholder for a chart or graph image/component */}
                    <div className="bg-white/50 rounded-2xl p-8 h-80 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 group hover:border-blue-400 transition-colors">
                        <BarChart3 size={64} className="text-slate-300 mb-4 group-hover:text-blue-400 transition-colors" />
                        <p className="text-slate-600 text-lg font-medium">{t.dashboardReports[language]}</p>
                        <p className="text-slate-400 text-sm mt-2">{language === 'ar' ? 'عرض توضيحي للرسوم البيانية' : 'Chart Visualization Demo'}</p>

                        {/* Fake bars for visual interest */}
                        <div className="flex items-end gap-2 h-24 mt-6">
                            <div className="w-4 bg-blue-300/50 h-[40%] rounded-t-sm"></div>
                            <div className="w-4 bg-blue-400/50 h-[70%] rounded-t-sm"></div>
                            <div className="w-4 bg-blue-500/50 h-[50%] rounded-t-sm"></div>
                            <div className="w-4 bg-blue-600/50 h-[90%] rounded-t-sm"></div>
                            <div className="w-4 bg-blue-400/50 h-[60%] rounded-t-sm"></div>
                        </div>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
