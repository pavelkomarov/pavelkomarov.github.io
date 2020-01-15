# Pavel's Site


## Getting started on a new machine

1. `sudo apt install ruby`
2. `gem install jekyll` Doesn't work due to environment variables?  
	`echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc`  
	`echo 'export GEM_HOME=$HOME/gems' >> ~/.bashrc`  
	`echo 'export PATH=$HOME/gems/bin:$PATH' >> ~/.bashrc`  
	`source ~/.bashrc`  
	Still doesn't work due to build errors?  
	`sudo apt install ruby-dev`  
	Still doesn't work?  
	`sudo apt install g++`  
`gem` is a package manager much like `pip`. They're going to tell you to use `bundler`, but I honestly think that shit is confusing, and it's hung on me before with no good explanation.
3. Pay attention to where the gems were installed, and make a symlink with `ln -s /var/..path/jekyll /usr/bin/jekyll` so you can just call `jekyll` from command line.
4. `gem install github-pages` should pull down and install basically everything gh-pages uses to render stuff, including `jekyll-remote-theme`
5. `jekyll serve` from the site's root directory, and visit it at `localhost:4000` in a browser.


## How Jekyll works

<pre>markdown
+html				---> [Jekyll]   ---> static website
+liquid template language		^
					|
				     configs</pre>


## How Github Pages works

1. Continuous integration listens for a push and, when one is recieved, if there is a `_config.yml` file, Jekyll is called. For Project Pages, this occurs on the `gh-pages` branch. User Pages are confusingly a special case where this occurs on the master branch.
2. Any remote themes are fetched, and Jekyll runs through its [order of operations](https://github.com/pavelkomarov/hyde#order-of-operations-for-jekyll) to produce static site output. There are so many gotchas in here that it's crazy, so I've started [writing down the most infuriating ones[(https://github.com/pavelkomarov/pavel-theme#important-notes)


## Structure
- `_config.yaml` contains basic Jekyll configuration.
- `projects/_posts` contains files named `YEAR-MO-DAY-title.md` which constitute project descriptions.
- `CNAME` (short for "custom domain name") is necessary so github's servers know where to forward queries.


