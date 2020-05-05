import React, {useEffect} from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PlaceOS from '@site/src/components/PlaceOS';
import TextLoop from 'react-text-loop';
import styles from './styles.module.css';
import {shuffle} from 'lodash';

function IntroText() {
  let things = [
    'spaces',
    'hospitals',
    'workplaces',
    'universities',
    'buildings',
    'precints',
    'cities',
    'you',
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
  // Hide the right nav items (search, theme selection etc) to reduce noise.
  useEffect(() => {
    let rightNav = document.getElementsByClassName('navbar__items--right')[0];
    let originalStyle = rightNav.style.getPropertyValue('display');
    rightNav.style.setProperty('display', 'none');
    return () => {
      rightNav.style.setProperty('display', originalStyle);
    };
  });

  // Backgrond images should be in img/bg/ and name 1.jpg, 2.jpg etc
  let randBg = () => {
    let count = 18;
    let idx = Math.ceil(Math.random() * count);
    return `img/bg/${idx}.jpg`;
  };

  return (
    <Layout description="A software stack for buildings.">
      <main
        className={classnames('hero', styles.heroBanner)}
        style={{'--bg-image': `url('${randBg()}')`}}>
        <div className="container">
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
