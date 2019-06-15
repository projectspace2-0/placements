var express = require('express');
var router = express.Router();
var moment= require('moment');
var students = require('../models/students');
var nodemailer = require('nodemailer');
var email   = require('emailjs/email');
var async = require('async');
var randomstring=require('randomstring'); 
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var multer = require('multer');
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");


var admin = require('../models/admin');
var multer=require('multer');
var monk=require('monk');
    var dbs=monk('localhost:27017/aditya');
    var students2017=dbs.get('students2017');
    var placements=dbs.get('placements');
    var adminlogin=dbs.get('adminlogin');
    var collaborators = dbs.get('collaborators');
    var companydetails = dbs.get('companydetails');
    var Enrolledstudents = dbs.get('Enrolledstudents');

//change password
router.get('/change',function(req,res){
 if(req.session && req.session.user){
    res.locals.user = req.session.user;
    res.render('change');
  }
  else{
    req.session.reset();
    res.render('login');
  }
});

//login
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',function(req,res){

  if(req.session && req.session.user){
    res.locals.user = req.session.user;
    res.redirect('dashbord');
  }
  else{
    req.session.reset();
    res.render('login');
  }
});

/*forget Password*/
router.get('/forgetpassword',function(req,res){
    res.render('fpass');

});



/* New User Account*/
router.get('/newuser',function(req,res){
    res.render('newuser');

});

router.post('/checkMail', function(req, res) {
  //console.log(req.body.email);
    students.checkMail(req.body.email,function(err,datas){
    //console.log(datas);
    if(datas.length!=0){
    var Data=datas;
  //console.log(doctorData);
    for(i=0;i<Data.length;i++){
      //console.log(Data[i].email);
    if(Data[i].email==req.body.email){
     res.send("success");
  }
  else{
    console.log("not found");
    res.send("Email not Found");
  }
}
}
});
});

router.post('/sendEmail',function(req,res){
  students.checkEmail(req.body.email,function(err,datas){
    //console.log(datas);
    if(datas.length!=0){
    var Data=datas;
  //console.log(doctorData);
    for(i=0;i<Data.length;i++){
      //console.log(Data[i].email);
    if(Data[i].email==req.body.email){
     res.send("success");
     var name=Data[i].name;
     //console.log(Data[i].name);
     //console.log(name);
  }
  else{
    console.log("not found");
    res.send("Email not Found");
  }
}
}else
{
  console.log("not found");
    res.send("Email not Found");

}
  var newpassword =randomstring.generate(7);
  //console.log(newpassword);

  students.setNewPassword(req.body.email,newpassword,function(err,user){
    if(!user){
      console.log('error');

    }
    else{

      var server=email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in",
                                 password:"Thub@aditya",
                                 host:    "smtp.gmail.com",
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username",
                                 password:"password",
                                 host:    "smtp-mail.outlook.com",
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);


                                var msg="";
                                  msg += "<html><body class=\"\" style=\"\/* background-color: #7acbee; *\/font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color: #7acbee;width:100%;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\">&nbsp;<\/td><td class=\"container\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;\"><div class=\"content\" style=\"box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;\"><!-- START CENTERED WHITE CONTAINER --><span class=\"preheader\" style=\"color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;\"><\/span><table class=\"main\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;\"><tbody><tr><td class=\"wrapper\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\"><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;margin-left: 210px;\"><img src='http:\/\/myhub.aec.edu.in\/myhub.jpg' width=\"80px\"><\/p><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;\">Hi "+name+", <br><br>Your password for account activation is <b>"+newpassword+"<\/b><\/p><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;\"><tbody><tr><td align=\"left\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\"><center><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;\"><tbody><tr><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;\"><\/td><\/tr><\/tbody><\/table><\/center><\/td><\/tr><\/tbody><\/table><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;\"><\/p><center><b><\/b><\/center><p><\/p><p style=\"font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;\">Thanks &amp; Regards,<br>Aditya&#39;s myHUB.<\/p><\/td><\/tr><\/tbody><\/table><\/td><\/tr><\/tbody><\/table><!-- START FOOTER --><div class=\"footer\" style=\"clear:both;padding-top:10px;text-align:center;width:100%;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;\"><tbody><tr><td class=\"content-block\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;color: #000000;font-size:12px;text-align:center;\"><span class=\"apple-link\" style=\"color: #000000;font-size:12px;text-align:center;\">Aditya Group of Educational Institutions,Surampalem<\/span><br>This email is system generated, please do not respond to this email.<\/td><\/tr><tr><td class=\"content-block powered-by\" style=\"font-family:sans-serif;font-size:14px;vertical-align:top;color: black;font-size:12px;text-align:center;\">Powered by T-HUB. <br><a href='http:\/\/www.technicalhub.io' target=\"_blank\" style=\"color:white;\" >www.technicalhub.io<\/a><\/td><\/tr><\/tbody><\/table><\/div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --><\/div><\/td><td style=\"font-family:sans-serif;font-size:14px;vertical-align:top;\">&nbsp;<\/td><\/tr><\/tbody><\/table><\/body><\/html>";

                                //console.log(qrdata);

                              var message = {
                                 text:    msg,
                                 from:    "myHUB<myhub.helpline@aditya.ac.in>",
                                 to:      req.body.email,  // change mail for faculty
                                 cc:      "",
                                 subject: "my HUB Account Activation",
                                 attachment:
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}

                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) {
                              console.log(err || message);
                               });


       }



  })

});
});

//update Project

router.post('/projec',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateProjec(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/projecremove',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateProjecbutton(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/thub',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateThub(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/thubremove',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateThubbutton(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/certi',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateCertifications(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/certiremove',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateCertificationsbutton(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/family',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateFamily(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/ug',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateUG(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

router.post('/ugremove',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateUGButton(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

function updateEducation(sf,data) {

 students.updateFile(sf,data,function(err){
        console.log(err);
      });

}


router.post('/uped',function(req,res){
if(req.body.SSC){
  var da=JSON.parse(req.body.SSC);
  var data={
              "SSC.YearOfPass":da.YearOfPass,
               "SSC.Institution":da.Institution,
               "SSC.Percentage":da.Percentage
            };
 updateEducation(req.session.user.rollno,data);
}
else if(req.body.Inter){
  var da=JSON.parse(req.body.Inter);
  var data={
              "Inter.YearOfPass":da.YearOfPass,
               "Inter.Institution":da.Institution,
               "Inter.Percentage":da.Percentage
            };

 updateEducation(req.session.user.rollno,data);
}
else if(req.body.Diploma){
  var da=JSON.parse(req.body.Diploma);
  var data={
              "Diploma.YearOfPass":da.YearOfPass,
               "Diploma.Institution":da.Institution,
               "Diploma.Percentage":da.Percentage
            };

 updateEducation(req.session.user.rollno,data);
}
if(req.body.UG){
  var da=JSON.parse(req.body.UG);
   var data={
              "UG.Course":da.Course,
              "UG.YearOfPass":da.YearOfPass,
               "UG.Institution":da.Institution,
               "UG.Percentage":da.Percentage
            };
 updateEducation(req.session.user.rollno,data);
}
if(req.body.PG){
  var da=JSON.parse(req.body.PG);
   var data={
              "PG.Course":da.Course,
              "PG.YearOfPass":da.YearOfPass,
               "PG.Institution":da.Institution,
               "PG.Percentage":da.Percentage
            };
 updateEducation(req.session.user.rollno,data);
}
if(req.body.PHD){
  var da=JSON.parse(req.body.PHD);
   var data={
              "PHD.YearOfPass":da.YearOfPass,
               "PHD.Institution":da.Institution,
               "PHD.Percentage":da.Percentage
            };
 updateEducation(req.session.user.rollno,data);
}
if(req.body.Other){
  var da=JSON.parse(req.body.Other);
   var data={
              "Other.YearOfPass":da.YearOfPass,
               "Other.Institution":da.Institution,
               "Other.Percentage":da.Percentage
            };
 updateEducation(req.session.user.rollno,data);
}
if(req.body.Passportdetails){

  var da=JSON.parse(req.body.Passportdetails);
  //console.log(da);
  var data={Passportdetails:da};
  updateEducation(req.session.user.rollno,data);
}

});



router.get('/edt',function(req,res){
res.render('ed');

});

router.post('/updatemydata',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateMydata(req.session.user.rollno,req.body,function(err,docs){

    if(err) return err;

  });
  res.send('success');
});

//login
router.post('/login',function(req,res){
  students.getUser(req.body.username,req.body.password,function(err,user){
    if(!user){
      res.render('login', { error: 'Invalid username or password.' });
    }
    else{
        delete user.Password;
        req.session.user = user;
          res.redirect('/dashbord');
      }
  });
});
//LOGOUT
router.get('/logout', function(req, res){
  if(req.session && req.session.user){
    students.getUserDetails(req.session.user.rollno,function(err,docs){
    res.locals.user = docs;
  var Name = req.session.user.rollno;
  //console.log(Name);
  var timeout=moment().format('DD-MM-YYYY, hh:mm:ss a');
  placements.update({rollno:Name},{$set: {logouttime: timeout}})
  req.session.reset();
  res.redirect('/login');
});
}
});

//dashboard after login
router.get('/dashbord',function(req,res){
  if(req.session && req.session.user){
     students.getUserDetails(req.session.user.rollno,function(err,docs){
    res.locals.user = docs;
    res.render('dashboard');
  });
  }
  else{
    req.session.reset();
    res.redirect('login');
  }
});

//admin login
router.post('/admin', function(req, res, next) {
  
    var un=req.body.username;
    req.session.uname=un;
    var pw=req.body.password;
    //console.log(un);
    //console.log(pw);
    adminlogin.findOne({username:un,password:pw},function(err,docs){
                            
            // req.session.user = docs;
            if(!docs)
            {
          res.render('adminlogin',{error:'invalid username or password'});
            }
           else
          {
               delete docs.pass;
               req.session.username=un;
            req.session.username=docs;
          if( req.session.username=="admin"){
            res.render('admin');
          }
res.redirect('/admin');
          }
});
});
//bar graphs
router.post('/statistics', function(req, res, next) {
    var col = req.body.College;
    console.log(col);

    Enrolledstudents.find({},function(err,data){
      res.send(data);
    });
});
//Get admin
router.get('/admin', function(req, res, next) {
  var date = moment().format('YYYY-MM-DD');
  console.log(date);
    placements.find({},function(err,docs){
    Enrolledstudents.find({},function(err,docs1){
    Enrolledstudents.find({"college":"AEC", "status":"Placed"},function(err,paec){
    Enrolledstudents.find({"college":"ACET", "status":"Placed"},function(err,pacet){
    Enrolledstudents.find({"college":"ACE", "status":"Placed"},function(err,pace){
    Enrolledstudents.find({"college":"AEC", "status":"Applied"},function(err,eaec){
    Enrolledstudents.find({"college":"ACET", "status":"Applied"},function(err,eacet){
    Enrolledstudents.find({"college":"ACE", "status":"Applied"},function(err,eace){
    Enrolledstudents.find({"status":"Selected"},function(err,en){
    Enrolledstudents.find({"status":"Aptitude Test"},function(err,ot){
    Enrolledstudents.find({"status":"Group Discussion"},function(err,gd){
    Enrolledstudents.find({"status":"Technical Interview"},function(err,ti){
    Enrolledstudents.find({"status":"HR Interview"},function(err,fi){
    Enrolledstudents.find({"status":"Placed"},function(err,pl){
    companydetails.find({visit_date: {$gt: date}},function(err,active){
    companydetails.find({visit_date: {$eq: date}},function(err,processing){
    companydetails.find({visit_date: {$lt: date}},function(err,completed){
    companydetails.find({},function(err,company){
    res.locals.company = company;
    res.locals.paec = paec;
    res.locals.pacet = pacet;
    res.locals.pace = pace;
    res.locals.eaec = eaec;
    res.locals.eacet = eacet;
    res.locals.eace = eace;
    res.locals.en = en;
    res.locals.ot = ot;
    res.locals.gd = gd;
    res.locals.ti = ti;
    res.locals.fi = fi;
    res.locals.pl = pl;
    res.locals.active = active;
    res.locals.processing = processing;
    res.locals.completed = completed;
    res.locals.user1 = docs1;
    res.locals.user = docs;
    res.render('admin');
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
});
});
//add students
router.post('/addstudent', function(req, res) {
  var data={
    name : req.body.name,
    rollno : req.body.rollno,
    dept : req.body.dept,
    college : req.body.college,
    email : req.body.email,
    year : req.body.year,
    mobile : req.body.mobile,
    status:"Active"
  };
placements.insert(data,function(err,docs){
  if(err)
    console.log(err);

});
res.redirect('admin');
});



//add multiple students
var storage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      //var datetimestamp = Date.now();
      cb(null, file.originalname)
  }
});
var upload = multer({ //multer settings
  storage: storage,
  fileFilter : function(req, file, callback) { //file filter
      if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
          return callback(new Error('Wrong extension type'));
      }
      callback(null, true);
  }
}).single('file');
    /** API path that will upload the files */



router.post('/multipleadd', function(req, res) {
  var exceltojson;
  upload(req,res,function(err){
      if(err){
           res.json({error_code:1,err_desc:err});
           return;
      }
      /** Multer gives us file info in req.file object */
      if(!req.file){
          res.json({error_code:1,err_desc:"No file passed"});
          return;
      }
      /** Check the extension of the incoming file and 
       *  use the appropriate module
       */
      if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
          exceltojson = xlsxtojson;
      } else {
          exceltojson = xlstojson;
      }
      //console.log(req.file.path);
      try {
          exceltojson({
              input: req.file.path,
              output: "out.json", //since we don't need output.json
              //lowerCaseHeaders:false
          }, function(err,result){
              if(err) {
                  return res.send('error in importing data');
              } 
              saveData(result);
              res.redirect("/admin");
      });
      } catch (e){
          res.send("Corupted excel file");
      } 
  });
});
function saveData(data) {
 //console.log(data);
for(var i=0;i<data.length;i++){
placements.update({"rollno":data[i].rollno},{$set:{"rollno":data[i].rollno, "name":data[i].name,"dept":data[i].dept,"college":data[i].college,"email":data[i].email,"mobile":data[i].mobile,"year":data[i].year, "status" : "Active"}},{upsert: true },  function(err, data ) { 
    //console.log(data);
    if(err)
    console.log(err);
});
}
}

//add Resume
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, req.session.user.rollno + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var upload = multer({ //multer settings
  storage: storage,
  fileFilter : function(req, file, callback) { //file filter
      if (['doc','pdf','docx','txt','rtf'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
          return callback(new Error('Wrong extension type'));
      }
      callback(null, true);
  }
}).single('file');

    /** API path that will upload the files */
    router.post('/resume', function(req, res) {
      if(req.session && req.session.user){
        console.log(req.session.user.rollno);
        upload(req,res,function(err){
            console.log(req.file);
            if(err){
                 res.json("Invalid Extension. Please try uploading (.doc)(.docx)(.txt)(.pdf)(.rtf) Extension Files");
                 return;
            }
             res.redirect('/mydata');
        });
      }
    });


//Applied Students
router.get('/appliedstudents/:cname', function(req, res) {
    console.log(req.params.cname);
    Enrolledstudents.find({"company_name":req.params.cname, "status":"Applied"},function(err,applied){
      res.locals.applied = applied;
      res.render('appliedstudents');
    });
});
//Active
router.post('/active', function(req, res) {
  var company_name = req.body.company_name;
  // console.log(company_name);
  placements.update({"rollno":req.body.rollno},{$set:{"status":"Applied"}},{upsert: true }, function(err, data){
  //placements.update({"rollno":req.body.rollno},{$push: {company_name: {$each: [{"company_name":company_name}],$position: 1}}})
  placements.find({"rollno":req.body.rollno}, function(err, data3){
  companydetails.find({"company_name":company_name}, function(err, data1){
  var company_name = data1[0].company_name;
  var from = data1[0].from;
  var email = data1[0].email;
  var to = data1[0].to;
  var location = data1[0].location;
  var position = data1[0].position;
  var sector = data1[0].sector;
  var ctc = data1[0].ctc;
  var visit_date = data1[0].visit_date;
  var mobile = data3[0].mobile;
  var name = data3[0].name;
  var dept = data3[0].dept;
  var email1 = data3[0].email;
  var status = data3[0].status;
  var college = data3[0].college;  
  var percentage = data3[0].percentage;
  Enrolledstudents.insert({"rollno":req.body.rollno,"college":req.body.college,"mobile":mobile,"percentage":percentage,"name":name,"status":status,"dept":dept,"email1":email1,"company_name":req.body.company_name,"email":email,"from":from,"to":to,"location":location,"position":position,"sector":sector,"ctc":ctc,"visit_date":visit_date} , function(err, data2){
});
});
});
});
});
//Enroll
router.post('/enroll', function(req, res) {
  if(req.session && req.session.user){
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"Selected"}},{upsert: true }, function(err, data){
    //console.log(data);
  });
}
});
//Select
router.post('/select', function(req, res) {
  if(req.session && req.session.user){
  //console.log(req.body.rollno);
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"Aptitude Test"}},{upsert: true }, function(err, data){
    //console.log(data);
  });
}
});

//online Test
router.post('/onlinetest', function(req, res) {
  //console.log(req.body.online);
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"Group Discussion", "online": req.body.online}},{upsert: true }, function(err, data){
    //console.log(data);
  });
});

//Group Discussion
router.post('/groupdiscussion', function(req, res) {
  //console.log(req.body.rollno);
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"Technical Interview", "group": req.body.group}},{upsert: true }, function(err, data){
    //console.log(data);
  });
});

//Technical interview
router.post('/technicalinterview', function(req, res) {
  //console.log(req.body.rollno);
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"HR Interview", "technical": req.body.technical}},{upsert: true }, function(err, data){
    //console.log(data);
  });
});

//Final interview
router.post('/finalinterview', function(req, res) {
  //console.log(req.body.rollno);
  Enrolledstudents.update({"rollno":req.body.rollno},{$set:{"status":"Placed", "final": req.body.final}},{upsert: true }, function(err, data){
    //console.log(data);
  });
});

//companydetails
router.get('/companydetails/:cname', function(req, res, next) {
  //console.log(req.params.id);
  collaborators.find({"company_name":req.params.cname},function(err,emp){
  companydetails.find({"company_name":req.params.cname},function(err,company){
  res.locals.company = company;
  res.locals.emp = emp;
  res.render('companydetails');
});
});
});

//studentdetails
router.get('/studentdetails/:id', function(req, res, next) {
   //console.log(req.params.id);
   placements.findOne({"rollno":req.params.id},function(err,docs) {
   Enrolledstudents.find({"rollno": req.session.user.rollno},function(err,data1){
   res.locals.user1 = data1;
   res.locals.user = docs;
   res.render('profile');
});
});
Enrolledstudents});

//placementdetails
router.get('/placementdetails', function(req, res) {
  placements.find({},function(err,docs){
  res.locals.user = docs;
  res.render('placementdetails');
});
});
// profile
router.post('/profile', function(req, res) {
  var  No=req.body.No;
  placements.find({"rollno":No},function(err,data){
    if(err)
            console.log(err);
          else
          {
            res.locals.member = data;
            //console.log(data);
            res.send(data);
          }
  });
});
//image upload
var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './public/companies')
        },
        filename: function (req, file, cb) {
            var company_name = req.body.company_name;
            cb(null, company_name + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });
    var upload = multer({ //multer settings
                    storage: storage
                }).single('image');
    /** API path that will upload the files */
//companydetails
router.post('/companydetails', function(req, res) {
  upload(req,res,function(err){
            if(err){
                 console.log("Invalid Extension")
                 return;
            }
             console.log("uploaded successfully");
        })
  var date = moment().format('YYYY-MM-DD');
  var company_name = req.body.company_name;
  console.log(company_name);
  var data={
    company_name : req.body.company_name,
    from : req.body.from,
    to : req.body.to,
    email : req.body.email,
    location : req.body.location,
    position : req.body.position,
    sector : req.body.sector,
    ctc : req.body.ctc,
    description : req.body.description,
    visit_date : req.body.visit_date,
    dress_code : req.body.dress_code,
    diploma_courses : req.body.diploma_courses,
    btech_courses : req.body.btech_courses,
    mtech_courses : req.body.mtech_courses,
    mba_courses : req.body.mba_courses,
    eligible_diploma : req.body.eligible_diploma,
    eligible_btech : req.body.eligible_btech,
    eligible_mtech : req.body.eligible_mtech,
    eligible_mba : req.body.eligible_mba,
    attendance : req.body.attendance,
    gender : req.body.gender,
    add_con : req.body.add_con,
    AptitudeTest : req.body.AptitudeTest,
    GroupDiscussion : req.body.GroupDiscussion,
    TechnicalInterview : req.body.TechnicalInterview,
    HrInterview : req.body.HrInterview
  };
companydetails.insert(data,function(err,docs){
res.redirect('admin');
});
});
//colloborators
router.post('/colloborators', function(req, res) {
  var data={
    company_name : req.body.company_name,
    name : req.body.name,
    designation : req.body.designation,
    mobile : req.body.mobile,
    email : req.body.email,
  };
collaborators.insert(data,function(err,docs){
  if(err)
    console.log(err);

});
res.redirect('admin');
});

// mydata
router.get('/mydata',function(req,res){
  if(req.session && req.session.user){
      var data={};
     students.getUserDetails(req.session.user.rollno,function(err,docs){
      if(err) return err;
      else{
        res.locals.user =docs;
       res.render('mydata');
  }
     });
    // console.log(data);

  }
  else
    res.redirect('login');
});
// myplacements
router.get('/myplacements',function(req,res){
  var date = moment().format("YYYY-MM-DD");
    if(req.session && req.session.user){
    students.getUserDetails(req.session.user.rollno,function(err,docs){
    companydetails.find({visit_date: {$gt: date}},function(err,active){
    companydetails.find({visit_date: {$eq: date}},function(err,processing){
    companydetails.find({visit_date: {$lt: date}},function(err,completed){
    res.locals.user = docs;
    res.locals.active = active;
    res.locals.processing = processing;
    res.locals.completed = completed;
    res.render('myplacements');
    });
    });
    });
    });
  }
});

router.post('/social',function(req,res){
  //console.log(JSON.stringify(req.body));
  students.updateSocial(req.session.user.rollno,req.body,function(err,docs){
    if(err) return err;
    else
      res.send('success');
  });
});

//My profile
router.get('/myprofile',function(req,res){
if (req.session && req.session.user){
   console.log(req.session.user.rollno);
   students.getUserDetails(req.session.user.rollno,function(err,docs){
   Enrolledstudents.find({"rollno": req.session.user.rollno},function(err,data1){
   console.log(data1);
   res.locals.user = docs;
   res.locals.user1 = data1;
   res.render('myprofile');
});
});
 }
});
//Calendar
router.post('/calendar',function(req,res){
console.log(req.body.name);
console.log(req.body.description);
});
//My Calendar
router.get('/mycalendar',function(req,res){
if (req.session && req.session.user){
  students.getUserDetails(req.session.user.rollno,function(err,docs){
  res.locals.user = docs;
  res.render('mycalendar');
});
 }
});

module.exports = router;
