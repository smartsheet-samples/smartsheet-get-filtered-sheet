/**
 * Requires use of the Smartsheet Javascript SDK along with this module
 * 
 * Accepts two arguments:
 * - your instance of the Smartsheet client from the Javascript SDK
 * - an options object:
 *  {
 *      sheetId: 4583173393803140,
 *      columnId: 2331373580117892,
 *      filterValue: 'Complete'
 *  }
 * 
 * The function gets the data of the sheet for options.sheetId
 * Searches through all of the rows for a match to options.filterValue
 * Returns an array of the row objects that match the given value
 */


module.exports = (smartsheetClient, options) => {
    return new Promise((resolve, reject) => {
        //Get the current data of the sheet
        smartsheetClient.sheets.getSheet({id: options.sheetId})
        .then((sheetData) => {
            //Filter the rows array to find if cells in the row match the given value in the column
            const filteredRows =  sheetData.rows.filter(row => {
                //Filter the cells array for the value based on the column id and cell value matching the given criteria
                //If they are found the array will have a length greater than 0
                //This returns true or false based on if the array is greater than 0 items
                //If true the row is included in the filter on the row
                return row.cells.filter(cell => cell.columnId === options.columnId && cell.value === options.filterValue).length > 0;
            });
            //Check for if at least 1 row was found to match the criteria and return the matched rows
            if (filteredRows.length > 0) {
                resolve({ numberOfRowsFound: filteredRows.length, rows: filteredRows});
            } else {
                //If none match return a message that nothing matched
                resolve({ message: '0 rows matched criteria.'});
            }
        })
        //If an error occurs with the Smartsheet API return that error
        .catch(err => reject({ message: 'Error getting Sheet data', smartsheetError: err}));
    });
};
