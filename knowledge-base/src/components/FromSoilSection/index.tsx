import type { ReactNode } from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';
import TechCodeBlock from './TechCodeBlock';

interface TimelineItemProps {
  title: ReactNode;
  description: ReactNode;
}

function TimelineItem({ title, description }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineMarker}>
        <div className={styles.dot} />
        <div className={styles.line} />
      </div>
      <div className={styles.timelineContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FromSoilSection(): ReactNode {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <TechCodeBlock />
        </div>

        <div className={styles.content}>
          <h1>
            <Translate id="homepage.dosolo.title">Fundação Técnica</Translate>
          </h1>
          <p className={styles.subtitle}>
            <Translate id="homepage.dosolo.subtitle">
              Arquitetura escalável projetada para engenharia de alta fidelidade.
            </Translate>
          </p>

          <div className={styles.timeline}>
            <TimelineItem
              title={
                <Translate id="homepage.dosolo.item1.title">Excelência em Monorepo</Translate>
              }
              description={
                <Translate id="homepage.dosolo.item1.description">
                  Layout de raiz orientado a pacotes usando PNPM Workspaces e Turborepo para orquestração otimizada.
                </Translate>
              }
            />
            <TimelineItem
              title={<Translate id="homepage.dosolo.item2.title">Core de Domínio Type-Safe</Translate>}
              description={
                <Translate id="homepage.dosolo.item2.description">
                  Lógica de negócio e esquemas estritamente tipados compartilhados entre Web e API.
                </Translate>
              }
            />
            <TimelineItem
              title={<Translate id="homepage.dosolo.item3.title">Assets Automatizados</Translate>}
              description={
                <Translate id="homepage.dosolo.item3.description">
                  Pipeline de build automatizado para plugins e resource packs customizados.
                </Translate>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
