# Higher Power - Project Structure 

## 📁 Organized File Structure

```
src/
├── components/              # All React components
│   ├── index.js            # Component exports
│   ├── layout/             # Layout components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   └── Footer.jsx      # Footer
│   ├── sections/           # Page sections
│   │   ├── HeroSection.jsx # Hero/landing section
│   │   └── TourSection.jsx # Tour dates section
│   └── ui/                 # UI components
│       └── LoadingSpinner.jsx # Loading animation
├── styles/                 # CSS organization
│   └── clean-components.css # Clean, readable CSS classes
├── locales/               # Internationalization
│   ├── index.js          # i18n configuration
│   ├── en.json           # English translations
│   └── it.json           # Italian translations
├── hooks/                # Custom React hooks
│   └── useScrollAnimation.js
├── App.jsx              # Main app component
└── index.css           # Main styles + imports
```

## 🎨 Clean CSS Classes

Instead of long Tailwind chains like:
```jsx
className="bg-gradient-to-r from-blue-900 via-cyan-800 to-teal-700 text-white fixed w-full z-50 shadow-md backdrop-filter backdrop-blur-lg"
```

We now use clean, semantic classes:
```jsx
className="navbar navbar-glass"
```

## 📝 CSS Class Categories

### Layout Classes
- `navbar`, `navbar-glass`, `navbar-container`
- `hero`, `hero-bg`, `hero-title`
- `section`, `section-container`, `section-header`
- `footer`, `footer-bg`, `footer-grid`

### Component Classes  
- `card`, `card-glass`, `card-primary`, `card-hover`
- `btn`, `btn-primary`, `btn-primary-hover`, `btn-disabled`
- `status-badge`, `status-sold-out`, `status-available`

### Layout Utilities
- `grid-responsive`, `grid-md-2`, `grid-md-3`, `grid-lg-2`

### Text Styles
- `text-primary` (yellow), `text-secondary` (cyan), `text-muted`

### Animations
- All modern animations preserved with cleaner names

## 🌍 Internationalization Structure

Organized by categories:
```json
{
  "navigation": { "home": "Home", ... },
  "hero": { "title": "Higher Power", ... },
  "about": { "title": "About Us", ... },
  "tour": { "title": "Tour Dates", ... }
}
```

Usage: `t('navigation.home')` instead of `t('home')`

## 🚀 Benefits

1. **Readable Code**: `navbar` vs `bg-gradient-to-r from-blue-900...`
2. **Maintainable**: Change styles in one place
3. **Organized**: Clear file structure and component separation
4. **Scalable**: Easy to add new components and sections
5. **Professional**: Industry-standard organization patterns

## 🎯 Usage Examples

### Component Import (Old vs New)
```jsx
// Old
import Navbar from "./Navbar"
import Footer from "./Footer"

// New  
import { Navbar, Footer } from "./components"
```

### CSS Classes (Old vs New)
```jsx
// Old
<div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">

// New
<div className="card card-primary card-glass card-hover">
```

### Translations (Old vs New)
```jsx
// Old
t('hero_title')

// New
t('hero.title')
```

This structure follows modern React best practices and makes the codebase much more maintainable! 🎉
