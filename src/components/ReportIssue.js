import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function ReportIssue({title, body, children}) {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {organizationName, projectName} = siteConfig;

  const url = new URL(`https://github.com/${organizationName}/${projectName}/issues/new`);
  title && url.searchParams.append('title', title);
  body && url.searchParams.append('body', body);

  return (
    <a href={url.href} target="_blank">
      {children}
    </a>
  );
}

export default ReportIssue;
