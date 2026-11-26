import { HomeMain } from "@/components/sites/insarag/home-main";
import { SiteFooter } from "@/components/sites/insarag/site-footer";
import { SiteHeader } from "@/components/sites/insarag/site-header";

export default function RomanianHome() {
  return (
    <>
      <SiteHeader locale="ro" />
      <HomeMain locale="ro" />
      <SiteFooter locale="ro" />
    </>
  );
}
