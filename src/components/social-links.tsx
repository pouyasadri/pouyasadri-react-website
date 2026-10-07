import { SITE } from "@/lib/site";

export function SocialLinks() {
  return (
    <div className="social-media-div">
      <a
        className="icon-button icon-button--github"
        href={SITE.sameAs[0]}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8-.8 1.7-1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 5.5 7c-.2-.5-.6-2 .1-4.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17 2.9 18 3.2 18 3.2c.7 2.1.3 3.6.1 4.1A4.7 4.7 0 0 1 19.5 11c0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
        </svg>
      </a>
      <a
        className="icon-button icon-button--linkedin"
        href={SITE.sameAs[1]}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.3h4.8V24H.2zM8.3 8.3h4.6v2.1h.1c.6-1.2 2.2-2.4 4.5-2.4 4.8 0 5.7 3.2 5.7 7.3V24h-4.8v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V24H8.3z" />
        </svg>
      </a>
      <a
        className="icon-button icon-button--mail"
        href={`mailto:${SITE.email}`}
        title="Email"
        aria-label="Email"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5z" />
        </svg>
      </a>
      <a
        className="icon-button icon-button--whatsapp"
        href={SITE.phoneWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 2.2 17.7L1 23l5.4-1.4A11.8 11.8 0 0 0 20.5 3.5zm-8.7 18a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.2.8.9-3.1-.2-.4a9.8 9.8 0 1 1 7.9 4.3zm5.4-7.3c-.3-.1-1.7-.8-2-.9s-.5-.2-.7.1-.8.9-1 1.1-.4.2-.7.1a8 8 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.1-.3 0-.5l-.9-2.1c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.2 3 .2.4 2.1 3.2a14.4 14.4 0 0 0 3.3 2.5c1.4.6 1.8.5 2.4.4s1.7-.7 1.9-1.4.2-1.2.1-1.3-.3-.2-.6-.3z" />
        </svg>
      </a>
    </div>
  );
}
