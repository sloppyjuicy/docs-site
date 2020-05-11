# Place Technology Website

This repository contains the public website, docs renderer, blog tools and general internet pressence for Place Technology, the makers of PlaceOS.

It builds on [Docusaurus 2](https://v2.docusaurus.io/).

Content not found under [`src/pages`](./src/pages) will be in:
- [PlaceOS/docs](https://github.com/PlaceOS/docs)
- [place-technology/blog](https://github.com/place-technology/blog)
- [place-technology/podcast](https://github.com/place-technology/podcast)

### Local Development

Once you have cloned this repo, you'll also need to bring down dependencies:
```
$ npm install
```
This includes the external content repos noted above.

Then:
```
$ npm start
```
This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Deployment is automated via [Netlify](https://www.netlify.com/).

Commits to master will trigger a new build to the primary domain.

PR's each receive their own preview URL ahead of deployment.
