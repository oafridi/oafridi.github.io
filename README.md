# Osman Afridi — Work & curiosities

Personal portfolio, published at **https://oafridi.github.io/** using GitHub Pages.

The homepage is static HTML, CSS, and JavaScript with locally bundled Three.js
illustrations. It has no ChatGPT account dependency, backend, build step, or API
keys. Existing articles and older pages continue to use GitHub Pages' Jekyll
build, so their original URLs remain available.

## Edit the homepage

- `index.html`: introduction, featured projects, full work index, career history,
  writing links, and About section.
- `assets/app.js`: project detail text, links, dialog behavior, and 3D illustrations.
- `assets/style.css`: visual design and responsive layouts.
- `assets/three.module.js`: Three.js 0.160.1. Its license is in
  `assets/three.LICENSE.txt`.

To add a project, add an entry to the `projects` object in `assets/app.js` and a
matching `data-project` button in `index.html`. Keep project numbers and the
navigation count aligned. Existing project details can be linked directly using
URLs such as `https://oafridi.github.io/#project/ai-school-search`.

## Preview the homepage locally

Run this from the repository directory:

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`. Use a web server rather than opening `index.html`
directly, because the 3D code uses JavaScript modules.

This previews the new homepage and its assets. Legacy article templates require
Jekyll; GitHub Pages renders them during deployment.

## Publish

GitHub Pages is configured to deploy from **`master` / repository root**.
Merge a pull request into `master`, then check the Pages build and deployment in
the repository's Actions tab. No separate hosting account is needed.

## Archive

The previous blog homepage is preserved at `/archive/`. Its posts, About page,
and Projects page remain in their existing locations. The four original side
projects are also included in the new homepage's work index.
