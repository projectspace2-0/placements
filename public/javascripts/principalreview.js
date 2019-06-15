$(document).ready(function(){
      $('#promote').click(function(){
      var member_id=$(".approved").attr("id");
      var StaffName=$(".approved1").attr("id");
      var email=$(".approved2").attr("id");
      var status="principalApproved";
      var number={"member_id":member_id,
      				"StaffName":StaffName,
      				'email':email,
              'message':"Promoted By Principal",
              "status":status

  				};
      $.post("/appraisalform/directReviewSubmit",number);
      location.reload(true);
      });
       $('#reject').click(function(){
        var status="principalRejected";
      var member_id=$(".rejected").attr("id");
      var StaffName=$(".rejected1").attr("id");
      var email=$(".rejected2").attr("id");
      var number={"member_id":member_id,
      				"StaffName":StaffName,
      				'email':email,
              'message':"Rejected By Principal",
              "status":status

  				}
      $.post("/appraisalform/directReviewSubmit",number);


      });

      });
