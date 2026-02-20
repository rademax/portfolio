// i18n translations
const translations = {
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",
        "hero.greeting": "Hi, I'm",
        "hero.desc": "Full-Stack Developer specializing in Laravel & Vue.js. Building scalable web applications, REST APIs, and complex integrations.",
        "hero.cta": "Let's Talk",
        "hero.portfolio": "View Work",
        "hero.years": "Years Experience",
        "hero.projects": "Projects Delivered",
        "hero.languages": "Languages",
        "about.title": "About Me",
        "about.p1": "I'm a Full-Stack Developer based in Poland with 5+ years of experience building web applications for enterprise clients. Currently working at Semantics (a TransPerfect company), developing modular systems for translation workflow automation.",
        "about.p2": "My core stack is Laravel + Vue.js 3, but I'm comfortable with the entire web development lifecycle — from database architecture and API design to responsive frontends and CI/CD pipelines.",
        "about.p3": "I specialize in complex integrations between services, queue-based architectures (Amazon SQS), and building reliable systems that handle large-scale data processing.",
        "about.location": "Łódź, Poland",
        "about.langs": "English, Ukrainian, Polish, Russian",
        "about.status": "Available for freelance projects",
        "skills.title": "Tech Stack",
        "services.title": "Services",
        "services.web.title": "Web Applications",
        "services.web.desc": "Custom web applications built with Laravel & Vue.js. From MVPs to enterprise-grade systems with complex business logic.",
        "services.api.title": "API Development",
        "services.api.desc": "RESTful API design and development. Third-party service integrations, webhook handlers, queue-based architectures.",
        "services.integration.title": "System Integration",
        "services.integration.desc": "Connecting multiple services into a unified workflow. File processing pipelines, data synchronization, automated delivery systems.",
        "services.legacy.title": "Legacy Modernization",
        "services.legacy.desc": "Upgrading existing PHP applications to modern Laravel architecture. Code refactoring, performance optimization, security hardening.",
        "services.dashboard.title": "Admin Dashboards",
        "services.dashboard.desc": "Feature-rich admin panels with Vue.js. Real-time data, charts, user management, role-based access control.",
        "services.automation.title": "Process Automation",
        "services.automation.desc": "Automating repetitive business processes. Scheduled tasks, notification systems, deadline monitoring, report generation.",
        "portfolio.title": "Portfolio",
        "portfolio.subtitle": "Selected projects I've worked on",
        "portfolio.p1.desc": "Multi-service integration platform for automated translation file delivery. Handles file processing between 4 services with queue-based architecture.",
        "portfolio.p2.desc": "Automated synchronization system for translation memories. Users configure groups of up to 100 TMs with rules and scheduled sync intervals.",
        "portfolio.p3.desc": "Automated statistics calculation for translation projects. Processes source & target language files, counts words/segments, delivers reports via email.",
        "portfolio.p4.title": "Your Project?",
        "portfolio.p4.desc": "Have an idea? Let's build it together. I'm always excited about new challenges and interesting projects.",
        "portfolio.p4.cta": "Get in Touch",
        "contact.title": "Let's Work Together",
        "contact.subtitle": "Have a project in mind? Drop me a message.",
        "contact.name": "Name",
        "contact.message": "Tell me about your project...",
        "contact.send": "Send Message",
        "footer.built": "Built with",
        "footer.and": "&",
        "footer.spirit": "spirit",
        "typing": ["Full-Stack Laravel Developer", "Vue.js 3 Specialist", "API Architect", "Problem Solver"]
    },
    pl: {
        "nav.about": "O mnie",
        "nav.skills": "Umiejętności",
        "nav.services": "Usługi",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Kontakt",
        "hero.greeting": "Cześć, jestem",
        "hero.desc": "Full-Stack Developer specjalizujący się w Laravel i Vue.js. Buduję skalowalne aplikacje webowe, REST API i złożone integracje.",
        "hero.cta": "Porozmawiajmy",
        "hero.portfolio": "Zobacz prace",
        "hero.years": "Lat doświadczenia",
        "hero.projects": "Zrealizowanych projektów",
        "hero.languages": "Języki",
        "about.title": "O mnie",
        "about.p1": "Jestem Full-Stack Developerem mieszkającym w Polsce z ponad 5-letnim doświadczeniem w budowaniu aplikacji webowych dla klientów korporacyjnych. Obecnie pracuję w Semantics (firma TransPerfect), tworząc modułowe systemy do automatyzacji procesów tłumaczeniowych.",
        "about.p2": "Mój główny stack to Laravel + Vue.js 3, ale czuję się komfortowo z całym cyklem tworzenia aplikacji — od architektury bazy danych i projektowania API po responsywne frontendy i pipeline'y CI/CD.",
        "about.p3": "Specjalizuję się w złożonych integracjach między serwisami, architekturach opartych na kolejkach (Amazon SQS) i budowaniu niezawodnych systemów przetwarzających duże ilości danych.",
        "about.location": "Łódź, Polska",
        "about.langs": "Angielski, Ukraiński, Polski, Rosyjski",
        "about.status": "Dostępny dla projektów freelance",
        "skills.title": "Stack technologiczny",
        "services.title": "Usługi",
        "services.web.title": "Aplikacje webowe",
        "services.web.desc": "Dedykowane aplikacje webowe w Laravel i Vue.js. Od MVP po systemy klasy enterprise ze złożoną logiką biznesową.",
        "services.api.title": "Rozwój API",
        "services.api.desc": "Projektowanie i budowa RESTful API. Integracje z zewnętrznymi serwisami, obsługa webhooków, architektury kolejkowe.",
        "services.integration.title": "Integracja systemów",
        "services.integration.desc": "Łączenie wielu serwisów w jeden workflow. Pipeline'y przetwarzania plików, synchronizacja danych, automatyczne systemy dostarczania.",
        "services.legacy.title": "Modernizacja legacy",
        "services.legacy.desc": "Aktualizacja istniejących aplikacji PHP do nowoczesnej architektury Laravel. Refaktoryzacja kodu, optymalizacja wydajności.",
        "services.dashboard.title": "Panele administracyjne",
        "services.dashboard.desc": "Rozbudowane panele admina w Vue.js. Dane w czasie rzeczywistym, wykresy, zarządzanie użytkownikami, RBAC.",
        "services.automation.title": "Automatyzacja procesów",
        "services.automation.desc": "Automatyzacja powtarzalnych procesów biznesowych. Zadania zaplanowane, systemy powiadomień, monitoring terminów.",
        "portfolio.title": "Portfolio",
        "portfolio.subtitle": "Wybrane projekty, nad którymi pracowałem",
        "portfolio.p1.desc": "Platforma integracji wielu serwisów do automatycznej dostawy plików tłumaczeniowych. Obsługuje przetwarzanie plików między 4 serwisami z architekturą kolejkową.",
        "portfolio.p2.desc": "Automatyczny system synchronizacji pamięci tłumaczeniowych. Użytkownicy konfigurują grupy do 100 TM z regułami i zaplanowanymi interwałami synchronizacji.",
        "portfolio.p3.desc": "Automatyczne obliczanie statystyk dla projektów tłumaczeniowych. Przetwarza pliki źródłowe i docelowe, liczy słowa/segmenty, dostarcza raporty mailem.",
        "portfolio.p4.title": "Twój projekt?",
        "portfolio.p4.desc": "Masz pomysł? Zbudujmy to razem. Zawsze chętnie podejmuję nowe wyzwania.",
        "portfolio.p4.cta": "Skontaktuj się",
        "contact.title": "Współpracujmy",
        "contact.subtitle": "Masz projekt? Napisz do mnie.",
        "contact.name": "Imię",
        "contact.message": "Opowiedz o swoim projekcie...",
        "contact.send": "Wyślij wiadomość",
        "footer.built": "Zbudowane z",
        "footer.and": "i",
        "footer.spirit": "duchem",
        "typing": ["Full-Stack Laravel Developer", "Specjalista Vue.js 3", "Architekt API", "Rozwiązuję problemy"]
    },
    ua: {
        "nav.about": "Про мене",
        "nav.skills": "Навички",
        "nav.services": "Послуги",
        "nav.portfolio": "Портфоліо",
        "nav.contact": "Контакт",
        "hero.greeting": "Привіт, я",
        "hero.desc": "Full-Stack розробник, що спеціалізується на Laravel та Vue.js. Будую масштабовані веб-додатки, REST API та складні інтеграції.",
        "hero.cta": "Зв'язатись",
        "hero.portfolio": "Мої роботи",
        "hero.years": "Років досвіду",
        "hero.projects": "Виконаних проектів",
        "hero.languages": "Мови",
        "about.title": "Про мене",
        "about.p1": "Я Full-Stack розробник, що живе в Польщі, з 5+ роками досвіду створення веб-додатків для корпоративних клієнтів. Зараз працюю в Semantics (компанія TransPerfect), розробляючи модульні системи для автоматизації перекладацьких процесів.",
        "about.p2": "Мій основний стек — Laravel + Vue.js 3, але я впевнено працюю з усім циклом веб-розробки — від архітектури БД та проєктування API до адаптивних фронтендів та CI/CD.",
        "about.p3": "Спеціалізуюсь на складних інтеграціях між сервісами, архітектурах на базі черг (Amazon SQS) та побудові надійних систем обробки великих обсягів даних.",
        "about.location": "Лодзь, Польща",
        "about.langs": "Англійська, Українська, Польська, Російська",
        "about.status": "Доступний для фріланс проєктів",
        "skills.title": "Технічний стек",
        "services.title": "Послуги",
        "services.web.title": "Веб-додатки",
        "services.web.desc": "Кастомні веб-додатки на Laravel та Vue.js. Від MVP до enterprise-систем зі складною бізнес-логікою.",
        "services.api.title": "Розробка API",
        "services.api.desc": "Проєктування та розробка RESTful API. Інтеграції зі сторонніми сервісами, обробка вебхуків, черги.",
        "services.integration.title": "Інтеграція систем",
        "services.integration.desc": "Об'єднання кількох сервісів в єдиний workflow. Пайплайни обробки файлів, синхронізація даних, автоматична доставка.",
        "services.legacy.title": "Модернізація legacy",
        "services.legacy.desc": "Оновлення існуючих PHP-додатків до сучасної архітектури Laravel. Рефакторинг, оптимізація, безпека.",
        "services.dashboard.title": "Адмін-панелі",
        "services.dashboard.desc": "Функціональні адмін-панелі на Vue.js. Дані в реальному часі, графіки, управління користувачами, RBAC.",
        "services.automation.title": "Автоматизація процесів",
        "services.automation.desc": "Автоматизація повторюваних бізнес-процесів. Заплановані задачі, сповіщення, моніторинг дедлайнів, звіти.",
        "portfolio.title": "Портфоліо",
        "portfolio.subtitle": "Вибрані проєкти, над якими я працював",
        "portfolio.p1.desc": "Платформа інтеграції сервісів для автоматичної доставки файлів перекладу. Обробка файлів між 4 сервісами з архітектурою черг.",
        "portfolio.p2.desc": "Автоматична система синхронізації пам'ятей перекладу. Конфігурація груп до 100 TM з правилами та інтервалами синхронізації.",
        "portfolio.p3.desc": "Автоматичний розрахунок статистики для проєктів перекладу. Обробка файлів, підрахунок слів/сегментів, доставка звітів на email.",
        "portfolio.p4.title": "Ваш проєкт?",
        "portfolio.p4.desc": "Маєте ідею? Давайте побудуємо разом. Я завжди відкритий до нових викликів.",
        "portfolio.p4.cta": "Написати",
        "contact.title": "Працюймо разом",
        "contact.subtitle": "Маєте проєкт? Напишіть мені.",
        "contact.name": "Ім'я",
        "contact.message": "Розкажіть про ваш проєкт...",
        "contact.send": "Надіслати",
        "footer.built": "Зроблено з",
        "footer.and": "та",
        "footer.spirit": "духом",
        "typing": ["Full-Stack Laravel розробник", "Спеціаліст Vue.js 3", "Архітектор API", "Вирішую проблеми"]
    }
};

function setLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('portfolio-lang', lang);

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Restart typing animation with new language
    if (window.typingAnimation) {
        window.typingAnimation.updateTexts(translations[lang].typing);
    }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('portfolio-lang') || 'en';
    setLanguage(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
});
