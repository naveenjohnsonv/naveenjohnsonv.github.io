# Portfolio Website - Naveen Johnson V

A modern, responsive portfolio website showcasing Data Science and Machine Learning projects.

## 🌟 Features

- **Modern Design**: Clean, professional single-page application with modal-based navigation
- **Fully Responsive**: Optimized for all device sizes (mobile, tablet, desktop)
- **Fast Loading**: Minimal dependencies, optimized assets
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation support
- **Smooth Animations**: CSS transitions and transforms for better UX

## 📁 Project Structure

```
naveenjohnsonv.github.io/
├── index.html              # Main HTML file
├── CNAME                   # GitHub Pages custom domain
├── README.md              # This file
├── resources/
│   ├── css/
│   │   └── style.css      # Main stylesheet with CSS variables
│   ├── scripts/
│   │   └── index.js       # Navigation and interaction logic
│   └── images/
│       ├── header.jpg     # Background image
│       ├── favicon-32x32.png
│       ├── arrow-up.svg
│       ├── github.svg
│       ├── 1.webp         # Project images
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

1. **About**: Professional background and experience
2. **Projects**: Showcases 4 major ML/DS projects with links
3. **Skills**: Technical skills organized by category
4. **Contact**: Contact form and social media links

## 📱 Responsive Breakpoints

- **Desktop**: > 1680px
- **Laptop**: 980px - 1680px
- **Tablet**: 736px - 980px
- **Mobile**: < 736px
- **Small Mobile**: < 480px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)**: Vanilla JS, no frameworks
- **Font Awesome**: Icon library
- **Git**: Version control

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

**Personal Information**: Edit `index.html` in the header section:
```html
<h1>Your Name</h1>
<p>Your tagline</p>
```

**Projects**: Modify the project cards in the `#projects` article:
```html
<div class="project-card">
    <div class="project-image">
        <img src="path/to/image.webp" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Title</h3>
        <p>Description...</p>
        <!-- Tags and links -->
    </div>
</div>
```

**Skills**: Update the skills grid in the `#skills` article.

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

The navigation logic is in `resources/scripts/index.js`. It handles:
- Article show/hide transitions
- URL hash navigation
- Keyboard shortcuts (ESC to close)
- Form validation

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

- **Images**: Use WebP format, optimized file sizes
- **CSS**: Single minified stylesheet
- **JavaScript**: Vanilla JS, minimal dependencies
- **Fonts**: System fonts as fallbacks
- **Lazy Loading**: Images load as needed
- **Caching**: Set appropriate cache headers

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
- **Portfolio**: [cv.naveen.rocks](http://cv.naveen.rocks)

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Icons by [Font Awesome](https://fontawesome.com)
- Hosted on [GitHub Pages](https://pages.github.com)

---

Made with ❤️ in France

