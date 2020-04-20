import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useLogo from '@theme/hooks/useLogo';

const intro = (
  <>
    PlaceOS is a platform for creating digital experiences for physical
    environments. It connects devices, hardware systems and third-party software
    to provide an API for the built environment.
  </>
);

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {logoImageUrl, logoAlt} = useLogo();
  return (
    <Layout
      title="Technical Docs"
      description="PlaceOS developer guides, API and deployment resources">
      <main className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <h1>
            <img className="hero__title" src={logoImageUrl} alt={logoAlt} />
          </h1>
          <p className="hero__subtitle">{intro}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--primary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
