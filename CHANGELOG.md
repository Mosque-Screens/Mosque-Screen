# Changelog

- Mark breaking changes with `BREAKING:`. Be sure to include instructions on how applications should be upgraded.
- Include a link to your pull request.
- Don't include changes that are purely internal. The CHANGELOG should be a
  useful summary for people upgrading their application, not a replication
  of the commit log.

## 4.0.0
- Introduces a new view containing the Hadith of the day
- List of hadith to show is retrieved from a Google sheets -- the default sheet is set in `config.json`
- Provide your custom list by setting the env variable to point to your data source, as show in the README.

## 3.0.0
- BREAKING: Adds blackout periods for jummah - need to add in `blackOutPeriod_jummah` into Google Sheets App config.
- Google Sheets Template updated - https://docs.google.com/spreadsheets/d/1yVlGjnEhKLi5DSOuJMm7-ec5-iFvuiR7WkbzMdbFP9s/edit?usp=sharing
- Adds in CHANGELOG.md

## 2.0.0
- iPad and iPhone responsive

## 1.0.0
- Initial App release