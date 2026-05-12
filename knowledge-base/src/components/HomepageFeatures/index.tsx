import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Comunidade',
    Svg: require('@site/static/eloornico/svg/logo-positive.svg').default,
    description: <>Um ambiente acolhedor e focado na diversão coletiva.</>,
  },
  {
    title: 'Customização',
    Svg: require('@site/static/eloornico/svg/logo-positive.svg').default,
    description: <>Plugins e resource packs únicos desenvolvidos in-house.</>,
  },
  {
    title: 'Inovação',
    Svg: require('@site/static/eloornico/svg/logo-positive.svg').default,
    description: <>Integração web moderna para gerenciar sua experiência de jogo.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={styles.feature}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
