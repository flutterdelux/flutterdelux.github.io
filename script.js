const translations = {
    id: {
        title: "Flutter Delux | Tingkatkan Kemampuan Flutter Anda",
        navYoutube: "YouTube",
        navGithub: "GitHub",
        heroBadge: "🚀 Developer Masa Depan",
        heroTitle: 'Tingkatkan Kemampuan Flutter Anda <br><span class="text-gradient">Lebih Dari Sekadar Coding.</span>',
        heroDesc: 'Selamat datang di Flutter Delux! Di era AI saat ini, menulis kode baris demi baris bukan lagi pembeda utama. Pembeda sesungguhnya adalah bagaimana Anda merancang sistem yang skalabel dan memanfaatkan teknologi terbaru untuk bekerja <strong>10x lebih cepat</strong>.',
        btnSubscribe: 'Subscribe Sekarang',
        btnGithub: 'Ekosistem GitHub',
        sectionHeaderTitle: 'Transformasi dari Coder ke <span class="text-gradient">System Architect</span>',
        sectionHeaderDesc: 'Kita tidak hanya belajar membuat UI yang cantik, tapi fokus pada membangun ekosistem aplikasi yang solid.',
        feature1Title: 'Alur Kerja Berbasis AI',
        feature1Desc: 'Optimasi development menggunakan AI (LLMs) untuk efisiensi maksimal dalam menulis kode dan problem-solving.',
        feature2Title: 'Arsitektur Enterprise',
        feature2Desc: 'Kupas tuntas Clean Architecture, Test-Driven Development (TDD), dan State Management tingkat lanjut yang scalable.',
        feature3Title: 'Ekosistem Fullstack',
        feature3Desc: 'Integrasi Flutter dengan backend high-performance seperti Supabase, Firebase, dan layanan cloud modern lainnya.',
        feature4Title: 'Otomasi & DevOps',
        feature4Desc: 'Mempercepat rilis aplikasi dengan CI/CD pipeline yang handal dan teknik Code Generation yang terstruktur.',
        ctaTitle: 'Siap menciptakan standar baru dalam software engineering?',
        ctaDesc: 'Mari bergabung bersama developer lain yang fokus pada kualitas, skalabilitas, dan inovasi.',
        ctaBtn: 'Subscribe YouTube Channel',
        footerDesc: 'Tingkatkan Kemampuan Flutter Anda Lebih Dari Sekadar Coding.'
    },
    en: {
        title: "Flutter Delux | Elevate Your Flutter Skills Beyond Coding",
        navYoutube: "YouTube",
        navGithub: "GitHub",
        heroBadge: "🚀 The Next-Gen Developer",
        heroTitle: 'Elevate Your Flutter Skills <br><span class="text-gradient">Beyond Coding.</span>',
        heroDesc: 'Welcome to Flutter Delux! In today\'s AI era, writing code line by line is no longer the main differentiator. The real game-changer is how you design scalable systems and leverage the latest technology to work <strong>10x faster</strong>.',
        btnSubscribe: 'Subscribe Now',
        btnGithub: 'GitHub Ecosystem',
        sectionHeaderTitle: 'Transform from Coder to <span class="text-gradient">System Architect</span>',
        sectionHeaderDesc: 'We don\'t just learn to build beautiful UIs, we focus on building solid application ecosystems.',
        feature1Title: 'The AI-Powered Workflow',
        feature1Desc: 'Optimize development using AI (LLMs) for maximum efficiency in coding and problem-solving.',
        feature2Title: 'Enterprise Architecture',
        feature2Desc: 'Deep dive into Clean Architecture, Test-Driven Development (TDD), and scalable advanced State Management.',
        feature3Title: 'Fullstack Ecosystem',
        feature3Desc: 'Flutter integration with high-performance backends like Supabase, Firebase, and other modern cloud services.',
        feature4Title: 'Automation & DevOps',
        feature4Desc: 'Accelerate app releases with reliable CI/CD pipelines and structured Code Generation techniques.',
        ctaTitle: 'Ready to set a new standard in software engineering?',
        ctaDesc: 'Join other developers who focus on quality, scalability, and innovation.',
        ctaBtn: 'Subscribe YouTube Channel',
        footerDesc: 'Elevate Your Flutter Skills Beyond Coding.'
    }
};

let currentLang = 'en';

function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'TITLE') {
                document.title = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(card);
    });

    const ctaBox = document.querySelector('.cta-box');
    if (ctaBox) {
        ctaBox.style.opacity = '0';
        ctaBox.style.transform = 'translateY(30px)';
        ctaBox.style.transition = `all 0.6s ease-out`;
        observer.observe(ctaBox);
    }

    // Smooth hover effect for cards
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Initialize Language
    setLang(currentLang);
});
