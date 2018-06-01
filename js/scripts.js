$(document).ready(function() {
  $("#questionaire").submit(function(event){
    event.preventDefault();

    var frontOrBack = $("input:radio[name=question1]:checked").val();
    var webOrSoftware = $("input:radio[name=question2]:checked").val();
    var businessOrAndroid = $("input:radio[name=question3]:checked").val();
    var startupOrEstablished = $("input:radio[name=question4]:checked").val();
    var mobileOrEnterprise = $("input:radio[name=question5]:checked").val();

    if(frontOrBack === "front"){
      $(".suggested-track").text("Design");
      $("#class-link").attr("href", "https://www.epicodus.com/design");
    } else{

    }

    $("#suggestion").show();
  });

});
