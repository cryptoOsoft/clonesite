import { socialLinks, sourcePath } from "@/components/sites/insarag/content";
import { getMessages, type Locale } from "@/components/sites/insarag/messages";

function SocialIcon({ label }: { label: (typeof socialLinks)[number]["label"] }) {
  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 320 512" aria-hidden="true">
        <path
          fill="currentColor"
          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg viewBox="0 0 512 512" aria-hidden="true">
        <path
          fill="currentColor"
          d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 576 512" aria-hidden="true">
      <path
        fill="currentColor"
        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597C14.933 167.953 14.933 257.391 14.933 257.391s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232.145 337.591V175.185l142.739 81.205-142.739 81.201z"
      />
    </svg>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  return (
    <footer className="site-footer">
      <div className="footer-accent" />
      <div className="footer-inner">
        <div className="footer-content">
          <img className="footer-logo" src="/sites/insarag/ocha-logo.svg" alt={copy.chrome.ochaAlt} />
          <div className="footer-copy">
            <nav className="social-links" aria-label={copy.chrome.socialNav}>
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <SocialIcon label={link.label} />
                </a>
              ))}
            </nav>
            <nav className="legal-links" aria-label={copy.chrome.legalNav}>
              {copy.legalLinks.flatMap((link, index) => {
                const anchor = (
                  <a key={link.href} href={sourcePath(link.href)}>
                    {link.label}
                  </a>
                );
                if (index === 0) return [anchor];
                return [
                  <span key={`${link.href}-dot`} className="legal-dot" aria-hidden="true">
                    •
                  </span>,
                  anchor,
                ];
              })}
            </nav>
            <p className="copyright">{copy.chrome.copyright}</p>
            <p className="disclaimer">{copy.chrome.disclaimer}</p>
            {copy.chrome.unofficial ? <p className="disclaimer">{copy.chrome.unofficial}</p> : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
