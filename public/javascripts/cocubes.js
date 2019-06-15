$(document).ready(function(){
  alert('hi')
  $('#find').click(function(){
    var No={};
      No['No']=$("#No").val(); 
      alert(JSON.stringify(No));
    $.post("/cocubes",No).done(function(data1, textStatus, jqXHR) 
    {
      $("#No").val("");
      for(var i=0;i<data1.length;i++)
      {
        $(".No").append("<tr><td>"+data1[i].No+"</td></tr>");
      }          
    }).fail(function(jqXHR, textStatus, errorThrown) 
    {
      alert('network connection busy try again');
    });

    $(".update").show();
  });
});