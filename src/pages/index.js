import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useTheme from '@theme/hooks/useTheme';

const intro = (
  <>
    PlaceOS is a platform for creating digital experiences for physical
    environments. It connects devices, hardware systems and third-party software
    to provide an API for the built environment.
  </>
);

function Home() {
  const {
    siteConfig: {baseUrl, themeConfig: {navbar: {logo = {}} = {}}} = {},
  } = useDocusaurusContext();
  const {isDarkTheme} = useTheme();
  // FIXME direct use of useLogo does not appear to connect with appropriate
  // state - unsure of why.
  const logoImageUrl = isDarkTheme ? logo.srcDark : logo.src;

  return (
    <Layout
      title="Technical Docs"
      description="PlaceOS developer guides, API and deployment resources">
      <main className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <h1>
            <img className="hero__title" src={logoImageUrl} alt="PlaceOS" />
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
