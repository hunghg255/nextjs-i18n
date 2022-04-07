import { appWithTranslation, i18n } from 'next-i18next';
import '../styles/globals.css';
import nextI18nConfig from '../next-i18next.config';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    i18n.addResourceBundle('fr', 'fr', {
      h1: 'Bonjour',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18nConfig);
