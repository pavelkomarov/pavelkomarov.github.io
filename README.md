# Pavel's Site

## Structure
\_config.yaml contains basic Jekyll configuration.
\_data/template.yaml contains some variables accessible via `site.data.whatever` for use by the theme.
\_includes contains pieces of html and markdown that can be reused throughout the site, like the header and footer.
\_layouts contains overarching structures to be used by pages. These make use of components from \_includes.
\_sass contains theme-specific formatting files.
projects\_posts contains files named `YEAR-MO-DAY-title.md` which constitute project descriptions.
\_pages contains, well, pages of the site that are not the home page or posts
\_assets contains things like pictures that I need to reference elsewhere.

## Installation
1. `sudo apt-get install ruby ruby-dev build-essential` if you do not have them already
2. echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc
echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
3. `gem install jekyll`
4. Then, install Jekyll Sitemap and Jekyll SEO gems by using the commnad `gem install jekyll-sitemap` and `gem install jekyll-seo-tag`.
5. Start your localhost server with `jekyll serve` at the project's root directory.
5. Your site should be accessible at `localhost:4000`.

I got this from melvinchng, and I'm working through understanding all the features listed in his description:

## Features
### Index Page
- Event's title, location, and date
- Welcoming remark section with video
- Speaker's profile
- About section with options to navigate to subpages
- Event Sponsors
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



## How To Use
- The main stylesheet is stored `/theme/2016_style`.
- In `/theme/2016_style/img` you will find where the pictures in `/2016` are stored at. You will find the images of all related posts in `/theme/2017_style/img`. This setup is to ensure that we are easily to move from year to year by creating new folders.
- `_2016_pages` and `_2017_pages` are the folders that store subpages.
- `_2017_data` and `_2017_data` are the folders that store each sections in home page. Those sections are can be removed by removing the `include` code in `_layout/2016_home.html` or `_layout/2017_home.html`.
- `_2016_speakers` and `_2017_speakers` contain speakers' profile. They're written in markdown style. 
- `_2017_teams` contains each team member's profile. They're written in markdown style. 
- In order to view PDF correctly, sharing setting in Google Drive must set to "Public on the web".

