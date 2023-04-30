import { useI18n } from "vue-i18n";

export function useI18nUtils() {
  const { t, locale, setLocale } = useI18n();
  const localePath = useLocalePath();
  const changeLanguageEN = () => {
    const newLocale = locale.value === "en" ? "ar" : "en";
    setLocale(newLocale);
  };

  return { t, locale, setLocale, localePath, changeLanguageEN };
}


