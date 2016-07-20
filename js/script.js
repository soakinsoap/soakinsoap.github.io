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
    $(".email").text("morganchrisp@gmail.com");
    $(".email").css('cursor','default');
  });

});
