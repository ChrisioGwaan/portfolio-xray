import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Ensure `requestLocale` is resolved before using it
  const locale = await requestLocale;

  // Validate that the resolved `locale` is valid
  if (!locale || !routing.locales.includes(locale)) {
    notFound(); // Show 404 page for invalid locales
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
