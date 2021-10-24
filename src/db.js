// const url = "https://a1146b7b-5894-46e1-85ec-16a94453b684-bluemix.cloudantnosqldb.appdomain.cloud/"
const url = "https://npadmana:October15#@a1146b7b-5894-46e1-85ec-16a94453b684-bluemix.cloudantnosqldb.appdomain.cloud.cloudant.com/newdb"
const cqs = require('cloudant-quickstart')
const db = cqs(url)
db.create().then(console.log)
var docs = [
    { "name": "Ferris Bueller", "actor": "Matthew Broderick", "dob": "1962-03-21" },
    { "name": "Sloane Peterson", "actor": "Mia Sara", "dob": "1967-06-19" },
    { "name": "Cameron Frye", "actor": "Alan Ruck", "dob": "1956-07-01" }
]
db.insert(docs).then(console.log)

var newdoc = { name: "Ed Rooney", actor: "Jeffrey Jones", dob: "1946-09-28" }
db.insert(newdoc).then(console.log)
db.get('95b51f94118ae2d852393c63edacf462').then(console.log)
// { _id: '95b51f94118ae2d852393c63edacf462',
//  name: 'Ed Rooney',
//  actor: 'Jeffrey Jones',
//  dob: '1946-09-28' }