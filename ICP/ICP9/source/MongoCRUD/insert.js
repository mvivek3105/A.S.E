var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://vivek:jkl456@ds137763.mlab.com:37763/ase_student_details";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("ase_student_details");
    var myobj = { "name": "vivek", "Major": "Computer Science", "Course": "ASE" };

    dbo.collection("student_details").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});