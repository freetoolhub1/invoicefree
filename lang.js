// InvoiceFree.info — Multi-Language Support
// Supported: English, Spanish, French, German, Arabic, Urdu, Hindi, Portuguese
const TRANSLATIONS = {
  en: {
    name:"English", dir:"ltr", flag:"🇺🇸",
    hero_title:"Create <em>Beautiful</em><br>Invoices in Seconds",
    hero_sub:"Professional invoicing made effortless. Design, send, and track invoices that get you paid faster.",
    hero_btn:"Create Invoice Free",
    hero_btn2:"View Pricing",
    stat_users:"Active Users", stat_invoices:"Invoices Created", stat_rating:"Avg Rating", stat_start:"To Start",
    nav_features:"Features", nav_templates:"Templates", nav_pricing:"Pricing", nav_create:"Create Invoice",
    nav_login:"Login", nav_try:"Try Free",
    promo_badge:"LIMITED TIME OFFER", promo_title:"Get <em>3 Months Free</em> Pro Access",
    promo_sub:"Sign up today and get full Pro features free for 3 months. No credit card required.",
    promo_btn:"Claim 3 Months Free", promo_note:"No card needed · Cancel anytime",
  },
  es: {
    name:"Español", dir:"ltr", flag:"🇪🇸",
    hero_title:"Crea <em>Facturas</em><br>Profesionales en Segundos",
    hero_sub:"Facturación profesional sin esfuerzo. Diseña, envía y rastrea facturas para cobrar más rápido.",
    hero_btn:"Crear Factura Gratis",
    hero_btn2:"Ver Precios",
    stat_users:"Usuarios Activos", stat_invoices:"Facturas Creadas", stat_rating:"Calificación", stat_start:"Para Empezar",
    nav_features:"Características", nav_templates:"Plantillas", nav_pricing:"Precios", nav_create:"Crear Factura",
    nav_login:"Iniciar Sesión", nav_try:"Prueba Gratis",
    promo_badge:"OFERTA LIMITADA", promo_title:"Obtén <em>3 Meses Gratis</em> de Pro",
    promo_sub:"Regístrate hoy y obtén todas las funciones Pro gratis por 3 meses. Sin tarjeta de crédito.",
    promo_btn:"Reclamar 3 Meses Gratis", promo_note:"Sin tarjeta · Cancela cuando quieras",
  },
  fr: {
    name:"Français", dir:"ltr", flag:"🇫🇷",
    hero_title:"Créez de <em>Belles</em><br>Factures en Secondes",
    hero_sub:"La facturation professionnelle simplifiée. Créez, envoyez et suivez vos factures pour être payé plus vite.",
    hero_btn:"Créer une Facture Gratuitement",
    hero_btn2:"Voir les Tarifs",
    stat_users:"Utilisateurs Actifs", stat_invoices:"Factures Créées", stat_rating:"Note Moyenne", stat_start:"Pour Commencer",
    nav_features:"Fonctionnalités", nav_templates:"Modèles", nav_pricing:"Tarifs", nav_create:"Créer Facture",
    nav_login:"Connexion", nav_try:"Essai Gratuit",
    promo_badge:"OFFRE LIMITÉE", promo_title:"Obtenez <em>3 Mois Gratuits</em> Pro",
    promo_sub:"Inscrivez-vous aujourd'hui et obtenez toutes les fonctionnalités Pro gratuitement pendant 3 mois.",
    promo_btn:"Réclamer 3 Mois Gratuits", promo_note:"Sans carte · Annulez à tout moment",
  },
  de: {
    name:"Deutsch", dir:"ltr", flag:"🇩🇪",
    hero_title:"<em>Schöne</em> Rechnungen<br>in Sekunden erstellen",
    hero_sub:"Professionelle Rechnungsstellung leicht gemacht. Erstellen, senden und verfolgen Sie Rechnungen.",
    hero_btn:"Rechnung kostenlos erstellen",
    hero_btn2:"Preise ansehen",
    stat_users:"Aktive Nutzer", stat_invoices:"Erstellte Rechnungen", stat_rating:"Bewertung", stat_start:"Zum Start",
    nav_features:"Funktionen", nav_templates:"Vorlagen", nav_pricing:"Preise", nav_create:"Rechnung erstellen",
    nav_login:"Anmelden", nav_try:"Kostenlos testen",
    promo_badge:"ZEITLICH BEGRENZT", promo_title:"<em>3 Monate gratis</em> Pro-Zugang",
    promo_sub:"Registrieren Sie sich heute und erhalten Sie 3 Monate lang alle Pro-Funktionen kostenlos.",
    promo_btn:"3 Monate gratis beanspruchen", promo_note:"Keine Karte · Jederzeit kündbar",
  },
  ar: {
    name:"العربية", dir:"rtl", flag:"🇸🇦",
    hero_title:"أنشئ <em>فواتير احترافية</em><br>في ثوانٍ",
    hero_sub:"إصدار فواتير احترافية بكل سهولة. صمم وأرسل وتتبع فواتيرك للحصول على مدفوعاتك أسرع.",
    hero_btn:"إنشاء فاتورة مجانًا",
    hero_btn2:"عرض الأسعار",
    stat_users:"المستخدمون النشطون", stat_invoices:"الفواتير المنشأة", stat_rating:"متوسط التقييم", stat_start:"للبدء",
    nav_features:"المميزات", nav_templates:"القوالب", nav_pricing:"الأسعار", nav_create:"إنشاء فاتورة",
    nav_login:"تسجيل الدخول", nav_try:"جرب مجانًا",
    promo_badge:"عرض محدود المدة", promo_title:"احصل على <em>3 أشهر مجانية</em> من Pro",
    promo_sub:"سجّل اليوم واحصل على جميع ميزات Pro مجانًا لمدة 3 أشهر. لا يلزم بطاقة ائتمان.",
    promo_btn:"المطالبة بـ 3 أشهر مجانية", promo_note:"بدون بطاقة · إلغاء في أي وقت",
  },
  ur: {
    name:"اردو", dir:"rtl", flag:"🇵🇰",
    hero_title:"<em>خوبصورت انوائس</em><br>چند سیکنڈ میں بنائیں",
    hero_sub:"پیشہ ورانہ انوائسنگ آسان ہو گئی۔ انوائس بنائیں، بھیجیں اور ادائیگی ٹریک کریں۔",
    hero_btn:"مفت انوائس بنائیں",
    hero_btn2:"قیمتیں دیکھیں",
    stat_users:"فعال صارفین", stat_invoices:"بنائے گئے انوائس", stat_rating:"اوسط درجہ بندی", stat_start:"شروع کریں",
    nav_features:"خصوصیات", nav_templates:"ٹیمپلیٹس", nav_pricing:"قیمتیں", nav_create:"انوائس بنائیں",
    nav_login:"لاگ ان", nav_try:"مفت آزمائیں",
    promo_badge:"محدود وقت کی پیشکش", promo_title:"<em>3 ماہ مفت</em> Pro رسائی پائیں",
    promo_sub:"آج رجسٹر کریں اور 3 ماہ کے لیے تمام Pro خصوصیات مفت میں پائیں۔ کریڈٹ کارڈ کی ضرورت نہیں۔",
    promo_btn:"3 ماہ مفت حاصل کریں", promo_note:"کارڈ نہیں چاہیے · کبھی بھی منسوخ کریں",
  },
  hi: {
    name:"हिंदी", dir:"ltr", flag:"🇮🇳",
    hero_title:"<em>सुंदर इनवॉइस</em><br>सेकंडों में बनाएं",
    hero_sub:"पेशेवर इनवॉइसिंग आसान बनाई। इनवॉइस डिज़ाइन करें, भेजें और तेज़ी से भुगतान पाएं।",
    hero_btn:"मुफ़्त इनवॉइस बनाएं",
    hero_btn2:"मूल्य देखें",
    stat_users:"सक्रिय उपयोगकर्ता", stat_invoices:"बनाए गए इनवॉइस", stat_rating:"औसत रेटिंग", stat_start:"शुरू करने के लिए",
    nav_features:"विशेषताएं", nav_templates:"टेम्पलेट", nav_pricing:"मूल्य निर्धारण", nav_create:"इनवॉइस बनाएं",
    nav_login:"लॉगिन", nav_try:"मुफ़्त आज़माएं",
    promo_badge:"सीमित समय ऑफर", promo_title:"<em>3 महीने मुफ़्त</em> Pro एक्सेस पाएं",
    promo_sub:"आज साइन अप करें और 3 महीने के लिए सभी Pro सुविधाएं मुफ़्त पाएं। क्रेडिट कार्ड की जरूरत नहीं।",
    promo_btn:"3 महीने मुफ़्त पाएं", promo_note:"कार्ड नहीं चाहिए · कभी भी रद्द करें",
  },
  pt: {
    name:"Português", dir:"ltr", flag:"🇧🇷",
    hero_title:"Crie <em>Faturas Bonitas</em><br>em Segundos",
    hero_sub:"Faturação profissional simplificada. Crie, envie e rastreie faturas para ser pago mais rápido.",
    hero_btn:"Criar Fatura Grátis",
    hero_btn2:"Ver Preços",
    stat_users:"Usuários Ativos", stat_invoices:"Faturas Criadas", stat_rating:"Avaliação Média", stat_start:"Para Começar",
    nav_features:"Recursos", nav_templates:"Modelos", nav_pricing:"Preços", nav_create:"Criar Fatura",
    nav_login:"Entrar", nav_try:"Teste Grátis",
    promo_badge:"OFERTA LIMITADA", promo_title:"Ganhe <em>3 Meses Grátis</em> de Pro",
    promo_sub:"Cadastre-se hoje e ganhe todos os recursos Pro gratuitamente por 3 meses. Sem cartão de crédito.",
    promo_btn:"Resgatar 3 Meses Grátis", promo_note:"Sem cartão · Cancele quando quiser",
  }
};

// Detect language from browser
function detectLanguage() {
  const saved = localStorage.getItem('if_lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  const browser = (navigator.language || navigator.userLanguage || 'en').split('-')[0].toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

// Apply translations to page
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  localStorage.setItem('if_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  
  // Apply to elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Update lang selector UI
  const sel = document.getElementById('lang-selector');
  if (sel) sel.value = lang;
}

// Build language selector HTML
function buildLangSelector() {
  const current = detectLanguage();
  const options = Object.entries(TRANSLATIONS)
    .map(([code, t]) => `<option value="${code}" ${code===current?'selected':''}>${t.flag} ${t.name}</option>`)
    .join('');
  return `<select id="lang-selector" onchange="applyLanguage(this.value)" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.7);font-family:inherit;font-size:.78rem;padding:5px 10px;border-radius:6px;cursor:pointer;outline:none">${options}</select>`;
}

// Auto-apply on page load
document.addEventListener('DOMContentLoaded', function() {
  const lang = detectLanguage();
  // Insert language selector into nav if placeholder exists
  const placeholder = document.getElementById('lang-selector-placeholder');
  if (placeholder) placeholder.innerHTML = buildLangSelector();
  applyLanguage(lang);
});

window.applyLanguage = applyLanguage;
window.buildLangSelector = buildLangSelector;
