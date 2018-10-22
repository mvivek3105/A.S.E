
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://ds137763.mlab.com:37763/ase_student_details';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

