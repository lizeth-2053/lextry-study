# Lextry Study — Frontend Foundation

**Modern premium education SaaS platform** for university students. Combines academic planning, curriculum tracking, grades, AI study tools, focus/pomodoro, and productivity in one intelligent system.

## 🎨 Design System: Warm Precision

**Color Palette:**
- Background: `#F8F6F2` (warm parchment)
- Cards: `#ECE4D8` (soft sand)
- Primary: `#B9A7FF` (lavender violet)
- Text: `#1F2233` (near-black blue)
- Secondary: `#AEBED8` (blue-grey)

**Typography:**
- Display: Playfair Display (serif) — expressive headlines
- Body: DM Sans — clean, modern, highly legible
- Mono: JetBrains Mono — academic data, stats

**Features:**
- ✨ Dark mode support with CSS variables
- 🎬 Framer Motion animations
- 📱 Fully responsive (mobile-first)
- ♿ Accessible components
- 🎯 Production-ready

## 📁 File Structure

```
app/
  page.tsx              # Home page (Next.js 15 App Router)
  globals.css           # Global styles & theme system

components/
  ui/
    Button.tsx          # Reusable button component
    Card.tsx            # Reusable card component
    Badge.tsx           # Reusable badge component
  sections/
    HeroSection.tsx     # Hero with parallax
    FeaturesSection.tsx # Features grid (2+1 asymmetric)
    ToolsShowcase.tsx   # Horizontal marquee of tools
    DashboardPreview.tsx # Dashboard mockup
    TestimonialsSection.tsx # Testimonials carousel
    CTASection.tsx      # Call-to-action section
  FadeIn.tsx            # Scroll-triggered animations
  Navbar.tsx            # Navigation with theme toggle
  Footer.tsx            # Footer with links

lib/
  utils.ts              # Utility functions (cn, etc.)
```

## 🚀 Getting Started

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
npm start
```

## 🎨 Component Usage

### Button

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="default" size="lg">
  Comenzar gratis
</Button>
```

**Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes:** `default`, `sm`, `lg`, `icon`

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Badge

```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="default">IA</Badge>
```

**Variants:** `default`, `secondary`, `destructive`, `outline`

### FadeIn Animation

```tsx
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

<FadeIn delay={0.1} direction="up">
  <h2>Animated heading</h2>
</FadeIn>

<StaggerContainer staggerDelay={0.1}>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
</StaggerContainer>
```

## 🎯 CSS Classes (Design System)

### Display Heading
```html
<h1 class="lx-display">Your heading</h1>
```

### Cards
```html
<div class="lx-card">Card content</div>
```

### Buttons
```html
<button class="lx-btn-primary">Primary</button>
<button class="lx-btn-ghost">Ghost</button>
```

### Badges
```html
<span class="lx-badge lx-badge-primary">Badge</span>
```

### Gradient Text
```html
<h2 class="lx-gradient-text">Gradient text</h2>
```

### Shadows
```html
<div class="shadow-card">Card shadow</div>
<div class="shadow-primary-glow">Glow shadow</div>
```

## 🌙 Dark Mode

Dark mode is automatically supported via CSS variables. Toggle via the theme button in the navbar or programmatically:

```tsx
import { useTheme } from 'next-themes';

const { theme, setTheme } = useTheme();
setTheme(theme === 'dark' ? 'light' : 'dark');
```

## 📦 Dependencies

- **Next.js 15** — React framework
- **React 19** — UI library
- **Framer Motion** — Animations
- **Tailwind CSS 4** — Utility-first CSS
- **shadcn/ui** — Component library
- **next-themes** — Theme management
- **class-variance-authority** — Component variants
- **clsx + tailwind-merge** — Class name utilities

## 🔧 Configuration

### Tailwind Config
Tailwind is configured with custom radius, colors from CSS variables, and optimized for the Warm Precision design system.

### Font Loading
Google Fonts are preloaded in `globals.css`:
- Playfair Display (serif)
- DM Sans (sans-serif)
- JetBrains Mono (monospace)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels on interactive elements
- Focus visible states
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Reduced motion support

## 🎬 Animation Guidelines

- **Duration:** 200-350ms for UI animations
- **Easing:** `cubic-bezier(0.23, 1, 0.32, 1)` for snappy feel
- **GPU optimized:** Only animate `transform` and `opacity`
- **Reduced motion:** Respected via `@media (prefers-reduced-motion: reduce)`

## 📄 License

MIT

---

**Built with ♥ for students who want to master their university career.**
