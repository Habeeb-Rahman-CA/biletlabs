# biletlabs | Official Portfolio Website

Welcome to biletlabs.

biletlabs is an independent product studio dedicated to creating simple, distraction-free applications for work and daily life. Our guiding philosophy is straightforward: "Less noise. More intention."

This website serves as the central showcase for our family of focused products. It is designed to be calm, legible, responsive, and completely free of digital clutter.

---

## The Product Family

### Bilet
A calm, distraction-free writing studio designed for anyone who wants a fast, clean place to think and write. It strips away noisy toolbars and complex cloud sync in favor of instant speed, comfortable typography, and complete personal privacy.
- Category: Writing & Notes
- Highlights: Distraction-free canvas, instant offline saving, comfortable reading fonts, and version history.

### Bilet-X
An unobtrusive desktop companion that floats gently at the edge of your screen. It keeps your quick notes, daily checklist, upcoming calendar events, clipboard history, focus timers, and music controls just one click away without opening heavy applications.
- Category: Desktop Productivity
- Highlights: Compact floating dock, quick scratchpad, clipboard history, and deep work focus timer.

### Bilo
A clean, easy-to-use workspace for organizing projects, tasks, and team milestones. It simplifies planning into five clear views: a Morning Focus briefing, an organized project checklist, a visual drag-and-drop board, a monthly calendar, and an archive of shipped work.
- Category: Projects & Tasks
- Highlights: Morning focus dashboard, task and subtask checklists, Kanban boards, and seamless offline support.

### LiftUp
A high-contrast fitness companion that unifies your workout routine and daily meal tracking into a single, distraction-free screen. Engineered for people who want consistent healthy habits without social feeds, ads, or subscription paywalls.
- Category: Fitness & Nutrition
- Highlights: Two-tap exercise logging, daily meal checklists, custom workout split planner, and gym-friendly high-contrast mode.

### Rūpa
A simple personal finance ledger designed to bring clarity to everyday spending. It discards spreadsheet headaches and ad-heavy budgeting apps in favor of fast mobile logging, debt tracking, and shared trip cost settlements.
- Category: Personal Finance
- Highlights: Sub-three-second expense logging, bilateral debt tracking, built-in group trip splits, and smart receipt scanning.

---

## Exploring the Portfolio Website

### Running the Website Locally
To view the portfolio website on your computer:

1. Open your terminal in this project folder.
2. Install the necessary files:
   ```bash
   npm install
   ```
3. Start the local preview:
   ```bash
   npm run dev
   ```
4. Open your web browser and go to:
   ```text
   http://localhost:5173
   ```

### Building for Web Deployment
To generate a production-ready package for website hosting:
```bash
npm run build
```
The optimized files will be created in the `dist` folder, ready to publish to any modern hosting provider.

---

## Adding Your Product Screenshots

The website layout includes dedicated, pre-measured image slots for every product. When you are ready to display your real product images, you can add them without altering the page layout or causing design shifts:

1. Place your screenshot files in the `assets/images/products/` folder.
2. Open the file `js/products-data.js`.
3. Locate the product you want to update and enter the file path in the `image` field:
   ```javascript
   {
     id: "bilet",
     name: "Bilet",
     image: "assets/images/products/bilet-hero.png",
     // ...
   }
   ```
4. The website will automatically replace the placeholder with your actual screenshot, applying smooth rounded corners and clean scaling.

---

## Design and Typography

- Typography: Funnel Display for biletlabs brand wordmarks; Inter Display for headings and titles; Inter for clear body text.
- Iconography: Lucide clean line icons for navigation and controls.
- Color System: Pure monochromatic black and white palette with subtle zinc accents.
- Display Mode: Permanent minimalist dark mode.

---

Copyright 2026 biletlabs. Built with intention.