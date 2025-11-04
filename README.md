# Portfolio Website - Naveen Johnson V

A modern, responsive, bilingual portfolio website showcasing Data Science and AI expertise with professional experience and educational background.

## 📋 Recent Updates

- ✅ **Bilingual Support**: Full English and French translations with persistent language preference
- ✅ **Professional Links**: Added clickable links to EURECOM and ALTEN Labs
- ✅ **Employment Status**: Updated to reflect "Former Research Intern" status
- ✅ **Back-to-Top Button**: Added smooth scroll-to-top functionality
- ✅ **Enhanced UX**: Improved animations and transitions
- ✅ **Code Syntax Highlighting**: Integrated Highlight.js with Sunset theme
- ✅ **Modular Architecture**: Separated translations into dedicated module

## 🌟 Features

- **Bilingual Support (🇬🇧/🇫🇷)**: Full English and French translations with seamless language switching
- **Modern Design**: Clean, professional single-page application with modal-based navigation
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Fast Loading**: Minimal dependencies, optimized assets
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation support
- **Smooth Animations**: CSS transitions and transforms for better UX
- **Back-to-Top Button**: Smooth scroll navigation for enhanced UX
- **Dynamic Content**: Real-time language switching without page reload

## 📁 Project Structure

```
naveenjohnsonv.github.io/
├── index.html              # Main HTML file with bilingual content
├── CNAME                   # GitHub Pages custom domain
├── README.md              # This file
├── resources/
│   ├── css/
│   │   ├── style.css      # Main stylesheet with CSS variables
│   │   └── sunset.min.css # Code syntax highlighting theme
│   ├── scripts/
│   │   ├── index.js       # Navigation and interaction logic
│   │   └── translations.js # Bilingual translations (EN/FR)
│   └── images/
│       ├── header.jpg     # Hero background image
│       ├── me.jpg         # Profile picture
│       ├── favicon-32x32.png
│       ├── arrow-up.svg   # Back-to-top button icon
│       ├── github.svg     # GitHub icon
│       ├── 1.webp         # Project/Background images
│       ├── 2.webp
│       ├── 3.webp
│       └── 4.webp
```

## 🎨 Design System

### Color Palette
- **Background**: `#1b1f22` (Dark charcoal)
- **Accent**: `rebeccapurple` (#663399)
- **Text**: White with varying opacity
- **Borders**: White with alpha transparency

### Typography
- **Font Family**: Source Sans Pro (with system fallbacks)
- **Font Weights**: Light (300), Regular (400), Bold (600)
- **Responsive Sizing**: 16px base, scales down on smaller devices

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 3rem
- XL: 4rem

## 🚀 Sections

1. **Header**: Professional tagline with links to EURECOM and ALTEN Labs
2. **About**: Professional background, expertise areas, and current focus
3. **Background**: Educational and professional experience with detailed descriptions
4. **Skills**: Technical skills organized by category (Languages, Frameworks, Tools, Domains)
5. **Contact**: Social media links and professional profiles

## 🌍 Internationalization

The website supports **English** and **French** with:
- **Language Switcher**: Toggle button in the header (🇬🇧/🇫🇷)
- **Translation System**: Centralized translations in `resources/scripts/translations.js`
- **localStorage Persistence**: User language preference is saved
- **Real-time Switching**: No page reload required
- **Complete Coverage**: All UI text, descriptions, and content translated

### Translation Structure

```javascript
const translations = {
    en: {
        'header.tagline': 'English text...',
        'nav.about': 'About',
        // ... more translations
    },
    fr: {
        'header.tagline': 'Texte français...',
        'nav.about': 'À Propos',
        // ... more translations
    }
};
```

### Adding New Translations

1. Add translation keys to both `en` and `fr` objects in `translations.js`
2. Use `data-i18n` attribute in HTML:
```html
<p data-i18n="your.translation.key">Default text</p>
```
3. The language switcher will automatically update the content

## 📱 Responsive Breakpoints

- **Desktop**: > 1680px
- **Laptop**: 980px - 1680px
- **Tablet**: 736px - 980px
- **Mobile**: < 736px
- **Small Mobile**: < 480px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with i18n support
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties, Animations)
- **JavaScript (ES6+)**: Vanilla JS with modular architecture
  - Internationalization system
  - Dynamic content loading
  - Local storage for user preferences
- **Highlight.js**: Syntax highlighting for code blocks (Sunset theme)
- **Font Awesome**: Icon library
- **Git**: Version control
- **GitHub Pages**: Hosting and deployment

## 💻 Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/naveenjohnsonv/naveenjohnsonv.github.io.git
cd naveenjohnsonv.github.io
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000`

### Customization

#### Updating Content

**Personal Information**: 
1. Edit `index.html` header section for default (English) content
2. Update `resources/scripts/translations.js` for both languages:
```javascript
'header.tagline': 'Your tagline in English',
// In fr section:
'header.tagline': 'Votre slogan en français'
```

**Background/Experience**: 
1. Modify the timeline items in the `#background` article in `index.html`
2. Update corresponding translations in `translations.js` for bilingual support

**Skills**: Update the skills grid in the `#skills` article and translate category names in `translations.js`

**Adding New Sections**: 
1. Add HTML structure in `index.html`
2. Add navigation link with `data-i18n` attribute
3. Add translations for all text content in both languages
4. Update navigation logic in `index.js` if needed

#### Styling

All styling is in `resources/css/style.css`. Key customization points:

1. **Colors**: Modify CSS variables in `:root`
```css
:root {
    --color-accent: your-color-here;
    --color-bg: your-background-color;
}
```

2. **Fonts**: Change font families in CSS variables
```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

3. **Spacing**: Adjust spacing variables
```css
:root {
    --spacing-md: 2rem;
}
```

#### JavaScript

**Navigation (`resources/scripts/index.js`)**:
- Article show/hide transitions with smooth animations
- URL hash navigation for direct linking
- Keyboard shortcuts (ESC to close modals)
- Back-to-top button with scroll detection
- Smooth scroll behavior

**Internationalization (`resources/scripts/translations.js`)**:
- Language switching (English ⇄ French)
- localStorage persistence for user preference
- Dynamic content updates without page reload
- Centralized translation management
- Automatic text replacement using `data-i18n` attributes

## 📦 Deployment

### GitHub Pages

1. Push changes to the `main` branch
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io`

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS with your domain provider:
   - A record: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME record pointing to `yourusername.github.io`

## ⚡ Performance Optimization

- **Images**: WebP format with optimized file sizes
- **CSS**: Modular stylesheets with efficient selectors
- **JavaScript**: Vanilla JS with no framework overhead
  - Modular architecture (index.js + translations.js)
  - Event delegation for better performance
  - localStorage for client-side state management
- **Fonts**: System fonts as fallbacks (Source Sans Pro)
- **Lazy Loading**: Deferred script loading
- **Caching**: Browser caching for static assets
- **Code Highlighting**: CDN-loaded Highlight.js with Sunset theme

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: naveenjohnsonv@gmail.com
- **LinkedIn**: [linkedin.com/in/naveenjohnsonv](https://linkedin.com/in/naveenjohnsonv)
- **GitHub**: [github.com/naveenjohnsonv](https://github.com/naveenjohnsonv)
- **Portfolio**: [naveenjohnsonv.fr](http://naveenjohnsonv.fr)

## 🎯 Key Features Highlight

### Professional Content
- **Current Status**: MSc in Data Science @ [EURECOM](https://www.eurecom.fr)
- **Former Position**: Research Intern @ [ALTEN Labs](https://www.alten.com)
- **Expertise**: AI Planning, NLP, Knowledge Engineering
- **Complete Background**: Detailed timeline of education and experience

### Technical Features
- **Zero Framework Dependencies**: Pure vanilla JavaScript
- **Bilingual from Ground Up**: Not an afterthought, built-in from the start
- **User Preference Memory**: Language choice persists across sessions
- **Modern ES6+ Code**: Clean, maintainable, well-documented
- **Semantic HTML**: Proper structure for SEO and accessibility

### User Experience
- **Instant Language Switch**: No page reload, smooth transitions
- **Keyboard Navigation**: Full keyboard support (ESC to close, etc.)
- **Smooth Scrolling**: Enhanced navigation with back-to-top button
- **Mobile-First**: Responsive design that works on all devices
- **Fast Load Times**: Optimized assets and minimal dependencies

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons by [Font Awesome](https://fontawesome.com)
- Code highlighting by [Highlight.js](https://highlightjs.org)
- Hosted on [GitHub Pages](https://pages.github.com)

---

Made with ❤️ in France

