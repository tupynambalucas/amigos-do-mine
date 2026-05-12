import React from 'react';
import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function TupynambaSection() {
  const logoPath = useBaseUrl('/tupynamba/svg/logo.svg');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src={logoPath} alt="Tupynambá Logo" className={styles.mainLogo} />
        </div>

        <div className={styles.content}>
          <div className={styles.badge}>
            <Translate id="homepage.about.badge">O Arquiteto</Translate>
          </div>
          
          <h2>
            <Translate id="homepage.about.title">Tupynambá Lucas</Translate>
          </h2>

          <p className={styles.bio}>
            <Translate id="homepage.about.description">
              Desenvolvedor Fullstack com foco em arquitetura de sistemas e apaixonado por criar experiências digitais completas e performáticas.
            </Translate>
          </p>

          <div className={styles.techGrid}>
            <div className={styles.techItem}>
              <span className={styles.techLabel}>
                <Translate id="homepage.about.tech.code">Código</Translate>
              </span>
              <span className={styles.techValue}>TypeScript, Node.js, Go</span>
            </div>
            <div className={styles.techItem}>
              <span className={styles.techLabel}>
                <Translate id="homepage.about.tech.design">Design</Translate>
              </span>
              <span className={styles.techValue}>UX/UI, Penpot, Blender</span>
            </div>
            <div className={styles.techItem}>
              <span className={styles.techLabel}>
                <Translate id="homepage.about.tech.data">Dados</Translate>
              </span>
              <span className={styles.techValue}>PostgreSQL, MongoDB, Redis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
