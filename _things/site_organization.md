---
layout: page
permalink: /site_organization.html
title: How This Site Works
description: The Jekyll and GitHub Pages setup behind this site, and the hyde theme repo that powers it.
emoji: 🏗️
color: "#ffffff"
order: 15
---

# How This Site Works

*This page was drafted by Claude (claude-sonnet-4-6).*

This page describes the technical structure of [pavelkomarov.github.io](https://github.com/pavelkomarov/pavelkomarov.github.io) -- how it is built, served, and extended to project pages via a shared theme.

---

## Two Repositories, One Site

The site is split across two repos:

- **[pavelkomarov/pavelkomarov.github.io](https://github.com/pavelkomarov/pavelkomarov.github.io)** -- content: `index.html`, markdown pages in `_things/`, site-specific assets, and `_config.yml`.
- **[pavelkomarov/hyde](https://github.com/pavelkomarov/hyde)** -- theme: shared `_layouts/`, `_includes/`, and `assets/` (CSS, JS). Named after the villain in Stevenson's story, because Jekyll is evil.

The site's `_config.yml` pulls in the theme with one line:

```yaml
remote_theme: pavelkomarov/hyde
```

GitHub Pages fetches hyde at build time and merges its layouts, includes, and assets with the content repo to produce the final static site.

---

## How Jekyll Works

```
markdown
+html                     ---> [Jekyll] ---> static website
+liquid template language          ^
                                   |
                                configs
```

Jekyll processes files in this order:

1. **Site variables** -- reads front matter and config to populate `site`, `page`, and collection objects.
2. **Liquid** -- processes tags wrapped in `{` + `%` ... `%` + `}` and expressions wrapped in double curly braces.
3. **Markdown** -- converts `.md` files to HTML (a front matter block is required).
4. **Layouts** -- wraps page content in the layout named in front matter.
5. **Files** -- writes output to `_site/`, structured by permalink.

---

## How GitHub Pages Works

1. A push to the repo triggers GitHub Actions CI.
2. If `_config.yml` is present, Jekyll is invoked. For project pages this happens on the `gh-pages` branch; for user pages (this site) it happens on `main`.
3. Any `remote_theme` is fetched; only its `_layouts`, `_includes`, `_sass`, and `assets` directories make it into the build.
4. The compiled site is deployed globally. Watch progress under the **Actions** tab.

**Important:** the remote theme is fetched only at build time. Updating the hyde repo does not propagate to the live site until something is pushed to this repo to trigger a new build.

---

## Running Locally

```bash
sudo apt install ruby ruby-dev g++
export GEM_HOME=${HOME}/gems
export PATH=${HOME}/gems/bin:$PATH
gem install github-pages
jekyll serve
```

---

## Tiles Without Markdown Pages

The things section on the homepage loops over the Jekyll `things` collection (`.md` files in `_things/`), which generates a page for each tile. For tiles that should link to external URLs -- GitHub project pages, papers, etc. -- creating a dummy `.md` file just to get a tile is wasteful.

The solution: a `_data/external_tiles.yml` data file. Jekyll's `_data/` directory is the standard mechanism for structured data that drives templates without generating pages. The homepage loops over `site.data.external_tiles` in a second pass, rendering identical tile markup but linking to the `url` field instead of a generated permalink.

To add a new external tile, append an entry to `_data/external_tiles.yml`:

```yaml
- title: "My Project"
  emoji: "🚀"
  description: "Short description shown on hover."
  url: "https://example.com/my-project"
```

---

## Using This Theme on Project Pages

Sharing a theme between a user page and multiple project pages has quirks. The key threads that worked through the issues:

- [How to use a theme from a github.io site for GitHub project pages sites](https://stackoverflow.com/questions/57895117/how-to-use-theme-from-github-io-site-for-github-project-pages-sites/57909413) -- the original question and a starting answer
- [The approach that actually works](https://stackoverflow.com/questions/57895117/how-to-use-theme-from-github-io-site-for-github-project-pages-sites/59722229) -- full working solution with `remote_theme`
- [Why site variables from the theme's config are not accessible](https://stackoverflow.com/questions/59710130/why-are-site-variables-in-a-jekyll-remote-themes-config-file-not-accessible/59719859) -- variables from hyde's `_config.yml` do not propagate to sites that use it; shared config must live in each site's own `_config.yml`.

Key gotchas from the hyde README worth repeating:

- Only `_layouts`, `_includes`, `_sass`, and `assets` from a remote theme make it into the build. Other directories are silently dropped.
- Jekyll needs `_layouts/page.html` to exist in the theme; without it the build fails in a way indistinguishable from the theme reference being broken.
- Default Jekyll permalinks (`/name/index.html`) are ugly; use `permalink: /name.html` in front matter.
