import React from 'react';
import styles from './styles.module.css';

interface ArchitectureDiagramProps {
  onSelect?: (id: string) => void;
  activeId?: string | null;
}

export default function ArchitectureDiagram({ onSelect, activeId }: ArchitectureDiagramProps) {
  const contexts = [
    { id: 'portal', label: '/portal', color: styles.portalColor, items: ['web', 'api', 'core'] },
    { id: 'minecraft', label: '/minecraft', color: styles.instanceColor, items: ['purpur', 'docker'] },
    { id: 'resources', label: '/resources', color: styles.docsColor, items: ['plugin', 'resourcepack'] },
    { id: 'studio', label: '/studio', color: styles.studioColor, items: ['tokens', 'assets'] },
    { id: 'tools', label: '/tools', color: styles.toolsColor, items: ['mcp', 'scripts'] },
  ];

  return (
    <div className={styles.diagramContainer}>
      <div className={styles.diagramGrid}>
        {/* Monorepo Root */}
        <div className={styles.rootNode}>
          <span className={styles.rootLabel}>AMIGOS DO MINE MONOREPO</span>
          {/* Visual link to the trunk */}
          <div className={styles.trunkLink} />
        </div>

        <div className={styles.contextGrid}>
          {contexts.map((ctx) => (
            <button
              key={ctx.id}
              onClick={() => onSelect?.(ctx.id)}
              className={`${styles.contextNode} ${ctx.color} ${activeId === ctx.id ? styles.activeNode : ''}`}
            >
              <span className={styles.contextLabel}>{ctx.label}</span>
              <div className={styles.subItems}>
                {ctx.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
