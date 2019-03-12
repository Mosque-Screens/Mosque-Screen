# Changelog

- Mark breaking changes with `BREAKING:`. Be sure to include instructions on how applications should be upgraded.
- Include a link to your pull request.
- Don't include changes that are purely internal. The CHANGELOG should be a
  useful summary for people upgrading their application, not a replication
  of the commit log.

## 5.0.0
- Adds Single View mode for mosques which do not want changing views.

## 4.0.1
- Adds background to hadith of the day text.
- Removes alt text for logo so that it does not show the text "logo" when there is no internet.

## 4.0.0
- Introduces a new view containing the Hadith of the day
- List of hadith to show is retrieved from a Google sheets document -- the default sheet is set in `config.json`
- Provide your custom list by setting the env variable `REACT_APP_HADITH_DATA_SPREADSHEET_URL` to point to your data source, as show in the README.
- Any custom hadith data source must provide the data in CSV form, with two columns, `hadith` and `source`. 

## 3.0.0
- BREAKING: Adds blackout periods for jummah - need to add in `blackOutPeriod_jummah` into Google Sheets App config.
- Google Sheets Template updated - https://docs.google.com/spreadsheets/d/1yVlGjnEhKLi5DSOuJMm7-ec5-iFvuiR7WkbzMdbFP9s/edit?usp=sharing
- Adds in CHANGELOG.md

## 2.0.0
- iPad and iPhone responsive

## 1.0.0
- Initial App release