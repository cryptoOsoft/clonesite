import type { Messages } from "@/components/sites/insarag/messages/en";

export const ro = {
  meta: {
    title: "Ghidurile INSARAG",
    description: "Ghidurile INSARAG 2026–2030",
  },
  chrome: {
    skip: "Sari la conținutul principal",
    mainNav: "Principal",
    toggleNav: "Deschide sau închide bara de navigare",
    closeNav: "Închide navigarea",
    navigation: "Navigare",
    logoAlt: "Sigla INSARAG Preparedness Response",
    brandAlt: "INSARAG Preparedness Response",
    ochaAlt: "Sigla OCHA",
    language: "Limbă",
    searchPlaceholder: "Căutare",
    searchLabel: "Căutare",
    clearSearch: "Șterge căutarea",
    loadingResults: "Se încarcă rezultatele…",
    noResults: "Niciun rezultat pentru „{query}”.",
    seeAllResults: "Vezi toate rezultatele",
    socialNav: "Rețele sociale",
    legalNav: "Linkuri legale",
    learnMore: "Află mai multe →",
    getStarted: "Începe →",
    glossary: "Glosar →",
    heroTitle: "Ghidurile INSARAG",
    heroSubtitle: "2026 - 2030",
    capacityHeading: "Află mai multe despre capacitatea USAR",
    operationsHeading: "Explorează operațiunile USAR",
    volumesHeading: "Volume",
    volumesSubtitle: "Descarcă volumele Ghidurilor INSARAG ca fișiere Word.",
    copyright: "© 2026 Biroul Națiunilor Unite pentru Coordonarea Afacerilor Umanitare (OCHA).",
    disclaimer:
      "Informațiile de pe acest site nu reflectă în mod necesar punctele de vedere ale Națiunilor Unite, OCHA, INSARAG sau ale organizațiilor participante. Creat de USAR.NL.",
    unofficial: "Traducere neoficială. Versiunea oficială este în limba engleză.",
    themeModes: {
      light: "luminos",
      dark: "întunecat",
      system: "sistem",
    },
    themeTitle: "mod {mode}",
    themeAria: "Comută între modul întunecat și cel luminos (acum mod {mode})",
  },
  navigation: [
    {
      label: "Politică",
      overview: { label: "Prezentare politică", href: "/fundamentals/intro" },
      columns: [
        {
          heading: "INSARAG",
          links: [
            { label: "Ce este INSARAG", href: "/fundamentals/intro" },
            { label: "Principiile INSARAG", href: "/fundamentals/insarag-principles" },
            { label: "Ghidurile INSARAG", href: "/fundamentals/insarag-guidelines" },
          ],
        },
        {
          heading: "Guvernanță și structură",
          links: [
            { label: "Guvernanța INSARAG", href: "/fundamentals/governance" },
            {
              label: "Structura organizatorică INSARAG",
              href: "/fundamentals/governance/organisational-structure",
            },
            { label: "Reuniunile INSARAG", href: "/fundamentals/governance/insarag-meetings" },
          ],
        },
        {
          heading: "Membri și parteneri",
          links: [
            { label: "Membru INSARAG", href: "/fundamentals/membership" },
            { label: "Parteneriatele INSARAG", href: "/fundamentals/membership/partnerships" },
          ],
        },
      ],
    },
    {
      label: "Capacitate",
      overview: { label: "Prezentare capacitate", href: "/capacity/intro" },
      columns: [
        {
          heading: "Capacitate de răspuns",
          links: [
            {
              label: "Comunitate și primii respondenți",
              href: "/capacity/response-capacity/responders",
            },
            {
              label: "Cadrul național USAR",
              href: "/capacity/response-capacity/framework",
            },
          ],
        },
        {
          heading: "Capacitate USAR",
          links: [
            {
              label: "Capacitatea echipelor USAR",
              href: "/capacity/usar-team-capacity/usar-teams",
            },
            {
              label: "Considerații înainte de înființarea unei echipe",
              href: "/capacity/usar-team-capacity/considerations-before-team",
            },
            {
              label: "Instruirea și rolurile echipei USAR",
              href: "/capacity/usar-team-capacity/team-roles-and-responsibilities",
            },
            { label: "Vezi tot...", href: "/capacity/usar-team-capacity/usar-teams" },
          ],
        },
        {
          heading: "Asigurarea calității la nivel național",
          links: [
            {
              label: "Procesul național de acreditare",
              href: "/capacity/national-quality-assurance/nap",
            },
            {
              label: "Procesul național de acreditare recunoscut de INSARAG",
              href: "/capacity/national-quality-assurance/irnap",
            },
          ],
        },
      ],
    },
    {
      label: "Operațiuni",
      overview: { label: "Prezentare operațiuni", href: "/operations/intro" },
      columns: [
        {
          heading: "Răspuns USAR internațional",
          links: [
            {
              label: "Ciclul de răspuns USAR",
              href: "/operations/international-usar/usar-response-cycle",
            },
            {
              label: "Roluri și responsabilități în răspuns",
              href: "/operations/international-usar/roles-and-responsibilities",
            },
            {
              label: "Pachet de informații pentru echipele neclasificate",
              href: "/operations/international-usar/information-unclassified-teams",
            },
            {
              label: "Vezi tot...",
              href: "/operations/international-usar/usar-response-cycle",
            },
          ],
        },
        {
          heading: "Proceduri operaționale",
          links: [
            {
              label: "Evaluare, căutare și salvare",
              href: "/operations/operational-procedures/asr-levels",
            },
            {
              label: "Triajul punctelor de lucru",
              href: "/operations/operational-procedures/worksite-triage",
            },
            {
              label: "Marcajul și semnalizarea INSARAG",
              href: "/operations/operational-procedures/marking-and-signalling",
            },
            {
              label: "Vezi tot...",
              href: "/operations/operational-procedures/worksite-report",
            },
          ],
        },
        {
          heading: "După operațiunile USAR",
          links: [
            {
              label: "Încheierea operațiunilor USAR internaționale",
              href: "/operations/after-operations/end-of-international-usar",
            },
            {
              label: "Analiza post-misiune",
              href: "/operations/after-operations/post-mission-review",
            },
            { label: "Donații", href: "/operations/after-operations/donations" },
            {
              label: "Vezi tot...",
              href: "/operations/after-operations/mission-summary",
            },
          ],
        },
      ],
    },
    {
      label: "IEC/R",
      overview: { label: "Prezentare IEC/R", href: "/iecr/iecr-overview/what-is-iecr" },
      columns: [
        {
          heading: "Părți implicate și roluri IEC/R",
          links: [
            {
              label: "Secretariatul INSARAG pentru IEC/R",
              href: "/iecr/iecr-stakeholders/iecr-secretariat",
            },
            { label: "Mentor IEC/R", href: "/iecr/iecr-stakeholders/mentor" },
            {
              label: "Clasificatori IEC/R",
              href: "/iecr/iecr-stakeholders/iecr-classifiers",
            },
            {
              label: "Vezi tot...",
              href: "/iecr/iecr-stakeholders/insarag-iecr-stakeholders",
            },
          ],
        },
        {
          heading: "Planificarea și pregătirea IEC/R",
          links: [
            {
              label: "Procesul de aplicare și A-PoE",
              href: "/iecr/iecr-planning-preparation/application-process",
            },
            {
              label: "Controlul exercițiului",
              href: "/iecr/iecr-planning-preparation/exercise-control",
            },
            {
              label: "Calendarul de planificare pe doi ani",
              href: "/iecr/iecr-planning-preparation/two-year-planning",
            },
            {
              label: "Vezi tot...",
              href: "/iecr/iecr-planning-preparation/mentor-assessment",
            },
          ],
        },
        {
          heading: "Programul și raportarea IEC/R",
          links: [
            {
              label: "Programul IEC/R",
              href: "/iecr/iecr-programme-reporting/iecr-programme",
            },
            {
              label: "Lista de verificare IEC/R",
              href: "/iecr/iecr-programme-reporting/iecr-checklist",
            },
            {
              label: "Raportarea IEC/R",
              href: "/iecr/iecr-programme-reporting/iecr-reporting",
            },
          ],
        },
      ],
    },
    {
      label: "Coordonare",
      overview: {
        label: "Prezentare coordonare",
        href: "/coordination/national-coordination/national-usar-coordination",
      },
      columns: [
        {
          heading: "Coordonare USAR națională",
          links: [
            {
              label: "Structura de coordonare USAR națională",
              href: "/coordination/national-coordination/national-usar-coordination",
            },
            {
              label: "Coordonarea USAR în ciclul național de răspuns",
              href: "/coordination/national-coordination/coordination-response-cycle",
            },
            {
              label: "Integrarea răspunsului internațional în structurile naționale",
              href: "/coordination/national-coordination/integration-international-response",
            },
          ],
        },
        {
          heading: "Primirea asistenței internaționale",
          links: [
            {
              label: "Sprijinul țării gazdă",
              href: "/coordination/international-assistance/host-nation-support",
            },
            {
              label: "Solicitarea asistenței internaționale",
              href: "/coordination/international-assistance",
            },
            {
              label: "Integrarea răspunsului internațional",
              href: "/coordination/international-assistance/international-response",
            },
          ],
        },
        {
          heading: "Coordonare USAR internațională",
          links: [
            {
              label: "Centrul de recepție și plecare",
              href: "/coordination/international-usar-coordination/rdc",
            },
            {
              label: "Celula de coordonare USAR",
              href: "/coordination/international-usar-coordination/ucc",
            },
            {
              label: "Sistemul de coordonare și management INSARAG",
              href: "/coordination/international-usar-coordination/icms",
            },
            {
              label: "Vezi tot...",
              href: "/coordination/international-usar-coordination/coordination-elements",
            },
          ],
        },
      ],
    },
    {
      label: "Referințe",
      links: [
        { label: "Volumul 1 - Politică", href: "/guides/volume-1-policy" },
        { label: "Volumul 2 - Dezvoltarea capacității naționale", href: "/guides/volume-2-capacity" },
        { label: "Volumul 3 - Operațiuni", href: "/guides/volume-3-operations" },
        { label: "Volumul 4 - IEC/R", href: "/guides/volume-4-iecr" },
        {
          label: "Volumul 5 - Ghid operațional de teren",
          href: "/guides/volume-5-operational-field-guide",
        },
      ],
    },
  ],
  capacityCards: [
    {
      icon: "🛠️",
      title: "Nivelurile de clasificare ale echipelor USAR",
      description: "Află diferențele dintre echipele ușoare, medii și grele",
      href: "/capacity/usar-team-capacity/usar-teams",
    },
    {
      icon: "👥",
      title: "Rolurile și instruirea echipei",
      description: "Înțelege funcțiile, responsabilitățile și instruirea dintr-o echipă USAR",
      href: "/capacity/usar-team-capacity/team-roles-and-responsibilities",
    },
    {
      icon: "ℹ️",
      title: "Pachet de informații pentru echipele neclasificate",
      description:
        "Explorează pachetul de informații creat pentru echipele neclasificate în misiuni internaționale",
      href: "/operations/international-usar/information-unclassified-teams",
    },
  ],
  operationCards: [
    {
      icon: "🔄",
      title: "Ciclul de răspuns USAR internațional",
      description: "Descoperă cele 5 faze ale răspunsului USAR internațional",
      href: "/operations/international-usar/usar-response-cycle",
    },
    {
      icon: "🧩",
      title: "Nivelurile de evaluare, căutare și salvare",
      description: "Înțelege nivelurile de evaluare, căutare și salvare și rolul lor",
      href: "/operations/operational-procedures/asr-levels",
    },
    {
      icon: "📋",
      title: "Marcajele punctelor de lucru",
      description: "Află cum marchează echipele USAR INSARAG punctele de lucru în timpul operațiunilor",
      href: "/operations/operational-procedures/marking-and-signalling#worksite-triage-marking",
    },
    {
      icon: "⚠️",
      title: "Operațiuni cu materiale periculoase",
      description: "Află cum se detectează și se monitorizează un mediu cu materiale periculoase",
      href: "/operations/specialist-operations/hazardous-materials",
    },
  ],
  volumes: [
    { title: "Volumul 1", subtitle: "Politică", href: "/guides/volume-1-policy" },
    {
      title: "Volumul 2",
      subtitle: "Dezvoltarea capacității naționale",
      href: "/guides/volume-2-capacity",
    },
    { title: "Volumul 3", subtitle: "Operațiuni", href: "/guides/volume-3-operations" },
    { title: "Volumul 4", subtitle: "IEC/R", href: "/guides/volume-4-iecr" },
    {
      title: "Volumul 5",
      subtitle: "Ghid operațional de teren",
      href: "/guides/volume-5-operational-field-guide",
    },
  ],
  legalLinks: [
    { label: "Notificare de confidențialitate", href: "/legal/privacy-notice" },
    { label: "Termeni de utilizare", href: "/legal/terms-of-use" },
    { label: "Declarație de limitare a răspunderii", href: "/legal/disclaimer" },
    { label: "Drepturi de autor", href: "/legal/copyright" },
    { label: "Contact", href: "/legal/contact" },
  ],
} satisfies Messages;
