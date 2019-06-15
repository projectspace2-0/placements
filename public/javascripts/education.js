$(document).ready(function(){
  //alert('hi');
  $(".push").click(function () {
              $(this).text("Saved");
              this.disabled = true;
          });


  $(".edit").each(function(){
            $(this).click(function (e) {
    e.preventDefault();

    if(document.getElementById('eddata')){


      $.notify({
                          
                  // options
                  icon: 'glyphicon glyphicon-warning-sign',
                  title: '',
                 
                  message: 'please close opened edit field',
                 
                }


      ,{
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
        delay: 100,
        timer: 100,
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

    }else{
      //alert('hai');
          var  td_to_append=$(this).closest("td");
          var $item = $(this).closest("td")   // Finds the closest row <tr>
           .find(".data");
          var $edt=$(this).closest("td")   // Finds the closest row <tr>
           .find(".edit");
          var id=$item.attr('id');
          var value=$item.text();
          var data={};
          $edt.hide();
          $item.hide();
              if(id=="dept"){
                td_to_append.append("<select class=''style='width:100px;height:30px;border-radius:3px;' id='eddata'><option>CSE</option><option>ECE-I</option><option>ECE-II</option><option>EEE</option><option>EEE</option><option>EEE</option><option>EEE</option><option>CSE & IT</option><option>MECH</option><option>ECE</option><option>PT</option><option>AGR & MIN</option><option>CIVIL</option></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();

              }
              else if(id=="college"){
                td_to_append.append("<select class=''style='width:100px;height:30px;border-radius:3px;' id='eddata'><option>AEC</option><option>AECT</option><option>ACE</option></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();

              }
              else if(id=="mobile"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >= 48 && (event.charCode <=57 || event.charCode ==43)' maxlength='10' minlength='10'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              }
              else if(id=="semister"){
                td_to_append.append("<input  type='number'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >= 48 && (event.charCode <=57 || event.charCode ==43)' maxlength='3' minlength='2'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              }
              else if(id=="year"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' maxlength='10' minlength='6'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              
              }
              else if(id=="mobile1"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >= 48 && (event.charCode <=57 || event.charCode ==43)' maxlength='10' minlength='10'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              }
             else if(id=="Permanentzipcode"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength='6' minlength='6'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              
              }
              else if(id=="Temporaryzipcode"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' maxlength='6' minlength='6' onkeypress='return event.charCode >= 48 && event.charCode <= 57'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              
              }
              else if(id=="PermanentDoorno"){
                  td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' /><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              
              }
              else if(id=="TemporaryDoorno"){
                td_to_append.append("<input  type='text'  class='moblie' style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' /><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
              $("#eddata").focus();
              
              }
              else if(id=="dob"){
                td_to_append.append("<input  type='date'  class='moblie' style='width:130px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' /><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();

              }
              else if(id=="odob"){
                td_to_append.append("<input  type='date'  class='moblie' style='width:130px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' /><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();

              }

              else if(id=="email"){
                td_to_append.append("<input  type='email'  class='email' style='width:250px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' /><button type='button' id='updt' class='btn btn-info btn-circle' ><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();

              }

              else if(id=="email1"){
                td_to_append.append("<input  type='email'  class='keyup-email text-input' style='width:250px;height:30px;border-radius:3px;' id='eddata' value='"+value+"'  /><button type='button' id='updt' class='btn btn-info btn-circle' ><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();
                $('.keyup-email').keyup(function() {
                  $('span.error-keyup-7').remove();
                  var inputVal = $(this).val();
                  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                  if(!emailReg.test(inputVal)) {

                    $(this).after('<span class="text-danger error-keyup-7">Invalid Email Format.</span>');
                  }
                });
              }
             
            
              else if(id=="Adharno"){
                td_to_append.append("<input  type='text'  class='email' style='width:250px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >= 48 && event.charCode <= 57' maxlength='16'/><button type='button' id='updt' class='btn btn-info btn-circle' ><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();

              }
              else if(id=="PanGirNo"){
                td_to_append.append("<input  type='text'  class='email' style='width:150px;height:30px;border-radius:3px;text-transform:uppercase;' id='eddata' value='"+value+"' maxlength='10' /><button type='button' id='updt' class='btn btn-info btn-circle' ><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();
                $('#eddata').keyup(function(){
                  this.value = this.value.toUpperCase();
                });
              }
              else if(id=="bloodgroup"){
               td_to_append.append("<select class=''style='width:100px;height:30px;border-radius:3px;' id='eddata'><optgroup label='---Select Group---'><option value='A+'>A+</option><option value='A-'>A-</option><option value='B+'>B+</option><option value='B-'>B-</option><option value='AB+'>AB+</option><option value='AB-'>AB-</option><option value='O+'>O+</option><option value='O-'>O-</option></optgroup></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
               $("#eddata").focus();

               }
               else if(id=="gender"){
                 td_to_append.append("<select class='text'style='width:60px;height:30px;border-radius:3px;' id='eddata'><option value='Male'>Male</option><option value='Female'>Female</option></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                 $("#eddata").focus();
               }
               else if(id=="religion"){
                td_to_append.append("<select class=''style='width:120px;height:30px;border-radius:3px;' id='eddata'><option value='Hinduism'>Hinduism</option><option value='Islam'>Islam</option><option value='Christianity'>Christianity</option><option value='Sikhism'>Sikhism</option><option value='Buddhism'>Buddhism</option><option value='Jainism'>Jainism</option><option value='Zoroastrianism'>Zoroastrianism</option><option value='Others'>Others</option></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();
              }
              else if(id=="caste"){
                td_to_append.append("<select class=''style='width:120px;height:30px;border-radius:3px;' id='eddata'><option value='OC'>OC</option><option value='BC-A'>BC-A</option><option value='BC-B'>BC-B</option><option value='BC-C'>BC-C</option><option value='BC-D'>BC-D</option><option value='BC-E'>BC-E</option><option value='SC'>SC</option><option value='ST'>ST</option><option value='Others'>Others</option></select><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();
              }   
              else{
               td_to_append.append("<input  type='text' class=''style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"' onkeypress='return event.charCode >31 && (event.charCode <48 || event.charCode >=65)'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");
                $("#eddata").focus();
            
              }

          }


      $("#updt").click(function () {
        var text=$(this).closest("td").find("#eddata");
        var upval=text.val();
        data[id]=upval;
        //alert(JSON.stringify(data));
          $.post("/updatemydata",data).done(function(data, textStatus, jqXHR)
      {

          //alert(data);
          $item.show();
          $item.text(upval);
          td_to_append.find('input,button,select').remove();
          $edt.show();

      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
          $item.show();
           td_to_append.find('input,button,select').remove();
          $edt.show();
      });




      });

      $("#cncl").click(function () {
          $item.show();
           td_to_append.find('input,button,select').remove();
          $edt.show();



      });
});



});

//social
$('#social-btn').unbind().bind('click', function(){
  $(this).text("Saved");
            this.disabled = true;
  var social={};
   social['Facebook']= $('#Facebook').val();
   social['Whatsapp']=$('#Whatsapp').val();
   social['Twitter']=$('#Twitter').val();
   social['Instagram']=$('#Instagram').val();
   social['Google']=$('#Google').val();
   social['LinkedIn']=$('#LinkedIn').val();
   social['Pinterest']=$('#Pinterest').val();
   social['YouTube']=$('#YouTube').val();
   social['Blog']=$('#Blog').val();
  $.post("/social",social).done(function(data, textStatus, jqXHR)
{
}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});
});
  //adding Family Details
    
$('#familyinfo').unbind().bind('click', function(){
  $(this).text("Saved");
            this.disabled = true;
  var family={};
   family['fathername']= $('#fathername').val();
   family['fatherdob']=$('#fatherdob').val();
   family['mothername']=$('#mothername').val();
   family['motherdob']=$('#motherdob').val();
   family['sibling1name']=$('#sibling1name').val();
   family['sibling1dob']=$('#sibling1dob').val();
   family['sibling2name']=$('#sibling2name').val();
   family['sibling2dob']=$('#sibling2dob').val();
   family['sibling3name']=$('#sibling3name').val();
   family['sibling3dob']=$('#sibling3dob').val();
  $.post("/family",family).done(function(data, textStatus, jqXHR)
{
}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});
});

  //Adding Address
  $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                var tdoorno= $("#PermanentDoorno").text();
                var tstreet= $("#PermanentStreet").text();
                var tcity= $("#PermanentCity").text();
                var tstate= $("#PermanentState").text(); 
                var tcountry= $("#PermanentCountry").text();
                var tzipcode= $("#Permanentzipcode").text();
                taddress={};
                taddress['TemporaryDoorno']=tdoorno;
                taddress['TemporaryStreet']=tstreet;
                taddress['TemporaryCity']=tcity;
                taddress['TemporaryState']=tstate;
                taddress['TemporaryCountry']=tcountry;
                taddress['Temporaryzipcode']=tzipcode;
                //alert(JSON.stringify(taddress));

                $.post("/updatemydata",taddress).done(function(data, textStatus, jqXHR)
      {

          //alert(data);
          $('#TemporaryDoorno').text(tdoorno);
                $('#TemporaryStreet').text(tstreet);
                $('#TemporaryCity').text(tcity);
                $('#TemporaryState').text(tstate);
                $('#TemporaryCountry').text(tcountry);
                $('#Temporaryzipcode').text(tzipcode);



      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });

            }
        });

/*Adding Projects in My Projects*/
$("#addbtn-exprojec").click(function () {
    //alert('hai');
        var projects={};

        projects['Title1']=$("#extitle1").val();
        
        projects['Technology1']=$("#extechnology1").val();

        projects['Team1']=$("#exteam1").val();

        projects['Description1']=$("#exdescription1").val();

        projects['From1']=$("#exf1").val();

        projects['To1']=$("#ext1").val();

        if(projects['Technology1']==""||projects['Title1']==""||projects['Team1']==""||projects['Description1']==""||projects['From1']==""||projects['To1']==""){
              $("#er").text('All fields are mandatory');
        }else{
      //  alert(JSON.stringify(experience));
      $("#er").text('');
          $.post("/projec",projects).done(function(data, textStatus, jqXHR)
      {
        $(".prodt").prepend("<tr><td class='text-center'>"+$("#extitle1").val()+"<tr><td class='text-center'>"+$("#extechnology1").val()+"<tr><td class='text-center'>"+$("#exteam1").val()+"<tr><td class='text-center'>"+$("#exdescription1").val()+"</td><td class='text-center'>"+$("#exf1").val()+"</td><td class='text-center'>"+$("#ext1").val()+"</td></tr>");

        $("#extitle1").val("");
        
        $("#extechnology1").val("");

        $("#exteam1").val("");

        $("#exdescription1").val("");

        $("#exf1").val("");

        $("#ext1").val("");
          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your experience added successfully.',

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
          //alert('network connection busy try again');
      });

}
});

$(".remProjec").click(function () {
    //alert('hai');
    $(this).text("Removed");
    this.disabled = true;

        var projects={};
        projects['Title1']=$(this).closest("tr").find("#extitle1").text();
        projects['Technology1']=$(this).closest("tr").find("#extechnology1").text();
        projects['Team1']=$(this).closest("tr").find("#exteam1").text();
        projects['Description1']=$(this).closest("tr").find("#exdescription1").text();
        projects['From1']=$(this).closest("tr").find("#exf1").text();
        projects['To1']=$(this).closest("tr").find("#ext1").text();

      //  alert(JSON.stringify(experience));
      $("#err").text('');
      $.post("/projecremove",projects).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Certifications*/
$("#addbtn-certi").click(function () {
    //alert('hai')

        var certi={};
        certi['Name']=$("#certin").val();
        certi['Org']=$("#certio").val();
        certi['Month']=$("#certim").val();
        certi['Year']=$("#certiy").val();
      //  alert(JSON.stringify(experience));
      if(certi['Name']==''||certi['Org']==''||certi['Month']==''||certi['Year']=='')
      {
        $('#certi1').text('All fields are mandatory');
      }
      else if(certi['Name']==''||certi['Org']==''||certi['Month']==''||certi['Year'].length!=4)
      {
        $('#certi1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#certi1').text(' ');
          $.post("/certi",certi).done(function(data, textStatus, jqXHR)
      {
        $(".certi").prepend("<tr><td class='text-center'>"+$("#certin").val()+"</td><td class='text-center'>"+$("#certio").val()+"</td><td class='text-center'>"+$("#certim").val()+"</td><td class='text-center'>"+$("#certiy").val()+"</td></tr>");
          $("#certin").val("");
          $("#certio").val("");
          $("#certim").val("");
        $("#certiy").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Certifications*/
$(".remCerti").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var certi={};
        certi['Name']=$(this).closest("tr").find("#cn").text();
        certi['Org']=$(this).closest("tr").find("#co").text();
        certi['Month']=$(this).closest("tr").find("#cm").text();
        certi['Year']=$(this).closest("tr").find("#cy").text();
      //  alert(JSON.stringify(experience));
          $('#certi1').text(' ');
          $.post("/certiremove",certi).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Skills*/
$("#addbtn-skills").click(function () {
    //alert('hai')

        var skills={};
        skills['Name']=$("#skillsn").val();
      //  alert(JSON.stringify(experience));
      if(skills['Name']=='')
      {
        $('#skills1').text('All fields are mandatory');
      }
      else{
          $('#skills1').text(' ');
          $.post("/Skills",skills).done(function(data, textStatus, jqXHR)
      {
        $(".skills").prepend("<tr><td class='text-center'>"+$("#skillsn").val()+"</td></tr>");
          $("#skillsn").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Skills*/
$(".remSkills").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var skills={};
        skills['Name']=$(this).closest("tr").find("#ss").text();
      //  alert(JSON.stringify(experience));
          $('#skills1').text(' ');
          $.post("/skillsremove",skills).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Hackthons*/
$("#addbtn-hack").click(function () {
    //alert('hai')

        var hack={};
        hack['Name']=$("#hackn").val();
        hack['Org']=$("#hacko").val();
        hack['Month']=$("#hackm").val();
        hack['Year']=$("#hacky").val();
      //  alert(JSON.stringify(experience));
      if(hack['Name']==''||hack['Org']==''||hack['Month']==''||hack['Year']=='')
      {
        $('#hack1').text('All fields are mandatory');
      }
      else if(hack['Name']==''||hack['Org']==''||hack['Month']==''||hack['Year'].length!=4)
      {
        $('#hack1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#hack1').text(' ');
          $.post("/hack",hack).done(function(data, textStatus, jqXHR)
      {
        $(".hack").prepend("<tr><td class='text-center'>"+$("#hackn").val()+"</td><td class='text-center'>"+$("#hacko").val()+"</td><td class='text-center'>"+$("#hackm").val()+"</td><td class='text-center'>"+$("#hacky").val()+"</td></tr>");
          $("#hackn").val("");
          $("#hacko").val("");
          $("#hackm").val("");
        $("#hacky").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Hackthons*/
$(".remHack").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var hack={};
        hack['Name']=$(this).closest("tr").find("#hn").text();
        hack['Org']=$(this).closest("tr").find("#ho").text();
        hack['Month']=$(this).closest("tr").find("#hm").text();
        hack['Year']=$(this).closest("tr").find("#hy").text();
      //  alert(JSON.stringify(experience));
          $('#hack1').text(' ');
          $.post("/hackremove",hack).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Competition*/
$("#addbtn-com").click(function () {
    //alert('hai')

        var com={};
        com['Name']=$("#comn").val();
        com['Org']=$("#como").val();
        com['Month']=$("#comm").val();
        com['Year']=$("#comy").val();
      //  alert(JSON.stringify(experience));
      if(com['Name']==''||com['Org']==''||com['Month']==''||com['Year']=='')
      {
        $('#com1').text('All fields are mandatory');
      }
      else if(com['Name']==''||com['Org']==''||com['Month']==''||com['Year'].length!=4)
      {
        $('#com1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#com1').text(' ');
          $.post("/com",com).done(function(data, textStatus, jqXHR)
      {
        $(".com").prepend("<tr><td class='text-center'>"+$("#comn").val()+"</td><td class='text-center'>"+$("#como").val()+"</td><td class='text-center'>"+$("#comm").val()+"</td><td class='text-center'>"+$("#comy").val()+"</td></tr>");
          $("#comn").val("");
          $("#como").val("");
          $("#comm").val("");
        $("#comy").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Competitions*/
$(".remCom").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var com={};
        com['Name']=$(this).closest("tr").find("#con").text();
        com['Org']=$(this).closest("tr").find("#coo").text();
        com['Month']=$(this).closest("tr").find("#com").text();
        com['Year']=$(this).closest("tr").find("#coy").text();
      //  alert(JSON.stringify(experience));
          $('#com1').text(' ');
          $.post("/comremove",com).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Workshops*/
$("#addbtn-work").click(function () {
    //alert('hai')

        var work={};
        work['Name']=$("#workn").val();
        work['Org']=$("#worko").val();
        work['Month']=$("#workm").val();
        work['Year']=$("#worky").val();
      //  alert(JSON.stringify(experience));
      if(work['Name']==''||work['Org']==''||work['Month']==''||work['Year']=='')
      {
        $('#work1').text('All fields are mandatory');
      }
      else if(work['Name']==''||work['Org']==''||work['Month']==''||work['Year'].length!=4)
      {
        $('#work1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#work1').text(' ');
          $.post("/work",work).done(function(data, textStatus, jqXHR)
      {
        $(".work").prepend("<tr><td class='text-center'>"+$("#workn").val()+"</td><td class='text-center'>"+$("#worko").val()+"</td><td class='text-center'>"+$("#workm").val()+"</td><td class='text-center'>"+$("#worky").val()+"</td></tr>");
          $("#workn").val("");
          $("#worko").val("");
          $("#workm").val("");
        $("#worky").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Workshops*/
$(".remWork").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var work={};
        work['Name']=$(this).closest("tr").find("#wn").text();
        work['Org']=$(this).closest("tr").find("#wo").text();
        work['Month']=$(this).closest("tr").find("#wm").text();
        work['Year']=$(this).closest("tr").find("#wy").text();
      //  alert(JSON.stringify(experience));
          $('#work1').text(' ');
          $.post("/workremove",work).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding Completion*/
$("#addbtn-comp").click(function () {
    //alert('hai')

        var comp={};
        comp['Name']=$("#compn").val();
        comp['Org']=$("#compo").val();
        comp['Month']=$("#compm").val();
        comp['Year']=$("#compy").val();
      //  alert(JSON.stringify(experience));
      if(comp['Name']==''||comp['Org']==''||comp['Month']==''||comp['Year']=='')
      {
        $('#comp1').text('All fields are mandatory');
      }
      else if(comp['Name']==''||comp['Org']==''||comp['Month']==''||comp['Year'].length!=4)
      {
        $('#comp1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#comp1').text(' ');
          $.post("/comp",comp).done(function(data, textStatus, jqXHR)
      {
        $(".comp").prepend("<tr><td class='text-center'>"+$("#compn").val()+"</td><td class='text-center'>"+$("#compo").val()+"</td><td class='text-center'>"+$("#compm").val()+"</td><td class='text-center'>"+$("#compy").val()+"</td></tr>");
          $("#compn").val("");
          $("#compo").val("");
          $("#compm").val("");
        $("#compy").val("");
       

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
 });

/*Removing Completion*/
$(".remComp").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var comp={};
        comp['Name']=$(this).closest("tr").find("#copn").text();
        comp['Org']=$(this).closest("tr").find("#copo").text();
        comp['Month']=$(this).closest("tr").find("#copm").text();
        comp['Year']=$(this).closest("tr").find("#copy").text();
      //  alert(JSON.stringify(experience));
          $('#comp1').text(' ');
          $.post("/compremove",comp).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});
/*Adding THub Contribution*/
$("#addbtn-thub").click(function () {
    //alert('hai')

        var thub={};
        thub['Program']=$("#thubprogram").val();
        thub['Duration']=$("#thubduration").val();
        thub['Month']=$("#thubmonth").val();
        thub['Year']=$("#thubyear").val();
      //  alert(JSON.stringify(experience));
      if(thub['Program']==''||thub['Duration']==''||thub['Month']==''||thub['Year']=='')
      {
        $('#thubp1').text('All fields are mandatory');
      }
      else if(thub['Program']==''||thub['Duration']==''||thub['Month']==''||thub['Year'].length!=4)
      {
        $('#thubp1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#fdp1').text(' ');
          $.post("/thub",thub).done(function(data, textStatus, jqXHR)
      {
        $(".thub").prepend("<tr><td class='text-center'>"+$("#thubprogram").val()+"</td><td class='text-center'>"+$("#thubduration").val()+"</td><td class='text-center'>"+$("#thubmonth").val()+"</td><td class='text-center'>"+$("#thubyear").val()+"</td></tr>");

          $("#thubprogram").val("");
          $("#thubduration").val("");
          $("#thubmonth").val("");
          $("#thubyear").val("");
          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfully.',

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
          //alert('network connection busy try again');
      });
}
});

/*Removing Thub Contribution*/
$(".remThub").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var thub={};
        thub['Program']=$(this).closest("tr").find("#thubp").text();
        thub['Duration']=$(this).closest("tr").find("#thubd").text();
        thub['Month']=$(this).closest("tr").find("#thubm").text();
        thub['Year']=$(this).closest("tr").find("#thuby").text();
      //  alert(JSON.stringify(experience));
          $('#fdp1').text(' ');
          $.post("/thubremove",thub).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});

$('#upload-ssc').on('click', function (){
    $('#upload-ssc').click();

});

$('#uploadbtn-ssc').unbind().bind('click', function(){

  var files = $('#upload-ssc').get(0).files;
  var yearofpass= $('#inputsscy').val();
  var insti=$('#inputssci').val();
  var percentage=$('#inputsscp').val();
 // alert(yearofpass);
  //alert(insti);

  var SSC={

    YearOfPass:yearofpass,
    Institution:insti,
    Percentage:percentage
  };
  var rj=JSON.stringify(SSC);
    $.post("/uped",{SSC:rj}).done(function(data, textStatus, jqXHR)
{

//alert(data);
}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});



  //alert(SSC);
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request

    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsssc[]', file, file.name);

    }


    $.ajax({
      url: '/upload/4',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-ssc").attr("value","Saved");
          $(".ssc :input").attr("disabled", true);


        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-inter').on('click', function (){
    $('#upload-inter').click();

});

$('#uploadbtn-inter').on('click', function(){

  var files = $('#upload-inter').get(0).files;

  var yearofpass= $('#inputintery').val();
  var insti=$('#inputinteri').val();
  var percentage=$('#inputinterp').val();
 // alert(yearofpass);
  //alert(insti);

  var Inter={

    YearOfPass:yearofpass,
    Institution:insti,
    Percentage:percentage
  };
  var rj=JSON.stringify(Inter);

  $.post("/uped",{Inter:rj}).done(function(data, textStatus, jqXHR)
{

//alert(data);
}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsinter[]', file, file.name);
    }

    $.ajax({
      url: '/upload/5',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-inter").attr("value","Saved");
          $(".inter :input").attr("disabled", true);

        }, false);

        return xhr;
      }
    });

  }
});


//Adding Diploma Education

$('#upload-diploma').on('click', function (){
    $('#upload-diploma').click();

});

$('#uploadbtn-diploma').on('click', function(){
//alert("Diploma");
  //var files = $('#upload-diploma').get(0).files;

  var yearofpass= $('#inputdipy').val();
  //alert(yearofpass);
  var insti=$('#inputdipi').val();
  //alert(insti);
  var percentage=$('#inputdipp').val();
 //alert(percentage);


  var Diploma={

    YearOfPass:yearofpass,
    Institution:insti,
    Percentage:percentage
  };
  var rj=JSON.stringify(Diploma);

  $.post("/uped",{Diploma:rj}).done(function(data, textStatus, jqXHR)
{

//alert(data);
}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsinter[]', file, file.name);
    }

    $.ajax({
      url: '/upload/5',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-inter").attr("value","Saved");
          $(".inter :input").attr("disabled", true);

        }, false);

        return xhr;
      }
    });

  }
});

//Adding UG Data
$("#addbtn-ug").click(function () {
    //alert('hai')

        var ug={};
        ug['Course']=$("#uginputbox").val();
        ug['Year']=$("#inputugy").val();
        ug['Institution']=$("#inputugi").val();
        ug['Percentage']=$("#inputugp").val();
      //  alert(JSON.stringify(experience));
      if(ug['Course']==''||ug['Year']==''||ug['Institution']==''||ug['Percentage']=='')
      {
        $('#ug1').text('All fields are mandatory');
      }
      else if(ug['Course']==''||ug['Year'].length!=4||ug['Institution']==''||ug['Percentage']=='')
      {
        $('#ug1').text('Please Enter Year in YYYY Format');
      }
      else{
          $('#ug1').text('');
          $.post("/ug",ug).done(function(data, textStatus, jqXHR)
      {  
        $(".ug").prepend("<tr><td class='text-center'>"+$("#uginputbox").val()+"</td><td class='text-center'>"+$("#inputugy").val()+"</td><td class='text-center'>"+$("#inputugi").val()+"</td><td class='text-center'>"+$("#inputugp").val()+"</td></tr>");

          $("#uginputbox").val("");
          $("#inputugy").val("");
          $("#inputugi").val("");
          $("#inputugp").val("");
          //alert(data);

          if(data){
        JSalert();
      }
         function JSalert(){
        swal({
        title: "Your data was saved sucessfully!",
        text: "",
        timer: 1500,
        showConfirmButton: false
      });
      }
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
}
});

//Removing UG Data
$(".remUG").click(function () {
    //alert('hai')
    $(this).text("Removed");
    this.disabled = true;
        var ug={};
        ug['Course']=$(this).closest("tr").find("#uc").text();
        ug['Year']=$(this).closest("tr").find("#uy").text();
        ug['Institution']=$(this).closest("tr").find("#ui").text();
        ug['Percentage']=$(this).closest("tr").find("#up").text();
      //  alert(JSON.stringify(experience));
          $('#ug1').text(' ');
          $.post("/ugremove",ug).done(function(data, textStatus, jqXHR)
      {
      }).fail(function(jqXHR, textStatus, errorThrown)
      {
          //alert('network connection busy try again');
      });
});

// //Adding PG Data
// $("#addbtn-pg").click(function () {
//     //alert('hai')

//         var pg={};
//         pg['Course']=$("#pginput").val();
//         pg['Year']=$("#pgyearofpass").val();
//         pg['Institution']=$("#pginstitute").val();
//         pg['Percentage']=$("#pgpercent").val();
//         //alert(pg['Year']);
//       //  alert(JSON.stringify(experience));
//       if(pg['Course']==''||pg['Year']==''||pg['Institution']==''||pg['Percentage']=='')
//       {
//         $('#pg1').text('All fields are mandatory');
//       }
//       else if(pg['Course']==''||pg['Year'].length!=4||pg['Institution']==''||pg['Percentage']=='')
//       {
//         $('#pg1').text('Please Enter Year in YYYY Format');
//       }
//       else{
//           $('#pg1').text('');
//           $.post("/pg",pg).done(function(data, textStatus, jqXHR)
//       {  
//         $(".pg").prepend("<tr><td class='text-center'>"+$("#pginput").val()+"</td><td class='text-center'>"+$("#pgyearofpass").val()+"</td><td class='text-center'>"+$("#pginstitute").val()+"</td><td class='text-center'>"+$("#pgpercent").val()+"</td></tr>");

//           $("#pginput").val("");
//           $("#pgyearofpass").val("");
//           $("#pginstitute").val("");
//           $("#pgpercent").val("");
//           //alert(data);

//           if(data){
//         JSalert();
//       }
//          function JSalert(){
//         swal({
//         title: "Your data was saved sucessfully!",
//         text: "",
//         timer: 1500,
//         showConfirmButton: false
//       });
//       }
//       }).fail(function(jqXHR, textStatus, errorThrown)
//       {
//           //alert('network connection busy try again');
//       });
// }
// });

// //Removing PG Data
// $(".rempg").click(function () {
//     //alert('hai')
//     $(this).text("Removed");
//     this.disabled = true;
//         var pg={};
//         pg['Course']=$(this).closest("tr").find("#pc").text();
//         pg['Year']=$(this).closest("tr").find("#py").text();
//         pg['Institution']=$(this).closest("tr").find("#pi").text();
//         pg['Percentage']=$(this).closest("tr").find("#pp").text();
//       //  alert(JSON.stringify(experience));
//           $('#pg1').text('');
//           $.post("/pgremove",pg).done(function(data, textStatus, jqXHR)
//       {
//       }).fail(function(jqXHR, textStatus, errorThrown)
//       {
//           //alert('network connection busy try again');
//       });
// });
  $('.upload-adhar').on('click', function (){

    $('#upload-adhar').click();
  });

$('#uploadbtn-adhar').on('click', function(){

  var files = $('#upload-adhar').get(0).files;

  
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsadhar[]', file, file.name);
    }

    $.ajax({
      url: '/upload/2',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-adhar").attr("value","Saved");
          $(".adhar :input").attr("disabled", true);


        }, false);

        return xhr;
      }
    });

  }
});




  $('.upload-passport').on('click', function (){

    $('#upload-passport').click();
  });

$('#uploadbtn-passport').on('click', function(){

  var files = $('#upload-passport').get(0).files;

  var passportno= $('#passportno').val();
  var passportissue=$('#plsissue').val();
  var dateofissue=$('#dtofissue').val();
  var validity=$('#validity').val();
 // alert(yearofpass);
  //alert(insti);

  var Passportdetails={

    Passportno:passportno,
    PlaceOfIssue:passportissue,
    DateOfIssue:dateofissue,
    Validity:validity
  };
  var rj=JSON.stringify(Passportdetails);
    //alert(rj)
  $.post("/uped",{Passportdetails:rj}).done(function(data, textStatus, jqXHR)
{

//alert(data);

}).fail(function(jqXHR, textStatus, errorThrown)
{
    //alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspassport[]', file, file.name);
    }

    $.ajax({
      url: '/upload/3',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-passport").attr("value","Saved");
          $(".passport :input").attr("disabled", true);


        }, false);

        return xhr;
      }
    });

  }
});


$('.upload-pancard').on('click', function (){

    $('#upload-pancard').click();
  });

$('#uploadbtn-pancard').on('click', function(){

  var files = $('#upload-pancard').get(0).files;

  /*var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR)
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown)
{
    alert('network connection failed  please try again');
});

*/
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspancard[]', file, file.name);
    }

    $.ajax({
      url: '/upload/10',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-pancard").attr("value","Saved");
          $(".pancard :input").attr("disabled", true);


        }, false);

        return xhr;
      }
    });

  }
});  
});
