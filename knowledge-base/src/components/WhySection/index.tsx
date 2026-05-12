import type { ReactNode } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function WhySection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1><Translate id="homepage.why.title">Why Amigos Do Mine?</Translate></h1>
        <div>
          <div>
            <h2><Translate id="homepage.why.item1.title">Community</Translate></h2>
            <p><Translate id="homepage.why.item1.description">Be part of a server that values every player.</Translate></p>
          </div>
          <div>
            <h2><Translate id="homepage.why.item2.title">Innovation</Translate></h2>
            <p><Translate id="homepage.why.item2.description">Real web integration with the blocky world.</Translate></p>
          </div>
          <div>
            <h2><Translate id="homepage.why.item3.title">Stability</Translate></h2>
            <p><Translate id="homepage.why.item3.description">High performance and zero lag for your gameplay.</Translate></p>
          </div>
        </div>
      </div>
    </section>
  );
}
