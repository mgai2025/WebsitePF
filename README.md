# Premium Fresh Exports

A professional B2B agricultural export website built with Next.js 14 and Tailwind CSS. Designed for premium Indian agricultural exporters targeting UK and European markets.

![Premium Fresh Exports](public/images/hero-bg.jpg)

## 🌱 Features

- **Modern Design**: Clean, professional design with green/white color palette
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Fast Performance**: Optimized images and clean code for fast loading
- **Accessible**: Proper heading hierarchy, alt text, and color contrast

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/premiumfresh-exports.git
   cd premiumfresh-exports
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration:
   - `CONTACT_EMAIL`: Your contact email address
   - `WHATSAPP_NUMBER`: Your WhatsApp number with country code
   - `CALENDLY_URL`: Your Calendly scheduling link
   - `NEXT_PUBLIC_SITE_URL`: Your production domain

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── public/
│   └── images/
│       ├── hero-bg.jpg              # Hero section background
│       └── products/                 # Product category images
│           ├── fruits-vegetables.jpg
│           ├── processed-foods.jpg
│           ├── cereals-grains.jpg
│           ├── tea-coffee.jpg
│           └── spices.jpg
├── src/
│   ├── app/
│   │   ├── globals.css              # Global styles and Tailwind
│   │   ├── layout.js                # Root layout with SEO
│   │   └── page.js                  # Home page
│   └── components/
│       ├── Header.jsx               # Sticky navigation
│       ├── Footer.jsx               # Site footer
│       └── sections/
│           ├── Hero.jsx             # Hero section
│           ├── Products.jsx         # Product categories
│           ├── WhyUs.jsx            # Three pillars
│           ├── Certifications.jsx   # Quality badges
│           ├── Insights.jsx         # Blog previews
│           ├── Innovation.jsx       # Future roadmap
│           └── Contact.jsx          # Contact form
├── .env.example                     # Environment template
├── tailwind.config.js               # Tailwind configuration
├── next.config.js                   # Next.js configuration
└── package.json                     # Dependencies
```

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link or create a new project

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/premiumfresh-exports.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add your production environment variables

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

## 🔧 Customization

### Updating Colors

Edit `tailwind.config.js` to change the color palette:

```javascript
colors: {
  primary: {
    DEFAULT: '#2D8A73',  // Main green
    dark: '#236B5A',     // Darker green
    light: '#3AA88D',    // Lighter green
  },
  // ... other colors
}
```

### Updating Content

- **Products**: Edit `src/components/sections/Products.jsx`
- **Why Us Pillars**: Edit `src/components/sections/WhyUs.jsx`
- **Certifications**: Edit `src/components/sections/Certifications.jsx`
- **Blog Articles**: Edit `src/components/sections/Insights.jsx`
- **Contact Info**: Edit `src/components/sections/Contact.jsx` and `src/components/Footer.jsx`

### Adding Product Pages

The structure supports individual product pages. Create:
```
src/app/products/[slug]/page.js
```

### Adding Blog Posts

Create blog post pages at:
```
src/app/insights/[slug]/page.js
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔒 Security Considerations

- Contact form currently uses client-side simulation
- For production, integrate with:
  - Email service (SendGrid, Mailgun, etc.)
  - Form backend (Formspree, Netlify Forms, etc.)
  - Or build a Next.js API route

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or customization requests, contact the development team.

---

Built with ❤️ for Premium Fresh Exports
