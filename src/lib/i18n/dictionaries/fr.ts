const fr = {
  meta: {
    siteTitle: "Pouya Sadri — Ingénieur full-stack freelance | Strasbourg",
    siteDescription:
      "Ingénieur full-stack senior à Strasbourg. Plateformes produit avec Next.js, NestJS et TypeScript — aussi Go et intégrations MCP.",
  },
  nav: {
    home: "Accueil",
    work: "Réalisations",
    services: "Services",
    writing: "Écrits",
    about: "À propos",
    faq: "FAQ",
    contact: "Contact",
  },
  home: {
    brand: "Pouya Sadri",
    headline: "Plateformes produit en Next.js, NestJS et TypeScript",
    sub:
      "Ingénieur full-stack freelance à Strasbourg. De l’MVP à la prod — web, API, qualité, et tooling AI (MCP).",
    ctaPrimary: "Discuter d’un projet",
    ctaSecondary: "Voir les réalisations",
    proofTitle: "Preuves récentes",
    proofBody:
      "Case studies issues des dépôts GitHub épinglés — Go, Swift, TypeScript / MCP.",
  },
  work: {
    title: "Réalisations",
    intro:
      "Études de cas amorcées depuis tous les dépôts GitHub épinglés de pouyasadri. Contenu éditorial à enrichir dans Sanity.",
    sourceNote: "Source des seeds : GitHub pins (github.com/pouyasadri)",
    openCase: "Voir le cas",
    github: "Dépôt GitHub",
    stack: "Stack",
    problem: "Problème",
    approach: "Approche",
    outcome: "Résultat",
    stubProblem: "À rédiger dans Sanity (problème / contexte).",
    stubApproach: "À rédiger dans Sanity (architecture / décisions).",
    stubOutcome: "À rédiger dans Sanity (résultats / métriques).",
  },
  services: {
    title: "Services",
    intro: "Offre principale : plateformes produit. Offres de soutien selon le besoin.",
    lead: {
      title: "Plateformes web produit",
      body: "Next.js / NestJS / TypeScript — MVP → production, architecture, livraison.",
    },
    supporting: [
      {
        title: "Mobile & backends temps réel",
        body: "React Native / Swift / Node — apps terrain et flottes.",
      },
      {
        title: "Performance & systèmes",
        body: "Services Go, Redis, Docker — throughput et fiabilité.",
      },
      {
        title: "Intégrations agents AI",
        body: "Serveurs MCP, APIs LLM — tooling pour assistants.",
      },
    ],
  },
  writing: {
    title: "Écrits",
    intro:
      "Blog propriétaire sur pouyasadri.com (fusion de l’ancien blog.pouyasadri.com). Medium et YouTube : hooks stub — ingestion complète plus tard.",
    empty: "Aucun article publié pour l’instant — schema Sanity prêt.",
    mediumTodo: "TODO : ingestion Medium (SSR / build-time, pas de clé client).",
    youtubeTodo: "TODO : ingestion YouTube (SSR / build-time, secrets en env seulement).",
    readMore: "Lire",
  },
  about: {
    title: "À propos",
    body: [
      "Je suis Pouya Sadri (Seyedpouya Sadrifard), ingénieur full-stack freelance basé à Strasbourg.",
      "5+ ans : React / Next.js / NestJS / TypeScript, backends Go haute perf, alumni Techstars (co-fondateur / lead).",
      "Langues : FR (B2/C1), EN (C1), FA (natif), ES (bases).",
    ],
  },
  faq: {
    title: "FAQ",
    intro: "Réponses courtes pour l’embauche, le process et la stack.",
  },
  contact: {
    title: "Contact",
    intro: "Formulaire fixe — nom, e-mail, message. Réponse sous peu.",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    submit: "Envoyer",
    phone: "Téléphone / WhatsApp",
    emailLabel: "E-mail",
    location: "Localisation",
    notConfigured:
      "Le fournisseur d’e-mail n’est pas encore configuré. TODO : brancher Resend, Formspree ou équivalent (variables CONTACT_*).",
    validationError: "Merci de renseigner nom, e-mail valide et message.",
  },
  footer: {
    rights: "Tous droits réservés.",
    builtWith: "Next.js · TypeScript · Sanity",
  },
};

export default fr;

/** Widen `as const` string literals so EN (and future locales) can differ. */
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Dictionary = DeepStringify<typeof fr>;
