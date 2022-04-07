import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

export default function About(props) {
  const { t } = useTranslation();
  // const { t, ready } = useTranslation(['common', 'about']);
  // if (!ready) return 'loading translations...';

  return (
    <div>
      <h1>
        {t('h1', {
          page: 'About',
        })}
      </h1>

      <Link href='/'>Home</Link>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'about'])),
      // Will be passed to the page component as props
    },
  };
}
