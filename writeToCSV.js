const users = require('./user.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'userResult.csv',
    header: [
      {id: 'username', title: 'UserName'},
      {id: 'password', title: 'Password'},
    ]
  });

csvWriter.writeRecords(users)
console.log("Parse JSON to CSV successfully!");