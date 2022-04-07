import styles from '../styles/Home.module.css';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export default function Home() {
  const { t } = useTranslation('common');
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1>
        {t('h1', {
          page: 'Home',
        })}
      </h1>

      <Link href='/' locale={router.locale === 'en' ? 'vi' : 'en'}>
        Change Lang
      </Link>

      <div>
        <Link href='/about'>About</Link>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}
