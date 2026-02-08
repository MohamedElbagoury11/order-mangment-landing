import { MessageCircle, Phone } from 'lucide-react';
import logo from '../../assets/app_logo_1770254108766.png';
import { Language, translations } from '../../i18n/translations';

interface FooterProps {
    language: Language;
}

export function Footer({ language }: FooterProps) {
    const t = translations;
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-12 px-4 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                    <span className="text-2xl font-bold text-white">
                        {t.appName[language]}
                    </span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-slate-300">
                    <div className="flex items-center gap-2">
                       
                        <span dir="ltr">contact us</span>
                    </div>

                    <a
                        href={t.whatsappLink[language]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-green-400 transition-colors"
                    >
                        <MessageCircle size={20} className="text-green-500" />
                        <span>WhatsApp</span>
                    </a>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl text-sm text-slate-500 border-t border-white/5 pt-8">
                    <p>{t.rights[language].replace('2024', currentYear.toString())}</p>
                    <p>Designed by {t.modernSolutions[language]}</p>
                </div>
            </div>
        </footer>
    );
}
