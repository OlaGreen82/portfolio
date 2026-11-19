/*
 * ALL SITE CONTENT LIVES HERE.
 * Edit the text below (English + Hebrew) - no need to touch the HTML.
 * Items under "shared" are the same in both languages.
 * In the headline (hero.title), words wrapped in *asterisks* get the
 * highlight colour.
 */

window.SITE_CONTENT = {
  shared: {
    email: "olaber@gmail.com",
    linkedin: "https://www.linkedin.com/in/ola-green/",
    // International format, digits only (972 = Israel), e.g. 972501234567
    whatsapp: "972545794047",
    cvUrl: "#", // e.g. "files/cv.pdf" once you add it to site/files/
    portrait: "img/portrait.webp",

    clients: [
      { name: "בנק הפועלים", logo: "img/clients/bank-hapoalim.svg" },
      { name: "שטראוס", logo: "img/clients/strauss.jpg" },
      { name: "ArtMedical", logo: "img/clients/artmedical.svg" },
      { name: "בנק דיסקונט", logo: "img/clients/discount-bank.svg" },
      { name: "הבנק הבינלאומי", logo: "img/clients/fibi.png" },
      { name: "Campus IL", logo: "img/clients/campus-il.svg" },
      { name: "טבע", logo: "img/clients/teva.svg" },
      { name: "SodaStream", logo: "img/clients/sodastream.png" },
      { name: "Align", logo: "img/clients/align.svg" },
      { name: "Stratasys", logo: "img/clients/stratasys.png" },
      { name: "Elbit", logo: "img/clients/elbit.svg" },
      { name: "Delta", logo: "img/clients/delta.svg" },
      { name: "Fix", logo: "img/clients/fix.png" },
      { name: "סבון של פעם", logo: "img/clients/sabon.svg" },
      { name: "Carolina Lemke", logo: "img/clients/carolina-lemke.png" },
      { name: "New Deli", logo: "img/clients/newdeli.png" },
      { name: "Urbanica", logo: "img/clients/urbanica.jpg" }
    ]
  },

  en: {
    name: "Ola Green",
    meta: {
      title: "Personal Branding",
      description: "Senior instructional designer creating learning experiences that connect people, knowledge and technology."
    },
    nav: { projects: "Projects", about: "About", contact: "Contact", talk: "Let's talk" },
    whatsappMessage: "Hi! I saw your portfolio and would love to talk.",
    hero: {
      eyebrow: "Learning Engineer & AI Builder",
      title: "Designing learning experiences *people actually remember*.",
      subtitle: "I help organizations turn knowledge into learning that delivers real business impact, from needs analysis and learning strategy to e-learning, workshops and digital products.",
      ctaPrimary: "See my work",
      ctaSecondary: "Get in touch"
    },
    clientsTitle: "Organizations I've worked with",
    projects: {
      title: "Selected projects",
      subtitle: "A sample of learning solutions across industries and formats.",
      all: "All",
      // Optional per item: image: "img/projects/xyz.jpg", link: "https://..."
      items: [
        { category: "E-learning", title: "Cyber-security awareness program for 8,000 employees", summary: "Scenario-based modules with branching decisions and a gamified completion path." },
        { category: "Onboarding", title: "Blended onboarding journey for a global R&D team", summary: "90-day journey combining micro-learning, mentoring and live sessions." },
        { category: "Leadership", title: "First-time manager development track", summary: "Six-month program with workshops, peer coaching circles and practice simulations." },
        { category: "AI & Digital", title: "AI-powered knowledge assistant for field technicians", summary: "Conversational performance-support tool built on existing procedures." },
        { category: "Compliance", title: "Regulatory training redesign for a national bank", summary: "Reduced seat-time by 40% while increasing assessment scores." },
        { category: "E-learning", title: "Product-knowledge academy for customer-facing teams", summary: "Modular Storyline & Rise library with a searchable job-aid hub." }
      ]
    },
    about: {
      paragraphs: [
        "I started as an R&D engineer, taking hardware from first sketch to mass production. Today I turn complex material into impactful and measurable learning across industries as varied as high-tech, finance, medical devices, retail and education.",
        "I always start by asking the right questions, and I listen until I understand what the learners really need. I build real partnerships with my clients, ones that last well beyond a single project.",
        "I'm a lifelong learner, and I create my own AI-powered workflows that allow me to work faster and more efficiently."
      ],
      cv: "Download CV"
    },
    contact: {
      title: "Got all the way down here? Let's talk.",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn"
    },
    langToggle: "עברית",
    langToggleLabel: "Switch to Hebrew",
    menu: "Menu"
  },

  he: {
    name: "אולה גרין",
    meta: {
      title: "מיתוג אישי",
      description: "מעצבת למידה בכירה - חוויות למידה שמחברות בין אנשים, ידע וטכנולוגיה."
    },
    nav: { projects: "פרויקטים", about: "אודות", contact: "צור קשר", talk: "בואו נדבר" },
    whatsappMessage: "היי! ראיתי את תיק העבודות שלך ואשמח לדבר.",
    hero: {
      eyebrow: "מהנדסת למידה ובילדרית AI",
      title: "מעצבת חוויות למידה *שאנשים באמת זוכרים*.",
      subtitle: "אני עוזרת לארגונים להפוך ידע ללמידה שבאמת עושה את ההבדל בתוצאות העסקיות - מפיצוח ותכנון ועד לומדות, סדנאות ומוצרים דיגיטליים.",
      ctaPrimary: "לפרויקטים שלי",
      ctaSecondary: "בואו נדבר"
    },
    clientsTitle: "ארגונים שעבדתי איתם",
    projects: {
      title: "פרויקטים נבחרים",
      subtitle: "מבחר פתרונות למידה מתחומים ופורמטים שונים.",
      all: "הכל",
      more: "לפרטים נוספים",
      close: "סגירה",
      labels: { challenge: "האתגר", solution: "הפתרון שלי", role: "התפקיד שלי", result: "מה קיבלנו" },
      items: [
        {
          category: "לומדות", image: "img/projects/strauss.jpg", title: "שטראוס - הכר את הלקוח",
          summary: "לומדה אינטראקטיבית שמלמדת צוותי מכירות לזהות את טיפוס הצבע של כל לקוח ולדבר איתו בשפה שלו.",
          details: {
            challenge: "בשטראוס יודעים שלקוחות הם טיפוסים שונים, ולכל אחד דרך משלו לתקשר ולקבל החלטות. כדי לבנות קשר מצוין עם הלקוחות, צוותי המכירות צריכים לזהות את הטיפוס שעומד מולם, לפי מודל הצבעים של אריקסון, ולדבר איתם \"בשפה שלהם\", כדי להשיג את תוצאות המכירה הטובות ביותר.",
            solution: "לומדה אינטראקטיבית שבנויה סביב מודל ארבעת הצבעים (אדום, כחול, צהוב וירוק). הלומדים מכירים את הטיפוסים, עונים על שאלון קצר כדי לגלות מה הטיפוס שלהם, ואז יוצאים לשטח. הם מלווים את איילה, סוכנת מכירות מהצפון, בארבע פגישות עם לקוחות קמעונאיים, כל אחת מטיפוס צבע אחר. בכל פגישה הם בוחרים איך להציג את התכנית המסחרית של החודש, ובסיומה מקבלים סיכום של מה עובד מול הטיפוס הזה. התיאוריה נשארת קצרה, והתרגול בתרחישים הוא העיקר.",
            role: "ליווי מקצועי מקצה לקצה: עבודה מול אשת התוכן, פענוח התוכן, גיבוש גישת הלמידה, תכנון המבנה המתודולוגי של הלומדה וכתיבת תסריט מפורט (העיצוב הגרפי בוצע על ידי גורם אחר).",
            result: "לומדה שנותנת לצוותי המכירות שפה משותפת וכלי פשוט לשימוש לפני כל פגישה: לזהות את טיפוס הלקוחות, להיזכר במה חשוב להם ולדבר איתם \"בשפה שלהם\". הלומדה הוטמעה בקרב צוות המכירות."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07", "08", "09"].map(function (n) { return "img/projects/strauss/" + n + ".jpg"; })
        },
        {
          category: "לומדות", image: "img/projects/stratasys.jpg", title: "סטרטסיס - מדיניות נסיעות",
          summary: "לומדה קצרה עם מיקרו-סרטונים שמראה לעובדים איך מדיניות הנסיעות שומרת עליהם ועל החברה.",
          details: {
            challenge: "החברה רצתה להבטיח שהנסיעות של העובדים ייעשו לפי מדיניות החברה, בערוצים המאושרים ובמסגרת התקציב. בפועל נרשמו חריגות בכמה קטגוריות: טיסות, מלונות, הוצאות רכב ועוד. המטרה הייתה להראות לעובדים איך המדיניות משרתת אותם, ולחדד את כללי ההזמנה.",
            solution: "לומדה קצרה שמשלבת לאורכה מיקרו-סרטונים כדי לעורר עניין ולשמור על תשומת הלב. הלומדה מדגישה שנסיעה לפי כללי החברה שומרת גם על החברה וגם על העובדים עצמם: העובדים מבוטחים וזוכים לשירות סביב השעון, והחברה עומדת בתקציב הדרוש. הלומדה מחולקת לקטגוריות הוצאה (טיסות, מלונות, תחבורה ועוד), ובכל אחת מהן מוצגים הכללים והפירוט שלה.",
            role: "עבודה מול מומחי התוכן, פיצוח האתגר, כתיבת התסריט ותכנון החלק הגרפי.",
            result: "לומדה קצרה וממוקדת לעובדים בדרגים שונים בחברה. הלומדה מראה לעובדים איך מדיניות הנסיעות משרתת אותם, ומחדדת את כללי ההזמנה בכל קטגוריית הוצאה."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07"].map(function (n) { return "img/projects/stratasys/" + n + ".jpg"; })
        }
      ]
    },
    about: {
      paragraphs: [
        "את הדרך המקצועית שלי התחלתי כמהנדסת מו״פ, וליוויתי יצירת רכיבי חומרה מהסקיצה הראשונה ועד לייצור. היום אני הופכת ידע מורכב לחומרי למידה שעושים שינוי אמיתי ומדיד, בתעשיות מגוונות כמו היי-טק, פיננסים, מכשור רפואי, קמעונאות וחינוך.",
        "כל פרויקט מתחיל אצלי בשאלות הנכונות, בהקשבה אמיתית ובהכרת קהל היעד, עד שאני מבינה מה הלומדים באמת צריכים. אני בונה עם הלקוחות שלי שותפות אמיתית, כזו שממשיכה מפרויקט לפרויקט.",
        "אני לומדת כל הזמן, ומפתחת לעצמי תהליכי עבודה מבוססי AI שמאפשרים לי לעבוד מהר ויעיל יותר."
      ],
      cv: "להורדת קורות חיים"
    },
    contact: {
      title: "הגעתם עד לכאן? בואו נדבר.",
      whatsapp: "וואטסאפ",
      email: "אימייל",
      linkedin: "לינקדאין"
    },
    langToggle: "English",
    langToggleLabel: "החלפה לאנגלית",
    menu: "תפריט"
  }
};
