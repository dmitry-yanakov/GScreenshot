const translations = {
    en: {
        "hero-title": 'Privacy — <span class="text-gradient">Owned by You.</span>',
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
        "join-or": "OR",
        "join-contact-email": "gsreenshot@gmail.com",
        "footer-slogan": "Your drive, your rules.",
        "footer-privacy-policy": "Privacy Policy",
        "footer-terms": "Terms and Conditions",
        "purpose-title": "About GScreenshot & Google Drive",
        "purpose-subtitle": "How our application works and why it requests access to your Google Drive",
        "purpose-header-app": "Application Purpose",
        "purpose-body-app": "GScreenshot is a desktop application designed to simplify your screenshot workflow. It allows you to quickly capture any region of your screen, apply annotation tools (like text, shapes, arrows, or blur), and securely save the result. The application is built with a local-first philosophy, ensuring your captures are kept private and processed entirely on your machine.",
        "purpose-header-oauth": "Google OAuth & Drive Permission",
        "purpose-body-oauth": "To enable seamless cloud saving, GScreenshot integrates directly with Google Drive API. When you authorize the app via Google OAuth, it requests permission to access your Google Drive with the limited <code>.../auth/drive.file</code> scope. This permission is strictly used to create a dedicated <strong>\"GScreenshot\"</strong> folder and upload only the screenshots you choose to sync. We never read, modify, or delete any other files on your Google Drive, nor do we transfer any data to third-party or developer-owned servers.",
        // Privacy Policy Page Translations
        "privacy-policy-title": "GScreenshot Privacy Policy",
        "privacy-policy-last-updated": "Last Updated: July 3, 2026",
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
        "pp-section3-title": "3. Requested System Permissions & Update Architecture",
        "pp-section3-p1": "To ensure full functionality across different operating systems and deployment channels, the Application requests access to the following system resources:",
        "pp-section3-li1": "<strong>Screen Recording:</strong> This permission is used exclusively at the moment you initiate a screenshot capture to grab the visible area (including system notifications, menu elements, tooltips, and setups with multiple monitors). The Application does not perform background recording or hidden monitoring of your screen.",
        "pp-section3-li2": "<strong>Auto-Launch:</strong> An optional feature that can be enabled by the user in the Application settings to automatically start the utility upon operating system boot.",
        "pp-section3-li3": "<strong>Internet Access & Multi-Channel Updates:</strong> Required solely to ensure direct interaction with Google API servers (file uploads) and to handle application updates based on the distribution channel: Apple App Store Distribution: For builds distributed through the Mac App Store, update mechanics and delivery are completely handled natively by the platform itself, in full compliance with App Store policies. Windows & Standalone Distribution: For standalone builds (such as Windows environments), an integrated background Auto-Update module checks for new versions and downloads them directly from official repository sources without collecting personal user profiles.",
        "pp-section4-title": "4. Storage of Configuration Data",
        "pp-section4-p1": "All user preferences, including custom hotkey combinations, toolbar parameters, and interface configurations, are saved strictly locally on the user's device. These configuration data are isolated and are not synchronized with external servers.",
        "pp-section5-title": "5. Links to Third-Party Resources & Communication Channels",
        "pp-section5-p1": "The \"About\" section contains an informational link to the official Application community in the Telegram messenger, as well as the official support email. This Privacy Policy does not apply to third-party services. Interaction with the Telegram platform is governed by its own policies and regulations.",
        "pp-section6-title": "6. Changes to This Policy",
        "pp-section6-p1": "The developer reserves the right to make changes to this Privacy Policy to reflect updates to the Application's functionality or changes in the requirements of distribution platforms (including the Apple App Store and Windows ecosystems). The current version of the document is always accessible within the Application interface or on its official resources.",
        "pp-section7-title": "7. Feedback",
        "pp-section7-p1": "For any questions regarding data security and the functioning of the Application, you may contact the developer through the official communication channels specified within the Application's \"About\" section or published on the official Application website hosted via GitHub Pages.",
        "pp-download-title": "GScreenshot Privacy Policy",
        "pp-download-desc": "You can download the full version of this document for offline review.",
        "pp-download-button": "Download Document",
        // Terms and Conditions Page Translations
        "terms-title": "Terms and Conditions",
        "terms-last-updated": "Last Updated: July 3, 2026",
        "terms-intro": "Please read these Terms and Conditions (\"Terms\") carefully before using the GScreenshot application (\"Application\"). These Terms constitute a legally binding agreement between you (\"User\" or \"you\") and the developer of GScreenshot (\"Developer\", \"we\", or \"us\") regarding your use of the Application downloaded via the Apple App Store or obtained for other operating systems. By installing, accessing, or using the Application, you agree to be bound by these Terms. If you do not agree to these Terms, do not install or use the Application.",
        "terms-section1-title": "1. General Provisions & Cross-Platform Distribution",
        "terms-section1-p1": "This document is a legally binding agreement between the User and the Developer. By installing, running, updating, or using the Application on any operating system, you fully and unconditionally accept these Terms. If you do not agree, you must immediately cease all use and delete all copies of the Application from your devices. The User explicitly acknowledges that the Application is developed using the Electron cross-platform framework, and the Developer provides no warranty regarding individual performance variations, framework-specific background tasks, or cross-platform differences that may arise across macOS, Windows, or standalone environments.",
        "terms-section2-title": "2. Core Purpose & Data Processing Architecture",
        "terms-section2-p1": "GScreenshot is built exclusively as a local automation tool for capturing screen areas, cropping images, and applying basic visual modifications. The integrated toolkit provides functional elements optimized for graphic highlighting, such as underline paths, local text annotations, and other interface indicators. All capture, editing, rendering, and processing operations occur strictly within the isolated volatile memory (RAM) and local execution directories of the User's device. The Developer does not maintain, control, operate, or deploy any intermediary servers, proxy infrastructures, or backend cloud storage to intercept, log, view, or process your graphics.",
        "terms-section3-title": "3. Third-Party Services & Cloud Connections",
        "terms-section3-p1": "The Application contains optional capabilities that permit the User to connect a personal Google Drive account for uploading captured files. The User acknowledges that this connection is performed directly between the local client on the User's machine and the official Google API servers. The Developer is not an intermediary, partner, or agent of Google and assumes zero liability for disconnections, token expirations, API quota blocks, throttling, transmission failures, storage losses, account suspension, or security issues occurring on Google infrastructure.",
        "terms-section4-title": "4. Total Exclusion of Liability for User Content & Distribution",
        "terms-section4-p1": "The Developer exerts zero control, monitoring, oversight, validation, or screening over what the User captures with the Application. The User bears sole and exclusive legal and financial responsibility for all screenshots, text, data, and visual captures created through the software. The User fully indemnifies and releases the Developer from liability for any use involving highly sensitive personal data, financial credentials, passwords, cryptographic keys, protected content, non-disclosure material, or other regulated or confidential information. The Application provides technical tools for local storage or cloud export execution on the User's explicit request, and the Developer is not responsible for where, to whom, or how the User transmits, shares, uploads, or publishes the captured screen items.",
        "terms-section5-title": "5. Absolute Warranty Disclaimer",
        "terms-section5-p1": "To the maximum extent permitted by applicable law, the Application and all updates, upgrades, revisions, patches, and modifications are provided strictly on an \"AS IS\" and \"AS AVAILABLE\" basis, without warranties, representations, or conditions of any kind, either express, implied, or statutory. The Developer explicitly disclaims liability for technical failures, runtime crashes, memory leaks, compilation bugs, system freezes, UI glitches, operating system incompatibilities, or unexpected software terminations. The Developer shall also have no responsibility for corruption, temporary unavailability, irreversible deletion, or total loss of configuration profiles, custom hotkeys, locally stored images, annotation layouts, or transmission history caused by crashes, device failures, OS updates, or framework runtime malfunctions.",
        "terms-section6-title": "6. Limitation of Liability",
        "terms-section6-p1": "In no event and under no legal theory shall the Developer be liable to the User or any third party for any direct, indirect, incidental, special, exemplary, punitive, or consequential damages of any character whatsoever, including loss of goodwill, work stoppage, computer failure, data compromise, commercial loss, or loss of profits arising from the use, abuse, or inability to use the Application, even if the Developer was advised of the possibility of such damages.",
        "terms-section7-title": "7. Intellectual Property & Third-Party Links",
        "terms-section7-p1": "The Application, its unique logic, UI configuration layouts, brand elements, asset builds, compilation packages, and underlying structural framework properties are the exclusive intellectual property of the Developer. Modifying, reverse-engineering, decompiling, extracting source manifests, or redistributing the binaries without explicit written authorization is strictly prohibited. The Application may include informational links to external platforms such as the official Telegram channel, which are governed by their own regulations; the Developer holds no administrative control over those services and rejects responsibility for their privacy mechanics, access conditions, or content.",
        "terms-section8-title": "8. Amendments and Revisions",
        "terms-section8-p1": "The Developer holds the unilateral right to revise, modify, rewrite, or update these Terms at any time to reflect changes in Electron infrastructure, platform distribution rules, or applicable digital legislation. Continued use of the software following publication of any updated Terms implies full and total legal consent to the modified rules.",
        "terms-section9-title": "9. Contact Specifications & Support Nodes",
        "terms-section9-p1": "For official support processing, compliance validations, legal notices, or interface inquiries regarding these Terms and Conditions, the User should use the official communication endpoints available in the Application's \"About\" section or published on the official GScreenshot website hosted via GitHub Pages.",
        "terms-download-title": "GScreenshot Terms and Conditions",
        "terms-download-desc": "You can download the full version of this document for offline review.",
        "terms-download-button": "Download Document"
    },
    uk: {
        "hero-title": 'Приватність — <span class="text-gradient">Належить Вам.</span>',
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
        "join-or": "АБО",
        "join-contact-email": "gsreenshot@gmail.com",
        "footer-slogan": "Ваш диск, ваші правила.",
        "footer-privacy-policy": "Політика конфіденційності",
        "footer-terms": "Умови користування",
        "purpose-title": "Про GScreenshot та Google Drive",
        "purpose-subtitle": "Як працює наш застосунок і чому він запитує доступ до вашого Google Drive",
        "purpose-header-app": "Призначення програми",
        "purpose-body-app": "GScreenshot — це настільний застосунок, створений для спрощення роботи зі скріншотами. Він дозволяє швидко захоплювати будь-яку область екрана, додавати анотації (текст, фігури, стрілки або розмиття) та надійно зберігати результат. Застосунок побудований за принципом локальної обробки, гарантуючи конфіденційність ваших знімків.",
        "purpose-header-oauth": "Google OAuth та доступ до Диску",
        "purpose-body-oauth": "Для зручного збереження в хмарі GScreenshot інтегрується безпосередньо з Google Drive API. Коли ви авторизуєте застосунок через Google OAuth, він запитує дозвіл на доступ до вашого Google Drive в межах обмеженої області дії <code>.../auth/drive.file</code>. Цей дозвіл використовується виключно для створення спеціальної папки <strong>«GScreenshot»</strong> та завантаження лише тих скріншотів, які ви вирішите синхронізувати. Ми ніколи не читаємо, не змінюємо й не видаляємо інші файли на вашому Google Drive, а також не передаємо жодних даних на сторонні сервери чи сервери розробника.",
        // Privacy Policy Page Translations
        "privacy-policy-title": "Політика конфіденційності GScreenshot",
        "privacy-policy-last-updated": "Останнє оновлення: 3 липня 2026",
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
        "pp-section3-title": "3. Запитувані системні дозволи та архітектура оновлень",
        "pp-section3-p1": "Для забезпечення повної функціональності в різних операційних системах та каналах розповсюдження Програма запитує доступ до таких системних ресурсів:",
        "pp-section3-li1": "<strong>Запис екрану:</strong> Цей дозвіл використовується виключно в момент ініціювання захоплення скріншота для зйомки видимої області (включаючи системні сповіщення, елементи меню, підказки та налаштування з кількома моніторами). Програма не виконує фоновий запис або прихований моніторинг вашого екрану.",
        "pp-section3-li2": "<strong>Автозапуск:</strong> Додаткова функція, яку користувач може увімкнути в налаштуваннях Програми для автоматичного запуску утиліти при завантаженні операційної системи.",
        "pp-section3-li3": "<strong>Доступ до Інтернету та багатоканальні оновлення:</strong> Потрібен виключно для забезпечення прямої взаємодії з серверами Google API (завантаження файлів) та для обробки оновлень застосунку залежно від каналу розповсюдження: Apple App Store Distribution: для збірок, розповсюджуваних через Mac App Store, механіка оновлень і доставка повністю виконуються нативно самою платформою, у повній відповідності до політик App Store. Windows & Standalone Distribution: для автономних збірок (наприклад, у Windows) інтегрований фоновий модуль Auto-Update перевіряє наявність нових версій та завантажує їх безпосередньо з офіційних джерел репозиторію без збору персональних профілів користувача.",
        "pp-section4-title": "4. Зберігання даних конфігурації",
        "pp-section4-p1": "Усі налаштування користувача, включаючи власні комбінації гарячих клавіш, параметри панелі інструментів та конфігурації інтерфейсу, зберігаються виключно локально на пристрої користувача. Ці дані конфігурації ізольовані та не синхронізуються із зовнішніми серверами.",
        "pp-section5-title": "5. Посилання на сторонні ресурси та канали зв'язку",
        "pp-section5-p1": "Розділ «Про програму» містить інформаційне посилання на офіційну спільноту Програми в месенджері Telegram, а також офіційну підтримку електронною поштою. Ця Політика конфіденційності не поширюється на сторонні сервіси. Взаємодія з платформою Telegram регулюється її власними політиками та правилами.",
        "pp-section6-title": "6. Зміни до цієї Політики",
        "pp-section6-p1": "Розробник залишає за собою право вносити зміни до цієї Політики конфіденційності, щоб відобразити оновлення функціональності Програми або зміни в вимогах платформ розповсюдження (включаючи Apple App Store та середовище Windows). Поточна версія документа завжди доступна в інтерфейсі Програми або на її офіційних ресурсах.",
        "pp-section7-title": "7. Зворотний зв'язок",
        "pp-section7-p1": "З будь-яких питань щодо безпеки даних та функціонування Програми ви можете зв'язатися з розробником через офіційні канали зв'язку, зазначені в розділі «Про програму» або опубліковані на офіційному веб-сайті Програми, розміщеному через GitHub Pages.",
        "pp-download-title": "Політика конфіденційності GScreenshot",
        "pp-download-desc": "Ви можете завантажити повну версію цього документа для ознайомлення в автономному режимі.",
        "pp-download-button": "Завантажити документ",
        // Terms and Conditions Page Translations
        "terms-title": "Умови користування",
        "terms-last-updated": "Останнє оновлення: 3 липня 2026",
        "terms-intro": "Будь ласка, уважно прочитайте ці Умови користування («Умови») перед використанням застосунку GScreenshot («Застосунок»). Ці Умови є юридично обов'язковою угодою між вами («Користувач» або «ви») і розробником GScreenshot («Розробник», «ми» або «нас») щодо використання Застосунку, завантаженого через Apple App Store або отриманого для інших операційних систем. Встановлюючи, отримуючи доступ або використовуючи Застосунок, ви погоджуєтеся дотримуватися цих Умов. Якщо ви не погоджуєтеся з цими Умовами, не встановлюйте та не використовуйте Застосунок.",
        "terms-section1-title": "1. Загальні положення та кросплатформне розповсюдження",
        "terms-section1-p1": "Цей документ є юридично обов'язковою угодою між Користувачем і Розробником. Встановлюючи, запускаючи, оновлюючи або використовуючи Застосунок на будь-якій операційній системі, ви повністю та безумовно приймаєте ці Умови. Якщо ви не погоджуєтеся, ви повинні негайно припинити використання та видалити всі копії Застосунку з ваших пристроїв. Користувач визнає, що Застосунок розроблено на основі кросплатформного фреймворку Electron, а Розробник не надає гарантій щодо індивідуальних відмінностей у продуктивності, фонових завдань фреймворку або кросплатформних особливостей між macOS, Windows або автономними середовищами.",
        "terms-section2-title": "2. Основна мета та архітектура обробки даних",
        "terms-section2-p1": "GScreenshot створено виключно як локальний інструмент автоматизації для захоплення ділянок екрана, обрізання зображень та застосування базових візуальних правок. Інтегрований набір інструментів містить функціональні елементи, оптимізовані для підсвічування графіки, зокрема підкреслення, локальні текстові анотації та інші елементи інтерфейсу. Усі операції захоплення, редагування, рендерингу та обробки відбуваються виключно в ізольованій оперативній пам'яті (RAM) та локальних каталогах виконання пристрою Користувача. Розробник не підтримує, не контролює, не керує та не розгортає проміжні сервери, проксі-інфраструктури або бекенд-хмарні сховища для перехоплення, логування, перегляду або обробки ваших графічних даних.",
        "terms-section3-title": "3. Сторонні сервіси та хмарні підключення",
        "terms-section3-p1": "Застосунок містить додаткові можливості, які дозволяють Користувачу підключити особистий обліковий запис Google Drive для завантаження створених файлів. Користувач визнає, що таке підключення здійснюється безпосередньо між локальним клієнтом на пристрої Користувача та офіційними серверами Google API. Розробник не є посередником, партнером або агентом Google і не несе відповідальності за відключення, закінчення терміну дії токенів, блокування квот API, обмеження швидкості, збої передачі, втрати сховища, блокування облікового запису або інциденти з безпекою на стороні Google.",
        "terms-section4-title": "4. Повне виключення відповідальності за вміст користувача та розповсюдження",
        "terms-section4-p1": "Розробник не здійснює контролю, моніторингу, валідації або фільтрації того, що Користувач захоплює за допомогою Застосунку. Користувач несе виключну юридичну та фінансову відповідальність за всі знімки, текст, дані та візуальні матеріали, створені через програмне забезпечення. Користувач повністю звільняє та відшкодовує Розробника від відповідальності за використання, пов'язане з дуже чутливими персональними даними, фінансовими обліковими даними, паролями, криптографічними ключами, захищеним контентом, матеріалами з нeдоступом або іншою регульованою або конфіденційною інформацією. Застосунок надає технічні інструменти для локального зберігання або експорту в хмару на явну вимогу Користувача, а Розробник не несе відповідальності за те, куди, кому та як Користувач передає, обмінюється, завантажує або публікує захоплені елементи екрана.",
        "terms-section5-title": "5. Абсолютне відмовлення від гарантій",
        "terms-section5-p1": "У максимальному обсязі, дозволеному чинним законодавством, Застосунок та всі оновлення, доповнення, ревізії, патчі та модифікації надаються виключно на умовах \"AS IS\" та \"AS AVAILABLE\", без будь-яких гарантій, заяв, умов або представлень, явних або неявних. Розробник відкрито відмовляється від відповідальності за технічні збої, падіння виконання, витоки пам'яті, помилки компіляції, зависання системи, помилки інтерфейсу, несумісність із операційними системами або раптове завершення роботи програмного забезпечення. Розробник також не несе відповідальності за пошкодження, тимчасову недоступність, незворотне видалення або повну втрату профілів конфігурації, гарячих клавіш, локально збережених зображень, макетів анотацій або історії передачі через збої, відмови пристрою, оновлення ОС або збої середовища виконання фреймворку.",
        "terms-section6-title": "6. Обмеження відповідальності",
        "terms-section6-p1": "Ні за яких обставин і за жодною правовою теорією Розробник не несе відповідальності перед Користувачем або будь-якою третьою стороною за будь-які прямі, непрямі, випадкові, спеціальні, показові, штрафні або наслідкові збитки будь-якого характеру, включно з втратою репутації, зупинкою роботи, відмовою комп'ютера, втратою даних, комерційними збитками або втратою прибутку, що виникають внаслідок використання, зловживання або неможливості використання Застосунку, навіть якщо Розробника попереджали про можливість таких збитків.",
        "terms-section7-title": "7. Інтелектуальна власність та сторонні посилання",
        "terms-section7-p1": "Застосунок, його унікальна логіка, макети інтерфейсу, елементи бренду, збірки активів, пакети компіляції та базові властивості структурного фреймворку є виключною інтелектуальною власністю Розробника. Зміна, зворотна розробка, декомпіляція, витягування маніфестів або повторний розподіл бінарних файлів без письмового дозволу суворо заборонені. Застосунок може містити інформаційні посилання на зовнішні платформи, наприклад офіційний канал Telegram, які регулюються власними правилами; Розробник не має адміністративного контролю над цими сервісами та відмовляється від відповідальності за їхню політику конфіденційності, умови доступу або вміст.",
        "terms-section8-title": "8. Зміни та оновлення",
        "terms-section8-p1": "Розробник залишає за собою право в будь-який час переглядати, змінювати, переробляти або оновлювати ці Умови, щоб відобразити зміни в інфраструктурі Electron, правилах розповсюдження платформи або чинному цифровому законодавству. Продовження використання програмного забезпечення після опублікування оновлених Умов означає повну та безумовну згоду з модифікованими правилами.",
        "terms-section9-title": "9. Контактні дані та канали підтримки",
        "terms-section9-p1": "Для офіційної підтримки, валідації відповідності, правових повідомлень або запитів щодо інтерфейсу користувач повинен використовувати офіційні канали зв'язку, доступні в розділі «Про застосунок» або опубліковані на офіційному вебсайті GScreenshot, розміщеному через GitHub Pages.",
        "terms-download-title": "Умови користування GScreenshot",
        "terms-download-desc": "Ви можете завантажити повну версію цього документа для ознайомлення в автономному режимі.",
        "terms-download-button": "Завантажити документ"
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