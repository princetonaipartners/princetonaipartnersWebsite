# Assets Folder

This folder contains all website assets organized by type.

## Folder Structure

```
assets/
├── css/           # Stylesheets (future: external CSS)
├── js/            # JavaScript files
│   └── main.js   # Main JS: Loads shared header and handles interactivity
├── images/        # All images (logos, icons, photos, etc.)
│   └── [Upload logos here]
└── includes/      # Reusable HTML components
    └── header.html # Shared header with navigation (used across all pages)
```

## How It Works

### Shared Header System
- **header.html** contains the full navigation (desktop + mobile)
- **main.js** loads the header into pages with `<div id="header-placeholder"></div>`
- Update navigation once in `header.html`, applies to all pages automatically

### Usage in HTML Files
```html
<!-- Add this where you want the header -->
<div id="header-placeholder"></div>

<!-- Load the JavaScript at end of body -->
<script src="assets/js/main.js"></script>
```

## Adding Your Logo
1. Upload logo files to `assets/images/`
2. Recommended formats:
   - `logo.png` or `logo.svg` - main logo
   - `logo-white.png` - for dark backgrounds (if needed)
   - `favicon.ico` - browser tab icon
3. Update header.html to use: `<img src="assets/images/logo.png" alt="Princeton AI Partners">`
