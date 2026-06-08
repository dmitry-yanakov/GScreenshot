const translations = {
    en: {
        "hero-title": 'Privacy -<br><span class="text-gradient">Owned by You.</span>',
        "hero-desc": "Capture, edit, and store screenshots securely on your Google Drive. Direct upload with no middlemen.",
        "hero-trouble": "Having trouble installing? ",
        "hero-guide": "View launch guide",
        "sec-title": "Why is it safe?",
        "sec-desc": "Your screenshot is sent directly to your personal Google Drive storage",
        "sec-pc": "Your PC",
        "sec-direct": "Direct API Upload",
        "sec-first-info": "No intermediaries",
        "sec-first-desc": "Data never touches our servers. Files are sent via official API straight to your Drive",
        "sec-second-info": "Full control",
        "sec-second-desc": "You are the sole owner of your files. Manage access rights and delete shots at any time.",
        "tools-title": "Toolkit",
        "tools-name-pencil": "Pencil",
        "tools-desc-pencil": "Freehand drawing. Perfect for quick notes or highlighting custom areas.",
        "tools-name-arrow": "Arrow",
        "tools-desc-arrow": "Point to what matters. Smart arrows that look professional and sharp.",
        "tools-name-blur": "Blur",
        "tools-desc-blur": "Protect privacy. Mask passwords, faces, or sensitive data in one click.",
        "tools-name-highlight": "Highlight",
        "tools-desc-highlight": "Focus attention. Marker effect to emphasize important text or buttons.",
        "tools-name-text": "Text",
        "tools-desc-text": "Add explanations. Type text directly on your screenshot.",
        "tools-name-underline": "Underline",
        "tools-desc-underline": "Underline the essence. Quickly highlight lines of text without extra noise.",
        "tools-name-rectangle": "Rectangle",
        "tools-desc-rectangle": "Frame the exact part of a screenshot that needs attention.",
        "info-title": "Information",
        "info-desc": "GScreenshot is a non-commercial project, not a product of a large corporation with a massive budget.<br> We choose the path of transparency, openly sharing the technical nuances of software development created independently from major platforms.",
        "info-ms-authenticode-title": "Microsoft Authenticode",
        "info-ms-authenticode-desc": "A digital signature for Windows that confirms the publisher. Its absence simply means the project is non-commercial and does not pay for annual Microsoft certificates (~$400/year).",
        "info-ms-official-description": "Official Description",
        "info-apple-notarization-title": "Apple Notarization",
        "info-apple-notarization-desc": "Apple's security procedure where the Gatekeeper system automatically flags third-party apps as \"unverified\" even if they are safe. Obtaining a Gatekeeper certificate costs (~$99/year).",
        "info-apple-official-description": "Official Description",
        "setup-title": "How to Launch the App",
        "setup-desc": "A quick guide to navigating system security restrictions",
        "setup-win-first": "Click <strong>\"More info\"</strong> in the security window.",
        "setup-win-second": "Click the <strong>\"Run anyway\"</strong> button that appears.",
        "setup-win-third": "The app will launch and be added to your system's whitelist.",
        "setup-mac-first": "Copy the command below into the Terminal:",
        "setup-mac-second": "Drag the <strong>GScreenshot</strong> icon into the Terminal window.",
        "setup-mac-third": "Press <strong>Enter</strong> and provide your password if prompted.",
        "join-title": "Join our community",
        "join-desc": "Become part of something bigger. Help us improve GScreenshot by reporting bugs, <br> suggesting new features, or simply staying updated through our community channel.",
        "join-stay-in-touch": "Stay in touch",
        "join-telegram-channel": "Telegram Channel",
        "footer-slogan": "Your drive, your rules.",
        "footer-privacy-policy": "Privacy Policy",
        // Privacy Policy Page Translations
        "privacy-policy-title": "Privacy Policy",
        "privacy-policy-last-updated": "Last Updated: June 1, 2026",
        "privacy-policy-intro": "This Privacy Policy governs the processing, storage, and protection of user data within the GScreenshot application (hereinafter referred to as the \"Application\"). Our highest priority is to ensure the security of your information and to provide an architecture that operates directly, without the use of intermediary servers.",
        "pp-section1-title": "1. Collection and Processing of Personal Data",
        "pp-section1-p1": "The Application is designed as a local automation tool. GScreenshot does not collect, store, process, or transfer your personal data, images, metadata, or screenshot history to any third-party servers or the developer's servers.",
        "pp-section1-p2": "All processes related to creating, cropping, and editing screenshots are performed exclusively locally within the volatile memory (RAM) and isolated environment of your device.",
        "pp-section1-p3": "Images are placed into your device's system clipboard or sent to cloud storage strictly upon your explicit command.",
        "pp-section2-title": "2. Integration with Google Drive Service",
        "pp-section2-p1": "The Application provides functionality for uploading screenshots to Google Drive cloud storage.",
        "pp-section2-li1": "<strong>Direct Connection (No Middlemen):</strong> The connection of your Google Drive account and the subsequent transfer of files are performed directly between the Application on your device and the official Google API servers. No intermediary servers or third-party infrastructures are involved in this process, completely eliminating the possibility of interception or viewing of your data by third parties.",
        "pp-section2-li2": "<strong>Background Processes:</strong> The file transfer process is optimized and executed in the background, without interfering with the user's regular workflow.",
        "pp-section2-li3": "<strong>Scope of Access:</strong> The Application requests access to your Google Drive solely within the scope of permissions necessary to create the dedicated Application folder and save your created screenshots into it.",
        "pp-section3-title": "3. Requested System Permissions",
        "pp-section3-p1": "To ensure full functionality, the Application requests access to the following system resources of your device:",
        "pp-section3-li1": "<strong>Screen Recording:</strong> This permission is used exclusively at the moment you initiate a screenshot capture to grab the visible area (including system notifications, menu elements, tooltips, and setups with multiple monitors). The Application does not perform background recording or hidden monitoring of your screen.",
        "pp-section3-li2": "<strong>Auto-Launch:</strong> An optional feature that can be enabled by the user in the Application settings to automatically start the utility upon operating system boot.",
        "pp-section3-li3": "<strong>Internet Access:</strong> Required solely to ensure direct interaction with Google API servers (file uploads) and for the operation of the Auto-Update module (checking for new versions and downloading them in the background).",
        "pp-section4-title": "4. Storage of Configuration Data",
        "pp-section4-p1": "All user preferences, including custom hotkey combinations, toolbar parameters, and interface configurations, are saved strictly locally on the user's device. These configuration data are isolated and are not synchronized with external servers.",
        "pp-section5-title": "5. Links to Third-Party Resources",
        "pp-section5-p1": "The \"About\" section contains an informational link to the official Application community in the Telegram messenger. This Privacy Policy does not apply to third-party services. Interaction with the Telegram platform is governed by its own policies and regulations.",
        "pp-section6-title": "6. Changes to This Policy",
        "pp-section6-p1": "The developer reserves the right to make changes to this Privacy Policy to reflect updates to the Application's functionality or changes in the requirements of distribution platforms. The current version of the document is always accessible within the Application interface or on its official resources.",
        "pp-section7-title": "7. Feedback",
        "pp-section7-p1": "For any questions regarding data security and the functioning of the Application, you may contact the developer through the official communication channels specified within the Application.",
        "pp-download-title": "GScreenshot Privacy Policy",
        "pp-download-desc": "You can download the full version of this document for offline review.",
        "pp-download-button": "Download Document"
    },
    uk: {
        "hero-title": 'Приватність -<br><span class="text-gradient">Належить Вам.</span>',
        "hero-desc": "Робіть знімки, редагуйте та зберігайте їх у безпеці на своєму Google Drive. Пряме завантаження без посередників.",
        "hero-trouble": "Проблеми з встановленням? ",
        "hero-guide": "Інструкція із запуску",
        "sec-title": "Чому це безпечно?",
        "sec-desc": "Ваш скріншот надсилається напряму у ваше особисте сховище Google Drive",
        "sec-pc": "Ваш ПК",
        "sec-direct": "Пряме завантаження через API", // Already present
        "sec-first-info": "Жодних посередників",
        "sec-first-desc": "Дані не потрапляють на наші сервери. Файл надсилається через офіційний API одразу на ваш Диск",
        "sec-second-info": "Повний контроль",
        "sec-second-desc": "Ви — єдиний власник файлів. Керуйте правами доступу та видаляйте знімки в будь-який момент.",
        "tools-title": "Набір інструментів",
        "tools-name-pencil": "Олівець",
        "tools-desc-pencil": "Малюйте від руки. Ідеально для швидких нотаток або виділення довільних областей.",
        "tools-name-arrow": "Стрілка",
        "tools-desc-arrow": "Вказуйте на важливе. Розумні стрілки, що виглядають професійно та чітко.",
        "tools-name-blur": "Розмиття",
        "tools-desc-blur": "Приховуйте конфіденційність. Замазуйте паролі, обличчя або особисті дані в один клік.",
        "tools-name-highlight": "Виділення",
        "tools-desc-highlight": "Акцентуйте увагу. Ефект маркера для виділення важливого тексту або кнопок.",
        "tools-name-text": "Текст",
        "tools-desc-text": "Додавайте пояснення. Друкуйте текст прямо на скріншоті.",
        "tools-name-underline": "Підкреслення",
        "tools-desc-underline": "Підкреслюйте суть. Швидке виділення рядків тексту без зайвого шуму.",
        "tools-name-rectangle": "Прямокутник",
        "tools-desc-rectangle": "Виділяйте частину скріншоту, яка потребує уваги.",
        "info-title": "Додаткова інформація",
        "info-desc": "GScreenshot — це некомерційний проект, а не продукт корпорації з величезним бюджетом.<br> Ми обираємо шлях прозорості, тому відкрито ділимося технічними нюансами розробки ПЗ, створеного без участі великих платформ.",
        "info-ms-authenticode-title": "Microsoft Authenticode",
        "info-ms-authenticode-desc": "Цифровий підпис для Windows, що підтверджує видавця. Його відсутність означає лише те, що проект є некомерційним і не оплачує щорічні сертифікати Microsoft (~$400/рік).",
        "info-ms-official-description": "Офіційний опис",
        "info-apple-notarization-title": "Apple Notarization",
        "info-apple-notarization-desc": "Процедура перевірки безпеки від Apple. Без платної підписки (~$99/рік) система Gatekeeper автоматично позначає будь-які незалежні програми як «неперевірені», навіть якщо вони безпечні.",
        "info-apple-official-description": "Офіційний опис",
        "setup-title": "Як запустити програму",
        "setup-desc": "Короткий посібник з обходу системних обмежень",
        "setup-win-first": "Натисніть <strong>«Докладніше»</strong> у вікні захисту.",
        "setup-win-second": "Натисніть кнопку <strong>«Виконати в будь-якому разі»</strong>, що з'явилася.",
        "setup-win-third": "Програма запуститься і буде додана до білого списку вашої системи.",
        "setup-mac-first": "Скопіюйте команду нижче в Термінал:",
        "setup-mac-second": "Перетягніть іконку <strong>GScreenshot</strong> у вікно Терміналу.",
        "setup-mac-third": "Натисніть <strong>Enter</strong> і введіть пароль адміністратора, якщо буде запит.",
        "join-title": "Приєднуйтесь до спільноти",
        "join-desc": "Станьте частиною чогось більшого. Допоможіть нам покращити GScreenshot, повідомляючи про баги, <br> пропонуючи нові функції або просто слідкуючи за новинами у нашому каналі.",
        "join-stay-in-touch": "Залишайтеся на зв'язку",
        "join-telegram-channel": "Telegram канал",
        "footer-slogan": "Ваш диск, ваші правила.",
        "footer-privacy-policy": "Політика конфіденційності",
        // Privacy Policy Page Translations
        "privacy-policy-title": "Політика конфіденційності",
        "privacy-policy-last-updated": "Останнє оновлення: 1 червня 2026",
        "privacy-policy-intro": "Ця Політика конфіденційності регулює обробку, зберігання та захист даних користувачів у програмі GScreenshot (далі – «Програма»). Нашим найвищим пріоритетом є забезпечення безпеки вашої інформації та надання архітектури, яка працює безпосередньо, без використання проміжних серверів.",
        "pp-section1-title": "1. Збір та обробка персональних даних",
        "pp-section1-p1": "Програма розроблена як локальний інструмент автоматизації. GScreenshot не збирає, не зберігає, не обробляє та не передає ваші персональні дані, зображення, метадані або історію скріншотів на будь-які сторонні сервери або сервери розробника.",
        "pp-section1-p2": "Усі процеси, пов'язані зі створенням, обрізанням та редагуванням скріншотів, виконуються виключно локально в межах енергозалежної пам'яті (RAM) та ізольованого середовища вашого пристрою.",
        "pp-section1-p3": "Зображення розміщуються в системному буфері обміну вашого пристрою або надсилаються до хмарного сховища виключно за вашою явною командою.",
        "pp-section2-title": "2. Інтеграція зі службою Google Drive",
        "pp-section2-p1": "Програма надає функціональність для завантаження скріншотів у хмарне сховище Google Drive.",
        "pp-section2-li1": "<strong>Пряме підключення (без посередників):</strong> Підключення вашого облікового запису Google Drive та подальша передача файлів здійснюються безпосередньо між Програмою на вашому пристрої та офіційними серверами Google API. Жодні проміжні сервери або сторонні інфраструктури не залучаються до цього процесу, що повністю виключає можливість перехоплення або перегляду ваших даних третіми сторонами.",
        "pp-section2-li2": "<strong>Фонові процеси:</strong> Процес передачі файлів оптимізований та виконується у фоновому режимі, не заважаючи звичайному робочому процесу користувача.",
        "pp-section2-li3": "<strong>Обсяг доступу:</strong> Програма запитує доступ до вашого Google Drive виключно в межах дозволів, необхідних для створення спеціальної папки Програми та збереження в ній створених скріншотів.",
        "pp-section3-title": "3. Запитувані системні дозволи",
        "pp-section3-p1": "Для забезпечення повної функціональності Програма запитує доступ до наступних системних ресурсів вашого пристрою:",
        "pp-section3-li1": "<strong>Запис екрану:</strong> Цей дозвіл використовується виключно в момент ініціювання захоплення скріншота для зйомки видимої області (включаючи системні сповіщення, елементи меню, підказки та налаштування з кількома моніторами). Програма не виконує фоновий запис або прихований моніторинг вашого екрану.",
        "pp-section3-li2": "<strong>Автозапуск:</strong> Додаткова функція, яку користувач може увімкнути в налаштуваннях Програми для автоматичного запуску утиліти при завантаженні операційної системи.",
        "pp-section3-li3": "<strong>Доступ до Інтернету:</strong> Потрібен виключно для забезпечення прямої взаємодії з серверами Google API (завантаження файлів) та для роботи модуля автоматичного оновлення (перевірка наявності нових версій та їх завантаження у фоновому режимі).",
        "pp-section4-title": "4. Зберігання даних конфігурації",
        "pp-section4-p1": "Усі налаштування користувача, включаючи власні комбінації гарячих клавіш, параметри панелі інструментів та конфігурації інтерфейсу, зберігаються виключно локально на пристрої користувача. Ці дані конфігурації ізольовані та не синхронізуються із зовнішніми серверами.",
        "pp-section5-title": "5. Посилання на сторонні ресурси",
        "pp-section5-p1": "Розділ «Про програму» містить інформаційне посилання на офіційну спільноту Програми в месенджері Telegram. Ця Політика конфіденційності не поширюється на сторонні сервіси. Взаємодія з платформою Telegram регулюється її власними політиками та правилами.",
        "pp-section6-title": "6. Зміни до цієї Політики",
        "pp-section6-p1": "Розробник залишає за собою право вносити зміни до цієї Політики конфіденційності, щоб відобразити оновлення функціональності Програми або зміни в вимогах платформ розповсюдження. Поточна версія документа завжди доступна в інтерфейсі Програми або на її офіційних ресурсах.",
        "pp-section7-title": "7. Зворотний зв'язок",
        "pp-section7-p1": "З будь-яких питань щодо безпеки даних та функціонування Програми ви можете зв'язатися з розробником через офіційні канали зв'язку, зазначені в Програмі.",
        "pp-download-title": "Політика конфіденційності GScreenshot",
        "pp-download-desc": "Ви можете завантажити повну версію цього документа для ознайомлення в автономному режимі.",
        "pp-download-button": "Завантажити документ"
    }
};

function setLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    Object.keys(translation).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translation[key];
        }
    });

    localStorage.setItem('preferredLang', lang);
    
    const sloganElement = document.getElementById('footer-slogan');
    if (sloganElement) {
        const year = new Date().getFullYear();
        const text = translation['footer-slogan'];
        sloganElement.innerHTML = `${text} <span class="ms-1">© ${year}</span> <b>GScreenshot.</b>`;
    }

    const currentLangText = document.getElementById('current-lang');
    if (currentLangText) {
        const labels = { en: 'Eng', uk: 'Укр' };
        currentLangText.textContent = labels[lang] || lang.toUpperCase();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('customLangSelector');
    const trigger = wrapper?.querySelector('.select-trigger');
    const options = wrapper?.querySelectorAll('.option');

    if (trigger) {
        trigger.addEventListener('click', (e) => {
            wrapper.classList.toggle('active');
            e.stopPropagation();
        });
    }

    if (options) {
        options.forEach(option => {
            option.addEventListener('click', function() {
                const selectedLang = this.getAttribute('data-value');
                setLanguage(selectedLang);
                wrapper.classList.remove('active');
            });
        });
    }

    document.addEventListener('click', () => {
        wrapper?.classList.remove('active');
    });

    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});