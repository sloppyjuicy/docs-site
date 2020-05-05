import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import ReportIssue from '../components/ReportIssue';

function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Oh noes...</h1>
            <p>It looks like the thing you are looking for, is not.</p>
            <p>
              We have recently shuffled a few things around so if you have
              landed here from a link, please do{' '}
              <ReportIssue title="Broken link...">let us know</ReportIssue>.
            </p>
            <p>Otherwise, perhaps a quick search may help?</p>
            <SearchBar />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
