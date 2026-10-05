import { en, Translations } from "./en";
import { vi } from "./vi";

export type Locale = "en" | "vi";

export const translations: Record<Locale, Translations> = {
  en,
  vi,
};

export type { Translations };
