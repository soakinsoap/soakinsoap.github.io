$(document).ready(function(){
  var expand = "+";
  var collapse = "–";

  $(".btn-expand").click(function(){



    $(".collapsable").slideToggle(200);
    $(".expandable").slideToggle(200);

    var button = $(".btn-expand");

    if(button.text() == collapse){
      console.log("collapse");
      button.text(expand);
    }
    else{
      console.log("expand");
      button.text(collapse);
    }
  });

  $(".email").click(function(){
    $(".email").text("");
    $(".email-hide").text("m@morganhyland.com");
    $(".email-hide").css('display','initial');
    $(".email-hide").css('cursor','default');

  });

  var emailText = $(".email").text();

  if(emailText == "m@morganhyland.com"){
    $(".email").click(function(){
      window.location = "mailto:m@morganhyland.com";
    });
  }

});
