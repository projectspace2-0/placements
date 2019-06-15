var monk=require('monk');
var db=monk('localhost:27017/aditya');
var placements =db.get('placements');
var companydetails = db.get('companydetails');
var social=db.get('social');
var moment= require('moment');

module.exports.getUser = function(username,pwd,cb) {
  var timein=moment().format('DD-MM-YYYY, hh:mm:ss a');
  //console.log(timein);
  placements.findOne({rollno:username,password:pwd}, function(err,docs) {
  placements.update({rollno:username},{$set: {logintime: timein}})
    //console.log(docs);
    if (err) 
      {
        return cb(err)
      }
      else
      {
       cb(null, docs)
     }
  });

}

module.exports.getnewStudent = function(rollno,cb) {
  placements.find({"Status":"New"},function(err,docs){
    if(err) console.log(err);
    else{      
      //console.log(docs); 
      return cb(null,docs);           
    }
  });
}

module.exports.getUserDetails = function(rollno,cb) {
  placements.findOne({"rollno":rollno},function(err,docs) {
    console.log(docs);
    if (err) return err
    else
      //console.log(docs);
      return cb(null,docs);    
  });

}
module.exports.getCompanyDetails = function(company_name,cb) {
  companydetails.findOne({"company_name":company_name},function(err,data) {
    if (err) return err
    else
      //console.log(data);
      return cb(null,data);    
  });
}
module.exports.updateFile=function(rollno,path,cb){

  placements.update({"rollno" :rollno },{$set:path},false,true,function(err){
    if(err) return err;
  });
}

module.exports.updateMydata=function(rollno,data,cb){

  placements.update({"rollno":rollno},{$set:data},false,true,function(err){

      if(err) return err;
  });

}



module.exports.updateUG=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"UG" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateUGButton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"UG" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateProjec=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Projects" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateProjecbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Projects" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}
module.exports.updateHack=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Hackthon" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateHackbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Hackthon" : data}},function(err,docs){
      if(err) return err;
      else
        console.log(docs);
        return cb(null,docs);
  });
}
module.exports.updateSkills=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Skills" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateSkillsbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Skills" : data}},function(err,docs){
      if(err) return err;
      else
        console.log(docs);
        return cb(null,docs);
  });
}
module.exports.updateCom=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Competitions" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateCombutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Competitions" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}
module.exports.updateWork=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Workshops" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateWorkbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Workshops" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}
module.exports.updateComp=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Completion" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateCompbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Completion" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}
module.exports.updateFamily=function(rollno,data,cb){

placements.update({"rollno":rollno},{$set:data},false,true,function(err){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateSocial=function(rollno,data,cb){

placements.update({"rollno":rollno},{$set:data},false,true,function(err){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateThub=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Thub" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateThubbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Thub" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
  });
}

module.exports.updateCertifications=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$push" : {"Certifications" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
 });
}

module.exports.updateCertificationsbutton=function(rollno,data,cb){

placements.update(
  { "rollno" : rollno  },{"$pull" : {"Certifications" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
 });
}

module.exports.checkEmail=function(email,cb){

 placements.find({email:email}, function(err,docs) {
    if (err) return cb(err)
    cb(null, docs)
  });

}
module.exports.checkMail=function(email,cb){

 placements.find({email:email}, function(err,docs) {
    if (err) return cb(err)
    cb(null, docs)
  });

}

module.exports.setNewPassword=function(email,password,cb){

          placements.update({ "email": email }, { $set: { "password": password }},function(err,docs){

              if(err) return cb(err)
              cb(null,docs)

          });
  
}
