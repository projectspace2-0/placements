var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  var $this = $(this),
    $state = $this.find('button > .state');
  var email=$('#email').val();
var em={email:email};

$.post('/checkMail',em).done(function(data, textStatus, jqXHR){

  if(data=='success'){

      if (working) return;
  working = true;
 
    var $spinner=$this.find('button > i');
    $spinner.addClass('spinner');
  $this.addClass('loading');
  $state.html('Sending...');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Password has been sent!');
    setTimeout(function() {
    $('#lg').show();
    $Log.html('Go to login page');

      $this.removeClass('ok loading');
      working = false;

    }, 4000);
  }, 3000);

    $.post('/sendEmail',em).done(function(data, textStatus, jqXHR){
    }).fail(function(jqXHR, textStatus, errorThrown){
      alert("Network connection busy, Please try again");

    });

  }
  else
  {
    $('#t').text(data);

  }
  }).fail(function(jqXHR, textStatus, errorThrown){

});

});