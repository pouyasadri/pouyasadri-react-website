export type LocalizedString = {
  fr: string;
  en: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  githubUrl: string;
  homepage?: string | null;
  language?: string | null;
  topics: string[];
  /** Seed provenance */
  source: "github-pin";
  pinOrder: number;
  problem?: LocalizedString;
  approach?: LocalizedString;
  outcome?: LocalizedString;
};

export type WritingPost = {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  publishedAt?: string;
  body?: LocalizedString;
};

export type FaqItem = {
  question: LocalizedString;
  answer: LocalizedString;
};

export type SiteSettings = {
  email: string;
  phoneE164: string;
  phoneDisplay: string;
  whatsappUrl: string;
  location: string;
  socials: {
    github?: string;
    linkedin?: string;
  };
};
