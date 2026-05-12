import type { ReactNode } from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function LandingSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <div>
              <h1>
                <Translate id="homepage.hero.title" description="Main hero title on the homepage">
                  {'Engenharia para\n'}
                </Translate>
                <br />
                <Translate id="homepage.hero.subtitle" description="Secondary hero title">
                  Diversão e Performance.
                </Translate>
              </h1>
              <p>
                <Translate
                  id="homepage.hero.text.primary"
                  description="First line of the introductory paragraph"
                >
                  {'Arquitetura de monorepo de alta performance para um ecossistema Minecraft integrado.\n'}
                </Translate>
                <br />
                <Translate
                  id="homepage.hero.text.secondary"
                  description="Second line of the introductory paragraph"
                >
                  Construído para escalabilidade, segurança e diversão pura.
                </Translate>
              </p>
            </div>

            <Link to="/docs/intro">
              <Translate id="homepage.button.docs" description="Label for the documentation button">
                Explorar Arquitetura
              </Translate>
            </Link>
          </div>
        </div>

        <div className={styles.threeCanvasContainer}>
          <BrowserOnly fallback={<div />}>
            {() => {
              const ThreeCanvasScene = require('./components/ThreeCanvas').default;
              return <ThreeCanvasScene />;
            }}
          </BrowserOnly>
        </div>
      </div>
      <div className={styles.circleObject}></div>
    </section>
  );
}
