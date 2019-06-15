$(document).ready(function(){
$("#CheckEmail").click(function(){
		$.post('/gmail').done(function(data, textStatus, jqXHR){

			alert(data);

			//var jsondata=JSON.stringify(data);

			 //$('#Material1update').val(v.Material[0]);
		});
    });  
}); 
