import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./insarag.css";

const themeBoot = `(function(){try{var stored=localStorage.getItem("theme");var choice=stored==="light"||stored==="dark"?stored:"system";var dark=window.matchMedia("(prefers-color-scheme: dark)").matches;var theme=choice==="system"?(dark?"dark":"light"):choice;var root=document.documentElement;root.setAttribute("data-theme",theme);root.setAttribute("data-theme-choice",choice);var platform=navigator.platform||"";var agent=navigator.userAgent||"";root.setAttribute("data-mod",/Mac|iPhone|iPad/.test(platform)||/Mac/.test(agent)?"cmd":"ctrl");}catch(e){}})();`;

export const metadata: Metadata = {
  title: "INSARAG Guidelines",
  description: "INSARAG Guidelines",
  icons: { icon: "/sites/insarag/insarag-logo.svg" },
  openGraph: {
    title: "INSARAG Guidelines",
    description: "INSARAG Guidelines",
    images: [{ url: "/sites/insarag/hero.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#508adb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="insarag" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        {children}
      </body>
    </html>
  );
}
