$(document).ready(function(){
	alert("hi");
for (var i=1; i<8; i++)
{
    var c=0;
$('.phdr').each( function(){
        c++;
});
  
$('#phdr').html(c.toLocaleString('en-IN'));
}
});