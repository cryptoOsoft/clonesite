import { HomeMain } from "@/components/sites/insarag/home-main";
import { SiteFooter } from "@/components/sites/insarag/site-footer";
import { SiteHeader } from "@/components/sites/insarag/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader locale="en" />
      <HomeMain locale="en" />
      <SiteFooter locale="en" />
    </>
  );
}
