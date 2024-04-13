//create Database
const DataStore = require("nedb");
const database = new DataStore("database.db");
//create a database
database.loadDatabase();
console.log("Server is running!");

//Data handler
const fullDate = Date();

//Database Insert
function databaseInsert(){
    database.insert({Date: fullDate});
}

//Database Fnd
database.find({}, function (err, output){
    if(err){
        console.log(err);
    }
    console.log(output[0].Date);
});