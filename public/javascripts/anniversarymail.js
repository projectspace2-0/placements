$(document).ready(function(){
$("#anniversarymail").click(function(){   
$.post('/anniversarymail').done(function(data, textStatus, jqXHR){
     }).fail(function(){

        });
     });    
$("#vcanniversarymail").click(function(){   
$.post('/vcanniversarymail').done(function(data, textStatus, jqXHR){
     }).fail(function(){

        });
     });   
  }); 