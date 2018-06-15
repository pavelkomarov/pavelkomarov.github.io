# Pavel's Site

## Structure
- `_config.yaml` contains basic Jekyll configuration.
- `_data/template.yaml` contains some variables accessible via `site.data.whatever` for use by the theme.
- `_includes` contains pieces of html and markdown that can be reused throughout the site, like the header and footer.
- `_layouts` contains overarching structures to be used by pages. These make use of components from `_includes`.
- `projects/_posts` contains files named `YEAR-MO-DAY-title.md` which constitute project descriptions.
- `_pages` contains, well, pages of the site that are not the home page or posts
- `assets` contains things like pictures that I need to reference elsewhere.
- `theme` is where I have tried to put all the messy theme-specific css, scss, fonts, and javascript.

## Installation
1. `sudo apt-get install ruby ruby-dev build-essential` if you do not have them already
2. echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
   echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
   echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
3. `gem install jekyll jekyll-sitemap jekyll-seo-tag`
4. Start your localhost server with `jekyll serve` at the project's root directory.
5. Your site should be accessible at `localhost:4000`

<br/>
<br/>
Based on the Event theme by melvinchng.
