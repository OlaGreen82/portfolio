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
      more: "More details",
      close: "Close",
      labels: { challenge: "The challenge", solution: "My solution", role: "My role", result: "The outcome" },
      // Optional per item: image: "img/projects/xyz.jpg", link: "https://...", details, gallery
      items: [
        {
          category: "E-learning", image: "img/projects/strauss.jpg", title: "Strauss - Know your customer",
          summary: "An interactive e-learning module that teaches sales teams to recognize each customer's colour type and speak their language.",
          details: {
            challenge: "Strauss knows that customers are different types, each with their own way of communicating and making decisions. To build great relationships with customers, sales teams need to recognize the type in front of them, using the Erikson colour model, and speak to them \"in their language\" to get the best sales results.",
            solution: "An interactive e-learning module built around the four-colour model (red, blue, yellow and green). Learners get to know the types, answer a short questionnaire to discover their own type, and then head into the field. They join Ayala, a sales rep from the north, on four meetings with retail customers, each of a different colour type. In each meeting they choose how to present the month's commercial plan, and at the end they get a summary of what works with that type. The theory stays short; practice through scenarios is the core.",
            role: "End-to-end professional guidance: working with the content expert, decoding the content, shaping the learning approach, designing the module's methodological structure and writing a detailed script (graphic design was done by someone else).",
            result: "A module that gives sales teams a shared language and a simple tool to use before every meeting: recognize the customer's type, remember what matters to them and speak to them \"in their language\". The module was rolled out to the sales team."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07", "08", "09"].map(function (n) { return "img/projects/strauss/" + n + ".jpg"; })
        },
        {
          category: "E-learning", image: "img/projects/stratasys.jpg", title: "Stratasys - Travel policy",
          summary: "A short e-learning module with micro-videos that shows employees how the travel policy protects them and the company.",
          details: {
            challenge: "The company wanted employee travel to follow company policy, through approved channels and within budget. In practice there were deviations in several categories: flights, hotels, car expenses and more. The goal was to show employees how the policy serves them, and to sharpen the booking rules.",
            solution: "A short module with micro-videos woven throughout to spark interest and hold attention. It stresses that travelling by the company's rules protects both the company and the employees themselves: employees are insured and get round-the-clock service, and the company stays on budget. The module is divided into expense categories (flights, hotels, transport and more), each presenting its rules and details.",
            role: "Working with the subject-matter experts, cracking the challenge, writing the script and planning the visual design.",
            result: "A short, focused module for employees at every level of the company. It shows employees how the travel policy serves them, and sharpens the booking rules in each expense category."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07"].map(function (n) { return "img/projects/stratasys/" + n + ".jpg"; })
        },
        {
          category: "Videos", image: "img/projects/align.jpg", title: "Align - Motivation video for Ambassadors",
          summary: "A short animated video that fills ambassadors with pride and motivation to pass on knowledge about a new product in their regions.",
          details: {
            challenge: "Align launched a new patented product, and sales teams around the world needed to learn it in order to sell it. A group of ambassadors was chosen from every corner of the world. They came to a conference and then returned to their regions to pass the knowledge on to the rest of the staff. The challenge was to spark motivation and pride: to make clear they were chosen because they are the leading professionals in their field, and that they now represent their region and lead the knowledge transfer.",
            solution: "A short motivation video created in Vyond. It explains why the ambassadors were chosen, highlights the honour of the role and encourages pride.",
            role: "The video was part of a complete training program, for which I planned and delivered: working with the subject-matter experts, cracking the challenge, writing the script and planning the visual design.",
            result: "A short video that raised the chosen ambassadors' motivation to pass on the knowledge in their regions."
          },
          gallery: ["01", "02", "03", "04", "05"].map(function (n) { return "img/projects/align/" + n + ".jpg"; })
        },
        {
          category: "Videos", image: "img/projects/strauss-sales.jpg", title: "Strauss - The eight stages of a sales visit",
          summary: "A library of whiteboard videos that guides field sales reps step by step through a visit to a point of sale.",
          details: {
            challenge: "PepsiCo's global eight-stage model describes a successful visit to a point of sale and is used to train field sales reps around the world. The model divides the visit into 8 key stages to maximize the sale. The goal: expand field sales reps' professional toolkit and help them sell as well as possible.",
            solution: "A library of short whiteboard-style videos that guides field sales reps step by step through the visit to the point of sale. The videos set out the actions and tips that make the most of the reps' selling skills.",
            role: "End-to-end professional guidance: working with the content expert, decoding the content, shaping the learning strategy, designing the methodological structure and writing detailed scripts.",
            result: "A series of short videos that teaches, step by step, how to maximize sales at retail points of sale."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07", "08"].map(function (n) { return "img/projects/strauss-sales/" + n + ".jpg"; })
        }
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
        },
        {
          category: "סרטונים", image: "img/projects/align.jpg", title: "Align - סרטון מוטיבציה ל-Ambassadors",
          summary: "סרטון אנימציה קצר שמעורר בשגרירים גאווה ומוטיבציה להעביר את הידע על מוצר חדש באזורים שלהם.",
          details: {
            challenge: "Align השיקה מוצר חדש מוגן פטנט, וצוותי המכירות בעולם היו צריכים ללמוד אותו כדי למכור אותו. לצורך כך נבחרה קבוצת שגרירים מכל קצוות העולם. הם הגיעו לכנס, ובתום הכנס חזרו לאזוריהם כדי להעביר את הידע לשאר העובדים. האתגר היה לעורר בהם מוטיבציה ותחושת גאווה: להבהיר שנבחרו כי הם המקצועיים והמובילים בתחומם, ושעכשיו הם מייצגים את האזור שלהם ומובילים את העברת הידע.",
            solution: "סרטון מוטיבציה קצר, שנוצר ב-Vyond. הסרטון מסביר למה נבחרו השגרירים, מדגיש את הכבוד שבתפקיד ומעודד גאווה.",
            role: "הסרטון היה חלק ממערך הדרכה שלם, שכלל תכנון וביצוע של: עבודה מול מומחי התוכן, פיצוח האתגר, כתיבת התסריט ותכנון החלק הגרפי.",
            result: "סרטון קצר שהעלה את המוטיבציה של השגרירים שנבחרו להעביר את הידע באזורים שלהם."
          },
          gallery: ["01", "02", "03", "04", "05"].map(function (n) { return "img/projects/align/" + n + ".jpg"; })
        },
        {
          category: "סרטונים", image: "img/projects/strauss-sales.jpg", title: "שטראוס - שמונת שלבי המכירה",
          summary: "ספריית סרטוני Whiteboard שמלווה את אנשי המכירות בשטח שלב אחר שלב בביקור בנקודת המכירה.",
          details: {
            challenge: "מודל שמונת השלבים של פפסיקו העולמית מתאר ביקור מוצלח בנקודת מכירה, ומשמש להכשרת אנשי המכירות בשטח בכל רחבי העולם. המודל מחלק את הביקור ל-8 שלבים משמעותיים, לטובת מקסום המכירה. המטרה: להגדיל את ארגז הכלים המקצועי של אנשי המכירות בשטח ולעזור להם למכור בצורה הטובה ביותר.",
            solution: "ספריית סרטונים קצרים בסגנון Whiteboard, שמלווה את אנשי המכירות בשטח שלב אחר שלב לאורך הביקור בנקודת המכירה. הסרטונים מפרטים את דרכי הפעולה והטיפים שממקסמים את כישורי המכירה של אנשי המכירות בשטח.",
            role: "ליווי מקצועי מקצה לקצה: עבודה מול אשת התוכן, פענוח התוכן, גיבוש אסטרטגיית הלמידה, תכנון המבנה המתודולוגי וכתיבת תסריטים מפורטים.",
            result: "סדרת סרטונים קצרים שמלמדת שלב אחר שלב איך למקסם את המכירה בנקודות הקמעונאיות."
          },
          gallery: ["01", "02", "03", "04", "05", "06", "07", "08"].map(function (n) { return "img/projects/strauss-sales/" + n + ".jpg"; })
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
