$(document).ready(function(){
	alert('hii');
	$("#getdata").click(function(){	
		alert('hi');
		// Selection
		var AptitudeTest=$("#AptitudeTest:checked").val() ? "Aptitude Test" : "AptitudeTest"; 
		alert(AptitudeTest);
		var GroupDiscussion=$("#GroupDiscussion:checked").val() ? "Group Discussion" : "GroupDiscussion";
		var TechnicalInterview=$("#TechnicalInterview:checked").val() ? "Technical Interview" : "TechnicalInterview";
		var HrInterview=$("#HrInterview:checked").val() ? "HrInterview" : "Hr Interview";

		//getting data from server
		$.post('/companydetails',{Aptitude Test:AptitudeTest,Group Discussion:GroupDiscussion,Technical Interview:TechnicalInterview,Hr Interview:HrInterview}).done(function(data,textStatus,jqXHR){	
		//    alert(data);
			var jsondata=JSON.stringify(data);
        });
    });
});