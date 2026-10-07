import type { Dictionary } from "./fr";

const en: Dictionary = {
  meta: {
    siteTitle: "Pouya Sadri — Freelance full-stack engineer | Strasbourg",
    siteDescription:
      "Senior freelance full-stack engineer in Strasbourg. Product platforms with Next.js, NestJS, and TypeScript — plus Go and MCP integrations.",
  },
  nav: {
    home: "Home",
    work: "Work",
    services: "Services",
    writing: "Writing",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
  },
  home: {
    brand: "Pouya Sadri",
    headline: "Product platforms with Next.js, NestJS, and TypeScript",
    sub: "Freelance full-stack engineer in Strasbourg. MVP to production — web, API, quality, and AI agent tooling (MCP).",
    ctaPrimary: "Start a project",
    ctaSecondary: "See selected work",
    proofTitle: "Recent proof",
    proofBody:
      "Case studies seeded from all GitHub pinned repos — Go, Swift, TypeScript / MCP.",
  },
  work: {
    title: "Work",
    intro:
      "Case studies seeded from every GitHub pinned repository for pouyasadri. Editorial depth lands in Sanity next.",
    sourceNote: "Seed source: GitHub pins (github.com/pouyasadri)",
    openCase: "View case",
    github: "GitHub repo",
    stack: "Stack",
    problem: "Problem",
    approach: "Approach",
    outcome: "Outcome",
    stubProblem: "To be written in Sanity (problem / context).",
    stubApproach: "To be written in Sanity (architecture / decisions).",
    stubOutcome: "To be written in Sanity (outcomes / metrics).",
  },
  services: {
    title: "Services",
    intro: "Lead offer: product platforms. Supporting offers as needed.",
    lead: {
      title: "Product web platforms",
      body: "Next.js / NestJS / TypeScript — MVP → production, architecture, delivery.",
    },
    supporting: [
      {
        title: "Mobile & realtime backends",
        body: "React Native / Swift / Node — field and fleet apps.",
      },
      {
        title: "Performance & systems",
        body: "Go services, Redis, Docker — throughput and reliability.",
      },
      {
        title: "AI agent integrations",
        body: "MCP servers, LLM APIs — tooling for assistants.",
      },
    ],
  },
  writing: {
    title: "Writing",
    intro:
      "Owned blog on pouyasadri.com (merged from blog.pouyasadri.com). Medium and YouTube: stub hooks only — full ingestion later.",
    empty: "No posts published yet — Sanity schema is ready.",
    mediumTodo: "TODO: Medium ingestion (SSR / build-time, no client API keys).",
    youtubeTodo: "TODO: YouTube ingestion (SSR / build-time, secrets in env only).",
    readMore: "Read",
  },
  about: {
    title: "About",
    body: [
      "I’m Pouya Sadri (Seyedpouya Sadrifard), a freelance full-stack engineer based in Strasbourg.",
      "5+ years: React / Next.js / NestJS / TypeScript, high-performance Go backends, Techstars alumni (co-founder / lead).",
      "Languages: FR (B2/C1), EN (C1), FA (native), ES (basics).",
    ],
  },
  faq: {
    title: "FAQ",
    intro: "Short answers on hiring, process, and stack.",
  },
  contact: {
    title: "Contact",
    intro: "Fixed form — name, email, message. I’ll get back soon.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    phone: "Phone / WhatsApp",
    emailLabel: "Email",
    location: "Location",
    notConfigured:
      "Email provider is not configured yet. TODO: wire Resend, Formspree, or equivalent (CONTACT_* env vars).",
    validationError: "Please provide a name, valid email, and message.",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Next.js · TypeScript · Sanity",
  },
};

export default en;
