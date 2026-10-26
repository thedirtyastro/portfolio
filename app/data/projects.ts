export interface Project {

  num: string;

  slug: string;

  name: string;

  type: string;

  year: string;

  link?: string;

  desc: string;

  bullets: string[];

  stack: string[];

  //* Case study fields — fill in per project*

  overview?: string;

  role?: string[];

  bannerImages: string[]; //* two banner images under /public/projects/<slug>/*

  images: string[]; //* three supporting images under /public/projects/<slug>/*

  liveUrl?: string; //* omitted or empty when no public demo is available

}



export const PROJECTS: Project[] = [

  {

    num: "01",

    slug: "kaching",

    name: "Kaching",

    type: "Web3 Lottery Platform · Professional Product",

    year: "2025",

    link: "https://kaching.vip/",
    liveUrl: "https://kaching.vip/",

    desc: "A blockchain-powered lottery platform. My contribution focused on frontend development, responsive trading and lottery interfaces, reusable components, wallet connectivity, and animation.",

    bullets: ["Worked as a Frontend Developer on the Kaching Web3 lottery platform.", "Built responsive interfaces and reusable React/Next.js components.", "Implemented UI interactions and animations with Framer Motion.", "Worked on frontend integration with APIs and wallet connectivity."],

    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Framer Motion", "Solana"],

  

    overview: "A blockchain-powered lottery platform. My contribution focused on frontend development, responsive trading and lottery interfaces, reusable components, wallet connectivity, and animation.",
    role: ["Frontend Developer.", "Built responsive interfaces and reusable UI components.", "Implemented interactive UI states, animations, and API integrations."],
    bannerImages: ["/projects/kaching/banner-1.webp", "/projects/kaching/banner-2.webp"],
    images: ["/projects/kaching/image-1.webp", "/projects/kaching/image-2.webp", "/projects/kaching/image-3.webp"],
  },

  {

    num: "02",

    slug: "perps-mobile",

    name: "Perps Mobile",

    type: "Perpetual Trading Platform · Professional Product",

    year: "2025",

    desc: "Mobile-first experience for a perpetual trading platform, adapting complex trading workflows to smaller screens. This project is not currently live.",

    bullets: ["Worked as a Frontend Developer on the mobile trading experience.", "Built responsive trading layouts and mobile-friendly interactions.", "Adapted complex desktop trading workflows for smaller screens."],

    stack: ["Next.js", "MongoDB", "Web3"],
    liveUrl: "",

  

    overview: "Mobile-first experience for a perpetual trading platform, adapting complex trading workflows to smaller screens. This project is not currently live.",
    role: ["Frontend Developer.", "Developed mobile-responsive trading interfaces.", "Adapted desktop trading flows to mobile layouts and interactions."],
    bannerImages: ["/projects/perps-mobile/banner-1.webp"],
    images: ["/projects/perps-mobile/image-1.webp", "/projects/perps-mobile/image-2.webp", "/projects/perps-mobile/image-3.webp"],
  },

{

    num: "03",

    slug: "rocket-finance",

    name: "Rocket Finance",

    type: "Peer-to-Peer Lending Platform · Backend Development",

    year: "2024",

    desc: "A peer-to-peer lending application with backend services supporting lending workflows. My role focused on backend development using Java and Spring Boot.",

    bullets: ["Worked as a Backend Developer on a peer-to-peer lending application.", "Developed backend services and REST API functionality using Java and Spring Boot.", "Worked with MySQL for application data persistence."],

    stack: ["Java", "Spring Boot", "REST APIs", "MySQL"],

    overview: "A peer-to-peer lending platform supported by backend services for lending-related workflows.",

    role: ["Backend Developer.", "Developed backend functionality with Java and Spring Boot.", "Worked on REST APIs and MySQL data persistence."],

    bannerImages: ["/projects/rocket-finance/banner-1.png"],

    images: ["/projects/rocket-finance/image-1.webp", "/projects/rocket-finance/image-2.webp", "/projects/rocket-finance/image-3.webp"],

    liveUrl: "",
  },

  {

    num: "04",

    slug: "mifos-admin-tool",
    link: "https://docs.mifos.org/mifosx/user-manual/for-administrators-mifos-x-platform/administration/users",
    liveUrl: "https://docs.mifos.org/mifosx/user-manual/for-administrators-mifos-x-platform/administration/users",

    name: "Mifos Admin Tool",

    type: "Open-Source Admin Tool · Full-Stack Development",

    year: "2024",

    desc: "Full-stack work involving Mifos administrative tooling, including changes across UI and application workflows. Public reference: the OpenMF GitHub organisation.",

    bullets: ["Worked as a Full-Stack Developer on Mifos admin tooling.", "Contributed across frontend and application workflow tasks.", "Worked with administrative forms, dashboards, and related modules."],

    stack: ["AngularJS", "Spring Boot", "MySQL"],

  

    overview: "Full-stack work involving Mifos administrative tooling, including changes across UI and application workflows. Public reference: the OpenMF GitHub organisation.",
    role: ["Full-Stack Developer.", "Worked across frontend and application-level functionality.", "Contributed to admin forms, dashboards, and workflows."],
    bannerImages: ["/projects/mifos-admin-tool/banner-1.webp", "/projects/mifos-admin-tool/banner-2.webp"],
    images: ["/projects/mifos-admin-tool/image-1.webp", "/projects/mifos-admin-tool/image-2.webp", "/projects/mifos-admin-tool/image-3.webp"],
  },

  {

    num: "05",

    slug: "perps-swap-ui",

    name: "Perps & Swap UI",

    type: "Web3 Trading Interfaces · Professional Product",

    year: "2025",

    desc: "Frontend interfaces for perpetual trading and token-swap experiences, built with reusable UI components and responsive layouts.",

    bullets: ["Worked as a Frontend Developer on trading and swap interfaces.", "Built reusable UI components for trading-related modules.", "Implemented responsive layouts and interactive interface states."],

    stack: ["Next.js", "Tailwind CSS"],

  

    overview: "Frontend interfaces for perpetual trading and token-swap experiences, built with reusable UI components and responsive layouts.",
    role: ["Frontend Developer.", "Developed frontend interfaces for perpetual trading and token swaps.", "Built reusable components and responsive layouts."],
    bannerImages: ["/projects/perps-swap-ui/banner-1.webp", "/projects/perps-swap-ui/banner-2.webp"],
    images: ["/projects/perps-swap-ui/image-1.webp", "/projects/perps-swap-ui/image-2.webp", "/projects/perps-swap-ui/image-3.webp"],
    link: "https://kana-labs-swap.vercel.app/",
    liveUrl: "https://kana-labs-swap.vercel.app/",
  },

  {

    num: "06",

    slug: "points-leaderboard",
    link: "https://app.xyra.trade/points",
    liveUrl: "https://app.xyra.trade/points",

    name: "Points Leaderboard",

    type: "Ranking & Rewards System · Professional Product",

    year: "2025",

    desc: "Leaderboard experience for displaying user rankings and points, with dynamic data presented in responsive UI.",

    bullets: ["Worked as a Frontend Developer on the points leaderboard.", "Built responsive ranking and points-display interfaces.", "Integrated API data into the leaderboard UI."],

    stack: ["Next.js", "PostgreSQL"],

  

    overview: "Leaderboard experience for displaying user rankings and points, with dynamic data presented in responsive UI.",
    role: ["Frontend Developer.", "Implemented responsive leaderboard and points-display interfaces.", "Connected frontend components to dynamic API data."],
    bannerImages: ["/projects/points-leaderboard/banner-1.webp", "/projects/points-leaderboard/banner-2.webp"],
    images: ["/projects/points-leaderboard/image-1.webp", "/projects/points-leaderboard/image-2.webp", "/projects/points-leaderboard/image-3.webp"],
  },

  {

    num: "07",

    slug: "tradingview-plugins",

    name: "TradingView Plugins",

    type: "Charting & Plugin Engineering · Professional Product",

    year: "2024",

    desc: "Frontend work on TradingView chart integrations and chart-related customisations for trading experiences.",

    bullets: ["Worked as a Frontend Developer on TradingView integrations.", "Implemented chart-related interface enhancements and customisations.", "Worked on chart layouts and user-facing chart interactions."],

    stack: ["JavaScript", "TradingView"],

  

    overview: "Frontend work on TradingView chart integrations and chart-related customisations for trading experiences.",
    role: ["Frontend Developer.", "Implemented TradingView integration and chart-related frontend enhancements.", "Customised chart layouts and user-facing interactions."],
    bannerImages: ["/projects/tradingview-plugins/banner-1.webp"],
    images: ["/projects/tradingview-plugins/image-1.webp", "/projects/tradingview-plugins/image-2.webp", "/projects/tradingview-plugins/image-3.webp"],
    link: "https://in.tradingview.com/widget/",
    liveUrl: "https://in.tradingview.com/widget/",
  },

  {

    num: "08",

    slug: "hesed-counseling",
    link: "https://thedirtyastro.github.io/hesed-counselling/",
    liveUrl: "https://thedirtyastro.github.io/hesed-counselling/",

    name: "Hesed Counseling",

    type: "Freelance Website Development",

    year: "2024",

    desc: "Freelance website project created to practise AI-assisted development, prompting, and building a clear, responsive web experience.",

    bullets: ["Built a responsive counselling website as freelance work.", "Used AI-assisted development and iterative prompting during implementation.", "Practised presenting a service clearly through website content and layout."],

    stack: ["Figma", "Next.js", "Tailwind CSS", "Vercel"],

  

    overview: "Freelance website project created to practise AI-assisted development, prompting, and building a clear, responsive web experience.",
    role: ["Freelance Web Developer.", "Developed a responsive counselling website.", "Used AI-assisted workflows to test prompts and refine the implementation."],
    bannerImages: ["/projects/hesed-counseling/banner-1.webp", "/projects/hesed-counseling/banner-2.webp"],
    images: ["/projects/hesed-counseling/image-1.webp", "/projects/hesed-counseling/image-2.webp", "/projects/hesed-counseling/image-3.webp"],
  },

  {

    num: "09",

    slug: "kanalabs-hero",

    name: "Kanalabs Hero",

    type: "Company Project · Hero Section",

    year: "2024",

    desc: "Self-initiated frontend project created for the company, focused on a polished Web3-style hero section and responsive visual presentation.",

    bullets: ["Initiated and developed the hero-section project for the company.", "Built responsive layouts and interactive visual components.", "Refined the presentation and motion effects through frontend implementation."],

    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],

  

    overview: "Self-initiated frontend project created for the company, focused on a polished Web3-style hero section and responsive visual presentation.",
    role: ["Frontend Developer.", "Self-initiated and developed the project for the company.", "Implemented responsive layout, visual components, and animations."],
    bannerImages: ["/projects/kanalabs-hero/banner-1.webp", "/projects/kanalabs-hero/banner-2.webp"],
    images: ["/projects/kanalabs-hero/image-1.webp", "/projects/kanalabs-hero/image-2.webp", "/projects/kanalabs-hero/image-3.webp"],
    link: "https://kana-labs.vercel.app/",
    liveUrl: "https://kana-labs.vercel.app/",
  },

  {

    num: "10",

    slug: "personal-portfolio",
    link: "https://sarukhan-muthuraman.vercel.app/",
    liveUrl: "https://sarukhan-muthuraman.vercel.app/",

    name: "Personal Portfolio",

    type: "Personal Portfolio · AI-Assisted Freelance Experimentation",

    year: "2026",

    desc: "Personal portfolio website and web-development experiment used to showcase work while exploring AI-assisted development, prompting, marketing, and communication.",

    bullets: ["Built a personal website to present projects and developer identity.", "Experimented with AI-assisted development and prompt iteration.", "Used the process to practise marketing and communication for freelance work."],

    stack: ["Next.js", "Tailwind CSS", "GSAP"],

  

    overview: "Personal portfolio website and web-development experiment used to showcase work while exploring AI-assisted development, prompting, marketing, and communication.",
    role: ["Personal portfolio developer.", "Built and refined the website and its project showcase.", "Used the project to practise AI prompting, marketing, and communication."],
    bannerImages: ["/projects/personal-portfolio/banner-1.png", "/projects/personal-portfolio/banner-2.webp"],
    images: ["/projects/personal-portfolio/image-1.webp", "/projects/personal-portfolio/image-2.webp", "/projects/personal-portfolio/image-3.webp"],
  },

  {

    num: "11",

    slug: "sanru-photography",

    name: "Sanru Photography",

    type: "Freelance Photography Website",

    year: "2024",

    desc: "Freelance photography website/portfolio work focused on visual presentation and image-led storytelling, also used to explore AI-assisted design and prompting.",

    bullets: ["Developed a photography-focused web experience as freelance work.", "Focused on visual presentation and image-led page structure.", "Used AI-assisted prompting to experiment with design and implementation."],

    stack: ["Figma"],

  

    overview: "Freelance photography website/portfolio work focused on visual presentation and image-led storytelling, also used to explore AI-assisted design and prompting.",
    role: ["Freelance Web Developer.", "Created a photography-focused website concept and layout.", "Experimented with AI-assisted development and visual storytelling."],
    bannerImages: ["/projects/sanru-photography/banner-1.webp"],
    images: ["/projects/sanru-photography/image-1.webp", "/projects/sanru-photography/image-2.webp", "/projects/sanru-photography/image-3.webp"],
    liveUrl: "",
  },


  // Additional live websites supplied on 2026-10-23
  {
    num: "12",
    slug: "kalakruthi-costumes",
    name: "Kalakruthi Costumes",
    type: "Freelance Landing Page · Costume Business",
    year: "2026",
    link: "https://kalakruthi-costumes.vercel.app/",
    liveUrl: "https://kalakruthi-costumes.vercel.app/",
    desc: "A landing page developed as part-time freelance work and a sellable website concept, while testing AI capabilities and prompting workflows.",
    bullets: ["Developed a landing page for a costume business.", "Experimented with AI-assisted development and prompt iteration.", "Used the project to practise marketing and communication for freelance services."],
    stack: ["Next.js", "Web Development"],
  

    overview: "A landing page developed as part-time freelance work and a sellable website concept, while testing AI capabilities and prompting workflows.",
    role: ["Freelance Web Developer.", "Developed the business landing page.", "Used AI-assisted prompting and implementation as part of freelance skill-building."],
    bannerImages: ["/projects/kalakruthi-costumes/banner-1.webp"],
    images: ["/projects/kalakruthi-costumes/image-1.webp", "/projects/kalakruthi-costumes/image-2.webp", "/projects/kalakruthi-costumes/image-3.webp"],
  },
  {
    num: "13",
    slug: "kana-landing",
    name: "Kana Landing",
    type: "Landing Page · Freelance/AI-Assisted Experiment",
    year: "2026",
    link: "https://kana-landing-nw.vercel.app/",
    liveUrl: "https://kana-landing-nw.vercel.app/",
    desc: "A landing-page project built to practise fast web delivery, AI-assisted prompting, and marketing-oriented presentation.",
    bullets: ["Developed a dedicated landing-page experience.", "Experimented with AI capabilities and prompt engineering.", "Practised communicating product value through page structure and visual design."],
    stack: ["Next.js", "Web Development"],
  

    overview: "A landing-page project built to practise fast web delivery, AI-assisted prompting, and marketing-oriented presentation.",
    role: ["Web Developer.", "Built the landing-page frontend.", "Used AI-assisted prompting to test and refine the implementation."],
    bannerImages: ["/projects/kana-landing/banner-1.webp", "/projects/kana-landing/banner-2.webp"],
    images: ["/projects/kana-landing/image-1.webp", "/projects/kana-landing/image-2.webp", "/projects/kana-landing/image-3.webp"],
  },
  {
    num: "14",
    slug: "sarukhan-devs",
    name: "Sarukhan Developer Website",
    type: "Personal Portfolio · Freelance/AI-Assisted Experiment",
    year: "2026",
    link: "https://sarukhan.devs.li/",
    liveUrl: "https://sarukhan.devs.li/",
    desc: "Personal developer website used to present work and experiment with AI-assisted website development, prompting, marketing, and communication.",
    bullets: ["Built a personal developer website and project showcase.", "Experimented with AI-assisted development and iterative prompting.", "Used the site to practise marketing and communicating freelance services."],
    stack: ["Web Development"],
  

    overview: "Personal developer website used to present work and experiment with AI-assisted website development, prompting, marketing, and communication.",
    role: ["Personal Portfolio Developer.", "Built and refined the personal website.", "Used the project to practise AI prompting, marketing, and communication."],
    bannerImages: ["/projects/sarukhan-devs/banner-1.webp"],
    images: ["/projects/sarukhan-devs/image-1.webp", "/projects/sarukhan-devs/image-2.webp", "/projects/sarukhan-devs/image-3.webp"],
  },
  {
    num: "15",
    slug: "oracure-green",
    name: "Oracure Green",
    type: "Freelance Landing Page · Business Website",
    year: "2026",
    link: "https://oracure-green.vercel.app/",
    liveUrl: "https://oracure-green.vercel.app/",
    desc: "A business landing page developed as part-time freelance work and an AI-assisted web-development experiment.",
    bullets: ["Developed a business-focused landing page.", "Tested AI-assisted coding and prompt workflows.", "Practised marketing-oriented presentation and freelance communication."],
    stack: ["Web Development"],
  

    overview: "A business landing page developed as part-time freelance work and an AI-assisted web-development experiment.",
    role: ["Freelance Web Developer.", "Developed the landing-page frontend.", "Used AI-assisted prompting to iterate on the website."],
    bannerImages: ["/projects/oracure-green/banner-1.webp"],
    images: ["/projects/oracure-green/image-1.webp", "/projects/oracure-green/image-2.webp", "/projects/oracure-green/image-3.webp"],
  },
  {
    num: "16",
    slug: "dentelope",
    name: "Dentelope",
    type: "Freelance Landing Page · Dental/Healthcare",
    year: "2026",
    link: "https://dentelope.vercel.app/",
    liveUrl: "https://dentelope.vercel.app/",
    desc: "A dental/healthcare-oriented landing page developed as freelance work and an experiment in AI-assisted implementation.",
    bullets: ["Developed a dental/healthcare website concept.", "Experimented with AI-assisted coding and prompt refinement.", "Practised presenting services through a clear web interface."],
    stack: ["Web Development"],
  

    overview: "A dental/healthcare-oriented landing page developed as freelance work and an experiment in AI-assisted implementation.",
    role: ["Freelance Web Developer.", "Developed the landing-page frontend.", "Used AI-assisted prompting and iteration during implementation."],
    bannerImages: ["/projects/dentelope/banner-1.webp"],
    images: ["/projects/dentelope/image-1.webp", "/projects/dentelope/image-2.webp", "/projects/dentelope/image-3.webp"],
  },
  {
    num: "17",
    slug: "coffee-theatre",
    name: "Coffee Theatre",
    type: "Freelance Landing Page · Café Website",
    year: "2026",
    link: "https://coffee-theatre.vercel.app/",
    liveUrl: "https://coffee-theatre.vercel.app/",
    desc: "A café landing page developed as part-time freelance work and used to test AI-assisted web design and prompting.",
    bullets: ["Developed a café-focused landing page.", "Experimented with AI capabilities and iterative prompting.", "Practised brand presentation and marketing-focused page structure."],
    stack: ["Web Development"],
  

    overview: "A café landing page developed as part-time freelance work and used to test AI-assisted web design and prompting.",
    role: ["Freelance Web Developer.", "Developed the café landing-page frontend.", "Used AI-assisted prompting to refine the page."],
    bannerImages: ["/projects/coffee-theatre/banner-1.webp"],
    images: ["/projects/coffee-theatre/image-1.webp", "/projects/coffee-theatre/image-2.webp", "/projects/coffee-theatre/image-3.webp"],
  },
  {
    num: "18",
    slug: "laasia-website",
    name: "Laasia Website",
    type: "Freelance Landing Page · Business Website",
    year: "2026",
    link: "https://laasia-website.vercel.app/",
    liveUrl: "https://laasia-website.vercel.app/",
    desc: "A business landing page developed as freelance work while experimenting with AI-assisted coding and marketing presentation.",
    bullets: ["Developed a business website landing page.", "Tested AI-assisted development and prompting techniques.", "Practised communicating brand value through page layout and content structure."],
    stack: ["Web Development"],
  

    overview: "A business landing page developed as freelance work while experimenting with AI-assisted coding and marketing presentation.",
    role: ["Freelance Web Developer.", "Developed the landing-page frontend.", "Used AI-assisted prompting to iterate on the implementation."],
    bannerImages: ["/projects/laasia-website/banner-1.webp", "/projects/laasia-website/banner-2.webp"],
    images: ["/projects/laasia-website/image-1.webp", "/projects/laasia-website/image-2.webp", "/projects/laasia-website/image-3.webp"],
  },
  {
    num: "19",
    slug: "charu-creation",
    name: "Charu Creation",
    type: "Freelance Landing Page · Creative Business",
    year: "2026",
    link: "https://charu-creation.vercel.app/",
    liveUrl: "https://charu-creation.vercel.app/",
    desc: "A creative-business landing page developed as part-time freelance work and an AI-assisted web-development experiment.",
    bullets: ["Developed a landing page for a creative business.", "Experimented with AI-assisted development and prompt iteration.", "Practised brand presentation and freelance marketing communication."],
    stack: ["Web Development"],
  

    overview: "A creative-business landing page developed as part-time freelance work and an AI-assisted web-development experiment.",
    role: ["Freelance Web Developer.", "Developed the landing-page frontend.", "Used AI-assisted prompting to test and refine the website."],
    bannerImages: ["/projects/charu-creation/banner-1.webp"],
    images: ["/projects/charu-creation/image-1.webp", "/projects/charu-creation/image-2.webp", "/projects/charu-creation/image-3.webp"],
  },
  {
    num: "20",
    slug: "hemanth-photography",
    name: "Hemanth Photography",
    type: "Freelance Photography Landing Page",
    year: "2026",
    link: "https://hemanth-photography.vercel.app/",
    liveUrl: "https://hemanth-photography.vercel.app/",
    desc: "A photography landing page developed as part-time freelance work, with an emphasis on presenting visual work and experimenting with AI-assisted prompting.",
    bullets: ["Developed a photography-focused landing page.", "Focused on image-led presentation and visual hierarchy.", "Used AI-assisted development to experiment with prompts and implementation."],
    stack: ["Web Development"],
  

    overview: "A photography landing page developed as part-time freelance work, with an emphasis on presenting visual work and experimenting with AI-assisted prompting.",
    role: ["Freelance Web Developer.", "Developed the photography landing-page frontend.", "Used AI-assisted prompting to refine the visual presentation."],
    bannerImages: ["/projects/hemanth-photography/banner-1.webp"],
    images: ["/projects/hemanth-photography/image-1.webp", "/projects/hemanth-photography/image-2.webp", "/projects/hemanth-photography/image-3.webp"],
  },
  {
    num: "21",
    slug: "outreach-crm",
    name: "OutReach CRM",
    type: "Personal Product · Outreach CRM",
    year: "2026",
    link: "https://outreach-crm-web-five.vercel.app/",
    liveUrl: "https://outreach-crm-web-five.vercel.app/",
    desc: "My own CRM product for tracking cold calls, managing leads, and organising outreach activities for freelance business development.",
    bullets: ["Founder and Full-Stack Developer of the product.", "Built a CRM workflow for tracking cold calls and leads.", "Designed the product around organising outreach activities and follow-ups."],
    stack: ["Next.js", "TypeScript", "Supabase"],
  

    overview: "My own CRM product for tracking cold calls, managing leads, and organising outreach activities for freelance business development.",
    role: ["Founder & Full-Stack Developer.", "Own product concept and development.", "Building workflows to track cold calls, manage leads, and organise outreach."],
    bannerImages: ["/projects/outreach-crm/banner-1.png"],
    images: ["/projects/outreach-crm/image-1.webp", "/projects/outreach-crm/image-2.webp", "/projects/outreach-crm/image-3.webp"],
  },
  {
    num: "22",
    slug: "sarukhan-portfolio",
    name: "Sarukhan Portfolio",
    type: "Personal Portfolio · AI-Assisted Experiment",
    year: "2026",
    link: "https://sarukhan-portfolio.vercel.app/",
    liveUrl: "https://sarukhan-portfolio.vercel.app/",
    desc: "A portfolio website version used to showcase development work and experiment with AI-assisted implementation, prompting, and marketing presentation.",
    bullets: ["Built a portfolio website to showcase development work.", "Experimented with AI-assisted development and iterative prompting.", "Used the project to improve presentation and marketing of freelance services."],
    stack: ["Web Development"],
  

    overview: "A portfolio website version used to showcase development work and experiment with AI-assisted implementation, prompting, and marketing presentation.",
    role: ["Personal Portfolio Developer.", "Built and refined the portfolio frontend.", "Used AI-assisted prompting to experiment with layout and presentation."],
    bannerImages: ["/projects/sarukhan-portfolio/banner-1.webp"],
    images: ["/projects/sarukhan-portfolio/image-1.webp", "/projects/sarukhan-portfolio/image-2.webp", "/projects/sarukhan-portfolio/image-3.webp"],
  },
  {
    num: "23",
    slug: "kana-labs-swap",
    name: "Kana Labs Swap",
    type: "Web3 Token Swap Application · Professional Product",
    year: "2026",
    link: "https://xyra.trade/swap",
    liveUrl: "https://xyra.trade/swap",
    desc: "Frontend development for a Web3 token-swap interface in the Kana Labs ecosystem.",
    bullets: ["Worked as a Frontend Developer on the token-swap interface.", "Built responsive swap UI and reusable frontend components.", "Worked on presenting swap flows and states through the frontend."],
    stack: ["Next.js", "Web3"],
  

    overview: "Frontend development for a Web3 token-swap interface in the Kana Labs ecosystem.",
    role: ["Frontend Developer.", "Developed the token-swap frontend interface.", "Built responsive components and user-facing swap flows."],
    bannerImages: ["/projects/kana-labs-swap/banner-1.png"],
    images: ["/projects/kana-labs-swap/image-1.webp", "/projects/kana-labs-swap/image-2.webp", "/projects/kana-labs-swap/image-3.webp"],
  },
];



/*** Featured 3 shown on the home page **/

export const FEATURED_PROJECTS = PROJECTS.slice(0, 3);
