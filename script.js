// Language translations
const translations = {
    en: {
        'nav-title': 'Qama Institute',
        'nav-subtitle': 'Community • Culture • Service',
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-principles': 'Programs',
        'nav-contact': 'Contact',
        'mobile-nav-home': 'Home',
        'mobile-nav-about': 'About',
        'mobile-nav-principles': 'Programs',
        'mobile-nav-contact': 'Contact',
        'contact-map-title': 'Find Us Here',
        'get-directions': 'Get Directions',
        'call-us': 'Call Us',
        'visit-us-title': 'Visit Us',
        'visit-us-description': 'Join us at our community center for events, programs, and cultural activities.',
        'hours-title': 'Hours',
        'hours-description': 'Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed',
        'hero-title': 'Building Community<br><span class="text-qama-light-green">Together</span>',
        'hero-description': 'A nonprofit Arab Palestinian-American cultural and social community organization serving Illinois and beyond through cooperation, education, and inclusive community service.',
        'hero-cta1': 'Learn More',
        'hero-cta2': 'Get Involved',
        'about-title': 'About Qama Institute',
        'about-description': 'Established in July 2025 in Illinois by dedicated volunteers, we serve as a bridge connecting diverse communities through cultural understanding and mutual cooperation.',
        'feature1-title': 'Inclusive Community',
        'feature1-description': 'Serving all people without discrimination based on religion, race, or gender',
        'feature2-title': 'Cultural Education',
        'feature2-description': 'Organizing seminars, lectures, and conferences to promote cultural understanding',
        'feature3-title': 'Partnership Building',
        'feature3-description': 'Collaborating with local and international institutions for community success',
        'principles-title': 'Our Principles & Objectives',
        'principle1': 'Provide services and assistance to all without discrimination',
        'principle2': 'Promote teamwork and cooperation with other organizations',
        'principle3': 'Offer diverse services to all segments of the community',
        'principle4': 'Actively participate in cultural, social, and recreational activities',
        'principle5': 'Protect children and families through educational seminars',
        'principle6': 'Organize social, cultural, and educational activities',
        'contact-title': 'Get In Touch',
        'contact-description': 'Ready to join our community or learn more about our initiatives? Visit us at our location or give us a call.',
        'footer-description': 'Building stronger communities through cultural understanding and cooperation.',
        'footer-links-title': 'Quick Links',
        'footer-link1': 'About Us',
        'footer-link2': 'Our Programs',
        'footer-link3': 'Events',
        'footer-link4': 'Contact',
        'footer-connect-title': 'Connect With Us',
        'footer-connect-description': 'Stay updated with our latest activities and events.',
        'footer-link3': 'Our Principles'
    },
    ar: {
        'nav-title': 'مؤسسة قامة',
        'nav-subtitle': 'مجتمع • ثقافة • خدمة',
        'nav-home': 'الرئيسية',
        'nav-about': 'من نحن',
        'nav-principles': 'البرامج',
        'nav-contact': 'اتصل بنا',
        'mobile-nav-home': 'الرئيسية',
        'mobile-nav-about': 'من نحن',
        'mobile-nav-principles': 'البرامج',
        'mobile-nav-contact': 'اتصل بنا',
        'contact-map-title': 'اعثر علينا هنا',
        'get-directions': 'احصل على الاتجاهات',
        'call-us': 'اتصل بنا',
        'visit-us-title': 'زوروا',
        'visit-us-description': 'انضموا إلينا في مركزنا المجتمعي للفعاليات والبرامج والأنشطة الثقافية.',
        'hours-title': 'ساعات العمل',
        'hours-description': 'الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً<br>السبت: 10:00 صباحاً - 4:00 مساءً<br>الأحد: مغلق',
        'hero-title': 'بناء المجتمع<br><br><span class="text-qama-light-green">معاً</span>',
        'hero-description': 'مؤسسة اجتماعية ثقافية مجتمعية عربية فلسطينية أمريكية غير ربحية تخدم ولاية إلينوي وما وراءها من خلال التعاون والتعليم والخدمة المجتمعية الشاملة.',
        'hero-cta1': 'اعرف المزيد',
        'hero-cta2': 'شارك معنا',
        'about-title': 'حول مؤسسة قامة',
        'about-description': 'تأسست في تموز 2025 في إلينوي من قبل متطوعين مخلصين، نحن نعمل كجسر يربط المجتمعات المتنوعة من خلال التفاهم الثقافي والتعاون المتبادل.',
        'feature1-title': 'مجتمع شامل',
        'feature1-description': 'خدمة جميع الناس دون تمييز على أساس الدين أو العرق أو الجنس',
        'feature2-title': 'التعليم الثقافي',
        'feature2-description': 'تنظيم الندوات والمحاضرات والمؤتمرات لتعزيز التفاهم الثقافي',
        'feature3-title': 'بناء الشراكات',
        'feature3-description': 'التعاون مع المؤسسات المحلية والدولية لنجاح المجتمع',
        'principles-title': 'مبادئنا وأهدافنا',
        'principle1': 'تقديم الخدمات والمساعدات للجميع دون تمييز',
        'principle2': 'تعزيز العمل الجماعي والتعاون مع المنظمات الأخرى',
        'principle3': 'تقديم خدمات متنوعة لجميع شرائح المجتمع',
        'principle4': 'المشاركة الفعالة في الأنشطة الثقافية والاجتماعية والترفيهية',
        'principle5': 'حماية الأطفال والأسر من خلال الندوات التعليمية',
        'principle6': 'تنظيم الأنشطة الاجتماعية والثقافية والتعليمية',
        'contact-title': 'تواصل معنا',
        'contact-description': 'مستعد للانضمام إلى مجتمعنا أو معرفة المزيد عن مبادراتنا؟ زوروا موقعنا أو اتصلوا بنا.',
        'footer-description': 'بناء مجتمعات أقوى من خلال التفاهم الثقافي والتعاون.',
        'footer-links-title': 'روابط سريعة',
        'footer-link1': 'معلومات عنا',
        'footer-link2': 'برامجنا',
        'footer-link3': 'الفعاليات',
        'footer-link4': 'اتصل بنا',
        'footer-connect-title': 'تواصل معنا',
        'footer-connect-description': 'ابق على اطلاع بأحدث أنشطتنا وفعالياتنا.',
        'footer-link3': 'مبادئنا'
    }
};

// Current language state
let currentLang = 'en';

// DOM elements
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const htmlElement = document.documentElement;

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.offsetTop - navHeight - 20;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize language functionality
function initLanguage() {
    // Set initial language button text
    updateLanguageButton();

    // Add click event listeners to language toggles
    langToggle.addEventListener('click', toggleLanguage);
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', toggleLanguage);
    }

    // Check if there's a saved language preference
    const savedLang = localStorage.getItem('qamaLang');
    if (savedLang && savedLang !== currentLang) {
        currentLang = savedLang;
        switchLanguage(currentLang);
    }
}

// Toggle between languages
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    switchLanguage(currentLang);

    // Save language preference
    localStorage.setItem('qamaLang', currentLang);
}

// Switch to specified language
function switchLanguage(lang) {
    // Update HTML attributes
    htmlElement.lang = lang;
    htmlElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update font family based on language
    if (lang === 'ar') {
        document.body.style.fontFamily = '"Noto Sans Arabic", "Cairo", "Amiri", serif';
    } else {
        document.body.style.fontFamily = 'Inter, sans-serif';
    }

    // Update all translatable elements
    updateTranslations(lang);

    // Update language button
    updateLanguageButton();

    // Add smooth transition effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// Update all text content based on current language
function updateTranslations(lang) {
    const langData = translations[lang];

    Object.keys(langData).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (key === 'hero-title') {
                // Handle HTML content for hero title
                element.innerHTML = langData[key];
            } else {
                element.textContent = langData[key];
            }
        }
    });
}

// Update language toggle button text
function updateLanguageButton() {
    const buttonText = currentLang === 'en' ?
        '<i class="fas fa-globe mr-2"></i>عربي' :
        '<i class="fas fa-globe mr-2"></i>English';

    langToggle.innerHTML = buttonText;
    if (langToggleMobile) {
        langToggleMobile.innerHTML = buttonText.replace('mr-2', 'mr-1');
    }
}

// Mobile menu functionality
function initMobileMenu() {
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        const isOpen = !mobileMenu.classList.contains('hidden');
        const icon = mobileMenuToggle.querySelector('i');

        if (icon) {
            icon.className = isOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl';
        }

        // Update aria-expanded for accessibility
        mobileMenuToggle.setAttribute('aria-expanded', isOpen.toString());
    }
}

// Enhanced smooth scrolling for anchor links
function initSmoothScrolling() {
    // Handle all anchor links with hash
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Make functions globally available
    window.scrollToSection = scrollToSection;
    window.toggleMobileMenu = toggleMobileMenu;
}

// Map and contact functionality
function initContactHandling() {
    // Initialize map iframe lazy loading
    const mapIframe = document.querySelector('iframe[title*="Map"]');
    if (mapIframe) {
        // Intersection observer for lazy loading the map
        const mapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Map is visible, no additional action needed as it's already loaded
                    mapObserver.unobserve(entry.target);
                }
            });
        });
        mapObserver.observe(mapIframe);
    }

    // Track clicks on direction and call buttons for analytics
    const directionsBtn = document.querySelector('a[href*="maps.google.com"]');
    const callBtn = document.querySelector('a[href^="tel:"]');

    if (directionsBtn) {
        directionsBtn.addEventListener('click', () => {
            // Track directions click (can be used for analytics)
            console.log('Directions button clicked');
        });
    }

    if (callBtn) {
        callBtn.addEventListener('click', () => {
            // Track call button click (can be used for analytics)
            console.log('Call button clicked');
        });
    }
}

// Optimized navbar scroll effect
function initNavbarEffect() {
    const navbar = document.querySelector('nav');
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.classList.add('shadow-xl');
            navbar.style.backgroundColor = 'rgba(30, 58, 71, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.classList.remove('shadow-xl');
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.bg-white.p-6, .text-center.p-6').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Optimized parallax effect for hero section
function initParallaxEffect() {
    const hero = document.querySelector('#home');
    if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        let ticking = false;

        function updateParallax() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3; // Reduced intensity for better performance
            hero.style.transform = `translate3d(0, ${rate}px, 0)`; // Use translate3d for hardware acceleration
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });
    }
}

// Enhanced intersection observer for staggered animations
function initEnhancedAnimations() {
    // Skip animations if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Stop observing once animated to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections with more specific selectors
    document.querySelectorAll('.group').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show intro splash before initializing the rest
    initIntroSplash();
    // Core functionality
    initLanguage();
    initMobileMenu();
    initSmoothScrolling();
    initContactHandling();

    // Performance optimizations
    initImageOptimization();
    initServiceWorker();

    // Visual enhancements (loaded after core functionality)
    requestAnimationFrame(() => {
        initNavbarEffect();
        initEnhancedAnimations();
        initParallaxEffect();
    });

    // Make translations globally available
    window.translations = translations;

    // Optimized loading animation
    document.body.style.opacity = '0';
    requestAnimationFrame(() => {
        document.body.style.transition = 'opacity 0.6s ease';
        document.body.style.opacity = '1';
    });
});

// Handle window resize for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth >= 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }, 250);
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Add any responsive adjustments here if needed
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Toggle language with Ctrl/Cmd + L
    if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
    }

    // Close mobile menu with Escape key
    if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
});

// Optimize images loading
function initImageOptimization() {
    // Add loading attribute to all images if not already present
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        if (!img.src.includes('logo.png')) {
            img.loading = 'lazy';
        }
    });

    // Preload critical images
    const logoImg = new Image();
    logoImg.src = 'logo.png';
}

// Service worker registration for caching (if available)
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Only register if service worker file exists
            fetch('/sw.js', { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        navigator.serviceWorker.register('/sw.js')
                            .then(registration => {
                                console.log('SW registered: ', registration);
                            })
                            .catch(registrationError => {
                                console.log('SW registration failed: ', registrationError);
                            });
                    }
                })
                .catch(() => {
                    // Service worker file doesn't exist, continue without it
                });
        });
    }
}

function initIntroSplash() {
    const splash = document.getElementById('intro-splash');
    if (!splash) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Prevent scrolling while splash is visible
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const minDisplay = prefersReducedMotion ? 1200 : 2800; // a little longer
    const fadeDuration = prefersReducedMotion ? 200 : 650;

    let closed = false;
    let minElapsed = false;
    let readyResolved = false;

    const closeSplash = () => {
        if (closed) return;
        closed = true;
        splash.setAttribute('aria-hidden', 'true');
        splash.style.transition = `opacity ${fadeDuration}ms ease`;
        splash.style.opacity = '0';
        splash.addEventListener('transitionend', () => {
            splash.remove();
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }, { once: true });
    };

    // Wait for fonts and logo to be ready ("until it is done")
    const fontsReady = ('fonts' in document) ? document.fonts.ready.catch(() => Promise.resolve()) : Promise.resolve();

    const navLogo = document.querySelector('nav img[src="logo.png"]');
    const logoReady = new Promise((resolve) => {
        if (navLogo && navLogo.complete) return resolve();
        const img = navLogo || new Image();
        if (!navLogo) img.src = 'logo.png';
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
    });

    Promise.all([fontsReady, logoReady]).then(() => {
        readyResolved = true;
        if (minElapsed) closeSplash();
    });

    // Minimum display time
    setTimeout(() => {
        minElapsed = true;
        if (readyResolved) closeSplash();
    }, minDisplay);

    // Allow user to skip with click or Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            document.removeEventListener('keydown', escHandler);
            closeSplash();
        }
    };

    splash.addEventListener('click', closeSplash);
    document.addEventListener('keydown', escHandler);

    // Safety timeout to avoid hanging if something never resolves
    setTimeout(() => {
        if (!closed) closeSplash();
    }, prefersReducedMotion ? 3500 : 5000);
}