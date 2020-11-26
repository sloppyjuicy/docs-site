# PlaceOS Docs Site

This repository contains docs renderer and associated tooling behind [docs.placeos.com](https://docs.placeos.com).

It builds on [Docusaurus 2](https://v2.docusaurus.io/).

Actual docs content can be found within [PlaceOS/docs](https://github.com/PlaceOS/docs).

### Local Development

Clone both the site, and content:
```bash
git clone --recurse-submodules git@github.com:placeos/docs-site.git
```

You'll need to bring down dependencies:
```bash
npm install
```

Finally:
```bash
npm start
```
This command starts a local development server.
Most changes are reflected live without having to restart the server.

### Deployment

Deployment is automated.

Commits to master will trigger a new build to the primary domain.

PR's each receive their own preview URL ahead of deployment.
