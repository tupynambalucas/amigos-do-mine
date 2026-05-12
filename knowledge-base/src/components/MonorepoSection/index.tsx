import React, { useState } from 'react';
import styles from './styles.module.css';
import ArchitectureDiagram from '../FromSoilSection/ArchitectureDiagram';
import Translate, { translate } from '@docusaurus/Translate';
import { WORKSPACES, MONOREPO_OVERVIEW, type WorkspaceInfo } from './data';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function MonorepoSection() {
  const { i18n } = useDocusaurusContext();
  const isEnUS = i18n.currentLocale === 'en-US';
  const [selectedId, setSelectedId] = useState<string | null>(null);
  
  const getLocalizedWorkspace = (ws: WorkspaceInfo): WorkspaceInfo => {
    if (!isEnUS || !ws.enUS) return ws;
    return { ...ws, ...ws.enUS };
  };

  const selectedWorkspace = getLocalizedWorkspace(
    selectedId ? WORKSPACES[selectedId] : MONOREPO_OVERVIEW
  );

  return (
    <section className={styles.monorepoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            <Translate id="homepage.monorepo.title">Mapa do Monorepo</Translate>
          </h2>
          <p>
            <Translate id="homepage.monorepo.subtitle">
              Visualização interativa dos contextos do Amigos Do Mine. Clique em um contexto para explorar.
            </Translate>
          </p>
        </div>

        <div className={styles.interactiveContent}>
          {/* Details Panel */}
          <div className={styles.detailsPanel}>
            <div className={styles.detailsContent}>
              <span className={styles.pathTag}>{selectedWorkspace.path}</span>
              <h3>{selectedWorkspace.name}</h3>
              <p>{selectedWorkspace.description}</p>
              
              <div className={styles.metadataSection}>
                <h4>
                  <Translate id="homepage.monorepo.techstack">Stack Tecnológica</Translate>
                </h4>
                <div className={styles.tagGrid}>
                  {selectedWorkspace.stack.map(tech => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.metadataSection}>
                <h4>
                  <Translate id="homepage.monorepo.responsibilities">Responsabilidades Principais</Translate>
                </h4>
                <ul className={styles.responsibilityList}>
                  {selectedWorkspace.responsibilities.map(resp => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Diagram Wrapper */}
          <div className={styles.diagramWrapper}>
            <ArchitectureDiagram 
              onSelect={setSelectedId} 
              activeId={selectedId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
