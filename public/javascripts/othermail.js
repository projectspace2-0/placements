$(document).ready(function(){
	var clicks=0;
	var start = 2011;
	  var end = (new Date().getFullYear())+1;
	  var options = "";
	  for(var year = start; year<=end; year++){
	    options += "<option>"+ year +"</option>";
	  }
	  document.getElementById("year").innerHTML = options;


	$("#senddata").click(function(){
	if(clicks==0){
		$("#displaydata").show();	
		//table declaration
		var listtable = $('#dataTables1-example').DataTable();

		//College Selection
		var engineering=$("#engineering:checked").val() ? "engineering" : "engineering"; 
		var diploma=$("#diploma:checked").val() ? "diploma" : "diploma";
		var others=$("#others:checked").val() ? "others" : "others";

		//Branch Selection
		var cse=$("#cse:checked").val() ? "CSE" : "cse";
		var it=$("#it:checked").val() ? "IT" : "it";
		var ece=$("#ece:checked").val() ? "ECE" : "ece";
		var eee=$("#eee:checked").val() ? "EEE" : "eee";
		var mca=$("#mca:checked").val() ? "MCA" : "mca";		
		var civil=$("#civil:checked").val() ? "CIVIL" : "civil";
		var pt=$("#pt:checked").val() ? "PT" : "pt";		
		var me=$("#me:checked").val() ? "MECH" : "me";
		var agri=$("#agri:checked").val() ? "AGRI" : "agri";
		var min=$("#min:checked").val() ? "MIN" : "min";
        
        //Academic Year
		var year = $("#year").val();

		//getting data from server
		$.post('/othermail',{engineering:engineering,diploma:diploma,others:others,cse:cse,agri:agri,min:min,it:it,ece:ece,eee:eee,mca:mca,civil:civil,pt:pt,me:me,year:year}).done(function(data,textStatus,jqXHR){
		//    alert(data);

			var jsondata=JSON.stringify(data);
		//	alert(jsondata);
			$(".count").html(data.length.toLocaleString('en-IN'));
		//	alert(data.length);
			$.each($.parseJSON(jsondata),function(i,v){

				listtable.row.add( [
					    v.RegdNo,
						v.Name,
						v.College,
						v.Branch,
						v.Email,
						v.MobileNo,
						v.Year,
					] ).draw(false);						
				});
			//$('#dataTables1-example').DataTable();  	            
		});	
		clicks++;
	}

	});
});


 
