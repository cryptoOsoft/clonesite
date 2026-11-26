import { sourcePath } from "@/components/sites/insarag/content";
import { getMessages, type Locale } from "@/components/sites/insarag/messages";

export function HomeMain({ locale }: { locale: Locale }) {
  const copy = getMessages(locale);
  return (
    <div id="content">
      <header className="hero">
        <div className="hero-inner">
          <img className="brand-logo" src="/sites/insarag/insarag-logo.svg" alt={copy.chrome.brandAlt} />
          <h1 className="hero-title">{copy.chrome.heroTitle}</h1>
          <p className="hero-subtitle">{copy.chrome.heroSubtitle}</p>
          <div className="hero-buttons">
            <a className="hero-btn hero-btn-primary" href={sourcePath("/fundamentals/intro")}>
              {copy.chrome.getStarted}
            </a>
            <a className="hero-btn hero-btn-ghost" href={sourcePath("/glossary")}>
              {copy.chrome.glossary}
            </a>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path
              className="wave-fill"
              d="M0,70 C260,115 520,20 790,55 C1050,90 1230,115 1440,55 L1440,150 L0,150 Z"
            />
          </svg>
        </div>
      </header>
      <main>
        <section className="band" aria-labelledby="capacity-heading">
          <div className="container">
            <h2 className="section-title" id="capacity-heading">
              {copy.chrome.capacityHeading}
            </h2>
            <div className="grid-3">
              {copy.capacityCards.map((card) => (
                <a className="topic-card" href={sourcePath(card.href)} key={card.href}>
                  <div className="card-icon" aria-hidden="true">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-more">{copy.chrome.learnMore}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="operations-heading">
          <div className="container">
            <h2 className="section-title" id="operations-heading">
              {copy.chrome.operationsHeading}
            </h2>
            <div className="grid-4">
              {copy.operationCards.map((card) => (
                <a className="topic-card" href={sourcePath(card.href)} key={card.href}>
                  <div className="card-icon" aria-hidden="true">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-more">{copy.chrome.learnMore}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="volumes-heading">
          <div className="container">
            <h2 className="section-title" id="volumes-heading">
              {copy.chrome.volumesHeading}
            </h2>
            <p className="section-subtitle">{copy.chrome.volumesSubtitle}</p>
            <div className="grid-5">
              {copy.volumes.map((volume) => (
                <a className="volume-card" href={sourcePath(volume.href)} key={volume.href}>
                  <span className="volume-badge">PDF</span>
                  <strong>{volume.title}</strong>
                  <span className="volume-sub">{volume.subtitle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
