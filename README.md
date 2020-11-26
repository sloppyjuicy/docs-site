# PlaceOS Docs Site

This repository contains docs renderer and associated tooling behind [docs.placeos.com](https://docs.placeos.com).

It builds on [Docusaurus 2](https://v2.docusaurus.io/).

Actual docs content can be found within [PlaceOS/docs](https://github.com/PlaceOS/docs).

### Local Development

Once you have cloned this repo, you'll also need to bring down dependencies:
```bash
npm install
```
This includes the external content repos noted above.

Then:
```bash
npm start
```
This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Deployment

Deployment is automated.

Commits to master will trigger a new build to the primary domain.

PR's each receive their own preview URL ahead of deployment.
