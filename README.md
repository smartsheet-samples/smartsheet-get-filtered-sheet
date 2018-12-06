# Smartsheet Get Filtered Sheet

## Get the data of a sheet and return only the rows that match a given criteria.

**Example:** Return every row in a sheet where the Status column is set to Complete.

### NOTE: This module requires the [Smartsheet Javascript SDK](https://github.com/smartsheet-platform/smartsheet-javascript-sdk) and is meant to be used alongside it.

A [GET Sheet](https://smartsheet-platform.github.io/api-docs/?javascript#get-sheet) request will return all of the current data of the sheet by default. Sometimes only certain rows are needed for a process instead.

This module solves this by: 
1. Getting the current sheet data. 
2. Searching through the rows to find matches with the given value.
3. Returning only the row objects that match the given criteria in an array.

## Installation
```
not yet published to npm
```

## Usage

```javascript
//Assumes smartsheetClient has been instantiated elsewhere already

const getFilteredSheet = require('smartsheet-get-filtered-sheet');

const options = {
    sheetId: 4583173393803140,
    columnId: 2331373580117892,
    filterValue: 'Complete'
};

getFilteredSheet(smartsheetClient, options)
 .then((results) => {
     console.log(results);
     })
 .catch((err) => {
     console.log(err)
 });
```

# Arguments

The function takes two arguments, your Smartsheet client object and an options object.

## smartsheetClient

This module is used alongside the Smartsheet Javascript SDK. Pass in your current Smartsheet client object for use in the requests.

## options

**options.sheetId**

The id of the sheet you are filtering

**options.columnId**

The id of the column to look for that will have the value to decide if the row is returned or not.

**options.filterValue**

The value to search for in the sheet. A match determines that a row should be returned.

