import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ["en", "tr", "fr", "ar", "ru", "ha"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  try {
    const response = await fetch(`https://www.asortie.com/json/language?dil=${locale}`);

    if (!response.ok) {
      notFound();
    }
    
    const messages = await response.json();
    return {
      messages
    };
  } catch (error) {
    notFound();
  }
});
