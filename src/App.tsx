import { useEffect, useState } from 'react';
import logo from './assets/app_logo_1770254108766.png';
import { cn } from './utils/cn';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  appName: {
    ar: 'إدارة الأوردرات',
    en: 'Order Management'
  },
  heroTitle: {
    ar: 'نظم أوردراتك من أول مورد لحد آخر عميل',
    en: 'Streamline Your Orders from Supplier to Customer'
  },
  heroSubtitle: {
    ar: 'إدارة كاملة للأوردرات، العملاء، الموردين، والفواتير من مكان واحد',
    en: 'Complete management of orders, clients, vendors, and invoices in one place'
  },
  heroSubtitleEn: {
    ar: 'إدارة الأوردرات والعملاء والموردين والأرباح في مكان واحد',
    en: 'Manage orders, clients, vendors, and profits in one place'
  },
  downloadApp: {
    ar: 'تحميل التطبيق',
    en: 'Download App'
  },
  featuresTitle: {
    ar: 'المميزات الرئيسية',
    en: 'Core Features'
  },
  feature1Title: {
    ar: 'إضافة الأوردرات بسهولة',
    en: 'Easy Order Creation'
  },
  feature1Desc: {
    ar: 'إضافة الأوردرات مع عدة عملاء في أوردر واحد',
    en: 'Add orders with multiple clients in one order'
  },
  feature2Title: {
    ar: 'إدارة العملاء',
    en: 'Client Management'
  },
  feature2Desc: {
    ar: 'تتبع العملاء وعرض جميع أوردراتهم وتاريخهم',
    en: 'Track clients and view all their orders and history'
  },
  feature3Title: {
    ar: 'إدارة الموردين',
    en: 'Vendor Management'
  },
  feature3Desc: {
    ar: 'تتبع الموردين والأوردرات المتعلقة بهم',
    en: 'Track vendors and their related orders'
  },
  feature4Title: {
    ar: 'حالات الأوردرات',
    en: 'Order Status Tracking'
  },
  feature4Desc: {
    ar: 'قيد الانتظار ← قيد التنفيذ ← مكتمل',
    en: 'Pending → In Progress → Completed'
  },
  feature5Title: {
    ar: 'واتساب بضغطة واحدة',
    en: 'One-Click WhatsApp'
  },
  feature5Desc: {
    ar: 'إرسال تفاصيل الأوردر للعملاء عبر الواتساب',
    en: 'Send order details to clients via WhatsApp'
  },
  howItWorksTitle: {
    ar: 'كيف يعمل التطبيق',
    en: 'How It Works'
  },
  step1Title: {
    ar: 'أنشئ الأوردر',
    en: 'Create Order'
  },
  step1Desc: {
    ar: 'إضافة المورد والعملاء مع الأسعار والكميات',
    en: 'Add vendor and clients with prices and quantities'
  },
  step2Title: {
    ar: 'تابع الحالة',
    en: 'Track Status'
  },
  step2Desc: {
    ar: 'تتبع الدفع والتوصيل وحالة الأوردر',
    en: 'Track payment, delivery, and order status'
  },
  step3Title: {
    ar: 'سلّم واحسب المكسب',
    en: 'Deliver & Calculate Profit'
  },
  step3Desc: {
    ar: 'إكمال الأوردرات وعرض الأرباح والتقارير',
    en: 'Complete orders and view profits and reports'
  },
  dashboardTitle: {
    ar: 'لوحة التحكم والتقارير',
    en: 'Dashboard & Reports'
  },
  dashboardStat1: {
    ar: 'إحصائيات الأوردرات',
    en: 'Order Statistics'
  },
  dashboardStat2: {
    ar: 'عدد الأوردرات المكتملة',
    en: 'Completed Orders Count'
  },
  dashboardStat3: {
    ar: 'إجمالي المكسب',
    en: 'Total Profit'
  },
  dashboardStat4: {
    ar: 'الفواتير والتقارير حسب الفترة الزمنية',
    en: 'Invoices & Reports by Time Period'
  },
  dashboardReports: {
    ar: '📊 تقارير بيانية وتفصيلية',
    en: '📊 Detailed Graphical Reports'
  },
  whoIsForTitle: {
    ar: 'لمن هذا التطبيق؟',
    en: 'Who is this for?'
  },
  whoIsFor1: {
    ar: 'أصحاب صفحات البيع على فيسبوك وإنستجرام',
    en: 'Facebook & Instagram page owners'
  },
  whoIsFor2: {
    ar: 'تجار شي إن والطلبات المجمعة',
    en: 'Shein traders & group order managers'
  },
  whoIsFor3: {
    ar: 'أي شخص يدير أوردرات متعددة يوميًا',
    en: 'Anyone managing multiple orders daily'
  },
  pricingTitle: {
    ar: 'خطط الأسعار',
    en: 'Pricing Plans'
  },
  freePlan: {
    ar: 'المجانية',
    en: 'Free Plan'
  },
  freePlanDesc: {
    ar: 'حتى 5 أوردرات',
    en: 'Up to 5 orders'
  },
  monthly: {
    ar: 'شهري',
    en: 'Monthly'
  },
  monthlyPlan: {
    ar: '100 جنيه مصري / شهر',
    en: '100 EGP / month'
  },
  monthlyPlanDesc: {
    ar: 'أوردرات غير محدودة',
    en: 'Unlimited orders'
  },
  mostPopular: {
    ar: 'الأكثر شعبية',
    en: 'Most Popular'
  },
  lifetime: {
    ar: 'مدى الحياة',
    en: 'Lifetime'
  },
  lifetimePlan: {
    ar: '3000 جنيه مصري',
    en: '3000 EGP'
  },
  lifetimePlanDesc: {
    ar: 'دفع لمرة واحدة',
    en: 'One-time payment'
  },
  lifetimePlanSub: {
    ar: 'مدى الحياة',
    en: 'Lifetime access'
  },
  'offer 50%': {
    ar: 'عرض 50%',
    en: '50% Offer'
  },
  yearly: {
    ar: 'سنوي',
    en: 'Yearly'
  },
  yearlyPlanDesk: {
    ar: 'أوردرات غير محدودة',
    en: 'Unlimited orders'
  },
  'save 200 EGP': {
    ar: 'وفر 200 جنيه',
    en: 'Save 200 EGP'
  },
  finalCtaTitle: {
    ar: 'ابدأ تنظيم شغلك النهاردة',
    en: 'Start Organizing Your Business Today'
  },
  finalCtaSubtitle: {
    ar: 'حمل تطبيق إدارة الأوردرات الآن',
    en: 'Download Order Management App'
  },
  downloadLink: {
    ar: 'https://github.com/MohamedElbagoury11/Orders-Management/releases/download/order_management/order_mangment_v2.apk',
    en: 'https://github.com/MohamedElbagoury11/Orders-Management/releases/download/order_management/order_mangment_v2.apk'
  },
  contact: {
    ar: 'تواصل معنا',
    en: 'Contact Us'
  },
  rights: {
    ar: '© 2024 جميع الحقوق محفوظة',
    en: '© 2024 All Rights Reserved'
  }
};

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn(
      "bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl shadow-lg shadow-slate-900/5 transition-all duration-300",
      "hover:shadow-xl hover:bg-white/50",
      className
    )}>
      {children}
    </div>
  );
}

export function App() {
  const [language, setLanguage] = useState<Language>('ar');
  useScrollAnimation();

  const t = (key: string) => translations[key]?.[language] || key;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const isRTL = language === 'ar';

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-100"
      dir={isRTL ? 'rtl' : 'ltr'}
      lang={language}
    >
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="fixed top-4 left-4 z-50 bg-white/30 backdrop-blur-md border border-white/50 text-slate-900 font-semibold px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:bg-white/50 hover:scale-105"
      >
        {language === 'ar' ? 'EN' : 'AR'}
      </button>

      <div className="fixed top-4 right-4 z-50">
        <img
          src={logo}
          alt="Order Management Logo"
          className="w-12 h-12 md:w-16 md:h-16 drop-shadow-lg"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/40" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            {t('appName')}
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-blue-100 mb-6 leading-relaxed">
            {t('heroTitle')}
          </h2>
          <p className="text-lg md:text-xl text-blue-200 mb-4">
            {t('heroSubtitle')}
          </p>
          <p className="text-base md:text-lg text-blue-100 mb-8 italic">
            {t('heroSubtitleEn')}
          </p>
          <a
            href="#download"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 animate-pulse"
          >
            {t('downloadApp')}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
            {t('featuresTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <GlassCard key={i} className="p-6 animate-on-scroll">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4 text-white text-2xl font-bold shadow-lg">
                  {i}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {t(`feature${i}Title`)}
                </h3>
                <p className="text-slate-700">
                  {t(`feature${i}Desc`)}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
            {t('howItWorksTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <GlassCard key={i} className="p-8 text-center animate-on-scroll">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                  {i}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {t(`step${i}Title`)}
                </h3>
                <p className="text-slate-700">
                  {t(`step${i}Desc`)}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
            {t('dashboardTitle')}
          </h2>
          <GlassCard className="p-8 animate-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white/60 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {i === 1 ? '24' : i === 2 ? '156' : i === 3 ? '12,450' : '99%'}
                  </div>
                  <div className="text-slate-700 font-medium">
                    {t(`dashboardStat${i}`)}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/60 rounded-xl p-8 h-64 flex items-center justify-center">
              <p className="text-slate-600 text-lg">{t('dashboardReports')}</p>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
            {t('whoIsForTitle')}
          </h2>
          <GlassCard className="p-8 animate-on-scroll">
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4 space-x-reverse p-4 bg-white/40 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    ✓
                  </div>
                  <p className="text-lg text-slate-900 font-medium">
                    {t(`whoIsFor${i}`)}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 animate-on-scroll">
            {t('pricingTitle')}
          </h2>
          <div className="flex justify-center mb-12 animate-on-scroll">

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <GlassCard className="p-8 text-center animate-on-scroll">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t('freePlan')}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">0</p>
              <p className="text-slate-700 mb-6">
                {t('freePlanDesc')}
              </p>
              <a
                href={t('downloadLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-slate-200 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors text-center"
              >
                {t('downloadApp')}
              </a>
            </GlassCard>

            {/* Monthly Plan */}
            <GlassCard className="p-8 text-center animate-on-scroll border-2 border-blue-500">

              <p className="text-4xl font-bold text-blue-600 mb-2">{t('offer 50%')}</p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                {t('mostPopular')}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t('monthly')}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">100</p>
              <p className="text-slate-700 mb-6">
                {t('monthlyPlanDesc')}
              </p>

              <a
                href={t('downloadLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all text-center"
              >
                {t('downloadApp')}
              </a>
            </GlassCard>

            {/* Lifetime Plan */}
            <GlassCard className="p-8 text-center animate-on-scroll">
              <p className="text-4xl font-bold text-blue-600 mb-2">{t('offer 50%')}</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t('yearly')}
              </h3>
              <p className="text-4xl font-bold text-blue-600 mb-2">1000</p>
              <p className="text-slate-700 mb-2">
                {t('yearlyPlanDesk')}
              </p>
              <p className="text-slate-700 mb-6">
                {t('save 200 EGP')}
              </p>

              <a
                href={t('downloadLink')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-slate-200 text-slate-800 font-bold py-3 rounded-lg hover:bg-slate-300 transition-colors text-center"
              >
                {t('downloadApp')}
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="download" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('finalCtaTitle')}
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              {t('finalCtaSubtitle')}
            </p>
            <a
              href={t('downloadLink')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-xl px-12 py-4 rounded-xl shadow-lg shadow-blue-900/30 transition-all duration-300 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:scale-105 animate-pulse"
            >
              {t('downloadApp')}
            </a>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 space-x-reverse mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10"
            />
            <div className="text-2xl font-bold text-white">
              {' '}
            </div>
            <div className="text-2xl font-bold text-white">
              {t('appName')}
            </div>
          </div>
          <p className="text-slate-300 mb-6">
            {t('contact')}: support@ordermanagement.app
          </p>
          <div className="flex justify-center space-x-4 space-x-reverse mb-6">
            {[['ف', 'F'], ['ت', 'T'], ['و', 'W']].map(([ar, en], i) => (
              <div key={i} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                {isRTL ? ar : en}
              </div>
            ))}
          </div>
          <p className="text-slate-400">
            {t('rights')}
          </p>
        </div>
      </footer>
    </div>
  );
}
