/**
 * Portfolio Navigation & Interactions
 * Modern, minimal JavaScript for portfolio functionality
 */

(function() {
    'use strict';

    // ===================================
    // Configuration
    // ===================================
    const config = {
        animationDelay: 325,
        preloadDelay: 100
    };

    // ===================================
    // DOM Elements
    // ===================================
    const elements = {
        body: document.body,
        wrapper: document.getElementById('wrapper'),
        header: document.getElementById('header'),
        main: document.getElementById('main'),
        footer: document.getElementById('footer'),
        articles: document.querySelectorAll('#main article'),
        navLinks: document.querySelectorAll('nav a[href^="#"]'),
        closeButtons: document.querySelectorAll('.close'),
        backToTop: document.querySelector('.back-to-top')
    };

    // ===================================
    // State Management
    // ===================================
    let isLocked = false;
    let activeArticle = null;
    let currentLang = localStorage.getItem('language') || 'en';

    // ===================================
    // Utility Functions
    // ===================================
    
    /**
     * Add class with optional delay
     */
    function addClass(element, className, delay = 0) {
        setTimeout(() => element.classList.add(className), delay);
    }

    /**
     * Remove class with optional delay
     */
    function removeClass(element, className, delay = 0) {
        setTimeout(() => element.classList.remove(className), delay);
    }

    /**
     * Toggle class
     */
    function toggleClass(element, className) {
        element.classList.toggle(className);
    }

    /**
     * Hide back-to-top button with animation
     */
    function hideBackToTop() {
        if (!elements.backToTop) return;
        
        removeClass(elements.backToTop, 'visible');
        setTimeout(() => {
            if (!elements.backToTop.classList.contains('visible')) {
                elements.backToTop.style.display = 'none';
            }
        }, 300);
    }

    /**
     * Show back-to-top button with animation
     */
    function showBackToTop() {
        if (!elements.backToTop) return;
        
        elements.backToTop.style.display = 'flex';
        setTimeout(() => addClass(elements.backToTop, 'visible'), 10);
    }

    /**
     * Lock/unlock interactions
     */
    function setLock(locked) {
        isLocked = locked;
    }

    // ===================================
    // Article Management
    // ===================================
    
    /**
     * Show article
     */
    function showArticle(id, initial = false) {
        if (!id || isLocked) return;

        const article = document.getElementById(id);
        if (!article) return;

        // If initial load, skip delays
        if (initial) {
            addClass(elements.body, 'is-article-visible');
            elements.header.style.display = 'none';
            elements.footer.style.display = 'none';
            elements.main.style.display = 'flex';
            article.style.display = 'block';
            article.scrollTop = 0; // Start at top
            addClass(article, 'active');
            activeArticle = article;
            return;
        }

        setLock(true);

        // If another article is visible, swap
        if (elements.body.classList.contains('is-article-visible')) {
            if (activeArticle) {
                removeClass(activeArticle, 'active');
                
                // Reset scroll position of previous article
                activeArticle.scrollTop = 0;
                
                setTimeout(() => {
                    activeArticle.style.display = 'none';
                    article.style.display = 'block';
                    
                    // Ensure new article starts at top
                    article.scrollTop = 0;
                    
                    setTimeout(() => {
                        addClass(article, 'active');
                        activeArticle = article;
                        window.scrollTo(0, 0);
                        setTimeout(() => setLock(false), config.animationDelay);
                    }, 25);
                }, config.animationDelay);
            }
        } else {
            // First article, show everything
            addClass(elements.body, 'is-article-visible');
            
            setTimeout(() => {
                elements.header.style.display = 'none';
                elements.footer.style.display = 'none';
                elements.main.style.display = 'flex';
                article.style.display = 'block';
                
                // Ensure article starts at top
                article.scrollTop = 0;
                
                setTimeout(() => {
                    addClass(article, 'active');
                    activeArticle = article;
                    window.scrollTo(0, 0);
                    setTimeout(() => setLock(false), config.animationDelay);
                }, 25);
            }, config.animationDelay);
        }
    }

    /**
     * Hide article
     */
    function hideArticle(addState = true) {
        if (!elements.body.classList.contains('is-article-visible') || isLocked) {
            return;
        }

        setLock(true);

        if (addState) {
            history.pushState(null, null, '#');
        }

        if (activeArticle) {
            removeClass(activeArticle, 'active');
            
            // Hide back-to-top button when closing article
            hideBackToTop();
            
            // Reset article scroll position
            activeArticle.scrollTop = 0;
            
            setTimeout(() => {
                activeArticle.style.display = 'none';
                elements.main.style.display = 'none';
                elements.footer.style.display = 'block';
                elements.header.style.display = 'flex';
                
                setTimeout(() => {
                    removeClass(elements.body, 'is-article-visible');
                    activeArticle = null;
                    window.scrollTo(0, 0);
                    setTimeout(() => setLock(false), config.animationDelay);
                }, 25);
            }, config.animationDelay);
        }
    }

    // ===================================
    // Event Handlers
    // ===================================
    
    /**
     * Handle navigation clicks
     */
    function handleNavClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const id = href.substring(1);
        if (id && document.getElementById(id)) {
            location.hash = href;
        }
    }

    /**
     * Handle close button clicks
     */
    function handleCloseClick(e) {
        e.preventDefault();
        e.stopPropagation();
        location.hash = '';
    }

    /**
     * Handle body clicks (to close articles)
     */
    function handleBodyClick(e) {
        if (elements.body.classList.contains('is-article-visible')) {
            hideArticle(true);
        }
    }

    /**
     * Handle article clicks (prevent close)
     */
    function handleArticleClick(e) {
        e.stopPropagation();
    }

    /**
     * Handle keyboard events
     */
    function handleKeyDown(e) {
        if (e.keyCode === 27) { // ESC key
            if (elements.body.classList.contains('is-article-visible')) {
                hideArticle(true);
            }
        }
    }

    /**
     * Handle hash changes
     */
    function handleHashChange(e) {
        const hash = location.hash;
        
        // Empty hash or just #
        if (!hash || hash === '#') {
            e.preventDefault();
            e.stopPropagation();
            hideArticle();
            return;
        }
        
        // Check if hash corresponds to an article
        const id = hash.substring(1);
        const article = document.getElementById(id);
        
        if (article && article.tagName === 'ARTICLE') {
            e.preventDefault();
            e.stopPropagation();
            showArticle(id);
        }
    }

    /**
     * Handle form submissions
     */
    function handleFormSubmit(e) {
        const form = e.target;
        const formData = new FormData(form);
        
        // Simple form validation
        const name = formData.get('name');
        const email = formData.get('_replyto'); // Changed from 'email' to '_replyto' for Formspree
        const message = formData.get('message');
        
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        
        // Form is valid, let it submit to Formspree
        // Formspree will handle the submission and show a confirmation page
    }

    /**
     * Handle scroll events for back-to-top button
     */
    function handleScroll() {
        if (!elements.backToTop) return;
        
        // Only show back-to-top button when inside an article
        const isArticleVisible = elements.body.classList.contains('is-article-visible');
        
        if (!isArticleVisible) {
            // Hide button if no article is open
            if (elements.backToTop.classList.contains('visible')) {
                hideBackToTop();
            }
            return;
        }
        
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 300) {
            showBackToTop();
        } else {
            hideBackToTop();
        }
    }

    /**
     * Handle scroll events within articles
     */
    function handleArticleScroll(e) {
        if (!elements.backToTop) return;
        
        // Only show back-to-top button when inside an article
        const isArticleVisible = elements.body.classList.contains('is-article-visible');
        
        if (!isArticleVisible) {
            return;
        }
        
        const article = e.target;
        const scrollTop = article.scrollTop;
        
        if (scrollTop > 300) {
            showBackToTop();
        } else {
            hideBackToTop();
        }
    }

    /**
     * Handle back-to-top click
     */
    function handleBackToTopClick(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event from bubbling up and closing articles
        
        // Check if we're inside an active article
        const activeArticle = document.querySelector('#main article.active');
        
        if (activeArticle) {
            // Scroll the article to top
            activeArticle.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Scroll the window to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    // ===================================
    // Initialization
    // ===================================
    
    /**
     * Handle resume section navigation
     */
    function handleResumeNavClick(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (!targetSection) return;
        
        // Hide all resume sections
        const allSections = document.querySelectorAll('.resume-section');
        allSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Remove active class from all resume nav links
        const resumeLinks = document.querySelectorAll('.resume-link');
        resumeLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show target section
        targetSection.style.display = 'block';
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to top of section
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    /**
     * Handle protected email link click
     */
    function handleEmailClick(e) {
        e.preventDefault();
        const link = e.currentTarget;
        const user = link.getAttribute('data-user');
        const domain = link.getAttribute('data-domain');
        
        if (user && domain) {
            window.location.href = 'mailto:' + user + '@' + domain;
        }
    }

    // ===================================
    // Language Switching
    // ===================================
    
    /**
     * Set language and update UI
     */
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // For input elements, update value attribute
                if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'reset')) {
                    element.value = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });
        
        // Update resume download link based on language
        const resumeDownload = document.getElementById('resume-download');
        if (resumeDownload) {
            const hrefAttr = `data-href-${lang}`;
            const newHref = resumeDownload.getAttribute(hrefAttr);
            if (newHref) {
                resumeDownload.href = newHref;
            }
        }
        
        // Update language toggle button
        const langToggle = document.querySelector('.lang-current');
        if (langToggle) {
            langToggle.textContent = lang.toUpperCase();
        }
        
        // Update title attribute
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            langBtn.title = lang === 'en' 
                ? 'Switch to French / Passer au français' 
                : 'Switch to English / Passer à l\'anglais';
        }
    }
    
    /**
     * Toggle between languages
     */
    function toggleLanguage() {
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        setLanguage(newLang);
    }
    
    /**
     * Handle language toggle click
     */
    function handleLanguageToggle(e) {
        e.preventDefault();
        e.stopPropagation(); // Prevent event from bubbling up and closing articles
        toggleLanguage();
    }

    /**
     * Initialize all event listeners
     */
    function initEventListeners() {
        // Navigation links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });

        // Resume section navigation
        const resumeLinks = document.querySelectorAll('.resume-link');
        resumeLinks.forEach(link => {
            link.addEventListener('click', handleResumeNavClick);
        });

        // Close buttons
        elements.closeButtons.forEach(button => {
            button.addEventListener('click', handleCloseClick);
        });

        // Body click to close articles
        elements.body.addEventListener('click', handleBodyClick);

        // Prevent article clicks from closing
        elements.articles.forEach(article => {
            article.addEventListener('click', handleArticleClick);
        });

        // Keyboard events
        window.addEventListener('keydown', handleKeyDown);

        // Hash change events
        window.addEventListener('hashchange', handleHashChange);

        // Form submissions
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', handleFormSubmit);
        });

        // Scroll events
        window.addEventListener('scroll', handleScroll);

        // Back to top button
        if (elements.backToTop) {
            elements.backToTop.addEventListener('click', handleBackToTopClick);
        }

        // Protected email link
        const emailLinks = document.querySelectorAll('.email-link');
        emailLinks.forEach(link => {
            link.addEventListener('click', handleEmailClick);
        });

        // Language toggle
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.addEventListener('click', handleLanguageToggle);
        }

        // Add scroll listeners to all articles for back-to-top button
        elements.articles.forEach(article => {
            article.addEventListener('scroll', handleArticleScroll);
        });
    }

    /**
     * Initialize page load animations
     */
    function initPageLoad() {
        // Remove preload class after delay
        setTimeout(() => {
            removeClass(elements.body, 'is-preload');
        }, config.preloadDelay);

        // Check if there's a hash on load
        if (location.hash && location.hash !== '#') {
            const id = location.hash.substring(1);
            const article = document.getElementById(id);
            
            if (article && article.tagName === 'ARTICLE') {
                setTimeout(() => {
                    showArticle(id, true);
                }, config.preloadDelay + 100);
            }
        }
    }

    /**
     * Initialize articles display
     */
    function initArticles() {
        // Hide all articles initially
        elements.articles.forEach(article => {
            article.style.display = 'none';
        });
        
        // Hide main initially
        elements.main.style.display = 'none';
    }

    /**
     * Initialize resume sections
     */
    function initResumeSections() {
        // Set first resume nav link as active
        const firstResumeLink = document.querySelector('.resume-link');
        if (firstResumeLink) {
            firstResumeLink.classList.add('active');
        }
        
        // Show first resume section by default
        const firstSection = document.getElementById('resume-experience');
        if (firstSection) {
            firstSection.style.display = 'block';
        }
    }

    /**
     * Main initialization
     */
    function init() {
        initArticles();
        initResumeSections();
        initEventListeners();
        initPageLoad();
        setLanguage(currentLang); // Initialize language
    }

    // ===================================
    // Start Application
    // ===================================
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
