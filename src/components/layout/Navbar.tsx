import { Globe } from 'lucide-react';
import logo from '../../assets/app_logo_1770254108766.png';
import { Language } from '../../i18n/translations';

interface NavbarProps {
    language: Language;
    toggleLanguage: () => void;
}

export function Navbar({ language, toggleLanguage }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Language Toggle */}
                <button
                    onClick={toggleLanguage}
                    className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg"
                >
                    <Globe size={18} />
                    <span className="font-bold">{language === 'ar' ? 'English' : 'العربية'}</span>
                </button>

                {/* Logo */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-lg">
                    <img
                        src={logo}
                        alt="Order Management Logo"
                        className="w-full h-full object-contain drop-shadow-lg"
                    />
                </div>
            </div>
        </nav>
    );
}
