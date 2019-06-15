$(document).ready(function(){

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
          if(reset['cpwd']!=reset['npwd']){

           $('#cp3').text('password not matched'); 
          }
          else{
            alert("Password Updated Sucessfully");
          }

         }
         else{
         	$('#cp1').text('');
         	$('#cp2').text('');
         	$('#cp3').text('');
         	//alert(JSON.stringify(reset));
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
  position: top,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "center",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 500,
  timer: 400,
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
  template: '<div data-notify="container" class="col-xs-12 col-sm-3 col-md-2 col-md-offset-4 text-center alert alert-{0}" style="position:fixed;top:2%;" role="alert">' +
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

       }//end of else


   });


});