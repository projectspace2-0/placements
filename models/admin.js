var monk=require('monk');
var db=monk('localhost:27017/aditya');
var sampdata =db.get('sampledata');
var sam =db.get('adduser');
var stinfo =db.get('staffinfo');
var rd =db.get('reviewdate');
var aec=db.get('AEC');
var acet=db.get('ACET');
var ace=db.get('ACE');
var stafflogins=db.get('stafflogins');

module.exports.insertUser = function(data,cb) {
  console.log(data);
  stinfo.insert(data, function(err,docs) {
    if (err) return cb(err)
    else
    	return cb(null,docs);
  });
}

module.exports.insertUserLogin = function(data,cb) {
  console.log(data);
  stafflogins.insert(data, function(err,docs) {
    if (err) return cb(err)
    else
    	return cb(null,docs);
  });
}

module.exports.deleteUser = function(staffcode,date,reason,cb) {
  stafflogins.find({"StaffCode":staffcode},function(err,docs){
		//console.log('admin entered');
			if(err) return err;
			else{
					if(docs=='')
					{	
							console.log('no staffcode');
							//return cb(null,docs);
					}
					else
					{
					stafflogins.update({"StaffCode":staffcode},{$set:{"Status":"InActive","Date":date,"Reason":reason}}, function(err,docs) {
						if(err) return err;
						//else
							//return cb(null,docs);
					});
					}
				}
			return cb(null,docs);
	});
}


module.exports.updateDesignation=function(staffcode,data,role,cb){
	//console.log(data);
    
	stinfo.find( {"StaffCode":staffcode} ,function(err,docs){
		//console.log('admin entered');
			if(err) return err;
			else{
					if(docs=='')
					{	
							console.log('no staffcode');
							//return cb(null,docs);
					}
					else
					{
					stinfo.update({"PinNo":parseInt(staffcode)},{$set:{"DesignationName":data,"Role":role}},function(err,docs){
						if(err) return err;
						//else
							//return cb(null,docs);
					});
					}
				}
			return cb(null,docs);
	});
}




module.exports.updaterdate=function(data,cb){
	//console.log(data);
      
	rd.update({"edate":"t"},{$set:data},function(err,docs){

			if(err) return err;
			else
			return cb(null,docs);
	});

}



module.exports.transferuser=function(newuser,cb){
	console.log(newuser.StaffCode);
      
	stinfo.find({"StaffCode":newuser.StaffCode},function(err,docs){
		//console.log('admin entered');
			if(err) return err;
			else{
					if(docs=='')
					{	
							console.log('no staffcode');
							//return cb(null,docs);
					}
					else
					{
					stinfo.update({"StaffCode":newuser.StaffCode},{$set:{"College":newuser.College,"DepartmentName":newuser.DepartmentName}},function(err,docs){

						if(err) return err;
						//else
							//return cb(null,docs);
					});
					}
				}
			return cb(null,docs);
	});

}


module.exports.filtration=function(newuser,cb){
	console.log(newuser.StaffCode);
      
	stinfo.find({ $or: [ {"StaffCode":newuser.StaffCode}, {"College":newuser.College},{"DepartmentName":newuser.DepartmentName} ] },function(err,docs){
		
			if(err) return err;
			else
			return cb(null,docs);
	});

}

module.exports.resetpassword=function(newuser,cb){
	console.log(newuser);
      	if (newuser.npwd==newuser.cpwd) {
      		stafflogins.update({ $and: [ {"StaffCode":newuser.StaffCode}, {"Password":newuser.opwd} ] },{$set:{"Password":newuser.cpwd}},function(err,docs){

			if(err) return err;
			else
			return cb(null,docs);
			});
      	}
      
      else
      	alert('**');
	

}

module.exports.undoappraisal=function(college,data,cb){
	console.log(college);
	console.log(data);
    if(college=='AEC'){  
	aec.update(data,{$set:{"status":" "}},function(err,docs){

			if(err) return err;
			else
			return cb(null,docs);
	});
    }

    if(college=="ACET"){  
	acet.update(data,{$set:{"status":""}},function(err,docs){

			if(err) return err;
			else
			return cb(null,docs);
	});
    }

    if(college=='ACE'){  
	ace.update(data,{$set:{"status":""}},function(err,docs){

			if(err) return err;
			else
			return cb(null,docs);
	});
    }

}


