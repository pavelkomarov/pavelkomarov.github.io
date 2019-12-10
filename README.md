# Pavel's Site

## How Jekyll works

<pre>markdown
+html				---> [Jekyll]   ---> static website
+liquid template language		^
					|
				     configs</pre>

According to https://jekyllrb.com/tutorials/orderofinterpretation/:

### Order of interpretation

Jekyll converts your site in the following order:

1. **Site variables**. Jekyll looks across your files and populates site variables, such as `site`, `page`, `post`, and collection objects. (From these objects, Jekyll determines the values for permalinks, tags, categories, and other details.)
2. **Liquid**. Jekyll processes any Liquid formatting in pages that contain front matter. You can identify Liquid as follows:
	- **Liquid tags** start with `{%` and end with a `%}`. For example: `{% highlight %}` or `{% seo %}`. Tags can define blocks or be inline. Block-defining tags will also come with a corresponding end tag — for example, `{% endhighlight %}`.
	- **Liquid variables** start and end with double curly braces. For example: `{{ site.myvariable }}` or `{{ content }}`.
	- **Liquid filters** start with a pipe character (`|`) and can only be used within **Liquid variables** after the variable string. For example: the **relative_url** filter in **{{ "css/main.css" | relative_url }}**.

3. **Markdown**. Jekyll converts Markdown to HTML using the Markdown filter specified in your config file. Files must have a Markdown file extension and front matter in order for Jekyll to convert them.
4. **Layout**. Jekyll pushes content into the layouts specified by the page’s front matter (or as specified in the config file). The content from each page gets pushed into the `{{ content }}` tags within the layouts.
5. **Files**. Jekyll writes the generated content into files in the directory structure in `\_site`. Pages, posts, and collections get structured based on their permalink setting. Directories that begin with `_` (such as `\_includes` and `\_data`) are usually hidden in the output.


## Structure
- `_config.yaml` contains basic Jekyll configuration.
- `_data/whatever.yml` contains some variables accessible via `site.data.whatever` for use by the theme.
- `_includes` contains pieces of html and markdown that can be reused throughout the site, like the header.
- `_layouts` contains overarching structures to be used by pages. These make use of components from `_includes`.
- `projects/_posts` contains files named `YEAR-MO-DAY-title.md` which constitute project descriptions.
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

## Miscellanea
- `CNAME` (short for "custom domain name") is necessary so github's servers know where to forward queries.
- Jekyll outputs pages by default at `/name/index.html`. `permalink: /name.html` in the "front matter" to avoid this behavior.
- Navigating down to the `_site` folder and opening the htmls causes all the relative paths to break, so the pages don't look right. Instead go to `localhost:4000/page.html`.
- The `\_layouts` directory can be used to house `html` files peppered with Jekyll's liquid tags which can then be referenced in commonly-structured pages with calls in the "front matter":

```
---
layout: home
---
```

<br/>
<br/>
Based on the Event theme by melvinchng.
