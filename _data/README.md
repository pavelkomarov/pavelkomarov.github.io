The below is quoted from https://jekyllrb.com/docs/datafiles/.

# Data Files

In addition to the built-in variables available from Jekyll, you can specify your own custom data that can be accessed via the Liquid templating system.

Jekyll supports loading data from YAML, JSON, and CSV files located in the `\_data` directory. Note that CSV files must contain a header row.

This powerful feature allows you to avoid repetition in your templates and to set site specific options without changing `\_config.yml`.

Plugins/themes can also leverage Data Files to set configuration variables.

## The Data Folder

The `\_data` folder is where you can store additional data for Jekyll to use when generating your site. These files must be YAML, JSON, or CSV files (using either the `.yml`, `.yaml`, `.json` or `.csv` extension), and they will be accessible via `site.data`.

## Example: List of members

Here is a basic example of using Data Files to avoid copy-pasting large chunks of code in your Jekyll templates:

In `\_data/members.yml`:

```
- name: Eric Mill
  github: konklone

- name: Parker Moore
  github: parkr

- name: Liu Fengyun
  github: liufengyun
```

Or `\_data/members.csv`:

```
name,github
Eric Mill,konklone
Parker Moore,parkr
Liu Fengyun,liufengyun
```

This data can be accessed via `site.data.members` (notice that the filename determines the variable name).

You can now render the list of members in a template:

```
<ul>
{% for member in site.data.members %}
  <li>
    <a href="https://github.com/{{ member.github }}">
      {{ member.name }}
    </a>
  </li>
{% endfor %}
</ul>
```