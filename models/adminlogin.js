var monk=require('monk');
var db=monk('localhost:27017/aditya');
var adminlogin =db.get('adminlogin');

module.exports.getUser = function(username,pwd,cb) {
  adminlogin.findOne({"username":"admin"}, function(err,docs) {
    if (err) return cb(err)
    cb(null, docs)
  });

}