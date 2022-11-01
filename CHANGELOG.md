# Changelog

- Mark breaking changes with `BREAKING:`. Be sure to include instructions on how applications should be upgraded.
- Include a link to your pull request.
- Don't include changes that are purely internal. The CHANGELOG should be a
  useful summary for people upgrading their application, not a replication
  of the commit log.


## 8.0.0
- Add support for horizontal logos
- Fixes issues with branding colours not being applied correctly

## 7.2.0
- Makes widget horizontal

## 7.1.2
- Replace `_redirects` file with `netlify.toml`

## 7.1.1
- Adds `_redirects` file

## 7.1.0
- Adds new widget endpoint to display on websites

## 6.0.0
- BREAKING: Changes CSV API to JSON API. Add JSON APIs

## 5.7.0
- Remove Electron
- Fixes vulnerbility issues by updating to react-script 3.0.1

## 5.6.0
- Updates to single view to make it 30/70 split

## 5.5.1
- Add favicons with new logo designs (Generated using https://realfavicongenerator.net)

## 5.5.0
- Add Google Analytics tracking to track usage of screens

## 5.4.1
- Update to font size for hadith of the day to allow people to read from further distances

## 5.4.0
- Adds admin route and placeholder view for admin

## 5.3.0
- Fixes an issue where blackout periods were not working on single view mode.

## 5.2.0
- Fixes an issue where next jammah highlighting would not change if not refreshed.

## 5.1.0
- Adds the ability to add time formats.

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