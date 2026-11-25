import {
  capacityCards,
  operationCards,
  sourcePath,
  volumes,
} from "@/components/sites/insarag/content";

export function HomeMain() {
  return (
    <div id="content">
      <header className="hero">
        <div className="hero-inner">
          <img
            className="brand-logo"
            src="/sites/insarag/insarag-logo.svg"
            alt="INSARAG Preparedness Response"
          />
          <h1 className="hero-title">INSARAG Guidelines</h1>
          <p className="hero-subtitle">2026 - 2030</p>
          <div className="hero-buttons">
            <a className="hero-btn hero-btn-primary" href={sourcePath("/fundamentals/intro")}>
              Get Started →
            </a>
            <a className="hero-btn hero-btn-ghost" href={sourcePath("/glossary")}>
              Glossary →
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
              Learn More About USAR Capacity
            </h2>
            <div className="grid-3">
              {capacityCards.map((card) => (
                <a className="topic-card" href={sourcePath(card.href)} key={card.title}>
                  <div className="card-icon" aria-hidden="true">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-more">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="operations-heading">
          <div className="container">
            <h2 className="section-title" id="operations-heading">
              Explore USAR Operations
            </h2>
            <div className="grid-4">
              {operationCards.map((card) => (
                <a className="topic-card" href={sourcePath(card.href)} key={card.title}>
                  <div className="card-icon" aria-hidden="true">
                    <span>{card.icon}</span>
                  </div>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <span className="card-more">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="band" aria-labelledby="volumes-heading">
          <div className="container">
            <h2 className="section-title" id="volumes-heading">
              Volumes
            </h2>
            <p className="section-subtitle">Download the INSARAG Guidelines volumes as Word files.</p>
            <div className="grid-5">
              {volumes.map((volume) => (
                <a className="volume-card" href={sourcePath(volume.href)} key={volume.title}>
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
