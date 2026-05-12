import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './index.module.css';
import LandingSection from '@site/src/components/LandingSection';
import MonorepoSection from '@site/src/components/MonorepoSection';
import FromSoilSection from '@site/src/components/FromSoilSection';
import TupynambaSection from '@site/src/components/TupynambaSection';
import Preloader from '@site/src/components/Preloader';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: 'Documentação Amigos Do Mine',
      })}
      description={translate({
        id: 'homepage.description',
        message: 'Documentação técnica para o ecossistema Minecraft customizado e portal web moderno.',
      })}
    >
      <BrowserOnly>
        {() => <Preloader />}
      </BrowserOnly>
      <main className={styles.homeMain}>
        <LandingSection />
        <MonorepoSection />
        <FromSoilSection />
        <TupynambaSection />
      </main>
    </Layout>
  );
}
