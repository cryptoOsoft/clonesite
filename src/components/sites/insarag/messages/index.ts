import { en, type Messages } from "@/components/sites/insarag/messages/en";
import { ro } from "@/components/sites/insarag/messages/ro";

export type { Messages };
export type Locale = "en" | "ro";
export type NavItem = Messages["navigation"][number];
export type ThemeChoice = keyof Messages["chrome"]["themeModes"];

const catalogs: Record<Locale, Messages> = { en, ro };

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}

export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? "");
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "ro";
}
