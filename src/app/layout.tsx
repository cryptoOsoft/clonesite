import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { getMessages, isLocale } from "@/components/sites/insarag/messages";
import "./globals.css";
import "./insarag.css";

const themeBoot = `(function(){try{var stored=localStorage.getItem("theme");var choice=stored==="light"||stored==="dark"?stored:"system";var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=choice==="system"?(dark?"dark":"light"):choice;var root=document.documentElement;root.setAttribute("data-theme",theme);root.setAttribute("data-theme-choice",choice);var platform=navigator.platform||"";var agent=navigator.userAgent||"";root.setAttribute("data-mod",/Mac|iPhone|iPad/.test(platform)||/Mac/.test(agent)?"cmd":"ctrl");}catch(e){}})();`;

export async function generateMetadata(): Promise<Metadata> {
  const localeHeader = (await headers()).get("x-locale");
  const locale = isLocale(localeHeader) ? localeHeader : "en";
  const copy = getMessages(locale);
  return {
    title: copy.meta.title,
    description: copy.meta.description,
    icons: { icon: "/sites/insarag/insarag-logo.svg" },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      images: [{ url: "/sites/insarag/hero.jpg" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#508adb",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localeHeader = (await headers()).get("x-locale");
  const lang = localeHeader === "ro" ? "ro" : "en";
  return (
    <html lang={lang} className="insarag" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        {children}
      </body>
    </html>
  );
}
