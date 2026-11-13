# PulseFlow — Engineering Velocity & Sprint Intelligence SaaS Landing Page

A responsive, interactive SaaS product landing page built with **React** and **Tailwind CSS** for the Sankar Group Front-End Development Internship Assignment.

- **Live Website:** [Paste your Vercel/Netlify URL here]
- **GitHub Repository:** [Paste your GitHub Repo URL here]

---

## Technologies Used
- **React 18** (Functional components, Hooks: `useState`, `useEffect`, `IntersectionObserver`)
- **Tailwind CSS 3** (Responsive grid/flexbox layouts, utility styling, mobile-first breakpoints)
- **Vite** (Fast local development server and production bundler)

---

## Project Structure

    pulseflow-saas/
    ├── public/
    │   └── favicon.svg
    ├── screenshots/
    │   ├── desktop.png
    │   └── mobile.png
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── HeroSection.jsx
    │   │   ├── FeaturesSection.jsx
    │   │   ├── HowItWorksSection.jsx
    │   │   ├── PricingSection.jsx
    │   │   ├── ContactDemoSection.jsx
    │   │   ├── Footer.jsx
    │   │   └── SignUpModal.jsx
    │   ├── data/
    │   │   └── landingData.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    └── README.md

---

## Features & Interactions
- **Sticky Glassmorphism Navbar**: Smooth anchor navigation, scroll-spy active section highlighting, and a responsive mobile drawer menu.
- **Interactive Hero Dashboard Preview**: Displays live sprint metrics with a **Simulate Live Sync** toggle that updates velocity bars and PR status badges in real time.
- **Platform Features Grid**: Four responsive capability cards with custom SVG icons and key impact metrics.
- **Interactive 3-Step Workflow**: Tabbed walkthrough updating a live preview panel for each onboarding stage.
- **Dynamic Pricing Toggle & Trial Modal**: Switch between Monthly and Annual (20% discount) billing; selecting any plan opens the Sign-Up modal with that plan pre-selected and client-side validation.
- **Validated Demo Request Form**: Validates full name, email syntax, team size, and message length before showing an inline confirmation screen.

---

## Local Setup Instructions

1. **Clone the repository and open the project folder:**

       git clone https://github.com/YOUR_USERNAME/pulseflow-saas.git
       cd pulseflow-saas

2. **Install dependencies:**

       npm install

3. **Start the local development server:**

       npm run dev

4. **Open in your browser:**
   Visit `http://localhost:5173` in your browser.

---

## Screenshots

### Desktop View
![Desktop Layout](./screenshots/desktop.png)

### Mobile View
![Mobile Layout](./screenshots/mobile.png)

---

## Design Choices & Challenges Solved
I designed PulseFlow around a high-contrast slate and indigo palette so engineering metrics, primary CTAs, and interactive states maintain clear visual hierarchy across mobile and desktop viewports. Separating static content into `src/data/landingData.js` and isolating each landing page section into dedicated components kept the JSX clean and maintainable. One key challenge was ensuring smooth navigation on smaller viewports without cluttering the header; I solved this with a collapsible mobile navigation drawer that automatically closes upon link selection and syncs with an `IntersectionObserver` scroll-spy on desktop. Client-side validation was implemented on both the demo request form and trial modal to provide immediate feedback without requiring a backend.