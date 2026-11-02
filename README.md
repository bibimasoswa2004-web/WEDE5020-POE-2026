# WEDE5020 POE 2026 - Part 2

## Project Title
[Roodepoort paws Rescue ] Website - Responsive Web Development

## Student Information
- Name: Bibi Masoswa
- Student Number: [ST10532945]
- Module: WEDE5020
- Part: 2 - CSS Styling & Responsive Design

## Live Website Links
- GitHub Repository: https://github.com/bibimasoswa2004-web/WEDE5020-POE-2026
- Live Website (GitHub Pages): https://bibimasoswa2004-web.github.io/WEDE5020-POE-2026/

## Project Overview - Part 2 Updates
In Part 2, I have enhanced the Part 1 website with external CSS styling and responsive design to ensure optimal user experience across all devices.

### 2. CSS Styling for Desktop Solution
**2.1 External Stylesheet:**
- Created `css/style.css` and linked it to all 5 HTML pages
- Used consistent naming convention: style.css
- All pages use `<link rel="stylesheet" href="css/style.css">`

**2.2 Base Style:**
- Set default styles: font-family 'Segoe UI', font-size 16px, colour scheme (#2c3e50, #3498db, #ffffff)
- Margin/padding reset: * { margin:0; padding:0; box-sizing:border-box }
- CSS reset applied for cross-browser consistency

**2.3 Typography Styles:**
- Font families, sizes (rem, em), line-height 1.6, letter-spacing, font-weight
- Responsive typography scaling

**2.4 Layout Structure:**
- Used Flexbox and CSS Grid for layout
- display: flex, flex-direction, justify-content, align-items
- grid-template-columns for multi-column layouts
- Cascading nature of CSS utilized to minimize selectors

**2.5 Visual Styles:**
- CSS properties: color, background-color, border, border-radius, box-shadow
- Pseudo-classes: :hover, :focus, :active for interactive elements
- Smooth transitions and animations

### 3. Responsive Design Implementation
**3.1 Breakpoints:**
- Desktop: 1024px and above (multi-column layout)
- Tablet: 768px - 1023px (2-column, adjusted navigation)
- Mobile: 480px - 767px and below 480px (single column, hamburger menu)
- Used media queries: @media (max-width: 768px), @media (max-width: 480px)

**3.2 Relative Units:**
- Used rem for font sizes and spacing (ensures scalability)
- Used em for padding/margins
- Used % for widths and heights: width: 100%, max-width: 1200px

**3.3 Responsive Images:**
- img { max-width: 100%; height: auto; display: block; }
- Used responsive image techniques for optimization
- Images adapt to container size

**3.4 Testing and Iteration:**
- Tested using browser DevTools (Chrome responsive mode)
- Tested on actual devices: desktop, tablet, mobile phone
- Iterated design for optimal UX
- Prioritised content as primary focus
- Kept design simple and user-friendly

## Screenshot Evidence - Responsive Design
*Screenshots taken from live GitHub Pages site*

### Desktop View (1024px+)
- Layout: Multi-column grid, horizontal navigation
- [Insert Screenshot: Desktop full page]
- Evidence: Full navigation visible, 3-column services, side-by-side content

### Tablet View (768px)
- Layout: 2-column, adjusted font sizes, collapsible navigation
- [Insert Screenshot: Tablet - iPad view]
- Evidence: Content reflows, navigation adapts, readable font sizes

### Mobile View (480px and below)
- Layout: Single column, hamburger menu, stacked content
- [Insert Screenshot: Mobile phone view]
- Evidence: Single column, large touch targets, readable without zoom, hamburger menu working

*Testing conducted on: Chrome, Edge, Firefox - Windows 11; Mobile: Android Chrome*

## Changelog

### Part 1 Feedback Implementation
- **Fixed Repository Structure:** Renamed css.css to css/style.css and js.js to js/script.js as per feedback to use proper folder structure
- **Improved File Organization:** Created dedicated css/ and js/ folders for better maintainability
- **Linked External Resources:** Correctly linked external CSS and JS files using relative paths
- **Validated HTML:** Ensured all HTML files have proper doctype, meta viewport tag for responsiveness

### Part 2 New Entries
- **2026-11-02:** Created external stylesheet css/style.css (1200+ lines)
    - Added CSS reset, base styles, typography, layout, visual styles
    - Implemented CSS Grid and Flexbox layouts
    - Added hover, focus, active states
- **2026-11-02:** Implemented responsive design
    - Added breakpoints: 1024px, 768px, 480px
    - Converted fixed units to relative units (rem, em, %)
    - Made images responsive
    - Multi-column to single-column transition
- **2026-11-02:** Enhanced JavaScript js/script.js
    - Mobile hamburger menu toggle functionality
    - Form validation for enquiry and contact pages
    - Smooth scrolling
- **2026-11-02:** Enabled GitHub Pages for live deployment
- **2026-11-02:** Updated README with Part 2 documentation and changelog

## Technologies Used
- HTML5 - Semantic markup
- CSS3 - External stylesheet, Flexbox, Grid, Media Queries, Animations
- JavaScript - DOM manipulation, form validation, mobile menu
- GitHub - Version control, Pages hosting
- Browser DevTools - Testing responsive design

## References
- MDN Web Docs - CSS Flexbox, Grid, Media Queries (https://developer.mozilla.org)
- W3Schools - Responsive Web Design Tutorial
- IIE WEDE5020 Module Manual 2026 - Part 2 Guidelines
- Google Fonts - Typography best practices
- CSS Tricks - A Complete Guide to Flexbox and Grid

## Submission Requirements Met
- [x] HTML Files: All 5 pages submitted to remote repository (index.html, about.html, services.html, enquiry.html, contact.html)
- [x] CSS: External stylesheet css/style.css
- [x] JavaScript: External js/script.js
- [x] Responsive Design: Media queries, relative units, responsive images
- [x] GitHub Repository Link: Ready for LMS submission
- [x] README: Updated with Part 2 info, Changelog, References, Screenshot evidence placeholder
- [x] GitHub Pages: Live site enabled

## Additional Tips Implemented
- Prioritise Content: Content-first design, clear hierarchy
- Keep It Simple: Minimalist, clean design avoiding complexity
- Test Thoroughly: Tested on various devices and browsers (Chrome, Edge, Firefox)
- Stay Up-to-Date: Used modern CSS trends - Flexbox, Grid, CSS variables, transitions
