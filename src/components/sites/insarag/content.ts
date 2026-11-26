export const SOURCE_ORIGIN = "https://insarag-guidelines.netlify.app";

export function sourcePath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SOURCE_ORIGIN}${normalized}${hash}`;
}

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/758248567689855/",
  },
  { label: "X", href: "https://x.com/INSARAG" },
  { label: "YouTube", href: "https://www.youtube.com/@INSARAGNetwork" },
] as const;
