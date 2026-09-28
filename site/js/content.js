/*
 * ALL SITE CONTENT LIVES HERE.
 * Edit the text below (English + Hebrew) - no need to touch the HTML.
 * Items under "shared" are the same in both languages.
 */

window.SITE_CONTENT = {
  shared: {
    email: "hello@example.com",
    linkedin: "https://www.linkedin.com/in/your-profile",
    // International format, digits only (972 = Israel), e.g. 972501234567
    whatsapp: "972500000000",
    cvUrl: "#", // e.g. "files/cv.pdf" once you add it to site/files/
    portrait: "img/portrait-placeholder.svg",

    // Replace with logo images later: { name: "Teva", logo: "img/clients/teva.svg" }
    clients: [
      { name: "Northwind" }, { name: "Contoso" }, { name: "Fabrikam" }, { name: "Globex" },
      { name: "Initech" }, { name: "Umbrella Health" }, { name: "Stark Learning" },
      { name: "Wayne Finance" }, { name: "Acme Corp" }, { name: "Ministry of Education" }
    ]
  },

  en: {
    name: "Your Name",
    meta: {
      title: "Your Name | Senior Instructional Designer",
      description: "Senior instructional designer creating learning experiences that connect people, knowledge and technology."
    },
    nav: { projects: "Projects", about: "About", experience: "Experience", contact: "Contact", talk: "Let's talk" },
    whatsappMessage: "Hi! I saw your portfolio and would love to talk.",
    hero: {
      eyebrow: "Senior Instructional Designer",
      title: "Designing learning experiences people actually remember.",
      subtitle: "I help organizations turn complex knowledge into clear, engaging and measurable learning - from strategy and storyboards to e-learning, workshops and digital products.",
      ctaPrimary: "See my work",
      ctaSecondary: "Get in touch"
    },
    clientsTitle: "Organizations I've worked with",
    stats: [
      { value: "15+", label: "Years of experience" },
      { value: "300+", label: "Learning projects delivered" },
      { value: "50+", label: "Organizations served" }
    ],
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
      title: "My learning journey",
      paragraphs: [
        "Placeholder text: for over 15 years I have been designing learning for organizations of every size - from government ministries to fast-growing tech companies.",
        "My approach starts with listening. I work closely with subject-matter experts and learners to understand the real performance need, then design the simplest solution that will make a measurable difference.",
        "I combine instructional design methodology (ADDIE, SAM, Action Mapping) with visual design, storytelling and emerging technology, including AI."
      ],
      quote: "The best learning solutions begin with curiosity, genuine listening and a deep understanding of the need.",
      cv: "Download CV"
    },
    experience: {
      title: "Experience",
      items: [
        { period: "2019 - Present", role: "Independent Learning Experience Designer", org: "Freelance", text: "Designing end-to-end learning solutions for enterprise, public-sector and non-profit clients." },
        { period: "2014 - 2019", role: "Lead Instructional Designer", org: "Company A", text: "Led a team of 6 designers delivering e-learning and blended programs for global clients." },
        { period: "2011 - 2014", role: "Instructional Designer", org: "Company B", text: "Developed technical training and simulations for complex systems." },
        { period: "2008 - 2011", role: "Training Coordinator", org: "Company C", text: "Managed internal training programs and the corporate LMS." }
      ]
    },
    contact: {
      title: "Found a connection? Let's talk.",
      text: "Whether you have a clear brief or just the beginning of an idea, I'd love to hear about it.",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn"
    },
    footer: { rights: "All rights reserved." },
    langToggle: "עברית",
    langToggleLabel: "Switch to Hebrew",
    menu: "Menu"
  },

  he: {
    name: "השם שלך",
    meta: {
      title: "השם שלך | מעצבת למידה בכירה",
      description: "מעצבת למידה בכירה - חוויות למידה שמחברות בין אנשים, ידע וטכנולוגיה."
    },
    nav: { projects: "פרויקטים", about: "אודות", experience: "ניסיון", contact: "צור קשר", talk: "בואו נדבר" },
    whatsappMessage: "היי! ראיתי את תיק העבודות שלך ואשמח לדבר.",
    hero: {
      eyebrow: "מעצבת למידה בכירה",
      title: "מעצבת חוויות למידה שאנשים באמת זוכרים.",
      subtitle: "אני עוזרת לארגונים להפוך ידע מורכב ללמידה ברורה, מעניינת ומדידה - מאסטרטגיה ותסריטים ועד לומדות, סדנאות ומוצרים דיגיטליים.",
      ctaPrimary: "לפרויקטים שלי",
      ctaSecondary: "בואו נדבר"
    },
    clientsTitle: "ארגונים שעבדתי איתם",
    stats: [
      { value: "+15", label: "שנות ניסיון" },
      { value: "+300", label: "פרויקטי למידה" },
      { value: "+50", label: "ארגונים" }
    ],
    projects: {
      title: "פרויקטים נבחרים",
      subtitle: "מבחר פתרונות למידה מתחומים ופורמטים שונים.",
      all: "הכל",
      items: [
        { category: "לומדות", title: "תוכנית מודעות לאבטחת מידע ל-8,000 עובדים", summary: "מודולים מבוססי תרחישים עם החלטות מסתעפות ומסלול סיום משחקי." },
        { category: "קליטת עובדים", title: "מסע קליטה משולב לצוות פיתוח גלובלי", summary: "מסע של 90 יום המשלב מיקרו-למידה, חונכות ומפגשים חיים." },
        { category: "מנהיגות", title: "מסלול פיתוח למנהלים חדשים", summary: "תוכנית של חצי שנה עם סדנאות, מעגלי קואצ'ינג וסימולציות." },
        { category: "AI ודיגיטל", title: "עוזר ידע מבוסס AI לטכנאי שטח", summary: "כלי תמיכה בביצועים בממשק שיחה, המבוסס על נהלים קיימים." },
        { category: "רגולציה", title: "עיצוב מחדש של הדרכות רגולציה לבנק ארצי", summary: "קיצור זמן הלמידה ב-40% לצד שיפור בציוני המבחנים." },
        { category: "לומדות", title: "אקדמיית ידע מוצר לצוותים מול לקוחות", summary: "ספריית מודולים ב-Storyline ו-Rise עם מרכז עזרים לעבודה." }
      ]
    },
    about: {
      title: "מסע הלמידה שלי",
      paragraphs: [
        "טקסט לדוגמה: כבר יותר מ-15 שנה אני מעצבת למידה לארגונים מכל הגדלים - ממשרדי ממשלה ועד חברות טכנולוגיה צומחות.",
        "הגישה שלי מתחילה בהקשבה. אני עובדת צמוד למומחי תוכן וללומדים כדי להבין את הצורך האמיתי, ומעצבת את הפתרון הפשוט ביותר שיוביל לשינוי מדיד.",
        "אני משלבת מתודולוגיות עיצוב הדרכה (ADDIE, SAM, Action Mapping) עם עיצוב חזותי, סיפור סיפורים וטכנולוגיות חדשות, כולל AI."
      ],
      quote: "פתרונות הלמידה הטובים ביותר מתחילים בסקרנות, בהקשבה אמיתית ובהבנה עמוקה של הצורך.",
      cv: "להורדת קורות חיים"
    },
    experience: {
      title: "ניסיון מקצועי",
      items: [
        { period: "2019 - היום", role: "מעצבת חוויות למידה עצמאית", org: "פרילנס", text: "עיצוב פתרונות למידה מקצה לקצה לארגונים, למגזר הציבורי ולעמותות." },
        { period: "2014 - 2019", role: "ראש צוות עיצוב הדרכה", org: "חברה א'", text: "הובלת צוות של 6 מעצבים בפיתוח לומדות ותוכניות משולבות ללקוחות גלובליים." },
        { period: "2011 - 2014", role: "מעצבת הדרכה", org: "חברה ב'", text: "פיתוח הדרכות טכניות וסימולציות למערכות מורכבות." },
        { period: "2008 - 2011", role: "רכזת הדרכה", org: "חברה ג'", text: "ניהול תוכניות הדרכה פנימיות ומערכת ה-LMS הארגונית." }
      ]
    },
    contact: {
      title: "מצאתם חיבור? בואו נדבר.",
      text: "בין אם יש לכם בריף מסודר או רק תחילתו של רעיון - אשמח לשמוע.",
      whatsapp: "וואטסאפ",
      email: "אימייל",
      linkedin: "לינקדאין"
    },
    footer: { rights: "כל הזכויות שמורות." },
    langToggle: "English",
    langToggleLabel: "החלפה לאנגלית",
    menu: "תפריט"
  }
};
