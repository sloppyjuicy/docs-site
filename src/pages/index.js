import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PlaceOS from '../components/placeos'
import TextLoop from 'react-text-loop';
import styles from './styles.module.css';
import {shuffle} from 'lodash';

function IntroText() {
  let things = [
    "spaces",
    "hospitals",
    "workplaces",
    "universities",
    "buildings",
    "precints",
    "cities",
    "you",
  ];
  let thing = (
    <TextLoop
      className="text--primary"
      children={shuffle(things)}
      interval={2000}
    />
  );
  return (
    <>
      <PlaceOS /> is a platform for creating digital experiences for {thing}
    </>
  );
}

function Home() {
  return (
    <Layout
      description="A software stack for buildings.">
      <main className={classnames('hero', styles.heroBanner)}>
        <div className='container'>
          <h1 className="hero__title">
            <IntroText />
          </h1>
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
