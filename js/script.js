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
    $(".email-hide").text("morganchrisp@gmail.com");
    $(".email-hide").css('display','initial');
    $(".email-hide").css('cursor','default');

  });

  var emailText = $(".email").text();

  if(emailText == "morganchrisp@gmail.com"){
    $(".email").click(function(){
      window.location = "mailto:morganchrisp@gmail.com";
    });
  }

});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-68901207-1', 'auto');
ga('send', 'pageview');
