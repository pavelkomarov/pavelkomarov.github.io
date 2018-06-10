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

I got this from melvinchng, and I'm working through understanding all the features listed in his description:

## Features
### Index Page
- About section with options to navigate to subpages
- Contact Us page
### Agenda Page
- Table with time and event title columns
- Speaker's name is hilighted in different color and speaker's position/title is in italic.
### Team's Profile Page
Two different design:
-  profile picture with name and email
-  user profile with picture, title, position, and profile
### Event's Location
- Google Map (need to replace it with your own API key)
### FAQs Page
- Just a typical FAQs page
### Mission, Vision, and Objectives Page
- Sections to talk about mission, vision, objectives, and history about your event
### Register Page
- A page to redirect to a sign up page
### More features
- Google Analytics built in (replace `UA-xxxxxxxx-x` with your personal analytics verification key in `_includes/2017_data/head.html`)
- SEO (check `_config.yml`)
- Customized 404 Page Not Found Page
- Designed to be futureproof as you can create a subpages for each year (eg. your-link.github.io/2015, your-link.github.io/2016, etc)
- Header with your icon logo defined, but removed from source. 
- Website logo in SVG defined, but removed from source.
- Display PDF from Google Drive

