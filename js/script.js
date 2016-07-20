$(document).ready(function(){
  var expand = "+";
  var collapse = "–";

  $(".btn-expand").click(function(){



    $(".collapsable").toggle();
    $(".expandable").toggle();

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
});
