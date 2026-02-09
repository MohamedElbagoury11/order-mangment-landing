export type Language = 'ar' | 'en';

export interface Translations {
    [key: string]: {
        ar: string;
        en: string;
    };
}

export const translations: Translations = {
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
        ar: ' تقارير بيانية وتفصيلية',
        en: 'Detailed Graphical Reports'
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
        ar: '/Order Mangment v_2.apk',
        en: '/Order Mangment v_2.apk'
    },
    contact: {
        ar: 'تواصل معنا',
        en: 'Contact Us'
    },
    rights: {
        ar: '© 2024 جميع الحقوق محفوظة',
        en: '© 2024 All Rights Reserved'
    },
    whatsappLink: {
        ar: 'https://wa.me/201020074013?text=i%20need%20...',
        en: 'https://wa.me/201020074013?text=i%20need%20...'
    },
    modernSolutions: {
        ar: 'Modern Solutions',
        en: 'Modern Solutions'
    },
    secureAndSafe: {
        ar: 'هذا التطبيق آمن وموثوق',
        en: 'This app is secure and safe'
    },
    installFromUnknownSources: {
        ar: 'قد يطلب منك تفعيل التثبيت من  هذا المصدر',
        en: 'May ask you to enable installation from this source'
    }
};
