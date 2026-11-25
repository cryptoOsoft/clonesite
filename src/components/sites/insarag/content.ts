export const SOURCE_ORIGIN = "https://insarag-guidelines.netlify.app";

export function sourcePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SOURCE_ORIGIN}${normalized}${hash}`;
}

export type NavLink = {
  label: string;
  href: string;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavItem = {
  label: string;
  overview?: NavLink;
  columns?: NavColumn[];
  links?: NavLink[];
};

export const navigation: NavItem[] = [
  {
    label: "Policy",
    overview: { label: "Policy overview", href: "/fundamentals/intro" },
    columns: [
      {
        heading: "INSARAG",
        links: [
          { label: "What is INSARAG", href: "/fundamentals/intro" },
          { label: "INSARAG Principles", href: "/fundamentals/insarag-principles" },
          { label: "INSARAG Guidelines", href: "/fundamentals/insarag-guidelines" },
        ],
      },
      {
        heading: "Governance & Structure",
        links: [
          { label: "INSARAG Governance", href: "/fundamentals/governance" },
          {
            label: "INSARAG Organisational Structure",
            href: "/fundamentals/governance/organisational-structure",
          },
          { label: "INSARAG Meetings", href: "/fundamentals/governance/insarag-meetings" },
        ],
      },
      {
        heading: "Members & Partners",
        links: [
          { label: "INSARAG Member", href: "/fundamentals/membership" },
          { label: "INSARAG Partnerships", href: "/fundamentals/membership/partnerships" },
        ],
      },
    ],
  },
  {
    label: "Capacity",
    overview: { label: "Capacity overview", href: "/capacity/intro" },
    columns: [
      {
        heading: "Response Capacity",
        links: [
          {
            label: "Community & First Responders",
            href: "/capacity/response-capacity/responders",
          },
          {
            label: "National USAR Framework",
            href: "/capacity/response-capacity/framework",
          },
        ],
      },
      {
        heading: "USAR Capacity",
        links: [
          {
            label: "USAR Team Capacity",
            href: "/capacity/usar-team-capacity/usar-teams",
          },
          {
            label: "Considerations Before Forming a Team",
            href: "/capacity/usar-team-capacity/considerations-before-team",
          },
          {
            label: "USAR Team Training and Roles",
            href: "/capacity/usar-team-capacity/team-roles-and-responsibilities",
          },
          { label: "See all...", href: "/capacity/usar-team-capacity/usar-teams" },
        ],
      },
      {
        heading: "National Quality Assurance",
        links: [
          {
            label: "National Accreditation Process",
            href: "/capacity/national-quality-assurance/nap",
          },
          {
            label: "INSARAG Recognised National Accreditation Process",
            href: "/capacity/national-quality-assurance/irnap",
          },
        ],
      },
    ],
  },
  {
    label: "Operations",
    overview: { label: "Operations overview", href: "/operations/intro" },
    columns: [
      {
        heading: "International USAR Response",
        links: [
          {
            label: "USAR Response Cycle",
            href: "/operations/international-usar/usar-response-cycle",
          },
          {
            label: "Response Roles and Responsibilities",
            href: "/operations/international-usar/roles-and-responsibilities",
          },
          {
            label: "Information Package Non-Classified Teams",
            href: "/operations/international-usar/information-unclassified-teams",
          },
          {
            label: "See all...",
            href: "/operations/international-usar/usar-response-cycle",
          },
        ],
      },
      {
        heading: "Operational Procedures",
        links: [
          {
            label: "Assessment, Search and Rescue",
            href: "/operations/operational-procedures/asr-levels",
          },
          {
            label: "Worksite Triage",
            href: "/operations/operational-procedures/worksite-triage",
          },
          {
            label: "INSARAG Marking and Signalling",
            href: "/operations/operational-procedures/marking-and-signalling",
          },
          {
            label: "See all...",
            href: "/operations/operational-procedures/worksite-report",
          },
        ],
      },
      {
        heading: "After USAR Operations",
        links: [
          {
            label: "End of International USAR Operations",
            href: "/operations/after-operations/end-of-international-usar",
          },
          {
            label: "Post Mission Review",
            href: "/operations/after-operations/post-mission-review",
          },
          { label: "Donations", href: "/operations/after-operations/donations" },
          {
            label: "See all...",
            href: "/operations/after-operations/mission-summary",
          },
        ],
      },
    ],
  },
  {
    label: "IEC/R",
    overview: { label: "IEC/R overview", href: "/iecr/iecr-overview/what-is-iecr" },
    columns: [
      {
        heading: "IEC/R Stakeholders & Roles",
        links: [
          {
            label: "IEC/R INSARAG Secretariat",
            href: "/iecr/iecr-stakeholders/iecr-secretariat",
          },
          { label: "IEC/R Mentor", href: "/iecr/iecr-stakeholders/mentor" },
          {
            label: "IEC/R Classifiers",
            href: "/iecr/iecr-stakeholders/iecr-classifiers",
          },
          {
            label: "See all...",
            href: "/iecr/iecr-stakeholders/insarag-iecr-stakeholders",
          },
        ],
      },
      {
        heading: "IEC/R Planning and Preparations",
        links: [
          {
            label: "Application Process & A-PoE",
            href: "/iecr/iecr-planning-preparation/application-process",
          },
          {
            label: "Exercise Control",
            href: "/iecr/iecr-planning-preparation/exercise-control",
          },
          {
            label: "Two Year Planning Timeline",
            href: "/iecr/iecr-planning-preparation/two-year-planning",
          },
          {
            label: "See all...",
            href: "/iecr/iecr-planning-preparation/mentor-assessment",
          },
        ],
      },
      {
        heading: "IEC/R Programme & Reporting",
        links: [
          {
            label: "IEC/R Programme",
            href: "/iecr/iecr-programme-reporting/iecr-programme",
          },
          {
            label: "IEC/R Checklist",
            href: "/iecr/iecr-programme-reporting/iecr-checklist",
          },
          {
            label: "IEC/R Reporting",
            href: "/iecr/iecr-programme-reporting/iecr-reporting",
          },
        ],
      },
    ],
  },
  {
    label: "Coordination",
    overview: {
      label: "Coordination overview",
      href: "/coordination/national-coordination/national-usar-coordination",
    },
    columns: [
      {
        heading: "National USAR Coordination",
        links: [
          {
            label: "National USAR Coordination Structure",
            href: "/coordination/national-coordination/national-usar-coordination",
          },
          {
            label: "USAR Coordination at National Response Cycle",
            href: "/coordination/national-coordination/coordination-response-cycle",
          },
          {
            label: "Integration of International Response to National Structures",
            href: "/coordination/national-coordination/integration-international-response",
          },
        ],
      },
      {
        heading: "Receiving International Assistance",
        links: [
          {
            label: "Host Nation Support",
            href: "/coordination/international-assistance/host-nation-support",
          },
          {
            label: "Requesting International Assistance",
            href: "/coordination/international-assistance",
          },
          {
            label: "Integration of International Response",
            href: "/coordination/international-assistance/international-response",
          },
        ],
      },
      {
        heading: "International USAR Coordination",
        links: [
          {
            label: "Reception & Departure Centre",
            href: "/coordination/international-usar-coordination/rdc",
          },
          {
            label: "USAR Coordination Cell",
            href: "/coordination/international-usar-coordination/ucc",
          },
          {
            label: "INSARAG Coordination and Management System",
            href: "/coordination/international-usar-coordination/icms",
          },
          {
            label: "See all...",
            href: "/coordination/international-usar-coordination/coordination-elements",
          },
        ],
      },
    ],
  },
  {
    label: "References",
    links: [
      { label: "Volume 1 - Policy", href: "/guides/volume-1-policy" },
      { label: "Volume 2 - National Capacity Building", href: "/guides/volume-2-capacity" },
      { label: "Volume 3 - Operations", href: "/guides/volume-3-operations" },
      { label: "Volume 4 - IEC/R", href: "/guides/volume-4-iecr" },
      {
        label: "Volume 5 - Operational Field Guide",
        href: "/guides/volume-5-operational-field-guide",
      },
    ],
  },
];

export type TopicCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export const capacityCards: TopicCard[] = [
  {
    icon: "🛠️",
    title: "USAR Team Classification Levels",
    description: "Learn the differences between Light, Medium and Heavy teams",
    href: "/capacity/usar-team-capacity/usar-teams",
  },
  {
    icon: "👥",
    title: "Team Roles & Training",
    description: "Understand the functions, responsibilities and training within a USAR team",
    href: "/capacity/usar-team-capacity/team-roles-and-responsibilities",
  },
  {
    icon: "ℹ️",
    title: "Information Package for Non-Classified Teams",
    description:
      "Explore the information package developed to help non-classified teams during international missions",
    href: "/operations/international-usar/information-unclassified-teams",
  },
];

export const operationCards: TopicCard[] = [
  {
    icon: "🔄",
    title: "International USAR Response Cycle",
    description: "Discover the 5 phases for international USAR response",
    href: "/operations/international-usar/usar-response-cycle",
  },
  {
    icon: "🧩",
    title: "Assessment, Search and Rescue Levels",
    description: "Understand the different Asessment, Search and Rescue Levels and their purpose",
    href: "/operations/operational-procedures/asr-levels",
  },
  {
    icon: "📋",
    title: "Worksite Markings",
    description: "Learn how INSARAG USAR teams mark worksites during operations",
    href: "/operations/operational-procedures/marking-and-signalling#worksite-triage-marking",
  },
  {
    icon: "⚠️",
    title: "Hazardous Materials Operations",
    description: "Learn how to detect and monitor a hazardous materials environment",
    href: "/operations/specialist-operations/hazardous-materials",
  },
];

export const volumes: { title: string; subtitle: string; href: string }[] = [
  { title: "Volume 1", subtitle: "Policy", href: "/guides/volume-1-policy" },
  {
    title: "Volume 2",
    subtitle: "National Capacity Building",
    href: "/guides/volume-2-capacity",
  },
  { title: "Volume 3", subtitle: "Operations", href: "/guides/volume-3-operations" },
  { title: "Volume 4", subtitle: "IEC/R", href: "/guides/volume-4-iecr" },
  {
    title: "Volume 5",
    subtitle: "Operational Field Guide",
    href: "/guides/volume-5-operational-field-guide",
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Copyright", href: "/legal/copyright" },
  { label: "Contact", href: "/legal/contact" },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/758248567689855/",
  },
  { label: "X", href: "https://x.com/INSARAG" },
  { label: "YouTube", href: "https://www.youtube.com/@INSARAGNetwork" },
] as const;
