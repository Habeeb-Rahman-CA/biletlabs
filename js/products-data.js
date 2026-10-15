/**
 * biletlabs Product Portfolio - Master Data
 * Pure product showcase focused on user experience, daily utility, and simplicity.
 * Free of developer jargon, internal tools, and tech-stack specifications.
 * Brand name 'biletlabs' is kept strictly in lowercase.
 */

export const BRAND = {
  name: "biletlabs",
  legalName: "biletlabs",
  founder: {
    name: "Habeebu Rahman CA",
    role: "Founder & Product Designer",
    bio: "Product builder creating thoughtful, minimalist applications that help people write, plan, stay healthy, and manage daily life with focus and clarity."
  },
  tagline: "Software that gets out of your way.",
  eyebrow: "Independent Product Studio",
  positioning: "biletlabs creates simple, distraction-free applications for everyday work and life.",
  coreIdea: "Less noise. More intention.",
  contactEmail: "contact@biletlabs.com",
  principles: [
    {
      title: "Focus over feature overload",
      desc: "Each screen is intentionally designed to help you accomplish your next step without feeling overwhelmed by unnecessary menus or buttons.",
      icon: "target"
    },
    {
      title: "Clarity over complexity",
      desc: "We make important information easy to find, read, and understand at a glance, eliminating confusing workflows and cluttered dashboards.",
      icon: "eye"
    },
    {
      title: "Useful by design",
      desc: "Every feature serves a genuine purpose in your daily life. No artificial gimmicks, no feeds competing for attention, and no visual noise.",
      icon: "sparkles"
    },
    {
      title: "Respect for your attention",
      desc: "No aggressive notifications, unsolicited pop-ups, or invasive ads. Our applications exist to assist your day, never interrupt it.",
      icon: "shield-check"
    },
    {
      title: "Built for speed & privacy",
      desc: "Fast, reliable, and respectful of your personal data. Everything opens instantly, works smoothly offline, and keeps your private life private.",
      icon: "zap"
    },
    {
      title: "Calm by default",
      desc: "Quiet, restful interfaces designed with generous whitespace and soothing contrast, ensuring your screen is a place of peaceful concentration.",
      icon: "feather"
    }
  ]
};

export const PRODUCTS = [
  {
    id: "bilet",
    name: "Bilet",
    version: "v1.3",
    tagline: "Distraction-Free Writing & Notes",
    headline: "A quiet space for notes, writing, and ideas.",
    category: "Writing & Notes",
    year: "2026",
    domain: "bilet.app",
    scoreBadge: { num: "100", label: "Focus & Speed" },
    tags: ["Distraction-Free", "Offline Native", "100% Private", "Markdown Notes"],
    heroDescription: "Bilet is a calm, distraction-free writing studio designed for anyone who wants a fast, clean place to think and write. It strips away noisy toolbars and complex cloud sync in favor of instant speed, beautiful typography, and complete privacy.",
    problem: "Most modern writing and note apps have become crowded with pop-ups, subscription prompts, cluttered sidebars, and unnecessary features that interrupt your train of thought.",
    solution: "Bilet gives you a clean canvas with effortless formatting, comfortable reading fonts, and instant offline saving. Your words open in a split second, stay completely private on your computer, and let you focus entirely on your writing.",
    highlightSpecs: [
      { label: "Experience", value: "Distraction-Free" },
      { label: "Launch Speed", value: "Instant Startup" },
      { label: "Privacy", value: "100% Private & Local" },
      { label: "Availability", value: "Offline by Default" }
    ],
    features: [
      {
        title: "Clean, Focused Writing Canvas",
        desc: "A calm, clutter-free screen with gentle formatting, live word and character counts, and an estimated reading time indicator."
      },
      {
        title: "Complete Personal Privacy",
        desc: "Your personal notes, journal entries, and drafts are kept safely on your own computer. No external accounts or data collection."
      },
      {
        title: "Tailored Reading & Writing Fonts",
        desc: "Choose from a curated collection of comfortable typography options with adjustable line spacing and text sizes for relaxed reading."
      },
      {
        title: "Version History & Time Travel",
        desc: "Easily browse previous versions of your drafts with a visual timeline, so you can revisit past ideas or restore an earlier draft in one click."
      },
      {
        title: "Instant Search & Replace",
        desc: "Quickly find words, phrases, or chapters across your notes with an intuitive search bar that never covers your text."
      },
      {
        title: "Easy Export & Backups",
        desc: "Back up your entire workspace with a single click or export your notes cleanly to standard text files whenever you wish."
      }
    ],
    highlights: {
      "Best For": "Writers, researchers, students, and anyone who values quiet focus",
      "Works Offline": "Full functionality without an internet connection",
      "Data Storage": "Saved directly on your computer",
      "Interface": "Monochrome, high-contrast, zero visual distractions"
    },
    platforms: ["Windows", "macOS", "Linux"],
    links: {
      repo: "",
      download: "#",
      demo: ""
    },
    image: "",
    aspectRatio: "16:10",
    screenshots: [
      {
        title: "Minimalist Writing Studio",
        caption: "A quiet, centered canvas designed to let your ideas flow naturally.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Comfortable Typography Controls",
        caption: "Adjust font style, text sizing, and line height to match your reading preference.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Version History & Draft Timeline",
        caption: "Easily inspect previous edits and restore earlier thoughts without fear of losing work.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Clean Document Organizer",
        caption: "Switch between multiple open notes with a neat, uncrowded tab overview.",
        image: "",
        aspectRatio: "16:10"
      }
    ]
  },
  {
    id: "bilet-x",
    name: "Bilet-X",
    version: "v1.1",
    tagline: "Smart Desktop Companion & Productivity Hub",
    headline: "Your daily essentials, one shortcut away.",
    category: "Desktop Productivity",
    year: "2026",
    domain: "bilet-x.app",
    scoreBadge: { num: "99", label: "Instant Shortcut" },
    tags: ["Desktop Companion", "Quick Capture", "Keyboard Driven", "Offline Speed"],
    heroDescription: "Bilet-X is an unobtrusive desktop companion that floats gently on your screen. It keeps your quick notes, daily checklist, upcoming calendar events, clipboard history, focus timers, and music controls just one click away without opening heavy apps.",
    problem: "Throughout the day, switching back and forth between browser tabs and multiple separate apps just to write down a quick note, check a schedule, or start a timer breaks your concentration.",
    solution: "Bilet-X sits neatly at the edge of your screen as a compact pill. It expands only when you need it, letting you jot down thoughts, start a focus session, or see your day's schedule instantly.",
    highlightSpecs: [
      { label: "Access", value: "One-Click / Shortcut" },
      { label: "Screen Space", value: "Ultra Compact" },
      { label: "Focus Tool", value: "Built-In Timer" },
      { label: "Storage", value: "Fast & Local" }
    ],
    features: [
      {
        title: "Floating Dynamic Dock",
        desc: "Anchors smoothly to the top, bottom, or corner of any display. It stays out of your way and expands smoothly when summoned."
      },
      {
        title: "Quick Scratchpad & Checklists",
        desc: "Instantly capture phone numbers, quick reminders, and to-do items that save automatically as you type."
      },
      {
        title: "Smart Clipboard History",
        desc: "Never lose a copied link, address, or snippet again. Easily view and re-copy recent items with a quick search."
      },
      {
        title: "Focus Timer & Habit Prompts",
        desc: "Stay productive with gentle work and rest intervals, alongside friendly reminders to stay hydrated throughout your workday."
      },
      {
        title: "Upcoming Calendar Agenda",
        desc: "Glance at your next appointments and meeting times with a subtle countdown timer, so you never miss an event."
      },
      {
        title: "Everyday Media Controls",
        desc: "Play, pause, or skip your background music smoothly without leaving your active workspace."
      }
    ],
    highlights: {
      "Best For": "Busy professionals, multitaskers, and anyone seeking a cleaner desktop",
      "Display Modes": "Compact floating pill, expanded hub, or auto-hiding dock",
      "Interaction": "Global keyboard shortcut or gentle mouse hover",
      "Efficiency": "Extremely lightweight with near-zero impact on computer speed"
    },
    platforms: ["Windows", "macOS", "Linux"],
    links: {
      repo: "",
      download: "#",
      demo: ""
    },
    image: "",
    aspectRatio: "16:10",
    screenshots: [
      {
        title: "Floating Dock in Action",
        caption: "A subtle, beautiful widget that rests comfortably on your desktop edge.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Quick Scratchpad & Daily Tasks",
        caption: "Capture notes and check off items without navigating away from your primary work.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Clipboard History & Search",
        caption: "Easily search and retrieve things you copied earlier in the day.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Deep Work Focus Timer",
        caption: "Keep track of focused work intervals and daily wellness breaks.",
        image: "",
        aspectRatio: "16:10"
      }
    ]
  },
  {
    id: "bilo",
    name: "Bilo",
    version: "v1.0",
    tagline: "Focused Project & Task Workspace",
    headline: "A clearer view of what to work on next.",
    category: "Projects & Tasks",
    year: "2026",
    domain: "bilo.app",
    scoreBadge: { num: "100", label: "Clutter-Free Flow" },
    tags: ["Project Planning", "Focused Roadmaps", "Daily Checklists", "Calm Boards"],
    heroDescription: "Bilo is a clean, easy-to-use workspace for organizing projects, tasks, and team milestones. It strips away complicated menus and cluttered boards, giving you a crystal-clear morning briefing and a simple way to plan your week.",
    problem: "Most project management platforms are slow, confusing, and packed with complex settings you never use, making updating a simple task feel like a chore.",
    solution: "Bilo simplifies planning into five clear views: a Morning Focus briefing, an organized project checklist, a visual drag-and-drop board, a monthly calendar, and an archive of shipped work.",
    highlightSpecs: [
      { label: "Clarity", value: "5 Focused Views" },
      { label: "Speed", value: "Instant Response" },
      { label: "Reliability", value: "Works Offline" },
      { label: "Simplicity", value: "Zero Learning Curve" }
    ],
    features: [
      {
        title: "Today Focus Briefing",
        desc: "Start your morning with a clear summary: what is due today, what is approaching, and what deserves your immediate attention."
      },
      {
        title: "Simple Task & Subtask Lists",
        desc: "Break bigger projects down into manageable steps with visual progress bars that show exactly how close you are to the finish line."
      },
      {
        title: "Visual Kanban Boards",
        desc: "Drag and drop tasks smoothly between stages such as 'To Do', 'In Progress', and 'Completed' to keep work moving forward."
      },
      {
        title: "Drag-to-Schedule Calendar",
        desc: "See your month at a glance and schedule deadlines by simply dragging unscheduled tasks onto any calendar date."
      },
      {
        title: "Seamless Offline Support",
        desc: "Keep working even when your internet drops. All your changes save instantly and update smoothly once you reconnect."
      },
      {
        title: "Clean Project Reports",
        desc: "Download neat, beautifully structured summary reports of all completed milestones whenever you need to share progress."
      }
    ],
    highlights: {
      "Best For": "Small teams, solo creators, and anyone who wants straightforward project clarity",
      "Core Views": "Today Dashboard, Checklist, Visual Board, Calendar, and Archive",
      "Network Freedom": "Full offline support with automatic sync",
      "Export": "One-click formatted spreadsheet downloads for review"
    },
    platforms: ["Web", "iOS", "Android", "Desktop"],
    links: {
      repo: "",
      download: "",
      demo: "#"
    },
    image: "",
    aspectRatio: "16:10",
    screenshots: [
      {
        title: "Morning Focus Dashboard",
        caption: "A calm 60-second operational briefing of what to tackle first today.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Project Checklist & Milestones",
        caption: "Organize high-level goals into simple, actionable subtasks.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Visual Drag-and-Drop Board",
        caption: "Track the natural flow of work with clean, customizable columns.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Month-at-a-Glance Calendar",
        caption: "Plan deadlines effortlessly by dropping tasks onto calendar dates.",
        image: "",
        aspectRatio: "16:10"
      }
    ]
  },
  {
    id: "liftup",
    name: "LiftUp",
    version: "v1.0",
    tagline: "Distraction-Free Workout & Nutrition Tracker",
    headline: "Train with intention. Track your progress.",
    category: "Fitness & Nutrition",
    year: "2026",
    domain: "liftup.app",
    scoreBadge: { num: "98", label: "Zero Social Noise" },
    tags: ["Strength Tracker", "Routine Logger", "No Social Feeds", "Private & Local"],
    heroDescription: "LiftUp combines workout logging and daily meal tracking into a single, focused fitness companion. Designed for people who want to build consistent healthy routines without social feeds, subscription paywalls, or noisy distractions.",
    problem: "Popular fitness apps are filled with annoying ads, paid feature locks, social media feeds, and force you to use two separate apps to track your exercise and food.",
    solution: "LiftUp puts both your workout split and your daily nutrition into one distraction-free dashboard. Logging an exercise takes two taps, and checking your daily nutrition takes one glance.",
    highlightSpecs: [
      { label: "Logging Speed", value: "2 Taps Per Exercise" },
      { label: "Gym Design", value: "High-Contrast Theme" },
      { label: "All-in-One", value: "Workouts + Meals" },
      { label: "Experience", value: "No Social Feeds or Ads" }
    ],
    features: [
      {
        title: "Fast Workout Session Logger",
        desc: "Log your weights, reps, and sets in seconds with large, easy-to-tap buttons and a built-in rest timer between exercises."
      },
      {
        title: "Daily Nutrition & Meal Checklist",
        desc: "Track daily meals and key nutritional targets including calories, protein, and balanced energy with a simple daily checklist."
      },
      {
        title: "Custom Workout Schedules",
        desc: "Build workout routines that match your personal schedule, from simple full-body days to tailored weekly splits."
      },
      {
        title: "Personal Progress & Milestones",
        desc: "Watch your strength and consistency grow over time with clean visual charts showing your personal bests and total volume."
      },
      {
        title: "High-Contrast Gym Mode",
        desc: "A sleek, dark visual theme that is easy to read in gym lighting, saves phone battery, and keeps your eyes comfortable."
      },
      {
        title: "Works Reliable Offline",
        desc: "Never worry about poor phone signal in basement gyms. Everything logs immediately on your device without freezing."
      }
    ],
    highlights: {
      "Best For": "Lifters, runners, and anyone committed to consistent health and strength",
      "Ergonomics": "Extra-large buttons designed for quick one-handed use during workouts",
      "Completeness": "Combines training routines and daily nutrition in one screen",
      "Distractions": "Zero social feeds, zero third-party ads, zero clutter"
    },
    platforms: ["Mobile (iOS & Android)", "Web"],
    links: {
      repo: "",
      download: "",
      demo: "#"
    },
    image: "",
    aspectRatio: "16:10",
    screenshots: [
      {
        title: "Live Workout Session Logger",
        caption: "Log sets and weights in seconds with an automatic rest countdown timer.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Daily Nutrition & Meal Tracking",
        caption: "Keep tabs on meals and daily protein targets without complex math.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Custom Training Split Builder",
        caption: "Design flexible weekly workout plans that fit your personal schedule.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Clear Progress History",
        caption: "Celebrate your personal strength records and consistency over time.",
        image: "",
        aspectRatio: "16:10"
      }
    ]
  },
  {
    id: "rupa",
    name: "Rūpa",
    version: "v1.0",
    tagline: "Simple Personal Finance & Expense Ledger",
    headline: "A clearer picture of your money.",
    category: "Personal Finance",
    year: "2026",
    domain: "rupa.app",
    scoreBadge: { num: "100", label: "Offline Sovereignty" },
    tags: ["Personal Finance", "Cash Flow Ledger", "Offline First", "No Bank Sync"],
    heroDescription: "Derived from the concept of clean form and transparency, Rūpa gives clarity to your everyday spending. It discards complex spreadsheet headaches and ad-heavy budgeting apps in favor of 3-second expense logging, debt tracking, and shared trip splits.",
    problem: "Spreadsheets are awkward to update on your phone, commercial finance apps bombard you with credit card offers, and splitting vacation expenses usually requires yet another separate app.",
    solution: "Rūpa brings daily personal expenses, money owed to or by friends, and group trip cost settlements into one clean, private ledger that takes under three seconds to use.",
    highlightSpecs: [
      { label: "Logging Time", value: "< 3 Seconds" },
      { label: "Data Privacy", value: "100% Private to You" },
      { label: "Group Splits", value: "Built-in Trips & Events" },
      { label: "Convenience", value: "Smart Receipt Scanner" }
    ],
    features: [
      {
        title: "Sub-3-Second Expense Logging",
        desc: "Quickly record daily purchases right from your phone's bottom drawer, with instant updates to your total balance."
      },
      {
        title: "Bilateral Debt & Loan Ledger",
        desc: "Keep clear, polite track of money borrowed or lent with friends, including partial repayments and running balances."
      },
      {
        title: "Group Splits & Shared Events",
        desc: "Organize vacations, dinners, or flat expenses. Log who paid, specify who participated, and calculate fair settlements with one click."
      },
      {
        title: "Multi-Account & Card Overview",
        desc: "Keep an eye on multiple bank accounts, debit cards, and savings balances with elegant, customizable card designs."
      },
      {
        title: "Smart Receipt Scanning",
        desc: "Snap a quick photo of your paper receipt to automatically detect the merchant name, date, and purchase total."
      },
      {
        title: "Calm, Noise-Free Design",
        desc: "A soft, easy-to-read interface where color is used only for meaningful numbers: green for incoming funds, red for outgoing expenses."
      }
    ],
    highlights: {
      "Best For": "Individuals, travelers, roommates, and anyone wanting stress-free money clarity",
      "Speed": "Designed for one-handed logging in under 3 seconds",
      "Shared Expenses": "Built-in group splitting without needing external tools",
      "Data Respect": "Zero tracking, zero advertising, and complete personal privacy"
    },
    platforms: ["Mobile (iOS & Android)", "Web"],
    links: {
      repo: "",
      download: "",
      demo: "#"
    },
    image: "",
    aspectRatio: "16:10",
    screenshots: [
      {
        title: "Quick Daily Expense Ledger",
        caption: "Log morning coffees and grocery trips in seconds with clear categories.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Money Owed & Lending Tracker",
        caption: "Keep friendly, accurate track of who owes what without awkward guesswork.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Group Trips & Event Splits",
        caption: "Calculate fair shares for group dinners, vacations, and shared apartments.",
        image: "",
        aspectRatio: "16:10"
      },
      {
        title: "Custom Card & Account Overview",
        caption: "A clean visual glance across your everyday bank accounts and payment cards.",
        image: "",
        aspectRatio: "16:10"
      }
    ]
  }
];
