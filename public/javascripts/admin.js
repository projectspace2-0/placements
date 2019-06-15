$(document).ready(function(){
    $("#adduserad").click(function () {
    //alert('hai');
        

        var adduser={};
        adduser['StaffCode']=$("#ascode").val();
        adduser['StaffName']=$("#asname").val();
        adduser['DesignationName']=$("#adesig").val();
        adduser['DepartmentName']=$("#adept").val();
        adduser['College']=$("#aclg").val();
        adduser['Email']=$("#email").val();
        adduser['Mobile']=$("#phone").val();
        adduser['Role']=$("#arole").val();                
        adduser['TeachingType']=$("#type").val();
        adduser['CollegeType']=$("#collegetype").val();
        adduser['DateOfJoining']=$("#date").val();
        
        if(adduser['StaffCode']==''||adduser['StaffName']==''||adduser['DesignationName']==''||adduser['DepartmentName']==''||adduser['College']==''||adduser['Email']==''||adduser['Mobile']==''||adduser['Role']==''||adduser['TeachingType']==''||adduser['collegetype']==''||adduser['DateOfJoining']=='')
        {
          if(adduser['StaffCode']==''){
            $('#sp1').text('Enter Staff code');
          }
          else{
          $('#sp1').text('');
          }
          if(adduser['StaffName']==''){
            $('#sp2').text('Enter Staff name');
          }
          else{
          $('#sp2').text('');
          }
          if(adduser['DesignationName']==''){
            $('#sp3').text('Select designation');
          }
          else{
          $('#sp3').text('');
          }
          if(adduser['DepartmentName']==''){
            $('#sp4').text('Select the department');
          }
          else{
          $('#sp4').text('');
          }
          if(adduser['College']==''){
            $('#sp5').text('Select the College');
          }
          else{
          $('#sp5').text('');
          }
          if(adduser['Email']==''){
            $('#sp6').text('Enter Staff Email');
          }
          else{
          $('#sp6').text('');
          }
           if(adduser['Role']==''){
            $('#sp7').text('Select your Role');
          }
          else{
          $('#sp7').text('');
          }
          if(adduser['Mobile']==''){
            $('#sp8').text('Enter Mobile No.');
          }
          else{
          $('#sp8').text('');
          }
          if(adduser['TeachingType']==''){
            $('#sp9').text('Select Teaching Type');
          }
          else{
          $('#sp9').text('');
          }
          if(adduser['collegetype']==''){
            $('#sp11').text('Select College Type');
          }
          else{
          $('#sp11').text('');
          }
          if(adduser['DateOfJoining']==''){
            $('#sp10').text('Select Date Of Joining');
          }
          else{
          $('#sp10').text('');
          }
        }
        
        else{
         //alert(JSON.stringify(adduser));
          $('#sp1').text('');
          $('#sp2').text('');
          $('#sp3').text('');
          $('#sp4').text('');
          $('#sp5').text('');
          $('#sp6').text('');
          $('#sp7').text('');
          $('#sp8').text('');
          $('#sp9').text('');
          $('#sp10').text('');
          $('#sp11').text('');
          
          $.post("/addnewuser",adduser).done(function(data, textStatus, jqXHR) 
       {
          $("#ascode").val('');
          $("#asname").val('');
          $("#adesig").val('');
          $("#adept").val('');
          $("#aclg").val('');
          $("#email").val('');
          $("#phone").val('');
          $("#arole").val(''); 
          $("#type").val('');
          $("#date").val('');
          $("#collegetype").val('');

          
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'New user added successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });


}
   });




$("#promote-user").click(function () {
     //alert('hai');
        var promoteuser={};
        promoteuser['StaffCode']=$("#ascodeee").val();
        promoteuser['DesignationName']=$("#adesign").val();
        //alert(JSON.stringify(promoteuser));
        if(promoteuser['StaffCode']==''||promoteuser['DesignationName']==''){
          if(promoteuser['StaffCode']==''){
             $('#pu1').text('Enter StaffCode'); 
          }
          else{
             $('#pu1').text('');
          }
          
          if(promoteuser['DesignationName']==''){
             $('#pu2').text('Select designation');
          }
          else{
             $('#pu2').text('');
          }
        }
        else{
          $('#pu1').text('');
          $('#pu2').text('');
          $.post("/promoteuser",promoteuser).done(function(data, textStatus, jqXHR) 
     
      {
         if(data==''){
          alert("No such staff code exists...!");
          $("#ascodeee").val("");
          $("#adesign").val("");
         }
         else{
          //alert('wrongly enter');
          $("#ascodeee").val("");
          $("#adesign").val("");
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'User promoted successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
  }
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });

  }

   });

$("#duser").click(function () {
    // alert('hai');
        var deleteuser={};
        deleteuser['StaffCode']=$("#dscode").val();
        deleteuser['Date']=$("#dsdate").val();
        deleteuser['Reason']=$("#dsreason").val();

        var staffcode=$("#dscode").val();
        var date=$("#dsdate").val();
        var reason=$("#dsreason").val();
        // alert(JSON.stringify(promoteuser));
        if(deleteuser['StaffCode']==''){
          $('#du1').text('Enter StaffCode');
        }
        else if(deleteuser['Date']==''){
          $('#du2').text('Enter Date');
        }
        else if(deleteuser['Reason']==''){
          $('#du3').text('Enter Reason');
        }
        else{
          $('#du3').text('');
          $('#du2').text('');
          $('#du1').text('');          
          $.post("/deleteuser",{staffcode:staffcode,date:date,reason:reason}).done(function(data, textStatus, jqXHR) 
      {
        if(data==''){
          alert("No such staff code exists...!");
          $("#dscode").val("");
          $("#dsdate").val();
          $("#dsreason").val();
         }
         else{
          $("#dscode").val("");
          $("#dsdate").val();
          $("#dsreason").val();
          
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'User deleted successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
     }     
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });

  }

   });





// Transfer User

$("#transferuser").click(function () {
    // alert('hai');
        var transferuser={};
        transferuser['StaffCode']=$("#tscode").val();
        transferuser['College']=$("#tcollege").val();
        transferuser['DepartmentName']=$("#tdept").val();
        
        // alert(JSON.stringify(transferuser));
        if(transferuser['StaffCode']==''||transferuser['College']==''||transferuser['DepartmentName']=='')
          {
            if(transferuser['StaffCode']==''){
                $('#tu1').text('Enter StaffCode');    
            }
            else{
              $('#tu1').text('');
            }
            if(transferuser['College']==''||transferuser['DepartmentName']==''){
              $('#tu2').text('Select both College and Designation');
            }
            else{
              $('#tu2').text('');
            }
          }   
        else{
          $('#tu1').text('');
          $('#tu2').text('');
          $.post("/transferuser",transferuser).done(function(data, textStatus, jqXHR) 
        
      {
        if(data==''){
          alert("No such staff code exists...!");
          $("#tscode").val("");
          $("#tcollege").val("");
          $("#tdept").val("");
         }
         else{
         
          $("#tscode").val("");
          $("#tcollege").val("");
          $("#tdept").val("");
          
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'User tranferred successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
   }       
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });
}
   });

//Filtration in admin panel

$("#filt").click(function () {
     //alert('hai');
        var filter={};
        filter['StaffCode']=$("#fscode").val();
        filter['College']=$("#fcollege").val();
        filter['DepartmentName']=$("#fdept").val();
        
        // alert(JSON.stringify(filter));
        if (filter['StaffCode']==''&&filter['College']==''&&filter['DepartmentName']=='') {
          
            $('#f1').text('please select an option');
        

        }
        else{
          $('#f1').text('');
          $.post("/filteruser",filter).done(function(data, textStatus, jqXHR) 
        
      {
        //alert(JSON.stringify(data));
          $("#fscode").val("");
          $("#fcollege").val("");
          $("#fdept").val("");
          for(var i=0;i<data.length;i++){
            $(".filter").append("<tr><td>"+data[i].StaffCode+"</td><td>"+data[i].StaffName+"</td><td>"+data[i].MobileNo+"</td><td>"+data[i].Email+"</td><td>"+data[i].DepartmentName+"</td><td>"+data[i].College+"</td></tr>");


          }
      
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });
      }


   });


// Admin changing password
$("#changepwd").click(function () {
     //alert('hai');
        var reset={};
        reset['opwd']=$("#opwd").val();
        reset['npwd']=$("#npwd").val();
        reset['cpwd']=$("#cpwd").val();
        
         //alert(JSON.stringify(reset));
         if (reset['opwd']==''||reset['npwd']==''||reset['cpwd']=='') {
          if (reset['opwd']=='') {
            $('#cp1').text('Enter old password');
          }
          else{
            $('#cp1').text('');
          }
          if (reset['npwd']=='') {
            $('#cp2').text('Enter new password');
          }
          else{
            $('#cp2').text('');
          }
          if (reset['cpwd']=='') {
            $('#cp3').text('Enter Confirm password');
          }
          else{
            $('#cp3').text('');
          }

         }
         else{
          $('#cp1').text('');
          $('#cp2').text('');
          $('#cp3').text('');
          alert(JSON.stringify(reset));
          $.post("/resettpwd",reset).done(function(data, textStatus, jqXHR) 
      {
        //alert(JSON.stringify(data));
          $("#opwd").val("");
          $("#npwd").val("");
          $("#cpwd").val("");
          
          
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Password changed Successfully...',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });

       }//end of else


   });

// Undo of Appraisal
$("#undoappr").click(function () {
    // alert('hai');
        var undoappraisal={};
        undoappraisal['StaffCode']=$("#uscode").val();
        undoappraisal['College']=$("#ucollege").val();
        undoappraisal['AppraisalYear']=$("#uyear").val();
        // alert(JSON.stringify(promoteuser));
        if (undoappraisal['StaffCode']==''||undoappraisal['College']==''||undoappraisal['AppraisalYear']=='') {
          if (undoappraisal['StaffCode']=='') {
             $('#uf1').text('Enter StaffCode');
          }
          else{
            $('#uf1').text('');
          }
          if (undoappraisal['College']=='') {
             $('#uf2').text('Select the College');
          }
          else{
            $('#uf2').text('');
          }
          if (undoappraisal['AppraisalYear']=='') {
             $('#uf3').text('Select the year');
          }
          else{
            $('#uf3').text('');
          }

        }
        else{
          $('#uf1').text('');
          $('#uf2').text('');
          $('#uf3').text('');
          $.post("/undoofappraisal",undoappraisal).done(function(data, textStatus, jqXHR) 
       
      {
          $("#uscode").val("");
          $("#ucollege").val("");
          $("#uyear").val("");
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Undo of Appraisal done successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });

       }//end of else


   });

//Change Review date
$("#chngdt").click(function () {
    // alert('hai');
        var changedate={};
        changedate['Role']=$("#urole").val();
        changedate['Rdate']=$("#crdate").val();
         //alert(JSON.stringify(changedate));
         if (changedate['Role']==''||changedate['Rdate']=='') {
          if (changedate['Role']=='') {
            $('#crd1').text('Select the Role'); 
          }
          else{
            $('#crd1').text('');  
          }
          if (changedate['Rdate']=='') {
            $('#crd2').text('Select the Date'); 
          }
          else{
            $('#crd2').text('');  
          }

         }

         else{
            $('#crd1').text('');
            $('#crd2').text('');

          $.post("/changereviewdate",changedate).done(function(data, textStatus, jqXHR) 
      {
          $("#urole").val("");
          $("#crdate").val("");
      $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: ' Review Date changed successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });

      }

   });


});
