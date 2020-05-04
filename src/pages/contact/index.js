import React from 'react';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import styles from './styles.module.css';
import OfficeMap from '../../components/OfficeMap';

function SupportCard() {
  return (
    <div className='card'>
      <div class="card__header">
        <h2>Already using PlaceOS?</h2>
      </div>
      <div class="card__body">
        <p>
          In need of new functionality, or is something not quite
          working right?
        </p>
      </div>
      <div class="card__footer">
        <a
          className='button button--primary button--block'
          href='https://support.place.technology'>
          Let us help
        </a>
        <p>
          If you are in AU you can also call us:
          <a href="tel:1800717700"> 1800&nbsp;717&nbsp;700 </a>
          <small>(Mon-Fri 08:00-18:00 AEDST)</small>.
        </p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <Layout title='Contact'>
      <div className='container padding-vert--lg'>
        <header>
          <h1 className="pageTitle">Let's chat.</h1>
        </header>
        <main>
          <div className='row'>
            <div className={classnames('col', styles.sales)}>
              <OfficeMap />
              <p>
                We have offices in Sydney, Brisbane, Melbourne, Hong Kong,
                London and New York. If you're not in one of these cities, we
                can VC from a timezone that works for you.
              </p>
              <a
                className='button button--primary button--lg'
                href='mailto:sales@place.technology'>
                Email us
              </a>
            </div>
            <div className={classnames('col col--4', styles.support)}>
              <SupportCard />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Contact;
