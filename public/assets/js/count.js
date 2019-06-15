$(document).ready(function(){
for (var i=1; i<8; i++)
{
    var c=0;
$('.std').each( function(){
        c++;
});
  
$('#std').html(c.toLocaleString('en-IN'));
}
for (var i=1; i<8; i++)
{
    var c=0;
$('.app').each( function(){
        c++;
});
  
$('#app').html(c.toLocaleString('en-IN'));
}
for (var i=1; i<8; i++)
{
    var c=0;
$('.ele').each( function(){
        c++;
});
  
$('#ele').html(c.toLocaleString('en-IN'));
}
for (var i=1; i<8; i++)
{
    var c=0;
$('.pla').each( function(){
        c++;
});
  
$('#pla').html(c.toLocaleString('en-IN'));
}
});